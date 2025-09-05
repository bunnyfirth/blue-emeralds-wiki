// Collapsible for versions (in versions.html)
const headers = document.querySelectorAll('.version-header');
headers.forEach(header => {
    header.addEventListener('click', () => {
        const content = header.nextElementSibling;
        content.style.display = content.style.display === 'block' ? 'none' : 'block';
    });
});

// Function to make collapsibles for How to Get items
function createHowToGetCollapsibles(data) {
    const container = document.getElementById('howtoget-container');
    if (!container) return; // Exit if page doesn't have this container

    for (const itemName in data) {
        const itemData = data[itemName];

        // Create collapsible HTML
        const div = document.createElement('div');
        div.innerHTML = `
            <h3 class="item-header">${itemName}</h3>
            <div class="item-collapsible">
                <p>Added in Texture Pack ${itemData.texturePack}</p>
                ${itemData.datapack ? `<p class="datapack-note">Recipe available via Datapack ${itemData.datapack}</p>` : ''}
            </div>
        `;
        container.appendChild(div);
    }

    // Add click event to new item headers
    const newHeaders = container.querySelectorAll('.item-header');
    newHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling;
            content.style.display = content.style.display === 'block' ? 'none' : 'block';
        });
    });
}

// Load recipes.json dynamically on How to Get page
fetch('recipes.json')
    .then(response => response.json())
    .then(data => createHowToGetCollapsibles(data))
    .catch(error => console.error('Error loading recipes.json:', error));
