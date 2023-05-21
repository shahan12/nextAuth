import "./taskview.css";
const Tasks = ({ header, time, place }) => {
  const finalStyles = header.includes("Meeting") ? "#9BDD7C" : "#6972C3";
  return (
    <>
      <div
        className="tasks-wrapper"
        style={{ borderLeft: `5px solid ${finalStyles}` }}
      >
        <div className="tasks-header">{header}</div>
        <div className="task-time">{time}</div>
        <div className="task-place">at {place}</div>
      </div>
    </>
  );
};

export default Tasks;
