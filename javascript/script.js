// Excatly 1 open panel
let activeTab = 1;

function updateToggle(){

    // Remove from other 
    document.getElementById("toggle-1").classList.remove("black");
    document.getElementById("toggle-2").classList.remove("black");
    document.getElementById("toggle-3").classList.remove("black");

    // The active panel
    document.getElementById("toggle-" + activeTab).classList.add("black");


    // Hide other panels
    document.getElementById("panel-1").style.display = "none";
    document.getElementById("panel-2").style.display = "none";
    document.getElementById("panel-3").style.display = "none";

    // Maintain Display
    document.getElementById("panel-" + activeTab).style.display = "block";
}

// Hide 2 panels at initial page load
document.getElementById("panel-2").style.display = "none";
document.getElementById("panel-3").style.display = "none";

// Add Black Class with Toggle ID
document.getElementById("toggle-1").classList.add("black");

// Display toggle 1
document.getElementById("toggle-1").addEventListener("click", function () {

    // Visible and selected
    activeTab = 1;
    updateToggle();

});

// Display toggle 2
document.getElementById("toggle-2").addEventListener("click", function () {

    // Visible and selected
    activeTab = 2;
    updateToggle();

});

// Display toggle 3
document.getElementById("toggle-3").addEventListener("click", function () {

    // Visible and selected
    activeTab = 3;
    updateToggle();
});

// Access accordion
var acc = document.getElementsByClassName("accordion");

// Loop through accordion
for (let i = 0; i < acc.length; i++) {
    
    // Event for Button Click
    acc[i].addEventListener("click", function () {

    
        // Targets clicked button
        this.classList.toggle("active");

        // Check to see if it's been clicked
        if (this.classList.contains("active") ){
            
            // 2nd Child: + - span
            this.children[1].innerHTML = "-";
        }

        else{
            // 2nd Child: + - span
            this.children[1].innerHTML = "+";
        }

        
        // Selecting whatver corres panel
        var panel = this.nextElementSibling;
        
        if (panel.style.display === "block") {

            // Refers to closed panel
            panel.style.display = "none";
        } 
        else {
            panel.style.display = "block";
        }

    });
}