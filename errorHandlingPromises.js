// error handling in promises
const reserveTable = () => {
  return new Promise((resolve, reject) => {
    const error = Math.random() > 0.5 ? "Restaurant is fully booked" : null;
    if (error) {
      reject(error);
    } else {
      resolve("Table reserved");
    }
  });
};

reserveTable()
  .then((success) => console.log(success))
  .catch((error) => console.error("Oops!", error));
