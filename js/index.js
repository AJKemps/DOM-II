// Your code goes here

console.log('project is up');

// Nav Buttons
const homeButton = document.querySelector('nav:nth-of-type(1) a');

// 1 Turns text blue on click of Home and stop propagation
homeButton.addEventListener('click', function() {
    document.body.style.color = "blue";
    console.log('home button clicked for blue text');
    event.stopPropagation();
});

// 2 Turns text red on click anywhere
document.addEventListener('click', function() {
    document.body.style.color = "red";
    console.log('clicked anywhere for red text')
    event.stopPropagation();
});

// 3 Text turns black on dblclick anywhere
document.addEventListener('dblclick', function() {
    if (document.body.style.color = "") {
        document.body.style.color = 'black';
    }
    console.log('dblclick anywhere for black text')
});

// 4 Removes bus image
function removeBus(event) {
    if (event.key === 'r') {
        document.querySelector('.intro  img').style.display = "none";
        console.log('"r" button hit, bus pic removed');
    }
}

document.addEventListener('keydown', removeBus); 

// 5 Adds bus image
function addBus(event) {
    if (event.key === 'a') {
        document.querySelector('.intro  img').style.display = "";
        console.log('"a" button hit, bus pic added');
    }
}

document.addEventListener('keydown', addBus);

// 6 Changes text to purple on mouseover
function purpleText(event) {
        event.target.style.color = "purple";
        event.stopPropagation();
}

document.addEventListener('mouseover', purpleText);

// 7 Changes text back to black on mouseout
function blackText(event) {
    event.target.style.color = "black";
        event.stopPropagation();
}

document.addEventListener('mouseout', blackText);
