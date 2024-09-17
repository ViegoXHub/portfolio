document.addEventListener('DOMContentLoaded', () => {
    const sentences = ["Programming Student", "Front-End Student"];
    let sentenceIndex = 0;
    let charIndex = 0;
    const typingSpeed = 100;
    const erasingSpeed = 100;
    const delayBetweenSentences = 2000;

    const subtextElement = document.getElementById('subtext');

    function typeSentence() {
        if (charIndex < sentences[sentenceIndex].length) {
            subtextElement.textContent += sentences[sentenceIndex].charAt(charIndex);
            charIndex++;
            setTimeout(typeSentence, typingSpeed);
        } else {
            setTimeout(eraseSentence, delayBetweenSentences);
        }
    }

    function eraseSentence() {
        if (charIndex > 0) {
            subtextElement.textContent = sentences[sentenceIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(eraseSentence, erasingSpeed);
        } else {
            sentenceIndex = (sentenceIndex + 1) % sentences.length;
            setTimeout(typeSentence, typingSpeed);
        }
    }

    setTimeout(typeSentence, typingSpeed);
});
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.page-section');

    const options = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target);
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });
});
