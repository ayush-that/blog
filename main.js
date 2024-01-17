$(function () {
  $("#header").load("header.html", function () {
    $("h1").css({
      "text-shadow": "2px 2px 2px rgba(0, 0, 0, 0.5)",
    });
  });
});

$(function () {
  $("#footer").load("../footer.html");
});

$(function () {
  $("#bloglist").load("../bloglist.html");
});

$(function () {
  $("#snowflake").load("../snowflake.html");
});

$(function () {
  $("#shoutouts").load("../shoutouts.html");
});

$(function () {
  $("#socials").load("../socials.html");
});

$(function () {
  $("#testimonial").load("../testimonial.html");
});

//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

$(function () {
  $("html").css("scroll-behavior", "smooth");
});

$(document).ready(function () {
  $("a").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });
});

