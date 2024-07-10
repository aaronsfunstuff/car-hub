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
