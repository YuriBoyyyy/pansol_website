function performSearch() {
    const query = document.getElementById('searchInput').value.trim();

    if (query) {
        // Encode the search query to handle special characters
        const encodedQuery = encodeURIComponent(query);

        // Construct the URL for redirection
        const searchUrl = `https://www.example.com/search?q=${encodedQuery}`;

        // Redirect to the search URL
        window.location.href = searchUrl;
    } else {
        alert('Please enter a search term');
    }
}
