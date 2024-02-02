var i = 0;
var txt1 =
  "Hi Nikki..!!  << I know uh think I'm mad and stupid to do all this stuff for you. < Now I wan't to say something special to you. <<< So, Please read everything carefully...! <<< > When I saw you for the first time < I was awestruck by this beautiful girl sitting in 103, who was on the phone. < I saw uh for a sec, and I wanted to see that face again. Uh always seemed like a girl way out of my league. << > As the days went by < we got closer....! << I got the chance to see this beautiful soul that resides inside this beautiful girl.  < At first, uh were just a pretty girl in the office, but then I realised how special I feel, when uh are around. << I never planned to fall for uh. << Everything about you is always interesting to me...! <<< > < I am somewhat nervous because I haven't said these words to anyone before...! << Its not like I can't live without uh. I can live without uh... <<< I JUST DON'T WANT TO...!! <<<<<<<<< < > And I'm also well aware, that there is a high chance that this might not go anywhere. < But still I want to give this a try. <<< I want to love you.<<< > < I Love U < ♥ Nikki ♥  << You are very SPECIAL to me. << Give me One chance to Prove how Love can be so pure and beautiful...! < Give me a chance to Love You...!! <<< Please say back ''I Love You Too'' and hug me. I'm dying to hear it from uh. << Jitendra ☺";

var speed = 75;
typeWriter();
function typeWriter() {
  if (i < txt1.length) {
    if (txt1.charAt(i) == "<")
      document.getElementById("text1").innerHTML += "</br>";
    else if (txt1.charAt(i) == ">")
      document.getElementById("text1").innerHTML = "";
    else if (txt1.charAt(i) == "|") {
      $(".bg_heart").css("background-image", "')");
    } else document.getElementById("text1").innerHTML += txt1.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
