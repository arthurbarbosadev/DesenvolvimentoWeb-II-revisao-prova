const inputNome = document.getElementById('inputNome');
const inputCartao = document.getElementById('inputCartao');
const inputValidade = document.getElementById('inputValidade');
const selectBandeira = document.getElementById('selectBandeira');

const radiosModelo = document.querySelectorAll('input[name="modelo"]');
const checkboxesBeneficios = document.querySelectorAll('input[name="beneficios"]');

const cardPreview = document.getElementById('cardPreview');
const viewNome = document.getElementById('viewNome');
const viewNumero = document.getElementById('viewNumero');
const viewValidade = document.getElementById('viewValidade');
const viewBandeira = document.getElementById('viewBandeira');
const viewBeneficios = document.getElementById('viewBeneficios');

inputNome.addEventListener('input', () =>{
    if (inputNome.value.trim() ==='') {
        viewNome.textContent = 'NOME DO TITULAR';
    } else{
        viewNome.textContent = inputNome.value.toUpperCase();
    }
});


inputCartao.addEventListener('input'), () => {

    let valor = inputCartao.value.replace(/\D/g,'');
    
    valor = valor.substring(0, 16);

    let formatado = valor.replace(/(\d{4})(?=\d)/g, '$1');

    inputCartao.value = formatado;
    
     if (formatado === '') {
        viewNumero.textContent = '1234 5678 9101 1213';
    } else {
        viewNumero.textContent = formatado;
    }
}

