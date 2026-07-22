document.addEventListener("DOMContentLoaded", () => {
    console.log("VELVET BREW Website Loaded");

    const btn = document.querySelector("button");

    if(btn){
        btn.addEventListener("click", () => {
            alert("Welcome to VELVET BREW Franchise!");
        });
    }
});
