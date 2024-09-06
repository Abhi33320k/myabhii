const menuToggle = document.getElementById('menu-toggle');
        const navLinks = document.querySelector('.nav-links');

        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

            document.addEventListener("DOMContentLoaded", function() {
            setTimeout(function() {
            document.getElementById('preloader').classList.add('hide');
            document.getElementById('content').style.display = 'block';
            setTimeout(function() {
            document.getElementById('content').classList.add('show');
            }, 100); 
            }, 2000);
            });        
            document.addEventListener("DOMContentLoaded", function () {
                var popup = document.getElementById('popup');
                var closeBtn = document.getElementById('close-btn');
            
                // Function to show the popup
                function showPopup() {
                    popup.style.display = 'flex';
                }
            
                // Function to hide the popup
                function hidePopup() {
                    popup.style.display = 'none';
                }
            
                // Show the popup after 3 seconds
                setTimeout(showPopup, 10000);
            
                // Hide the popup when the close button is clicked
                closeBtn.addEventListener('click', hidePopup);
            
                // Hide the popup when the user clicks outside the popup content
                window.addEventListener('closeBtn', function (event) {
                    if (event.target == popup) {
                        hidePopup();
                    }
                });
            });
            document.addEventListener("DOMContentLoaded", function () {
                const placeholderText = "Search & Paste url here..."; 
                const placeholderElement = document.getElementById("abhi");
                let index = 0;
            
                function typeWriter() {
                if (index < placeholderText.length) {
                placeholderElement.setAttribute("placeholder", placeholderText.substring(0, index + 1));
                index++;
                setTimeout(typeWriter, 100); 
                } else {
                setTimeout(() => {
                index = 0;
                typeWriter();
                }, 2000); 
                }
                }
                typeWriter();
                });
                const buttons = document.querySelectorAll(".card-buttons button");
                const sections = document.querySelectorAll(".card-section");
                const card = document.querySelector(".card");
                
                const handleButtonClick = e => {
                  const targetSection = e.target.getAttribute("data-section");
                  const section = document.querySelector(targetSection);
                  targetSection !== "#about" ?
                  card.classList.add("is-active") :
                  card.classList.remove("is-active");
                  card.setAttribute("data-state", targetSection);
                  sections.forEach(s => s.classList.remove("is-active"));
                  buttons.forEach(b => b.classList.remove("is-active"));
                  e.target.classList.add("is-active");
                  section.classList.add("is-active");
                };
                
                buttons.forEach(btn => {
                  btn.addEventListener("click", handleButtonClick);
                });
                document.addEventListener("DOMContentLoaded", function() {
                    var video = document.getElementById("myVideo");
                    
                    // Automatically play the video after page load
                    video.play();
                    
                    // Add event listeners for custom controls if needed
                    video.addEventListener("ended", function() {
                        console.log("Video ended, you can trigger other actions here.");
                    });
                });

                const slides = document.querySelectorAll('.ad-slide');
                let currentSlide = 0;
        
                function showNextSlide() {
                    slides[currentSlide].classList.remove('active');
                    currentSlide = (currentSlide + 1) % slides.length;
                    slides[currentSlide].classList.add('active');
                }
        
                setInterval(showNextSlide, 8000); // Change slide every 8 seconds

                const quoteText = document.querySelector(".quote"),
quoteBtn = document.querySelector("button"),
authorName = document.querySelector(".name"),
speechBtn = document.querySelector(".speech"),
copyBtn = document.querySelector(".copy"),
twitterBtn = document.querySelector(".twitter"),
synth = speechSynthesis;

function randomQuote(){
    quoteBtn.classList.add("loading");
    quoteBtn.innerText = "Loading Quote...";
    fetch("http://api.quotable.io/random").then(response => response.json()).then(result => {
        quoteText.innerText = result.content;
        authorName.innerText = result.author;
        quoteBtn.classList.remove("loading");
        quoteBtn.innerText = "New Quote";
    });
}
speechBtn.addEventListener("click", ()=>{
    if(!quoteBtn.classList.contains("loading")){
        let utterance = new SpeechSynthesisUtterance(`${quoteText.innerText} by ${authorName.innerText}`);
        synth.speak(utterance);
        setInterval(()=>{
            !synth.speaking ? speechBtn.classList.remove("active") : speechBtn.classList.add("active");
        }, 10);
    }
});

copyBtn.addEventListener("click", ()=>{
    navigator.clipboard.writeText(quoteText.innerText);
});

document.getElementById('shareBtn').addEventListener('click', async () => {
    if (navigator.share) {
    try {
    await navigator.share({
    title: 'Never give up because you never know if the next try is going to be the one that works.',
    text: 'Thanks! For Sharing My profile with you. Please, Visit My Website -',
    url: 'https://myabhii.blogspot.com',
    });
    console.log('Page shared successfully!');
    } catch (err) {
    console.error('Error sharing:', err);
    }
    } else {
    alert('404 Error - File Sharing API is not supported in this browser.');
    }
    });

quoteBtn.addEventListener("click", randomQuote);

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("openModalBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "close";
    }
}

 //<![CDATA[
 
 var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];
if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }
setTimeout(function() {
    that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
// INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.1em solid #ccc}";
    document.body.appendChild(css);
};
   //]]>    

   (function($) { "use strict";

    $(document).ready(function(){"use strict";
    
            //Scroll back to top
    
            var progressPath = document.querySelector('.progress-wrap path');
            var pathLength = progressPath.getTotalLength();
            progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
            progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
            progressPath.style.strokeDashoffset = pathLength;
            progressPath.getBoundingClientRect();
            progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';
            var updateProgress = function () {
                var scroll = $(window).scrollTop();
                var height = $(document).height() - $(window).height();
                var progress = pathLength - (scroll * pathLength / height);
                progressPath.style.strokeDashoffset = progress;
            }
            updateProgress();
            $(window).scroll(updateProgress);
            var offset = 50;
            var duration = 550;
            jQuery(window).on('scroll', function() {
                if (jQuery(this).scrollTop() > offset) {
                    jQuery('.progress-wrap').addClass('active-progress');
                } else {
                    jQuery('.progress-wrap').removeClass('active-progress');
                }
            });
            jQuery('.progress-wrap').on('click', function(event) {
                event.preventDefault();
                jQuery('html, body').animate({scrollTop: 0}, duration);
                return false;
            })
    
    
        });
    
    })(jQuery);

    