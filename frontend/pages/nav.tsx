import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import HomeDescription from "../components/homeDescription";
import HeadComponent from "../components/Head";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <HeadComponent title={'Learn Nextjs'} metaData={'Learn nextjs by tutorials'} />
      <main className={styles.main}>
        <HomeDescription />
      </main>
    </div>
  )
}

export default Home
