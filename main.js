const esc = s => String(s ?? "").replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));

function youtubeId(v) {
  if (!v) return "";
  const m = v.match(/(?:youtu\.be\/|v=|embed\/|shorts\/)([\w-]{11})/);
  return m ? m[1] : v.trim();
}

const GH_ICON = '<svg viewBox="0 0 16 16" width="18" height="18" aria-hidden="true"><path fill="currentColor" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg>';
const YT_ICON = '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path fill="currentColor" d="M23.5 6.2a3 3 0 00-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 00.5 6.2 31 31 0 000 12a31 31 0 00.5 5.8 3 3 0 002.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 002.1-2.1A31 31 0 0024 12a31 31 0 00-.5-5.8zM9.6 15.6V8.4l6.3 3.6-6.3 3.6z"/></svg>';

// Header
document.title = SITE.name;
document.getElementById("name").textContent = SITE.name;
document.getElementById("tagline").textContent = SITE.tagline;
const links = [`<a href="https://github.com/${esc(SITE.github)}" target="_blank" rel="noopener">${GH_ICON} GitHub</a>`];
if (SITE.youtubeChannel) links.push(`<a href="${esc(SITE.youtubeChannel)}" target="_blank" rel="noopener">${YT_ICON} YouTube</a>`);
if (SITE.email) links.push(`<a href="mailto:${esc(SITE.email)}">✉ Email</a>`);
document.getElementById("links").innerHTML = links.join("");
document.getElementById("footer-text").textContent = `© ${new Date().getFullYear()} ${SITE.name}`;

// Projects — video loads only when clicked (fast page, no YouTube tracking until play)
document.getElementById("projects").innerHTML = PROJECTS.map(p => {
  const id = youtubeId(p.youtube);
  const video = id
    ? `<button class="video" data-id="${esc(id)}" aria-label="Play video: ${esc(p.title)}">
         <img src="https://i.ytimg.com/vi/${esc(id)}/hqdefault.jpg" alt="" loading="lazy">
         <span class="play"></span>
       </button>`
    : "";
  const image = p.image
    ? `<img class="shot" src="${esc(p.image)}" alt="${esc(p.imageAlt || p.title)}" loading="lazy">`
    : "";
  const media = video + image;
  return `
    <article class="card">
      ${media}
      <div class="card-body">
        <h3>${esc(p.title)}</h3>
        <p>${esc(p.description)}</p>
        <ul class="tags">${(p.tags || []).map(t => `<li>${esc(t)}</li>`).join("")}</ul>
        ${p.repo ? `<a class="repo-link" href="${esc(p.repo)}" target="_blank" rel="noopener">${GH_ICON} View code</a>` : ""}
      </div>
    </article>`;
}).join("");

document.addEventListener("click", e => {
  const btn = e.target.closest("button.video[data-id]");
  if (!btn) return;
  const iframe = document.createElement("iframe");
  iframe.src = `https://www.youtube-nocookie.com/embed/${btn.dataset.id}?autoplay=1&rel=0`;
  iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
  iframe.allowFullscreen = true;
  iframe.title = btn.getAttribute("aria-label");
  const wrap = document.createElement("div");
  wrap.className = "video";
  wrap.appendChild(iframe);
  btn.replaceWith(wrap);
});
