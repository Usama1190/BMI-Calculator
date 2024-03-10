function myFunction() {
    var userHeight = document.getElementById('height').value;
    var userWeight = document.getElementById('weight').value;

    // convert into meter
    var userHeightMt = userHeight / 100;  

    // bmi formula
    var bmiCalculate = userWeight / (userHeightMt * userHeightMt);

    // four decimal places
    var bmiCalculateFn = bmiCalculate.toFixed(4);

    if (bmiCalculateFn >= 8.00 && bmiCalculateFn <= 18.5) {
        document.getElementById('calculate').innerHTML = "Underweight range: " + bmiCalculateFn;
        document.getElementById('calculate').style.backgroundColor = '#4a934a';
    }
    else if (bmiCalculateFn > 18.5 && bmiCalculateFn <= 24.9) {
        document.getElementById('calculate').innerHTML = "Healthy weight range: " + bmiCalculateFn;
        document.getElementById('calculate').style.backgroundColor = '#4a934a';
    }
    else if (bmiCalculateFn > 25 && bmiCalculateFn <= 29.9) {
        document.getElementById('calculate').innerHTML = "Overweight range: " + bmiCalculateFn;
        document.getElementById('calculate').style.backgroundColor = '#bb2124';
    }
    else if (bmiCalculateFn > 30.0 && bmiCalculateFn <= 39.9) {
        document.getElementById('calculate').innerHTML = "Obese range: " + bmiCalculateFn;
        document.getElementById('calculate').style.backgroundColor = '#ff0e0e';
    }
    else if (bmiCalculateFn < 8.00 || bmiCalculateFn > 39.9) {
        document.getElementById('calculate').innerHTML = "Invalid height or weight";
        document.getElementById('calculate').style.backgroundColor = '#ff0e0e';
    }
}