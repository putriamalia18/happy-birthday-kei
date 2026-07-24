// ==============================
// COUNTDOWN ULANG TAHUN
// ==============================

// Ganti tanggal jika diperlukan
const birthday = new Date("August 18, 2026 00:00:00").getTime();

const timer = document.getElementById("timer");

function updateCountdown() {

    const now = new Date().getTime();

    const distance = birthday - now;

    if (distance <= 0) {
        timer.innerHTML = "🎉 Selamat Ulang Tahun Putri Amalia! 🎂";
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (distance % (1000 * 60 * 60)) /
        (1000 * 60)
    );

    const seconds = Math.floor(
        (distance % (1000 * 60)) /
        1000
    );

    timer.innerHTML = `
        ${days} Hari <br>
        ${hours} Jam ${minutes} Menit ${seconds} Detik
    `;
}

updateCountdown();

setInterval(updateCountdown,1000);


// ==============================
// AUTOPLAY MUSIK
// ==============================

window.addEventListener("load", function () {

    const music = document.getElementById("bgMusic");

    if (music) {

        music.volume = 0.5;

        music.play().catch(() => {
            console.log("Autoplay diblokir browser.");
        });

    }

});


// ==============================
// ANIMASI SCROLL
// ==============================

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity="1";
            entry.target.style.transform="translateY(0px)";

        }

    });

},{
    threshold:0.2
});

sections.forEach(section=>{

    section.style.opacity="0";
    section.style.transform="translateY(50px)";
    section.style.transition="1s";

    observer.observe(section);

});