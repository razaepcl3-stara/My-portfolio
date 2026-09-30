const projects = [
  {category:'motion', label:'2D Motion Graphics', thumbnail:'assets/thumbnails/motion-graphics-01.webp', title:'motion graphics add', id:'1GrU3MhaOrVEV_eOzO5DcvJzl0LO5lWdA', url:'https://drive.google.com/file/d/1GrU3MhaOrVEV_eOzO5DcvJzl0LO5lWdA/view?usp=drive_link'},
  {category:'motion', label:'2D Motion Graphics', title:'character explainer motion graphics', id:'16LMXsBp6tqGAwpS6CRdW3YRt4zZe-fSD', url:'https://drive.google.com/file/d/16LMXsBp6tqGAwpS6CRdW3YRt4zZe-fSD/view?usp=drive_link'},
  {category:'motion', label:'2D Motion Graphics', thumbnail:'assets/thumbnails/brighton-ai.png', title:'app promo motion graphics', id:'1jrNSGroGe7cGLNThl0FHb6XOzd4MgS44', url:'https://drive.google.com/file/d/1jrNSGroGe7cGLNThl0FHb6XOzd4MgS44/view?usp=drive_link'},
  {category:'motion', label:'2D Motion Graphics', title:'2D motion graphics', id:'1D3HoZC1ZZ0bJWWmkPXfpM1QXpp4jS2Ms', url:'https://drive.google.com/file/d/1D3HoZC1ZZ0bJWWmkPXfpM1QXpp4jS2Ms/view?usp=drive_link'},
  {category:'video', label:'Video Editing', title:'Book Trailer', id:'19nCHxgxyh4vZOCmB4bw3EtQm9JLiMR6b', url:'https://drive.google.com/file/d/19nCHxgxyh4vZOCmB4bw3EtQm9JLiMR6b/view?usp=drive_link'},
  {category:'video', label:'Video Editing', thumbnail:'assets/thumbnails/ai-video.webp', title:'AI Video', id:'1dIGBCBZGFG04Zd4O8uE-la21BYiz1zpa', url:'https://drive.google.com/file/d/1dIGBCBZGFG04Zd4O8uE-la21BYiz1zpa/view?usp=drive_link'},
  {category:'video', label:'Video Editing', title:'explainer reel', id:'14yBiW9_kAnTf_vZD4Pe3ofIjG889tunT', url:'https://drive.google.com/file/d/14yBiW9_kAnTf_vZD4Pe3ofIjG889tunT/view?usp=drive_link'},
  {category:'video', label:'Video Editing', title:'promo video editing', id:'13dNkR-KEvGSIrisfkA7JOQvLNq1LoOeu', url:'https://drive.google.com/file/d/13dNkR-KEvGSIrisfkA7JOQvLNq1LoOeu/view?usp=drive_link'},
  {category:'video', label:'Video Editing', title:'talking head video editing', id:'1kMM-8Rnrf8ruVum_nGuE6TWY9qdjBYzs', url:'https://drive.google.com/file/d/1kMM-8Rnrf8ruVum_nGuE6TWY9qdjBYzs/view?usp=sharing'},
  {category:'character', label:'2D Character Animation', title:'2D Chracter intro', id:'1KA7twT9LmKYe8QmY5AYI_jcpPeKEpJis', url:'https://drive.google.com/file/d/1KA7twT9LmKYe8QmY5AYI_jcpPeKEpJis/view?usp=drive_link'},
  {category:'character', label:'2D Character Animation', title:'2D star wars', id:'1qy7-scZALe8trmeWaLc_82nlHs2avGhJ', url:'https://drive.google.com/open?id=1qy7-scZALe8trmeWaLc_82nlHs2avGhJ&usp=drive_copy'},
  {category:'character', label:'2D Character Animation', title:'logo animation', id:'1BTQe3qYLRsmC7qkxVa-jMZjfb5l7zYk0', url:'https://drive.google.com/file/d/1BTQe3qYLRsmC7qkxVa-jMZjfb5l7zYk0/view?usp=sharing'},
  {category:'character', label:'2D Character Animation', title:'showreel character animation', id:'1yHW9Ht3TkGT6DjGL6mNiV0OX5t2NTEb-', url:'https://drive.google.com/file/d/1yHW9Ht3TkGT6DjGL6mNiV0OX5t2NTEb-/view?usp=sharing'},
  {category:'graphic', label:'Graphic Design', thumbnail:'assets/thumbnails/brand-guidelines.webp', title:'Brand guidelines Design', folder:true, url:'https://drive.google.com/drive/folders/18BwUONJkFibl1Uk872ZUhsVb2s4Ynouy?usp=drive_link'},
  {"category":"uiux","label":"UI / UX Design","title":"Rise Body Art UI/UX","url":"https://www.figma.com/proto/E4F8tJSWiNbVCIP000oVsl/Rise-Body-Art-UI-DESIGN?page-id=0%3A1&node-id=1-3&scaling=scale-down-width&content-scaling=fixed","external":true,"thumbnail":"assets/thumbnails/rise-body-art-preview.webp"},
  {"category":"uiux","label":"UI / UX Design","title":"CX Collective UI/UX","url":"https://www.figma.com/proto/FU8JCklaowD1z65surxAsF/CX-Collective?page-id=29%3A1382&node-id=29-1383&t=0zyiW6jcBjDGf4QW-0&scaling=min-zoom&content-scaling=fixed","external":true,"thumbnail":"assets/thumbnails/cx-collective-preview.webp"},
  {"category":"uiux","label":"UI / UX Design","title":"Vital Cleaning Services UI/UX","url":"https://www.figma.com/proto/2yeYXbmkZSwAW4FEv54vXT/Vital-Cleaning-Services?page-id=17%3A463&node-id=17-464","external":true,"thumbnail":"assets/thumbnails/vital-cleaning-preview.webp"},
  {"category":"uiux","label":"UI / UX Design","title":"Good Cups UI/UX","url":"https://www.figma.com/proto/DhmDkJUr9D8gt6v5VjAAGu/Good-Cups?page-id=39%3A1651&node-id=39-1912&t=tQbWNwlwGkWWuwKt-0&scaling=min-zoom&content-scaling=fixed","external":true,"thumbnail":"assets/thumbnails/good-cups-preview.webp"},
  {category:'artwork', label:'Digital Artwork', thumbnail:'assets/thumbnails/character-design-avengers.webp', title:'Character Design Collection', folder:true, url:'https://drive.google.com/drive/folders/1pBQIosMqdpr6BTgsZifR6PIDxneRs6DX?usp=drive_link'},
  {category:'vtuber', label:'VTuber Design', title:'VTuber Project 01', id:'1UAsFOc5LAUIutoAvIeafIfFjtFE8Acln', url:'https://drive.google.com/file/d/1UAsFOc5LAUIutoAvIeafIfFjtFE8Acln/view?usp=drive_link'},
  {category:'vtuber', label:'VTuber Design', title:'VTuber Project 02', id:'1boUgATHVlVcjqeO9flA-Vjfn-1ffMGGg', url:'https://drive.google.com/file/d/1boUgATHVlVcjqeO9flA-Vjfn-1ffMGGg/view?usp=drive_link'},
  {category:'vtuber', label:'VTuber Design', title:'VTuber Project 03', id:'1z-HfGZiBiVjcPXQIn7AH8Fux0HOyMqU3', url:'https://drive.google.com/file/d/1z-HfGZiBiVjcPXQIn7AH8Fux0HOyMqU3/view?usp=drive_link'},
  {category:'vtuber', label:'VTuber Design', title:'VTuber Project 04', id:'1zjfjknRTwovSE6LJYtS9C_rLo-kZ_cSx', url:'https://drive.google.com/file/d/1zjfjknRTwovSE6LJYtS9C_rLo-kZ_cSx/view?usp=drive_link'}
];

