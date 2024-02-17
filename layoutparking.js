var _171 = document.getElementById('171');
var _172 = document.getElementById('172');
var _173 = document.getElementById('173');
var _174 = document.getElementById('174');
var _175 = document.getElementById('175');
var _176 = document.getElementById('176');
var _177 = document.getElementById('177');
var _178 = document.getElementById('178');
var _179 = document.getElementById('179');
var _180 = document.getElementById('180');

var _181 = document.getElementById('181');
var _182 = document.getElementById('182');
var _183 = document.getElementById('183');
var _184 = document.getElementById('184');
var _185 = document.getElementById('185');
var _186 = document.getElementById('186');
var _187 = document.getElementById('187');
var _188 = document.getElementById('188');
var _189 = document.getElementById('189');
var _190 = document.getElementById('190');
var _191 = document.getElementById('191');

var _192 = document.getElementById('192');
var _193 = document.getElementById('193');
var _194 = document.getElementById('194');
var _195 = document.getElementById('195');
var _196 = document.getElementById('196');
var _197 = document.getElementById('197');
var _198 = document.getElementById('198');
var _199 = document.getElementById('199');
var _200 = document.getElementById('200');

var _201 = document.getElementById('201');
var _202 = document.getElementById('202');
var _203 = document.getElementById('203');

var _204 = document.getElementById('204');
var _205 = document.getElementById('205');
var _206 = document.getElementById('206');

var _207 = document.getElementById('207');
var _208 = document.getElementById('208');
var _209 = document.getElementById('209');
var _210 = document.getElementById('210');
var _211 = document.getElementById('211');
var _212 = document.getElementById('212');
var _213 = document.getElementById('213');
var _214 = document.getElementById('214');

var select1 = document.getElementsByClassName('grid_item')


var bike = document.getElementById('bikebutton')
var car = document.getElementById('carbutton')
// const button = document.getElementById("myButton");

// const duration = 2000; // Change the duration in milliseconds as needed
// let startTime = 0;

// var inittime = document.getElementById('inittime')
// var fintime = document.getElementById('fintime')

function calculateTimeDiff() {
    const startTimeStr = document.getElementById("inittime").value;
    const endTimeStr = document.getElementById("fintime").value;

    // Check if values are entered
    if (!startTimeStr || !endTimeStr) {
        document.getElementById("timeDiff").textContent =
            "Please enter both times.";
        return;
    }

    // Convert time strings to Date objects
    const startTime = new Date();
    const endTime = new Date();
    startTime.setHours(
        startTimeStr.slice(0, 2),
        startTimeStr.slice(3, 5),
        0,
        0
    );
    endTime.setHours(endTimeStr.slice(0, 2), endTimeStr.slice(3, 5), 0, 0);

    // Calculate time difference in milliseconds
    const timeDiffMs = endTime.getTime() - startTime.getTime();
}


// const timeInput = document.getElementById("timeDiffMs");
const timeInput = timeDiffMs;
const button = document.getElementById("myButton");

button.addEventListener("click", () => {
    const targetTime = new Date().setHours(
        timeInput.value.slice(0, 2),
        timeInput.value.slice(3, 5),
        0,
        0
    );

    const intervalId = setInterval(() => {
        const currentTime = new Date();
        if (currentTime >= targetTime) {
            button.style.backgroundColor = "red"; // Change the color as needed
            clearInterval(intervalId);
        }
    }, 1000); // Check every second
});

// Check for stored startTime on page load
const storedTime = localStorage.getItem("startTime");
if (storedTime) {
    startTime = parseInt(storedTime);
    const elapsedTime = Date.now() - startTime;
    if (elapsedTime < duration) {
        button.style.backgroundColor = "green"; // Change the color as needed
        setTimeout(() => {
            button.style.backgroundColor = "initial";
            startTime = 0;
            localStorage.removeItem("startTime");
        }, duration - elapsedTime);
    }
}
