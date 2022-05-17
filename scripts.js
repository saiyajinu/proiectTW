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
