/**
 * CSS Property Explorer Application
 * Handles rendering of categories and alphabetical listings with navigation
 */

// DOM elements
const categoriesContainer = document.getElementById('categories-container');
const alphabeticalContainer = document.getElementById('alphabetical-container');
const searchInput = document.getElementById('search-input');

// State
let allProperties = [];

/**
 * Initialize the application
 */
function init() {
  renderCategories();
  renderAlphabeticalList();
  setupSearch();
  setupAnimations();
}

/**
 * Render category cards
 */
function renderCategories() {
  if (!categoriesContainer || !tagData.categories) return;

  categoriesContainer.innerHTML = '';

  tagData.categories.forEach((category, index) => {
    const categoryCard = createCategoryCard(category, index);
    categoriesContainer.appendChild(categoryCard);
  });
}

/**
 * Create a category card element with navigation links
 */
function createCategoryCard(category, index) {
  const card = document.createElement('div');
  card.className = `category-card fade-in delay-${Math.min(index * 100, 400)}`;

  card.innerHTML = `
    <div class="category-header">
      <h3>${category.name}</h3>
      <p>${category.description}</p>
    </div>
    <div class="category-body">
      <ul class="tag-list">
        ${category.tags.map(tag => `
          <li class="tag-item">
            <a href="${tag.name.toLowerCase()}.html" class="tag-link">
              <span class="tag-name">${tag.name}</span>
            </a>
          </li>
        `).join('')}
      </ul>
    </div>
  `;

  return card;
}

/**
 * Render alphabetical list
 */
function renderAlphabeticalList() {
  if (!alphabeticalContainer || !tagData.categories) return;

  // Collect all properties
  allProperties = [];
  tagData.categories.forEach(category => {
    category.tags.forEach(tag => {
      allProperties.push({
        name: tag.name,
        description: tag.description,
        category: category.name
      });
    });
  });

  // Sort alphabetically
  allProperties.sort((a, b) => a.name.localeCompare(b.name));

  // Render
  alphabeticalContainer.innerHTML = '';
  allProperties.forEach(property => {
    const listItem = createAlphabeticalItem(property);
    alphabeticalContainer.appendChild(listItem);
  });
}

/**
 * Create alphabetical list item with navigation link
 */
function createAlphabeticalItem(property) {
  const listItem = document.createElement('li');
  const link = document.createElement('a');
  
  link.href = `${property.name.toLowerCase()}.html`;
  link.className = 'tag-element';
  link.textContent = property.name;
  link.title = `${property.description} (${property.category})`;

  listItem.appendChild(link);
  return listItem;
}

/**
 * Setup search functionality
 */
function setupSearch() {
  if (!searchInput) return;

  searchInput.addEventListener('input', handleSearch);
}

/**
 * Handle search input
 */
function handleSearch(event) {
  const query = event.target.value.toLowerCase().trim();

  if (query === '') {
    renderCategories();
    renderAlphabeticalList();
    return;
  }

  // Filter categories
  filterCategories(query);
  filterAlphabeticalList(query);
}

/**
 * Filter categories based on search query
 */
function filterCategories(query) {
  if (!categoriesContainer) return;

  const filteredCategories = tagData.categories.map(category => {
    const filteredTags = category.tags.filter(tag => 
      tag.name.toLowerCase().includes(query) || 
      tag.description.toLowerCase().includes(query)
    );

    return filteredTags.length > 0 ? { ...category, tags: filteredTags } : null;
  }).filter(Boolean);

  categoriesContainer.innerHTML = '';

  if (filteredCategories.length === 0) {
    categoriesContainer.innerHTML = '<div class="no-results">No properties found matching your search.</div>';
    return;
  }

  filteredCategories.forEach((category, index) => {
    const categoryCard = createCategoryCard(category, index);
    categoriesContainer.appendChild(categoryCard);
  });
}

/**
 * Filter alphabetical list based on search query
 */
function filterAlphabeticalList(query) {
  if (!alphabeticalContainer) return;

  const filteredProperties = allProperties.filter(property =>
    property.name.toLowerCase().includes(query) ||
    property.description.toLowerCase().includes(query) ||
    property.category.toLowerCase().includes(query)
  );

  alphabeticalContainer.innerHTML = '';

  if (filteredProperties.length === 0) {
    alphabeticalContainer.innerHTML = '<div class="no-results">No properties found matching your search.</div>';
    return;
  }

  filteredProperties.forEach(property => {
    const listItem = createAlphabeticalItem(property);
    alphabeticalContainer.appendChild(listItem);
  });
}

/**
 * Setup animations
 */
function setupAnimations() {
  // Add intersection observer for fade-in animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animationPlayState = 'running';
      }
    });
  }, observerOptions);

  // Observe all fade-in elements
  document.querySelectorAll('.fade-in').forEach(el => {
    el.style.animationPlayState = 'paused';
    observer.observe(el);
  });
}

/**
 * Handle smooth scrolling for anchor links
 */
document.addEventListener('click', (event) => {
  if (event.target.matches('a[href^="#"]')) {
    event.preventDefault();
    const targetId = event.target.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }
});

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', init);

// Add this at the end of your app.js file

// Create page transition element
function createPageTransition() {
  // Check if it already exists
  if (!document.querySelector('.page-transition')) {
    const pageTransition = document.createElement('div');
    pageTransition.className = 'page-transition';
    document.body.appendChild(pageTransition);
  }
}

// Set up tag link click handlers
function setupTagClickHandlers() {
  // Create the transition element
  createPageTransition();
  
  // Get all tag links
  const tagLinks = document.querySelectorAll('.tag-link, .tag-element');
  
  tagLinks.forEach(link => {
    // Remove any existing listeners first to prevent duplicates
    link.removeEventListener('click', handleTagClick);
    // Add new click listener
    link.addEventListener('click', handleTagClick);
  });
}

// Handle tag click event
function handleTagClick(e) {
  const href = this.getAttribute('href');
  
  // Only handle links to HTML files (not external links)
  if (href && !href.startsWith('http') && href.endsWith('.html')) {
    e.preventDefault();
    
    // Get the transition element
    const pageTransition = document.querySelector('.page-transition');
    
    // Activate the transition
    if (pageTransition) {
      pageTransition.classList.add('active');
      
      // Navigate after transition completes
      setTimeout(() => {
        window.location.href = href;
      }, 500); // Match this to your CSS transition time
    } else {
      // Fallback if transition element doesn't exist
      window.location.href = href;
    }
  }
}

// Modify your initApp function to include setupTagClickHandlers
function initApp() {
  createCategories();
  createAlphabeticalList();
  setupSearch();
  setupSmoothScrolling();
  setupIntersectionObserver();
  setupTagClickHandlers(); // Add this line
}

// If the page is already loaded, set up the handlers immediately
if (document.readyState === 'complete' || document.readyState === 'interactive') {
  setTimeout(setupTagClickHandlers, 1);
} else {
  // Otherwise wait for DOMContentLoaded
  document.addEventListener('DOMContentLoaded', setupTagClickHandlers);
}