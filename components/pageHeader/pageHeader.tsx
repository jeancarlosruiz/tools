import { Outfit } from "next/font/google";
import styles from "./pageHeader.module.css";
import { PageHeaderProps } from "@/types";

const outfit = Outfit({ subsets: ["latin"], weight: ["700"] });

const PageHeader = ({ title, description }: PageHeaderProps) => {
  return (
    <header className={styles.wrapper}>
      <h1 className={outfit.className}>{title}</h1>
      <p>{description && description}</p>
    </header>
  );
};

export default PageHeader;
