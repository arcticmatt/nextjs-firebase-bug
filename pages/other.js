import Head from "next/head";
import Link from "next/link";
import myFirebase from "../src/myFirebase";
import { useEffect } from "react";

export default function Other() {
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

      <main>Other Page</main>
      <Link href="/"><button>Main</button></Link>
    </div>
  );
}

