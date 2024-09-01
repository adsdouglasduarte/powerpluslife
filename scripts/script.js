$(document).ready(function () {
    // Carrossel Slick
    $('#carousel').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        dots: false,
        arrows: false
    })

    let inactivityTimer
    
    // Função para mostrar o botão "Topo"
    function showTopoButton() {
        $('#topo').fadeIn()
        resetInactivityTimer()
    }

    // Função para esconder o botão "Topo"
    function hideTopoButton() {
        $('#topo').fadeOut()
    }

    // Função para resetar o timer de inatividade
    function resetInactivityTimer() {
        clearTimeout(inactivityTimer)
        inactivityTimer = setTimeout(hideTopoButton, 3000) // Esconder após 3 segundos de inatividade
    }

    // Mostrar o botão ao rolar a página
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            showTopoButton()
        } else {
            hideTopoButton()
        }
    })

    // Ocultar o botão se não houver atividade
    $(window).on('scroll', resetInactivityTimer)

    // Ação ao clicar no botão para voltar ao topo
    $('#topo').on('click', function () {
        $('html, body').animate({ scrollTop: 0 }, 600) // Scroll suave para o topo
    })


    // RETIRANDO AÇÃO PADRÃO DO FORMULÁRIO
    $('#form-main').on('submit', function (event) {
        event.preventDefault()
        
        if ($('#form-main').valid()) {

            // Exibir alerta de sucesso
            alert('Sua mensagem foi enviada')

            // Limpar o formulário
            this.reset()
        } else {
            alert('Dados Inválido.')
        }
    })

    // OUVIDOR DO EVENTO MENU HAMBURGER SLIDE TOGGLE ABRIR
    $('.menu-hamburger').on('click', function () {
        $('#navbar').animate({
            width: 'toggle'
        }, 300)
    })

    // OUVIDOR DO EVENTO MENU CLOSE SLIDE TOGGLE FECHAR
    $('#menu-close').on('click', function () {
        $('#navbar').animate({
            width: 'toggle'
        }, 300)
    })

    // SLIDE SLICK SEÇÃO PRODUTOS
    $('.responsive').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ]
    })

    // Validação de form telefone
    $('#tel').mask('(00)00000-0000')

    // Validação de form requiridos
    $('#form-main').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            tel: {
                required: true
            }
        },

        // Validação de form mensagens
        messages: {
            nome: {
                required: 'Preencha o campo nome'
            },
            email: {
                required: 'Preencha o campo e-mail',
                email: 'Preencha o campo e-mail com um formato válido'
            }
        }
    })
})
