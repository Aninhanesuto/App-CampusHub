let currentTestimonial = 1;
const totalTestimonials = 3;
let autoRotateInterval;

// Função para avançar para o próximo depoimento
document.getElementById('next').addEventListener('click', () => {
    currentTestimonial++;
    if (currentTestimonial > totalTestimonials) currentTestimonial = 1;
    updateCarousel();
    resetAutoRotate();
});

// Função para voltar ao depoimento anterior
document.getElementById('prev').addEventListener('click', () => {
    currentTestimonial--;
    if (currentTestimonial < 1) currentTestimonial = totalTestimonials;
    updateCarousel();
    resetAutoRotate();
});

// Função que atualiza o carrossel exibindo o depoimento atual
function updateCarousel() {
    for (let i = 1; i <= totalTestimonials; i++) {
        document.getElementById(`testimonial-${i}`).style.display = (i === currentTestimonial) ? 'block' : 'none';
    }
}

// Função para avançar automaticamente após 5 segundos
function startAutoRotate() {
    autoRotateInterval = setInterval(() => {
        currentTestimonial++;
        if (currentTestimonial > totalTestimonials) currentTestimonial = 1;
        updateCarousel();
    }, 5000);
}

// Função para reiniciar a rotação automática quando houver interação
function resetAutoRotate() {
    clearInterval(autoRotateInterval);
    startAutoRotate();
}

// Suporte à navegação por teclado
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') {
        document.getElementById('next').click();
    } else if (e.key === 'ArrowLeft') {
        document.getElementById('prev').click();
    }
});

// Inicializa o carrossel exibindo o primeiro depoimento e inicia a rotação automática
updateCarousel();
startAutoRotate();
