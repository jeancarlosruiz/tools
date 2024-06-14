import { Mulish } from "next/font/google";
import styles from "./page.module.css";

const mulish = Mulish({ subsets: ["latin"], weight: ["700"] });

export default function Home() {
  return (
    <main className={`app-container ${styles.main}`}>
      <h1 className={mulish.className}>Everyday tools!</h1>
      <p>Frontend edition!</p>
    </main>
  );
}
