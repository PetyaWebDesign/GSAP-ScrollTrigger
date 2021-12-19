const moonContent = document.querySelector('.moon img');
const title = document.querySelector('.moon-title');
const blockTitleOne = document.querySelector('h2');


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
gsap.to(blockTitleOne, {
    duration: 1,
    scale: 0.5,
    y: 200,
    autoAlpha: 0,
    scrollTrigger: {
        trigger: '.content-block-1 h2',
        scrub: true,
        start: 'top 50%'
    }
})