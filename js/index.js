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
              height: '+=5px',
              width: '+=5px'
            })});


              $("#ai").mouseleave(function(){
               $("#ai").animate({
              height: '-=5px',
              width: '-=5px'
            })});

            $("#ps").mouseenter(function(){
              $("#ps").animate({
                height: '+=5px',
                width: '+=5px'
              })});
  
  
                $("#ps").mouseleave(function(){
                 $("#ps").animate({
                height: '-=5px',
                width: '-=5px'
              })});

              $("#id").mouseenter(function(){
                $("#id").animate({
                  height: '+=5px',
                  width: '+=5px'
                })});
    
    
                  $("#id").mouseleave(function(){
                   $("#id").animate({
                  height: '-=5px',
                  width: '-=5px'
                })});

                $("#figma").mouseenter(function(){
                  $("#figma").animate({
                    height: '+=5px',
                    width: '+=5px'
                  })});
      
      
                    $("#figma").mouseleave(function(){
                     $("#figma").animate({
                    height: '-=5px',
                    width: '-=5px'
                  })});

                  $("#miro").mouseenter(function(){
                    $("#miro").animate({
                      height: '+=5px',
                      width: '+=5px'
                    })});
        
        
                      $("#miro").mouseleave(function(){
                       $("#miro").animate({
                      height: '-=5px',
                      width: '-=5px'
                    })});