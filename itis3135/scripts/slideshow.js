$(document).ready(function () {
    $('#thumbnailList a').on('click', function (e) {
      e.preventDefault();
  
      const newImg = $(this).data('img');
      const newCaption = $(this).data('caption');
  
      $('#mainImage').attr('src', 'images/' + newImg).attr('alt', newCaption);
      $('.caption').text(newCaption);
    });
  
  
    $('#header').load('components/header.html');
    $('#footer').load('components/footer.html');
  });
  