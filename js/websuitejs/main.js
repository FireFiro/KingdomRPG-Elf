feather.replace()
function animation1() {
    var button = anime.timeline({
        targets: '.infobtn',
        duration: 500,
        endDelay: 400,
    }).add({
        translateX: -714,
        translateY: -663,
    }).add({
        scale: 42,
    })
    anime({
        targets: ".infobtn svg",
        opacity: '0%'
    })
    button.finished.then(animation2)
}
function animation2() {
    var infobox = anime({
        targets: ".scroll",
        delay: 500,
        height: ['0px', '792px'],
        opacity: ['0%', '100%'],
    })
}
function animationClose() {
    var infobox = anime({
        targets: ".scroll",
        direction: 'reverse',
        height: ['0px', '792px'],
        opacity: ['0%', '100%'],
    })
    infobox.finished.then(animationClose2)
}
function animationClose2() {
    var button = anime.timeline({
        targets: '.infobtn',
        // direction: 'reverse',
        duration: 500,
        endDelay: 400,
    }).add({
        scale: 1,
    }).add({
        translateX: 0,
        translateY: 0,
    })
    button.finished.then(animationClose3)
}
function animationClose3() {
    anime({
        targets: ".infobtn svg",
        opacity: '100%'
    })
}
$(".infobtn").click(animation1)
$(".closebtn").click(animationClose)