"use client";

import { useSession } from "next-auth/react";
import { useEffect } from "react";

export default function SessionSync() {
  const { data: session } = useSession();

  useEffect(() => {
    if (session?.user) {
      const { id, name, email, profilePicture } = session.user;
      localStorage.setItem("user", JSON.stringify({ id, name, email, profilePicture }));
    } else {
      localStorage.removeItem("user");
    }
  }, [session]);

  return null;
}
