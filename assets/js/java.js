$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    var height = $(".jumbotron-fluid").height()

     //>=, not <=
     if((scroll >= height) && ($(".navbar").hasClass('dummy'))){
        $(".navbar").removeClass("bg-dark");
        $(".navbar").removeClass("navbar-dark");
        $(".navbar").addClass("navbar-light");
        $(".navbar").addClass("bg-light");
    }
     else if (scroll >= height) {
        //clearHeader, not clearheader - caps H
        $(".navbar").removeClass("navbar-dark");
        $(".navbar").addClass("navbar-light");
        $(".navbar").addClass("bg-light");
    }
    if ((scroll < height) && ($(".navbar").hasClass('dummy'))) {
        //clearHeader, not clearheader - caps H
        $(".navbar").removeClass("navbar-light");
        $(".navbar").addClass("navbar-dark");
        $(".navbar").removeClass("bg-light");
        $(".navbar").addClass("bg-dark");
    }
    else if (scroll < height) {
        //clearHeader, not clearheader - caps H
        $(".navbar").removeClass("navbar-light");
        $(".navbar").addClass("navbar-dark");
        $(".navbar").removeClass("bg-light");
    }
    
});
