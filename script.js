const nav=document.getElementById("nav"),menu=document.getElementById("menu"),mobile=document.getElementById("mobile");
window.addEventListener("scroll",()=>nav.classList.toggle("scrolled",scrollY>20),{passive:true});
menu.addEventListener("click",()=>mobile.classList.toggle("open"));
document.querySelectorAll("#mobile a").forEach(a=>a.addEventListener("click",()=>mobile.classList.remove("open")));
document.getElementById("form").addEventListener("submit",e=>{
  e.preventDefault();
  const form=e.target;
  const data=new FormData(form);
  const name=(data.get("name")||"").trim();
  const email=(data.get("email")||"").trim();
  const phone=(data.get("phone")||"").trim();
  const eventType=(data.get("eventType")||"").trim();
  const eventDate=(data.get("eventDate")||"").trim();
  const location=(data.get("location")||"").trim();
  const artist=(data.get("artist")||"").trim();
  const message=(data.get("message")||"").trim();

  const whatsappMessage=`Hello Iyanara Events! I would like to make a booking request.\n\nName: ${name}\nEmail: ${email}\nPhone / WhatsApp: ${phone || "Not provided"}\nEvent type: ${eventType || "Not provided"}\nEvent date: ${eventDate || "Not provided"}\nLocation: ${location || "Not provided"}\nArtist / DJ: ${artist || "Not provided"}\nMessage: ${message || "No additional message"}`;

  const whatsappUrl=`https://wa.me/34631636738?text=${encodeURIComponent(whatsappMessage)}`;
  document.getElementById("msg").textContent="Opening WhatsApp with your booking request...";
  window.open(whatsappUrl,"_blank","noopener");
});
const sections=document.querySelectorAll("main section[id]"),links=document.querySelectorAll("nav a");
new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)links.forEach(a=>a.classList.toggle("active",a.getAttribute("href")==="#"+e.target.id))}),{rootMargin:"-40% 0px -50%"}).observe;
sections.forEach(s=>new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)links.forEach(a=>a.classList.toggle("active",a.getAttribute("href")==="#"+e.target.id))}),{rootMargin:"-40% 0px -50%"}).observe(s));

/* HERO BACKGROUND SLIDESHOW */
const hero=document.querySelector('.hero');
const heroLayers=[document.querySelector('.hero-bg-a'),document.querySelector('.hero-bg-b')];
const heroImages=['images/hero-1.jpg','images/hero-2.jpg','images/hero-3.jpg','images/hero-4.jpg'];
let currentHero=0;
let activeLayer=0;
heroImages.forEach(src=>{const img=new Image();img.src=src;});
function changeHeroImage(){
  currentHero=(currentHero+1)%heroImages.length;
  const nextLayer=activeLayer===0?1:0;
  heroLayers[nextLayer].style.backgroundImage=`url("${heroImages[currentHero]}")`;
  heroLayers[nextLayer].classList.add('is-active');
  heroLayers[activeLayer].classList.remove('is-active');
  activeLayer=nextLayer;
}
setInterval(changeHeroImage,6000);
