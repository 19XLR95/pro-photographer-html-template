$('#sidebarBtn').click(
  function()
  {
    $('#sidebarBtnSegment').animate(
      {
        right: '-100%'
      },

      {
        duration: 600,
        queue: false
      }
    );

    $('#sidebarMenu').sidebar(
      {
        onHide: function() {
          $('#sidebarBtnSegment').animate(
            {
              right: '0%'
            },

            {
              duration: 300,
              queue: false
            }
          );
        }
      }
    ).sidebar('toggle');
  }
);

function showSampleWorkImg(element)
{
  var src = $(element).attr('src');
  $('#sampleWorkModalImg').attr('src', src);
  $('#sampleWorksModal').modal('show');
}

function scrollToTitle(title)
{
  $('#sidebarMenu').sidebar('toggle');

  $('html, body').animate({
      scrollTop: ($(title).offset().top)
  }, 1000);
}
