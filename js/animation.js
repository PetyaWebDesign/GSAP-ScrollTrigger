const theMoonContainer = document.querySelector('.moon');
const title = document.querySelector('h1');

gsap.to(theMoonContainer, {
    y: 100,
    scrollTrigger: {
        trigger: 'home-mountains',
        scrub: true
    }
})


gsap.to(title, {
    y: 400,
    scrollTrigger: {
        trigger: "home-mountains",
        scrub: true
    }
})