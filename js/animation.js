const moonContent = document.querySelector('.moon img');
const title = document.querySelector('.moon-title');
const blockTwo = document.querySelector('.falcon-info');



// entry section animation
gsap.to(moonContent, {
    y: 100,
    scrollTrigger: {
        trigger: 'moon',
        scrub: true
    }
})

gsap.to(title, {
    y: 500,
    scrollTrigger: {
        trigger: 'moon',
        scrub: true
    }
})

// first content block
gsap.to(blockTwo, {
    // duration: 1,
    scale: 0.5,
    y: 200,
    autoAlpha: 0,
    scrollTrigger: {
        trigger: '.falcon-info',
        scrub: true,
        start: 'top 60%',
        end: 'center 10%',
        markers: true
    }
})