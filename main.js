
function metiers_choice(){
    
    var metier = document.getElementById("metiers").value;

    if (metier === "pentesteur") {
        window.open("pentesteur/index.html", "_self");
    }
    if (metier === "data scientist") {
        window.open("data scientist/index.html", "_self");
    }

}
