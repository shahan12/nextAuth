import "./schedule.css";
import SeeMore from "../../../public/Vectormore-icon.png";
import Image from "next/image";
import Tasks from "../taskVeiw/taskview";
const Schedule = () => {
  return (
    <>
      <div className="user-schedules-wrapper">
        <div className="schedules-section-1">
          <h3 className="schedule-header">Today’s schedule</h3>
          <div className="schedule-header-sell-all">
            <span className="schedule-see-all-text">See All</span>
            <div className="see-more-image">
              <Image src={SeeMore}></Image>
            </div>
          </div>
        </div>
        <div className="schedule-task-wrapper">
          <Tasks
            header="Meeting with suppliers from Kuta Bali"
            time="14.00-15.00"
            place="at Sunset Road, Kuta, Bali "
          />
          <Tasks
            header="Check operation at Giga Factory 1"
            time="18.00-20.00"
            place="at Central Jakarta"
          />
        </div>
      </div>
    </>
  );
};
export default Schedule;
