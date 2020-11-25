$(document).ready(function () {
   $("#mycarousel").carousel({ interval: 2000 });
   $("#carousel-pause").click(function () {
      $("#mycarousel").carousel("pause");
   });
   $("#carousel-play").click(function () {
      $("#mycarousel").carousel("cycle");
   });
});

$(document).ready(function () {
   $('#list').click(function (event) { event.preventDefault(); $('#products .item').addClass('list-group-item'); });
   $('#grid').click(function (event) { event.preventDefault(); $('#products .item').removeClass('list-group-item'); $('#products .item').addClass('grid-group-item'); });
});

$(document).ready(function () {
   //create variable
   var counts = 0;
   $(".addtocart").click(function () {
      //to number and increase to 1 on each click
      counts += 1;
      $(".cart-counter").animate({
         //show span with number
         opacity: 1
      }, 300, function () {
         //write number of counts into span
         $(this).text(counts);
      });
   });
});


// Show item name in success modal
$(document).ready(function () {
   $(".caption").on("click", ".addtocart", function (e) {
      var item = $($($(this).parents()[2]).children()[0]).html();
      $(".cart-item").text(item);
   })
})

// Show item list in cart
$(document).ready(function () {
   var itemList = [];
   $(".caption").on("click", ".addtocart", function (e) {
      var item = $($($(this).parents()[2]).children()[0]).html();
      itemList += "<ol>" + item + "</ol>" + "<br/>";
      //console.log(itemArr);
      $(".cart-total").html(itemList);
   })
})


