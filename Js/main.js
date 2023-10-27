const cancel = document.querySelector("#cancel")
const side_bar = document.querySelector(".left-side");
let bars = document.getElementById("barsContent");

bars.addEventListener("click", function () {
    side_bar.style.left = "0";
})
cancel.addEventListener("click", function () {
    side_bar.style.left = "-100%";
})

/* buttoun up */
let up = document.getElementById("up");
if (up !== null) {
    window.onscroll = function scr() {
        if (window.scrollY > 200) {
            up.style = "display:block";
        }
        else {
            up.style = "display:none";
        }
    }
    up.onclick = function () {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    }
}

/* calc total price*/
const price = document.querySelector(".total-price");
const student_price = document.querySelector(".student-price");
const other_price = document.querySelector(".other-price");
const numPeopleSelect = document.getElementById("num-people");
if (numPeopleSelect !== null) {
    numPeopleSelect.addEventListener("change", () => {
        const numPeople = numPeopleSelect.value;
        localStorage.setItem("price", numPeople);
    });
}
if (price !== null) {
    const number_other = localStorage.getItem("price");
    price.innerHTML = "";
    price.innerHTML = (parseInt(student_price.innerHTML) + parseInt(number_other) * parseInt(other_price.innerHTML)) + '$';
}