const data = {
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
            pSiteRevision: `
<p>Début : Janvier 2026 - Fin : Indéterminée</p>
<p>Projet personnel en collaboration avec une camarade de classe, Elena Longuet.</p>
<p>Travail en binôme.</p>
<p>Il utilise les langages HTML, CSS, JavaScript, PHP.</p>
<p>Utilisation de Git/GitHub.</p>
<p>Présence d'un "chat"-bot relié avec une clé api à un modèle d'IA, permettant de poser des questions sur les
    différentes notions abordées dans les fiches de révisions.</p>
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

        const triggers = document.querySelectorAll('.project-trigger');
        const modal = document.getElementById('project-modal');
        const modalContent = document.getElementById('modal-content');
        const closeModal = document.getElementById('close-modal');
        const modalOverlay = document.getElementById('modal-overlay');
        const projectContainer = document.getElementById('project-container');
        const prevBtn = document.getElementById('prev-project');
        const nextBtn = document.getElementById('next-project');
        const body = document.body;


        if (prevBtn && nextBtn && projectContainer) {
            prevBtn.addEventListener('click', () => {
                projectContainer.scrollBy({ left: -400, behavior: 'smooth' });
            });
            nextBtn.addEventListener('click', () => {
                projectContainer.scrollBy({ left: 400, behavior: 'smooth' });
            });
        }

        function openProjectModal(projectId) {
            modalContent.innerHTML = data[projectId];
            modal.classList.remove('opacity-0', 'pointer-events-none', 'scale-95');
            modal.classList.add('opacity-100', 'scale-100');
            body.style.overflow = 'hidden';
        }

        function closeProjectModal() {
            modal.classList.remove('opacity-100', 'scale-100');
            modal.classList.add('opacity-0', 'pointer-events-none', 'scale-95');
            setTimeout(() => {
                body.style.overflow = 'auto';
            }, 500);
        }

        triggers.forEach(trigger => {
            trigger.addEventListener('click', () => {
                const projectId = trigger.getAttribute('data-project');
                openProjectModal(projectId);
            });
        });

        closeModal.addEventListener('click', closeProjectModal);
        modalOverlay.addEventListener('click', closeProjectModal);

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') closeProjectModal();
        });
