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
I honestly don't think words will ever be enough to tell you how much you mean to me. Right now we're on a call and im mad at you right now, all i do is complain no? ok bro. I'm not that mad anymore but i still didn't like your comment. You're nineteen years old, holy shit gramps. Look at me, i'm so young eheheheheheh. I think birthday's are a good day to celebrate yourself only if it's with the right people. I hope you have your set of right people whom you want to spend your day with. Even if you don't always remember i'll always be here for you. Even if i can't be with you physically on any birthday, I won't make you feel alone on that day. I love you so much and this birthday onwards I want you to have a great birthday every year. Right now I'm on a video call with you right now, and you're just staring at me lmfao. You're a really nice person. I love that you're my boyfriend. You put in a lot of efforts that guys usually don't. I feel proud that you're my boyfriend and i'm really grateful for you. I honestly love how you are as a person. I love that you're so kind and I wish to be more like you. You make me feel so loved that i finally understand what real love is. I told you i'm making something that's gonna take days but i dont need days for this. I don't need days to show you how much i love you. You're such a kind human but sometimes you can be a lil naive but that's okay, njn nokkikolaam hehe. I want to take care of you George. I've always been stubborn about taking care of someone and i've always wanted to be taken care of. But with you it feels like i want to protect you from every little thing and just look after you. i even want to cook for you for God's sake knowing that it would probably make you happy. I genuinely love you so much, i love loving you da. I'm really grateful about us. I love and thank God for putting us together. I want this to work out and I'm going to do my best for it and I don't even need to ask you cause i know you will as well. I'm so confident with you in this relationship. Like i feel endhayalum aa oru orapp ind, we'll get through it. It's only been 6 months but eniky aa orappy ondo about you. I really love you George, my George. I hope you have an amazing birthday babyyy. Hopefully you've gotten my gifts lmao and we get to meet. Even if we don't it's completely alright. Ninak endh preshnam ondengil ende aduth vaa nammak ellam orumich sheri aakam. Whatever it may be never hesistate to ask me, we'll always figure it out whatever it may be. I love you so much and I love being in love with you. 
HAVE AN EPIC BIRTHDAY MY G. TAKE CARE MWAHHHH <333333. GOD BLESS YOUU NGA HEHE


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