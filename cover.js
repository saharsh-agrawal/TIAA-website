function uncover()
{
    
    document.getElementById("cover-container").style.top = "-100%";
    document.getElementById("joker").style.left = "-250px";
    document.getElementById("tent").style.bottom = "-250px";
    
    const myTimeout = setTimeout(displayNone, 1000);
    
}

function displayNone()
{
    document.getElementById("cover-container").style.display = "none";
}