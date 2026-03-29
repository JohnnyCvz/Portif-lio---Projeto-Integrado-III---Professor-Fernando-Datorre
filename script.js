const cursor = document.querySelector('.cursor');
const follower = document.querySelector('.cursor-follower');
const backgroundParallax = document.querySelector('.background-parallax');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    follower.animate({
        left: e.clientX - 20 + 'px',
        top: e.clientY - 20 + 'px'
    }, { duration: 600, fill: "forwards" });
});

// Parallax suave (intensidade 0.05)
window.addEventListener('scroll', () => {
    const scrollValue = window.scrollY;
    backgroundParallax.style.transform = `translateY(${scrollValue * 0.05}px)`;
});

// Revelação de seções ao rolar
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.secao-detalhada').forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(50px)";
    el.style.transition = "all 1.2s ease-out";
    observer.observe(el);
});