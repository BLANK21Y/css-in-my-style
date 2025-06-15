/**
 * CSS Property Explorer Application
 * Handles rendering of categories and alphabetical listings with navigation
 */

// DOM elements
const categoriesContainer = document.getElementById('categories-container');
const alphabeticalContainer = document.getElementById('alphabetical-list');
const searchInput = document.getElementById('search-input');
const pageTransition = document.querySelector('.page-transition');

// State
let allProperties = [];
let isTransitioning = false;

/**
 * Initialize the application
 */
function init() {
  console.log('Initializing CSS Property Explorer...');
  
  // Check if tagData is available
  if (typeof tagData === 'undefined' || !tagData.categories) {
    console.error('Tag data not loaded');
    return;
  }

  renderCategories();
  renderAlphabeticalList();
  setupSearch();
  setupAnimations();
  setupNavigation();
  
  console.log('Application initialized successfully');
}

/**
 * Render category cards
 */
function renderCategories() {
  if (!categoriesContainer || !tagData.categories) {
    console.error('Categories container not found or no category data');
    return;
  }

  categoriesContainer.innerHTML = '';

  tagData.categories.forEach((category, index) => {
    const categoryCard = createCategoryCard(category, index);
    categoriesContainer.appendChild(categoryCard);
  });

  console.log(`Rendered ${tagData.categories.length} categories`);
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
            <a href="${tag.name.toLowerCase()}.html" class="tag-link" data-tag="${tag.name}">
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
  if (!alphabeticalContainer || !tagData.categories) {
    console.error('Alphabetical container not found or no category data');
    return;
  }

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

  console.log(`Rendered ${allProperties.length} properties alphabetically`);
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
  link.setAttribute('data-tag', property.name);

  listItem.appendChild(link);
  return listItem;
}

/**
 * Setup search functionality
 */
function setupSearch() {
  if (!searchInput) {
    console.error('Search input not found');
    return;
  }

  searchInput.addEventListener('input', handleSearch);
  console.log('Search functionality initialized');
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

  console.log('Animations initialized');
}

/**
 * Setup navigation and page transitions
 */
function setupNavigation() {
  // Handle smooth scrolling for anchor links
  document.addEventListener('click', (event) => {
    const target = event.target.closest('a');
    if (!target) return;

    const href = target.getAttribute('href');
    
    // Handle internal anchor links
    if (href && href.startsWith('#')) {
      event.preventDefault();
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
      return;
    }

    // Handle tag links with page transitions
    if (target.classList.contains('tag-link') || target.classList.contains('tag-element')) {
      if (href && href.endsWith('.html') && !href.startsWith('http')) {
        event.preventDefault();
        navigateWithTransition(href);
      }
    }
  });

  console.log('Navigation initialized');
}

/**
 * Navigate with page transition
 */
function navigateWithTransition(url) {
  if (isTransitioning) return;
  
  isTransitioning = true;
  
  if (pageTransition) {
    pageTransition.classList.add('active');
    
    setTimeout(() => {
      window.location.href = url;
    }, 500);
  } else {
    window.location.href = url;
  }
}

/**
 * Scroll to top function
 */
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

/**
 * Handle page visibility change to reset transitions
 */
document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'visible') {
    isTransitioning = false;
    if (pageTransition) {
      pageTransition.classList.remove('active');
    }
  }
});

/**
 * Handle page load to reset transitions
 */
window.addEventListener('pageshow', () => {
  isTransitioning = false;
  if (pageTransition) {
    pageTransition.classList.remove('active');
  }
});

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
