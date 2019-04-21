const figcaption = document.querySelector("figcaption");
const links = document.querySelector(".gallery__nav");
const image = document.querySelector(".gallery__image");
let forms = $('.needs-validation');

for (let i = 0; i < links.children.length; i++){
    const fio = links.children[i];
    fio.addEventListener("click", function(event){
        event.preventDefault();

        const img = this.dataset.image;
        image.src = img;
        
        const text = this.dataset.title;
        figcaption.innerHTML = text;
    })
}

forms.validate({
    errorElement: "span",
    rules: {
        name: "required",
        email: {
            required: true,
            email: true
        },
        phone: {
            required: true,
        },
        text: "required",
    },
    messages: {
        name: "Por favor, digite seu nome",
        email: {
          required: "Por favor, digite seu email",
          email: "Por favor, digite um email com o formato name@domain.com"
        },
        phone: {
            required: "Por favor, digite o seu telefone",
        },
        text: {
            required: "Por favor, digite sua mensagem",
      },
    }
})

$('.nav__ajp a').click(function() {
    if ( !$(this).parent().hasClass('dropdown')) {
       $('.navbar-collapse').collapse('hide'); 
    }
 });