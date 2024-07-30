document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    const promptInput = document.getElementById("prompt");
    const submitButton = document.querySelector("input[type='submit']");
    const loader = document.createElement("div");
  
    loader.className = "loader";
    loader.style.display = "none";
    loader.innerHTML = "Generating story, please wait...";
  
    form.appendChild(loader);
  
    form.addEventListener("submit", function(event) {
      if (promptInput.value.trim() === "") {
        event.preventDefault();
        alert("Please enter a prompt to start your story.");
        return false;
      }
      submitButton.disabled = true;
      loader.style.display = "block";
    });
  });
  