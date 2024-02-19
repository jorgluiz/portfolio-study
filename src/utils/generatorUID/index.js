// A dica de hoje é bem simples e muito utilizada para gerar tokens e chaves de maneira aleatória. 
// Iremos fazer uma função random que criará uma string aleatória com tamanho e caracteres customizáveis.

function geraStringAleatoria() {
    let tamanho = Math.floor(Math.random() * 20)
    var stringAleatoria = '';
    var caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < tamanho; i++) {
        stringAleatoria += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }
    return stringAleatoria;
}

export const UID = geraStringAleatoria()

// REFERÊNCIA 
// https://www.webtutorial.com.br/funcao-para-gerar-uma-string-aleatoria-random-com-caracteres-especificos-em-javascript/

