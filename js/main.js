const tabs = document.querySelectorAll('.tab');
const tabContent = document.querySelectorAll('.tab-content');

tabContent[0].style.display = 'block';

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const targetId = tab.dataset.tab;
    
    // Ocultar todas las solapas
    tabContent.forEach(content => {
      content.style.display = 'none';
    });

    // Mostrar la solapas seleccionada
    document.getElementById(targetId).style.display = 'block';
  });
});