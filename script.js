let eventList = [];

document.addEventListener("DOMContentLoaded", function() {
    const createEventBtn = document.getElementById("create-event-btn");
    const eventForm = document.getElementById("event-form");
    const eventListElement = document.getElementById("event-list");

    createEventBtn.addEventListener("click", function(event) {
        event.preventDefault();
        const eventName = document.getElementById("event-name").value;
        const eventDate = document.getElementById("event-date").value;
        const eventTime = document.getElementById("event-time").value;
        const eventLocation = document.getElementById("event-location").value;

        const newEvent = {
            name: eventName,
            date: eventDate,
            time: eventTime,
            location: eventLocation
        };

        eventList.push(newEvent);
        displayEvents();
        eventForm.reset();
    });

    function displayEvents() {
        eventListElement.innerHTML = "";
        eventList.forEach(function(event) {
            const eventHTML = `
                <li>
                    <h3>${event.name}</h3>
                    <p>Date: ${event.date}</p>
                    <p>Time: ${event.time}</p>
                    <p>Location: ${event.location}</p>
                </li>
            `;
            eventListElement.innerHTML += eventHTML;
        });
    }
});