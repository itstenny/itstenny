// Mostrar alerta con GSAP animación loca
document.getElementById("joinBtn").addEventListener("click", () => {
  gsap.to("#joinBtn", {
    scale: 1.2,
    yoyo: true,
    repeat: 1,
    duration: 0.2,
    ease: "power1.inOut",
    onComplete: () => {
      alert("¡Ya eres parte del team! 💥");
    }
  });
});

// Animación de entrada para secciones
gsap.from(".intro h2", { opacity: 0, y: 50, duration: 1, delay: 0.2 });
gsap.from(".intro p", { opacity: 0, y: 30, duration: 1, delay: 0.6 });
gsap.from("button", { scale: 0, duration: 0.5, delay: 1 });

// Twitch Embed
new Twitch.Embed("twitch-embed", {
  width: "100%",
  height: 480,
  channel: "ItsTenny_",
  layout: "video",
  autoplay: true,
});
