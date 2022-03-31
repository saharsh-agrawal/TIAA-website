function uncover()
{
    document.getElementById("cover-container").style.top = "-100%";
    const myTimeout = setTimeout(displayNone, 1000);
}
function displayNone()
{
    document.getElementById("cover-container").style.display = "none";
}
