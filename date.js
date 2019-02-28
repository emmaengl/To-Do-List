//jshint esversion:6

module.exports = getDate;

function getDate() {
  let today = new Date();
  let options = {
    weekday: "long",
    month: "long",
    day: "2-digit"
  };

  let day = today.toLocaleDateString("en-US", options);

  return day;
}
