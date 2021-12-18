const mountainRange = document.querySelector('.moon img');
const title = document.querySelector('h1')

gsap.to(mountainRange, {
    y: 100,
    scrollTrigger: {
        trigger: 'moon',
        scrub: true
    }
})

gsap.to(title, {
    y: 500,
    scrollTrigger: {
        trigger: "moon",
        scrub: true
    }
})