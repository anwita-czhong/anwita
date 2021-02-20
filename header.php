<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>
        <?php
            switch (basename($referrer, '.php')) {
                case "index":
                    echo "Home";
                    break;
                case "about":
                    echo "About";
                    break;
                case "projects":
                    echo "Pipeline";
                    break;
                case "careers":
                    echo "Careers";
                    break;
                case "contact":
                    echo "Contact";
                    break;
                case "team":
                    echo "Team Members";
                    break;
                default:
                    echo "Page Not Found";
      }
    ?> | Anwita Biosciences Inc.</title>
    <link href="styles/<?php
    echo basename($referrer, '.php')
    ?>.css" rel="stylesheet" type="text/css"/>
    <link rel="icon" href="images/squareicon-32square.png">
    <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min.js"></script>
    <link rel="canonical" href="https://anwitabio.com/<?php
    switch (basename($referrer, '.php')) {
        case "index":
            echo "";
            break;
        case "about":
            echo "about";
            break;
        case "careers":
            echo "careers";
            break;
        case "projects":
            echo "pipeline";
            break;
        case "contact":
            echo "contact";
            break;
        case "team-members":
            echo "team";
            break;
        case "404":
            echo "404";
            break;
    }
    ?>">
</head>
<body>
    <header>
        <div id="header-inner">
            <h1 id="icon-container">
                <a id="icon" href="/">
                    <img src="images/AnwitaLogoAlphaGradient.png" alt="Anwita Biosciences"/>
                </a>
            </h1>
            <script src="scripts/navbar.js"></script>
            <div class="topnav" id="navbar">
                <a <?php if (basename($referrer, '.php')=="index") echo "id='active'";?> href="/"><b>home</b></a>
                <a <?php if (basename($referrer, '.php')=="projects") echo "id='active'";?> href="projects"><b>pipeline</b></a>
                <a <?php if (basename($referrer, '.php')=="careers") echo "id='active'";?> href="careers"><b>careers</b></a>
                <a <?php if (basename($referrer, '.php')=="contact") echo "id='active'";?> href="contact"><b>contact us</b></a>
            </div>
            <div id="mobile-ham-container" onclick="toggleHam(this)">
                <div class="bar1"></div>
                <div class="bar2"></div>
                <div class="bar3"></div>
            </div>
            <div id="mobile-nav">
                <a <?php if (basename($referrer, '.php')=="index") echo "id='active'";?> href="/"><b>home</b></a>
                <a <?php if (basename($referrer, '.php')=="projects") echo "id='active'";?> href="projects"><b>pipeline</b></a>
                <a <?php if (basename($referrer, '.php')=="careers") echo "id='active'";?> href="careers"><b>careers</b></a>
                <a <?php if (basename($referrer, '.php')=="contact") echo "id='active'";?> href="contact"><b>contact us</b></a>
            </div>
        </div>
    </header>
    <script src="scripts/shrink-header.js"></script>
    <section id="page-wrap">
