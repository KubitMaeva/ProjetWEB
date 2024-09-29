function openTab(evt, tabName) {
    // Cacher toutes les sections
    var tabcontent = document.getElementsByClassName("tab-content");
    for (var i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";  
    }

    // Enlever la classe "active" de tous les onglets
    var tablinks = document.getElementsByClassName("tab-link");
    for (var i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Afficher la section actuelle et ajouter la classe "active" au bouton
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

function showCards(miseElement) {
    const cards = miseElement.querySelector('.cards');
    cards.style.display = 'flex';
}

function hideCards(miseElement) {
    const cards = miseElement.querySelector('.cards');
    cards.style.display = 'none';
}
