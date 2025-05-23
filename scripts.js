const productData = [
  {
    id: 'product1',
    name: 'Custom Birthday Cake',
    description: 'Handcrafted cakes perfect for your special celebration.',
    price: 'From $49.99',
    rating: 4.8,
    reviews: 69,
  },
  {
    id: 'product2',
    name: 'Cupcake Assortment',
    description: 'Variety of delicious flavors for any occasion.',
    price: 'From $24.99',
    rating: 4.9,
    reviews: 42,
  },
  {
    id: 'product3',
    name: 'Wedding Cake Special',
    description: 'Elegant and customized cake for your perfect day.',
    price: 'From $199.99',
    rating: 4.7,
    reviews: 31,
  },
];



function updateProductData(data) {
  data.forEach(product => {
    // Update text content
    document.getElementById(`${product.id}-name`).textContent = product.name;
    document.getElementById(`${product.id}-description`).textContent = product.description;
    document.getElementById(`${product.id}-price`).textContent = product.price;

    // Update stars
    const starsContainer = document.querySelector(`#${product.id}-name`).closest('.product-content').querySelector('.stars');
    const fullStars = Math.floor(product.rating);
    const halfStar = product.rating % 1 >= 0.5;
    starsContainer.innerHTML = '';

    for (let i = 0; i < fullStars; i++) {
      starsContainer.innerHTML += '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>';
    }

    if (halfStar) {
      starsContainer.innerHTML += '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"><defs><linearGradient id="half"><stop offset="50%" stop-color="currentColor"/><stop offset="50%" stop-color="lightgray"/></linearGradient></defs><polygon fill="url(#half)" points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>';
    }

    for (let i = fullStars + (halfStar ? 1 : 0); i < 5; i++) {
      starsContainer.innerHTML += '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="lightgray"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>';
    }

    // Update review count
    const ratingTextSpan = starsContainer.parentElement.querySelector('span');
    if (ratingTextSpan) {
      ratingTextSpan.textContent = `${product.rating.toFixed(1)} (${product.reviews})`;
    }
  });
}

      // Set current year in footer
      document.getElementById('current-year').textContent = new Date().getFullYear();
      
      // Navbar scroll effect
      const navbar = document.getElementById('navbar');
      window.addEventListener('scroll', function() {
        if (window.scrollY > 10) {
          navbar.classList.add('scrolled');
        } else {
          navbar.classList.remove('scrolled');
        }
      });
      
      // Scroll to top button
      const scrollToTopButton = document.getElementById('scroll-to-top');
      window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
          scrollToTopButton.classList.add('visible');
        } else {
          scrollToTopButton.classList.remove('visible');
        }
      });
      
      scrollToTopButton.addEventListener('click', function() {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      });
      
      // Mobile menu toggle
      const mobileMenuButton = document.querySelector('.mobile-menu-button');
      const mobileMenu = document.querySelector('.mobile-menu');
      const mobileMenuClose = document.querySelector('.mobile-menu-close');
      const mobileMenuItems = document.querySelectorAll('.mobile-nav-item');
      
      mobileMenuButton.addEventListener('click', function() {
        mobileMenu.classList.add('open');
        document.body.style.overflow = 'hidden';
      });
      
      mobileMenuClose.addEventListener('click', function() {
        mobileMenu.classList.remove('open');
        document.body.style.overflow = '';
      });
      
      mobileMenuItems.forEach(item => {
        item.addEventListener('click', function() {
          mobileMenu.classList.remove('open');
          document.body.style.overflow = '';
        });
      });
      
      // Scroll animation
      const observerOptions = {
        threshold: 0.1
      };
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      }, observerOptions);
      
      const animatedElements = document.querySelectorAll('.animate-on-scroll');
      animatedElements.forEach(el => {
        observer.observe(el);
      });
      
      // Parallax effect for hero section
      const heroSection = document.getElementById('home');
      const parallaxElements = document.querySelectorAll('.decorative-blob, .decorative-circle');
      
      document.addEventListener('mousemove', (event) => {
        const { clientX, clientY } = event;
        const { innerWidth, innerHeight } = window;
        
        const moveX = (clientX - innerWidth / 2) / innerWidth;
        const moveY = (clientY - innerHeight / 2) / innerHeight;
        
        parallaxElements.forEach((el) => {
          const speedX = el.classList.contains('blob1') ? 20 : 
                         el.classList.contains('blob2') ? -20 : 
                         el.classList.contains('circle1') ? 40 : -30;
                         
          const speedY = el.classList.contains('blob1') ? 10 : 
                         el.classList.contains('blob2') ? -15 : 
                         el.classList.contains('circle1') ? 20 : 40;
          
          const moveTranslateX = moveX * speedX;
          const moveTranslateY = moveY * speedY;
          
          el.style.transform = `translate(${moveTranslateX}px, ${moveTranslateY}px)`;
        });
      });

      // Store type configuration
      const storeTypes = {
        bakery: {
          title: "Delicious Treats",
          subtitle: "made fresh daily",
          description: "Handcrafted with love using only the finest ingredients. Our bakery items are made fresh every day.",
          primaryCta: "Order Now",
          secondaryCta: "Our Menu",
          heroImage: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?q=80&w=600",
          feature1: "Freshly Baked",
          feature2: "Natural Ingredients",
          feature3: "Traditional Recipes",
          feature4: "Custom Orders"
        },
        shoes: {
          title: "Step Into Style",
          subtitle: "with comfort and design",
          description: "Premium footwear designed for comfort and durability. Find the perfect pair for any occasion.",
          primaryCta: "Shop Collection",
          secondaryCta: "Size Guide",
          heroImage: "https://images.unsplash.com/photo-1515729947596-a598e5de0ab3?q=80&w=600",
          feature1: "Premium Materials",
          feature2: "Ergonomic Design",
          feature3: "Handcrafted Quality",
          feature4: "Long-lasting Comfort"
        },
        clothing: {
          title: "Elevate Your Style",
          subtitle: "with premium fashion",
          description: "Discover clothing that combines style, comfort and quality. Express yourself with our curated collections.",
          primaryCta: "Browse Collections",
          secondaryCta: "Lookbook",
          heroImage: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?q=80&w=600",
          feature1: "Sustainable Fabrics",
          feature2: "Timeless Designs",
          feature3: "Ethically Made",
          feature4: "Perfect Fit"
        }
      };

      // Function to change store type
      function switchStoreType(type) {
        if (!storeTypes[type]) return;
        
        const config = storeTypes[type];
        
        // Update store name everywhere
        const storeName = type.charAt(0).toUpperCase() + type.slice(1) + " Store";
        document.getElementById('brand-name').textContent = storeName;
        document.getElementById('footer-brand-name').textContent = storeName;
        document.getElementById('copyright-brand-name').textContent = storeName;
        document.getElementById('business-name').textContent = storeName;
        
        // Update hero section
        document.getElementById('hero-prefix').textContent = config.title;
        document.getElementById('hero-suffix').textContent = config.subtitle;
        document.getElementById('hero-description').textContent = config.description;
        document.getElementById('primary-cta').textContent = config.primaryCta;
        document.getElementById('secondary-cta').textContent = config.secondaryCta;
        document.getElementById('hero-product-image').querySelector('img').src = config.heroImage;
        
        // Update features
        document.getElementById('feature1-title').textContent = config.feature1;
        document.getElementById('feature2-title').textContent = config.feature2;
        document.getElementById('feature3-title').textContent = config.feature3;
        document.getElementById('feature4-title').textContent = config.feature4;
        
        // Update document title
        document.title = storeName + " | Premium " + type.charAt(0).toUpperCase() + type.slice(1) + " Products";
      }
      
      // Uncomment and use one of these to switch store type:
      // switchStoreType('bakery');
      // switchStoreType('shoes');
      // switchStoreType('clothing');
    