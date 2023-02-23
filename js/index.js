console.log("JS file is loaded correctly!");


$("button").ready(function () {
    $("button").hover(function(){
        $(this).css("background-color", "#F47E20");
        }, function(){
        $(this).css("background-color", "#7E184B");
      });
    });

    $("li").ready(function () {
      $("li").hover(function(){
          $(this).css("color", "#7E184B");
          }, function(){
          $(this).css("color", "#ffffff");
        });
      });



   

          $("#ai").mouseenter(function(){
            $("#ai").animate({
              height: '+=15px',
              width: '+=15px'
            })});


              $("#ai").mouseleave(function(){
               $("#ai").animate({
              height: '-=15px',
              width: '-=15px'
            })});