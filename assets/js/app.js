function loader(afterLoader) {
    if (afterLoader === "afterLoader") {
        document.getElementById('loader').style.display = "none";
        document.getElementById('disp').style.display = "block";
    } else if (afterLoader !== "afterLoader") {
        document.getElementById('disp').style.display = "none";
        document.getElementById('loader').style.display = "block";
        
    }
    
}