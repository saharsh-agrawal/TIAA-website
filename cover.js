function uncover()
{
    document.getElementById("cover-container").style.opacity = "0";
    const myTimeout = setTimeout(displayNone, 2500);
}
function displayNone()
{
    document.getElementById("cover-container").style.display = "none";
}
