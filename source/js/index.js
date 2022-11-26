// open-menu
$(document).ready(function () {
  $("#open-menu").click(function () {
    // set height auto
    $("#menu-panel").css("height", "auto");
    // set translate y 0
    $("#menu-content").css(
      "transform",
      "translate(0, 0) rotate(0) skew(0) scaleX(1) scaleY(1)"
    );
    $("#open-menu").css("display", "none");
    $("#close-menu").css("display", "block");
  });

  $("#close-menu").click(function () {
    // set height 0
    $("#menu-panel").css("height", "0");
    // set translate y -100%
    $("#menu-content").css(
      "transform",
      "translate(0, -100%) rotate(0) skew(0) scaleX(1) scaleY(1)"
    );
    $("#open-menu").css("display", "block");
    $("#close-menu").css("display", "none");
  });

  // 监听文章标题消失时，在header中显示文章标题
  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.intersectionRatio > 0) {
          $("#header-title")
            .css("opacity", "0")
            .css("transform", "translate(0, -100%)")
            .css("transition", "all 0.3s");
        } else {
          $("#header-title")
            .css("opacity", "1")
            .css("transform", "translate(0, 0)")
            .css("transition", "all 0.3s");
        }
      });
    }
    // { threshold: [0, 0.25, 0.5, 0.75, 1] }
  );
  observer.observe(document.querySelector("#article-title"));

  // go up show
  $(window).scroll(function () {
    if ($(window).scrollTop() > 200) {
      // 添加动画过度
      $("#go-up")
        .css("opacity", "1")
        .css("transform", "translateX(0) rotate(0)")
        .css("transition", "all 0.3s");
    } else {
      $("#go-up")
        .css("opacity", "0")
        .css("transform", "translateX(50px) rotate(180deg)")
        .css("transition", "all 0.3s");
    }
  });
  // go up
  $("#go-up").click(function () {
    $("html,body").animate({ scrollTop: 0 }, 500);
  });
});
