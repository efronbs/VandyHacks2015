<<<<<<< HEAD
// var startTime;

// document.addEventListener('DOMContentLoaded', function() 
// {
//   startTime = new Date().getTime();
// });

// document.addEventListener('onbeforeunload', function() 
// {
//   elapsedTime = new Date().getTime() - startTime;
// });

// chrome.tabs.onCreated.addListener(function () {
//   var queryInfo = {
//     active: true,
//     currentWindow: true
//   };

//   chrome.tabs.query(queryInfo, function(tabs) 
//   {
//     var activeTab = tabs[0];
//     console.log(activeTab);
//     if (activeTab.url === "https://news.ycombinator.com/")
//     {
//       var arr = [], l = activeTab.document.links
//       for(var i=0; i<l.length; i++) 
//       {
//         arr.push(l[i].href);
//       }
//       console.log(l);
//     }
//   })
// });
=======
var arr = [], l = document.links;
for(var i=0; i<l.length; i++) {
  arr.push(l[i].href);
}

var h1 = document.getElementsByTagName('h1')[0],
    start = document.getElementById('start'),
    stop = document.getElementById('stop'),
    clear = document.getElementById('clear'),
    seconds = 0, minutes = 0, hours = 0,
    t;

function add() {
    seconds++;
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
        if (minutes >= 60) {
            minutes = 0;
            hours++;
        }
    }
    
    h1.textContent = (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);

    timer();
}
function timer() {
    t = setTimeout(add, 1000);
}
timer();


/* Start button */
start.onclick = timer;

/* Stop button */
stop.onclick = function() {
    clearTimeout(t);
}

/* Clear button */
clear.onclick = function() {
    h1.textContent = "00:00:00";
    seconds = 0; minutes = 0; hours = 0;
}
>>>>>>> f7cb075c1828cac08c5c5e259d46fdcf114bc9fd
