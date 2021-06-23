window.addEventListener('scroll', function(){
    let animation = document.getElementById('animation');
    let positionObj1 = animation.getBoundingClientRect().top;
    console.log(positionObj1);
    let tamañoPantalla = 793.8125;

    if(positionObj1 < tamañoPantalla){
        animation.style.animation = 'mover 1s ease-out'
    }
})