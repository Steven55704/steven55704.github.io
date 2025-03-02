

document.addEventListener("DOMContentLoaded", function ()
{

    // Variables - vanillakei/Judiell :)

    const Language = {"en-us": "English", "zh-cn": "中文", "ko": "한국어", "ja": "日本語", "ru": "Русский"};
    const Country = {"US": "en-us", "CN": "zh-cn", "KR": "ko", "JP": "ja", "RU": "ru"};
    let language = navigator.language.toLowerCase();
    let country = "US"; 

    //
    //
    //  Region Detection Functions (IP Based) - coffeestan/stan :)
    //
    //

    async function FetchIPLocation()
    {
        try
        {
            let response = await fetch("https://ipapi.co/json/");
            let data = await response.json();
            country = data.country_code || "US";
            SetCountry(country);
        } catch (error)
        {
            console.error("Failed to fetch location", error);
        }
    }

    function SetCountry(country) {
        let flagIcon = document.getElementById("flag-icon");
        flagIcon.src = `https://flagcdn.com/${country.toLowerCase()}.svg`;
        flagIcon.alt = country;
    }

    document.getElementById("location-select").addEventListener("change", function (event) {
        let NewCountry = event.target.value;
        SetCountry(NewCountry);
    });

    FetchIPLocation();
    
    //
    //
    //  Language Detection Functions (Browser preferred language Based) - caramelchris/chris :)
    //
    //

    document.getElementById("language-select").addEventListener("change", function (event) {
        let newLanguage = event.target.value;
        setLanguage(newLanguage);
    });

    function GetLanguagePath(lang) {
        return `new/Language/${lang}/home.html`; // yorwebsite.com/${lang}/ should appear in the url but not possible in static hosting (github hosting)
    }
    
    function SetLanguage(lang) {
        window.location.href = getLanguagePath(lang);
    }

    function SetLanguage(lang) {
        document.getElementById("language-select").value = lang;
    }

    function DetectLanguage() {
        for (let lang of languages) {
            if (userLang.startsWith(lang.split('-')[0])) {
                SetLanguage(lang);
                return;
            }
        }
        SetLanguage("en-us"); // Default to English if not matched
    }
    
    // Removed function might be helpful later - chris :)
    /* 
    function DetectLanguage() {
        let DetectedLang = Country[country] || "en-us";
        if (Language[language]) {
            DetectedLang = language;
        }
        setLanguage(detectedLang);
    }
    */
    
    if (!window.location.pathname.match(/^\/(en-us|zh-cn|ko|ja|ru)\//)) {
        DetectLanguage();
    }
    
    document.getElementById("language-select").addEventListener("change", function (event) {
        SetLanguage(event.target.value);
    });

    document.getElementById("flag-container").addEventListener("click", function () {
        let dropdown = document.getElementById("language-dropdown");
        dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
    });
});