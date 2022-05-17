window.onload = () => {
    changeEsportsPicText();
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
