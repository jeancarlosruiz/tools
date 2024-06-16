import Link from 'next/link';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

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

      <div className={styles.wrapper}>
        <DropdownMenu>
          <h1 className={mulish.className}> PX converter</h1>
          <DropdownMenuTrigger className={styles.button}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 16 16'
              width='20'
              height='20'
              role='img'
              aria-labelledby='menu-icon'
              className={styles.svg}
            >
              <title id='menu-icon'>Converter options</title>
              <path d='M1 2.75A.75.75 0 0 1 1.75 2h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 2.75Zm0 5A.75.75 0 0 1 1.75 7h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 7.75ZM1.75 12h12.5a.75.75 0 0 1 0 1.5H1.75a.75.75 0 0 1 0-1.5Z'></path>
            </svg>
          </DropdownMenuTrigger>
          <DropdownMenuContent className={styles.dropdownMenuContent}>
            <DropdownMenuLabel>Converter options</DropdownMenuLabel>
            <DropdownMenuSeparator className={styles.dropdownMenuSeparator} />

            <div className={styles.dropdownMenuWrapper}>
              <DropdownMenuItem className={styles.dropdownMenuItem}>
                PX to Rem
              </DropdownMenuItem>
              <DropdownMenuItem className={styles.dropdownMenuItem}>
                PX to EM
              </DropdownMenuItem>
              <DropdownMenuItem className={styles.dropdownMenuItem}>
                PX to Percentage
              </DropdownMenuItem>
              <DropdownMenuItem className={styles.dropdownMenuItem}>
                Base unit to PX converter
              </DropdownMenuItem>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <p>Convert your px values to any option available</p>

      <section>
        <div className={styles.inputWrapper}>
          <Label htmlFor='conveter-input'>Pixels</Label>
          <Input id='conveter-input' type='text' className={styles.input} />
        </div>
        <div>3rem</div>
      </section>
    </main>
  );
}

export default Home;
