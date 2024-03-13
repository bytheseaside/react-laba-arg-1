import { Footer } from "../components/Footer/Footer";
import { GetButton } from "../components/GetButton/GetButton";
import { PhotoContainer } from "../components/PhotoContainer/PhotoContainer";
import { PhotoList } from "../components/PhotoList";
import ErrorBoundary from "../components/ErrorBoundary/ErrorBoundary";
import styles from "../styles/Home.module.css";
import fetchPhoto from "./api/fetchPhoto";

export async function getServerSideProps() {
  const initialValue = 5;
  let data = null;
  try {
    data = await fetchPhoto(initialValue);
  } catch (error) {
    console.error(error.message);
  }
  return { props: { data } };
}

export default function Home({ data }) {
  return (
    <>
      <div className={styles["grid-container"]}>
        {data?.map((photo, idx) => (
          <ErrorBoundary key={photo.id}>
            <PhotoContainer id={photo.id} upstreamData={data[idx]} />
          </ErrorBoundary>
        ))}
        <PhotoList />
        <GetButton />
      </div>
      <Footer />
    </>
  );
}
