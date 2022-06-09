import { FC } from "react";

interface SelectSourceNewsProps {}

const SelectSourceNews: FC<SelectSourceNewsProps> = () => {
  return (
    //   idk how to minimize the className for better view.....
    <div className="w-[240px] h-[32px] mb-[38px]">
      <select
        className="form-select form-select-sm appearance-none block w-full px-2 py-1 text-sm font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        aria-label=".form-select-sm example"
      >
        <option selected>Select yout news</option>
        <option value="Angular">Angular</option>
        <option value="ReactJs">Reacts</option>
        <option value="Vuejs">Vuejs</option>
      </select>
    </div>
  );
};

export default SelectSourceNews;
