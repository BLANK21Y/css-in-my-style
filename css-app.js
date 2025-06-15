// CSS Property Explorer Application
console.log('App script loading...');

// Global variables
let categoriesContainer;
let alphabeticalContainer;
let searchInput;
let allProperties = [];
let isTransitioning = false;

// Initialize everything when page loads
function initApp() {
  console.log('Initializing app...');
  
  // Get DOM elements
  categoriesContainer = document.getElementById('categories-container');
  alphabeticalContainer = document.getElementById('alphabetical-list');
  searchInput = document.getElementById('search-input');
  
  console.log('DOM elements:', {
    categories: !!categoriesContainer,
    alphabetical: !!alphabeticalContainer,
    search: !!searchInput
  });
  
  // Check if data is loaded
  if (typeof tagData === 'undefined') {
    console.error('tagData not found!');
    showError('Data not loaded');
    return;
  }
  
  console.log('Data available:', tagData);
  
  // Load content
  loadCategories();
  loadAlphabetical();
  setupSearch();
  setupNavigation();
  setupBackButtonHandling();
  
  console.log('App initialized successfully');
}

// Load categories
function loadCategories() {
  if (!categoriesContainer) {
    console.error('Categories container not found');
    return;
  }
  
  console.log('Loading categories...');
  
  // Clear loading message
  categoriesContainer.innerHTML = '';
  
  // Create category cards
  tagData.categories.forEach((category, index) => {
    const card = createCategoryCard(category);
    categoriesContainer.appendChild(card);
  });
  
  console.log('Categories loaded:', tagData.categories.length);
}

// Create category card
function createCategoryCard(category) {
  const card = document.createElement('div');
  card.className = 'category-card';
  
  // Create tags HTML
  const tagsHTML = category.tags.map(tag => 
    `<li class="tag-item">
       <a href="${tag.name.toLowerCase()}.html" class="tag-link">
         <span class="tag-name">${tag.name}</span>
       </a>
     </li>`
  ).join('');
  
  card.innerHTML = `
    <div class="category-header">
      <h3>${category.name}</h3>
      <p>${category.description}</p>
    </div>
    <div class="category-body">
      <ul class="tag-list">
        ${tagsHTML}
      </ul>
    </div>
  `;
  
  return card;
}

// Load alphabetical list
function loadAlphabetical() {
  if (!alphabeticalContainer) {
    console.error('Alphabetical container not found');
    return;
  }
  
  console.log('Loading alphabetical list...');
  
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
  
  // Clear and add items
  alphabeticalContainer.innerHTML = '';
  allProperties.forEach(property => {
    const item = createAlphabeticalItem(property);
    alphabeticalContainer.appendChild(item);
  });
  
  console.log('Alphabetical list loaded:', allProperties.length);
}

// Create alphabetical item
function createAlphabeticalItem(property) {
  const li = document.createElement('li');
  const link = document.createElement('a');
  
  link.href = `${property.name.toLowerCase()}.html`;
  link.className = 'tag-element';
  link.textContent = property.name;
  link.title = `${property.description} (${property.category})`;
  
  li.appendChild(link);
  return li;
}

// Setup search
function setupSearch() {
  if (!searchInput) return;
  
  searchInput.addEventListener('input', function(e) {
    const query = e.target.value.toLowerCase().trim();
    
    if (query === '') {
      loadCategories();
      loadAlphabetical();
    } else {
      filterContent(query);
    }
  });
}

// Filter content
function filterContent(query) {
  // Filter categories
  const filteredCategories = tagData.categories.map(category => {
    const filteredTags = category.tags.filter(tag => 
      tag.name.toLowerCase().includes(query) || 
      tag.description.toLowerCase().includes(query)
    );
    return filteredTags.length > 0 ? { ...category, tags: filteredTags } : null;
  }).filter(Boolean);
  
  // Update categories
  categoriesContainer.innerHTML = '';
  if (filteredCategories.length === 0) {
    categoriesContainer.innerHTML = '<div class="no-results">No categories found</div>';
  } else {
    filteredCategories.forEach(category => {
      const card = createCategoryCard(category);
      categoriesContainer.appendChild(card);
    });
  }
  
  // Filter alphabetical
  const filteredProperties = allProperties.filter(property =>
    property.name.toLowerCase().includes(query) ||
    property.description.toLowerCase().includes(query)
  );
  
  // Update alphabetical
  alphabeticalContainer.innerHTML = '';
  if (filteredProperties.length === 0) {
    alphabeticalContainer.innerHTML = '<div class="no-results">No properties found</div>';
  } else {
    filteredProperties.forEach(property => {
      const item = createAlphabeticalItem(property);
      alphabeticalContainer.appendChild(item);
    });
  }
}

