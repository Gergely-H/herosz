import type { GoogleAuthOptions } from "google-auth-library";
import { google } from "googleapis";
import "server-only";

const googleAuthOptions: GoogleAuthOptions = {
  credentials: JSON.parse(process.env.CREDENTIALS || ""),
  scopes: ["https://www.googleapis.com/auth/drive"],
};

const auth = new google.auth.GoogleAuth(googleAuthOptions);

export default auth;
