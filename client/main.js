Template.Main.rendered = function () {
    $(document).on('keyup', (e) => {
        if (e.keyCode === 37) {
            goToPrevSlide();
        }
        if (e.keyCode === 39) {
            goToNextSlide();

        }
    });
}

Template.Main.events({
    "click #prev"(event) {
        event.preventDefault();

        goToPrevSlide();
    },
    "click #next"(event) {
        event.preventDefault();

        goToNextSlide();
    }
});

goToNextSlide = function () {
    $("#slide").animate({opacity: '0'}, "slow", function () {
        $("#slide").css('opacity', '1');
        FlowRouter.go('/' + nextSlide());
    });
}

goToPrevSlide = function () {
    $("#slide").animate({opacity: '0'}, "slow", function () {
        $("#slide").css('opacity', '1');
        FlowRouter.go('/' + prevSlide());
    });
}