// Setup navigation
function setupNavigation() {
  document.addEventListener('click', function(e) {
    const link = e.target.closest('a');
    if (!link) return;
    
    const href = link.getAttribute('href');
    
    // Handle anchor links
    if (href && href.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }
    
    // Handle back button clicks - NO TRANSITION
    if (link.classList.contains('back-button')) {
      console.log('Back button clicked - no transition');
      // Let the default navigation happen without transition
      return;
    }
    
    // Handle tag links with transition
    if (link.classList.contains('tag-link') || link.classList.contains('tag-element')) {
      if (href && href.endsWith('.html')) {
        e.preventDefault();
        navigateWithTransition(href);
      }
    }
  });
}

// Setup back button handling
function setupBackButtonHandling() {
  // Handle browser back/forward buttons
  window.addEventListener('popstate', function(event) {
    console.log('Popstate event detected');
    resetTransition();
    isTransitioning = false;
  });
  
  // Handle page show event (when returning to page)
  window.addEventListener('pageshow', function(event) {
    console.log('Page show event detected');
    resetTransition();
    isTransitioning = false;
  });
  
  // Handle visibility change
  document.addEventListener('visibilitychange', function() {
    if (document.visibilityState === 'visible') {
      console.log('Page became visible');
      resetTransition();
      isTransitioning = false;
    }
  });
  
  // Handle focus event (when user returns to tab)
  window.addEventListener('focus', function() {
    console.log('Window focused');
    resetTransition();
    isTransitioning = false;
  });
  
  // Handle beforeunload to reset state
  window.addEventListener('beforeunload', function() {
    resetTransition();
    isTransitioning = false;
  });
  
  // Reset transition on page load
  resetTransition();
  
  console.log('Back button handling setup complete');
}

// Navigate with transition
function navigateWithTransition(url) {
  if (isTransitioning) {
    console.log('Already transitioning, ignoring click');
    return;
  }
  
  console.log('Starting transition to:', url);
  isTransitioning = true;
  
  const transition = document.querySelector('.page-transition');
  if (transition) {
    // Add transitioning class to body
    document.body.classList.add('transitioning');
    transition.classList.add('active');
    
    // Navigate after transition
    setTimeout(() => {
      window.location.href = url;
    }, 500);
    
    // Fallback timeout to reset if navigation fails
    setTimeout(() => {
      if (isTransitioning) {
        console.log('Transition timeout, resetting');
        resetTransition();
        isTransitioning = false;
        document.body.classList.remove('transitioning');
      }
    }, 2000);
  } else {
    console.log('No transition element found, navigating directly');
    window.location.href = url;
    isTransitioning = false;
  }
}

// Reset transition
function resetTransition() {
  const transition = document.querySelector('.page-transition');
  if (transition) {
    transition.classList.remove('active');
    console.log('Transition reset');
  }
  document.body.classList.remove('transitioning');
}

// Show error
function showError(message) {
  if (categoriesContainer) {
    categoriesContainer.innerHTML = `<div class="error">Error: ${message}</div>`;
  }
}

// Scroll to top
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Handle animations
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

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  // DOM already loaded
  initApp();
}

// Also try after a short delay as fallback
setTimeout(() => {
  if (typeof tagData !== 'undefined' && categoriesContainer && categoriesContainer.children.length === 0) {
    console.log('Fallback initialization triggered');
    initApp();
  }
}, 100);

// Additional fallback for mobile devices
setTimeout(() => {
  if (typeof tagData !== 'undefined' && categoriesContainer && categoriesContainer.children.length === 0) {
    console.log('Second fallback initialization triggered');
    initApp();
  }
}, 500);

console.log('App script loaded');
