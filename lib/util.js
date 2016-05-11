slides = ["home", "intro","community", "principles", "database", "reactivity", "mobile", "doubts" ];
this.state = new ReactiveDict();

getSlide = () => {
    var slide = state.get("slide");
    if(!slide){
        slide = 0
        setSlide(slide);
    }
    return slide;
}

setSlide = (slide) => {
    state.set("slide", slide);
}

nextSlide = () => {
    var slide = getSlide();
    if(slide < slides.length - 1) {
        setSlide(slide++);
    }
    return slide;
}

prevSlide = () => {
    var slide = getSlide();
    if(slide > 0) {
        setSlide(slide--);
    }
    return slide;
}