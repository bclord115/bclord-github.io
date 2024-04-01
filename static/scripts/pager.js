function pager(e)
{
    var element = document.getElementById(e.target.value);
    if(element.hidden == true)
    {
        var cur = document.getElementsByClassName("visible")[0];
        cur.classList.remove("visible");
        cur.classList.add("hidden");
        element.classList.remove("hidden");
        element.classList.add("visible");
        cur.hidden = true;
        element.hidden = false;
    };
}