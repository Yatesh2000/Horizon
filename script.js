function locomotiveAnimation(){
    gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,

  // for tablet smooth
  tablet: { smooth: true },

  // for mobile
  smartphone: { smooth: true }
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight
    };
  }

  // follwoing line is not required to work pinning on touch screen

  /* pinType: document.querySelector("#main").style.transform
    ? "transform"
    : "fixed"*/
});


ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

}

locomotiveAnimation()

var tl = gsap.timeline()
tl.to("#load h1",{
    y: -100,
    duration:0.9,
},"a")

tl.to("#load h2",{
    y: 100,
    duration:0.9,

},"a")

tl.to("#load #load-circle",{
    scale: 0,
    duration:0.5,
    delay:0.4

},"a")

tl.to("#loader",{
    display: "none"
})

tl.to(".page1-div",{
    height: "100%",
    duration: 0.6,
},"b")

tl.from("#page1 h1",{
    stagger: 0.3,
    y: 100,
    opacity: 0,
    duration: 0.8,
    delay: -0.3
},"b")

tl.from("#container #container-circle",{
    scale: 0,
    duration: 0.5,
    delay: 0.9

},"b")

tl.from("#lower-container h5",{
    y: 100,
    opacity: 1,
    duration: 1,
    delay: -0.6

},"c")

tl.to("#page1 #line",{
    width: "100%",
    duration: 1.5,
},"c")

tl.from("#page1 nav .part1",{
    y: 20,
    opacity: 0,
    stagger: 0.3,
    duration: 1,
},"c")

tl.to("#page1 #image-div img",{
    width: "100%",
    duration: 1.5,
    ease: "power1.out",
},"c")





