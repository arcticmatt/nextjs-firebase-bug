import Head from "next/head";
import Link from "next/link";
import myFirebase from "../src/myFirebase";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // Call this to enable default logging (e.g. logging of page_view events).
    myFirebase();
  }, []);

  return (
    <div className="container">
      <Head>
        <title>Firebase Bug</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>Main Page</main>
      <Link href="/other"><button>Other</button></Link>
    </div>
  );
}
