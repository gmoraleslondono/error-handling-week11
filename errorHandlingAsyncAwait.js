// error handling in async/await
const reserveTable = async () => {
  const error = Math.random() > 0.5 ? "Restaurant is fully booked" : null;
  if (error) {
    throw new Error(error);
  } else {
    return "Table reserved";
  }
};

const makeReservation = async () => {
  try {
    const message = await reserveTable();
    console.log(message);
  } catch (error) {
    console.error("Oops!", error.message);
  }
};

makeReservation();
