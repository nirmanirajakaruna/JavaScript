document.getElementById('searchForm').addEventListener('submit', function(event) {
  event.preventDefault(); // prevent page reload

  const query = document.getElementById('query').value;
  const url = `https://api.tvmaze.com/search/shows?q=${query}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log(data); // print result to console
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
});
