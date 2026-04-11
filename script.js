const translations = {
    pt: {
        title: "Calculadora de Idade",
        label: "Data de Nascimento:",
        btn: "Calcular Idade",
        years: "anos",
        months: "meses",
        days: "dias",
        resultText: "Você tem",
        error: "Por favor, insira uma data válida."
    },
    en: {
        title: "Age Calculator",
        label: "Date of Birth:",
        btn: "Calculate Age",
        years: "years old",
        months: "months",
        days: "days",
        resultText: "You are",
        error: "Please enter a valid date."
    },
    es: {
        title: "Calculadora de Edad",
        label: "Fecha de Nacimiento:",
        btn: "Calcular Edad",
        years: "años",
        months: "meses",
        days: "días",
        resultText: "Tienes",
        error: "Por favor, introduce una fecha válida."
    }
};

let currentLang = 'pt';

function setLanguage(lang) {
    currentLang = lang;
    document.getElementById('txt-title').innerText = translations[lang].title;
    document.getElementById('txt-label').innerText = translations[lang].label;
    document.getElementById('txt-btn').innerText = translations[lang].btn;
    document.getElementById('result').innerHTML = ""; // Limpa resultado ao trocar idioma
}

function calculateAge() {
    const birthdateInput = document.getElementById('birthdate').value;
    const resultDiv = document.getElementById('result');

    if (!birthdateInput) {
        resultDiv.innerHTML = `<p style="color:red">${translations[currentLang].error}</p>`;
        return;
    }

    const birthDate = new Date(birthdateInput);
    const today = new Date();

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    if (days < 0) {
        months--;
        days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }
    if (months < 0) {
        years--;
        months += 12;
    }

    const t = translations[currentLang];
    resultDiv.innerHTML = `<strong>${t.resultText}:</strong><br> 
    ${years} ${t.years}, ${months} ${t.months} e ${days} ${t.days}.`;
}
