let num = 0;
let count = document.querySelector(".count");
let goal = document.querySelector(".goal");
let overlay = document.querySelector(".overlay");
let congrts = document.querySelector(".congrts");
let add = document.querySelector(".add");
let menu = document.querySelector(".menu");
let addThkr = document.querySelector(".add-thkr");
let thkrText = document.querySelector(".thkr-text");
let showThkr = document.querySelector(".show-thkr");
let reset = document.querySelector(".reset");

reset.onclick = function () {

    alert("هل أنت متأكد");
    count.innerText = 0;
    num = 0;

}

add.onclick = function () {



    overlay.classList.toggle("show");
    menu.classList.toggle("show");

    addThkr.addEventListener("click", function () {

        overlay.classList.remove("show");
        menu.classList.remove("show");
        
        showThkr.innerText = thkrText.value;
        showThkr.innerText = showThkr.innerText == "" ? "سبحان الله" : showThkr.innerText;

    });
    
};

document.querySelector("#sbha-btn").onclick = function () {

    num++;
    count.innerText = num;

    if (num == goal.value) {
        
        num = 0;

        overlay.classList.add("show");
        congrts.classList.add("show");

        document.querySelector(".continue-btn").onclick = function () {
            
            overlay.classList.remove("show");
            congrts.classList.remove("show");

        };
        
    };

};