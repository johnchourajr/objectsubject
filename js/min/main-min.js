function hasScrolled(){var a=$(this).scrollTop();Math.abs(lastScrollTop-a)<=delta||(a>lastScrollTop&&a>2.75*navbarHeight?$("nav").removeClass("nav-down").addClass("nav-up"):a+$(window).height()<$(document).height()&&$("nav").removeClass("nav-up").addClass("nav-down"),lastScrollTop=a)}function Parallax(){var a=$(this).scrollTop();$("body").css({}),$(".upper").css({opacity:1-a/500}),$(".upper-2x").css({opacity:1-a/250}),$(".lower").css({opacity:0+a/500}),$(".color-change, .color-change * a").css({})}var didScroll,lastScrollTop=0,delta=5,navbarHeight=$("nav").outerHeight(),navbar=$("nav");$(window).scroll(function(a){didScroll=!0}),setInterval(function(){didScroll&&(hasScrolled(),didScroll=!1)},250),function($){$(window).scroll(function(){var a=$(window).scrollTop();a>=navbarHeight?navbar.removeClass("nav-max").addClass("nav-min"):navbar.removeClass("nav-min").addClass("nav-max")})}(jQuery),$("a[href*=#]:not([href=#])").click(function(){if(location.pathname.replace(/^\//,"")===this.pathname.replace(/^\//,"")||location.hostname===this.hostname){var a=$(this.hash);if(a=a.length?a:$("[name="+this.hash.slice(1)+"]"),a.length)return $("html,body").animate({scrollTop:a.offset().top},400),!1}}),$(document).ready(function(){$(window).scroll(function(){Parallax()})});