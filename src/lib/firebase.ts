
import * as admin from 'firebase-admin';

const serviceAccount = process.env.FIREBASE_SERVICE_ACCOUNT_JSON
  ? JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_JSON)
  : null;

if (!admin.apps.length) {
  if (serviceAccount) {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    });
  } else {
    // Initialize for local development or environments without service account JSON
    // Assumes GOOGLE_APPLICATION_CREDENTIALS is set or ADC is configured.
    console.warn("Firebase Service Account JSON not found, initializing with default credentials. This is expected for local development.");
    admin.initializeApp();
  }
}

export const firestore = admin.firestore();
