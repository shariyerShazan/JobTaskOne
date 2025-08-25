"use client";

import { useSession } from "next-auth/react";
import { useEffect } from "react";

export default function SessionSync() {
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === "loading") return;

    if (status === "authenticated" && session?.user) {
      const { id, name, email, image } = session.user;
      localStorage.setItem(
        "user",
        JSON.stringify({ id, name, email, profilePicture: image })
      );
    } else {
      localStorage.removeItem("user");
    }
  }, [session, status]);

  return null;
}
