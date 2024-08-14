function calculateBMI() {
    const heightInput = document.getElementById('height').value;
    const weightInput = document.getElementById('weight').value;
    const heightUnit = document.getElementById('height-unit').value;
    const weightUnit = document.getElementById('weight-unit').value;

    let height = parseFloat(heightInput);
    let weight = parseFloat(weightInput);

    // Convert height to meters
    switch (heightUnit) {
        case 'cm':
            height = height / 100;
            break;
        case 'ft':
            height = height * 0.3048;
            break;
        case 'in':
            height = height * 0.0254;
            break;
        case 'm':
        default:
            break;
    }

    // Convert weight to kilograms
    switch (weightUnit) {
        case 'lb':
            weight = weight * 0.453592;
            break;
        case 'kg':
        default:
            break;
    }

    // Calculate BMI
    const bmi = weight / (height * height);
    const roundedBMI = Math.round(bmi * 100) / 100;

    // Display result
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `Your BMI is ${roundedBMI}.`;

    // Determine BMI category
    let category = '';
    let advice = '';

    if (bmi < 18.5) {
        category = 'Underweight';
        advice = 'You should gain some weight.';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = 'Normal weight';
        advice = 'You are at a healthy weight.';
    } else if (bmi >= 25 && bmi < 29.9) {
        category = 'Overweight';
        advice = 'You should lose some weight.';
    } else if (bmi >= 30) {
        category = 'Obesity';
        advice = 'You should lose weight.';
    }

    resultDiv.innerHTML += `<br>Your BMI category is <strong>${category}</strong>.<br>${advice}`;
}
