const projects = [
  // Video Editing
  {category:'video', label:'Video Editing', title:'Book Trailer', id:'1dIGBCBZGFG04Zd4O8uE-la21BYiz1zpa', url:'https://drive.google.com/file/d/1dIGBCBZGFG04Zd4O8uE-la21BYiz1zpa/view?usp=drive_link'},
  {category:'video', label:'Video Editing', title:'AI Video', id:'1dIGBCBZGFG04Zd4O8uE-la21BYiz1zpa', url:'https://drive.google.com/file/d/1dIGBCBZGFG04Zd4O8uE-la21BYiz1zpa/view?usp=drive_link'},
  {category:'video', label:'Video Editing', title:'Video Editing Project 03', id:'14yBiW9_kAnTf_vZD4Pe3ofIjG889tunT', url:'https://drive.google.com/file/d/14yBiW9_kAnTf_vZD4Pe3ofIjG889tunT/view?usp=drive_link'},
  {category:'video', label:'Video Editing', title:'Video Editing Project 04', id:'13dNkR-KEvGSIrisfkA7JOQvLNq1LoOeu', url:'https://drive.google.com/file/d/13dNkR-KEvGSIrisfkA7JOQvLNq1LoOeu/view?usp=drive_link'},
  {category:'video', label:'Video Editing', title:'Video Editing Project 05', id:'1kMM-8Rnrf8ruVum_nGuE6TWY9qdjBYzs', url:'https://drive.google.com/file/d/1kMM-8Rnrf8ruVum_nGuE6TWY9qdjBYzs/view?usp=sharing'},

  // 2D Character Animation
  {category:'character', label:'2D Character Animation', title:'Character Animation 01', id:'1KA7twT9LmKYe8QmY5AYI_jcpPeKEpJis', url:'https://drive.google.com/file/d/1KA7twT9LmKYe8QmY5AYI_jcpPeKEpJis/view?usp=drive_link'},
  {category:'character', label:'2D Character Animation', title:'Character Animation 02', id:'1qy7-scZALe8trmeWaLc_82nlHs2avGhJ', url:'https://drive.google.com/open?id=1qy7-scZALe8trmeWaLc_82nlHs2avGhJ&usp=drive_copy'},
  {category:'character', label:'2D Character Animation', title:'Character Animation 03', id:'1BTQe3qYLRsmC7qkxVa-jMZjfb5l7zYk0', url:'https://drive.google.com/file/d/1BTQe3qYLRsmC7qkxVa-jMZjfb5l7zYk0/view?usp=sharing'},
  {category:'character', label:'2D Character Animation', title:'Character Animation 04', id:'1yHW9Ht3TkGT6DjGL6mNiV0OX5t2NTEb-', url:'https://drive.google.com/file/d/1yHW9Ht3TkGT6DjGL6mNiV0OX5t2NTEb-/view?usp=sharing'},

  // Graphic Design folder
  {category:'graphic', label:'Graphic Design', title:'Graphic Design Collection', folder:true, url:'https://drive.google.com/drive/folders/18BwUONJkFibl1Uk872ZUhsVb2s4Ynouy?usp=drive_link'},

  // VTubers
  {category:'vtuber', label:'VTuber Design', title:'VTuber Project 01', id:'1UAsFOc5LAUIutoAvIeafIfFjtFE8Acln', url:'https://drive.google.com/file/d/1UAsFOc5LAUIutoAvIeafIfFjtFE8Acln/view?usp=drive_link'},
  {category:'vtuber', label:'VTuber Design', title:'VTuber Project 02', id:'1boUgATHVlVcjqeO9flA-Vjfn-1ffMGGg', url:'https://drive.google.com/file/d/1boUgATHVlVcjqeO9flA-Vjfn-1ffMGGg/view?usp=drive_link'},
  {category:'vtuber', label:'VTuber Design', title:'VTuber Project 03', id:'1z-HfGZiBiVjcPXQIn7AH8Fux0HOyMqU3', url:'https://drive.google.com/file/d/1z-HfGZiBiVjcPXQIn7AH8Fux0HOyMqU3/view?usp=drive_link'},
  {category:'vtuber', label:'VTuber Design', title:'VTuber Project 04', id:'1zjfjknRTwovSE6LJYtS9C_rLo-kZ_cSx', url:'https://drive.google.com/file/d/1zjfjknRTwovSE6LJYtS9C_rLo-kZ_cSx/view?usp=drive_link'},

  // Digital Artwork
  {category:'artwork', label:'Digital Artwork', title:'Character Design Collection', folder:true, url:'https://drive.google.com/drive/folders/1pBQIosMqdpr6BTgsZifR6PIDxneRs6DX?usp=drive_link'},

  // Motion Graphics
  {category:'motion', label:'2D Motion Graphics', title:'Motion Graphics 01', id:'1GrU3MhaOrVEV_eOzO5DcvJzl0LO5lWdA', url:'https://drive.google.com/file/d/1GrU3MhaOrVEV_eOzO5DcvJzl0LO5lWdA/view?usp=drive_link'},
  {category:'motion', label:'2D Motion Graphics', title:'Motion Graphics 02', id:'16LMXsBp6tqGAwpS6CRdW3YRt4zZe-fSD', url:'https://drive.google.com/file/d/16LMXsBp6tqGAwpS6CRdW3YRt4zZe-fSD/view?usp=drive_link'},
  {category:'motion', label:'2D Motion Graphics', title:'Motion Graphics 03', id:'1jrNSGroGe7cGLNThl0FHb6XOzd4MgS44', url:'https://drive.google.com/file/d/1jrNSGroGe7cGLNThl0FHb6XOzd4MgS44/view?usp=drive_link'},
  {category:'motion', label:'2D Motion Graphics', title:'Motion Graphics 04', id:'1D3HoZC1ZZ0bJWWmkPXfpM1QXpp4jS2Ms', url:'https://drive.google.com/file/d/1D3HoZC1ZZ0bJWWmkPXfpM1QXpp4jS2Ms/view?usp=drive_link'}
];

const grid = document.getElementById('portfolioGrid');

const initials = {
  video:'VE', character:'2D', motion:'MG', vtuber:'VT', artwork:'DA', graphic:'GD'
};

function cardTemplate(project, index){
  const thumbnail = project.id ? `https://drive.google.com/thumbnail?id=${project.id}&sz=w1000` : '';
  return `
    <article class="project-card reveal" data-category="${project.category}" data-index="${index}" tabindex="0" aria-label="Open ${project.title}">
      <div class="project-thumb">
        <div class="project-fallback">${initials[project.category] || 'AA'}</div>
        ${thumbnail ? `<img loading="lazy" src="${thumbnail}" alt="${project.title} preview" onerror="this.style.display='none'">` : ''}
        <span class="project-play">${project.folder ? '↗' : '▶'}</span>
      </div>
      <div class="project-meta">
        <span>${project.label}</span>
        <h3>${project.title}</h3>
        <p>${project.folder ? 'Open project collection' : 'Watch project preview'}</p>
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
  if(project.folder){
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

// Reveal on scroll
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){ entry.target.classList.add('visible'); observer.unobserve(entry.target); }
  });
},{threshold:.08});
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

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
