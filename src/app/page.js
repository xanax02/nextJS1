import Header from "@/components/header/Header";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <h1>Hello WOrld</h1>
    </main>
  );
}
