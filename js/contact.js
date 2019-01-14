$('#contact-form' ).submit(function(event) {
event.preventDefault();

let data_form = $('form').serialize();

$.ajax({
    url: 'https://sendmailtccomponentes.herokuapp.com/contact',
    type: 'post',
    data: data_form,
    cache: false,
    success: function(result){
      //window.location.replace("/");
      alert('Formulário enviado!');
      $('form')[0].reset();
    },
    error: function(){
      alert(`Formulário não enviado!`);
    }
  });


});
