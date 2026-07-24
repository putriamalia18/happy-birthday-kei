// ==============================
// MUSIK & INTERAKSI
// ==============================
const music = document.getElementById("bgMusic");
const memoryBtn = document.getElementById("memoryBtn");

if (music) {
    music.volume = 0.8; // Mengatur volume ke 80%
}

if (memoryBtn) {
    memoryBtn.addEventListener("click", function (e) {
        e.preventDefault();

        // Memutar lagu saat tombol diklik
        if (music) {
            music.play().then(() => {
                console.log("Musik berputar!");
            }).catch(error => {
                console.log("Audio diblokir browser atau file tidak ditemukan:", error);
            });
        }

        // Smooth scroll ke bagian galeri
        const gallerySection = document.getElementById("gallery");
        if (gallerySection) {
            gallerySection.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
}

// ==============================
// COUNTDOWN ULANG TAHUN
// ==============================
const birthday = new Date("July 24, 2026 00:00:00").getTime();
const timer = document.getElementById("timer");

function updateCountdown() {
    if (!timer) return;

    const now = new Date().getTime();
    const distance = birthday - now;

    if (distance <= 0) {
        timer.innerHTML = "🎉 Selamat Ulang Tahun Keisyania! 🎂";
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    timer.innerHTML = `${days} Hari | ${hours} Jam ${minutes} Menit ${seconds} Detik`;
}

updateCountdown();
setInterval(updateCountdown, 1000);

// ==============================
// ANIMASI SCROLL
// ==============================
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0px)";
        }
    });
}, {
    threshold: 0.15
});

sections.forEach(section => {
    section.style.opacity = "0";
    section.style.transform = "translateY(50px)";
    section.style.transition = "1s";
    observer.observe(section);
});
