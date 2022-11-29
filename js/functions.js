/* FAQ */
const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("active");
    })
});

/* MENU A DISCESA UTENTE */
$(document).ready(function(){ 
    $(".user img").click(function(){
        $(".shortcut").toggleClass("visible");
        $(".user-key").toggleClass("changeback");
    });
});

/* MENU PROFILO ANIMAZIONE */
$(document).ready(function(){ 
    $(".bxs-grid").click(function(){
        $("#mUser").removeClass("fadeout");
        $("#mUser").addClass("fadein");
        disableScroll();
    });
});

var temaCorrente = localStorage.getItem('theme');

$(document).ready(function(){ 
    $(".bx-x-circle").click(function(){
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
    $(".button").click(function(){
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
function changeIcon(anchor) {
    var icon = anchor.querySelector("#faPlus");
    icon.classList.toggle("bx-show");
    icon.classList.toggle("bx-hide");
    anchor.querySelector("#valoreSaldo").textContent = icon.matches('.bx-show') ? "****" : anchor.querySelector("#valoreSaldo").dataset.text;
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
function changeIconBell (iconID){
    if(document.getElementById(iconID).className=="bx bx-bell"){
        document.getElementById(iconID).className = "bx bxs-bell-ring";
    }else{
        document.getElementById(iconID).className = "bx bx-bell";
    }
}