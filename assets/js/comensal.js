
/* Cursor */
const dot = document.getElementById('cursorDot');
const ring = document.getElementById('cursorRing');
let mx=0,my=0,rx=0,ry=0;
document.addEventListener('mousemove', e => {
  mx=e.clientX; my=e.clientY;
  dot.style.left=mx+'px'; dot.style.top=my+'px';
});
(function animRing(){
  rx+=(mx-rx)*.12; ry+=(my-ry)*.12;
  ring.style.left=rx+'px'; ring.style.top=ry+'px';
  requestAnimationFrame(animRing);
})();
document.querySelectorAll('a,button,.eje,.receta-item,.producto').forEach(el=>{
  el.addEventListener('mouseenter',()=>{ ring.style.width='50px'; ring.style.height='50px'; ring.style.opacity='1'; dot.style.transform='translate(-50%,-50%) scale(1.5)'; });
  el.addEventListener('mouseleave',()=>{ ring.style.width='32px'; ring.style.height='32px'; ring.style.opacity='0.6'; dot.style.transform='translate(-50%,-50%) scale(1)'; });
});

/* Nav */
function toggleNav(){ document.getElementById('navbar').classList.toggle('open'); }
document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>document.getElementById('navbar').classList.remove('open')));

/* Scroll reveal */
const srEls=document.querySelectorAll('.sr');
const obs=new IntersectionObserver(entries=>{
  entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('in'); obs.unobserve(e.target); } });
},{threshold:.1,rootMargin:'0px 0px -30px 0px'});
srEls.forEach(el=>obs.observe(el));

/* Form */
function enviarForm(e){
  e.preventDefault();
  const btn=e.target.querySelector('button');
  btn.textContent='Enviando...'; btn.disabled=true;
  setTimeout(()=>{ btn.style.display='none'; document.getElementById('formMsg').style.display='block'; },1100);
}

/* Hero entrance */
document.querySelectorAll('.hero-h1,.hero-slogan,.hero-manifiesto,.hero-ctas,.stamp').forEach((el,i)=>{
  el.style.opacity='0'; el.style.transform='translateY(20px)';
  setTimeout(()=>{ el.style.transition='opacity .8s ease,transform .8s ease'; el.style.opacity='1'; el.style.transform='none'; },180+i*110);
});

