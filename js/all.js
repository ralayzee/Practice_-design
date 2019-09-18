
$(document).ready(function () {
  // like button
   $('.like').on('click', function () {
     $(this).toggleClass('fas').toggleClass('far');
   });

  // Count (cart.html)
  $(document).ready(function () {
    $('.plus').on('click', function () {
      $(this).parent().prev('input').val( parseInt($(this).parent().prev('input').val()) + 1);
     });
    $('.minus').on('click', function () {
      if ( parseInt($(this).parent().next('input').val()) > 1)
        $(this).parent().next('input').val( parseInt($(this).parent().next('input').val()) - 1);
     });
   });

   //Modal
   $('#deleteItem').on('show.bs.modal', function(event){
     var btn = $(event.relatedTarget);
     var title = btn.data('title');
     var modal = $(this);
     modal.find('.modal-title').text('確認刪除 '+ title);
   });

 });
