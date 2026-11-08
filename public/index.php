<?php define('PORTFOLIO_PAGE', true); ?>
<!DOCTYPE html>

<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portfolio Accueil</title>
    <link href="./assets/css/style.css?v=1ae55b9dbcad" rel="stylesheet">
</head>

<body class="page-body">

    <!-- Background -->
    <div class="page-background">
        <!-- Halo violet, pulse -->
        <div class="background-glow-top">
        </div>
        <!-- Halo indigo, blur -->
        <div class="background-glow-bottom">
        </div>
        <!-- Halo fuchsia, blur, animated-->
        <div class="background-glow-center">
        </div>

        <!-- Grille décorative -->
        <div class="background-grid"
            style="background-image: linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px); background-size: 50px 50px;">
        </div>
    </div>

    <!-- Conteneur -->
    <div class="page-container">
        <nav class="site-nav">
            <span class="site-name">Kevin
                Mascaro</span>
            <ul class="nav-list">
                <li>
                    <a class="link-menu" href="assets/documents/CV-Kevin-Mascaro.pdf">Mon
                        CV</a>
                </li>
                <li>
                    <a class="link-menu" href="./index.php">Accueil</a>
                </li>
                <li>
                    <a class="link-menu" href="./contact.html">Contact</a>
                </li>
            </ul>
        </nav>

        <div class="flex flex-col justify-center items-center gap-12 relative z-10">
            <div class="text-center group">
                <h2
                    class="text-4xl font-bold bg-clip-text text-transparent bg-linear-to-r from-purple-400 to-indigo-400 mb-4">
                    Bienvenue sur mon
                </h2>
                <h2 class="relative inline-block text-6xl font-black italic tracking-tighter">
                    <span class="overline-text">port</span>folio
                </h2>
            </div>

            <div
                class="w-full max-w-4xl p-px rounded-3xl bg-linear-to-br from-white/20 to-transparent shadow-[0_0_50px_-12px_rgba(168,85,247,0.3)]">
                <div
                    class="bg-black/40 backdrop-blur-2xl rounded-3xl p-8 flex flex-col md:flex-row justify-center items-center gap-12">
                    <div class="relative group">
                        <div
                            class="absolute inset-0 bg-purple-500/20 blur-2xl rounded-full group-hover:bg-purple-500/40 transition-all duration-500">
                        </div>
                        <img class="w-40 h-52 rounded-2xl relative z-10 border border-white/10 object-cover"
                            src="assets/images/profilPicture.webp">
                    </div>
                    <div class="flex flex-col gap-6 text-center md:text-left max-w-lg">
                        <h1
                            class="font-bold text-5xl bg-clip-text text-transparent bg-linear-to-r from-white to-gray-400 leading-tight">
                            Kevin Mascaro</h1>
                        <p class="text-xl text-purple-300/80 italic font-medium tracking-wide">Développeur Full-Stack
                            Jr.</p>
                        <p class="text-gray-400 leading-relaxed">Passionné par l'informatique, je suis à la recherche de
                            nouvelles expériences.</p>
                        <div class="social-links">
                            <a href="https://www.linkedin.com/in/kevin-mascaro-dev-full-stack-junior"
                                aria-label="LinkedIn" target="_blank" class="social-bubble">
                                <img src="assets/icons/linkedin-svgrepo-com.svg" alt="" class="social-icon" width="20"
                                    height="20">
                                <span>LinkedIn</span>
                            </a>
                            <a href="#" aria-label="GitHub" class="social-bubble">
                                <img src="assets/icons/github-142-svgrepo-com.svg" alt="" class="social-icon" width="20"
                                    height="20">
                                <span>GitHub (à venir)</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <?php require __DIR__ . '/includes/carousel.php'; ?>

        <?php require __DIR__ . '/includes/timeline.php'; ?>

        <script src="./assets/js/main.js" defer></script>
    </div>
</body>

</html>
