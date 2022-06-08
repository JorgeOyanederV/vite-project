import { FC } from "react";
import { News } from "./News";
import { Title } from "./Title";

interface HomeProps {}

// the main page
const Home: FC<HomeProps> = () => {
  return (
    <>
      <Title />
      <News />
    </>
  );
};

export default Home;
