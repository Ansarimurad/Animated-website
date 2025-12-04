var tl = gsap.timeline({scrollTrigger:{
    trigger: ".two",
    start: "0% 95%",
    end: "70% 50%",
    scrub: true,
    // markers: true,
}})

tl.to("#fanta",{
    top: "120%",
    left: "0%"
}, 'orange')
tl.to("#orange2",{
    top:"155%",
    left: "25%"
}, 'orange')

tl.to("#orange",{
    width: "15%",
    top:"170%",
    right: "15%"
}, 'orange')

tl.to("#leaf",{
    width:"7%",
    top:"115%",
    rotate: "388deg",
    left: "58%"
}, 'orange')

tl.to("#leaf2",{
    width:"10%",
    top:"155%",
    rotate: "360deg",
    left: "3%"
}, 'orange')


var tl2 = gsap.timeline({scrollTrigger:{
    trigger: ".three",
    start: "0% 95%",
    end: "20% 50%",
    scrub: true,
    // markers: true,
}})

tl2.from(".lemon",{
    rotate: "-90deg",
    left: "-50%",
    top: "5%"
}, 'ca')

tl2.from("#pepsi",{
    rotate: "90deg",
    top: "110%",
    left: "100%",
}, 'ca')

tl2.from(".koka",{
    rotate: "-90deg",
    left: "-50%",
    top: "110%"
}, 'ca')
tl2.from("#cocacola",{
    rotate: "90deg",
    top: "110%",
    left: "-10%",
}, 'ca')


tl2.to("#orange2",{
    width:"18%",
    left: "45%",
    top: "205%"
}, 'ca')
tl2.to("#fanta",{
    width:"30%",
    top: "215%",
    left: "33%",
}, 'ca')
