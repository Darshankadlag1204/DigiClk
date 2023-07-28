function getTimeOfDay(now) {
	const hours = now.getHours();

	if (hours >= 5 && hours < 8) {
		return 'dawn'; 
	} else if (hours >= 8 && hours < 12) {
		return 'morning'; 
	} else if (hours >= 12 && hours < 17) {
		return 'afternoon'; 
	} else if (hours >= 17 && hours < 20) {
		return 'evening'; 
	} else {
		return 'night'; 
	}
}

function updateClock() {
	const d = new Date();
	const hours = d.getHours();
	const period = hours >= 12 ? 'PM' : 'AM';
	const displayHours = (hours % 12 === 0 ? 12 : hours % 12).toString().padStart(2, '0');
	const minutes = d.getMinutes().toString().padStart(2, '0');
	const seconds = d.getSeconds().toString().padStart(2, '0');
	const timeString = `${displayHours}:${minutes}:${seconds} <span class="period">${period}</span>`;
	const date = d.toDateString();

	document.getElementById('clock').innerHTML = timeString;
	document.getElementById('date').textContent = date; 

	// Set background image based on time of day
	const timeOfDay = getTimeOfDay(d);
	const body = document.body;
	body.style.backgroundImage = `url(background_${timeOfDay}.jpg)`;

	// Set colors for title, clock, and date based on time of day
	const title = document.querySelector('.title');
	const clock = document.querySelector('.clk');
	const dateElement = document.querySelector('.date');

	if (timeOfDay === 'evening' || timeOfDay === 'night') {
		title.style.color = 'white';
		clock.style.color = 'white';
		dateElement.style.color = 'white';
	} else {
		title.style.color = 'black';
		clock.style.color = 'black';
		dateElement.style.color = 'black';
	}
}

// Update the clock every second
setInterval(updateClock, 250);
