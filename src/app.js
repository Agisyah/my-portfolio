import * as button from './components/button.js';

const   sectionHome = document.getElementById('hero'),
        sectionAbout = document.getElementById('about'),
        sectionSkills = document.getElementById('skills'),
        sectionProjects = document.getElementById('projects'),
        sectionBlog = document.getElementById('blog'),
        sectionContact = document.getElementById('contact');

const section = [sectionHome, sectionAbout, sectionSkills, sectionProjects, sectionBlog, sectionContact];

const options = {
    root: null,
    rootMargin: 0,
    scrollMargin: 0,
    threshold: 1,
};

const observer = new IntersectionObserver ((entries) => {
    entries.forEach(entry =>{
        switch (entry.target) {
            case sectionHome:
                if (entry.isIntersecting) {
                    button.buttonHome.classList.add('focused'),
                    button.focus.style.transform = 'translateX(216px)';
                } else {
                    button.buttonHome.classList.remove('focused');
                };
                break;
            case sectionAbout:
                if (entry.isIntersecting) {
                    button.buttonAbout.classList.add('focused');
                    button.focus.style.transform = 'translateX(392px)';
                } else {
                    button.buttonAbout.classList.remove('focused');
                };
                break;
            case sectionSkills:
                if (entry.isIntersecting) {
                    button.buttonSkills.classList.add('focused'),
                    button.focus.style.transform = 'translateX(568px)';
                } else {
                    button.buttonSkills.classList.remove('focused');
                };
                break;
            case sectionProjects:
                if (entry.isIntersecting) {
                    button.buttonProjects.classList.add('focused'),
                    button.focus.style.transform = 'translateX(744px)';
                } else {
                    button.buttonProjects.classList.remove('focused');
                };
                break;
            case sectionBlog:
                if (entry.isIntersecting) {
                    button.buttonBlog.classList.add('focused')
                    button.focus.style.transform = 'translateX(920px)';
                } else {
                    button.buttonBlog.classList.remove('focused');
                };
                break
            case sectionContact:
                if (entry.isIntersecting) {
                    button.buttonContact.classList.add('focused'),
                    button.focus.style.transform = 'translateX(1096px)';
                } else {
                    button.buttonContact.classList.remove('focused');
                };
                break;
            default:
                return;
        };
    });
},{options});

section.forEach(section => observer.observe(section));

button.buttonTheme.addEventListener("click", () => document.documentElement.classList.toggle('light'));
button.buttonLanguage.addEventListener("click", () => button.switchLanguage());