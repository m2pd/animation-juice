document.addEventListener("DOMContentLoaded", function () {
  var scene = document.getElementById("scene");
  var parallax = new Parallax(scene);

  let timeline1 = new TimelineMax();

  //TimelineMax

  TweenMax.from(".logo", 1, {
    autoAlpha: 0,
    x: -20,
    ease: Expo.easeInOut
  })

  TweenMax.staggerFrom(".menu-links ul li", 1, {
    autoAlpha: 0,
    x: -20,
    ease: Power3.easeInOut
  }, 0.08)

  TweenMax.from(".search", 1, {
    delay: .5,
    autoAlpha: 0,
    x: -20,
    ease: Expo.easeInOut
  })

  TweenMax.from(".account", 1, {
    delay: .6,
    autoAlpha: 0,
    x: -20,
    ease: Expo.easeInOut
  })

  TweenMax.from(".cart", 1, {
    delay: .7,
    autoAlpha: 0,
    x: -20,
    ease: Expo.easeInOut
  })

  TweenMax.from(".juice", 1, {
    delay: 2,
    autoAlpha: 0,
    x: -20,
    ease: Expo.easeInOut
  })

  TweenMax.from(".leaves .layer:nth-child(1)", 2, {
    delay: 2,
    autoAlpha: 0,
    y: -800,
    ease: Expo.easeInOut
  })

  TweenMax.from(".leaves .layer:nth-child(2)", 2, {
    delay: 2.1,
    autoAlpha: 0,
    y: -800,
    ease: Expo.easeInOut
  })

  TweenMax.from(".leaves .layer:nth-child(3)", 2, {
    delay: 2.2,
    autoAlpha: 0,
    y: -800,
    ease: Expo.easeInOut
  })

  TweenMax.from(".leaves .layer:nth-child(4)", 2, {
    delay: 2.3,
    autoAlpha: 0,
    y: -800,
    ease: Expo.easeInOut
  })

  TweenMax.from(".leaves .layer:nth-child(5)", 2, {
    delay: 2.4,
    autoAlpha: 0,
    y: -800,
    ease: Expo.easeInOut
  })

  TweenMax.from(".title", 1, {
    delay: 1,
    autoAlpha: 0,
    y: 20,
    ease: Expo.easeInOut
  })

  TweenMax.from(".tagline", 1, {
    delay: 1.3,
    autoAlpha: 0,
    y: 20,
    ease: Expo.easeInOut
  })

  TweenMax.from(".pages", 1, {
    delay: 1.3,
    autoAlpha: 0,
    y: 20,
    ease: Expo.easeInOut
  })

  TweenMax.from(".more", 1, {
    delay: 1.4,
    autoAlpha: 0,
    y: 20,
    ease: Expo.easeInOut
  })

  TweenMax.from(".desc", 1, {
    delay: 1.4,
    autoAlpha: 0,
    y: 20,
    ease: Expo.easeInOut
  })

  TweenMax.from(".arrows .next", 1, {
    delay: 2,
    autoAlpha: 0,
    y: 20,
    ease: Expo.easeInOut
  })

  TweenMax.from(".arrows .prev", 1, {
    delay: 2,
    autoAlpha: 0,
    y: 20,
    ease: Expo.easeInOut
  })

})