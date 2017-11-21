/* slider */

//Inventarize all items
var sliderTitles = [];
$(".content-slider-item-title").each(function(i, obj){
  sliderTitles[i] = obj;
});

var sliderSubtitles = [];
$(".content-slider-item-subtitle").each(function(i, obj){
  sliderSubtitles[i] = obj;
});

var sliderItems = [];
$(".content-slider-item").each(function(i, obj){
  sliderItems[i] = obj;
});

//Keep track of the current page
var pageIndex = 0;
var nextPageReady = false;

//Set slider height according to item count
var sliderContainer = $("#content-slider-container");
sliderContainer.height( (100 * sliderItems.length) + "vh");

function sliderMoveDown(){
  //Make sure there is a next page
  if(pageIndex < sliderItems.length - 1 && nextPageReady){
    nextPageReady = false;
    i = pageIndex;
    pageIndex++;
    title = $(sliderTitles[i]);
    subtitle = $(sliderSubtitles[i]);
    page =  $(sliderItems[i]);

    title.animate({marginTop: "+=4vh"}, 250, function(){
      title.animate({marginTop: "-110vh"}, 500);
      page.animate({marginTop: "+=4vh"}, 250, function(){

        title = $(sliderTitles[pageIndex]);
        subtitle = $(sliderSubtitles[pageIndex]);

        title.animate({marginTop: "101vh"}, 500);
        page.animate({marginTop: "-101vh"}, 500, function(){

          title.animate({marginTop: "26vh"}, 500, function(){
             title.animate({marginTop: "34vh"}, 300, function(){
                 title.animate({marginTop: "30vh"}, 300);
             });
          });

          subtitle.animate({marginTop: "-2vh"}, 500, function(){
             subtitle.animate({marginTop: "2vh"}, 300, function(){
                 subtitle.animate({marginTop: "0vh"}, 300, function(){
                   nextPageReady =  true;
                 });
             });
          });
        });
      });
    });



  }
}

function sliderMoveUp(){
  //Make sure there is a next page
  if(pageIndex > 0 && nextPageReady){
    nextPageReady = false;
    i = pageIndex;
    pageIndex--;
    title = $(sliderTitles[i]);
    subtitle = $(sliderSubtitles[i]);
    page =  $(sliderItems[i-1]);

    //Page animation
     page.animate( {marginTop: "4vh"}, 500, function(){
       page.animate( {marginTop: "-100vh"}, 150);
     });

     //Title animation
     setTimeout(function(){
       title.animate({marginTop: "28vh"}, 500, function(){
          title.animate({marginTop: "-100vh"}, 150);
       });
     }, 150);
  }
}

function initialize(){
  $(sliderItems[0]).css("marginTop", "100vh");
  title = $(sliderTitles[0]);
  subtitle = $(sliderSubtitles[0]);
  page =  $(sliderItems[0]);

  //Page animation
   page.animate( {marginTop: "-4vh"}, 500, function(){
     page.animate( {marginTop: "0vh"}, 150);
   });

   setTimeout(function(){
     title.animate({marginTop: "24vh"}, 500, function(){
        title.animate({marginTop: "30vh"}, 150);
     });
   }, 150);

   setTimeout(function(){
     subtitle.animate({marginTop: "-2vh"}, 500, function(){
        subtitle.animate({marginTop: "0vh"}, 150, function(){
          nextPageReady =  true;
        });
     });
   }, 300);
}

initialize();


$("#nextPage").click(function(){
  sliderMoveUp();
});

$("#prevPage").click(function(){
  sliderMoveDown();
});

$(window).load(function(){
  console.log("Page fully loaded");
});
