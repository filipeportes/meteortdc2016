FlowRouter.route('/', {
    action: () => {
        BlazeLayout.render("Main", {content: slides[getSlide()]});
    }
});

FlowRouter.route('/home',{
    action: () => {
        setSlide(0);
        BlazeLayout.render('Main', { content: slides[0] });
    }
});

FlowRouter.route('/:slideId',{
    action: (params) => {
        setSlide(params.slideId);
        BlazeLayout.render('Main', { content: slides[params.slideId] });
    }
});
