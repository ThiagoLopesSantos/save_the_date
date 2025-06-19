AOS.init();

const dataDoEvento = new Date("Jun 23, 2025 18:00:00");
const timeStampDoEvento = dataDoEvento.getTime();

const contaAsHoras = setInterval(function (){
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaAteOEvento = timeStampDoEvento - timeStampAtual;

    const diaEmMs = 1000 * 60 * 60 * 24;
    const horaEmMs = 1000 * 60 * 60;
    const minutoEmMs = 1000 * 60;
    const segundoEmMs = 1000;

    const diasAteOEvento = Math.floor(distanciaAteOEvento / diaEmMs);
    const horasAteOEvento = Math.floor((distanciaAteOEvento % diaEmMs) / horaEmMs);
    const minutosAteOEvento = Math.floor((distanciaAteOEvento % horaEmMs) / minutoEmMs);
    const segundosAteOEvento = Math.floor((distanciaAteOEvento % minutoEmMs) / segundoEmMs);

    document.getElementById('contador').innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`;

    if (distanciaAteOEvento < 0) {
        clearInterval(contaAsHoras);
        document.getElementById('contador').innerHTML = 'Evento concluído!';
    }
}, 1000);

// funcionamento do mini menu
document.addEventListener("DOMContentLoaded", function () {
    const miniMenu = document.getElementById('miniMenu');
    const miniMenuList = document.getElementById('miniMenuList');
    const hamburguer = document.getElementById('hamburgerBtn');
    
    // mostra o mini menu após sair da tela principal
    window.addEventListener('scroll', () => {
        if (window.scrollY > window.innerHeight * 0.6) {
            miniMenu.classList.remove('hidden');
        } else {
            miniMenu.classList.add('hidden');
        }
    });

    // menu hamburger para tablet e celular
    hamburguer.addEventListener('click', () => {
        miniMenuList.classList.toggle('hiddenList');
    });
});
