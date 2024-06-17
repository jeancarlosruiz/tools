import { Mulish } from "next/font/google";
import styles from "./page.module.css";
import PxConvertion from "@/components/pxConvertion/pxConvertion";

const mulish = Mulish({ subsets: ["latin"], weight: ["700"] });

function Home() {
  return (
    <main className={`app-container ${styles.main}`}>
      <header className={styles.wrapper}>
        <h1 className={mulish.className}> PX converter</h1>
        <p>Convert your px values to any option available.</p>
      </header>
      <PxConvertion />
    </main>
  );
}

export default Home;
