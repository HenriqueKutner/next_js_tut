import Head from 'next/head'
import Footer from '../comps/Footer'
import Navbar from '../comps/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar />
      <h1>HomePage</h1>
      <Footer />
    </div>
  )
}
