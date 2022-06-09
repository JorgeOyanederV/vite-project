import { FC } from "react";
import { News } from "./News/News";
import { Title } from "./Title";

interface HomeProps {}

// main page
const Home: FC<HomeProps> = () => {
  return (
    <div className="w-screen h-screen bg-home">
      <Title />
      <News />
    </div>
  );
};

export default Home;
