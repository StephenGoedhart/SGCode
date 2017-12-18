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
  if(pageIndex < sliderItems.length - 1 && nextPageReady){
    nextPageReady = false;
    i = pageIndex;
    pageIndex++;
    currentTitle = $(sliderTitles[i]);
    currentSubtitle = $(sliderSubtitles[i]);
    currentPage =  $(sliderItems[i]);
    nextTitle = $(sliderTitles[pageIndex]);
    nextSubtitle = $(sliderSubtitles[pageIndex]);

    currentTitle.animate({marginTop: "34vh"}, 150, function(){
      currentTitle.animate({marginTop: "-66vh"}, 500);
    });

    currentSubtitle.animate({marginTop: "-2vh"}, 75, function(){
      currentSubtitle.animate({marginTop: "2vh"}, 75);
    });

    setTimeout(function(){
      currentPage.animate({marginTop: "4vh"}, 150, function(){
        currentPage.animate({marginTop: "-104.5vh"}, 500, function(){
          currentPage.animate({marginTop: "-100.5vh"}, 150);
        });
      });
    }, 200);

    nextTitle.animate({marginTop: "100vh"}, 1);
    nextSubtitle.animate({marginTop: "100vh"}, 1);

  setTimeout(function(){
    nextTitle.animate({marginTop: "24vh"}, 500, function(){
       nextTitle.animate({marginTop: "30vh"}, 150);
    });
  }, 650);

  setTimeout(function(){
    nextSubtitle.animate({marginTop: "-2vh"}, 500, function(){
       nextSubtitle.animate({marginTop: "0vh"}, 150, function(){
         nextPageReady =  true;
       });
    });
  }, 800);
  }
}

function sliderMoveUp(){
  if(pageIndex > 0 && nextPageReady){
    nextPageReady = false;
    i = pageIndex;
    pageIndex--;
    currentTitle = $(sliderTitles[i]);
    currentSubtitle = $(sliderSubtitles[i]);
    previousPage =  $(sliderItems[pageIndex]);
    previousTitle = $(sliderTitles[pageIndex]);
    previousSubtitle = $(sliderSubtitles[pageIndex]);

    nextSubtitle.animate({marginTop: "-4vh"}, 150, function(){
       nextSubtitle.animate({marginTop: "0"}, 150);
    });

    setTimeout(function(){
      nextTitle.animate({marginTop: "26vh"}, 150, function(){
         nextTitle.animate({marginTop: "100vh"}, 500);
      });
    }, 75);

    setTimeout(function(){
      previousPage.animate({marginTop: "-104vh"}, 150, function(){
        previousPage.animate({marginTop: "4vh"}, 500, function(){
          previousPage.animate({marginTop: "0vh"}, 150);
        });
      });
    }, 225);

    previousTitle.animate({marginTop: "-100"}, 1);
    previousSubtitle.animate({marginTop: "0vh"}, 1);

    setTimeout(function(){
      previousSubtitle.animate({marginTop: "10vh"}, 150, function(){
        previousSubtitle.animate({marginTop: "4.5vh"}, 150, function(){
        });
      });
    }, 750);

    setTimeout(function(){
      previousTitle.animate({marginTop: "36vh"}, 500, function(){
        previousTitle.animate({marginTop: "30vh"}, 150, function(){
             nextPageReady = true;
        });
      });
    }, 900);



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
    sliderMoveDown();
});

$("#prevPage").click(function(){
    sliderMoveUp();
});

$(window).load(function(){
  console.log("Page fully loaded");
});
