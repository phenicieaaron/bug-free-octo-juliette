$(function(){
  $('#console-box').append('<br/>console is ready...');
  
  $('select').click(function(){
    $('#console-box').prepend('<br>class:'+$(this).attr("class")+'|value:'+$(this).text()+'.');
; 
  });
  
});



let mediaType = [
  ["TV", ["Sitcom", "Drama", "Netflix Originals", "Seinfeld"]],
  ["Movie", ["Horror", "Comedy", "Romance", "Indie", "Action", "Mystery"]],
  ["Browsing", ["Popular on Netflix", "Recently Viewed", "Home Page"]],
];

$("#mediaKind").on("change", function (e) {
  $("#mediaType").prop("disabled", false);

  let inputVal = this.value;
  $.each(mediaType, function (key, value) {
    if (inputVal === value[0]) {
      $.each(value, function (nestKey, nestValue) {
        switch (nestKey) {
          case 0:
            $("label[for=mediaType]").text(nestValue);
            $("#mediaType").empty();
            $("#mediaType").append(
              $("<option>").text(`${nestValue} options`)
            );
            break;
          case 1:
            $.each(nestValue, function (nameKey, nameValue) {
              console.log(nameKey, nameValue);

              $("#mediaType").append(
                $("<option>").val(nameValue).text(nameValue)
              );
            });
            break;
        }
      });
    }
  });
});

//for button

