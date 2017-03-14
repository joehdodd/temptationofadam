var minutes = 0;
var secondsOf2017 = (new Date().getTime() - Date.parse('01-01-2017')) / 1000;
var rate = 139;
var totalMinutes = Math.floor(secondsOf2017 * rate / 60);

updateNumbers = function() {
  minutes += 139;
  totalMinutes += 139;

  $("#minutes").html(minutes); // Since Page Landing Counter
  $("#totalMinutes").html(totalMinutes); // Since New Year Counter
}

setInterval(updateNumbers, 1000);
