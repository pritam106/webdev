import React from 'react'
import styles from '../styles/Navbar.module.css'
import Link from 'next/link'
const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link href="/">PR0DUCTI0N_G@!!ēry</Link>
      <ul className={styles.List}>
        <li className={styles.ListItem}>
          <Link href="/products/design">DESIGN</Link>
          </li>
        <li className={styles.ListItem}>
        <Link href="/products/development">DEVELOPMENT</Link>
        </li>
        <li className={styles.ListItem}>
        <Link href="/products/production">PRODUCTION</Link>
        </li>
        <li className={styles.ListItem}>
        <Link href="/products/photography">PHOTOGRAPHY</Link>
        </li>
        <li className={styles.ListItem}>
        <Link href="/products/contact">CONTACT</Link>
       </li>
      </ul>
    </div>
  )
}

export default Navbar