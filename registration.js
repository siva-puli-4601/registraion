function checkfname()
{
   let pat=/^[a-zA-Z]+$/;
   let x=document.getElementById("firstname").value;
    if(!x)
     document.getElementById("p1").innerHTML="not empty";
    else if(!x.match(pat))
    document.getElementById("p1").innerHTML="only enter alphabets";
   else if(x.length>26)
    document.getElementById("p1").innerHTML="length between 1 to 26";
   else
   document.getElementById("p1").innerHTML="";
}

function checklname()
{let pat=/^[a-zA-Z]+$/;
    let x=document.getElementById("lastname").value;
     if(!x)
      document.getElementById("p2").innerHTML="not empty";
     else if(!x.match(pat))
     document.getElementById("p2").innerHTML="only enter alphabets";
    else if(x.length>26)
     document.getElementById("p2").innerHTML="length between 1 to 26";
    else
    document.getElementById("p2").innerHTML=" ";
}
function checkmail()
{
  let pat=/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/;
  const x =document.getElementById("email").value;
   if(!x)
    document.getElementById("p3").innerHTML="not empty";
   else if(!x.match(pat))
    document.getElementById("p3").innerHTML="must contains alphanumeric and @ and .";
   else
   document.getElementById("p3").innerHTML=" ";
}
function checkphone()
{
  let pat=/^\d+$/;
  const x =document.getElementById("phone").value;
   if(!x)
    document.getElementById("p4").innerHTML="not empty";
   else if(!x.match(pat))
    document.getElementById("p4").innerHTML="";
   else if(x.length!==10)
    document.getElementById("p4").innerHTML="must be 10 digits";
   else
   document.getElementById("p4").innerHTML=" ";
}
function checkpass()
{
    const up=/[A-Z]/;
    const lo=/[a-z]/;
    const dig=/\d/;
    const sp=/[!@#$%^&*()\-_=+\\|[\]{};:'",<.>/?`~]/;
    const x =document.getElementById("password").value;
    if(!x)
        document.getElementById("p5").innerHTML="not empty";
    else if(!x.match(up))
        document.getElementById("p5").innerHTML="contains upper character";
    else if(!x.match(lo))
        document.getElementById("p5").innerHTML="contains lower character";
    else if(!x.match(dig))
        document.getElementById("p5").innerHTML="contains digit";
    else if(!x.match(sp))
        document.getElementById("p5").innerHTML="contains special charcater";
    else if(x.length<8 || x.length>12)
        document.getElementById("p5").innerHTML="length btw 8 to 12";
    else
    document.getElementById("p5").innerHTML="";
}
function checkAll()
{
  checkfname();
  checklname();
  checkmail();
  checkpass();
  checkphone();
}