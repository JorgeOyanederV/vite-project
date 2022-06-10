import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllNews, setSourceNews } from "../../actions/news";

interface SelectSourceNewsProps {}

const SelectSourceNews: FC<SelectSourceNewsProps> = () => {
  const dispatch = useDispatch();
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const source = event.target.value;
    localStorage.setItem("source", source);
    dispatch(setSourceNews(source));
    dispatch(getAllNews(source));
  };

  return (
    //   idk how to minimize the className for better view.....
    <div className="w-[240px] h-[32px] mb-[38px]">
      <select
        className="form-select form-select-sm appearance-none block w-full px-2 py-1 text-sm font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        aria-label=".form-select-sm example"
        onChange={handleChange}
      >
        <option value="DEFAULT">Select yout news</option>
        <option value="angular">Angular</option>
        <option value="reacts">Reacts</option>
        <option value="vuejs">Vuejs</option>
      </select>
    </div>
  );
};

export default SelectSourceNews;
