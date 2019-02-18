$(document).ready(function(){
    console.log("Hello, you sneaky fella you. I'm just starting setting up javascript for a more fluid experience on my website. Thanks for checking my little portfolio, and in general looking into little 'ol me.")
    $('.photos').hover(function () { 
        console.log("HOVERED")
    });
    $('.photos img').click(function () { 
        console.log("clicked");

        var imgId = ($(this).attr('src'))
        console.log(imgId);
       
        $('#full-photo-id').attr('src', "./originals/"+imgId);
    });

    $('.modal').on('hide.bs.modal', function (e) {
        $('#full-photo-id').attr('src', "");
      })
});