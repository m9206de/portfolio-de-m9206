import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import BrandLogoDark from '../public/assets/Brand/Logo/dark.png'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Portfolio De Manikandan</title>
        <meta name="description" content="Manikandan's Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className='opacity-0'></h1>
        <Image src={BrandLogoDark} width={400} height={400} />
        <h1>Perfecting Pixels & Discovering Dimensions, Enthusiastically.</h1>
      </main>

    </div>
  )
}
