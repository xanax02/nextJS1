import Header from "@/components/header/Header";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <h1>Hello WOrld</h1>
      <p><Link href={"/blog/post-1"}>Post 1</Link></p>
      <p><Link href={"/blog/post-2"}>Post 2</Link></p>
    </main>
  );
}
