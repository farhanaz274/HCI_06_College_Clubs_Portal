
document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', function(event) {
        event.preventDefault(); 
        const page = this.getAttribute('data-page'); 
        window.location.href ="index1-5.html"; 
    });
});