// File: java.js

function calculateArea() {
    var sisi = document.getElementById('sisi').value.trim();

    if (sisi === "" || isNaN(sisi)) {
        alert("Masukkan nilai sisi yang valid.");
        return;
    }
    var luasPersegi = sisi * sisi;
    var resultText = "Luas Persegi: " + sisi + " x " + sisi + " = " + luasPersegi;

    // Tampilkan hasil perhitungan
    var resultElement = document.getElementById('result-luas-persegi');
    resultElement.innerHTML = resultText;
    resultElement.style.display = 'block';
    resultElement.scrollIntoView({ behavior: 'smooth' });
    
}
function resetLuasPersegiForm() {
    document.getElementById('result-luas-persegi').style.display = 'none';
    document.getElementById('luas-persegi').reset();
}

function resetKelilingPersegiForm() {
    document.getElementById('result-keliling-persegi').style.display = 'none';
    document.getElementById('keliling-persegi-form').reset();
}

function resetForm() {
    resetLuasPersegiForm();
    resetKelilingPersegiForm();
}



function extractNumber(element, decimalPlaces, allowNegative) {
   
}

function blockNonNumbers(element, event, allowDecimal, allowNegative) {

}

//Unruk keliling persegi

function calculateKeliling() {
    var sisiKeliling = document.getElementById('sisi-keliling').value.trim();

    if (sisiKeliling === "" || isNaN(sisiKeliling)) {
        alert("Masukkan nilai sisi yang valid.");
        return;
    }

    var kelilingPersegi = 4 * sisiKeliling;
    var resultText = "Keliling Persegi: 4 x " + sisiKeliling + " = " + kelilingPersegi;

    // Tampilkan hasil perhitungan
    var resultElement = document.getElementById('result-keliling-persegi');
    resultElement.innerHTML = resultText;
    resultElement.style.display = 'block';

    // Arahkan ke bagian "Keliling Persegi"
    resultElement.scrollIntoView({ behavior: 'smooth' });

   
}
