import TimeColumn from "./TimeColumn";
import TherapistColumn from "./TherapistColumn";
import { HEADER_HEIGHT } from "../utils/timeUtils";

const therapists = ["Chacha", "James", "Laksa", "Lily", "Mozza", "Nina"];

const bookingsData = {
  Chacha: [
    {
      startTime: "10:00",
      duration: 60,
      customer: "Amit",
      service: "Massage",
    },
  ],
  James: [
    {
      startTime: "9:15",
      duration: 45,
      customer: "John",
      service: "Spa",
    },
  ],
  Laksa: [],
  Lily: [],
  Mozza: [],
  Nina: [],
};

const CalendarBoard = () => {
  return (
    <div>
      {/* HEADER */}
      <div style={{ display: "flex" }}>
        <div style={{ width: "80px", height: HEADER_HEIGHT }} />

        {therapists.map((t, index) => (
          <div
            key={index}
            style={{
              width: "150px",
              height: HEADER_HEIGHT,
              borderRight: "1px solid #ddd",
              borderBottom: "1px solid #ccc",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: "bold",
              background: "#fafafa",
              boxSizing: "border-box",
            }}
          >
            {t}
          </div>
        ))}
      </div>

      <div style={{ display: "flex" }}>
        <TimeColumn />

        {therapists.map((t, index) => (
          <TherapistColumn
            key={index}
            bookings={bookingsData[t] || []}
          />
        ))}
      </div>
    </div>
  );
};

export default CalendarBoard;