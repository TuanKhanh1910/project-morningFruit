export default function headerScroll() {
  $(document).ready(function () {
    $(window).on("scroll", function () {
      if ($(window).scrollTop()) {
        $("#headerFruit").addClass("sticky");
      } else {
        $("#headerFruit").removeClass("sticky");
      }
    });
  });
}
