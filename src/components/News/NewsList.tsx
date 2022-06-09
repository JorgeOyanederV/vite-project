import { FC } from "react";
import { New } from "./New";
import NewsPagination from "./NewsPagination";

interface NewsListProps {}

const NewsList: FC<NewsListProps> = () => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-x-10 gap-y-[30px]">
        <New />
        <New />
        <New />
        <New />
        <New />
        <New />
        <New />
        <New />
      </div>

      <NewsPagination />
    </div>
  );
};

export default NewsList;
