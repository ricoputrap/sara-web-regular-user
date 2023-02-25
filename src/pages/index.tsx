import Head from 'next/head'
import styles from '@/styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>SARA - Dashboard</title>
        <meta name="description" content="Dashboard is a web page where all main operations in S.A.R.A are being managed by all regular users (e.g. staff of Housekeeping Departments or Concierge). Starting from the creation of a new request to its closing is managed on this page. Below are some user stories that underlie the development of this web page." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        Dashboard
      </main>
    </>
  )
}
