// Collapsible for versions
const headers = document.querySelectorAll('.version-header');
headers.forEach(header => {
    header.addEventListener('click', () => {
        const content = header.nextElementSibling;
        content.style.display = content.style.display === 'block' ? 'none' : 'block';
    });
});

// Collapsible for How to Get items
const itemHeaders = document.querySelectorAll('.item-header');
itemHeaders.forEach(header => {
    header.addEventListener('click', () => {
        const content = header.nextElementSibling;
        content.style.display = content.style.display === 'block' ? 'none' : 'block';
    });
});

// Load recipes dynamically
fetch('recipes.json')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('howtoget-container');
    for (const item in data) {
        const div = document.createElement('div');
        div.innerHTML = `
            <h3 class="item-header">${item}</h3>
            <div class="item-collapsible">
                <p>Added in Texture Pack ${data[item].texturePack}</p>
                ${data[item].datapack ? `<p class="datapack-note">Recipe available via Datapack ${data[item].datapack}</p>` : ''}
            </div>
        `;
        container.appendChild(div);
    }

    // Re-apply click events for new headers
    const newHeaders = document.querySelectorAll('.item-header');
    newHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling;
            content.style.display = content.style.display === 'block' ? 'none' : 'block';
        });
    });
  });