const grid = document.getElementById('portfolioGrid');

const initials = {
  video:'VE', character:'2D', motion:'MG', vtuber:'VT', artwork:'DA', graphic:'GD'
};

function cardTemplate(project, index){
  const thumbnail = project.thumbnail || (project.id ? `https://drive.google.com/thumbnail?id=${project.id}&sz=w1000` : '');
  return `
    <article class="project-card reveal" data-category="${project.category}" data-index="${index}" tabindex="0" aria-label="Open ${project.title}">
      <div class="project-thumb">
        <div class="project-fallback">${initials[project.category] || 'AA'}</div>
        ${thumbnail ? `<img loading="lazy" src="${thumbnail}" alt="${project.title} preview" onerror="this.style.display='none'">` : ''}
        <span class="project-play">${(project.folder || project.external) ? '↗' : '▶'}</span>
      </div>
      <div class="project-meta">
        <span>${project.label}</span>
        <h3>${project.title}</h3>
        <p>${project.external ? 'Explore Figma prototype' : (project.folder ? 'Open project collection' : 'Watch project preview')}</p>
      </div>
    </article>`;
}

grid.innerHTML = projects.map(cardTemplate).join('');

// Portfolio filters
const filters = document.querySelectorAll('.filter');
filters.forEach(btn => btn.addEventListener('click', () => {
  filters.forEach(f => f.classList.remove('active'));
  btn.classList.add('active');
  const filter = btn.dataset.filter;
  document.querySelectorAll('.project-card').forEach(card => {
    card.classList.toggle('hidden', filter !== 'all' && card.dataset.category !== filter);
  });
}));

