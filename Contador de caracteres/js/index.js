/* Chamando a funcao */
document.getElementById('caracteres').onclick = contador_numerico('.caracteres', '.valor')

function contador_numerico(seletor, valor) {
    var textarea = document.querySelector(seletor)

    textarea.addEventListener('input', function() {
        let caracterMax = textarea.maxLength
        let digitando = textarea.value.length

        let texto = document.querySelector(valor).innerText = digitando

        if (texto > 240) {
            document.querySelector(valor).style.color = 'red'
        } else {
            document.querySelector(valor).style.color = 'gray'
        }

    })
    
}