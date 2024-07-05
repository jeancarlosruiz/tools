import Link from 'next/link'
import styles from './page.module.css'
import PageHeader from '@/components/pageHeader/pageHeader'

export default function Home() {
  return (
    <main className={`app-container ${styles.main}`}>
      <PageHeader title="Everyday tools!" />
      <section className={styles.section}>
        <nav className={styles.navegation}>
          <Link href="/px-converter" className={styles.link}>
            PX converter
          </Link>
          <Link href="/clamp" className={styles.link}>
            Responsive Font Sizing
          </Link>
          <Link href="/js-playground" className={styles.link}>
            Js Playground
          </Link>
        </nav>
      </section>
    </main>
  )
}
