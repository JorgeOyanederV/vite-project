import { FC } from "react";
import logo from "../assets/hacker-news.png";
interface TitleProps {}

// the title of the main page
export const Title: FC<TitleProps> = () => {
  return (
    <div className="shadow-title bg-title py-[44px] px-[150px]">
      <img src={logo} className="w-[208px] y-[28px]" />
    </div>
  );
};
