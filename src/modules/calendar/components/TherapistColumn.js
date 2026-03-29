// import { SLOT_HEIGHT } from "../utils/timeUtils";

// const TherapistColumn = () => {
//   return (
//     <div style={{ width: "150px", borderRight: "1px solid #ddd" }}>
//       {Array.from({ length: 48 }).map((_, index) => (
//         <div
//           key={index}
//           style={{
//             height: SLOT_HEIGHT,
//             borderBottom: "1px solid #eee",
//             boxSizing: "border-box",
//           }}
//         />
//       ))}
//     </div>
//   );
// };

// export default TherapistColumn;

import { SLOT_HEIGHT } from "../utils/timeUtils";
import BookingBlock from "./BookingBlock";

const TherapistColumn = ({ bookings }) => {
  return (
    <div
      style={{
        width: "150px",
        borderRight: "1px solid #ddd",
        position: "relative", // 🔥 IMPORTANT
      }}
    >
      {/* 🔥 GRID */}
      {Array.from({ length: 48 }).map((_, index) => (
        <div
          key={index}
          style={{
            height: SLOT_HEIGHT,
            borderBottom: "1px solid #eee",
            boxSizing: "border-box",
          }}
        />
      ))}

      {bookings.map((booking, index) => (
        <BookingBlock key={index} booking={booking} />
      ))}
    </div>
  );
};

export default TherapistColumn;