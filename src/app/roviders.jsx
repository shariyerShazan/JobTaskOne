"use client";

import { SessionProvider } from "next-auth/react";
import SessionSync from "../../components/SessionSync";


export default function Providers({ children }) {
  return (
    <SessionProvider>
      <SessionSync />
      {children}
    </SessionProvider>
  );
}
