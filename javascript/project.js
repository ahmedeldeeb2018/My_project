/**************nav *****/
$(window).scroll(function(){
        if($(this).scrollTop() >= 900){
            $("nav").css("background-color" , "")
        }
        else{
          $("nav").css("background-color" , "rgba(10 , 10 , 10 , 0.4 )")
        }
      });
      $('#myModal').on('shown.bs.modal', function () {
  $('#myInput').focus()
}); 

/* Show The List Of Cars */ 

$(document).ready(function(){
        $(".mer").on("click",function(){

        });

});


$(document).ready(function(){ 
    // doble click to hidden 
    $(".mer").on("dblclick",function(){
        $(".mercedes").css("display","none");
    });
    $(".ki").on("dblclick",function(){
        $(".kia").css("display","none");
    });
    $(".op").on("dblclick",function(){
        $(".opel").css("display","none");
    });
    $(".ren").on("dblclick",function(){
        $(".renault").css("display","none");
    });
    $(".oil1").on("dblclick",function(){
        $(".oil11").css("display","none");
    });
    $(".oil2").on("dblclick",function(){
        $(".oil22").css("display","none");
    });
    $(".oil3").on("dblclick",function(){
        $(".oil33").css("display","none");
    });
    $(".oil4").on("dblclick",function(){
        $(".oil44").css("display","none");
    });
    $(".oil5").on("dblclick",function(){
        $(".oil55").css("display","none");
    });
    $(".oil6").on("dblclick",function(){
        $(".oil66").css("display","none");
    });
    



    // end doble click to hidden


    // one click  
   $(".mer").on("click",function(){
       $(".mercedes").css("display","block");
       $(".kia").css("display","none");
       $(".opel").css("display","none");
       $(".renault").css("display","none");
   }) ;
    $(".ki").on("click",function(){
       $(".kia").css("display","block");
       $(".mercedes").css("display","none");
       $(".opel").css("display","none");
       $(".renault").css("display","none");
   }) ;
    $(".op").on("click",function(){
       $(".opel").css("display","block");
       $(".renault").css("display","none");
       $(".kia").css("display","none");
       $(".mercedes").css("display","none");
   }) ;
    $(".ren").on("click",function(){
       $(".renault").css("display","block");
       $(".kia").css("display","none");
       $(".mercedes").css("display","none");
       $(".opel").css("display","none");
   }) ;
    $("#cont").click(function(){
        $("html,body").animate({
          scrollTop : 2900
        },1000)
      });
      $("#about").click(function(){
        $("html,body").animate({
          scrollTop : 2200
        },1000)
      });
      $("#team").click(function(){
        $("html,body").animate({
          scrollTop : 1800
        },1000)
      });
      
});


/* Show The List Of Oils */
$(document).ready(function(){
    
   $(".oil1").on("click",function(){
       $(".oil11").css("display","block");
       $(".oil22").css("display","none");
       $(".oil33").css("display","none");
       $(".oil44").css("display","none");
       $(".oil55").css("display","none");
       $(".oil66").css("display","none");
   }) ;
    $(".oil2").on("click",function(){
       $(".oil22").css("display","block");
       $(".oil11").css("display","none");
       $(".oil33").css("display","none");
       $(".oil44").css("display","none");
       $(".oil55").css("display","none");
       $(".oil66").css("display","none");
   }) ;
    $(".oil3").on("click",function(){
       $(".oil33").css("display","block");
       $(".oil22").css("display","none");
       $(".oil11").css("display","none");
       $(".oil44").css("display","none");
       $(".oil55").css("display","none");
       $(".oil66").css("display","none");
   }) ;
    $(".oil4").on("click",function(){
       $(".oil44").css("display","block");
       $(".oil22").css("display","none");
       $(".oil33").css("display","none");
       $(".oil11").css("display","none");
       $(".oil55").css("display","none");
       $(".oil66").css("display","none");
   }) ;
     $(".oil5").on("click",function(){
       $(".oil55").css("display","block");
       $(".oil22").css("display","none");
       $(".oil33").css("display","none");
       $(".oil44").css("display","none");
       $(".oil11").css("display","none");
       $(".oil66").css("display","none");
   }) ;
      $(".oil6").on("click",function(){
       $(".oil66").css("display","block");
       $(".oil22").css("display","none");
       $(".oil33").css("display","none");
       $(".oil44").css("display","none");
       $(".oil55").css("display","none");
       $(".oil11").css("display","none");
   }) ;
      var sc = $("#scrol");
      $(window).scroll(function(){
        if($(this).scrollTop() >= 500){
          $("#scrol").fadeIn(500);
        }
        else{
          $("#scrol").fadeOut(500);
        }
      }); 
      sc.click(function(){
        $("html,body").animate({
          scrollTop : 0 
        },1000)
      });
});


