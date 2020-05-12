/* The Purpose for this JS file is to Highlight the ACTIVE nav tab. */

// Access Active
let activeNav = 1;

function updateToggle(){

    // Remove from other
    document.getElementById("nav-1").classList.remove("selected");
    document.getElementById("nav-2").classList.remove("selected");
    document.getElementById("nav-3").classList.remove("selected");
    document.getElementById("nav-4").classList.remove("selected");

    // Active Nav
    document.getElementById("nav-" + activeNav).classList.add("selected");

    // Unhighlight other navs and Hide possibly


    // Maintain display
}

// Don't need accordion