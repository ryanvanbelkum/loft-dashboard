const admin = require("firebase-admin");
const serviceAccount = require("./loft-82248-abd347101945.json");
console.log(admin.apps.length)
const app = !admin.apps.length
  ? admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  })
  : admin.app();


export default app
