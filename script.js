document.addEventListener("DOMContentLoaded", function () {
    const music = document.getElementById("background-music");

    // Play music after user clicks anywhere
    document.addEventListener("click", () => {
        if (music.paused) {
            music.play().catch(error => console.log("Autoplay blocked:", error));
        }
    }, { once: true }); // Runs only once

    // ✅ Existing Leaf Animation Code
    function createLeaf() {
        const leaf = document.createElement("img");
        leaf.src = "/leaf.png";
        leaf.classList.add("falling-leaf");

        leaf.style.top = "-50px";
        leaf.style.left = Math.random() * window.innerWidth + "px";

        const duration = Math.random() * 3 + 4;
        leaf.style.animationDuration = duration + "s";

        document.body.appendChild(leaf);

        setTimeout(() => { leaf.remove(); }, duration * 1000);
    }

    setInterval(createLeaf, 1000);

    // ✅ Existing Login Code
    document.getElementById("loginForm").addEventListener("submit", async function (event) {
        event.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        const response = await fetch("/login", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams({ username, password })
        });

        const result = await response.json();

        if (result.success) {
            alert(result.message);
            window.location.href = "/dashboard.html";
        } else {
            alert(result.message);
        }
    });
});
