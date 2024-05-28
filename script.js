let basket;
let gameArea;
let score = 0;
let timeLeft = 30;
let gameInterval;
let coinInterval;

document.addEventListener('DOMContentLoaded', () => {
    basket = document.getElementById('basket');
    gameArea = document.getElementById('gameArea');

    window.addEventListener('keydown', moveBasket);

    gameArea.addEventListener('touchstart', handleTouch);
    gameArea.addEventListener('touchmove', handleTouch);
});

function startGame() {
    score = 0;
    timeLeft = 30;
    document.getElementById('score').innerText = score;
    document.getElementById('timeLeft').innerText = timeLeft;

    if (gameInterval) clearInterval(gameInterval);
    if (coinInterval) clearInterval(coinInterval);

    gameInterval = setInterval(updateTime, 1000);
    coinInterval = setInterval(dropCoin, 1000);
}

function updateTime() {
    timeLeft -= 1;
    document.getElementById('timeLeft').innerText = timeLeft;
    if (timeLeft <= 0) {
        clearInterval(gameInterval);
        clearInterval(coinInterval);
        alert(`Game Over! Your score is ${score}`);
    }
}

function moveBasket(event) {
    const basketRect = basket.getBoundingClientRect();
    const gameAreaRect = gameArea.getBoundingClientRect();

    if (event.key === 'ArrowLeft' && basketRect.left > gameAreaRect.left) {
        basket.style.left = `${basket.offsetLeft - 20}px`;
    } else if (event.key === 'ArrowRight' && basketRect.right < gameAreaRect.right) {
        basket.style.left = `${basket.offsetLeft + 20}px`;
    }
}

function handleTouch(event) {
    const touchX = event.touches[0].clientX;
    const gameAreaRect = gameArea.getBoundingClientRect();
    const basketWidth = basket.offsetWidth;

    let newLeft = touchX - gameAreaRect.left - basketWidth / 2;

    if (newLeft < 0) newLeft = 0;
    if (newLeft > gameAreaRect.width - basketWidth) newLeft = gameAreaRect.width - basketWidth;

    basket.style.left = `${newLeft}px`;
}

function dropCoin() {
    const coin = document.createElement('div');
    coin.classList.add('coin');
    coin.style.left = `${Math.random() * (gameArea.offsetWidth - 20)}px`;
    gameArea.appendChild(coin);

    let coinFallInterval = setInterval(() => {
        const coinRect = coin.getBoundingClientRect();
        const basketRect = basket.getBoundingClientRect();
        const gameAreaRect = gameArea.getBoundingClientRect();

        if (coinRect.top > gameAreaRect.bottom) {
            gameArea.removeChild(coin);
            clearInterval(coinFallInterval);
        } else if (
            coinRect.bottom >= basketRect.top &&
            coinRect.left >= basketRect.left &&
            coinRect.right <= basketRect.right
        ) {
            score += 1;
            document.getElementById('score').innerText = score;
            gameArea.removeChild(coin);
            clearInterval(coinFallInterval);
        } else {
            coin.style.top = `${coin.offsetTop + 5}px`;
        }
    }, 20);
}
