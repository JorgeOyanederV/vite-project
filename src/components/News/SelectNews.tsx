import { FC, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setActiveNews } from "../../actions/news";

interface SelectNewsProps {}

const SelectNews: FC<SelectNewsProps> = () => {
  const [active, setActive] = useState("all");
  const dispatch = useDispatch();

  useEffect(() => {
    const _active = localStorage.getItem("active");

    if (!!_active) {
      setActive(_active);
      dispatch(setActiveNews(_active));
    }
  }, []);

  const handleClickAll = () => {
    setActive("all");
    localStorage.setItem("active", "all");
    dispatch(setActiveNews("all"));
  };

  const handleClickFaves = () => {
    setActive("faves");
    localStorage.setItem("active", "faves");
    dispatch(setActiveNews("faves"));
  };

  return (
    <div className="pt-[70px] flex justify-center pb-[63px]">
      <button
        className={
          "w-[98px] h-[31px] pt-[3px] pr-[39px] pl-[40px] border rounded-l-[2px] font-bold " +
          `${
            active === "all"
              ? "text-[#1797ff]"
              : "text-[#606060] border-[#d6d6d6]"
          }`
        }
        onClick={handleClickAll}
      >
        <p className="text-sm">All</p>
      </button>
      <button
        className={
          "w-[98px] h-[31px] pt-[3px] pr-[16px] pl-[17px] border rounded-r-[2px] font-bold " +
          `${
            active === "faves"
              ? "text-[#1797ff]"
              : "text-[#606060] border-[#d6d6d6]"
          }`
        }
        onClick={handleClickFaves}
      >
        <p className="text-sm">My faves</p>
      </button>
    </div>
  );
};

export default SelectNews;
