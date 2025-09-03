document.querySelector('button').addEventListener('click', function() {
    const query = document.querySelector('input[type="text"]').value;
    const resultsContainer = document.getElementById('resultsContainer');
    // Placeholder for search functionality
    resultsContainer.innerHTML = `<p>Suchergebnisse für: <strong>${query}</strong></p>`;
});