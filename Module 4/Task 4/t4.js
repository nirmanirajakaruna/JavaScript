document.getElementById('searchForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const query = document.getElementById('query').value;
  const url = `https://api.tvmaze.com/search/shows?q=${query}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const resultsDiv = document.getElementById('results');
      resultsDiv.innerHTML = '';

      data.forEach(tvShow => {
        const show = tvShow.show;

        const article = document.createElement('article');

        const h2 = document.createElement('h2');
        h2.textContent = show.name;

        const link = document.createElement('a');
        link.href = show.url;
        link.textContent = 'Details';
        link.target = '_blank';

        const img = document.createElement('img');
        img.src = show.image && show.image.medium
          ? show.image.medium
          : 'https://placehold.co/210x295?text=Not%20Found';
        img.alt = show.name;

        const summary = document.createElement('div');
        summary.innerHTML = show.summary;

        article.appendChild(h2);
        article.appendChild(link);
        article.appendChild(img);
        article.appendChild(summary);

        resultsDiv.appendChild(article);
      });
    })
    .catch(error => {
      console.error('Error:', error);
    });
});
