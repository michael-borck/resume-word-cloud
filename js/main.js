// Navigation items with their descriptions and sizes
const navItems = [
    { text: 'home', tooltip: 'the main bit, where stuff happens', size: '29px', top: '6%', left: '10%', page: 'html/home.html' },
    { text: 'about', tooltip: 'information about this project', size: '45px', top: '10%', left: '40%', page: 'html/about.html' },
    { text: 'stuff', tooltip: 'wow, that title\'s pretty large', size: '60px', top: '20%', left: '18%', page: '#' },
    { text: 'archives', tooltip: 'It\'s all done in CSS, too', size: '35px', top: '25%', left: '65%', page: '#' },
    { text: 'music', tooltip: 'put another thing here', size: '50px', top: '60%', left: '15%', page: '#' },
    { text: 'headliners', tooltip: 'sub text. you can put it here', size: '39px', top: '55%', left: '55%', page: '#' },
    { text: 'contact us', tooltip: 'complain or make suggestions here', size: '28px', top: '70%', left: '70%', page: '#' }
];

// Function to create the word cloud
function createWordCloud() {
    const wordCloud = document.getElementById('word-cloud');
    
    navItems.forEach(item => {
        const link = document.createElement('a');
        link.className = 'nav-link';
        link.textContent = item.text;
        link.href = 'javascript:void(0)';
        link.dataset.page = item.page;
        
        // Set sizing and positioning for desktop
        link.style.fontSize = item.size;
        link.style.top = item.top;
        link.style.left = item.left;
        
        // Create tooltip
        const tooltip = document.createElement('span');
        tooltip.className = 'tooltip';
        tooltip.textContent = `» ${item.tooltip}`;
        
        link.appendChild(tooltip);
        wordCloud.appendChild(link);
        
        // Add click event to links
        link.addEventListener('click', function(e) {
            e.preventDefault();
            if (this.dataset.page !== '#') {
                loadContent(this.dataset.page, this.textContent);
            }
        });
    });
}

// Function to load content into the overlay
function loadContent(page, title) {
    const contentContainer = document.getElementById('content-container');
    const pageTitle = document.getElementById('page-title');
    const overlay = document.getElementById('content-overlay');
    
    pageTitle.textContent = title;
    
    // Show loading indicator
    contentContainer.innerHTML = '<div class="title-block">Loading...</div>';
    overlay.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    // Fetch the content from the page
    fetch(page)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.text();
        })
        .then(data => {
            // Extract the content from the page
            const parser = new DOMParser();
            const doc = parser.parseFromString(data, 'text/html');
            const content = doc.getElementById('content');
            
            if (content) {
                contentContainer.innerHTML = content.innerHTML;
                
                // Add scroll to top for any anchor links
                const links = contentContainer.querySelectorAll('a[href^="#"]');
                links.forEach(link => {
                    link.addEventListener('click', function(e) {
                        e.preventDefault();
                        const target = document.querySelector(this.getAttribute('href'));
                        if (target) {
                            contentContainer.scrollTop = target.offsetTop;
                        }
                    });
                });
            } else {
                contentContainer.innerHTML = '<div class="title-block">Error</div><p>Content structure not found. Each content file must contain a div with id="content".</p>';
            }
        })
        .catch(error => {
            contentContainer.innerHTML = `<div class="title-block">Error</div><p>Could not load content: ${error.message}</p>`;
        });
}

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    createWordCloud();
    
    // Close button event
    document.getElementById('close-btn').addEventListener('click', function() {
        document.getElementById('content-overlay').style.display = 'none';
        document.body.style.overflow = 'auto';
    });
    
    // Back to index button event
    document.getElementById('back-to-index').addEventListener('click', function(e) {
        e.preventDefault();
        document.getElementById('content-overlay').style.display = 'none';
        document.body.style.overflow = 'auto';
    });
    
    // Top button event
    document.getElementById('top-btn').addEventListener('click', function() {
        document.getElementById('content-container').scrollTop = 0;
    });
});

// Check for mobile and adjust layout if needed
function checkMobile() {
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    const wordCloud = document.getElementById('word-cloud');
    
    if (isMobile) {
        wordCloud.style.position = 'relative';
    } else {
        wordCloud.style.position = 'absolute';
    }
}

// Run on load and resize
window.addEventListener('load', checkMobile);
window.addEventListener('resize', checkMobile);