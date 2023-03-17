function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
}
    
function toggleTheme() {
    if (localStorage.getItem('theme') === 'theme-dark'){
        setTheme('theme-light');
        document.getElementById('icona-tema').src = "icon/dark_mode.svg";
    } 
    else {
        setTheme('theme-dark');        
        document.getElementById('icona-tema').src = "icon/dark_mode_filled.svg";
    }
}

function start() {
    if (localStorage.getItem('theme') === 'theme-dark'){
        if(document.title === 'Login | WolfBet' || document.title === 'Cambio Password | WolfBet' || 
        document.title === 'Registrati | WolfBet' || document.title === 'Scelta match | WolfBet' || 
        document.title === 'Blog | WolfBet') {
            document.getElementById('logo-header').src = "img/logo_scrittaChiaro.svg";
        } 
        else {
            document.getElementById('logo-header').src = "img/logo_temaScuro.svg";
        }

        if(document.title === 'Login | WolfBet' || document.title === 'Utilizzo | WolfBet' || 
        document.title === 'Registrati | WolfBet' || document.title === 'Roadmap | WolfBet' ||
        document.title === 'Scelta Piano | WolfBet') {
            document.getElementById('logo-footer').src = "img/logo_temaScuro.svg";
        } 
        
    } else {
        if(document.title === 'Login | WolfBet' || document.title === 'Cambio Password | WolfBet' || 
        document.title === 'Registrati | WolfBet' || document.title === 'Scelta match | WolfBet'|| 
        document.title === 'Blog | WolfBet') {
            document.getElementById('logo-header').src = "img/logo_scrittaScuro.svg";
        } 
        else {
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
    } 
    else {
        setTheme('theme-light');
    }
    
    })();
    
    $(document).ready(function(){
    $(".menu").click(function(){
        $(".menu-list").toggleClass("active");
    });
});
