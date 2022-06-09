import { FC } from "react";
import heart from "../../assets/iconmonstr-favorite-3@2x.png";
interface NewProps {}

// the rectangle element in the list of the news
export const New: FC<NewProps> = () => {
  return (
    <div className="w-full h-[90px] pl-[26px] flex border border-[#979797] rounded-[6px] ">
      {/* When click on this redirect to the main new post */}
      <div className="flex-1 flex flex-col justify-center">
        <div className="flex flex-row gap-[8px] items-start">
          <i className="h-[5px]">Icono</i>
          <p className="text-[11px]">Hora del post </p>
        </div>
        <p className="text-sm text-justify">
          This is a headless component so there are no styles included by
          default.
        </p>
      </div>

      {/* When click on this add to the local storage */}
      <div className="relative flex-none w-[68px] h-full ml-[16px]">
        <div className="absolute h-full w-full bg-[#606060] opacity-[0.06]"></div>
        <div className="static h-full flex justify-center items-center">
          <img src={heart} alt="heart-full" className="w-[24px] h-[24px]" />
        </div>
      </div>
    </div>
  );
};
