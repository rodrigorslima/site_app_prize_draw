const projectName = "Sorteador"
const projectDescription = "Organize e realize seus sorteios de forma rápida e simples, venha conhecer nosso app."
const storeLink = "https://play.google.com/store/apps/details?id=com.rslima.prize_draw"
function appName() {
    document.write(projectName)
};
function appDescription() {
    document.write(projectDescription)
};

function openStore() {
    document.write("<a href=\"" + storeLink + "\">" +
        "<img src=\"assets/images/playstore.png\"  />" +
        "<div><span>Baixe Agora</span><strong>Google Play</strong></div></a > ")
};
