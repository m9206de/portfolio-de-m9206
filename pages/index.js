import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Portfolio De Manikandan</title>
        <meta name="description" content="Manikandan's Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Portfolio De Manikandan
        </h1>

        <p className={styles.description}>
          Under Construction...
        </p>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h2>Design &rarr;</h2>
            <p> Take a look at my design projects and their case studies</p>
          </div>

          <div className={styles.card}>
            <h2>Development &rarr;</h2>
            <p>I develop websites too, and here is the list. Would love a star on GitHub</p>
          </div>

          <div
            className={styles.card}
          >
            <h2>Blogs &rarr;</h2>
            <p>And sometimes I write about some amazing stuff I found to share it with the world.</p>
          </div>

          <div
            className={styles.card}
          >
            <h2>Social &rarr;</h2>
            <p>
              Let us Connect, Do follow and message me first.
            </p>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>
          With Love, Manikandan
        </p>
      </footer>
    </div>
  )
}
