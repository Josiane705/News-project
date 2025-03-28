const apiKey = '14bb64725ac146fb946b68cdc4521fa2';  // 
let currentPage = 1;
let totalResults = 0;

async function searchNews() {
    const query = document.getElementById('searchQuery').value;
    if (!query) {
        alert("Please enter a search term.");
        return;
    }

    const url = `https://newsapi.org/v2/everything?q=${query}&apiKey=${apiKey}&page=${currentPage}&pageSize=6`;
    
    const response = await fetch(url);
    const data = await response.json();

    totalResults = data.totalResults;
    renderNews(data.articles);
}

function renderNews(articles) {
    const resultsDiv = document.getElementById('newsResults');
    resultsDiv.innerHTML = '';  // Clear previous results

    articles.forEach(article => {
        const articleDiv = document.createElement('div');
        articleDiv.classList.add('article');
        
        const imageUrl = article.urlToImage ? article.urlToImage : 'https://via.placeholder.com/150';
        
        articleDiv.innerHTML = `
            <img src="${imageUrl}" alt="News Image">
            <h3><a href="${article.url}" target="_blank">${article.title}</a></h3>
            <p>${article.description}</p>
        `;

        resultsDiv.appendChild(articleDiv);
    });

    updatePagination();
}

function updatePagination() {
    const prevButton = document.querySelector('#pagination button:nth-child(1)');
    const nextButton = document.querySelector('#pagination button:nth-child(2)');

    prevButton.disabled = currentPage === 1;
    nextButton.disabled = currentPage * 6 >= totalResults;
}

function changePage(direction) {
    if (direction === 'next' && currentPage * 6 < totalResults) {
        currentPage++;
    } else if (direction === 'prev' && currentPage > 1) {
        currentPage--;
    }

    searchNews();
}
