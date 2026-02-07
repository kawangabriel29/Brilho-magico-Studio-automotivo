const WHATSAPP_PHONE = "5538998853463";

document.addEventListener('DOMContentLoaded', () => {
    

    const btnConfirmar = document.querySelector('.booking-form .btn-primary');
    
    if (btnConfirmar) {
        btnConfirmar.addEventListener('click', (e) => {
            e.preventDefault(); // Impede recarregamento da página

            // Estratégia infalível: Pega todos os inputs de texto na ordem que aparecem
            const inputs = document.querySelectorAll('.booking-form input[type="text"]');
            const select = document.querySelector('.booking-form select');

            // Garante que os campos existem antes de tentar ler
            if(inputs.length < 3) {
                console.error("Erro: Campos do formulário não encontrados no HTML.");
                return;
            }

            // Mapeia os valores com base na ordem do HTML
            const nome = inputs[0].value;    // Primeiro input (Nome)
            const veiculo = inputs[1].value; // Segundo input (Veículo)
            const servico = select.value;    // Select (Serviço)
            const data = inputs[2].value;    // Terceiro input (Data)

            // Validação simples
            if (!nome || !veiculo || !servico || servico.includes("Selecione")) {
                alert("Por favor, preencha o nome, o veículo e escolha um serviço.");
                return;
            }

            // Monta a mensagem formatada
            const mensagem = encodeURIComponent(
                `Olá! Gostaria de realizar um agendamento no Brilho Mágico:\n\n` +
                `*Nome:* ${nome}\n` +
                `*Veículo:* ${veiculo}\n` +
                `*Serviço:* ${servico}\n` +
                `*Data Preferida:* ${data}`
            );

            // Envia para o WhatsApp
            window.open(`https://wa.me/${WHATSAPP_PHONE}?text=${mensagem}`, '_blank');
        });
    }


    const botoesServico = document.querySelectorAll('.card-servico .btn-small');
    
    botoesServico.forEach(botao => {
        botao.addEventListener('click', (e) => {
            e.preventDefault();
            const card = e.target.closest('.card-servico');
            // Busca o título (h4) e o preço (.price) dentro do card clicado
            const nomeServico = card.querySelector('h4').innerText;
            const preco = card.querySelector('.price').innerText;

            const mensagem = encodeURIComponent(`Olá! Vi no site o serviço de *${nomeServico}* (${preco}) e gostaria de agendar.`);
            window.open(`https://wa.me/${WHATSAPP_PHONE}?text=${mensagem}`, '_blank');
        });
    });

    // ============================================================
    // Botão do Google Maps
    // ============================================================
    const btnMaps = document.querySelector('.btn-map');
    if (btnMaps) {
        btnMaps.addEventListener('click', (e) => {
            e.preventDefault();
            // Link direto para pesquisa no Maps
            const endereco = "Av. Floripes Crispim, 644, Panorama, Salinas - MG";
            window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(endereco)}`, '_blank');
        });
    }

    // ============================================================
    // Botão Flutuante e Botão da Hero Section
    // ============================================================
    const btnHero = document.querySelector('.section-hero .btn-primary');
    const fabWhatsapp = document.querySelector('.fab-whatsapp');

    const acaoGeral = (e) => {
        e.preventDefault(); // Impede o link de pular para o topo (#)
        const mensagem = encodeURIComponent("Olá! Gostaria de fazer um orçamento para estética automotiva.");
        window.open(`https://wa.me/${WHATSAPP_PHONE}?text=${mensagem}`, '_blank');
    };

    if (btnHero) btnHero.addEventListener('click', acaoGeral);
    if (fabWhatsapp) fabWhatsapp.addEventListener('click', acaoGeral);
});