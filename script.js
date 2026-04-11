const translations = {
    pt: {
        navAge: "Idade", navImc: "IMC", navCal: "Calorias", navBio: "Bio",
        titleAge: "Calculadora de Idade", titleImc: "Calculadora de IMC", titleCal: "Gasto Calórico", titleBio: "Idade Biológica",
        labelBirth: "Data de Nascimento:", btnCalc: "Calcular", 
        lblWeight: "Peso (kg):", lblHeight: "Altura (m):", lblAge: "Idade:", lblHabits: "Estilo de vida:",
        years: "anos", months: "meses", days: "dias", resultText: "Resultado:",
        affText: "Sugestão BioCronos:", affLink: "Ver na Amazon",
        privacy: "Privacidade", error: "Preencha todos os campos!"
    },
    en: {
        navAge: "Age", navImc: "BMI", navCal: "Calories", navBio: "Bio",
        titleAge: "Age Calculator", titleImc: "BMI Calculator", titleCal: "Calorie Burn", titleBio: "Biological Age",
        labelBirth: "Date of Birth:", btnCalc: "Calculate", 
        lblWeight: "Weight (kg):", lblHeight: "Height (m):", lblAge: "Age:", lblHabits: "Lifestyle:",
        years: "years", months: "months", days: "days", resultText: "Result:",
        affText: "BioCronos Tip:", affLink: "Shop on Amazon",
        privacy: "Privacy", error: "Please fill all fields!"
    },
    es: {
        navAge: "Edad", navImc: "IMC", navCal: "Calorías", navBio: "Bio",
        titleAge: "Calculadora de Edad", titleImc: "Calculadora de IMC", titleCal: "Gasto de Calorías", titleBio: "Edad Biológica",
        labelBirth: "Fecha de Nacimiento:", btnCalc: "Calcular", 
        lblWeight: "Peso (kg):", lblHeight: "Altura (m):", lblAge: "Edad:", lblHabits: "Estilo de vida:",
        years: "años", months: "meses", days: "días", resultText: "Resultado:",
        affText: "Dato Saludable:", affLink: "Ver en Amazon",
        privacy: "Privacidad", error: "¡Complete todos los campos!"
    }
};

let currentLang = 'pt';

function setLanguage(lang) {
    currentLang = lang;
    const t = translations[lang];
    
    // Menu
    document.getElementById('nav-age').innerText = t.navAge;
    document.getElementById('nav-imc').innerText = t.navImc;
    document.getElementById('nav-cal').innerText = t.navCal;
    document.getElementById('nav-bio').innerText = t.navBio;
    
    // Títulos
    document.getElementById('txt-title').innerText = t.titleAge;
    document.getElementById('txt-title-imc').innerText = t.titleImc;
    document.getElementById('txt-title-cal').innerText = t.titleCal;
    document.getElementById('txt-title-bio').innerText = t.titleBio;
    
    // Labels
    document.getElementById('txt-label').innerText = t.labelBirth;
    document.getElementById('lbl-weight-imc').innerText = t.lblWeight;
    document.getElementById('lbl-height-imc').innerText = t.lblHeight;
    document.getElementById('lbl-weight-cal').innerText = t.lblWeight;
    document.getElementById('lbl-age-cal').innerText = t.lblAge;
    document.getElementById('lbl-habits').innerText = t.lblHabits;
    
    // Botões
    document.getElementById('btn-age').innerText = t.btnCalc;
    document.getElementById('btn-imc').innerText = t.btnCalc;
    document.getElementById('btn-cal').innerText = t.btnCalc;
    document.getElementById('btn-bio').innerText = t.btnCalc;
    
    document.getElementById('txt-privacy').innerText = t.privacy;
    document.getElementById('result').innerHTML = "";
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
    let m = now.getMonth() - birth.getMonth();
    let d = now.getDate() - birth.getDate();
    if (d < 0) { m--; d += new Date(now.getFullYear(), now.getMonth(), 0).getDate(); }
    if (m < 0) { y--; m += 12; }
    document.getElementById('result').innerHTML = `${y} ${translations[currentLang].years}, ${m} ${translations[currentLang].months} e ${d} ${translations[currentLang].days}`;
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
    if(!w || !a) return;
    const tmb = (10 * w) + (6.25 * 175) - (5 * a) + 5;
    document.getElementById('result').innerHTML = `${tmb.toFixed(0)} kcal / dia (TMB)`;
    showAff();
}

function calculateBio() {
    const score = parseInt(document.getElementById('habit-score').value);
    const msg = (score === 0) ? "Sua bio-idade condiz com seu cronológico." : "Sua bio-idade sugere +5 anos de desgaste.";
    document.getElementById('result').innerHTML = msg;
    showAff();
}

function showAff() {
    const t = translations[currentLang];
    document.getElementById('affiliate-area').style.display = 'block';
    document.getElementById('aff-text').innerText = t.affText;
    document.getElementById('aff-link').innerText = t.affLink;
    document.getElementById('aff-link').href = "https://www.amazon.com.br/s?k=longevidade";
}
