function openList1() {
    var list = document.getElementById("ollist");

    if (list.style.display == "none"){
        list.style.display = "block";
    }else{
        list.style.display = "none";
    }
}
function openList2() {
    var list3 = document.getElementById("ullist");

    if (list3.style.display == "none"){
        list3.style.display = "block";
    }else{
        list3.style.display = "none";
    }
}


$(function() {
    $('table').on('click', function() {
        var tableClone = $.clone(this);
        var stage = $('#showTableHereWhenTableIsClicked');
        stage.prop('innerHTML', '');
        $(tableClone).appendTo(stage);
    });
});

$("#slideshow > div:gt(0)").hide();

setInterval(function() { 
  $('#slideshow > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshow');
},  3000);
