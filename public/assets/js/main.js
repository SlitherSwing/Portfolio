// Interactions de la page d’accueil. Les accolades ferment les blocs ; les parenthèses ferment les appels de fonctions.
// Descriptions HTML des projets ; chaque clé correspond à un attribut data-project dans index.html. Les accents graves permettent un texte sur plusieurs lignes.
// Si une clé de projet est renommée ici, mettre à jour le data-project correspondant dans index.html.
const data = {
    // Description du portfolio : chaque balise p produit un paragraphe dans la fenêtre de détails.
    pPortfolio: `
<p>Début : 22 Janvier 2026 - Fin : 5 Février 2026</p>
<p>Projet encadré, réalisé à l'aide d'un kit UI</p>
<p>Travail solo.</p>
<p>Il utilise les langages HTML, CSS, JavaScript.</p>
<p>Utilisation de Git/GitHub.</p>
<p>Objectif : A l'aide d'un kit UI, réaliser un portfolio. </p>
<p>Le portfolio est accessible en ligne, et son but est d'être une vitrine de mes différentes compétences
    acquises.</p>
<p>Problème rencontré : Le respect du kit UI, l'utilisation d'un display grid et son adaptation sur différentes
    taille d'écrans.</p>
`,
    // Description du projet épicerie.
    pEpicerie: `
<p>Début : 1er décembre 2025 - Fin : 15 janvier 2026</p>
<p>Un site web type épicerie sur plusieurs pages, le site a été réalisé en groupe de 4 personnes.</p>
<p>Travail en mode projet, type agile.</p>
<p>Il utilise les langages HTML, CSS, et JS.</p>
<p>Utilisation de Git/GitHub.</p>
<p>Temps de réalisation : 120h réparti sur 6 semaines.</p>
<p>Problème rencontré : Utilisation d'un langage encore inconnu : JavaScript.</p>
<p>Résolution du problème : Veille intensive et utilisation de Gémini pour expliquer les différentes
    fonctionnalités de ce nouveau langage.</p>
`,
    // Description du projet d’intégration.
    pIntegration: `
<p>Début : octobre 2025 - Fin : novembre 2025</p>
<p>Un site web composé de 3 pages distinctes, réalisé en binôme.</p>
<p>Travail en mode projet.</p>
<p>Il utilise les langages HTML, CSS.</p>
<p>Utilisation de Git/GitHub.</p>
<p>Temps de réalisation : 80h réparti sur 5 semaines.</p>
<p>Problème rencontré : Intégration des différentes pages entre elles, travail en binôme et gestion de la
    responsive.</p>
<p>Résolution du problème : Veille sur Git / GitHub afin de gérer le travail à deux de manière efficace et
    regrouper plus efficacement les blocs codés de part et d'autres.</p>
`,
    // Description du CV en ligne.
    pCV: `
<p>Premier projet réalisé seul dans l'environnement "piscine" du lycée Saint-Vincent.</p>
<p>Une page web type CV, réalisée à partir d'une maquette.</p>
<p>Travail en solo.</p>
<p>Il utilise les langages HTML, CSS.</p>
<p>Temps de réalisation : 30h réparti sur 2 semaines.</p>
<p>Problème rencontré : Découverte des IDE, des langages utilisés, et de la méthode de travail en
    autonomie.</p>
<p>Résolution du problème : Veille sur les langages pour une meilleure appropriation du code, beaucoup de
    recherche et d'essais/erreurs.</p>
`,
    // Description du site de révision.
    pSiteRevision: `
<p>Début : Janvier 2026 - Fin : Indéterminée</p>
<p>Projet personnel en collaboration avec une camarade de classe, Elena Longuet.</p>
<p>Travail en binôme.</p>
<p>Il utilise les langages HTML, TailwindCSS, JavaScript, PHP., Symfony.</p>
<p>Utilisation de Git/GitHub.</p>
<p>Temps de réalisation : 40h et + à venir</p>
<p>Objectif : Créer un site qui regroupe des fiches de révisions permettant aux élèves du BTS SIO de pouvoir
    réviser les différentes matières depuis une seule et même plateforme.</p>
<p>De plus, le site est aussi pour nous un moyen de s'exercer en dehors des projets encadrés, de tester de
    nouvelles fonctionnalités </p>
<p>Problème rencontré : - L'utlisation de JS encore délicate, l'apprentissage de ce langage étant uniquement
    basé sur des veilles personnelles.</p>
<p>- La charge de travail importante, avec la rédaction de fiches simple et concises pour chaque matière
    présente sur le site</p>
`,
};

