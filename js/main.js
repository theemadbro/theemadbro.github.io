$(document).ready(function(){
    console.log("Hello, you sneaky fella you. I'm just starting setting up javascript for a more fluid experience on my website. Here's a little treat if you felt like checking this out! :D")
    $(document).on('click', '.navitem', function(e){
        console.log("navbar clicked!")
        e.preventDefault();
    });
});