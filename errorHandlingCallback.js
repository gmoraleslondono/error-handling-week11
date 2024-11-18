// error handling in useCallback
const reserveTable = (callback) => {
  const error = Math.random() > 0.5 ? "Restaurant is fully booked" : null;
  if (error) {
    callback(error);
  } else {
    callback(null, "Table reserved");
  }
};

reserveTable((error, success) => {
  if (error) {
    console.log("Oops!", error);
  } else {
    console.log(success);
  }
});
