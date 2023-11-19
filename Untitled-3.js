// Glitch loading animation
const loading = select('.loading');

setInterval(() => {
  loading.classList.toggle('glitch-active');
}, 250);

// Toggle artwork tags 
artworks.forEach(function (artwork) {

        artwork.addEventListener('click', () => {
            artwork.classList.toggle('tagged');
        });

    });
