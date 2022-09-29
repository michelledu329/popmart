
  // Search
  var searchInput = document.getElementById("search-inp");
  var clearBtn = document.getElementById("clear-btn");

  function clickSearch(){
      searchInput.classList.toggle("extend-field");
  }

  searchInput.addEventListener("click", clickSearch);

  // Hover
  var avaList = document.querySelectorAll(".ip");

  for(var i=0; i<avaList.length; i++){
      avaList[i].addEventListener("mouseenter", function(event){
          event.target.firstChild.style.opacity = 1;
          event.target.firstChild.style.transition = "all 0.1s ease";
      })
      avaList[i].addEventListener("mouseleave", function(event){
          event.target.firstChild.style.opacity = 0;
          event.target.firstChild.style.transition = "all 0.1s ease";
      })
  }

  // Video Sound //
  // window.onload = function() {
  var video = document.getElementById("myVideo");
  var soundBtn = document.getElementById("volume");
  var volumeBar = document.getElementById("volume-bar");

  // Event listener for the mute button
  if(soundBtn){
    soundBtn.addEventListener("click", function() {
      if (video.muted == false) {
          video.muted = true;
      } else {
          video.muted = false;
      }
    });
  }

  // Event listener for the volume bar
  if(volumeBar){
    volumeBar.addEventListener("change", function() {
      video.volume = volumeBar.value;
      if (video.muted == true) {
        video.muted = false;
      } 
    });
  }
  // }

  // Hambur Menu //
  var hamIcon = document.getElementById("hambur-menu-icon");
  var close = document.getElementById("close-icon");

  if(hamIcon){
    hamIcon.addEventListener("click", function(){
      var hamMenu = document.getElementById("hambur-menu");
      hamMenu.style.display = "block";
      document.body.classList.add("open-modal");
    });
  }

  if(close){
    close.addEventListener("click", function(){
      var hamMenu = document.getElementById("hambur-menu");
      hamMenu.style.display = "none";
      document.body.classList.remove("open-modal");
    });
  }


  // Shop Bag //
  var closeBag = document.getElementById("close-bag");
  var shopBag = document.getElementById("shop-bag-icon");
  var shopBagPage = document.getElementById("shop-bag-page");
  var overlay = document.getElementById("overlay");
  var headerHeight = document.getElementById("overall-height").clientHeight;
  var bagSummary = document.querySelector(".bag-summary");
  var bagPro = document.querySelector(".scroll-pro");
  var wrapperSM = document.querySelector(".wrapper-sm");

  if(shopBag){
    shopBag.addEventListener("click", function(){
      shopBagPage.style.width = "38vw";
      shopBagPage.style.borderLeft = "2px solid #000";
      shopBagPage.style.top = headerHeight + "px";
      overlay.style.display = "block";
      if ( headerHeight <= 60 ){
        shopBagPage.style.borderTop = "2px solid #000";
        bagSummary.style.bottom = "12%";
        bagPro.style.height = "440px"; 
      }
    });
  }
  if(closeBag){
    closeBag.addEventListener("click", function(){
      shopBagPage.style.width = "0vw";
      shopBagPage.style.border = "none";
      overlay.style.display = "none";
    });
  }
  if(overlay){
    overlay.addEventListener("click", function(){
      shopBagPage.style.width = "0vw";
      overlay.style.display = "none";
      document.body.classList.remove("open-modal");
    })
  }

  // Collepsible
  var coll = document.getElementsByClassName("slide-btn");
  var i;

  for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      if (content.style.height){
        content.style.height = null;
      } else{
        content.style.height = content.scrollHeight + 40 + "px";
      }
    });
  };


// POP UP
// var popUp = document.getElementById("pop-up");
// var closePop = document.getElementById("close-pop");

// window.onload = function() {
//   setTimeout(function() {
//     popUp.style.display = "flex";
//     overlay.style.display = "block";
//   }, 3000);
// };

// closePop.addEventListener("click", function(){
//   popUp.style.display = "none";
//   overlay.style.display = "none";
// });




