$(document).ready(function(){
          $('#submit').click(function(){
            var message = "";

            var fname = $('#firstname').val();
            var lname = $('#lastname').val();
            var company = $('#company').val();
            var email = $('#email').val();
            var textArea = $('#textarea').val();
            var check = $('input:checked').length > 0;

            if(fname){  //if fname conrains something //
              message = "Hello " + fname;

              if(lname){
                message += " " + lname;
              }

              message += "<br/><br/>";
            }

            if(company){
              message += " Company: " + company + "<br/><br/>";
            }

            if(email){
              message += " Email: " + email + "<br/><br/>";
            }

            if(textArea){
              message+= " Message: " +textArea+ "<br/><br/>";
              if (textArea.length>100){
                alert("too long!");
              };
//figure out how to count down characters//
            }

            if(check){
               message+= " I am interested in:<br/>";
              $('input:checked').each(function(){
                message += $(this).parent().text() + "<br/>";
              });
            }
            $('#email_preview').html(message);

            return false;
          });

        });


// make things populate an email:

// window.open('mailto:test@test.com?subject=Hi&body=Ohai')
// undefined
// window.location.href ='mailto:test@test.com?subject=Hi&body=Ohai'
// "mailto:test@test.com?subject=Hi&body=Ohai"

      