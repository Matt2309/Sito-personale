window.addEventListener('scroll', restringi);
window.addEventListener('scroll', zoomTitolo);

function restringi(){
    if(window.pageYOffset > 0){
        document.getElementById('header').style.padding = '5px';

        document.getElementById('frecciaSu').style.left = '0px';
    }
    else{
        document.getElementById('header').style.padding = '12px';

        document.getElementById('frecciaSu').style.left = '-30px';
    }
}

let titolo;
let blur = 0;
function zoomTitolo(){
    titolo = (window.scrollY +200);
    blur = window.scrollY/10;
    if(titolo < 600){
        document.getElementById('big-titolo').style.fontSize = titolo+'px';
        document.getElementById('big-titolo').style.filter = 'blur('+blur+'px)';

        titolo += 300;   
        document.getElementById('big-sottotitolo').style.fontSize = titolo+'%';
        document.getElementById('big-sottotitolo').style.filter = 'blur('+blur+'px)';
    }
}

$(".parallax-sfondo").mousemove(function(e) {
    parallaxIt(e, "#big", -100);
    parallaxIt(e, ".parallax-sfondo", -30);
});

function parallaxIt(e, target, movement) {
    var $this = $(".parallax-sfondo");
    var relX = e.pageX - $this.offset().left;
    var relY = e.pageY - $this.offset().top;
  
    TweenMax.to(target, 1, {
      x: (relX - $this.width() / 2) / $this.width() * movement,
      y: (relY - $this.height() / 2) / $this.height() * movement
    });
}

function scrollSez(){
    document.getElementById('sotto').scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
}

function tornaSu(){
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}