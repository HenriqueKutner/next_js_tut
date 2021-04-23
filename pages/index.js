import Head from 'next/head'
import Footer from '../comps/Footer'
import Navbar from '../comps/Navbar'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <h1 className={styles.title}>HomePage</h1>
      <p className={styles.text}>Lorem</p>
      <Link href="/ninjas">
        <a className={styles.tbn}>See Ninja Listing</a>
      </Link>
    </div>
  )
}
