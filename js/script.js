const sons = [
    {letra:'A', som: 'boom.wav'},
    {letra:'S', som: 'clap.wav'},
    {letra:'D', som: 'hihat.wav'},
    {letra:'F', som: 'kick.wav'},
    {letra:'G', som: 'openhat.wav'},
    {letra:'H', som: 'ride.wav'},
    {letra:'J', som: 'snare.wav'},
    {letra:'K', som: 'tink.wav'},
    {letra:'L', som: 'tom.wav'}
]

const criarDiv = (letra) => {
    const div = document.createElement('div');
    div.innerText = letra;
    document.querySelector('#container').appendChild(div);

    div.classList.add(`${letra}`);
    div.setAttribute('id', 'key');
}  

const tocarSom = (letra, som) => {
    document.addEventListener('click', function(e){
        const el = e.target;
        if(el.classList.contains(`${letra}`)){
           const audio = new Audio(`./sounds/${som}`);
           audio.play();
        }
        return;
    });
}

const letraSons = () => {
    for (let i = 0; i < sons.length; i++){
        let {letra, som} = sons[i];
        criarDiv(letra);
        tocarSom(letra, som);
        tocarSomTecla(letra, som);       
    }
}   

const tocarSomTecla = (letra, som) => {
    document.addEventListener('keypress', function(e){
        if(e.code === `Key${letra.toUpperCase()}`){
            const audio = new Audio(`./sounds/${som}`);
            audio.play(); 
        }      
        return;
    }); 
}

letraSons();


