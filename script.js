
// ============================================
// FUNCIONALIDADE PRINCIPAL: GERADOR DE DICAS SUSTENTÁVEIS
// ============================================

const dicas = [
    "💧 Troque a irrigação por aspersão pelo gotejamento: economia de até 50% de água!",
    "🌱 Plante árvores nativas nas áreas de reserva legal da sua propriedade.",
    "🚜 Adote a Integração Lavoura-Pecuária-Floresta (ILPF) para produzir sem desmatar.",
    "🔋 Instale placas solares no campo: reduza custos e evite queimadas.",
    "📢 Denuncie desmatamento ilegal: disque 0800 61 8080 (Ibama).",
    "♻️ Recicle embalagens de agrotóxicos: devolva na central de recebimento.",
    "🌎 Prefira alimentos com certificação orgânica ou de origem sustentável.",
    "🐝 Proteja nascentes e matas ciliares: elas garantem água para toda a produção.",
    "📚 Eduque seus vizinhos e trabalhadores rurais sobre práticas sustentáveis.",
    "💚 O agro forte é aquele que cuida do solo para as próximas gerações!"
];

const botao = document.getElementById('btnGerarDica');
const textoDica = document.getElementById('textoDica');

function gerarDicaAleatoria() {
    const indice = Math.floor(Math.random() * dicas.length);
    const dicaEscolhida = dicas[indice];
    textoDica.textContent = dicaEscolhida;
    
    // Efeito visual
    textoDica.style.transform = 'scale(1.02)';
    setTimeout(() => {
        textoDica.style.transform = 'scale(1)';
    }, 200);
}

botao.addEventListener('click', gerarDicaAleatoria);

// Carregar uma dica inicial ao abrir o site
window.addEventListener('DOMContentLoaded', () => {
    gerarDicaAleatoria();
});

// ============================================
// ACESSIBILIDADE: AUMENTAR E DIMINUIR FONTE
// ============================================

let tamanhoFonte = 100; // porcentagem
const body = document.body;
const btnAumentar = document.getElementById('btnAumentar');
const btnDiminuir = document.getElementById('btnDiminuir');

function aumentarFonte() {
    if (tamanhoFonte < 130) {
        tamanhoFonte += 10;
        body.style.fontSize = tamanhoFonte + '%';
    }
}

function diminuirFonte() {
    if (tamanhoFonte > 80) {
        tamanhoFonte -= 10;
        body.style.fontSize = tamanhoFonte + '%';
    }
}

btnAumentar.addEventListener('click', aumentarFonte);
btnDiminuir.addEventListener('click', diminuirFonte);

// ============================================
// NAVEGAÇÃO SIMPLIFICADA (SCROLL SUAVE)
// ============================================
const links = document.querySelectorAll('.menu a');

links.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const destino = this.getAttribute('href');
        const elemento = document.querySelector(destino);
        
        if (elemento) {
            elemento.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

console.log('✅ AgroTop carregado - Funcionalidades: Gerador de Dicas, Acessibilidade, Scroll Suave');
