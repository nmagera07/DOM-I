const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let logo2 = document.getElementById("cta-img");
logo2.setAttribute('src', siteContent["cta"]["img-src"])

let logo3 = document.getElementById("middle-img");
logo3.setAttribute('src', siteContent["main-content"]["middle-img-src"])

const nav = document.querySelectorAll('a')
// nav[0].textContent = "Services"
// nav[1].textContent = "Product"
// nav[2].textContent = "Vision"
// nav[3].textContent = "Features"
// nav[4].textContent = "About"
// nav[5].textContent = "Contact"

nav[0].textContent = siteContent['nav']['nav-item-1'];
nav[1].textContent = siteContent['nav']['nav-item-2']
nav[2].textContent = siteContent['nav']['nav-item-3']
nav[3].textContent = siteContent['nav']['nav-item-4']
nav[4].textContent = siteContent['nav']['nav-item-5']
nav[5].textContent = siteContent['nav']['nav-item-6']

nav[0].style.color = "green";
nav[1].style.color = "green";
nav[2].style.color = "green";
nav[3].style.color = "green";
nav[4].style.color = "green";
nav[5].style.color = "green";

const headerEl = document.querySelector('nav')
const newItem1 = document.createElement('a');
const newItem2 = document.createElement('a');
newItem1.textContent = "First Item"
newItem2.textContent = "Last Item"
headerEl.appendChild(newItem2)
headerEl.prepend(newItem1)

const ctaText = document.querySelector('h1');
// ctaText.textContent = "DOM Is Awesome"
ctaText.textContent = siteContent['cta']['h1']
ctaText.style.color = "forestGreen"
const ctaButton = document.querySelector('button');
// ctaButton.textContent = 'Get Started'
ctaButton.textContent = siteContent['cta']['button'];
ctaButton.style.backgroundColor = "gray"
ctaButton.style.color = "white"
ctaButton.style.borderRadius = "5px"
ctaButton.addEventListener('click', (event) => {event.target.style.backgroundColor = 'white'; })
ctaButton.addEventListener('click', (event) => {event.target.style.color = 'black'; })

const topContentTitle = document.querySelectorAll('.top-content h4')
// topContentTitle[0].textContent = "Features"
topContentTitle[0].textContent = siteContent['main-content']['features-h4']
// topContentTitle[1].textContent = "About"
topContentTitle[1].textContent = siteContent['main-content']['about-h4']
topContentTitle.forEach(x => x.style.color = 'forestGreen')

const topContentPara = document.querySelectorAll('.top-content p')
// topContentPara[0].textContent = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
// topContentPara[1].textContent = "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
topContentPara[0].textContent = siteContent['main-content']['features-content']
topContentPara[1].textContent = siteContent['main-content']['about-content']

const bottomContentTitle = document.querySelectorAll('.bottom-content h4')
// bottomContentTitle[0].textContent = "Services"
// bottomContentTitle[1].textContent = "Product"
// bottomContentTitle[2].textContent = "Vision"
bottomContentTitle[0].textContent = siteContent['main-content']['services-h4']
bottomContentTitle[1].textContent = siteContent['main-content']['product-h4']
bottomContentTitle[2].textContent = siteContent['main-content']['vision-h4']
bottomContentTitle.forEach(x => x.style.color = 'forestGreen')

const bottomContentPara = document.querySelectorAll('.bottom-content p')
// bottomContentPara[0].textContent = "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
// bottomContentPara[1].textContent = "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
// bottomContentPara[2].textContent = "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
bottomContentPara[0].textContent = siteContent['main-content']['services-content']
bottomContentPara[1].textContent = siteContent['main-content']['product-content']
bottomContentPara[2].textContent = siteContent['main-content']['vision-content']

const contactTitle = document.querySelector('.contact h4');
// contactTitle[0].textContent = "Contact";
contactTitle.textContent = siteContent['contact']['contact-h4']
contactTitle.style.color = 'forestGreen'

const contactPara = document.querySelectorAll('.contact p')
// contactPara[0].textContent = "123 Way 456 Street Somewhere, USA"
// contactPara[1].textContent = "1 (888) 888-8888"
// contactPara[2].textContent = "sales@greatidea.io"
contactPara[0].textContent = siteContent['contact']['address']
contactPara[1].textContent = siteContent['contact']['phone']
contactPara[2].textContent = siteContent['contact']['email']

const footer = document.querySelector('footer')
// footer.textContent = "Copyright Great Idea! 2018"
footer.textContent = siteContent['footer']['copyright']