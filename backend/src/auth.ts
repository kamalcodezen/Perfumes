import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { client, database } from "./db.js";

export const auth = betterAuth({
  database: mongodbAdapter(database, {
    client,
  }),

  emailAndPassword: {
    enabled: true,
  },

  user: {
    additionalFields: {
      role: {
        type: "string",
        required: false,
        defaultValue: "user",
      },
    },
  },

  // Trusted Origins-এ লোকালহোসট ও Vercel URL
  trustedOrigins: [
    process.env.CLIENT_URL || "https://perfume-opal-sigma.vercel.app",
    "http://localhost:5173",
  ],

  //  Vercel Cross-Site Cookie Fix 
  advanced: {
    useSecureCookies: process.env.NODE_ENV === "production",
    defaultCookieAttributes: {
      sameSite: "none", // ভিন্ন ডোমেইনের মধ্যে কুকি শেয়ার করতে এটি দরকার
      secure: true, // HTTPS ব্রাউজারের জন্য বাধ্যতামূলক
    },
  },
});
