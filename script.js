const translations = {
    pt: {
        navAge: "Idade", navImc: "IMC", navBio: "Bio",
        titleAge: "Calculadora de Idade", titleImc: "Calculadora de IMC", titleBio: "Idade Biológica",
        labelBirth: "Data de Nascimento:", btnCalc: "Calcular", 
        lblWeight: "Peso (kg):", lblHeight: "Altura (m):",
        years: "anos", months: "meses", days: "dias", resultText: "Resultado:",
        affText: "Dica de Longevidade:", affLink: "Ver na Amazon",
        privacy: "Privacidade", error: "Preencha os campos!"
    },
    en: {
        navAge: "Age", navImc: "BMI", navBio: "Bio",
        titleAge: "Age Calculator", titleImc: "BMI Calculator", titleBio: "Biological Age",
        labelBirth: "Date of Birth:", btnCalc: "Calculate", 
        lblWeight: "Weight (kg):", lblHeight: "Height (m):",
        years: "years", months: "months", days: "days", resultText: "Result:",
        affText: "Longevity Tip:", affLink: "Shop on Amazon",
        privacy: "Privacy", error: "Please fill in!"
    },
    es: {
        navAge: "Edad", navImc: "IMC", navBio: "Bio",
        titleAge: "Calculadora de Edad", titleImc: "Calculadora de IMC", titleBio: "Edad Biológica",
        labelBirth: "Fecha de Nacimiento:", btnCalc: "Calcular", 
        lblWeight: "Peso (kg):", lblHeight: "Altura (m):",
        years: "años", months: "meses", days: "días", resultText: "Resultado:",
        affText: "Consejo de Salud:", affLink: "Ver en Amazon",
        privacy: "Privacidad", error: "¡Complete los campos!"
    }
};

let currentLang = 'pt';

function setLanguage(lang) {
    currentLang = lang;
    const t = translations[lang];
    document.getElementById('nav-age').innerText = t.navAge;
    document.getElementById('nav-imc').innerText = t.navImc;
    document.getElementById('nav-bio').innerText = t.navBio;
    document.getElementById('txt-title').innerText = t.titleAge;
    document.getElementById('txt-title-imc').innerText = t.titleImc;
    document.getElementById('txt-title-bio').innerText = t.titleBio;
    document.getElementById('txt-label').innerText = t.labelBirth;
    document.getElementById('lbl-weight').innerText = t.lblWeight;
    document.getElementById('lbl-height').innerText = t.lblHeight;
    document.getElementById('txt-btn').innerText = t.btnCalc;
    document.getElementById('txt-btn-imc').innerText = t.btnCalc;
    document.getElementById('txt-btn-bio').innerText = t.btnCalc;
    document.getElementById('txt-privacy').innerText = t.privacy;
    document.getElementById('result').innerHTML = "";
}

function showTool(tool) {
    // Esconde todas as seções primeiro
    document.querySelectorAll('.tool-section').forEach(section => {
        section.style.display = 'none';
    });
    // Mostra apenas a selecionada
    document.getElementById('tool-' + tool).style.display = 'block';
    document.getElementById('result').innerHTML = "";
    document.getElementById('affiliate-area').style.display = "none";
}

function calculateAge() {
    const val = document.getElementById('birthdate').value;
    if(!val) return;
    const birth = new Date(val);
    const now = new Date();
    let y = now.getFullYear() - birth.getFullYear();
    let m = now.getMonth() - birth.getMonth();
    let d = now.getDate() - birth.getDate();
    if (d < 0) { m--; d += new Date(now.getFullYear(), now.getMonth(), 0).getDate(); }
    if (m < 0) { y--; m += 12; }
    document.getElementById('result').innerHTML = `${y} ${translations[currentLang].years}, ${m} ${translations[currentLang].months} e ${d} ${translations[currentLang].days}`;
    showAff();
}

function calculateIMC() {
    const w = document.getElementById('weight').value;
    const h = document.getElementById('height').value;
    if(!w || !h) return;
    const imc = (w / (h*h)).toFixed(2);
    document.getElementById('result').innerHTML = `IMC: ${imc}`;
    showAff();
}

function calculateBio() {
    const score = parseInt(document.getElementById('habit-score').value);
    const res = (score === 0) ? "Sua bio-idade está excelente!" : "Sua bio-idade sugere atenção aos hábitos.";
    document.getElementById('result').innerHTML = res;
    showAff();
}

function showAff() {
    const t = translations[currentLang];
    document.getElementById('affiliate-area').style.display = 'block';
    document.getElementById('aff-text').innerText = t.affText;
    document.getElementById('aff-link').innerText = t.affLink;
    document.getElementById('aff-link').href = "https://www.amazon.com.br/s?k=longevidade";
}