/* ══ ARTÍCULOS ══ */
const articulos = {
  receta: {
    emoji: "✍️",
    eyebrow: "Blog COMENSAL · Reflexión",
    title: "La receta que",
    titleEm: "no se escribe",
    authors: ["Por: COMENSAL", "Categoría: Memoria culinaria"],
    body: `<p>Hoy cociné, como todos los días, la receta que heredé. Esa que me da de comer a mí y a mi familia. Nadie nunca la escribió; se fue transmitiendo y hace años llegó a mis manos y, junto a ellas, la hice propia, pero no propiedad privada.</p><p>Eso sí, tendrás que ver cómo la hago, porque aún sigue sin escribirse. Siempre estuvo abierta a tus manos o a todas las manos que intenten hacerla suya.</p><blockquote>Esta receta tiene una historia, que no es esta; esto es un simple resumen para contarte que así se aprende a cocinar.</blockquote><p>"Mirá, así aprendes", decían nuestros adultos, y a veces no lo decían, lo dejaban explícito en el aire.</p><p>Y de esa manera fuimos aprendiendo a ser. También están aquellos que decidieron ser profesionales, chef o cocineros, cuya formación les dio herramientas, pero en su formación también está: <strong>las recetas y los métodos de cocción tienen su historia.</strong></p><p>Ahora, en cada fogón, en cada mano que se aventura, se escribe una historia nueva.</p><blockquote>La tuya, ¿ya la cocinaste hoy?</blockquote>`,
    refs: ["Patricia Aguirre — Historia Social de la Comida","GAPA — Guías Alimentarias para la Población Argentina","Claude Fischler — El (h)omnívoro"]
  },
  puchero: {
    emoji: "🫕",
    eyebrow: "Historia + Nutrición · Colaboración",
    title: "El puchero de los próceres:",
    titleEm: "poder, guerra y calorías",
    authors: ["Nutrición: COMENSAL","Historia: Colaboración docente"],
    body: `<p>Antes de pensar en la soberanía alimentaria como concepto político contemporáneo, hay que volver a los fogones del siglo XIX. El Ejército de los Andes no cruzó la Cordillera con productos ultraprocesados: lo hizo con charqui, locro y maíz.</p><h3>¿Qué comían los soldados?</h3><p>La ración básica incluía <strong>carne seca (charqui), maíz, porotos y grasa</strong>. Alimentos de alto valor calórico, fáciles de transportar y profundamente vinculados a la producción local.</p><blockquote>"La cocina popular argentina nació del mestizaje: ingredientes indígenas, técnicas españolas y la urgencia de los que no tenían otra cosa." — Patricia Aguirre</blockquote><h3>El puchero como síntesis cultural</h3><p>El puchero —esa olla que mezcla lo que hay— es probablemente el plato más honesto de la historia argentina. No tiene receta fija. Es el anti-ultraprocesado por definición: variado, sin aditivos, preparado en comunidad. Desde la <strong>clasificación NOVA</strong>, es Grupo 1 o 2 en su totalidad.</p>`,
    refs: ["Patricia Aguirre — Historia Social de la Comida","OPS/OMS — Clasificación NOVA","Ley 27.642 — Etiquetado Frontal de Alimentos"]
  },
  mazamorra: {
    emoji: "🌽",
    eyebrow: "Historia Social de la Cocina",
    title: "La Mazamorra y",
    titleEm: "el mestizaje alimentario",
    authors: ["Historia + Nutrición: COMENSAL"],
    body: `<p>La mazamorra —maíz blanco hervido con agua y nada más— fue durante siglos el plato de los pobres, de los esclavizados, de los que no tenían otra cosa. Y sin embargo, sobrevivió. Más que sobrevivir: se convirtió en símbolo.</p><h3>Un alimento de resistencia</h3><p>En el Río de la Plata colonial, la mazamorra era el sustento de las clases populares. Indígenas, africanos esclavizados y criollos pobres compartían este alimento básico que la élite miraba con desprecio.</p><blockquote>"Los pobres comían mazamorra. Hoy la llamamos comfort food y la pagamos cara en restaurantes de autor." — Reflexión COMENSAL</blockquote>`,
    refs: ["GAPA — Guías Alimentarias","OPS/OMS — Clasificación NOVA","Patricia Aguirre — Historia Social de la Comida"]
  },
  locro: {
    emoji: "🍲",
    eyebrow: "Clasificación NOVA · Plato Político",
    title: "El Locro del 25:",
    titleEm: "la olla como acto político",
    authors: ["Historia + Nutrición: COMENSAL"],
    body: `<p>Cada 25 de mayo, en plazas y escuelas de todo el país, se sirve locro. Este ritual anual es mucho más que una tradición gastronómica: es una declaración de identidad colectiva cocinada a fuego lento.</p><h3>Los ingredientes del acto político</h3><p>El locro es un plato de origen prehispánico que incorporó elementos europeos. Maíz, porotos, zapallo, carne: cada ingrediente tiene una historia de mestizaje. <strong>No hay receta oficial del locro porque el locro es de todos.</strong></p><blockquote>Cuando se cocina locro en comunidad, se practica soberanía alimentaria sin saberlo.</blockquote><h3>NOVA, sellos y el locro industrial</h3><p>El problema no es el locro: es el locro en tetrapak, con conservantes y sodio elevado. La industria tomó un plato Grupo 1-2 NOVA y lo transformó en Grupo 4. Eso es lo que enseñamos en el Laboratorio de Etiquetas.</p>`,
    refs: ["OPS/OMS — Clasificación NOVA","Ley 27.642 — Etiquetado Frontal","GAPA — Guías Alimentarias"]
  },
  mate: {
    emoji: "🧉",
    eyebrow: "Nutrición Crítica · Comensalidad",
    title: "El mate y",
    titleEm: "el consumo individual",
    authors: ["Nutrición + Cultura: COMENSAL"],
    body: `<p>Hay una imagen que resume perfectamente el problema: alguien en un café, tomando mate en soledad, con auriculares, mirando el teléfono. El mate —símbolo de la comensalidad— convertido en acto de consumo individual.</p><h3>La ronda como protocolo social</h3><p>El mate tradicional implica <strong>confianza, reciprocidad y presencia</strong>. Es el anti-fast food por excelencia.</p><blockquote>"Lo individual no sacia." — frase de nuestra cápsula. El mate lo sabía antes que la nutrición.</blockquote><h3>Más allá de la cafeína</h3><p>La yerba mate contiene cafeína, teobromina y antioxidantes. Pero su verdadero valor no está en el análisis bioquímico: está en el contexto social. Un mate compartido tiene un valor que ningún laboratorio puede medir: el vínculo.</p>`,
    refs: ["Claude Fischler — El (h)omnívoro","GAPA — Guías Alimentarias","Patricia Aguirre — Historia Social de la Comida"]
  },
  milanesa: {
    emoji: "🥩",
    eyebrow: "Evolución de la Cocina Argentina",
    title: "La milanesa:",
    titleEm: "inmigración y clase obrera",
    authors: ["Historia + Nutrición: COMENSAL"],
    body: `<p>La milanesa no es argentina. Llegó con los inmigrantes italianos a fines del siglo XIX. Pero lo que hizo con ella la cocina popular argentina es un fenómeno de apropiación cultural único.</p><h3>De cotoletta a milanesa</h3><p>La <em>cotoletta alla milanese</em> original es de ternera, con hueso. En Argentina se adaptó al corte disponible y barato. La milanesa argentina es más fina, más grande y —en las manos correctas— más sabrosa.</p><blockquote>La milanesa es el plato de la clase trabajadora: rendidora, nutritiva, adaptable. Si la hay, hay comida.</blockquote><h3>El problema de la milanesa industrial</h3><p>Hoy existe la "milanesa de soja" y variantes de <strong>Grupo 4 NOVA</strong> con sellos de advertencia. Esto es exactamente lo que analizamos en el Laboratorio de Etiquetas.</p>`,
    refs: ["OPS/OMS — Clasificación NOVA","Ley 27.642 — Etiquetado Frontal","GAPA — Guías Alimentarias"]
  }
};

function abrirArticulo(id) {
  const art = articulos[id];
  if (!art) return;
  const refsHTML = art.refs.map(r => `<li>${r}</li>`).join('');
  const authorsHTML = art.authors.map(a => `<span>${a}</span>`).join('');
  document.getElementById('modal-body').innerHTML = `
    <span class="art-emoji">${art.emoji}</span>
    <span class="art-eyebrow">${art.eyebrow}</span>
    <h2 class="art-title">${art.title}<br><em>${art.titleEm}</em></h2>
    <div class="art-authors">${authorsHTML}</div>
    <div class="art-body">${art.body}</div>
    <div class="art-refs"><h4>Fuentes y respaldo</h4><ul>${refsHTML}</ul></div>
  `;
  const modal = document.getElementById('modal-articulo');
  modal.style.display = 'block';
  document.body.style.overflow = 'hidden';
}

function cerrarArticulo() {
  document.getElementById('modal-articulo').style.display = 'none';
  document.body.style.overflow = '';
}

document.addEventListener('keydown', e => { if (e.key === 'Escape') cerrarArticulo(); });
