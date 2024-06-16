import Link from 'next/link';
import { Mulish } from 'next/font/google';
import styles from './page.module.css';

const mulish = Mulish({ subsets: ['latin'], weight: ['700'] });

export default function Home() {
  return (
    <main className={`app-container ${styles.main}`}>
      <h1 className={mulish.className}>Everyday tools!</h1>
      <p>Frontend edition!</p>

      <section className={styles.section}>
        <nav className={styles.navegation}>
          <Link href='/px-converter' className={styles.link}>
            PX converter
          </Link>
          <Link href='/clamp' className={styles.link}>
            Responsive Font Sizing
            {/* Fluid Typography */}
            {/* Fluid Calculator */}
          </Link>
        </nav>
      </section>
    </main>
  );
}
