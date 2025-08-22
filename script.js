$(document).ready(function() {
    const loveMessage = "Happy Birthday My Love <3";
    const textElement = $("#love-text");
    let index = 0;

    function type() {
        if (index < loveMessage.length) {
            textElement.append(loveMessage.charAt(index));
            index++;
            setTimeout(type, 150); 
        }
    }

    setTimeout(type, 6000);

    const confettiContainer = $('.confetti-container');
    const colors = ['#fce4ec', '#f8bbd0', '#f48fb1', '#ff9a9e', '#fad0c4', '#ffffff'];

    function createConfetti() {
        const confetti = $('<div class="confetti"></div>');
        const size = Math.random() * 12 + 8; 
        const x = Math.random() * 100;
        const color = colors[Math.floor(Math.random() * colors.length)];

        if (Math.random() > 0.9) {
            confetti.html('♥').css({
                'font-size': size * 1.5 + 'px',
                'border-radius': 0
            });
        } else {
             confetti.css({
                'width': size + 'px',
                'height': size + 'px',
             });
        }
        
        confetti.css({
            'background-color': color,
            'color': color,
            'left': x + '%'
        });

        confettiContainer.append(confetti);

        gsap.to(confetti, {
            y: '100vh',
            x: '+= ' + (Math.random() - 0.5) * 300,
            rotation: Math.random() * 360 - 180,
            duration: Math.random() * 5 + 6, 
            ease: 'none',
            onComplete: () => {
                confetti.remove();
            }
        });
    }

    setInterval(createConfetti, 80);
});
