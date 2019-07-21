$(document).ready(function() {
    console.log("Hello, you sneaky fella you. I'm just starting setting up javascript for a more fluid experience on my website. Thanks for checking my little portfolio, and moreso for looking into little 'ol me! Have a great day!")
    
    var imgId;
    var active;
    var full_image = ($('#full-photo-id'));
    var replacement;

    /* $('.photos').hover(function () { 
        let next_pic = ($(this).next().children().attr('src'));
        if (next_pic == undefined) {
            console.log('end of the pictures!')
            console.log('first item is ' + $(this).parent().children().first().children().attr('src'))
            return;
        }
        console.log('next item is ' + next_pic);
    }); */

    $('.photos img').on("click", function () { 
        imgId = ($(this).attr('src'));
        active = ($(this).parent());
        full_image.attr('src', "./originals/"+imgId);
        full_image.attr('alt', imgId);
    });

    function carouselPrev(){
        if (active.prev().length == 0) {
            active = active.parent().children().last()
        }
        else {
            active = active.prev();
        }
        replacement = (active.children().attr('src'))
        full_image.attr('src', "./originals/"+replacement);
        full_image.attr('alt', replacement);
        return;
    }

    function carouselNext() {
        if (active.next().length == 0) {
            active = active.parent().children().first()
        }
        else {
            active = active.next();
        }
        replacement = (active.children().attr('src'))
        full_image.attr('src', "./originals/"+replacement);
        full_image.attr('alt', replacement);
        return;
    }

    $('.carousel-control-prev').on("click", function (e) {
        e.preventDefault();
        carouselPrev();
    });

    $('.carousel-control-next').on("click", function (e) {
        e.preventDefault();
        carouselNext();
    });

    $(document).keyup(function(e) {
        if (e.which == 37) { 
           carouselPrev();
           return;
        }
        if (e.which == 39) {
            carouselNext();
            return;
        }
        if (e.which == 27) {
            $("#large_picture").modal("hide");
            $('#full-photo-id').attr('src', "");
            return;
        }
    });

    $('.modal').on('hide.bs.modal', function (e) {
        $('#full-photo-id').attr('src', "");
    });
    


    
});