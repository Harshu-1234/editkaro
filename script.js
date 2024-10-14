document.getElementById("contactForm").addEventListener("submit", function(event){
    event.preventDefault();

    
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const message = document.getElementById("message").value.trim();


    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    const phonePattern = /^[0-9]{10}$/;

    if (name === "") {
        alert("Please enter your name.");
        return;
    }
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }
    if (!phonePattern.test(phone)) {
        alert("Please enter a valid 10-digit phone number.");
        return;
    }
    if (message === "") {
        alert("Please enter your message.");
        return;
    }


    alert("Form submitted successfully!");
    document.getElementById("contactForm").reset(); 
});
const video = document.getElementById("myVideo");

       
        video.addEventListener("click", function() {
            if (video.paused) {
                video.play();
            } else {
                video.pause();
            }
        });

       
        function togglePlayPause(videoId, button) {
            const video = document.getElementById(videoId);
            if (video.paused) {
                video.play();
                button.innerText = "Pause";
            } else {
                video.pause();
                button.innerText = "Play";
            }
        }
