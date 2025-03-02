

document.addEventListener("DOMContentLoaded", function ()
{

    // Variables - vanillakei/Judiell

    const languages = {"en-us": "English", "zh-cn": "中文", "ko": "한국어", "ja": "日本語", "ru": "Русский"};
    const regions = {"US": "en-us", "CN": "zh-cn", "KR": "ko", "JP": "ja", "RU": "ru"};
    let userLang = navigator.language.toLowerCase();
    let userRegion = "US"; 

    //
    //
    //  Region Detection Functions (IP Based) - coffeestan/stan :)
    //
    //

    async function fetchIPLocation()
    {
        try
        {
            let response = await fetch("https://ipapi.co/json/");
            let data = await response.json();
            userRegion = data.country_code || "US";
            setRegion(userRegion);
        } catch (error)
        {
            console.error("Failed to fetch location", error);
        }
    }

    function setRegion(region) {
        let flagIcon = document.getElementById("flag-icon");
        flagIcon.src = `https://flagcdn.com/${region.toLowerCase()}.svg`;
        flagIcon.alt = region;
    }

    document.getElementById("language-select").addEventListener("change", function (event) {
        setLanguage(event.target.value);
    });
    
    //
    //
    //  Language Detection Functions (Browser preferred language Based) - caramelchris/chris :)
    //
    //

    function getLanguagePath(lang) {
        return `new/languages/${lang}/home.html`; // yorwebsite.com/${lang}/ should appear in the url but not possible in static hosting (github hosting)
    }
    
    function setLanguage(lang) {
        window.location.href = getLanguagePath(lang);
    }
    
    function detectLanguage() {
        let detectedLang = regions[userRegion] || "en-us";
        if (languages[userLang]) {
            detectedLang = userLang;
        }
        setLanguage(detectedLang);
    }
    
    if (!window.location.pathname.match(/^\/(en-us|zh-cn|ko|ja|ru)\//)) {
        detectLanguage();
    }
    
    document.getElementById("language-select").addEventListener("change", function (event) {
        setLanguage(event.target.value);
    });

    document.getElementById("flag-container").addEventListener("click", function () {
        let dropdown = document.getElementById("language-dropdown");
        dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
    });
});