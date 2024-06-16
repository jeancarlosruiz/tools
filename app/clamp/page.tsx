import Link from 'next/link';
import { Mulish } from 'next/font/google';
import styles from './page.module.css';

const mulish = Mulish({ subsets: ['latin'], weight: ['700'] });

function Home() {
  return (
    <main className={`app-container ${styles.main}`}>
      <Link href='/' className={styles.link}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 16 16'
          width='16'
          height='16'
          role='img'
          aria-labelledby='arrow-icon'
          className={styles.svg}
        >
          <title id='arrow-icon'>Go home link</title>
          <path d='M7.78 12.53a.75.75 0 0 1-1.06 0L2.47 8.28a.75.75 0 0 1 0-1.06l4.25-4.25a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042L4.81 7h7.44a.75.75 0 0 1 0 1.5H4.81l2.97 2.97a.75.75 0 0 1 0 1.06Z'></path>
        </svg>
        Home
      </Link>
      <h1 className={mulish.className}>Responsive Font Sizing</h1>
      <p>Make your font-size responsive with this clamp generator 📏</p>

      <section></section>
    </main>
  );
}

export default Home;
