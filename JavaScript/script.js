function updateTime() {
  let losAngelesElement = document.querySelector("#los-angeles");
  let addisAbabaElement = document.querySelector("#addis-ababa");
  let losAngelesDateElement = losAngelesElement.querySelector(".date");
  let losAngelesTimeElement = losAngelesElement.querySelector(".time");

  let addisAbabaDateElement = addisAbabaElement.querySelector(".date");
  let addisAbabaTimeElement = addisAbabaElement.querySelector(".time");

  let losAngelesTime = moment().tz("America/Los_Angeles");
  losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY");
  losAngelesTimeElement.innerHTML = losAngelesTime.format(
    "h:mm:ss [<small>]A[</small>] "
  );

  let addisAbabaTime = moment().tz("Africa/Addis_Ababa");
  addisAbabaDateElement.innerHTML = addisAbabaTime.format("MMMM Do YYYY");
  addisAbabaTimeElement.innerHTML = addisAbabaTime.format(
    "h:mm:ss [<small>]A[</small>] "
  );
}
updateTime();
setInterval(updateTime, 1000);
