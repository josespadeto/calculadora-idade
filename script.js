function calculateCal() {
    const gender = document.getElementById('gender-cal').value;
    const w = parseFloat(document.getElementById('weight-cal').value);
    const h = parseFloat(document.getElementById('height-cal').value);
    const a = parseInt(document.getElementById('age-cal').value);

    if(!w || !h || !a) return;

    // Fórmula de Harris-Benedict Revisada
    let tmb;
    if (gender === 'male') {
        tmb = 66.47 + (13.75 * w) + (5.003 * h) - (6.75 * a);
    } else {
        tmb = 655.1 + (9.563 * w) + (1.850 * h) - (4.676 * a);
    }

    const t = translations[currentLang];
    document.getElementById('result').innerHTML = `TMB: ${tmb.toFixed(0)} kcal / ${t.days}`;
    showAff();
}

function calculateBio() {
    // Pega a idade cronológica da calculadora de idade (se preenchida) ou pergunta
    const cronoAgeInput = document.getElementById('age-cal').value || 65; 
    const exercise = parseInt(document.getElementById('bio-exercise').value);
    const diet = parseInt(document.getElementById('bio-diet').value);
    const smoke = parseInt(document.getElementById('bio-smoke').value);

    // Cálculo: Base cronológica + soma dos fatores de risco/proteção
    let bioAge = parseInt(cronoAgeInput) + exercise + diet + smoke;

    let mensagem = "";
    if (bioAge < cronoAgeInput) {
        mensagem = currentLang === 'pt' ? "Incrível! Seu corpo está mais jovem que sua idade." : "Amazing! Your body is younger than your age.";
    } else {
        mensagem = currentLang === 'pt' ? "Atenção: Seus hábitos estão acelerando seu envelhecimento." : "Warning: Your habits are accelerating your aging.";
    }

    document.getElementById('result').innerHTML = `<span style="font-size:1.5rem">${bioAge} ${translations[currentLang].years}</span><br><small>${mensagem}</small>`;
    showAff();
}
