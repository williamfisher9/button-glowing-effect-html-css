const signinBtn = document.querySelector(".btn1");
const signupBtn = document.querySelector(".btn2");

const signinDiv = document.querySelector(".signin");
const signupDiv = document.querySelector(".signup");

signinBtn.addEventListener("click", () => {
    signinDiv.style.transform = "translateX(0)";
    signinDiv.style.transition = "0.5s"
    signupDiv.style.transform = "translateX(400px)";
});

signupBtn.addEventListener("click", () => {
    signupDiv.style.transform = "translateX(0)";
    signupDiv.style.transition = "0.5s"
    signinDiv.style.transform = "translateX(-400px)";
});