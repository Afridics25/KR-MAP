// Floor images mapping
const floorImages = {
  '5': '5.jpg',
  '4': '4.jpg',
  '3': '3.jpg',
  '2': '2.jpg',
  '1': '1.jpg',
  'G': 'G.jpg',
  '0': '0.png',
};

const floorNames = {
  '5': 'Level 5',
  '4': 'Level 4',
  '3': 'Level 3',
  '2': 'Level 2',
  '1': 'Level 1',
  'G': 'Ground Level',
  '0': 'World Spawn'
};

function loadFloor(floor) {
  // Update the floor title
  document.getElementById('floor-title').textContent = floorNames[floor];
  
  // Get the map container
  const mapContainer = document.getElementById('map');
  
  // Clear previous content
  mapContainer.innerHTML = '';
  
  // Create and display the image
  const img = document.createElement('img');
  img.src = floorImages[floor];
  img.style.maxWidth = '92%';
  img.style.maxHeight = '92%';
  img.style.padding = '0';
  img.style.borderRadius = '0px';
  img.style.objectFit = 'contain';
  img.alt = floorNames[floor];
  
  mapContainer.appendChild(img);
  
  // Update active button
  document.querySelectorAll('.floors-btn').forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');
}

// Load Ground Floor by default on page load
window.addEventListener('DOMContentLoaded', function() {
  loadFloor('G');
  // Set the default active button
  const groundFloorBtn = document.querySelector(`button[onclick="loadFloor('G')"]`);
  if (groundFloorBtn) {
    groundFloorBtn.classList.add('active');
  }
});

// Smooth scroll function
function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

// Navigation links smooth scroll
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      scrollToSection(targetId);
      
      // Update active state
      document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
      this.classList.add('active');
    });
  });
});

// Form submission handler
function handleSubmit(event) {
  event.preventDefault();
  alert('✉️ Message received! Thanks for contacting us!');
  event.target.reset();
}