console.log("WTF you looking at?");

// ---------------
// External Link Click
// ---------------
$(document.links)
  .filter(function () {
    return this.hostname != window.location.hostname;
  })
  .attr("target", "_blank");

// ---------------
// Animated scroll
// ---------------
$("a[href*=#]:not([href=#])").click(function () {
  if (
    location.pathname.replace(/^\//, "") === this.pathname.replace(/^\//, "") ||
    location.hostname === this.hostname
  ) {
    var target = $(this.hash);
    target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
    if (target.length) {
      $("html,body").animate(
        {
          scrollTop: target.offset().top,
        },
        400
      );
      return false;
    }
  }
});

$(document).ready(function () {
  $(window).resize();
});

// ---------------
// Background Color Changer
// ---------------
$(document).ready(function () {
  var wHeight = $(window).innerHeight();
  var siblings = $(".slide").siblings();
  var perset = {};
  var sumHeight = 0;
  for (var i = 0; i < siblings.length; i++) {
    if (siblings[i].dataset.background) {
      perset[sumHeight] = siblings[i].dataset.background;
    } else perset[sumHeight] = 0;

    sumHeight = sumHeight + siblings[i].clientHeight;
  }
  processScroll();

  function lessThan(nums, key) {
    if (nums == null || nums.length == 0 || key == 0) return 0;
    low = 0;
    high = nums.length - 1;
    while (low <= high) {
      mid = parseInt((low + high) >> 1);
      if (key <= nums[mid]) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }
    return high;
  }

  var scroll_pos = 0;

  function processScroll() {
    scroll_pos = $(this).scrollTop() + wHeight * 0.33;

    var presetHeights = Object.keys(perset);
    var x = lessThan(presetHeights, scroll_pos);
    var bgColor = perset[presetHeights[x]];
    if (bgColor) {
      $("body").css("background-color", bgColor);
      $(".doc").css("background-color", bgColor);
    }
  }

  $(document).scroll(processScroll);
});

// ---------------
// Parallax Library
// ---------------
let rellax = new Rellax(".el");

// ---------------
// Hover Thang
// ---------------
let el = "txt";
let text = "";
let tog = ".portrait";
$("." + el).hover(
  function () {
    let data = $(this).data(el);
    $(".txt-big").addClass(data);
    $(".txt-big-wrap").addClass("active");
    $("body").addClass(data);
    $(tog).addClass("tog-hide");
    $(tog).removeClass("tog-show");
  },
  function () {
    let data = $(this).data(el);
    $(".txt-big").removeClass(data);
    $(".txt-big-wrap").removeClass("active");
    $("body").removeClass(data);
    $(tog).addClass("tog-show");
    $(tog).removeClass("tog-hide");
  }
);

const o = document.getElementById("txt-big");
const w = window;

w.addEventListener("mousemove", (e) => {
  let mouseX = event.clientX - w.innerWidth / 2;
  let mouseY = event.clientY - w.innerHeight / 2;

  let outerX = mouseX * 0.015;
  let outerY = mouseY * 0.025;
  let outerRx = outerX * 1.75;
  let outerRy = outerY * 1.75;

  o.setAttribute(
    `style`,
    `transform: translate3d(${outerX}vw, ${outerY}vw, 0) rotateZ(${outerRx}deg)`
  );
});

// ---------------
// Hide/Show Footer
// ---------------
function showHideFooter() {
  let docHeight = $(document).height();
  let windowWidth = $(window).width();
  let footer = $("footer").height();
  let delta = docHeight - footer / 2;
  let scrollBottom = $(window).scrollTop() + $(window).height();

  if (windowWidth >= 832) {
    $(window).scroll(function () {
      docHeight = $(document).height();
      footer = $("footer").height();
      delta = docHeight - footer / 2;
      scrollBottom = $(window).scrollTop() + $(window).height();

      // FOR DEBUGGING
      // console.log('docHeight height = ' + docHeight);
      // console.log('footer height = ' + footer);
      // console.log('delta = ' + delta);
      // console.log('scrollBottom = ' + scrollBottom);

      if (scrollBottom > delta) {
        $("footer").removeClass("hidden");
      } else {
        $("footer").addClass("hidden");
      }
    });
  }
}

document.addEventListener("DOMContentLoaded", function (event) {
  showHideFooter();
});

// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 7;
var navbarHeight = $("nav").outerHeight();

$(window).scroll(function (event) {
  didScroll = true;
});

setInterval(function () {
  if (didScroll) {
    hasScrolled();
    didScroll = false;
  }
}, 250);

function hasScrolled() {
  var st = $(this).scrollTop();

  // Make sure they scroll more than delta
  if (Math.abs(lastScrollTop - st) <= delta) return;

  // If they scrolled down and are past the navbar, add class .nav-up.
  // This is necessary so you never see what is "behind" the navbar.
  if (st > lastScrollTop && st > navbarHeight) {
    // Scroll Down
    $("nav").removeClass("nav-down").addClass("nav-up");
    $(".sort-header")
      .removeClass("sort-header__init")
      .addClass("sort-header__move");
  } else {
    // Scroll Up
    if (st + $(window).height() < $(document).height()) {
      $("nav").removeClass("nav-up").addClass("nav-down");
      $(".sort-header")
        .removeClass("sort-header__move")
        .addClass("sort-header__init");
    }
  }

  lastScrollTop = st;
}

$(function () {
  //caches a jQuery object containing the header element
  var header = $("nav");
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll >= navbarHeight) {
      header.removeClass("nav-max").addClass("nav-min");
    } else {
      header.removeClass("nav-min").addClass("nav-max");
    }
  });
});
