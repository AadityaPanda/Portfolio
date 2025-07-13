
import * as admin from 'firebase-admin';

let app: admin.app | null = null;

try {
  const serviceAccount = process.env.FIREBASE_SERVICE_ACCOUNT_JSON
    ? JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_JSON)
    : null;

  if (admin.apps.length) {
    app = admin.app();
  } else if (serviceAccount) {
    app = admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    });
  } else {
    console.warn("Firebase Service Account JSON not found. Firebase Admin SDK will not be initialized. This is expected for local development if not configured.");
  }
} catch (error) {
  console.error("Error initializing Firebase Admin SDK:", error);
  app = null;
}

export const firestore = app ? admin.firestore() : null;
