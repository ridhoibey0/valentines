let noClicks = 0;
const maxNoClicks = 5;
const minNoScale = 0.65;
let noScale = 1;
let yesButtonSize = noClicks * 20 + 16; // This now tracks the scaling factor directly
const gifElement = document.getElementById("togepi-gif");
const noButton = document.getElementById("no-btn");
const yesButton = document.getElementById("yes-btn");
const buttonContainer = document.querySelector(".btn-container");
const yesButtonStyle = window.getComputedStyle(yesButton);
const maxYesWidth = parseFloat(yesButtonStyle.maxWidth);
const section1 = document.getElementById("section-1");
const section2 = document.getElementById("section-2");

// array of gifs - in order
const gifs = ["https://media.tenor.com/sWXhCC4A2woAAAAm/bubu-bubu-dudu.webp", "https://media.tenor.com/sWXhCC4A2woAAAAm/bubu-bubu-dudu.webp", "https://media.tenor.com/vQKbLu6Y2WQAAAAM/crying-sad.gif", "https://media.tenor.com/ZDEFutgpw6YAAAAm/milk-and-mocha.webp", "https://media.tenor.com/yZoKXA08ZyYAAAAm/bubu-bubu-dudu.webp"];
// array of messages
const buttonMessages = [
    "No",
    "Are you sure?",
    "Really sure?",
    "Think again!",
    "Last chance!",
    "Surely not?",
    "You might regret this!",
    "Give it another thought!",
    "Are you absolutely certain?",
    "This could be a mistake!",
    "Have a heart!",
    "Don't be so cold!",
    "Change of heart?",
    "Wouldn't you reconsider?",
    "Is that your final answer?",
    "You're breaking my heart ;(",
    "Is that your final answer?",
    "You're breaking my heart ;(",
    "Plsss? :( You're breaking my heart",
  ];

// no button clicked
noButton.addEventListener("click", () => {
    noClicks++;
    if (noClicks < maxNoClicks) {
        // change image
        gifElement.src = gifs[noClicks];
    }
    noButton.textContent = buttonMessages[Math.min(noClicks, buttonMessages.length - 1)]
    yesButtonSize = noClicks * 20 + 16; // Perbarui ukuran dulu
    yesButton.style.fontSize = `${yesButtonSize}px`; // Terapkan ukuran baru
});

yesButton.addEventListener("click", () => {
    section1.classList.add("hidden");
    section2.classList.remove("hidden")
})
