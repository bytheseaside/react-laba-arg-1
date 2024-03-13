import Head from 'next/head';
import { getPhotos } from '../utils/photos';
import { PictureGrid } from '../components';

import styles from '../styles/Main.module.css';

export async function getStaticProps() {
  const INITIAL_IMAGES_AMOUNT = 5;

  const data = await getPhotos(INITIAL_IMAGES_AMOUNT);

  return {
    props: {
      data,
    },
    revalidate: 60, // To do an incremental regeneration to reload data each minute
  };
}

export default function Home({ data }) {
  return (
    <div>
      <Head>
        <title>Lecture 21 - CSR - SSR - SSG - NextJS</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.container}>
        <PictureGrid initialData={data} />
      </main>
    </div>
  );
}
