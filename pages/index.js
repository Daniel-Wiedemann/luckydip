import Head from 'next/head';
import Header from '@components/Header';
import Footer from '@components/Footer';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Lucky Dip App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to Lucky Dip App" />
        <p className="description">Generate random numbers.</p>
        <Link href="/dip">6 of 49</Link>
      </main>

      <Footer />
    </div>
  );
}
