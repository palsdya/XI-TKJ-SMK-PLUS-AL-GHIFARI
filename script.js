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
// ===============================
// UMUR OTOMATIS SISWA
// ===============================

document.querySelectorAll(".umur").forEach(function(item){

    const lahir = new Date(item.dataset.lahir);

    const sekarang = new Date();

    let umur = sekarang.getFullYear() - lahir.getFullYear();

    const bulan = sekarang.getMonth() - lahir.getMonth();

    if(
        bulan < 0 ||
        (bulan === 0 && sekarang.getDate() < lahir.getDate())
    ){
        umur--;
    }

    item.innerHTML = "🎈 " + umur + " Tahun";

});
// ===============================
// ULANG TAHUN TERDEKAT
// ===============================

const siswa = [

{name:"Arshavin Restu Prasetyo",tgl:"2009-11-16"},
{name:"Azdah Alkholdah S",tgl:"2010-02-01"},
{name:"Faris Ilham Shidqi Herlambang",tgl:"2009-11-14"},
{name:"Febry Adie Prakoso",tgl:"2010-02-07"},
{name:"Fiya Nandita Meyra",tgl:"2009-05-13"},
{name:"Muhammad Rifky As Syarif",tgl:"2010-06-25"},
{name:"Surya Rama",tgl:"2010-01-13"},
{name:"Nail Rizqallah Zakaria",tgl:"2009-05-17"},
{name:"Nayna",tgl:"2010-11-24"},
{name:"Nika Cahaya Putri",tgl:"2010-05-17"},
{name:"Putra Dava Adrian",tgl:"2010-02-06"},
{name:"Putra Davi Adrian",tgl:"2010-02-06"},
{name:"Reyhan Erlangga Putra",tgl:"2009-09-29"},
{name:"Rizky Fathan Mubina",tgl:"2009-10-27"},
{name:"Roni",tgl:"2008-11-12"},
{name:"Sofie Amalia",tgl:"2010-02-08"}

];

function birthdayTerdekat(){

const sekarang=new Date();

let calon=null;
let sisaHari=9999;

siswa.forEach(s=>{

let ultah=new Date(s.tgl);

ultah.setFullYear(sekarang.getFullYear());

if(ultah<sekarang){

ultah.setFullYear(sekarang.getFullYear()+1);

}

let selisih=Math.ceil((ultah-sekarang)/(1000*60*60*24));

if(selisih<sisaHari){

sisaHari=selisih;
calon=s;

}

});

const tanggal=new Date(calon.tgl);

document.getElementById("nextBirthdayName").innerHTML=
`🎂 ${calon.name}`;

document.getElementById("nextBirthdayDate").innerHTML=
`${tanggal.getDate()} ${tanggal.toLocaleString("id-ID",{month:"long"})}`;

document.getElementById("countdownBirthday").innerHTML=
`⏳ ${sisaHari} Hari Lagi`;

}

birthdayTerdekat();