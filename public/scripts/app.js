console.log("Sanity check");

$(".carousel").carousel({
  interval: 6000,
  pause: "false"
});

$(document).on({
  scroll: navFade
});

// Nav bar fade-in function
function navFade() {
  let winTop = $(window).scrollTop();
  switch (true) {
    case winTop < 144:
      $("nav").css({
        background: (0, 0, 0, 0),
        transition: ".4s ease-in-out"
      });
      $("#menu>li>a").css({ background: (0, 0, 0, 0), color: "black" });
      break;
    case winTop > 144:
      $("nav").css({
        background: "black",
        transition: ".4s ease-in-out"
      });
      break;
  }
}
