// Set your global target date and time here
        // Format: new Date(year, monthIndex, day, hours, minutes, seconds)
        // Note: monthIndex is 0-11 (0 = January, 11 = December)
        const TARGET_DATE = new Date(2025, 7, 28, 19, 2, 0); // August 25, 2025 at 23:59:59
        
        // DOM elements
        const daysCard = document.getElementById('days-card');
        const hoursCard = document.getElementById('hours-card');
        const minutesCard = document.getElementById('minutes-card');
        const secondsCard = document.getElementById('seconds-card');
        const progressBar = document.getElementById('progress-bar');
        const messageEl = document.getElementById('message');
        
        // Start the countdown
        function startCountdown() {
            // Update immediately
            updateCountdown();
            
            // Then update every second
            const countdownInterval = setInterval(updateCountdown, 1000);
            
            function updateCountdown() {
                const now = new Date();
                const diff = TARGET_DATE - now;
                
                if (diff <= 0) {
                    // Countdown complete
                    clearInterval(countdownInterval);
                    setTimeValues(0, 0, 0, 0);
                    progressBar.style.width = '100%';
                    messageEl.classList.add('visible');
                    createFireworks();
                    return;
                }
                
                // Calculate time units
                const days = Math.floor(diff / (1000 * 60 * 60 * 24));
                const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((diff % (1000 * 60)) / 1000);
                
                // Update display
                setTimeValues(days, hours, minutes, seconds);
                
                // Update progress bar
                const totalDuration = TARGET_DATE - new Date(TARGET_DATE.getTime() - diff);
                const elapsed = totalDuration - diff;
                const progressPercent = (elapsed / totalDuration) * 100;
                progressBar.style.width = `${progressPercent}%`;
            }
        }
        
        // Set time values with animation
        function setTimeValues(days, hours, minutes, seconds) {
            // Update cards with flip animation
            if (days != parseInt(daysCard.querySelector('.time-card-front').textContent)) {
                daysCard.style.transform = 'rotateX(180deg)';
                setTimeout(() => {
                    daysCard.querySelector('.time-card-front').textContent = days.toString().padStart(2, '0');
                    daysCard.querySelector('.time-card-back').textContent = (days - 1).toString().padStart(2, '0');
                    daysCard.style.transform = 'rotateX(0deg)';
                }, 400);
            }
            
            if (hours != parseInt(hoursCard.querySelector('.time-card-front').textContent)) {
                hoursCard.style.transform = 'rotateX(180deg)';
                setTimeout(() => {
                    hoursCard.querySelector('.time-card-front').textContent = hours.toString().padStart(2, '0');
                    hoursCard.querySelector('.time-card-back').textContent = (hours - 1).toString().padStart(2, '0');
                    hoursCard.style.transform = 'rotateX(0deg)';
                }, 400);
            }
            
            if (minutes != parseInt(minutesCard.querySelector('.time-card-front').textContent)) {
                minutesCard.style.transform = 'rotateX(180deg)';
                setTimeout(() => {
                    minutesCard.querySelector('.time-card-front').textContent = minutes.toString().padStart(2, '0');
                    minutesCard.querySelector('.time-card-back').textContent = (minutes - 1).toString().padStart(2, '0');
                    minutesCard.style.transform = 'rotateX(0deg)';
                }, 400);
            }
            
            secondsCard.style.transform = 'rotateX(180deg)';
            setTimeout(() => {
                secondsCard.querySelector('.time-card-front').textContent = seconds.toString().padStart(2, '0');
                secondsCard.querySelector('.time-card-back').textContent = (seconds - 1).toString().padStart(2, '0');
                secondsCard.style.transform = 'rotateX(0deg)';
            }, 400);
        }
        
        // Create fireworks
        function createFireworks() {
            const colors = ['#ff6b6b', '#4ecdc4', '#ffe66d', '#ff9ff3', '#48dbfb'];
            const container = document.body;
            
            for (let i = 0; i < 50; i++) {
                const firework = document.createElement('div');
                firework.className = 'firework';
                
                // Random position
                const x = Math.random() * window.innerWidth;
                const y = Math.random() * window.innerHeight;
                
                // Random end position
                const angle = Math.random() * Math.PI * 2;
                const distance = 50 + Math.random() * 100;
                const xEnd = Math.cos(angle) * distance;
                const yEnd = Math.sin(angle) * distance;
                
                // Set CSS variables
                firework.style.setProperty('--x', `${x}px`);
                firework.style.setProperty('--y', `${y}px`);
                firework.style.setProperty('--x-end', `${xEnd}px`);
                firework.style.setProperty('--y-end', `${yEnd}px`);
                
                // Random color
                firework.style.color = colors[Math.floor(Math.random() * colors.length)];
                
                // Random delay
                firework.style.animationDelay = `${Math.random() * 2}s`;
                
                container.appendChild(firework);
            }
        }
        
        // Start the countdown when page loads
        document.addEventListener('DOMContentLoaded', startCountdown);