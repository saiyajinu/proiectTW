window.onload = () => {
    changeEsportsPicText();
    welcome();
    addEasterEgg();
    visibilityGif();
}

function changeEsportsPicText(){
    const elemPozaSen = document.getElementById('img5');
    elemPozaSen.onclick = () => {
        let isSen = confirm("SEN is the best team in NA?");
        if(isSen){
            const textEsports = document.getElementById('sentext');
            textEsports.textContent = 'team SEN at International Event';
            textEsports.style.color = 'black';
            alert('you fanboi');
        }
        else{
            const textEsports = document.getElementById('sentext');
            textEsports.textContent = 'Optic > SEN 😉';
            textEsports.style.color = 'green'
        }
    }
}

function getVal() {
    const val = document.querySelector('input').value;
    const pcap = document.getElementById('cap');
    if (val == 'SAi' || val == 'iulliiia' || val == 'sai' || val == 'relu'){
        pcap.textContent = 'NO CAP ❌🧢';
        pcap.style.backgroundColor = 'green';
    }
    else if(val == ''){
        pcap.textContent = 'HM?';
        pcap.style.backgroundColor = 'gray';
    }
    else if(val == 'phemzin'){
        pcap.textContent = 'HE VALID💯🔥';
        pcap.style.backgroundColor = 'lightblue';
    }
    else{
        pcap.textContent = 'U CAPPIN🧢';
        pcap.style.backgroundColor = 'red';
    }  
}

function changeBackground(){
    const elements = document.getElementsByClassName('coloredbackground');
    for(let element of elements){
        if( element.style.backgroundColor != 'blue')
            element.style.backgroundColor = 'blue';
        else element.style.backgroundColor = '#ff4655'
    }
}

function agentPicker(){
    const agents = ['Brimstone', 'Viper', 'Omen', 'Killjoy', 'Cypher', 'Sova', 'Sage', 'Phoenix', 'Jett', 'Reyna', 'Raze', 'Breach', 'Skye', 'Yoru', 'Astra', 'KAYO', 'Chamber', 'Neon', 'Fade'];
    let agent = agents[Math.floor(Math.random() * agents.length)];
    let pickdiv = document.getElementById('pickdiv');
    document.getElementById('agentimage').src=agent +"_artwork.webp";
    let pagent = document.createElement('p');
    pagent.setAttribute('id','todelete');
    let text = document.createTextNode('You should be playing ' + agent + '!');
    pagent.appendChild(text);
    pickdiv.appendChild(pagent);
    localStorage.removeItem('yourAgent');
    localStorage.setItem('yourAgent', JSON.stringify(agent))
    setTimeout(() => {
        document.getElementById('agentimage').src = 'questionmark.png';
        let element = document.getElementById('todelete');
        element.parentNode.removeChild(element);
    }, 5000);
}

function welcome(){
    setTimeout(() => {
        let agent;
        try{
            agent = JSON.parse(localStorage.getItem('yourAgent'));
        }catch(error){
            agent = null;
        }
        if(agent == null){
            alert('Welcome! You haven\'t drawn an agent yet :(')
        }
        else{
            alert('Welcome back! Have you played ' + agent + ' yet?!')
        }
    }, 500);  
}

function rgbFooter(){
    const footer = document.getElementById('footer');
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    footer.style.color = 'rgb(' + r + ', ' + g + ', '+ b + ')';
    const interval = setInterval(() => {
        let r = Math.floor(Math.random() * 255);
        let g = Math.floor(Math.random() * 255);
        let b = Math.floor(Math.random() * 255);
        footer.style.color = 'rgb(' + r + ', ' + g + ', '+ b + ')';
    }, 500); 
    
    setTimeout(() => {
        clearInterval(interval);
    }, 5000);
}  

const tenz = ['t','e','n','z'];

function addEasterEgg(){
    document.addEventListener('keydown', easterEgg1);

    function easterEgg1(e){
        let usage = 0;
        if(e.key == 't'){
            console.log(e.key);
            document.addEventListener('keydown', easterEgg2);
            function easterEgg2(e){
                if(e.key == 'e'){
                    console.log(e.key);
                    document.addEventListener('keydown', easterEgg3);
                    function easterEgg3(e){
                        if(e.key == 'n'){
                            console.log(e.key);   
                            document.addEventListener('keydown', easterEgg4);
                            function easterEgg4(e){
                                if(e.key == 'z' && usage == 0){
                                    console.log(e.key);
                                    confirm('TENZEDZOMBIETENZEDZOMBIETENZEDZOMBIETENZEDZOMBIE');
                                    usage = 1;
                                }
                            }
                        }
                    }
                }
            }
        }              
    }
}

function turnVisibility(e){
    this.style.visibility = 'hidden';
    
    console.log(e.target);
    console.log(e.currentTarget);

    setTimeout(() => {
        e.target.style.visibility = 'visible';
    }, 2000);

    e.stopPropagation();
}

function visibilityGif(){
    const gif = document.getElementById('imag2');   
    gif.addEventListener('click', turnVisibility);    

    const p = document.getElementById('pimg2');   
    p.addEventListener('click', turnVisibility); 

    const tit = document.getElementById('whatval');   
    tit.addEventListener('click', turnVisibility); 

    const div = document.getElementById('par1');   
    div.addEventListener('click', turnVisibility);   
}