// Project modal
const modal = document.getElementById('projectModal');
const modalTitle = document.getElementById('modalTitle');
const modalCategory = document.getElementById('modalCategory');
const modalMedia = document.getElementById('modalMedia');
const modalLink = document.getElementById('modalLink');

function openProject(index){
  const project = projects[index];
  if(project.folder || project.external){
    window.open(project.url, '_blank', 'noopener');
    return;
  }
  modalTitle.textContent = project.title;
  modalCategory.textContent = project.label;
  modalMedia.className = 'modal-media';
  modalMedia.innerHTML = `<iframe src="https://drive.google.com/file/d/${project.id}/preview" allow="autoplay; fullscreen" allowfullscreen title="${project.title}"></iframe>`;
  modalLink.href = project.url;
  modal.classList.add('open');
  modal.setAttribute('aria-hidden','false');
  document.body.classList.add('modal-open');
}
function closeModal(){
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden','true');
  modalMedia.innerHTML = '';
  document.body.classList.remove('modal-open');
}
document.addEventListener('click', e => {
  const card = e.target.closest('.project-card');
  if(card) openProject(Number(card.dataset.index));
  if(e.target.matches('[data-close-modal]')) closeModal();
});
document.addEventListener('keydown', e => {
  if(e.key === 'Escape') closeModal();
  if((e.key === 'Enter' || e.key === ' ') && document.activeElement.classList.contains('project-card')){
    e.preventDefault(); openProject(Number(document.activeElement.dataset.index));
  }
});

// Mobile menu
const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('.nav');
menuButton.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
});
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  nav.classList.remove('open'); menuButton.setAttribute('aria-expanded','false');
}));

// Reveal on scroll with visible fallback
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const revealElements = document.querySelectorAll('.reveal, .mini-card, .education-list > div');
revealElements.forEach((el, i) => {
  el.classList.add('reveal');
  el.style.transitionDelay = Math.min(i % 4 * 65, 195) + 'ms';
});
if ('IntersectionObserver' in window && !reducedMotion) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target);}
    });
  }, {threshold:.06});
  revealElements.forEach(el => observer.observe(el));
  document.documentElement.classList.add('motion-ready');
} else {
  revealElements.forEach(el => el.classList.add('visible'));
}
const progress = document.createElement('div');
progress.className = 'scroll-progress';
progress.setAttribute('aria-hidden', 'true');
document.body.append(progress);
let scrollPending = false;
function updateProgress(){
  const range = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.transform = 'scaleX(' + (range > 0 ? Math.min(1, Math.max(0, window.scrollY / range)) : 0) + ')';
  scrollPending = false;
}
window.addEventListener('scroll', () => {
  if(!scrollPending){scrollPending = true;requestAnimationFrame(updateProgress);}
}, {passive:true});
window.addEventListener('resize', updateProgress);
updateProgress();
filters.forEach(btn => btn.addEventListener('click', () => {
  document.querySelectorAll('.project-card:not(.hidden)').forEach(card => {
    card.classList.add('visible');
    card.classList.remove('filter-enter');
    if(!reducedMotion){void card.offsetWidth;card.classList.add('filter-enter');}
  });
}));

// Active nav link
const sections = [...document.querySelectorAll('main section[id]')];
const navLinks = [...document.querySelectorAll('.nav a')];
const sectionObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      navLinks.forEach(a => a.classList.toggle('active', a.getAttribute('href') === `#${entry.target.id}`));
    }
  });
},{rootMargin:'-40% 0px -50% 0px'});
sections.forEach(s => sectionObserver.observe(s));


