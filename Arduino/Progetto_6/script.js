window.addEventListener('scroll', restringi);

function restringi(){
    if(window.pageYOffset > 0){
        document.getElementById('header').style.padding = '5px';

        //document.getElementById('frecciaSu').style.left = '0px';
    }
    else{
        document.getElementById('header').style.padding = '12px';

        //document.getElementById('frecciaSu').style.left = '-30px';
    }
}

function tornaSu(){
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
let div = "";
function scrollSez(div){
    document.getElementById(div).scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
}

var numSlide = 1;
mostraSlide(numSlide);

function cambiaSlide(n){
    mostraSlide(numSlide += n);
}

function slideCorrente(n){
    mostraSlide(numSlide = n);
}

function mostraSlide(n){
    var slide = document.getElementsByClassName("slidePhoto");
    var i;
    var dot = document.getElementsByClassName('dot');

    if(n > slide.length){ //se si è arrivati all'ultima slide rincomincia dall'inizio
        numSlide = 1;
    }
    if(n < 1){ //se si va indietro dalla prima slide vai all'ultima
        numSlide = slide.length;
    }

    for(i=0; i<slide.length; i++){
        slide[i].style.display = "none";  
    };

    for (i = 0; i < dot.length; i++) {
        dot[i].className = dot[i].className.replace(" active", "");
    }
    slide[numSlide-1].style.display = "block";
    dot[numSlide-1].className += " active";
}
