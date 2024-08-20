/*
let highestZ = 1;

class Paper {
    holdingPaper = false;
    mouseTouchX = 0;
    mouseTouchY = 0;
    mouseX = 0;
    mouseY = 0;
    prevMouseX = 0;
    prevMouseY = 0;
    velX = 0;
    velY = 0;
    rotation = Math.random() * 30 - 15;
    currentPaperX = 0;
    currentPaperY = 0;
    rotating = false;

    init(paper) {
        const handleMove = (x, y) => {
            if (!this.rotating) {
                this.mouseX = x;
                this.mouseY = y;

                this.velX = this.mouseX - this.prevMouseX;
                this.velY = this.mouseY - this.prevMouseY;
            }

            if (this.holdingPaper) {
                if (!this.rotating) {
                    this.currentPaperX += this.velX;
                    this.currentPaperY += this.velY;
                }
                this.prevMouseX = this.mouseX;
                this.prevMouseY = this.mouseY;

                paper.style.transform = `translateX(${this.currentPaperX}px) translateY(${this.currentPaperY}px) rotateZ(${this.rotation}deg)`;
            }
        };

        const handleRotation = (touches) => {
            if (touches.length === 2) {
                const [touch1, touch2] = touches;
                const dx = touch2.clientX - touch1.clientX;
                const dy = touch2.clientY - touch1.clientY;
                const angle = Math.atan2(dy, dx);
                let degrees = (180 * angle) / Math.PI;
                degrees = (360 + Math.round(degrees)) % 360;
                this.rotation = degrees;
            }
        };

        // Mouse Events
        document.addEventListener('mousemove', (e) => {
            if (this.holdingPaper) {
                handleMove(e.clientX, e.clientY);
            }
        });

        document.addEventListener('mouseup', () => {
            this.holdingPaper = false;
            this.rotating = false;
        });

        // Touch Events for Mobile Devices
        paper.addEventListener('touchstart', (e) => {
            if (this.holdingPaper) return;
            this.holdingPaper = true;

            paper.style.zIndex = highestZ;
            highestZ += 1;

            const touches = e.touches;
            if (touches.length === 1) {
                const touch = touches[0];
                this.mouseTouchX = touch.clientX;
                this.mouseTouchY = touch.clientY;
                this.prevMouseX = touch.clientX;
                this.prevMouseY = touch.clientY;
            } else if (touches.length === 2) {
                this.rotating = true;
            }
        });

        paper.addEventListener('touchmove', (e) => {
            e.preventDefault();
            const touches = e.touches;
            if (this.holdingPaper) {
                if (touches.length === 1) {
                    handleMove(touches[0].clientX, touches[0].clientY);
                } else if (touches.length === 2) {
                    handleRotation(touches);
                }
            }
        });

        window.addEventListener('touchend', (e) => {
            if (e.touches.length === 0) {
                this.holdingPaper = false;
                this.rotating = false;
            }
        });

        paper.addEventListener('contextmenu', (e) => {
            e.preventDefault(); // Prevent default context menu on right-click
        });
    }
}

// Initialize
const papers = Array.from(document.querySelectorAll('.paper'));
papers.forEach(paper => {
    const p = new Paper();
    p.init(paper);
});

document.getElementById('music').addEventListener('click', function() {
    const audio = document.getElementById('background-music');
    audio.play();
});
*/

(function() {
    let highestZ = 1;

    class Paper {
        holdingPaper = false;
        mouseTouchX = 0;
        mouseTouchY = 0;
        mouseX = 0;
        mouseY = 0;
        prevMouseX = 0;
        prevMouseY = 0;
        velX = 0;
        velY = 0;
        rotation = Math.random() * 30 - 15;
        currentPaperX = 0;
        currentPaperY = 0;
        rotating = false;

        init(paper) {
            const handleMove = (x, y) => {
                if (!this.rotating) {
                    this.mouseX = x;
                    this.mouseY = y;

                    this.velX = this.mouseX - this.prevMouseX;
                    this.velY = this.mouseY - this.prevMouseY;
                }

                if (this.holdingPaper) {
                    if (!this.rotating) {
                        this.currentPaperX += this.velX;
                        this.currentPaperY += this.velY;
                    }
                    this.prevMouseX = this.mouseX;
                    this.prevMouseY = this.mouseY;

                    paper.style.transform = `translateX(${this.currentPaperX}px) translateY(${this.currentPaperY}px) rotateZ(${this.rotation}deg)`;
                }
            };

            const handleRotation = (touches) => {
                if (touches.length === 2) {
                    const [touch1, touch2] = touches;
                    const dx = touch2.clientX - touch1.clientX;
                    const dy = touch2.clientY - touch1.clientY;
                    const angle = Math.atan2(dy, dx);
                    let degrees = (180 * angle) / Math.PI;
                    degrees = (360 + Math.round(degrees)) % 360;
                    this.rotation = degrees;
                }
            };

            // Mouse Events
            document.addEventListener('mousemove', (e) => {
                if (this.holdingPaper) {
                    handleMove(e.clientX, e.clientY);
                }
            });

            document.addEventListener('mouseup', () => {
                this.holdingPaper = false;
                this.rotating = false;
            });

            // Touch Events for Mobile Devices
            paper.addEventListener('touchstart', (e) => {
                if (this.holdingPaper) return;
                this.holdingPaper = true;

                paper.style.zIndex = highestZ;
                highestZ += 1;

                const touches = e.touches;
                if (touches.length === 1) {
                    const touch = touches[0];
                    this.mouseTouchX = touch.clientX;
                    this.mouseTouchY = touch.clientY;
                    this.prevMouseX = touch.clientX;
                    this.prevMouseY = touch.clientY;
                } else if (touches.length === 2) {
                    this.rotating = true;
                }
            });

            paper.addEventListener('touchmove', (e) => {
                e.preventDefault();
                const touches = e.touches;
                if (this.holdingPaper) {
                    if (touches.length === 1) {
                        handleMove(touches[0].clientX, touches[0].clientY);
                    } else if (touches.length === 2) {
                        handleRotation(touches);
                    }
                }
            });

            window.addEventListener('touchend', (e) => {
                if (e.touches.length === 0) {
                    this.holdingPaper = false;
                    this.rotating = false;
                }
            });

            paper.addEventListener('contextmenu', (e) => {
                e.preventDefault(); // Prevent default context menu on right-click
            });
        }
    }

    // Initialize
    const papers = Array.from(document.querySelectorAll('.paper'));
    papers.forEach(paper => {
        const p = new Paper();
        p.init(paper);
    });

    // Music play functionality
    document.getElementById('music').addEventListener('click', function() {
        const audio = document.getElementById('background-music');
        if (audio) {
            audio.play().catch(error => console.error('Error playing audio:', error));
        } else {
            console.error('Background music element not found.');
        }
    });
})();

