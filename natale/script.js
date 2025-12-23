const data = {
    white: {
        text: "Ehy Romeo, so che il Natale non è il tuo periodo preferito dell'anno ma spero che, insieme a noi, tu possa creare dei ricordi nuovi. Ricordi migliori di ciò che il passato ha riservato per te. Ti Amo Anima. Buon Natale",
        link: "https://mega.nz/file/WlwnVbKJ#AsGAxemLhIgdLfGanl5DHE_4JDDdt8reriAMyV2RMpw"
    },
    cyan: {
        text: "Ei Rob, ultimamente non ho dato il meglio di me ma che questo regalo sia il primo di tanti, non solo nelle feste, ma sempre. Spero che la mia presenza possa essere un regalo migliore di ciò che è stata fin'ora. Ti amo. Buon Natale.",
        link: "gallery.html"
    },
    yellow: {
        text: "Ciao Orazio, in questo periodo ci sentiamo molto poco e mi manchi da morire, spero che questo piccolo regalino ti piaccia. Sei diventato la mia vita tanti anni fa e ti amo ogni giorno della mia esistenza sempre di più. Se ci fosse un modo per esprimere qualcosa che è più dell'amore lo userei. Ti amo. Buon Natale.",
        link: "https://mega.nz/folder/GgJBUAqK#qoy10FyYYGiqDkLL7gT4JA"
    }
};

function openGift(color) {
    document.getElementById('main-container').classList.add('hidden');
    
    const letterPage = document.getElementById('letter-page');
    letterPage.classList.remove('hidden');
    
    document.getElementById('letter-text').innerText = data[color].text;
    document.getElementById('external-link').href = data[color].link;
}