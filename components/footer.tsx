import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'

const Footer: NextPage = () => {
  return (
    <footer className={styles.footer}>
      <a
        href="https://oktaviardi.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className={styles.logo}>
          oktaviardi.com
        </span>
      </a>
    </footer>
  )
}

export default Footer
