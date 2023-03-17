/* MENU BLOG */
$(document).ready(function(){ 
    $("#hamburger-menu").click(function(){

        var hamb = $("#hamburger-menu");
        hamb.toggleClass("hamburger-close");

        $(".hamburger-menu").toggleClass("menu-visible");

        if(hamb.hasClass("hamburger-close")) {
            disableScroll();
        } else {
            enableScroll();
        }
    });
});

/* FILTER COMMENTS */
$(document).ready(function(){ 
    $(".filter-comments span").click(function(){
        $(".filter-comments span").removeClass("active");
        $(this).addClass("active");
    });
});

/* FAQ */
const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("active");
        document.getElementById("faq-plus").toggle("faqMinus");
    })
});

/* MENU A DISCESA UTENTE */
$(document).ready(function(){ 
    $(".user").click(function(){
        $(".shortcut").toggleClass("visible");
        $(".user-key").toggleClass("changeback");
    });
});

/* MENU PROFILO ANIMAZIONE */
$(document).ready(function(){ 
    $("#open-menu").click(function(){
        $("#mUser").removeClass("fadeout");
        $("#mUser").addClass("fadein");
        disableScroll();
    });
});

/* SEARCHBAR */

$(window).click(function() {
    $("#cerca").removeClass("searchbar-border");
});

$('#cerca').click(function(event){
    event.stopPropagation();
    $("#cerca").addClass("searchbar-border");
});

var temaCorrente = localStorage.getItem('theme');

$(document).ready(function(){ 
    $("#close-menu").click(function(){
        $("#mUser").removeClass("fadein");
        $("#mUser").addClass("fadeout");
        $(".shortcut").removeClass("visible");
        $(".user-key").removeClass("changeback");
        enableScroll();

        if (temaCorrente != localStorage.getItem('theme')){
            temaCorrente = localStorage.getItem('theme');
            location.reload();
        }
    });
});

$(document).ready(function(){ 
    $(".cm").click(function(){
        $(this).toggleClass("selected");
    });
});

/* POP UP */
const popup = document.querySelector("#popup");

if($('body').is('.sceltamatch')){
    window.onload = function(){
        /* forzatura scroll all'inizio */
        window.onbeforeunload = function () {
            window.scrollTo(0, 0);
        }
        $("#popup").addClass("show");
        $("#blur-match").addClass("blur");
        disableScroll();
    };
}

$(document).ready(function(){ 
    $("#close-pop").click(function(){
        $("#popup").removeClass("show");
        $("#blur-match").removeClass("blur");
        enableScroll();
    });
});

$(document).ready(function(){ 
    $("#close-pop").click(function(){
        $("#popAdd").removeClass("show");
        $("#blur").removeClass("blur");
        enableScroll();
    });
});

$(document).ready(function(){ 
    $("#close-pop").click(function(){
        $("#popBudget").removeClass("show");
        $("#blur").removeClass("blur");
        enableScroll();
    });
});

/* POP UP DISISCRIVITI */
$(document).ready(function(){ 
    $("#disiscriviti").click(function(){
        $("#popupdis").addClass("show");
        $("#blur").addClass("blur");
        disableScroll();
    });
});

$(document).ready(function(){ 
    $("#close-dis").click(function(){
        $("#popupdis").removeClass("show");
        $("#blur").removeClass("blur");
        enableScroll();
    });
});

/* POP UP BUDGET */
$(document).ready(function(){ 
    $(".insertIn").click(function(){
        $("#popBudget").addClass("show");
        $("#blur").addClass("blur");
        disableScroll();
    });
});

$(document).ready(function(){ 
    $(".btn-popBudg").click(function(){
        $("#popBudget").removeClass("show");
        $("#blur").removeClass("blur");
        enableScroll();
    });
});

/* MOSTRARE E NASCONDERE SALDO */
function changeIcon() {
    var eye = $("#hide");
    eye.toggleClass("occhio");

    var textBudget = document.getElementById("valoreSaldo");
    var datasetBudget = textBudget.dataset.text;

    if(eye.hasClass("occhio")) {
        textBudget.textContent = "****";
    } else {
        textBudget.textContent = datasetBudget;
    }
}

/* VISUALIZZA BARRA "MODIFICA - RIMUOVI" PAGINA HISTORY */
$(document).ready(function(){ 
    $(".partitaHistory").click(function(){
        $(this).find("div#options").toggleClass("flex");
    });
});

/* POP UP AGGIUNGI BUDGET */
$(document).ready(function(){ 
    $("#addBudget-icon").click(function(){
        $("#popAdd").addClass("show");
        $("#blur").addClass("blur");
        disableScroll();
    });
});

$(document).ready(function(){ 
    $(".btn-popAdd").click(function(){
        $("#popAdd").removeClass("show");
        $("#blur").removeClass("blur");
        enableScroll();
    });
});

// STOP AND GO SCROLL SCREEN
var keys = {37: 1, 38: 1, 39: 1, 40: 1};

function preventDefault(e) {
    e.preventDefault();
}

function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) {
        preventDefault(e);
        return false;
    }
}

var supportsPassive = false;
try {
    window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
        get: function () { supportsPassive = true; } 
    }));
} catch(e) {}

var wheelOpt = supportsPassive ? { passive: false } : false;
var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

// call this to Disable
function disableScroll() {
    window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
    window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
    window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
    window.addEventListener('keydown', preventDefaultForScrollKeys, false);
}

// call this to Enable
function enableScroll() {
    window.removeEventListener('DOMMouseScroll', preventDefault, false);
    window.removeEventListener(wheelEvent, preventDefault, wheelOpt); 
    window.removeEventListener('touchmove', preventDefault, wheelOpt);
    window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
}

/* CHANGE ICON BELL */
$(document).ready(function(){ 
    $(".bellMatch").click(function(){
        $(this).toggleClass("bell");
    });
});

/* FORM ISCRIVI BETA 
$(document).ready(function(){ 
    var checkboxYes = document.getElementById("check-yes");
    var checkboxNo = document.getElementById("check-no");

    checkboxYes.addEventListener('change', function() {
        if (this.checked) {
          $("#totscomm").addClass("show-input");
          checkboxNo.checked = false;
        }
    });

    checkboxNo.addEventListener('change', function() {
        if (this.checked) {
          $("#totscomm").removeClass("show-input");
          checkboxYes.checked = false;
        }
    });
});*/