import Image from "next/image";
import SeeMore from "../../../public/Vectormore-icon.png";
import "./dateSelector.css";

const DateSelector = ({ start, end, year }) => {
  return (
    <>
      <span className="date-selector-container">
        {start}-{end} {year}
        <div className="date-selector-img">
          <Image className="rotate-see-more" src={SeeMore}></Image>
        </div>
      </span>
    </>
  );
};
export default DateSelector;
