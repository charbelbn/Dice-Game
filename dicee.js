window.onload(rollDice());

function rollDice()
{
    var im1 = "./images/dice1.png";
    var im2 = "./images/dice2.png"    
    var im3 = "./images/dice3.png"
    var im4 = "./images/dice4.png"
    var im5 = "./images/dice5.png"
    var im6 = "./images/dice6.png"

    var imgarr = [im1 , im2 , im3 , im4 , im5 , im6];

    p1 = Math.floor(Math.random()*6+1);
    p2 = Math.floor(Math.random()*6+1);

    var p1img = "./images/dice"+p1+".png";
    var p2img = "./images/dice"+p2+".png";

    if(p1>p2)
    {
        document.querySelector("h1").textContent="Player 1 WON 🥳!";
    }

    else if(p1<p2)
    {
        document.querySelector("h1").textContent="Player 2 WON 🥳!";
    }

    else
    {
        document.querySelector("h1").textContent="DRAW";
        
    }
    /*
    ken fine hot badal hek hek a3mol :
    document.querySelectorAll("img")[0].setAttribute("src" , ...);
    document.querySelectorAll("img")[1].setAttribute("src" , ...);
    */

    document.querySelector("img.img1").setAttribute("src" , p1img);
    document.querySelector("img.img2").setAttribute("src" , p2img);

    /* 
    AWWW KEN FINE HOTT MAHAL HOLE L 2 HEK:
    document.querySelector("img.img1").setAttribute("src" , imgarr[p1-1]);
    document.querySelector("img.img2").setAttribute("src" , imgarr[p2-1]);
    */
}


/*
ENTEBHHH KTR MNIH ENNO WA2TA ANA HOT document.querySelector("");   ENTEBEH ENNO HOT "" BI ALBAA W ZET L CHI LAL 
.setAttribute("" , variable aw "..");
*/

