let timeSettings = {
	"hourFormat": true,
	"locale": "EN-us"
}

function handleTimeChange() {
	var d = new Date();
	var day = d.getDay()
	var date = d.getDate();
	var ordinal = "";
	var MonthNum = d.getMonth();
	var year = d.getFullYear();
	var hour = d.getHours(); // 24 hour format
	var minute = d.getMinutes();
	var ampm = "";	// only for 12 hour format

	// 24 to 12 hours format
	if (timeSettings["hourFormat"]){
		if (hour > 11 || hour < 1)
			ampm = "PM";
		else
			ampm = "AM";
		hour = hour % 12;
		if (hour == 0 && ampm == "PM")
			hour = 12
	}

	// ordinal
	if (timeSettings["locale"] == "EN-us"){
		switch(day) {
			case 1:
				ordinal = "st";
				break;
			case 2:
				ordinal = "nd";
				break;
			case 3:
				ordinal = "rd";
				break;
			default:
				ordinal = "nd";
				break;
		}
		switch(day) {
			case 0:
				day = "Sunday";
				break;
			case 1:
				day = "Monday";
				break;
			case 2:
				day = "Tuesday";
				break;
			case 3:
				day = "Wednesday";
				break;
			case 4:
				day = "Thursday";
				break;
			case 5:
				day = "Friday";
				break;
			case 6:
				day = "Saturday";
				break;
		}
	}

	if (document.getElementById("time-hour").innerText != hour) document.getElementById("time-hour").innerText = hour
	if (document.getElementById("time-minute").innerText != minute) document.getElementById("time-minute").innerText = minute
	if (document.getElementById("time-ampm").innerText != ampm) document.getElementById("time-ampm").innerText = ampm
	if (document.getElementById("time-day").innerText != day) document.getElementById("time-day").innerText = day
	if (document.getElementById("time-date").innerText != date) document.getElementById("time-date").innerText = date
	if (document.getElementById("time-ordinal").innerText != ordinal) document.getElementById("time-ordinal").innerText = ordinal
	if (document.getElementById("time-year").innerText != year) document.getElementById("time-year").innerText = year
	if (document.getElementById("time-hour-h").innerText != hour) document.getElementById("time-hour-h").innerText = hour
	if (document.getElementById("time-minute-h").innerText != minute) document.getElementById("time-minute-h").innerText = minute
	if (document.getElementById("time-ampm-h").innerText != ampm) document.getElementById("time-ampm-h").innerText = ampm
}

setInterval(handleTimeChange, 250);