window.onload = function(){

setTimeout(function(){

document.getElementById("loader").style.opacity="0";

setTimeout(function(){

document.getElementById("loader").style.display="none";

},1000);

},1500);

};
// ===============================
// LOADER
// ===============================

window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    loader.style.opacity = "0";
    loader.style.visibility = "hidden";
});

// ===============================
// JAM DIGITAL
// ===============================

function updateClock() {

    const now = new Date();

    const jam = String(now.getHours()).padStart(2, "0");
    const menit = String(now.getMinutes()).padStart(2, "0");
    const detik = String(now.getSeconds()).padStart(2, "0");

    const clock = document.getElementById("clock");

    if(clock){
        clock.innerHTML = `🕒 ${jam}:${menit}:${detik} WIB`;
    }

}

setInterval(updateClock,1000);

updateClock();


// ===============================
// ANIMASI SCROLL
// ===============================

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

});

document.querySelectorAll(".hidden").forEach((el)=>{

    observer.observe(el);

});