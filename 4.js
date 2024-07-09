function contador() {
    let palabra = document.getElementById('inputPalabra').value.toLowerCase();
    let contadorLetra = {};
    let i = 0;

    while (i < palabra.length) {
        let letra = palabra[i];
        if (contadorLetra[letra]) {
            contadorLetra[letra]++;
        } else {
            contadorLetra[letra] = 1;
        }
        i++;
    }

    let resultDiv = document.getElementById('resultado');
    resultDiv.innerHTML = '<h2>Contiene:</h2>';
    let tabla = "<table class='table table-bordered'><thead><tr><th>Letra</th><th>Conteo</th></tr></thead><tbody>";

    for (let letra in contadorLetra) {
        let contador = contadorLetra[letra];
        let contadorTexto = contador === 1 ? 'Una' : contador === 2 ? 'Dos' : contador === 3 ? 'Tres' : contador === 4 ? 'Cuatro' : contador === 5 ? 'Cinco' : contador;
        tabla += `<tr><td>${letra}</td><td>${contadorTexto}</td></tr>`;
    }

    tabla += "</tbody></table>";
    resultDiv.innerHTML += tabla;
}
