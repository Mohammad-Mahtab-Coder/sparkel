const hamburger = document.querySelector("#hamburger");
const hul_list = document.querySelector(".hul-list");

hamburger.addEventListener("click", () => {
    if (hul_list.classList.contains("hul-js")) {
        hul_list.classList.remove("hul-js");
    } else {
        hul_list.classList.add("hul-js");
    }
});

/* Scroll To Top code */
const scrolltotopbtn = document.getElementById("scrolltotopbtn");

window.addEventListener("scroll", () => {
    document.body.scrollTop > 20 || document.documentElement.scrollTop > 20 ? scrolltotopbtn.style.visibility = "visible" : scrolltotopbtn.style.visibility = "hidden";
})

scrolltotopbtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
})