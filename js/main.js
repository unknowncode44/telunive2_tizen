'use strict';

var movies = [{
        name: 'falcon and the winter soldier',
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit porro et veniam excepturi, eaque voluptatem impedit nulla laboriosam facilis ut laboriosam libero!',
        image: 'assets/img/slider 2.PNG'
    },
    {
        name: 'loki',
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit porro et veniam excepturi, eaque voluptatem impedit nulla laboriosam facilis ut laboriosam libero!',
        image: 'assets/img/slider 1.PNG'
    },
    {
        name: 'wanda vision',
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit porro et veniam excepturi, eaque voluptatem impedit nulla laboriosam facilis ut laboriosam libero!',
        image: 'assets/img/slider 3.PNG'
    },
    {
        name: 'raya and the last dragon',
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit porro et veniam excepturi, eaque voluptatem impedit nulla laboriosam facilis ut laboriosam libero!',
        image: 'assets/img/slider 4.PNG'
    },
    {
        name: 'luca',
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit porro et veniam excepturi, eaque voluptatem impedit nulla laboriosam facilis ut laboriosam libero!',
        image: 'assets/img/slider 5.PNG'
    },

];


//var checkTime;

//Initialize function
var init = function() {
    // TODO:: Do your initialization job
    console.log('init() called');

    document.addEventListener('visibilitychange', function() {
        if (document.hidden) {
            // Something you want to do when hide or exit.
        } else {
            // Something you want to do when resume.
        }
    });

    // add eventListener for keydown
    document.addEventListener('keydown', function(e) {
        switch (e.keyCode) {
            case 37: //LEFT arrow
                break;
            case 38: //UP arrow
                break;
            case 39: //RIGHT arrow
                break;
            case 40: //DOWN arrow
                break;
            case 13: //OK button
                break;
            case 10009: //RETURN button
                tizen.application.getCurrentApplication().exit();
                break;
            default:
                console.log('Key code : ' + e.keyCode);
                break;
        }
    });
};
// window.onload can work without <body onload="">
window.onload = init;

//function startTime() {
//    var today = new Date();
//    var h = today.getHours();
//    var m = today.getMinutes();
//    var s = today.getSeconds();
//    m = checkTime(m);
//    s = checkTime(s);
//    document.getElementById('divbutton1').innerHTML = 'Current time: ' + h + ':' + m + ':' + s;
//    setTimeout(startTime, 10);
//}
//
//function checkTime(i) {
//    if (i < 10) {
//        i = '0' + i;
//    }
//    return i;
//}


// #### CAROUSEL ####

const carousel = document.querySelector('.carousel');

let sliders = [];

let slideIndex = 0;

function createSlide() {

    if (slideIndex >= movies.lenght) {
        slideIndex = 0;
    }

    //creating DOM elements
    let slide = document.createElement('div');
    let imgElement = document.createElement('img');
    let content = document.createElement('div');
    let h1 = document.createElement('h1');
    let p = document.createElement('p');

    //attaching elements
    imgElement.appendChild(document.createTextNode(''));
    p.appendChild(document.createTextNode(movies[slideIndex].des));
    h1.appendChild(document.createTextNode(movies[slideIndex].name));
    content.appendChild(h1);
    content.appendChild(p);
    slide.appendChild(content);
    slide.appendChild(imgElement);
    carousel.appendChild(slide);

    //settingUp image
    imgElement.src = movies[slideIndex].image;
    slideIndex++;



 // setting classses to elementsf
 slide.className = 'slider';
 content.className = 'slide-content';
 h1.className = 'slide-title';
 p.className = 'slide-des';

 sliders.push(slide);

 if (sliders.length) {
     sliders[0].style.marginLeft = 'calc(-' + 100 * (sliders.length - 2) + '% - ' + 30 * (sliders.length - 2) + 'px)';
 }
 
}



for (var i = 0; i >= 3; i++) {
    createSlide();
}

setInterval(function () {
    console.log(slideIndex);
    if (slideIndex <= movies.length - 1) {
        createSlide();
    } else {
        slideIndex = 0;
        createSlide();
    }
}, 6000);
///


var videoCards = document.querySelectorAll('.video-card');

videoCards.forEach(function (item) {
    item.addEventListener('mouseover', function () {
        var video = item.children[1];
        video.play();
    });
    item.addEventListener('mouseleave', function () {
        var video = item.children[1];
        video.pause();
    });
});