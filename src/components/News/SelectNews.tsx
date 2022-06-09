import { FC } from "react";

interface SelectNewsProps {}

const SelectNews: FC<SelectNewsProps> = () => {
  return (
    <div className="pt-[70px] flex justify-center pb-[63px]">
      <button className="w-[98px] h-[31px] pt-[3px] pr-[39px] pl-[40px] border rounded-l-[2px] font-bold text-[#1797ff]">
        <p className="text-sm">All</p>
      </button>
      <button className="w-[98px] h-[31px] pt-[3px] pr-[16px] pl-[17px] border rounded-r-[2px] font-bold text-[#1797ff]">
        <p className="text-sm">My faves</p>
      </button>
    </div>
  );
};

export default SelectNews;
