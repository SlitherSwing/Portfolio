<?php
// Ce fragment est chargé uniquement par l'accueil.
if (!defined('PORTFOLIO_PAGE')) {
    http_response_code(404);
    exit;
}
?>
<div class="mt-32 relative z-10 group/slider">
    <h3 class="section-title">
        <span class="overline-text">Pro</span>jets
    </h3>


    <button id="prev-project" class="carrousel-button left-4">
        <span class="text-2xl">←</span>
    </button>
    <button id="next-project" class="carrousel-button right-4">
        <span class="text-2xl">→</span>
    </button>

    <div
        class="w-full h-fit flex gap-8 overflow-x-scroll overflow-y-hidden scrolling-touch pb-8 px-4 snap-x scroll-smooth no-scrollbar">


        <div class="project-card group">
            <div class="portfolio-frame">
                <div class="w-full h-48">
                    <p
                        class="w-full h-full flex items-center justify-center text-center text-4xl text-purple-300/80 italic font-medium tracking-wide">
                        Missions
                        effectuées
                        en stage</p>
                </div>
            </div>
        </div>

        <!-- Projet INRS -->
        <div class="project-card group">
            <div class="portfolio-frame">
                <img data-project="pProjetStage" class="project-trigger portfolio-image"
                    src="assets/images/Maquette_Figma.webp" alt="Site Stage">
            </div>
            <p class="project-title">Site de l'INRS
            </p>
        </div>

        <div class="project-card group">
            <div class="portfolio-frame">
                <div class="w-full h-48">
                    <p
                        class="w-full h-full flex items-center justify-center text-center text-4xl text-purple-300/80 italic font-medium tracking-wide">
                        Projets encadrés</p>
                </div>
            </div>
        </div>

        <div class="project-card group">
            <div class="portfolio-frame">
                <img data-project="pPortfolio" class="project-trigger portfolio-image"
                    src="assets/images/Portfolio_V1.webp" alt="Portfolio V1">
            </div>

            <p class="project-title">Portfolio V1
            </p>
        </div>

        <div class="project-card group">
            <div class="portfolio-frame">
                <img data-project="pEpicerie" class="project-trigger portfolio-image"
                    src="assets/images/Projet_3.webp" alt="Projet 3">
            </div>

            <p class="project-title">Épicerie</p>
        </div>

        <div class="project-card group">
            <div class="portfolio-frame">
                <img data-project="pIntegration" class="project-trigger portfolio-image"
                    src="assets/images/Projet_Integration.webp" alt="Projet Integration">
            </div>

            <p class="project-title">Intégration
            </p>
        </div>

        <div class="project-card group">
            <div class="portfolio-frame">
                <img data-project="pCV" class="project-trigger portfolio-image"
                    src="assets/images/Projet_CV.webp" alt="Projet CV">
            </div>

            <p class="project-title">CV Online</p>
        </div>

        <div class="project-card group">
            <div class="portfolio-frame">
                <div class="w-full h-48">
                    <p
                        class="w-full h-full flex items-center justify-center text-center text-4xl text-purple-300/80 italic font-medium tracking-wide">
                        Projets personnels</p>
                </div>
            </div>
        </div>
        <div class="project-card group">

            <div class="portfolio-frame">
                <img data-project="pSiteRevision" class="project-trigger portfolio-image"
                    src="assets/images/Site_Revision.webp" alt="Site Revision">
            </div>

            <p class="project-title">Site Révision
            </p>
        </div>

        <div class="project-card group">

            <div class="portfolio-frame">
                <img data-project="pPokeClub" class="project-trigger portfolio-image"
                    src="assets/images/Projet_Pokeclub.webp" alt="Site PokeClub">
            </div>

            <p class="project-title">Site PokeClub
            </p>
        </div>

    </div>


</div>

<div id="project-modal"
    class="fixed inset-0 z-100 flex items-center justify-center p-6 opacity-0 pointer-events-none transition-all duration-500 scale-95">
    <div class="absolute inset-0 bg-black/60 backdrop-blur-md" id="modal-overlay"></div>
    <div
        class="relative w-full max-w-2xl p-px rounded-3xl bg-linear-to-br from-white/20 to-transparent shadow-[0_0_100px_-12px_rgba(168,85,247,0.4)]">
        <div
            class="bg-[#0b0b1a]/90 backdrop-blur-2xl rounded-3xl p-10 max-h-[80vh] overflow-y-auto custom-scrollbar">
            <button id="close-modal" type="button" aria-label="Fermer la fenêtre"
                class="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-red-500/20 hover:border-red-500/50 transition-colors duration-300 group/close cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-purple-400 motion-reduce:transition-none">
                <svg class="w-5 h-5 text-white origin-center transition-transform duration-300 ease-out group-hover/close:rotate-90 motion-reduce:transition-none motion-reduce:transform-none motion-reduce:rotate-0"
                    viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"
                    stroke-linecap="round" aria-hidden="true" focusable="false">
                    <path d="M6 6 18 18M18 6 6 18" />
                </svg>
            </button>
            <div id="modal-content"
                class="text-gray-300 leading-relaxed space-y-4 prose prose-invert prose-purple">
            </div>
        </div>
    </div>
</div>
