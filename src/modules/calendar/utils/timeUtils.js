
export const SLOT_HEIGHT = 40;
export const HEADER_HEIGHT = 50;
export const SLOT_INTERVAL = 15;

export const generateTimeSlots = () => {
  return Array.from({ length: 48 }, (_, i) => {
    const hour = Math.floor(i / 4) + 9;
    const minutes = (i % 4) * SLOT_INTERVAL;

    return `${hour}:${minutes === 0 ? "00" : minutes}`;
  });
};


export const getSlotIndex = (time, times) => {   //time to slotindex
  return times.indexOf(time);
};


export const getTopPosition = (slotIndex) => {   //calculate top position 
  return slotIndex * SLOT_HEIGHT;
};

export const getHeight = (duration) => {           // calculate height from min
  const slots = duration / SLOT_INTERVAL;
  return slots * SLOT_HEIGHT;
};