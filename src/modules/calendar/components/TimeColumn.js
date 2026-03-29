import { generateTimeSlots, SLOT_HEIGHT } from "../utils/timeUtils";

const TimeColumn = () => {
  const times = generateTimeSlots();

  return (
    <div style={{ width: "80px", borderRight: "1px solid #ddd" }}>
      {times.map((time, index) => (
        <div
          key={index}
          style={{
            height: SLOT_HEIGHT,
            borderBottom: "1px solid #eee",
            boxSizing: "border-box",
            fontSize: "12px",
            padding: "4px",
          }}
        >
          {time}
        </div>
      ))}
    </div>
  );
};

export default TimeColumn;