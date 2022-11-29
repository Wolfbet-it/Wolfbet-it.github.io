function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
}
    
function toggleTheme() {
    if (localStorage.getItem('theme') === 'theme-dark'){
        setTheme('theme-light');
        document.getElementById('icona-tema').classList.remove("bxs-sun");
        document.getElementById('icona-tema').classList.add("bxs-moon");

    } else {
        setTheme('theme-dark');
        document.getElementById('icona-tema').classList.remove("bxs-moon");
        document.getElementById('icona-tema').classList.add("bxs-sun");
    }
}

function start() {
    if (localStorage.getItem('theme') === 'theme-dark'){
        if(document.title === 'Login | WolfBet' || document.title === 'Cambio Password | WolfBet' || 
        document.title === 'Registrati | WolfBet' || document.title === 'Scelta match | WolfBet') {
            document.getElementById('logo-header-scritta').src = "img/logo_scrittaChiaro.svg";
        } else {
            document.getElementById('logo-header').src = "img/logo_temaScuro.svg";
        }

        if(document.title === 'Login | WolfBet' || document.title === 'Utilizzo | WolfBet' || 
        document.title === 'Registrati | WolfBet' || document.title === 'Roadmap | WolfBet' ||
        document.title === 'Scelta Piano | WolfBet') {
            document.getElementById('logo-footer').src = "img/logo_temaScuro.svg";
        } 
        
    } else {
        if(document.title === 'Login | WolfBet' || document.title === 'Cambio Password | WolfBet' || 
        document.title === 'Registrati | WolfBet' || document.title === 'Scelta match | WolfBet') {
            document.getElementById('logo-header-scritta').src = "img/logo_scrittaScuro.svg";
        } else {
            document.getElementById('logo-header').src = "img/logo_temaChiaro.svg";
        }

        if(document.title === 'Login | WolfBet' || document.title === 'Utilizzo | WolfBet' || 
        document.title === 'Registrati | WolfBet' || document.title === 'Roadmap | WolfBet' ||
        document.title === 'Scelta Piano | WolfBet') {
            document.getElementById('logo-footer').src = "img/logo_temaChiaro.svg";
        } 
    }
  }
  window.onload = start;
    
(function () {
    if (localStorage.getItem('theme') === 'theme-dark') {
        setTheme('theme-dark');
    } else {
        setTheme('theme-light');
    }
    
    })();$(document).ready(function(){
    $(".menu").click(function(){
        $(".menu-list").toggleClass("active");
    });
});

$(document).ready(function(){ 
    $(".cm").click(function(){
        $(this).children().toggleClass("selected");
    });
});
