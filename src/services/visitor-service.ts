'use server';

import { firestore } from '@/lib/firebase';
import { FieldValue } from 'firebase-admin/firestore';
import { unstable_cache as cache } from 'next/cache';

/**
 * Increments the visitor count in Firestore and returns the new total.
 * Caches the count to prevent re-fetching on every request during a short window.
 * The increment operation still runs to ensure every visit is counted.
 */
export const incrementVisitorCount = cache(
  async () => {
    // Gracefully handle the case where Firestore is not initialized
    if (!firestore) {
      console.warn("Firestore is not available. Visitor count will not be incremented or fetched.");
      return 0;
    }
    
    const visitorDocRef = firestore.collection('site-stats').doc('visitors');

    try {
      // Use FieldValue.increment to atomically update the counter
      await visitorDocRef.set({ count: FieldValue.increment(1) }, { merge: true });

      // After incrementing, get the new value
      const doc = await visitorDocRef.get();
      
      if (!doc.exists) {
        // This case should ideally not happen after the set operation above
        // but is a good fallback.
        await visitorDocRef.set({ count: 1 });
        return 1;
      }

      return doc.data()?.count || 1;
    } catch (error) {
      console.error("Error incrementing visitor count:", error);
      // In case of an error, we don't want to break the page load.
      // We can return 0 or attempt to get the current count without incrementing.
      // For now, returning 0 signals an issue but keeps the site up.
      return 0;
    }
  },
  ['visitor_count'], // Cache key
  {
    revalidate: 5, // Revalidate every 5 seconds
    tags: ['visitor-count'], // Cache tag for manual revalidation if needed
  }
);
