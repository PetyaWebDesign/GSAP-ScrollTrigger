const moonContent = document.querySelector('.moon img');
const title = document.querySelector('.moon-title');
const blockTwo = document.querySelector('.falcon-info');
const src = [
    "img/toprocket.png",
    "img/midrocket.png"
];

const falconDesc = [
    "Falcon 9 is a reusable, two-stage rocket designed and manufactured by SpaceX for the reliable and safe transport of people and payloads into Earth orbit and beyond. Falcon 9 is the world’s first orbital class reusable rocket. Reusability allows SpaceX to refly the most expensive parts of the rocket, which in turn drives down the cost of space access.",
    "  Falcon 9 first stage incorporates nine Merlin engines and aluminum-lithium alloy tanks containing liquid oxygen and rocket-grade kerosene propellant.  Falcon 9 generates more than 1.7 million pounds of thrust at sea level. "
];



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
        scrub: true,
        start: 'top center'
    }
})

// First content block
gsap.to(blockTwo, {
    scale: 0.5,
    y: 200,
    autoAlpha: 0,
    scrollTrigger: {
        trigger: '.falcon-info',
        scrub: true,
        start: 'top 60%',
        end: 'center 10%',
        // markers: true
    }
})


// Falcon info

ScrollTrigger.create({
    trigger: '.sections',
    pin: '.tooltip',
    start: 'top 40%',
    end: 'bottom 90%',
    // markers: true
})

const sections = document.querySelectorAll('.section')

sections.forEach((section, index) => {
    ScrollTrigger.create({
        trigger: section,
        start: 'top center',
        end: "bottom center",
        onEnter: () => {
            gsap.set('.tooltip-img', {
                attr: { src: src[index] }
            })
            gsap.set('.tooltip p', {
                innerText: falconDesc[index]
            })
        },
        onEnterBack: () => {
            gsap.set('.tooltip-img', {
                attr: { src: src[index] }
            })
            gsap.set('.tooltip p', {
                innerText: falconDesc[index]
            })
        }
    })

})