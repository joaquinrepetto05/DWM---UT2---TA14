const input = document.getElementById('inputText');
const btnAñadir = document.getElementById('addElement');
const lista = document.getElementById('list');

btnAñadir.addEventListener('click', () => {
    const texto = input.value.trim();

    if (texto !== '') {
        
        const nuevoElemento = document.createElement('li');
        
        nuevoElemento.textContent = texto;
        
        lista.appendChild(nuevoElemento);
        
        input.value = '';
    }
});