const translations = {
    pt: {
        title: "Calculadora de Idade",
        label: "Data de Nascimento:",
        btn: "Calcular Idade",
        years: "anos",
        months: "meses",
        days: "dias",
        resultText: "Você tem",
        error: "Por favor, insira uma data válida.",
        privacy: "Política de Privacidade",
        affText: "Recomendação de Leitura:",
        affLinkText: "Livros sobre Longevidade na Amazon",
        affUrl: "https://www.amazon.com.br/s?k=longevidade&tag=SEU_TAG" 
    },
    en: {
        title: "Age Calculator",
        label: "Date of Birth:",
        btn: "Calculate Age",
        years: "years old",
        months: "months",
        days: "days",
        resultText: "You are",
        error: "Please enter a valid date.",
        privacy: "Privacy Policy",
        affText: "Recommended Reading:",
        affLinkText: "Best Longevity Books on Amazon",
        affUrl: "https://www.amazon.com/s?k=longevity&tag=YOUR_TAG"
    },
    es: {
        title: "Calculadora de Edad",
        label: "Fecha de Nacimiento:",
        btn: "Calcular Edad",
        years: "años",
        months: "meses",
        days: "días",
        resultText: "Tienes",
        error: "Por favor, introduce una fecha válida.",
        privacy: "Política de Privacidad",
        affText: "Lectura Recomendada:",
        affLinkText: "Libros sobre longevidad en Amazon",
        affUrl: "https://www.amazon.es/s?k=longevidad&tag=TU_TAG"
    }
};

let currentLang = 'pt';

function setLanguage(lang) {
    currentLang = lang;
    document.getElementById('txt-title').innerText = translations[lang].title;
    document.getElementById('txt-label').innerText = translations[lang].label;
    document.getElementById('txt-btn').innerText = translations[lang].btn;
    document.getElementById('txt-privacy').innerText = translations[lang].privacy;
    
    // Limpa resultados ao trocar idioma para manter a lógica limpa
    document.getElementById('result').innerHTML = ""; 
    document.getElementById('affiliate-area').style.display = "none";
}

function calculateAge() {
    const birthdateInput = document.getElementById('birthdate').value;
    const resultDiv = document.getElementById('result');
    const affArea = document.getElementById('affiliate-area');

    if (!birthdateInput) {
        resultDiv.innerHTML = `<p style="color:red">${translations[currentLang].error}</p>`;
        affArea.style.display = "none";
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

    // EXIBIR RECOMENDAÇÃO DE AFILIADO
    document.getElementById('aff-text').innerText = t.affText;
    document.getElementById('aff-link').innerText = t.affLinkText;
    document.getElementById('aff-link').href = t.affUrl;
    affArea.style.display = "block";
}
