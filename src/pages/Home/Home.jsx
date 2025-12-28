import { Suspense } from "react";
import Hero from "../../components/Hero/Hero";
import Books from "../Books/Books";
import Loading from "../../components/Loading/Loading";
const booksPromise = fetch("../../../public/booksData.json").then((res) =>
  res.json()
);
const Home = () => {
  return (
    <div>
      <Hero />
      <Suspense fallback={<Loading />}>
        <Books booksPromise={booksPromise} />
      </Suspense>
    </div>
  );
};

export default Home;
