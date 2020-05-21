var mouseIsReleased = false;

function button(x, y, w, h, active = false)
{
    let over = false;
    let pressing = false;
    let released = false;

    fill(175);
    noStroke();

    if (overRect(x, y, w, h)) 
    {
        over = true;
        stroke(50);
        if (mouseIsPressed)
        {
            pressing = true;
            fill(240);
        }
        if (mouseIsReleased)
            released = true;
    }
    else if (active)
    {
        stroke(50);
    }

    strokeWeight(1);
    rect(x, y, w, h)


    return released;
}

function buttonsUpdate()
{
    mouseIsReleased = false;
}
function buttonsReleased()
{
    mouseIsReleased = true;
}

function overRect(x, y, w, h)  
{
    if (mouseX >= x && mouseX <= x+w && mouseY >= y && mouseY <= y+h)
        return true;
    return false;
}