export function contaPalavras(texto) {
    const paragrafos = extraiParagrafos(texto);
    const contagem = paragrafos.flatMap((paragrafo) => {
            if (!paragrafo) return [];
            return verificaPalavrasDuplicadas(paragrafo);
        })
        console.log(contagem);
}

function extraiParagrafos(texto) {
    return texto.toLowerCase().split('\n');
}

function limpaPalavras(palavra) {
    // Regex / Expressão regular
    return palavra.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');
}

// criar um array com as palavras
// contar as ocorrências
// montar um objeto com o resultado
function verificaPalavrasDuplicadas(texto) {
    const listaPalavras = texto.split(' ');
    const resultado = {};
    listaPalavras.forEach(palavra => {
        if (palavra.length >= 3) {
            const palavraLimpa = limpaPalavras(palavra);
            resultado[palavraLimpa] = (resultado[palavraLimpa] || 0) + 1;
        }
    });
    return resultado;
}