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
    document.getElementById(div).scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
}