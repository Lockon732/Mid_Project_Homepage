// Typing animation

document.addEventListener('DOMContentLoaded', function () {

    // Typing Animation
    var typingEl = document.getElementById('typing-text');

    if (typingEl) {
        var phrases = [
            'automasi dan desktop bots.',
            'machine learning.',
            'algorithmic trading.',
            'reverse engineering.'
        ];
        var prefix = 'Minat di ';
        var phraseIndex = 0;
        var charIndex = 0;
        var isDeleting = false;

        function tick() {
            var current = phrases[phraseIndex];
            var displayed = isDeleting
                ? current.substring(0, charIndex - 1)
                : current.substring(0, charIndex + 1);

            typingEl.textContent = prefix + displayed;

            if (!isDeleting) charIndex++;
            else charIndex--;

            var delay = isDeleting ? 35 : 75;

            if (!isDeleting && charIndex === current.length) {
                delay = 1800;
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                phraseIndex = (phraseIndex + 1) % phrases.length;
                delay = 400;
            }

            setTimeout(tick, delay);
        }

        tick();
    }


});
