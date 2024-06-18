import { Mulish } from "next/font/google";
import styles from "./pageHeader.module.css";
import { PageHeaderProps } from "@/types";

const mulish = Mulish({ subsets: ["latin"], weight: ["700"] });

function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <header className={styles.wrapper}>
      <h1 className={mulish.className}>{title}</h1>
      <p>{description && description}</p>
    </header>
  );
}

export default PageHeader;
