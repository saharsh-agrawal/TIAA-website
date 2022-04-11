function uncover()
{
    document.getElementById("cover-container").style.opacity = "0";
    const myTimeout = setTimeout(displayNone, 1600);
}
function displayNone()
{
    document.getElementById("cover-container").style.display = "none";
}
