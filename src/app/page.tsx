"use client"
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const data = useSession()

  console.log(data)
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Logged In Status : {data.status}
      <br />
      Logged In As     :{data.data?.user.email}:{data.data?.user.type}

      <p>
        <button onClick={() => signOut()}>Sign Out</button> <br></br>
        <Link href={"/auth/login"}>Login</Link>
      </p>
    </main>
  );
}
