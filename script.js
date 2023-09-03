    document.addEventListener('DOMContentLoaded', function () {
        const progressContainer = document.querySelector('.progress-container');
        const progressBar = document.querySelector('.progress-bar');
        const percentageText = document.querySelector('.percentage');
        const downloadBtn = document.getElementById('downloadBtn');
        const sfx = document.getElementById('sfx');
        const progressImage = document.querySelector('.progress-image');

        downloadBtn.addEventListener('click', function () {
            progressBar.style.width = '0%';
            percentageText.textContent = '0%';

            sfx.play();
            
            progressContainer.style.transition = 'transform 5s ease';
            progressBar.style.transition = 'width 0.1s ease';
            progressContainer.style.transform = 'translateY(300px) rotate(-45deg)';
            progressImage.style.visibility = 'visible';


            setTimeout(function () {
                animateProgressBar();
            }, 100);
        });

        function animateProgressBar() {
            let width = 0;
            const targetWidth = 87;
            const animationDuration = 250000;
            const increment = (targetWidth / animationDuration) * 100; // Percentage per millisecond

            const interval = setInterval(function () {
                width += increment;
                progressBar.style.width = width + '%';
                percentageText.textContent = Math.round(width) + '%';

                if (width >= targetWidth) {
                    clearInterval(interval);
                    setTimeout(function () {
                        progressBar.style.width = '0%';
                        percentageText.textContent = '0%';
                        animateProgressBar(); // Restart the animation
                    }, 100);
                }
            }, 1);
        }
    });

