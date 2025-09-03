document.querySelector('button').addEventListener('click', function(event) {
    event.preventDefault();
    const query = document.querySelector('input[type="text"]').value.trim();
    const resultsContainer = document.getElementById('resultsContainer');
    
    if (query === '') {
        resultsContainer.innerHTML = '<p>Please enter a search term.</p>';
        return;
    }
    
    // Placeholder for search results functionality
    resultsContainer.innerHTML = `<p>Search results for: <strong>${query}</strong></p>`;
});