const translations = {
    pt: {
        navAge: "Idade", navImc: "IMC", titleAge: "Calculadora de Idade", titleImc: "Calculadora de IMC",
        labelBirth: "Data de Nascimento:", btnCalc: "Calcular", lblWeight: "Peso (kg):", lblHeight: "Altura (m):",
        years: "anos", months: "meses", days: "dias", resultText: "Resultado:", privacy: "Privacidade",
        affText: "Recomendação:", affLink: "Ver na Amazon",
        error: "Preencha os dados corretamente."
    },
    en: {
        navAge: "Age", navImc: "BMI", titleAge: "Age Calculator", titleImc: "BMI Calculator",
        labelBirth: "Date of Birth:", btnCalc: "Calculate", lblWeight: "Weight (kg):", lblHeight: "Height (m):",
        years: "years", months: "months", days: "days", resultText: "Result:", privacy: "Privacy",
        affText: "Recommendation:", affLink: "View on Amazon",
        error: "Please fill in the data correctly."
    },
    es: {
        navAge: "Edad", navImc: "IMC", titleAge: "Calculadora de Edad", titleImc: "Calculadora de IMC",
        labelBirth: "Fecha de Nacimiento:", btnCalc: "Calcular", lblWeight: "Peso (kg):", lblHeight: "Altura (m):",
        years: "años", months: "meses", days: "días", resultText: "Resultado:", privacy: "Privacidad",
        affText: "Recomendación:", affLink: "Ver en Amazon",
        error: "Complete os dados corretamente."
    }
};

let currentLang = 'pt';

function setLanguage(lang) {
    currentLang = lang;
    const t = translations[lang];
    document.getElementById('nav-age').innerText = t.navAge;
    document.getElementById('nav-imc').innerText = t.navImc;
    document.getElementById('txt-title').innerText = t.titleAge;
    document.getElementById('txt-title-imc').innerText = t.titleImc;
    document.getElementById('txt-label').innerText = t.labelBirth;
    document.getElementById('lbl-weight').innerText = t.lblWeight;
    document.getElementById('lbl-height').innerText = t.lblHeight;
    document.getElementById('txt-btn').innerText = t.btnCalc;
    document.getElementById('txt-btn-imc').innerText = t.btnCalc;
    document.getElementById('txt-privacy').innerText = t.privacy;
    document.getElementById('result').innerHTML = "";
    document.getElementById('affiliate-area').style.display = "none";
}

function showTool(tool) {
    document.getElementById('tool-age').style.display = (tool === 'age') ? 'block' : 'none';
    document.getElementById('tool-imc').style.display = (tool === 'imc') ? 'block' : 'none';
    document.getElementById('result').innerHTML = "";
    document.getElementById('affiliate-area').style.display = "none";
}

function calculateAge() {
    const birthdateInput = document.getElementById('birthdate').value;
    if (!birthdateInput) { alert(translations[currentLang].error); return; }
    
    const birthDate = new Date(birthdateInput);
    const today = new Date();
    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    if (days < 0) { months--; days += new Date(today.getFullYear(), today.getMonth(), 0).getDate(); }
    if (months < 0) { years--; months += 12; }

    const t = translations[currentLang];
    document.getElementById('result').innerHTML = `${t.resultText} ${years} ${t.years}, ${months} ${t.months} e ${days} ${t.days}.`;
    showAffiliate();
}

function calculateIMC() {
    const w = document.getElementById('weight').value;
    const h = document.getElementById('height').value;
    if (!w || !h) { alert(translations[currentLang].error); return; }
    const imc = (w / (h * h)).toFixed(2);
    document.getElementById('result').innerHTML = `${translations[currentLang].resultText} IMC ${imc}`;
    showAffiliate();
}

function showAffiliate() {
    const t = translations[currentLang];
    document.getElementById('aff-text').innerText = t.affText;
    document.getElementById('aff-link').innerText = t.affLink;
    document.getElementById('aff-link').href = "https://www.amazon.com.br/s?k=saude";
    document.getElementById('affiliate-area').style.display = "block";
}