// Récupère toutes les images cliquables qui ouvrent un projet.
// Les sélecteurs ci-dessous doivent rester synchronisés avec les classes et id du HTML.
const triggers = document.querySelectorAll('.project-trigger');
// Récupère le conteneur de la fenêtre de détails.
const modal = document.getElementById('project-modal');
// Récupère la zone où insérer la description du projet.
const modalContent = document.getElementById('modal-content');
// Récupère le bouton de fermeture.
const closeModal = document.getElementById('close-modal');
// Récupère le voile cliquable derrière la fenêtre.
const modalOverlay = document.getElementById('modal-overlay');
// Récupère la bande horizontale contenant les cartes des projets.
const projectContainer = document.getElementById('project-container');
// Récupère la flèche de défilement vers la gauche.
const prevBtn = document.getElementById('prev-project');
// Récupère la flèche de défilement vers la droite.
const nextBtn = document.getElementById('next-project');
// Récupère le corps de page pour bloquer ou rétablir son défilement.
const body = document.body;


// Installe les commandes du carrousel uniquement si les trois éléments existent.
if (prevBtn && nextBtn && projectContainer) {
    // Au clic sur la flèche précédente, exécute la fonction ci-dessous.
    prevBtn.addEventListener('click', () => {
        // Déplace le carrousel de 400 px vers la gauche avec une animation douce.
        projectContainer.scrollBy({ left: -400, behavior: 'smooth' });
    });
    // Au clic sur la flèche suivante, exécute la fonction ci-dessous.
    nextBtn.addEventListener('click', () => {
        // Déplace le carrousel de 400 px vers la droite avec une animation douce.
        projectContainer.scrollBy({ left: 400, behavior: 'smooth' });
    });
}

// Ouvre la fenêtre pour la clé du projet reçue en paramètre.
// Garder les classes d’état manipulées ci-dessous dans le HTML : les cacher dans une classe commune empêcherait leur retrait par classList.
function openProjectModal(projectId) {
    // Insère le HTML de la description locale dans la fenêtre.
    modalContent.innerHTML = data[projectId];
    // Retire la transparence, le blocage des clics et la réduction de taille.
    modal.classList.remove('opacity-0', 'pointer-events-none', 'scale-95');
    // Affiche la fenêtre à sa taille normale ; les transitions CSS animent le changement.
    modal.classList.add('opacity-100', 'scale-100');
    // Empêche la page située derrière la fenêtre de défiler.
    body.style.overflow = 'hidden';
}

// Ferme la fenêtre en rétablissant son état masqué.
function closeProjectModal() {
    // Retire les classes correspondant à la fenêtre visible.
    modal.classList.remove('opacity-100', 'scale-100');
    // Rend la fenêtre invisible, non cliquable et légèrement réduite.
    modal.classList.add('opacity-0', 'pointer-events-none', 'scale-95');
    // Attend la durée de la transition avant de rétablir le défilement de la page.
    setTimeout(() => {
        // Autorise à nouveau le défilement de la page.
        body.style.overflow = 'auto';
    // Délai de 500 millisecondes, correspondant à la transition de fermeture.
    }, 500);
}

// Parcourt chaque image de projet pour lui associer une interaction.
triggers.forEach(trigger => {
    // Déclenche cette fonction quand cette image est cliquée.
    trigger.addEventListener('click', () => {
        // Lit la clé du projet stockée sur l’image dans le HTML.
        const projectId = trigger.getAttribute('data-project');
        // Affiche la description associée à cette clé.
        openProjectModal(projectId);
    });
});

// Ferme la fenêtre quand le bouton de fermeture est cliqué.
closeModal.addEventListener('click', closeProjectModal);
// Ferme la fenêtre quand le voile extérieur est cliqué.
modalOverlay.addEventListener('click', closeProjectModal);

// Écoute les touches du clavier ; e contient les informations de la touche pressée.
document.addEventListener('keydown', (e) => {
    // Ferme la fenêtre si la touche Échap est pressée.
    if (e.key === 'Escape') closeProjectModal();
});
