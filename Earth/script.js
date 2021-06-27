// Earth

function initialize() {
  var options = { atmosphere: true };
  var earth = new WE.map("earth_div", options);
  WE.tileLayer(
    "https://api.maptiler.com/maps/hybrid/{z}/{x}/{y}.jpg?key=VlqdTHrtvESc8LVum0pU"
  ).addTo(earth);
  // earth.zoom = 0;

  var delhi = WE.marker([28.65195, 77.23149]).addTo(earth);
  delhi.bindPopup(
    "<div class = 'marker-div'><h4 class='marker-location'>Delhi</h4><button id='delhi' class='marker-button'>View More</button></div>",
    {
      maxWidth: 80,
      closeButton: true,
    }
  );
  document.querySelector("#delhi").addEventListener("click", function () {
    window.open("../cities/delhi/delhi.html", "_blank");
  });

  var egypt = WE.marker([30.033333, 31.233334]).addTo(earth);
  egypt.bindPopup(
    "<div class = 'marker-div'><h4 class='marker-location'>egypt</h4><button id='egypt' class='marker-button'>View More</button></div>",
    {
      maxWidth: 80,
      closeButton: true,
    }
  );
  document.querySelector("#egypt").addEventListener("click", function () {
    window.open("../cities/Egypt/Egypt.html", "_blank");
  });

  var hongkong = WE.marker([22.396428, 114.109497]).addTo(earth);
  hongkong.bindPopup(
    "<div class = 'marker-div'><h4 class='marker-location'>hongkong</h4><button id='hongkong' class='marker-button'>View More</button></div>",
    {
      maxWidth: 80,
      closeButton: true,
    }
  );
  document.querySelector("#hongkong").addEventListener("click", function () {
    window.open("../cities/Hongkong/HongKong.html", "_blank");
  });

  var ladakh = WE.marker([34.0, 78.0]).addTo(earth);
  ladakh.bindPopup(
    "<div class = 'marker-div'><h4 class='marker-location'>ladakh</h4><button id='ladakh' class='marker-button'>View More</button></div>",
    {
      maxWidth: 80,
      closeButton: true,
    }
  );
  document.querySelector("#ladakh").addEventListener("click", function () {
    window.open("../cities/ladakh/ladakh.html", "_blank");
  });

  var london = WE.marker([51.50853, -0.12574]).addTo(earth);
  london.bindPopup(
    "<div class = 'marker-div'><h4 class='marker-location'>london</h4><button id='london' class='marker-button'>View More</button></div>",
    {
      maxWidth: 80,
      closeButton: true,
    }
  );
  document.querySelector("#london").addEventListener("click", function () {
    window.open("../cities/london/london.html", "_blank");
  });

  var newYork = WE.marker([40.71427, -74.00597]).addTo(earth);
  newYork.bindPopup(
    "<div class = 'marker-div'><h4 class='marker-location'>New York</h4><button id='newYork' class='marker-button'>View More</button></div>",
    {
      maxWidth: 80,
      closeButton: true,
    }
  );
  document.querySelector("#newYork").addEventListener("click", function () {
    window.open("../cities/newYork/newyork.html", "_blank");
  });

  var Paris = WE.marker([48.85341, 2.3488]).addTo(earth);
  Paris.bindPopup(
    "<div class = 'marker-div'><h4 class='marker-location'>Paris</h4><button id='Paris' class='marker-button'>View More</button></div>",
    {
      maxWidth: 80,
      closeButton: true,
    }
  );
  document.querySelector("#Paris").addEventListener("click", function () {
    window.open("../cities/Paris/paris.html", "_blank");
  });

  var rio = WE.marker([-22.90642, -43.18223]).addTo(earth);
  rio.bindPopup(
    "<div class = 'marker-div'><h4 class='marker-location'>rio</h4><button id='rio' class='marker-button'>View More</button></div>",
    {
      maxWidth: 80,
      closeButton: true,
    }
  );
  document.querySelector("#rio").addEventListener("click", function () {
    window.open("../cities/rio/rio.html", "_blank");
  });

  var sydney = WE.marker([-33.8674869, 151.20699020000006]).addTo(earth);
  sydney.bindPopup(
    "<div class = 'marker-div'><h4 class='marker-location'>sydney</h4><button id='sydney' class='marker-button'>View More</button></div>",
    {
      maxWidth: 80,
      closeButton: true,
    }
  );
  document.querySelector("#sydney").addEventListener("click", function () {
    window.open("../cities/sydney/sydney.html", "_blank");
  });

  var tokyo = WE.marker([35.7090259, 139.73199249999993]).addTo(earth);
  tokyo.bindPopup(
    "<div class = 'marker-div'><h4 class='marker-location'>tokyo</h4><button id='tokyo' class='marker-button'>View More</button></div>",
    {
      maxWidth: 80,
      closeButton: true,
    }
  );
  document.querySelector("#tokyo").addEventListener("click", function () {
    window.open("../cities/tokyo/tokyo.html", "_blank");
  });

  earth.setView([20.593684, 78.96288], 2.7);
}

// Particals animation
particlesJS("bg", {
  particles: {
    number: { value: 90, density: { enable: true, value_area: 800 } },
    color: { value: "#ffffff" },
    shape: {
      type: "circle",
      stroke: { width: 0, color: "#000000" },
      polygon: { nb_sides: 5 },
      image: { src: "img/github.svg", width: 100, height: 100 },
    },
    opacity: {
      value: 0.7181583578638342,
      random: false,
      anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: true,
        speed: 7.192807192807193,
        size_min: 0,
        sync: false,
      },
    },
    line_linked: {
      enable: false,
      distance: 0,
      color: "#ffffff",
      opacity: 0,
      width: 0,
    },
    move: {
      enable: true,
      speed: 1,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: { enable: false, rotateX: 600, rotateY: 1200 },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: false, mode: "repulse" },
      onclick: { enable: false, mode: "push" },
      resize: true,
    },
    modes: {
      grab: { distance: 400, line_linked: { opacity: 1 } },
      bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
      repulse: { distance: 200, duration: 0.4 },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 },
    },
  },
  retina_detect: true,
});
var count_particles, stats, update;
stats = new Stats();
stats.setMode(0);
stats.domElement.style.position = "absolute";
stats.domElement.style.left = "0px";
stats.domElement.style.top = "0px";
document.body.appendChild(stats.domElement);
count_particles = document.querySelector(".js-count-particles");
update = function () {
  stats.begin();
  stats.end();
  if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
    count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
  }
  requestAnimationFrame(update);
};
requestAnimationFrame(update);

// initialize()

document.addEventListener("touchstart", function (e) {
  if (e.touches.length > 1) {
    // ... do what you like here'
    console.log("scrolled");
  }
});
