// Get all shuttles with the 'shuttle' class
const shuttles = document.querySelectorAll('.shuttle');
const bubbles = document.querySelectorAll('.b');

console.log(bubbles);


// Call the function to restart the animation for each shuttle after a certain time (e.g., 15 seconds)
shuttles.forEach((shuttle) => {
    shuttle.onanimationend = () => {
        // document.querySelector('.bubbles').removeChild(shuttle)
        // Generate a new random --i variable
        const newI = Math.floor(Math.random() * (23 - 8 + 1) + 8);
        // Create a new i element
        shuttle.style.setProperty('--i', newI);
        shuttle.classList.remove("shuttle");
        void shuttle.offsetWidth;
        shuttle.classList.add("shuttle");
        // shuttle.className = 'fa-solid fa-shuttle-space';
        // shuttle.className = 'shuttle fa-solid fa-shuttle-space';

        // Append the new element to the .bubbles container
        // document.querySelector('.bubbles').appendChild(newShuttle);
    }
});

bubbles.forEach((bub) => {
    bub.onanimationend = () => {
        console.log('bubble animation');
        
        // document.querySelector('.bubbles').removeChild(shuttle)
        // Generate a new random --i variable
        const newI = Math.floor(Math.random() * (23 - 8 + 1) + 8);
        // Create a new i element
        bub.style.setProperty('--i', newI);
        bub.classList.remove("b");
        void bub.offsetWidth;
        bub.classList.add("b");
        // shuttle.className = 'fa-solid fa-shuttle-space';
        // shuttle.className = 'shuttle fa-solid fa-shuttle-space';

        // Append the new element to the .bubbles container
        // document.querySelector('.bubbles').appendChild(newShuttle);
    }
});
