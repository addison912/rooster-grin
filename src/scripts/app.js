console.log(
  `%c  _    _ _____ _____  ______   __  __ ______ _ 
 | |  | |_   _|  __ \\|  ____| |  \\/  |  ____| |
 | |__| | | | | |__) | |__    | \\  / | |__  | |
 |  __  | | | |  _  /|  __|   | |\\/| |  __| | |
 | |  | |_| |_| | \\ \\| |____  | |  | | |____|_|
 |_|  |_|_____|_|  \\_\\______| |_|  |_|______(_)                                            
 `,
  "font-family:monospace"
);

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

//fade in title
$(document).ready(function() {
  $(".title-wrapper").css({
    transition: "3s ease-in-out",
    color: "rgba(240, 240, 240, 1)"
  });
});
