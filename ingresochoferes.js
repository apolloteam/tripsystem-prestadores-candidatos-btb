$(document).ready(function () {
 
  $('.container > form').on('submit', function (e) {
      
      e.preventDefault();

      postToAPI(
          function (result) { // Success Call
            $('.enviadoconductores > h3').removeClass('error').addClass('success').html('Los datos fueron recibidos, nos estaremos contactando en breve. Muchas Gracias!').fadeIn();
          },
          function (error) {  // Error Call
            // TODO: Show Error Message
            console.log(arguments)
            var response = JSON.parse(error.responseText);
            $('.enviadoconductores > h3').removeClass('success').addClass('error').html('Hubo un error al procesar la solicitud, intente mas tarde.').fadeIn();
          }
        );
  })
  
})
        

function postToAPI(postSuccess, postError) {

  var requestData = {
      nombres :  $('#nombre1chofer').val(),
      apellido : $('#apellid1ochofer').val(),
      email : $('#mailchofer1').val(),
      telMovil : $('#celularc1hofer').val()
  };
  
  console.log(requestData); //use the console for debugging, F12 in Chrome, not alerts


  //Post to API

  var requestDataJSON = JSON.stringify(requestData);
  var APIurl = 'http://api.traslada.com.ar/prestadores/candidatos'; // (Live)

  $.ajax({
    type: 'POST',
    url: APIurl,
    contentType: 'application/json',
    data: requestDataJSON,
    success: postSuccess,
    error: postError,
    dataType: 'json',
    crossDomain: true
  });

}

