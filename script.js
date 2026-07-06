// ==============================
// Birthday Website Script ❤️
// ==============================

// Show a welcome message in the browser console
console.log("Happy Birthday! ❤️");

// Create floating hearts
function createHeart() {

    const heart = document.createElement("div");

    heart.innerHTML = "💖";

    heart.classList.add("heart");

    heart.style.left = Math.random() * window.innerWidth + "px";

    heart.style.animationDuration = (Math.random() * 3 + 3) + "s";

    heart.style.fontSize = (Math.random() * 15 + 20) + "px";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 6000);
}

// Make a new heart every 500 milliseconds
setInterval(createHeart, 500);

// Simple surprise popup (we'll use this later)
function surpriseMessage() {

    alert("💖 You found a secret! I love you ❤️");

}

// Smooth scroll (for future pages)
function scrollToTop() {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

}// ===============================
// Photo Gallery Popup
// ===============================

function openImage(image){

const popup=document.getElementById("popup");

const popupImg=document.getElementById("popup-img");

popup.style.display="flex";

popupImg.src=image.src;

}

function closeImage(){

document.getElementById("popup").style.display="none";

}
// =========================
// LETTER PAGE
// =========================

const message = `

Happy Birthday, my love ❤️
I honestly don't think words will ever be enough to tell you how much you mean to me. 
Right now we're on a call and im mad at you right now, all i do is complain no? ok bro.
I'm not that mad anymore but i still didn't like your comment.
You're nineteen years old, holy shit gramps. Look at me, i'm so young eheheheheheh. 
I think birthday's are a good day to celebrate yourself only if it's with the right people. 
I hope you have your set of right people whom you want to spend your day with. 
Even if you don't always remember i'll always be here for you.
Even if i can't be with you physically on any birthday, I won't make you feel alone on that day.
I love you so much and this birthday onwards I want you to have a great birthday every year. 
Right now I'm on a video call with you right now, and you're just staring at me lmfao.
You're a really nice person. I love that you're my boyfriend. You put in a lot of efforts that guys usually don't.
I feel proud that you're my boyfriend and 


`;

let i = 0;

function typeWriter(){

const text=document.getElementById("typing");

if(i<message.length){

text.innerHTML+=message.charAt(i);

i++;

setTimeout(typeWriter,35);

}else{

document.getElementById("nextButton").style.display="inline-block";

}

}

function openLetter(){

document.getElementById("bgMusic").play();

document.getElementById("envelope").style.display="none";

document.getElementById("letter").style.display="block";

typeWriter();

}