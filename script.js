const projects = [
  {
    id:'calipros', title:'AI CaliPros', category:'ai', type:'AI / Computer Vision', date:'7th semester · 2025',
    summary:'Award-winning smart vision-based measurement of machined component geometry, developed through BVM DM Labs.',
    detail:'A six-month seventh-semester academic minor project built with Lavisha Desai under the guidance of Dr. Vatsal Shah. I worked on model improvement, image annotation, predicted measurements and reference-based calibration. Our team received the Best Project Award and Certificate of Excellence at the BVM IT E-Poster Presentation on 12 November 2025.',
    tech:['YOLOv8','Python','OpenCV','Calibration','Object detection'],url:'https://github.com/SobiyaMariyam/AI_Calipros', access:'Private repository', art:'vision', note:'Academic work: 7th semester 2025; GitHub repository created February 2026. Code currently private.'
  },
  {
    id:'signsync', title:'SignSync.AI', category:'ai', type:'Published Research', date:'2025 · Published',
    summary:'Real-time sign language recognition and speech output — an accessibility-focused AI research project.',
    detail:'Co-developed a system that uses MediaPipe hand landmarks, a TensorFlow gesture classifier and an OpenCV processing pipeline with Flask and React for real-time interaction. Co-authored the paper “SignSync.AI: A Real-Time Sign Language Detection System,” presented at CSPS-2025 and published in Hinweis Science and Engineering, 2(1), 91–96.',
    tech:['TensorFlow','MediaPipe','OpenCV','Flask','React'],url:'https://github.com/SobiyaMariyam/SignSyncAI-Project', secondary:'https://www.academia.edu/144594223/SignSync_AI_A_Real_Time_Sign_Language_Detection_System',secondaryLabel:'Read paper',access:'Private repository',art:'sign', note:'Publication year: 2025. Code currently private; publication is public.'
  },
  {
    id:'trendlytics', title:'Trendlytics', category:'web', type:'Dashboard / Analytics', date:'Feb–Mar 2025',
    summary:'Responsive social-media analytics dashboard presenting engagement and audience trends across platforms.',
    detail:'A responsive web dashboard developed around a public dataset for exploring social-media performance, platform comparisons and visual data storytelling. The public repository documents dashboard interfaces and project work.',
    tech:['HTML','CSS','JavaScript','Data viz'],url:'https://github.com/SobiyaMariyam/Trendlytics-SOCIAL_MEDIA_ANALYSIS',access:'Public repository',art:'chart',note:'Repository activity: February–March 2025.'
  },
  {
    id:'integrity', title:'File Integrity Checker', category:'security', type:'Python / Security', date:'Dec 2024–Jan 2025',
    summary:'Python utility using file hashes to detect additions, deletions and unexpected modifications.',
    detail:'Developed a hash-based file-integrity checker with recursive directory monitoring and configurable scan intervals. The public project demonstrates basic integrity verification and change detection in authorized environments.',
    tech:['Python','SHA-256','File monitoring'],url:'https://github.com/SobiyaMariyam/FILE-INTEGRITY-CHECKER',access:'Public repository',art:'terminal',note:'Repository activity: December 2024–January 2025.'
  },
  {
    id:'sql', title:'Web Vulnerability Scanner', category:'security', type:'Python / Security', date:'Dec 2024–Apr 2025',
    summary:'Learning-oriented scanner for identifying common web security weaknesses in authorized test environments.',
    detail:'Built a Python-based web assessment utility to practice basic SQL injection and web vulnerability checks and reporting. Intended for controlled, authorized security learning and testing.',
    tech:['Python','Web security','OWASP'],url:'https://github.com/SobiyaMariyam/SQLInjection-scanner',access:'Public repository',art:'terminal',note:'Project listed on LinkedIn from December 2024–January 2025; repository had activity through April 2025.'
  },
  {
    id:'pentest', title:'Penetration Testing Toolkit', category:'security', type:'Python / Security', date:'Dec 2024–Jan 2025',
    summary:'Security-learning toolkit including asynchronous port-scanning and network reporting components.',
    detail:'Developed learning utilities for ethical network assessment, including an asynchronous port scanner, service identification, basic GUI interaction and CSV report export. Built in an internship learning context and documented for authorized use.',
    tech:['Python','asyncio','Networking','Tkinter'],url:'https://github.com/SobiyaMariyam/PENETRATION-TESTING-TOOLKIT',access:'Public repository',art:'terminal',note:'Repository activity: January 2025; internship period December 2024–January 2025.'
  },
  {
    id:'encryption', title:'Advanced Encryption Tool', category:'security', type:'Cryptography / Python', date:'Jan 2025',
    summary:'Python practice project exploring encryption concepts and secure handling of data.',
    detail:'An educational security utility from my cybersecurity training, demonstrating fundamental cryptographic and software development concepts in a controlled project environment.',
    tech:['Python','Encryption','Security'],url:'https://github.com/SobiyaMariyam/ADVANCED-ENCRYPTION-TOOL',access:'Public repository',art:'lock',note:'Repository activity: January 2025.'
  },
  {
    id:'spotify', title:'Spotify R Dashboard', category:'web', type:'Data / Visualization', date:'Dec 2024',
    summary:'Interactive R Flexdashboard analyzing music-streaming data with statistical visualizations.',
    detail:'Created a Spotify-themed R analytics dashboard using ggplot2, highcharter and DT for dataset exploration, charts and interactive tables.',
    tech:['R','Flexdashboard','ggplot2','highcharter'],url:'https://github.com/SobiyaMariyam/Spotify-R-Dashboard',access:'Public repository',art:'chart',note:'Repository activity: December 2024.'
  },
  {
    id:'powerbi', title:'Power BI Learning & Demos', category:'web', type:'Data / Community', date:'2025',
    summary:'Data visualization practice and student-facing workshops introducing dashboards and KPIs.',
    detail:'Collaborated on a peer-to-peer BVM Machine Learning Club workshop introducing data transformation, KPI reporting and Power BI visualizations. Also maintained a public Power BI repository for practice materials.',
    tech:['Power BI','Data visualization','Mentoring'],url:'https://github.com/SobiyaMariyam/powerbi',access:'Public repository',art:'chart',note:'LinkedIn workshop activity in 2025; public repository created September 2025.'
  },
  {
    id:'calculator', title:'Scientific Calculator', category:'web', type:'Java / Desktop App', date:'Dec 2024',
    summary:'Java Swing calculator supporting scientific operations and interface-level error handling.',
    detail:'Developed a desktop calculator with Java Swing for arithmetic, trigonometric, logarithmic and other scientific operations, emphasizing functionality and clear user interaction.',
    tech:['Java','Swing','GUI'],url:'https://github.com/SobiyaMariyam/ScientificCalcy',access:'Public repository',art:'calculator',note:'Repository activity: December 2024.'
  }
];

