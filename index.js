function updateUTCTime() {
  const utcTimeElement = document.querySelector(".utc-time");

  // Get current UTC time
  const now = new Date();
  const options = {
    weekday: "long",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  };

  const formattedDateParts = new Intl.DateTimeFormat(
    "en-US",
    options
  ).formatToParts(now);
  const weekday = formattedDateParts.find(
    (part) => part.type === "weekday"
  ).value;
  const month = formattedDateParts.find((part) => part.type === "month").value;
  const year = formattedDateParts.find((part) => part.type === "year").value;
  const formattedDate = `${weekday}, ${month} ${year}`;

  let hours = now.getUTCHours() + 1;
  let minutes = now.getUTCMinutes().toString().padStart(2, "0");
  let seconds = now.getUTCSeconds().toString().padStart(2, "0");
  let ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12; // Converts to 12-hour format

  const formattedTime = `${hours}:${minutes}:${seconds} ${ampm}`;

  // Displays formatted date and time
  utcTimeElement.textContent = `${formattedDate}, ${formattedTime}`;
}

window.onload = updateUTCTime;
