
// There were issues that occured when I tried to use jQuery.
// To demonstrate that my understanding of jQuery, 
// I will create a line of code for each section using jQuery


// Create the elements for each text area for each time
// jQuery: 
// var T800 = $("#T800")
var T800 = document.querySelector("#T800");
var T900 = document.querySelector("#T900");
var T1000 = document.querySelector("#T1000");
var T1100 = document.querySelector("#T1100");
var T1200 = document.querySelector("#T1200");
var T1300 = document.querySelector("#T1300");
var T1400 = document.querySelector("#T1400");
var T1500 = document.querySelector("#T1500");
var T1600 = document.querySelector("#T1600");
var T1700 = document.querySelector("#T1700");
var T1800 = document.querySelector("#T1800");
var T1900 = document.querySelector("#T1900");
var T2000 = document.querySelector("#T2000");
var T2100 = document.querySelector("#T2100");
var T2200 = document.querySelector("#T2200");

// Set each time, text area and button to an object to organize and associate each element to the timeslot
var timeInfo = [{
        time: 8,
        textId:"T800",
        text:T800,
        button:".TB800",
    },{
        time: 9,
        textId:"T900",
        text:T900,
        button:".TB900",
    },{
        time: 10,
        textId:"T1000",
        text:T1000,
        button:".TB1000",
    },{
        time: 11,
        textId:"T1100",
        text:T1100,
        button:".TB1100",
    },{
        time: 12,
        textId:"T1200",
        text:T1200,
        button:".TB1200",
    },{
        time: 13,
        textId:"T1300",
        text:T1300,
        button:".TB1300",
    },{
        time: 14,
        textId:"T1400",
        text:T1400,
        button:".TB1400",
    },{
        time: 15,
        textId:"T1500",
        text:T1500,
        button:".TB1500",
    },{
        time: 16,
        textId:"T1600",
        text:T1600,
        button:".TB1600",
    },{
        time: 17,
        textId:"T1700",
        text:T1700,
        button:".TB1700",
    },{
        time: 18,
        textId:"T1800",
        text:T1800,
        button:".TB1800",
    },{
        time: 19,
        textId:"T1900",
        text:T1900,
        button:".TB1900",
    },{
        time: 20,
        textId:"T2000",
        text:T2000,
        button:".TB2000",
    },{
        time: 21,
        textId:"T2100",
        text:T2100,
        button:".TB2100",
    },{
        time: 22,
        textId:"T2200",
        text:T2200,
        button:".TB2200",
    }
]

// Use moment to get the current time of the day and return the day, month, year and time
var timeOfDay = moment().format("ddd, MMMM Do YYY, h:mm:ss a");

// Associate the current time with the element that displays the time
// jQuery: 
// var currentDay = $("currentDay")
// currentDay.text(timeOfDay)
var currentDay = document.getElementById("currentDay")
currentDay.innerText = timeOfDay

// Use moment to get the current time of the day and return only the hour (0-23)
var timeHour = moment().format("H")

// run the initial functions
init();

function init(){
    // if there are any elements in the local storage, load them
    loadLocalStorage()
    // check the time associated with the element to the current time and change the classes to display the correct text area color
    timeCheck();
};

function loadLocalStorage(){
    for(var y=0; y < timeInfo.length; y++){
        // 1) look for the the value "timeInfo[y].textId" or "T800" in the local storage
        // 2) then assign the local storage information to the "queryselected element"
        timeInfo[y].text.value = localStorage.getItem(`${timeInfo[y].textId}`)
    }
}

// Use compare the time slot hours "timeInfo[i].time" to the current time hour and assign the correct class/background color
// jQuery: timeInfo[i].text.addClass("past")
function timeCheck(){
    for(var i=0; i < timeInfo.length; i++){
        if (timeInfo[i].time < timeHour){
            timeInfo[i].text.classList.add("past")
        } else if (timeInfo[i].time == timeHour){
            timeInfo[i].text.classList.add("present")
        } else if (timeInfo[i].time > timeHour){
            timeInfo[i].text.classList.add("future")
        }
    }
}

