// script.js

function openModal(title, videoSrc) {
    document.getElementById('modalTitle').innerText = title;
    document.getElementById('modalVideo').src = videoSrc;
    document.getElementById('videoModal').style.display = 'block';
}

function closeModal() {
    const modalVideo = document.getElementById('modalVideo');
    modalVideo.src = '';
    document.getElementById('videoModal').style.display = 'none';
}

window.onclick = function(event) {
    const modal = document.getElementById('videoModal');
    if (event.target == modal) {
        closeModal();
    }
}

// Dummy credentials (replace with actual secure method)
const validUsername = "admin";
const validPassword = "password";

function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === validUsername && password === validPassword) {
        alert("Login successful");
        window.location.href = "admin_panel.html"; // Redirect to admin panel
    } else {
        alert("Invalid username or password");
    }
}
