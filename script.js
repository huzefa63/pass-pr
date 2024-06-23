let input = document.querySelector("input");
let openEye = document.getElementById("open-eye");
let closeEye = document.getElementById("close-eye");

openEye.addEventListener("click" , () => {
    input.setAttribute("type" , "text");
    openEye.style.display = "none";
    closeEye.style.display = "flex";
})

closeEye.addEventListener("click" , () => {
    input.setAttribute("type" , "password");
    closeEye.style.display = "none";
    openEye.style.display = "flex";

})
