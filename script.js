document.querySelectorAll('.sephirah').forEach(sephirah => {
    sephirah.addEventListener('click', () => {
        alert(`Has seleccionado: ${sephirah.textContent}`);
    });
});