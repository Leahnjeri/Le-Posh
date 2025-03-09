document.addEventListener("DOMContentLoaded", function() {
    const pinterestGallery = document.getElementById("pinterest-gallery");

    // Pinterest Tattoo RSS Feed URL (Change to any tattoo category)
    const rssURL = "https://www.pinterest.com/kaburuleah035/tattoo-ideas.rss";

    fetch(`https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssURL)}`)
        .then(response => response.json())
        .then(data => {
            const posts = data.items.slice(0, 12); // Get only 12 latest images
            posts.forEach(post => {
                const img = document.createElement("img");
                img.src = post.enclosure.link; // Image URL
                img.alt = "Pinterest Tattoo Idea";
                img.classList.add("pinterest-image");
                pinterestGallery.appendChild(img);
            });
        })
        .catch(error => console.error("Error fetching Pinterest images:", error));
});


// Placeholder for future enhancements like filtering or animations.
console.log("Tattoo Ideas Page Loaded");
