$(document).ready(function () {
    $("#header").load("includes/header.html");
    $("#footer").load("includes/footer.html");
  
    $("#thumbnailList a").on("click", function (e) {
      e.preventDefault();
      const imgFile = $(this).data("img");
      const captionText = $(this).data("caption");
      $("#mainImage").attr("src", "images/" + imgFile);
      $(".caption").text(captionText);
    });
  });
  