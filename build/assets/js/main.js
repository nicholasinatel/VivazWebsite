for(var youtube=document.querySelectorAll(".youtube"),i=0;i<youtube.length;i++){var source="https://img.youtube.com/vi/"+youtube[i].dataset.embed+"/hqdefault.jpg",image=new Image;image.src=source,image.addEventListener("load",void youtube[i].appendChild(image)),youtube[i].addEventListener("click",function(){var e=document.createElement("iframe");e.setAttribute("frameborder","0"),e.setAttribute("allowfullscreen",""),e.setAttribute("src","https://www.youtube.com/embed/"+this.dataset.embed+"?rel=0&showinfo=0&autoplay=1"),this.innerHTML="",this.appendChild(e)})}!function(t){var e=t(window),i=(t("#banner"),t("body"));t(".scroll").click(function(e){e.preventDefault(),t("body,html").animate({scrollTop:t(this.hash).offset().top},1250)}),breakpoints({default:["1681px",null],xlarge:["1281px","1680px"],large:["981px","1280px"],medium:["737px","980px"],small:["481px","736px"],xsmall:["361px","480px"],xxsmall:[null,"360px"]}),e.on("load",function(){window.setTimeout(function(){i.removeClass("is-preload")},100)}),t("#menu").append('<a href="#menu" class="close"></a>').appendTo(i).panel({target:i,visibleClass:"is-menu-visible",delay:500,hideOnClick:!0,hideOnSwipe:!0,resetScroll:!0,resetForms:!0,side:"right"})}(jQuery);