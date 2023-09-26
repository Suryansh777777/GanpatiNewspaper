const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

var tl=gsap.timeline()

tl.to("#page1",{
    y:"100vh",
    scale:0.6,
    duration:0
})

tl.to("#page1",{
    y:"5vh",
    duration:1,
    delay:1
})
tl.to("#page1",{
    y:"0vh",
    rotate:-360,
    scale:1,
    duration:0.7

})

const videos = document.querySelectorAll('.vid');

videos.forEach(video => {
  video.addEventListener('mouseenter', () => {
    video.play();
  });
  
  video.addEventListener('mouseleave', () => {
    video.pause();
    video.currentTime = 0;
  });
});

