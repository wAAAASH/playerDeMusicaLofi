const input = document.querySelector(".pwd input");
const eye = document.querySelector(".pwd .fa-eye-slash");
const lock = document.querySelector(".pwd .fa-lock");
const overlay = document.querySelector(".pwd .overlay");

 // Add a click event to the eye icon
 eye.addEventListener("click", () => {
     // if the password is hidden...
     if (input.type === "password") {
         // show it
        input.type = "text";
        //toggle bwtween eye icon
        eye.classList.remove("fa-eye-slash");
        eye.classList.add("fa-eye");
        //Change the color of lock eye in 500 ms
        setTimeout(() => {
            lock.getElementsByClassName.color = "#111626";
        }, 500);
     } else {
         // Hide it
         input.type ="password";
         //toggle between eye icons
         eye.classList.remove("fa-eye");
         eye.classList.add("fa-eye-slash");
         //change the color of lock icon
         lock.getElementsByClassName.color = "#dbdbdb";
     }
     overlay.classList.toggle("overlay-cover");
 });

