$(document).ready(function(){

// var visitorName = window.prompt("What is your name?");
// if(visitorName){
//   $('#band h2').text("Hello " + visitorName + "!").addClass('test');
// }

// });


          $('#submit').click(function(){
            var message = "";

            var fname = $('#firstname').val();
            var lname = $('#lastname').val();
            var company = $('#company').val();
            var email = $('#email').val();
            var textArea = $('#textarea').val();
            var check = $('input:checked').length > 0;

            if(fname){  //if fname conrains something //
              message = "Hello, my name is " + fname;

              if(lname){
                message += " " + lname;
              }

              message += ".<br/><br/>";
            }

            if(company){
              message += " My company is called " + company + ".<br/><br/>";
            }

            if(email){
              message += " Email me at " + email + ".<br/><br/>";
            }
             if(check){
               message+= " I am interested in learning more about...<br/>";
              $('input:checked').each(function(){
                message += $(this).parent().text() + "<br/><br/>";
              });
            }

            if(textArea){
              message+= " My message: " +textArea+ ".<br/><br/>";
              if (textArea.length>100){
                alert("Your message is too long!");
              };
//figure out how to count down characters//
            }
        
            $('#preview').html(message);

            return false;
          });

  $('input, textarea').hover(function(){
     $(this).toggleClass('text_area','5000');
     });
  });

   $('#send').click(function(){
      alert("Thank you for your inquiry! We will get back to you as soon as possible.");
   });


// make things populate an email:

// window.open('mailto:test@test.com?subject=Hi&body=Ohai')
// undefined
// window.location.href ='mailto:test@test.com?subject=Hi&body=Ohai'
// "mailto:test@test.com?subject=Hi&body=Ohai"

      