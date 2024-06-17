import Link from 'next/link';
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from '@/components/ui/dropdown-menu';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

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
        <h1 className={mulish.className}> PX converter</h1>
        {/* <DropdownMenu>
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
        </DropdownMenu> */}
      </div>
      <p>Convert your px values to any option available</p>

      <section>
        {/* <h2>Px to Rem</h2> */}
        <Select defaultValue='px-rem'>
          <SelectTrigger className={styles.selectTrigger}>
            <SelectValue placeholder='Select a convertion' />
          </SelectTrigger>
          <SelectContent className={styles.selectContent}>
            <SelectItem value='px-rem' className={styles.selectItem}>
              PX to Rem
            </SelectItem>
            <SelectItem value='px-em' className={styles.selectItem}>
              PX to EM
            </SelectItem>
            <SelectItem value='px-percentage' className={styles.selectItem}>
              PX to Percentage
            </SelectItem>
            <SelectItem value='unit-px' className={styles.selectItem}>
              Base unit to PX converter
            </SelectItem>
          </SelectContent>
        </Select>
        <div className={styles.inputWrapper}>
          <Label htmlFor='conveter-input'>Pixels</Label>
          <Input id='conveter-input' type='number' className={styles.input} />
        </div>
        <div className={styles.codeBox}>
          3rem
          <Button size='icon' className={styles.button}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 16 16'
              width='20'
              height='20'
              role='img'
              aria-labelledby='copy-icon'
              className={styles.svg}
            >
              <title id='copy-icon'>Copy to the clipboard</title>
              <path d='M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25Z'></path>
              <path d='M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z'></path>
            </svg>
          </Button>
        </div>
      </section>
    </main>
  );
}

export default Home;
