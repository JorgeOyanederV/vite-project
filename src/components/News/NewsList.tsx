import { FC, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { New } from "./New";
import NewsPagination from "./NewsPagination";
import { NewFave } from "../../types";

const NewsList: FC = () => {
  const { news, faves, selectedNews } = useSelector((state) => state.news);
  const [activeNews, setActiveNews] = useState<NewFave[]>([]);

  useEffect(() => {
    if (selectedNews === "faves") {
      setActiveNews(faves);
    }
    if (selectedNews === "all") {
      setActiveNews([]);
    }
  }, [selectedNews]);

  useEffect(() => {
    setActiveNews(news);
  }, [news]);

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-[30px]">
        {activeNews.map((activeNew: NewFave) => {
          return <New _new={activeNew} key={activeNew.objectID} />;
        })}
      </div>

      <NewsPagination />
    </div>
  );
};

export default NewsList;
