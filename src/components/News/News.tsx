import { FC, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import NewsList from "./NewsList";
import SelectNews from "./SelectNews";
import SelectSourceNews from "./SelectSourceNews";
interface NewsProps {}

// component that render a selector and list of news with pagination
export const News: FC<NewsProps> = () => {
  return (
    <div className="px-[150px]">
      {/* All or fives Selector */}
      <SelectNews />

      {/* Source of the news selector*/}
      <SelectSourceNews />

      {/* Display the news */}
      <NewsList />
    </div>
  );
};
