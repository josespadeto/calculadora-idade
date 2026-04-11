const translations = {
    pt: {
        navAge: "Idade", navImc: "IMC", navCal: "Calorias", navBio: "Bio",
        titleAge: "Calculadora de Idade", titleImc: "Calculadora de IMC", titleCal: "Gasto Calórico", titleBio: "Idade Biológica",
        lblBirth: "Data de Nascimento:", lblWeight: "Peso (kg):", lblHeight: "Altura (m):", lblAge: "Idade Atual:", lblGender: "Gênero:",
        lblEx: "Exercício:", lblDiet: "Dieta:", btnCalc: "Calcular",
        years: "anos", resultText: "Resultado:", affText: "Dica de Saúde:", affLink: "Ver na Amazon", privacy: "Privacidade"
    },
    en: {
        navAge: "Age", navImc: "BMI", navCal: "Calories", navBio: "Bio",
        titleAge: "Age Calculator", titleImc: "BMI Calculator", titleCal: "Calorie Burn", titleBio: "Biological Age",
        lblBirth: "Date of Birth:", lblWeight: "Weight (kg):", lblHeight: "Height (m):", lblAge: "Current Age:", lblGender: "Gender:",
        lblEx: "Exercise:", lblDiet: "Diet:", btnCalc: "Calculate",
        years: "years old", resultText: "Result:", affText: "Health Tip:", affLink: "Shop on Amazon", privacy: "Privacy"
    },
    es: {
        navAge: "Edad", navImc: "IMC", navCal: "Calorías", navBio: "Bio",
        titleAge: "Calculadora de Edad", titleImc: "Calculadora de IMC", titleCal: "Gasto Calórico", titleBio: "Edad Biológica",
        lblBirth: "Fecha de Nacimiento:", lblWeight: "Peso (kg):", lblHeight: "Altura (m):", lblAge: "Edad Actual:", lblGender: "Género:",
        lblEx: "Ejercicio:", lblDiet: "Dieta:", btnCalc: "Calcular",
        years: "años", resultText: "Resultado:", affText: "Dato Saludable:", affLink: "Ver en Amazon", privacy: "Privacidad"
    }
};

let currentLang = 'pt';

function setLanguage(lang) {
    currentLang = lang;
    const t = translations[lang];
    document.getElementById('nav-age').innerText = t.navAge;
    document.getElementById('nav-imc').innerText = t.navImc;
    document.getElementById('nav-cal').innerText = t.navCal;
    document.getElementById('nav-bio').innerText = t.navBio;
    document.getElementById('txt-title-age').innerText = t.titleAge;
    document.getElementById('txt-title-imc').innerText = t.titleImc;
    document.getElementById('txt-title-cal').innerText = t.titleCal;
    document.getElementById('txt-title-bio').innerText = t.titleBio;
    document.getElementById('lbl-birth').innerText = t.lblBirth;
    document.getElementById('lbl-weight-imc').innerText = t.lblWeight;
    document.getElementById('lbl-height-imc').innerText = t.lblHeight;
    document.getElementById('lbl-weight-cal').innerText = t.lblWeight;
    document.getElementById('lbl-age-cal').innerText = t.lblAge;
    document.getElementById('lbl-gender').innerText = t.lblGender;
    document.getElementById('lbl-ex').innerText = t.lblEx;
    document.getElementById('lbl-diet').innerText = t.lblDiet;
    document.querySelectorAll('.btn-main').forEach(b => b.innerText = t.btnCalc);
    document.getElementById('txt-privacy').innerText = t.privacy;
}

function showTool(tool) {
    document.querySelectorAll('.tool-section').forEach(s => s.style.display = 'none');
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
    document.getElementById('result').innerHTML = `${y} ${translations[currentLang].years}`;
    showAff();
}

function calculateIMC() {
    const w = document.getElementById('weight-imc').value;
    const h = document.getElementById('height-imc').value;
    if(!w || !h) return;
    const imc = (w / (h * h)).toFixed(2);
    document.getElementById('result').innerHTML = `IMC: ${imc}`;
    showAff();
}

function calculateCal() {
    const w = document.getElementById('weight-cal').value;
    const a = document.getElementById('age-cal').value;
    const g = document.getElementById('gender-cal').value;
    if(!w || !a) return;
    let tmb = (g === 'male') ? (10 * w + 625 - 5 * a + 5) : (10 * w + 625 - 5 * a - 161);
    document.getElementById('result').innerHTML = `${tmb.toFixed(0)} kcal / dia`;
    showAff();
}

function calculateBio() {
    const crono = parseInt(document.getElementById('age-cal').value) || 65;
    const ex = parseInt(document.getElementById('bio-ex').value);
    const dt = parseInt(document.getElementById('bio-diet').value);
    document.getElementById('result').innerHTML = `Bio-Idade: ${crono + ex + dt} ${translations[currentLang].years}`;
    showAff();
}

function showAff() {
    const t = translations[currentLang];
    document.getElementById('affiliate-area').style.display = 'block';
    document.getElementById('aff-text').innerText = t.affText;
    document.getElementById('aff-link').innerText = t.affLink;
    document.getElementById('aff-link').href = "https://www.amazon.com.br/s?k=longevidade";
}
