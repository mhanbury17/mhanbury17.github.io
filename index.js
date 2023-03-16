window.addEventListener('scroll', () => {
    if (window.pageYOffset < window.innerHeight) {
        IntroductionPageHandler(true);
        ProjectsPageHandler(false);
    }
    else if (window.pageYOffset < window.innerHeight * 2) {
        document.getElementById('projectsPage').style.opacity = 1;
        ProjectsPageHandler(true);
    }
});

function IntroductionPageHandler(entry) {
    if (entry)
        document.getElementById('introductionPage').style.opacity = 1;
    else    
        document.getElementById('introductionPage').style.opacity = 0;

    if (window.pageYOffset > 1)
        document.getElementById('scroll').style.animation = 'fadeout 250ms';
    else
        document.getElementById('scroll').style.animation = 'fade 4s infinite';

    var gradient = 100 - (window.pageYOffset*1.25 / window.innerHeight)*100;
    document.getElementById('gradient').style.top = `${window.pageYOffset}px`;
    document.getElementById('resumeBtn').style.top = `${window.pageYOffset + 40}px`;
    document.getElementById('nameCard').style.top = `${window.pageYOffset}px`;

    document.getElementById('gradient').style.backgroundImage = `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #0A0A0A ${gradient}%), url('media/code.png')`;
    document.getElementById('resumeBtn').style.transitionDuration = `0ms`;
    
    document.getElementById('resumeBtn').style.opacity = `${gradient}%`;
    document.getElementById('nameCard').style.opacity = `${gradient}%`;
}

function ProjectsPageHandler(entry) {
    if (entry) {
        document.getElementById('projectsPage').style.animation = 'fadein 1500ms';
        document.getElementById('projectsPage').style.opacity = 1;
    }
    else {
        document.getElementById('projectsPage').style.animation = 'fadeout 250ms';
        document.getElementById('projectsPage').style.opacity = 0;
    }
}

document.addEventListener('DOMContentLoaded', function() {

});