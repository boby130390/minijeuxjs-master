export class Confetti{
    static launchAnimationConfetti(){
        let animateDiv = document.createElement("div");
        animateDiv.id = "allconfettis";
        animateDiv.innerHTML = "";

        for(let i =0; i < 100; i++){
            let confeti = document.createElement("div");
            confeti.classList.add("confetti");
            confeti.style.left = getRandomArbitrary(0,100)+'%';
            confeti.style.animationDelay = 50*i+"ms";
            confeti.style.backgroundColor = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
            animateDiv.appendChild(confetti);
        }

        document.body.appendChild(animateDiv);
    }

    static stopAnimationConfetti(){
        let animateDiv = document.getElementById("allconfettis");
        animateDiv.innerHTML = "";
        animateDiv.remove();
    }
    
    static getRandomArbitrary(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
        
    }
}    