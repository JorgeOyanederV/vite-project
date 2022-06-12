import { FC, useEffect } from "react";
import { useSelector } from "react-redux";
import NewsList from "./NewsList";
import SelectNews from "./SelectNews";
import SelectSourceNews from "./SelectSourceNews";

// component that render a selector and list of news with pagination
export const News: FC = () => {
  const { selectedNews, faves } = useSelector((state) => state.news);

  useEffect(() => {
    localStorage.setItem("faves", JSON.stringify(faves));
  }, [faves]);

  return (
    <div className="px-[150px]">
      {/* All or fives Selector */}
      <SelectNews />

      {/* Source of the news selector*/}
      {selectedNews === "all" && <SelectSourceNews />}

      {/* Display the news */}

      <NewsList />
    </div>
  );
};
