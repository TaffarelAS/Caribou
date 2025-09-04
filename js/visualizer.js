function main() {
    const canvas = document.getElementById('myCanvas');
    var ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // let slider1 = document.getElementById('myRange').value;

    class Bar {

        constructor(x, y, width, height, color, index) {
            this.x = x;
            this.y = y;
            this.width = width;
            this.height = height;
            this.color = color;
            this.index = index;

        }
        update(micInput) {
            //Suaviza a barra voltando ao 0
            const sound = micInput * 1000;
            if (sound > this.height){
                this.height = sound;
            } else {
                this.height -= this.height * 0.2;
            }

        }
        draw(context) {
            context.strokeStyle = this.color;
            //context.fillRect(this.x, this.y, this.width, this.height)
            context.save();
            context.translate(canvas.width / 2, canvas.height / 2);
            context.rotate(this.index * 0.05)

            // Zona do agrião abaixo
            context.beginPath();
            context.moveTo(0, randomNumber);
            context.lineTo(randomNumber, this.height);
            context.stroke();

            context.restore();
        }
    }
    const microphone = new Microphone();
    let bars = [];
    let barWidth = canvas.width / 256;
    function createBars() {
        for (let i = 0; i < 256; i++) {
            let color = 'hsl(' + i * 2 + ', 100%, 50%)' // hsl = Hue Saturation Color
            bars.push(new Bar(i * barWidth, canvas.height / 2, 1, 20, color, i));
        }
    }
    createBars();
    console.log(bars)

    function animate() {
        if (microphone.initialized) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            //generates audio samples from microphone
            const samples = microphone.getSamples();
            //animate bars based on microphone data
            bars.forEach(function (bar, i) {
                bar.update(samples[i]);
                bar.draw(ctx);
            })
        }

        requestAnimationFrame(animate);
    }
    animate();

    
    // var slider = document.getElementById("myRange")

    // var a = 0; //variavel a ser controlada

    // var demo = document.getElementById("demo")
    // demo.innerHTML = a;

    // //funçao a ser chamada quando valor do slide muda
    // setInterval(function() {
    //     a = slider.value;
    //     demo.innerHTML = a;
    // }, 100)

}

function aleatorio() {

    return randomRotate =  Math.random(-1);

}

function aleatorio2() {

    return randomNumber =  Math.random() * 100

}

let randomRotate = 0;
let randomNumber = 0;
setInterval(aleatorio, 0.001); 
setInterval(aleatorio2, 1); 