import Head from 'next/head'
import Footer from '../comps/Footer'
import Navbar from '../comps/Navbar'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>HomePage</h1>
      <p>Lorem</p>
      <Link href="/ninjas">
        <a>See Ninja Listing</a>
      </Link>
    </div>
  )
}
