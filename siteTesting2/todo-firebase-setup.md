# Firebase Setup - TODO for Future Use

## Firebase Configuration (Commented Out)

### 1. Firebase Dependencies
```json
// Add these to package.json when ready to use Firebase
"firebase": "^10.5.0",
"firebase-admin": "^11.11.0"
```

### 2. Firebase Configuration File
```typescript
// lib/firebase.ts - Restore when ready to use Firebase
import { initializeApp, getApps, getApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAnalytics } from 'firebase/analytics'

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
}

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore(app)
let analytics: any = null
if (typeof window !== 'undefined' && firebaseConfig.measurementId) {
  analytics = getAnalytics(app)
}

export { db, analytics }
export default app
```

### 3. Environment Variables for Firebase
```bash
# Add these to .env.local when ready to use Firebase
NEXT_PUBLIC_FIREBASE_API_KEY=your-api-key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
NEXT_PUBLIC_FIREBASE_APP_ID=your-app-id
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=your-measurement-id
```

### 4. Firebase Contact Form Handler
```typescript
// pages/api/contact-firebase.ts - Firebase version for future use
import { db } from '@/lib/firebase'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'

// Save to Firestore
const docRef = await addDoc(collection(db, 'contactSubmissions'), {
  fullName: sanitizeInput(fullName),
  email: sanitizeInput(email),
  phoneNumber: phoneNumber ? sanitizeInput(phoneNumber) : undefined,
  companyName: companyName ? sanitizeInput(companyName) : undefined,
  subject: sanitizeInput(subject),
  message: sanitizeInput(message),
  timestamp: serverTimestamp(),
  ipAddress: getRateLimitKey(req),
  status: 'pending' as const
})
```

### 5. Firebase Setup Steps
1. Create Firebase project at https://console.firebase.google.com
2. Enable Firestore Database
3. Set up authentication (if needed)
4. Add Firebase config to environment variables
5. Update API endpoint to use Firebase instead of email
6. Test form submissions

### 6. Firebase Benefits for Future
- Real-time database updates
- Easy lead management dashboard
- Scalable NoSQL storage
- Built-in security rules
- Analytics integration
- Offline support

### 7. Migration Notes
When ready to switch to Firebase:
1. Uncomment Firebase dependencies in package.json
2. Restore lib/firebase.ts configuration
3. Update pages/api/contact.ts to use Firebase code
4. Add Firebase environment variables
5. Test form submissions 