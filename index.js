document.addEventListener("DOMContentLoaded", function () {
    const languages = ["en-us", "zh-cn", "ko", "ja", "ru"];
    let userLang = navigator.language.toLowerCase();
    
    function getLanguagePath(lang) {
        return `new/languages/${lang}/home.html`; // index.html/${lang}/
    }
    
    function setLanguage(lang) {
        window.location.href = getLanguagePath(lang);
    }
    
    function detectLanguage() {
        for (let lang of languages) {
            if (userLang.startsWith(lang.split('-')[0])) {
                setLanguage(lang);
                return;
            }
        }
        setLanguage("en-us"); // Default to English if not matched
    }
    
    if (!window.location.pathname.match(/^\/(en-us|zh-cn|ko|ja|ru)\//)) {
        detectLanguage();
    }
    
    document.getElementById("language-select").addEventListener("change", function (event) {
        setLanguage(event.target.value);
    });
});