// create an event listener for each timebutton
// when the button is clicked, store the contents in the text area to the local storage with the name "T800"
document.querySelector(timeInfo[0].button).addEventListener("click",function(event){
    event.preventDefault();
    lsVar = timeInfo[0].textId;
    lsVal = timeInfo[0].text.value;
    localStorage.setItem(lsVar,lsVal)
})

document.querySelector(timeInfo[1].button).addEventListener("click",function(event){
    event.preventDefault();
    lsVar = timeInfo[1].textId;
    lsVal = timeInfo[1].text.value;
    localStorage.setItem(lsVar,lsVal)
})

document.querySelector(timeInfo[2].button).addEventListener("click",function(event){
    event.preventDefault();
    lsVar = timeInfo[2].textId;
    lsVal = timeInfo[2].text.value;
    localStorage.setItem(lsVar,lsVal)
})

document.querySelector(timeInfo[3].button).addEventListener("click",function(event){
    event.preventDefault();
    lsVar = timeInfo[3].textId;
    lsVal = timeInfo[3].text.value;
    localStorage.setItem(lsVar,lsVal)
})

document.querySelector(timeInfo[4].button).addEventListener("click",function(event){
    event.preventDefault();
    lsVar = timeInfo[4].textId;
    lsVal = timeInfo[4].text.value;
    localStorage.setItem(lsVar,lsVal)
})

document.querySelector(timeInfo[5].button).addEventListener("click",function(event){
    event.preventDefault();
    lsVar = timeInfo[5].textId;
    lsVal = timeInfo[5].text.value;
    localStorage.setItem(lsVar,lsVal)
})

document.querySelector(timeInfo[6].button).addEventListener("click",function(event){
    event.preventDefault();
    lsVar = timeInfo[6].textId;
    lsVal = timeInfo[6].text.value;
    localStorage.setItem(lsVar,lsVal)
})

document.querySelector(timeInfo[7].button).addEventListener("click",function(event){
    event.preventDefault();
    lsVar = timeInfo[7].textId;
    lsVal = timeInfo[7].text.value;
    localStorage.setItem(lsVar,lsVal)
})

document.querySelector(timeInfo[8].button).addEventListener("click",function(event){
    event.preventDefault();
    lsVar = timeInfo[8].textId;
    lsVal = timeInfo[8].text.value;
    localStorage.setItem(lsVar,lsVal)
})

document.querySelector(timeInfo[9].button).addEventListener("click",function(event){
    event.preventDefault();
    lsVar = timeInfo[9].textId;
    lsVal = timeInfo[9].text.value;
    localStorage.setItem(lsVar,lsVal)
})

document.querySelector(timeInfo[10].button).addEventListener("click",function(event){
    event.preventDefault();
    lsVar = timeInfo[10].textId;
    lsVal = timeInfo[10].text.value;
    localStorage.setItem(lsVar,lsVal)
})

document.querySelector(timeInfo[11].button).addEventListener("click",function(event){
    event.preventDefault();
    lsVar = timeInfo[11].textId;
    lsVal = timeInfo[11].text.value;
    localStorage.setItem(lsVar,lsVal)
})

document.querySelector(timeInfo[12].button).addEventListener("click",function(event){
    event.preventDefault();
    lsVar = timeInfo[12].textId;
    lsVal = timeInfo[12].text.value;
    localStorage.setItem(lsVar,lsVal)
})

document.querySelector(timeInfo[13].button).addEventListener("click",function(event){
    event.preventDefault();
    lsVar = timeInfo[13].textId;
    lsVal = timeInfo[13].text.value;
    localStorage.setItem(lsVar,lsVal)
})

document.querySelector(timeInfo[14].button).addEventListener("click",function(event){
    event.preventDefault();
    lsVar = timeInfo[14].textId;
    lsVal = timeInfo[14].text.value;
    localStorage.setItem(lsVar,lsVal)
})
