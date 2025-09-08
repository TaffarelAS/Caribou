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
        draw(context, volume) {
            context.strokeStyle = this.color;
            //context.fillRect(this.x, this.y, this.width, this.height)
            context.save();
            context.translate(0, 0);
            context.rotate(this.index * 0.03)
            context.scale(1 + volume * 0.2,1) + volume * randomNumber;

            // Zona do agrião abaixo
            context.beginPath();
            context.moveTo(this.x, this.y);
            context.lineTo(this.y, this.height);
            context.stroke();
            context.strokeRect(this.y, this.height, this.height/2, 5)

            context.restore();
        }
    }
    const fftSize = 1024;
    const microphone = new Microphone(fftSize);
    let bars = [];
    let barWidth = canvas.width / (fftSize/2);
    function createBars() {
        for (let i = 0; i < (fftSize/2); i++) {
            let color = 'hsl(' + i * 2 + ', 100%, 50%)' // hsl = Hue Saturation Color
            bars.push(new Bar(0, i *2, 5, 20, color, i));
        }
    }
    createBars();
    console.log(bars)
    let angle = 0; 

    function animate() {
        if (microphone.initialized) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            //generates audio samples from microphone
            const samples = microphone.getSamples();
            const volume = microphone.getVolume();
            //animate bars based on microphone data
            angle += 0.00008 + volume * 0.8;
            ctx.save()
            ctx.translate(canvas.width/2,canvas.height/2);
            ctx.rotate(angle);
            bars.forEach(function (bar, i) {
                bar.update(samples[i]);
                bar.draw(ctx, volume);
            });
            ctx.restore();
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