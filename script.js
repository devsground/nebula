const nav = document.querySelector(".nav");
const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 8);
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

document.getElementById("year").textContent = new Date().getFullYear();

const targets = document.querySelectorAll(".card, .shot, .pv, .faq, .stats, .split, .cta-card, .section-head");
if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver((entries) => {
    for (const e of entries) {
      if (e.isIntersecting) {
        e.target.classList.add("in");
        io.unobserve(e.target);
      }
    }
  }, { rootMargin: "0px 0px -8% 0px" });
  targets.forEach((el) => { el.classList.add("reveal"); io.observe(el); });
}

// Hero demo: pings drift a little and the list re-ranks, like the app's routing engine.
const pings = document.getElementById("pings");
const route = document.getElementById("route");
if (pings && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const servers = [
    { name: "Server 1", base: 7 },
    { name: "Server 2", base: 13 },
    { name: "Server 3", base: 80 },
  ];
  setInterval(() => {
    for (const s of servers) s.ms = Math.max(3, Math.round(s.base * (0.55 + Math.random() * 0.9)));
    const ranked = [...servers].sort((a, b) => a.ms - b.ms);
    pings.innerHTML = ranked
      .map((s) => `<div><span>${s.name}</span><span class="${s.ms < 60 ? "ok" : "warn"}">${s.ms} ms</span></div>`)
      .join("");
    route.textContent = `${ranked[0].name} · ${ranked[0].ms} ms`;
  }, 1800);
}
