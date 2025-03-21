particlesJS("particles-container", {
    particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: ["#fff", "#e2e2e2", "#9b9b9b"] },
        shape: { type: "circle" },
        opacity: { value: 0.8, random: true },
        size: { value: 3, random: true },
        move: {
            enable: true,
            speed: 2,
            direction: "none",
            out_mode: "out",
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 0.4,
            width: 1,
        },
    },
    interactivity: {
        events: {
            onclick: { enable: true, mode: "push" },
        },
    },
});