function toggleMenu()
{
	const navLinks = document.querySelector('.nav-links');
	navLinks.classList.toggle('active');
}

window.onscroll = function() {scroll()};

function scroll()
{
    let topBtn = document.getElementById("topBtn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20)
	{
    	topBtn.style.transform = "translateX(-200px)";
    }
	else
	{
    	topBtn.style.transform = "translateX(0px)";
    }
    const footer = document.querySelector('footer');
    const footerRect = footer.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    if (footerRect.top < windowHeight)
	{
    	let distanceToBottom = windowHeight - footerRect.top;
    	topBtn.style.bottom = `${distanceToBottom}px`;
    }
	else
	{
    	topBtn.style.bottom = '0px';
    }
}


function ScrollTopFunction()
{
	document.body.scrollTop = 0; // pour Safari
	document.documentElement.scrollTop = 0; // pour Chrome, Firefox, Opera, etc.
}

window.addEventListener('scroll', function()
{
	let scrollPosition = document.documentElement.scrollTop;
	parallax.style.transform = 'translateY(' + scrollPosition * 0.5 + 'px)';
});


const page_index_list = [
	{ title: "Actualité", url: "/LVE_web/actualite.html", content:"Actualités du site et du serveur, retrouvez toutes les informations nécéssaire sur les actualités d'LVE"},
	{ title: "Menu principal", url: "/LVE_web/", content: "Page principale du site"},
	{ title: "Encyclopédie", url: "/LVE_web/encyclopedie.html", content: "Apprenez en plus sur l'univers d'LVE"}
]

function searchPages() {
	const query = document.getElementById('search-input').value.toLowerCase();
	const resultsContainer = document.getElementById('results');
	resultsContainer.innerHTML = '';

	if (query) {
		const filteredPages = page_index_list.filter(page_index_list => 
			page_index_list.title.toLowerCase().includes(query) || page_index_list.content.toLowerCase().includes(query)
		);

		if (filteredPages.length > 0) {
			resultsContainer.style.display = 'block';
			filteredPages.forEach(page_index_list => {
				const resultItem = document.createElement('div');
				resultItem.classList.add('result-item');
				resultItem.innerHTML = `<a href="${page_index_list.url}">${page_index_list.title}</a>`;
				resultsContainer.appendChild(resultItem);
			});
		} else {
			resultsContainer.style.display = 'block';
			resultsContainer.innerHTML = '<p>No results found</p>';
		}
	} else {
		resultsContainer.style.display = 'none';
	}
}