function artFor(project,i){
  const head=`<div class="art-inner"><div class="art-header"><span>${project.id==='calipros'?'CALIBRATION / VISION':project.id==='signsync'?'GESTURE / RECOGNITION':project.type.toUpperCase()}</span><span>● ● ●</span></div><div class="art-content">`;
  const end='</div></div>';
  if(project.art==='vision') return `${head}<div class="vision-graphic"><div class="vision-target"><i></i><b>28.4 mm</b></div><div class="vision-guides"></div></div>${end}`;
  if(project.art==='sign') return `${head}<div class="gesture-graphic"><span>✋</span><div><b>HAND SIGNAL</b><small>recognition active</small><small>→ speech output</small></div></div>${end}`;
  if(project.art==='chart') return `${head}<div class="art-chart"><span></span><span></span><span></span><span></span><span></span></div><div class="row-mock lime"></div>${end}`;
  if(project.art==='terminal') return `${head}<div class="terminal-graphic"><span>&gt; status: scanning</span><span class="term-green">✓ validation complete</span><span>→ results logged</span></div>${end}`;
  if(project.art==='lock') return `${head}<div class="art-glyph"><span>♜</span></div>${end}`;
  if(project.art==='calculator') return `${head}<div class="calc-graphic">${['7','8','9','÷','4','5','6','×','1','2','3','='].map(x=>`<span>${x}</span>`).join('')}</div>${end}`;
  return `${head}<div class="row-mock lime"></div><div class="row-mock"></div><div class="row-mock short"></div>${end}`;
}
function safe(text){return String(text).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;').replaceAll("'",'&#39;')}

const grid=document.querySelector('#project-grid');
if(grid){grid.innerHTML=projects.map((p,i)=>`<article class="project-card tactile" data-category="${p.category}"><div class="project-art"><span class="art-number">${String(i+1).padStart(2,'0')}</span><span class="art-badge">${p.access==='Private repository'?'CODE PRIVATE':'PUBLIC WORK'}</span>${artFor(p,i)}</div><div class="project-info"><div class="project-topline"><span>${safe(p.type.toUpperCase())}</span><span>${safe(p.date)}</span></div><h3>${safe(p.title)}</h3><p>${safe(p.summary)}</p><div class="project-tags">${p.tech.slice(0,3).map(t=>`<span>${safe(t)}</span>`).join('')}</div><div class="project-actions"><button type="button" data-open="${p.id}" aria-label="View details for ${safe(p.title)}">Case study ↗</button><a href="${safe(p.url)}" target="_blank" rel="noopener noreferrer" aria-label="Open ${safe(p.title)} GitHub repository">GitHub ↗</a></div></div></article>`).join('')}

const buttons=[...document.querySelectorAll('.filter')];
buttons.forEach(button=>button.addEventListener('click',()=>{
  const filter=button.dataset.filter;
  buttons.forEach(b=>{const on=b===button;b.classList.toggle('selected',on);b.setAttribute('aria-pressed',String(on));});
  document.querySelectorAll('.project-card').forEach(card=>{card.hidden=filter!=='all'&&card.dataset.category!==filter;});
}));

const dialog=document.querySelector('#project-dialog');
const dialogBody=document.querySelector('#dialog-body');
const closeDialog=document.querySelector('.dialog-close');
if(dialog && dialogBody){
  document.querySelectorAll('[data-open]').forEach(btn=>btn.addEventListener('click',()=>{
    const p=projects.find(x=>x.id===btn.dataset.open);if(!p)return;
    dialogBody.innerHTML=`<div class="dialog-kicker">${safe(p.type.toUpperCase())} · ${safe(p.date)}</div><h2 class="dialog-title" id="dialog-title">${safe(p.title)}</h2><p class="dialog-desc">${safe(p.detail)}</p><div class="dialog-tags">${p.tech.map(t=>`<span>${safe(t)}</span>`).join('')}</div><p class="dialog-desc"><strong>Source & timeline:</strong> ${safe(p.note)}</p><div class="dialog-actions"><a class="push push-dark" href="${safe(p.url)}" target="_blank" rel="noopener noreferrer">GitHub ${p.access==='Private repository'?'(private)':''} ↗</a>${p.secondary?`<a class="push push-lime" href="${safe(p.secondary)}" target="_blank" rel="noopener noreferrer">${safe(p.secondaryLabel||'More details')} ↗</a>`:''}</div>`;
    dialog.showModal();
  }));
  closeDialog?.addEventListener('click',()=>dialog.close());
  dialog.addEventListener('click',e=>{if(e.target===dialog) dialog.close();});
}

const menuToggle=document.querySelector('.menu-toggle');
const mobileNav=document.querySelector('.mobile-nav');
if(menuToggle && mobileNav){menuToggle.addEventListener('click',()=>{
  const open=mobileNav.hidden; mobileNav.hidden=!open;menuToggle.setAttribute('aria-expanded',String(open));menuToggle.setAttribute('aria-label',open?'Close navigation':'Open navigation');menuToggle.innerHTML=open?'✕':'☰';
});
mobileNav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{mobileNav.hidden=true;menuToggle.setAttribute('aria-expanded','false');menuToggle.innerHTML='☰';}));}

document.querySelectorAll('.push').forEach(b=>{b.addEventListener('pointerdown',()=>b.classList.add('is-pressed'));b.addEventListener('pointerup',()=>b.classList.remove('is-pressed'));b.addEventListener('pointercancel',()=>b.classList.remove('is-pressed'));b.addEventListener('pointerleave',()=>b.classList.remove('is-pressed'));});
const copyButton=document.querySelector('#copy-email');
copyButton?.addEventListener('click',async()=>{const msg=document.querySelector('#copy-message');try{await navigator.clipboard.writeText('sobiyasamim8605@gmail.com');msg.textContent='Email copied to clipboard.';}catch{msg.textContent='Copy manually: sobiyasamim8605@gmail.com';}});
const year=document.querySelector('#year');if(year)year.textContent=new Date().getFullYear();
