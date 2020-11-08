function displayCookieConsent(){
    let cookieConsent = document.getElementsByClassName("cookie-consent")[0];
    cookieConsent.style.display = "block";
}
function hidecookieConsent(){
    localStorage.setItem("CookieAccepted", "yes");

    let cookieConsent = document.getElementsByClassName("cookie-consent")[0];
    cookieConsent.style.display = "none";
}
function initcookieConsent(){
    let isCookieAccepted = localStorage.getItem("CookieAccepted");
    if(isCookieAccepted === null)
    {
        localStorage.clear();
        localStorage.setItem("CookieAccepted", "no");
        displayCookieConsent();
    }
    if(isCookieAccepted === "no"){
        displayCookieConsent();
    }
}

window.onload = initcookieConsent();
window.hidecookieConsent = hidecookieConsent;