import { FC } from "react";

interface TitleProps {}

// the title of the main page
export const Title: FC<TitleProps> = () => {
  return (
    <>
      <div>Selector of Faves</div>
      <select>Selector of the source of the news</select>
      <div>Items with Pagination I think...</div>
    </>
  );
};
