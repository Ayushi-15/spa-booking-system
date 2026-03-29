import {
  getSlotIndex,
  getTopPosition,
  getHeight,
  generateTimeSlots,
} from "../utils/timeUtils";

const BookingBlock = ({ booking }) => {
  const times = generateTimeSlots();

  const slotIndex = getSlotIndex(booking.startTime, times); //slot index

  const top = getTopPosition(slotIndex);  //calculate position

  const height = getHeight(booking.duration);  //calculate height

  return (
    <div
      style={{
        position: "absolute",
        top: top,
        left: "5px",
        right: "5px",
        height: height,
        background: "#90caf9",
        borderRadius: "6px",
        padding: "5px",
        fontSize: "12px",
        boxSizing: "border-box",
        overflow: "hidden",
      }}
    >
      <div><strong>{booking.customer}</strong></div>
      <div>{booking.service}</div>
      <div>{booking.startTime}</div>
    </div>
  );
};

export default BookingBlock;