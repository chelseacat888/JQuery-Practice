//selector practice

$(function(){
$('#1').on('click', function(){

$("#a").toggle();

});


//events


    $('#2').on('click', function(){
    
    $("#b").hide();
    
    });
    



    $("#c").mouseenter(function(){
        alert("Poison heart sings words of poetry");
      });

      $("input").blur(function(){
        $(this).css("background-color", "#ef9798");
      });

      $("input").focus(function(){
        $(this).css("background-color", "#ef9798");
      });


      //hide show example

      $("#4").click(function(){
        $("#d").hide(1000);
      });

      $("#4").click(function(){
        $("#d").show(1000);
      });

      //slide example

      $("#5").click(function(){
        $("#e").slideToggle();
      });

    
      //fade example

      $("#7").click(function(){
        $("#g").fadeToggle(3000);
      });

     
    //chain example
      $("#9").click(function(){
        $("#i").show(1000).hide(1000).show(1000).hide(1000).show(1000);
      });

     // append example
      $("#10").click(function(){
          $("#j2").append(" kiss");

      });

      // remove example
      $("#11").click(function(){
        $("#k").remove();


    });
      

    // css example

    $("#12").click(function(){
        $("#alone").css("filter","sepia(100%)");
     
    });

   

     

      //empty example

      $("#goodbyebtn").click(function(){

        $(".goodbye").empty();

      });

       // animate example
    $("#8").click(function(){
        $("#h").animate({
          left: '250px',
          opacity: '0.5',
          height: '150px',
          width: '150px'
        });
        
        $("#stop").click(function(){
            $("#g").stop();
          });
      }); 

     
     
      

    });

    