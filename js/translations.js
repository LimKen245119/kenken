const translations = {
    en: {
        home: "Home",
        about: "About Us",
        services: "Services",
        why: "Why Us",
        team: "Team",
        login: "Login",
        title: "GARDEN WONDERLAND ASIA",
        language: "English",
        theme: "Wisdom<br>Create the future",
    },
    zh: {
        home: "首页",
        about: "关于我们",
        services: "服务",
        why: "园区录影",
        team: "团队",
        login: "登录",
        title: "仙境花园［种生基］",
        language: "中文",
        theme: "智慧<br>开创未来",
    }
};

function setLanguage(lang) {
     // Update navigation links
     document.querySelector('.nav-link[href="index.html"]').innerText = translations[lang].home;
     document.querySelector('.nav-link[href="about.html"]').innerText = translations[lang].about;
     document.querySelector('.nav-link[href="service.html"]').innerText = translations[lang].services;
     document.querySelector('.nav-link[href="why.html"]').innerText = translations[lang].why;
     document.querySelector('.nav-link[href="team.html"]').innerText = translations[lang].team;
     document.querySelector('.nav-link[href="#"]').innerHTML = `<i class="fa fa-user" aria-hidden="true"></i> ${translations[lang].login}`;
     
     document.querySelector('#titleText').innerText = translations[lang].title;
     // Update the language dropdown
     document.querySelector('.dropdown-toggle').innerText = translations[lang].language;
     
     // Update the theme heading
     document.querySelector('#theme').innerHTML = translations[lang].theme;
 }