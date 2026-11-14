'use strict';
/* Lecteur — code commun au site public (index.html) et à la page de gestion (conf/) */
const APP=window.APP||{admin:false,base:'./'};
const ADMIN=!!APP.admin, BASE=APP.base||'./';
document.body.classList.add(ADMIN?'admin':'public');
document.body.insertAdjacentHTML('afterbegin',`<svg width="0" height="0" style="position:absolute" aria-hidden="true">
  <symbol id="i-play" viewBox="0 0 24 24"><path d="M8 5.14v13.72a1 1 0 0 0 1.52.85l11-6.86a1 1 0 0 0 0-1.7l-11-6.86A1 1 0 0 0 8 5.14z"/></symbol>
  <symbol id="i-pause" viewBox="0 0 24 24"><path d="M7 5h3a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zm7 0h3a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1z"/></symbol>
  <symbol id="i-next" viewBox="0 0 24 24"><path d="M5 6.6v10.8a1 1 0 0 0 1.53.85l8.3-5.4a1 1 0 0 0 0-1.7l-8.3-5.4A1 1 0 0 0 5 6.6zM17 6a1 1 0 0 1 2 0v12a1 1 0 0 1-2 0z"/></symbol>
  <symbol id="i-prev" viewBox="0 0 24 24"><path d="M19 6.6v10.8a1 1 0 0 1-1.53.85l-8.3-5.4a1 1 0 0 1 0-1.7l8.3-5.4A1 1 0 0 1 19 6.6zM7 6a1 1 0 0 0-2 0v12a1 1 0 0 0 2 0z"/></symbol>
  <symbol id="i-shuffle" viewBox="0 0 24 24"><path d="M10.59 9.17L5.41 4 4 5.41l5.17 5.17 1.42-1.41zM14.5 4l2.04 2.04L4 18.59 5.41 20 17.96 7.46 20 9.5V4h-5.5zm.33 9.41l-1.41 1.41 3.13 3.13L14.5 20H20v-5.5l-2.04 2.04-3.13-3.13z"/></symbol>
  <symbol id="i-repeat" viewBox="0 0 24 24"><path d="M7 7h10v3l4-4-4-4v3H5v6h2V7zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2v4z"/></symbol>
  <symbol id="i-repeat1" viewBox="0 0 24 24"><path d="M7 7h10v3l4-4-4-4v3H5v6h2V7zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2v4zm-4-2V9h-1l-2 1v1h1.5v4H13z"/></symbol>
  <symbol id="i-heart" viewBox="0 0 24 24"><path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"/></symbol>
  <symbol id="i-heartf" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></symbol>
  <symbol id="i-vol" viewBox="0 0 24 24"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/></symbol>
  <symbol id="i-vollow" viewBox="0 0 24 24"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z"/></symbol>
  <symbol id="i-mute" viewBox="0 0 24 24"><path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/></symbol>
  <symbol id="i-queue" viewBox="0 0 24 24"><path d="M15 6H3v2h12V6zm0 4H3v2h12v-2zM3 16h8v-2H3v2zM17 6v8.18c-.31-.11-.65-.18-1-.18-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3V8h3V6h-5z"/></symbol>
  <symbol id="i-eq" viewBox="0 0 24 24"><path d="M3 17v2h6v-2H3zM3 5v2h10V5H3zm10 16v-2h8v-2h-8v-2h-2v6h2zM7 9v2H3v2h4v2h2V9H7zm14 4v-2H11v2h10zm-6-4h2V7h4V5h-4V3h-2v6z"/></symbol>
  <symbol id="i-expand" viewBox="0 0 24 24"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/></symbol>
  <symbol id="i-down" viewBox="0 0 24 24"><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6z"/></symbol>
  <symbol id="i-close" viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></symbol>
  <symbol id="i-plus" viewBox="0 0 24 24"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></symbol>
  <symbol id="i-search" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27A6.47 6.47 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></symbol>
  <symbol id="i-more" viewBox="0 0 24 24"><path d="M6 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-6 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"/></symbol>
  <symbol id="i-note" viewBox="0 0 24 24"><path d="M12 3v10.55A4 4 0 1 0 14 17V7h4V3h-6z"/></symbol>
  <symbol id="i-lib" viewBox="0 0 24 24"><path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 5h-3v5.5a2.5 2.5 0 0 1-5 0 2.5 2.5 0 0 1 2.5-2.5c.57 0 1.08.19 1.5.51V5h4v2z"/></symbol>
  <symbol id="i-album" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 14.5c-2.49 0-4.5-2.01-4.5-4.5S9.51 7.5 12 7.5s4.5 2.01 4.5 4.5-2.01 4.5-4.5 4.5zm0-5.5c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1z"/></symbol>
  <symbol id="i-person" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></symbol>
  <symbol id="i-history" viewBox="0 0 24 24"><path d="M13 3a9 9 0 0 0-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42A8.954 8.954 0 0 0 13 21a9 9 0 0 0 0-18zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"/></symbol>
  <symbol id="i-trash" viewBox="0 0 24 24"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/></symbol>
  <symbol id="i-upload" viewBox="0 0 24 24"><path d="M5 20h14v-2H5v2zm0-10h4v6h6v-6h4l-7-7-7 7z"/></symbol>
  <symbol id="i-folder" viewBox="0 0 24 24"><path d="M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z"/></symbol>
  <symbol id="i-edit" viewBox="0 0 24 24"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a1 1 0 0 0 0-1.41l-2.34-2.34a1 1 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></symbol>
  <symbol id="i-playnext" viewBox="0 0 24 24"><path d="M3 10h11v2H3zm0-4h11v2H3zm0 8h7v2H3zm13-1v8l6-4z"/></symbol>
  <symbol id="i-addq" viewBox="0 0 24 24"><path d="M14 10H3v2h11v-2zm0-4H3v2h11V6zm4 8v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM3 16h7v-2H3v2z"/></symbol>
  <symbol id="i-menu" viewBox="0 0 24 24"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></symbol>
  <symbol id="i-panel" viewBox="0 0 24 24"><path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zM5 19V5h9v14H5z"/></symbol>
  <symbol id="i-image" viewBox="0 0 24 24"><path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm0 16H5V5h14v14zm-5.04-6.71l-2.75 3.54-1.96-2.36L6.5 17h11l-3.54-4.71z"/></symbol>
  <symbol id="i-select" viewBox="0 0 24 24"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16zm4.3-11.7l-5.8 5.8-2.8-2.8-1.4 1.4 4.2 4.2 7.2-7.2-1.4-1.4z"/></symbol>
  <symbol id="i-gear" viewBox="0 0 24 24"><path d="M19.14 12.94c.04-.3.06-.61.06-.94s-.02-.64-.07-.94l2.03-1.58a.49.49 0 0 0 .12-.61l-1.92-3.32a.49.49 0 0 0-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54a.48.48 0 0 0-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96a.48.48 0 0 0-.59.22L2.74 8.87a.47.47 0 0 0 .12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58a.49.49 0 0 0-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32a.47.47 0 0 0-.12-.61l-2.01-1.58zM12 15.6A3.6 3.6 0 1 1 12 8.4a3.6 3.6 0 0 1 0 7.2z"/></symbol>
  <symbol id="i-cloudup" viewBox="0 0 24 24"><path d="M19.35 10.04A7.49 7.49 0 0 0 12 4C9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 0 0 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"/></symbol>
  <symbol id="i-lock" viewBox="0 0 24 24"><path d="M18 8h-1V6A5 5 0 0 0 7 6v2H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2zm-6 9a2 2 0 1 1 0-4 2 2 0 0 1 0 4zM9 8V6a3 3 0 0 1 6 0v2H9z"/></symbol>
  <symbol id="i-plist" viewBox="0 0 24 24"><path d="M14 10H2v2h12v-2zm0-4H2v2h12V6zM2 16h8v-2H2v2zm19.5-4.5L23 13l-6.99 7-4.51-4.5L13 14l3.01 3 5.49-5.5z"/></symbol>
</svg>

<div class="bg"><i class="b1"></i><i class="b2"></i><i class="b3"></i><div class="noise"></div></div>

<div class="app" id="app">
  <aside class="side glass">
    <label class="search">
      <svg class="i"><use href="#i-search"/></svg>
      <input id="q" type="search" placeholder="Rechercher" autocomplete="off" spellcheck="false">
      <kbd>/</kbd>
    </label>
    <nav class="nav" id="nav">
      <button data-view="library"><svg class="i"><use href="#i-lib"/></svg>Bibliothèque<span class="cnt" id="cLib"></span></button>
      <button data-view="liked"><svg class="i"><use href="#i-heartf"/></svg>Favoris<span class="cnt" id="cLiked"></span></button>
      <button data-view="recent"><svg class="i"><use href="#i-history"/></svg>Récents</button>
      <button data-view="albums"><svg class="i"><use href="#i-album"/></svg>Albums</button>
      <button data-view="artists"><svg class="i"><use href="#i-person"/></svg>Artistes</button>
    </nav>
    <div class="sec">Playlists <button class="ibtn sm admin-only" id="newPl" title="Nouvelle playlist"><svg class="i"><use href="#i-plus"/></svg></button></div>
    <div class="pls" id="pls"></div>
    <div class="side-foot">
      <div class="row2 admin-only">
        <button class="pill" data-import="files"><svg class="i"><use href="#i-upload"/></svg>Fichiers</button>
        <button class="pill" data-import="dir"><svg class="i"><use href="#i-folder"/></svg>Dossier</button>
      </div>
      <div class="stat" id="stat"></div>
      <div class="pubrow admin-only"><button class="pill solid" id="pubBtn"><svg class="i"><use href="#i-cloudup"/></svg><span>Publier</span></button><button class="ibtn sm" id="ghBtn" title="Réglages et verrouillage"><svg class="i"><use href="#i-gear"/></svg></button></div>
    </div>
  </aside>
  <div class="scrim" id="scrim"></div>

  <main class="main glass">
    <button class="ibtn mbtn" id="mbtn" title="Menu"><svg class="i"><use href="#i-menu"/></svg></button>
    <div class="scroll" id="scroll"><div id="view"></div></div>
    <div class="selbar" id="selbar"></div>
  </main>

  <section class="panel glass" id="panel">
    <div class="tabs" id="tabs">
      <button data-tab="now">Lecture</button>
      <button data-tab="queue">File</button>
      <button data-tab="sound">Son</button>
    </div>
    <div class="pane" id="pane-now">
      <div class="np-art" id="npArt" data-c="fs"></div>
      <div class="np-meta">
        <div style="min-width:0"><h3 id="npTitle">Rien en lecture</h3><p id="npArtist">Importe ta musique pour commencer</p></div>
        <button class="ibtn like" data-c="like" title="J'aime (L)"><svg class="i"><use href="#i-heart"/></svg></button>
      </div>
      <canvas id="viz"></canvas>
      <div class="card2" id="npNext"></div>
      <div class="card2" id="npFacts"></div>
    </div>
    <div class="pane" id="pane-queue"></div>
    <div class="pane" id="pane-sound">
      <div class="lbl">Égaliseur <span id="eqName"></span></div>
      <div class="chips" id="presets"></div>
      <div class="eq" id="eq"></div>
      <div class="lbl">Vitesse <span id="spdVal"></span></div>
      <div class="chips" id="speeds"></div>
      <div class="lbl">Minuteur de sommeil <span id="sleepVal"></span></div>
      <div class="chips" id="sleeps"></div>
      <div id="fxBox"></div>
      <div class="lbl">Raccourcis</div>
      <div class="card2" style="font-size:12.5px;color:var(--mut);line-height:1.9;font-weight:600">
        Espace lecture/pause · ← → ±5 s · Maj+← → titre préc./suiv. · ↑ ↓ volume · M muet · L j'aime · S aléatoire · R répétition · F plein écran · / rechercher
      </div>
    </div>
  </section>

  <footer class="bar glass">
    <div class="b-left">
      <div class="b-cover" id="bCover" data-c="fs" title="Mode immersif (F)"></div>
      <div class="b-meta"><div class="ttl" id="bTitle">—</div><div class="sub" id="bArtist"></div></div>
      <button class="ibtn sm like" data-c="like" title="J'aime (L)"><svg class="i"><use href="#i-heart"/></svg></button>
    </div>
    <div class="b-center">
      <div class="ctrls">
        <button class="ibtn sm" data-c="shuffle" title="Aléatoire (S)"><svg class="i"><use href="#i-shuffle"/></svg></button>
        <button class="ibtn" data-c="prev" title="Précédent"><svg class="i"><use href="#i-prev"/></svg></button>
        <button class="pp" data-c="play" title="Lecture (Espace)"><svg class="i"><use href="#i-play"/></svg></button>
        <button class="ibtn" data-c="next" title="Suivant"><svg class="i"><use href="#i-next"/></svg></button>
        <button class="ibtn sm" data-c="repeat" title="Répéter (R)"><svg class="i"><use href="#i-repeat"/></svg></button>
      </div>
      <div class="prog"><span class="tcur">0:00</span><input type="range" class="seek" min="0" max="1000" value="0"><span class="tdur">0:00</span></div>
    </div>
    <div class="b-right">
      <span class="sleepbadge" id="sleepBadge"></span>
      <button class="ibtn sm hide-m" data-c="tab-now" title="Lecture en cours"><svg class="i"><use href="#i-panel"/></svg></button>
      <button class="ibtn sm" data-c="tab-queue" title="File d'attente"><svg class="i"><use href="#i-queue"/></svg></button>
      <button class="ibtn sm" data-c="tab-sound" title="Égaliseur & réglages"><svg class="i"><use href="#i-eq"/></svg></button>
      <button class="ibtn sm hide-m" data-c="fs" title="Mode immersif (F)"><svg class="i"><use href="#i-expand"/></svg></button>
      <button class="ibtn sm" data-c="mute" title="Muet (M)"><svg class="i"><use href="#i-vol"/></svg></button>
      <input type="range" class="vol" id="vol" min="0" max="100" value="80">
    </div>
  </footer>
</div>

<div class="fs" id="fs">
  <div class="fs-bg" id="fsBg"></div><div class="fs-bg2"></div>
  <canvas class="fs-viz" id="fsViz"></canvas>
  <button class="ibtn fs-close" data-c="fs" title="Fermer (Échap)"><svg class="i"><use href="#i-down"/></svg></button>
  <div class="fs-stage">
    <div class="fs-art" id="fsArt"></div>
    <div class="fs-info">
      <div class="eyebrow" id="fsAlbum"></div>
      <h2 id="fsTitle"></h2>
      <p id="fsArtist"></p>
      <div class="fs-ctl glass">
        <div class="prog"><span class="tcur">0:00</span><input type="range" class="seek" min="0" max="1000" value="0"><span class="tdur">0:00</span></div>
        <div class="ctrls">
          <button class="ibtn" data-c="shuffle"><svg class="i"><use href="#i-shuffle"/></svg></button>
          <button class="ibtn lg" data-c="prev"><svg class="i"><use href="#i-prev"/></svg></button>
          <button class="pp" data-c="play"><svg class="i"><use href="#i-play"/></svg></button>
          <button class="ibtn lg" data-c="next"><svg class="i"><use href="#i-next"/></svg></button>
          <button class="ibtn" data-c="repeat"><svg class="i"><use href="#i-repeat"/></svg></button>
          <button class="ibtn like" data-c="like"><svg class="i"><use href="#i-heart"/></svg></button>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="drop" id="drop"><div class="glass"><div class="orb"></div><h2>Lâche pour importer</h2><p id="dropHint">Fichiers ou dossiers entiers</p></div></div>
<div class="menu glass" id="menu"></div>
<div class="modal" id="modal"></div>
<div class="toasts" id="toasts"></div>
<input type="file" id="fileIn" multiple accept="audio/*,.mp3,.flac,.m4a,.aac,.ogg,.opus,.wav,.webm,.aiff" hidden>
<input type="file" id="dirIn" webkitdirectory directory multiple hidden>
<audio id="audio" preload="metadata" playsinline></audio>`);
/* ================= helpers ================= */
const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const enc=s=>encodeURIComponent(s??'');
const uid=()=>Date.now().toString(36)+Math.random().toString(36).slice(2,8);
const norm=s=>String(s||'').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'');
const clamp=(v,a,b)=>Math.min(b,Math.max(a,v));
const fmt=s=>{if(!isFinite(s)||s<0)s=0;s=Math.floor(s);const h=Math.floor(s/3600),m=Math.floor(s%3600/60),r=s%60;return (h?h+':'+String(m).padStart(2,'0'):m)+':'+String(r).padStart(2,'0')};
const fmtLong=s=>{const h=Math.floor(s/3600),m=Math.round(s%3600/60);return h?`${h} h ${m} min`:`${m} min`};
const hash=s=>{let h=0;for(const c of String(s))h=(h*31+c.charCodeAt(0))|0;return Math.abs(h)};
const phBg=k=>{const h=hash(k)%360;return `linear-gradient(135deg,hsl(${h} 70% 58%),hsl(${(h+55)%360} 65% 32%))`};
const ago=t=>{if(!t)return '';const d=Math.floor((Date.now()-t)/864e5);if(d<1)return "Aujourd'hui";if(d<2)return 'Hier';if(d<7)return `Il y a ${d} j`;if(d<30)return `Il y a ${Math.floor(d/7)} sem.`;return new Date(t).toLocaleDateString('fr-FR',{day:'numeric',month:'short',year:'numeric'})};
const coarse=matchMedia('(hover: none)').matches;
const UNKNOWN='Artiste inconnu';

/* ================= storage ================= */
const DB={db:null,
  open(){return new Promise((res,rej)=>{const r=indexedDB.open(ADMIN?'lecteur-conf':'lecteur-site',1);
    r.onupgradeneeded=()=>{const d=r.result;['tracks','files','playlists','meta'].forEach(n=>{if(!d.objectStoreNames.contains(n))d.createObjectStore(n,{keyPath:'id'})})};
    r.onsuccess=()=>{this.db=r.result;res()};r.onerror=()=>rej(r.error)})},
  run(store,mode,fn){return new Promise((res,rej)=>{if(!this.db)return rej('no db');const t=this.db.transaction(store,mode);const r=fn(t.objectStore(store));t.oncomplete=()=>res(r&&r.result);t.onerror=()=>rej(t.error);t.onabort=()=>rej(t.error)})},
  all(s){return this.run(s,'readonly',x=>x.getAll()).catch(()=>[])},
  get(s,id){return this.run(s,'readonly',x=>x.get(id))},
  put(s,v){return this.run(s,'readwrite',x=>x.put(v))},
  del(s,id){return this.run(s,'readwrite',x=>x.delete(id))},
  clear(s){return this.run(s,'readwrite',x=>x.clear())}
};
// Sur téléphone, passer le son par la Web Audio API (égaliseur, visualiseur) coupe la lecture
// en arrière-plan (iPhone surtout) : les effets y sont donc désactivés par défaut.
const MOBILE=/iPad|iPhone|iPod|Android/i.test(navigator.userAgent)||(navigator.platform==='MacIntel'&&navigator.maxTouchPoints>1)||matchMedia('(hover: none) and (pointer: coarse)').matches;
const S=Object.assign({fx:!MOBILE,vol:.8,muted:false,shuffle:false,repeat:'off',eq:Array(10).fill(0),preset:'Plat',speed:1,tab:'now',panelOpen:true,last:null,pos:0,queue:[],base:[],qi:-1},(()=>{try{return JSON.parse(localStorage.getItem((ADMIN?'conf':'site')+'-settings'))||{}}catch(e){return {}}})());
let saveT;const save=()=>{clearTimeout(saveT);saveT=setTimeout(()=>{try{localStorage.setItem((ADMIN?'conf':'site')+'-settings',JSON.stringify(S))}catch(e){}},150)};

/* ================= state ================= */
const tracks=new Map(), covers=new Map(), albumCovers=new Map(), plCovers=new Map();
const selected=new Set();let selMode=false,selAnchor=-1;
let playlists=[], view={type:'library'}, vsort={key:'added',dir:-1}, search='', curList=[];
let queue=[], baseQueue=[], qi=-1, current=null, curURL=null;
const audio=$('#audio');
const plById=id=>playlists.find(p=>p.id===id);
const coverFor=t=>t?(covers.get(t.id)||albumCovers.get(norm(t.album))||null):null;
function rebuildAlbumCovers(){albumCovers.clear();for(const t of tracks.values()){if(t.album&&covers.has(t.id)&&!albumCovers.has(norm(t.album)))albumCovers.set(norm(t.album),covers.get(t.id))}}
/* ================= catalogue publié (data/catalog.json) ================= */
const LS={get(k,d){try{const v=localStorage.getItem(k);return v==null?d:JSON.parse(v)}catch(e){return d}},set(k,v){try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}}};
const extOf=n=>((n||'').match(/\.([a-z0-9]{1,5})$/i)||[,'mp3'])[1].toLowerCase();
const trackPath=t=>t.file||`music/${t.id}.${extOf(t.name)}`;
const trackCoverPath=t=>t.coverPath||(t.cover?`covers/${t.id}.jpg`:'');
const plCoverPath=p=>p.coverPath||(p.cover?`covers/pl-${p.id}-${p.coverRev||'0'}.jpg`:'');
function serialize(){
  return {
    tracks:[...tracks.values()].sort((a,b)=>a.added-b.added).map(t=>({id:t.id,file:trackPath(t),name:t.name,title:t.title,artist:t.artist,album:t.album||'',year:t.year||'',genre:t.genre||'',
      track:t.track||0,disc:t.disc||0,duration:Math.round((t.duration||0)*100)/100,size:t.size||0,cover:trackCoverPath(t),added:t.added})),
    playlists:playlists.map(p=>({id:p.id,name:p.name,ids:p.ids.filter(id=>tracks.has(id)),cover:plCoverPath(p),created:p.created}))
  };
}
const catKey=c=>JSON.stringify({tracks:(c&&c.tracks)||[],playlists:(c&&c.playlists)||[]});
function fromCatalog(c){
  const t={id:c.id,file:c.file,name:c.name||String(c.file).split('/').pop(),size:c.size||0,title:c.title||'Sans titre',artist:c.artist||UNKNOWN,album:c.album||'',year:c.year||'',genre:c.genre||'',
    track:c.track||0,disc:c.disc||0,duration:c.duration||0,added:c.added||0};
  if(c.cover)t.coverPath=c.cover;return t;
}
const plFromCatalog=c=>{const p={id:c.id,name:c.name,ids:c.ids||[],created:c.created||0};if(c.cover)p.coverPath=c.cover;return p};
function setCoverURL(t){if(covers.has(t.id)&&String(covers.get(t.id)).startsWith('blob:'))URL.revokeObjectURL(covers.get(t.id));covers.delete(t.id);
  if(t.cover)covers.set(t.id,URL.createObjectURL(t.cover));else if(t.coverPath)covers.set(t.id,BASE+t.coverPath)}
function setPlCoverURL(p){if(plCovers.has(p.id)&&String(plCovers.get(p.id)).startsWith('blob:'))URL.revokeObjectURL(plCovers.get(p.id));plCovers.delete(p.id);
  if(p.cover)plCovers.set(p.id,URL.createObjectURL(p.cover));else if(p.coverPath)plCovers.set(p.id,BASE+p.coverPath)}
async function sourceFor(t){
  if(ADMIN){const f=await DB.get('files',t.id).catch(()=>null);if(f&&f.blob)return {url:URL.createObjectURL(f.blob),blob:true}}
  return t.file?{url:BASE+t.file,blob:false}:null;
}
// admin : likes/écoutes restent dans le brouillon local ; public : dans 'meta' (propre à chaque visiteur)
function saveTrack(t){return (ADMIN?DB.put('tracks',t):DB.put('meta',{id:t.id,liked:!!t.liked,likedAt:t.likedAt||0,plays:t.plays||0,lastPlayed:t.lastPlayed||0})).catch(()=>{})}
async function fetchSiteCatalog(){
  try{const r=await fetch(BASE+'data/catalog.json',{cache:'no-cache'});if(!r.ok)return null;const j=await r.json();return {version:j.version||0,tracks:j.tracks||[],playlists:j.playlists||[]}}catch(e){return null}
}

const thumb=(t,cls)=>{const u=coverFor(t);return u?`<img class="${cls}" src="${u}" alt="" loading="lazy" draggable="false">`:`<div class="${cls} ph" style="background:${phBg(t?(t.album||t.title):'x')}"><svg class="i"><use href="#i-note"/></svg></div>`};

/* ================= audio graph ================= */
const BANDS=[32,64,125,250,500,1000,2000,4000,8000,16000];
const PRESETS={'Plat':[0,0,0,0,0,0,0,0,0,0],'Basses':[7,6,5,3,1,0,0,0,0,0],'Aigus':[0,0,0,0,0,1,3,5,6,7],'Vocal':[-2,-2,-1,1,3,4,3,1,0,-1],'Électro':[5,4,1,0,-2,1,1,2,4,5],'Rock':[5,3,2,-1,-2,-1,2,3,4,4],'Acoustique':[3,3,2,1,1,1,2,2,3,2],'Nuit':[-1,0,1,1,0,-1,-2,-3,-4,-5]};
let actx,eqNodes=[],analyser,gainNode,freq=new Uint8Array(1024);
function initAudio(){
  if(actx||!S.fx)return;
  try{
    actx=new (window.AudioContext||window.webkitAudioContext)();
    let node=actx.createMediaElementSource(audio);
    BANDS.forEach((f,i)=>{const b=actx.createBiquadFilter();b.type=i===0?'lowshelf':i===BANDS.length-1?'highshelf':'peaking';b.frequency.value=f;b.Q.value=1.1;b.gain.value=S.eq[i]||0;node.connect(b);node=b;eqNodes.push(b)});
    analyser=actx.createAnalyser();analyser.fftSize=2048;analyser.smoothingTimeConstant=.8;freq=new Uint8Array(analyser.frequencyBinCount);
    gainNode=actx.createGain();node.connect(analyser);analyser.connect(gainNode);gainNode.connect(actx.destination);
    applyVol();
  }catch(e){console.warn(e)}
}
function applyVol(){
  const v=S.muted?0:S.vol*S.vol;
  if(gainNode){audio.volume=1;gainNode.gain.setTargetAtTime(v,actx.currentTime,.015)}else audio.volume=v;
  const el=$('#vol');el.value=Math.round(S.vol*100);el.style.setProperty('--p',(S.muted?0:S.vol*100)+'%');
  $$('[data-c=mute] use').forEach(u=>u.setAttribute('href',S.muted||S.vol===0?'#i-mute':S.vol<.5?'#i-vollow':'#i-vol'));
}

/* ================= playback ================= */
async function load(id,autoplay=true,pos=0){
  const t=tracks.get(id);if(!t)return;
  const src=await sourceFor(t);
  if(!src){toast('Fichier introuvable');return}
  if(curURL)URL.revokeObjectURL(curURL);
  curURL=src.blob?src.url:null;current=id;audio.src=src.url;
  audio.playbackRate=S.speed;audio.preservesPitch=true;
  if(pos)audio.addEventListener('loadedmetadata',()=>{try{audio.currentTime=pos}catch(e){}},{once:true});
  S.last=id;S.pos=pos;persistQueue();
  updateNow();
  if(autoplay){
    initAudio();if(actx&&actx.state==='suspended')actx.resume();
    try{await audio.play()}catch(e){}
    t.plays=(t.plays||0)+1;t.lastPlayed=Date.now();saveTrack(t);renderFacts();
    if(view.type==='recent')render();
  }
}
const shuffled=a=>{a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.random()*(i+1)|0;[a[i],a[j]]=[a[j],a[i]]}return a};
function playFrom(ids,i=0){
  if(!ids.length)return;
  baseQueue=ids.slice();
  if(S.shuffle){const first=ids[i];queue=[first,...shuffled(ids.filter((_,k)=>k!==i))];qi=0}
  else{queue=ids.slice();qi=i}
  load(queue[qi]);
}
function persistQueue(){S.queue=queue;S.base=baseQueue;S.qi=qi;save();renderQueue()}
function next(auto=false){
  if(!queue.length)return;
  if(auto&&S.repeat==='one'){audio.currentTime=0;audio.play();return}
  if(qi<queue.length-1)qi++;
  else if(S.repeat==='all'){qi=0;if(S.shuffle){queue=shuffled(queue)}}
  else{if(auto){audio.pause();audio.currentTime=0}return}
  load(queue[qi]);
}
function prev(){
  if(audio.currentTime>3||!queue.length){audio.currentTime=0;return}
  if(qi>0)qi--;else if(S.repeat==='all')qi=queue.length-1;else{audio.currentTime=0;return}
  load(queue[qi]);
}
function togglePlay(){
  if(!current){if(curList.length)playFrom(curList,0);else if(tracks.size)playFrom([...tracks.keys()],0);return}
  initAudio();if(actx&&actx.state==='suspended')actx.resume();
  if(!audio.getAttribute('src')){load(current,true,S.pos);return}
  audio.paused?audio.play().catch(()=>{}):audio.pause();
}
function toggleShuffle(){
  S.shuffle=!S.shuffle;
  if(current&&queue.length){
    if(S.shuffle){baseQueue=queue.slice();queue=[current,...shuffled(queue.filter(id=>id!==current))];qi=0}
    else{queue=baseQueue.length?baseQueue.slice():queue;qi=queue.indexOf(current);if(qi<0){queue.unshift(current);qi=0}}
    persistQueue();
  }
  save();updateControls();toast(S.shuffle?'Lecture aléatoire activée':'Lecture aléatoire désactivée',1400);
}
function cycleRepeat(){S.repeat={off:'all',all:'one',one:'off'}[S.repeat];save();updateControls();toast({off:'Répétition désactivée',all:'Répéter la file',one:'Répéter le titre'}[S.repeat],1400)}
function playNext(ids){ids=[].concat(ids);if(!queue.length){playFrom(ids,0);return}queue.splice(qi+1,0,...ids);persistQueue();toast(ids.length>1?`${ids.length} titres joués ensuite`:'Sera joué ensuite',1600)}
function addQueue(ids){ids=[].concat(ids);if(!queue.length){playFrom(ids,0);return}queue.push(...ids);persistQueue();toast('Ajouté à la file',1600)}
function seekBy(d){if(isFinite(audio.duration))audio.currentTime=clamp(audio.currentTime+d,0,audio.duration)}

audio.addEventListener('play',()=>{document.body.classList.remove('paused');updateControls()});
audio.addEventListener('pause',()=>{document.body.classList.add('paused');updateControls();S.pos=audio.currentTime;save()});
audio.addEventListener('ended',()=>{if(sleep.end){sleep.end=false;renderSleep();audio.currentTime=0;return}next(true)});
audio.addEventListener('error',()=>{if(!current)return;toast('Lecture impossible pour ce fichier');});
let lastPosSave=0;
audio.addEventListener('timeupdate',()=>{const n=Date.now();if(n-lastPosSave>4000){lastPosSave=n;S.pos=audio.currentTime;save();
    if('mediaSession' in navigator&&navigator.mediaSession.setPositionState&&isFinite(audio.duration)&&audio.duration>0){try{navigator.mediaSession.setPositionState({duration:audio.duration,playbackRate:audio.playbackRate,position:Math.min(audio.currentTime,audio.duration)})}catch(e){}}}
  if(sleep.until&&n>=sleep.until){sleep.until=0;audio.pause();renderSleep();toast('Bonne nuit ☾',2500)}});

/* ================= colors ================= */
let palette=['#6d5dfc','#ff4f9a','#22c7ff'];
function rgb2hsl(r,g,b){r/=255;g/=255;b/=255;const M=Math.max(r,g,b),m=Math.min(r,g,b);let h=0,s=0;const l=(M+m)/2;if(M!==m){const d=M-m;s=l>.5?d/(2-M-m):d/(M+m);h=M===r?(g-b)/d+(g<b?6:0):M===g?(b-r)/d+2:(r-g)/d+4;h/=6}return [h,s,l]}
function setPalette(cols){palette=cols;const r=document.documentElement.style;r.setProperty('--c1',cols[0]);r.setProperty('--c2',cols[1]);r.setProperty('--c3',cols[2])}
function paletteFrom(t){
  const u=coverFor(t);
  if(!u){const h=hash(t.album||t.title)%360;setPalette([`hsl(${h},70%,58%)`,`hsl(${(h+50)%360},72%,56%)`,`hsl(${(h+180)%360},70%,60%)`]);return}
  const img=new Image();img.onload=()=>{
    try{const c=document.createElement('canvas');c.width=c.height=36;const x=c.getContext('2d',{willReadFrequently:true});x.drawImage(img,0,0,36,36);
      const d=x.getImageData(0,0,36,36).data,bins=new Map();
      for(let i=0;i<d.length;i+=4){const [h,s,l]=rgb2hsl(d[i],d[i+1],d[i+2]);if(l<.1||l>.94)continue;const k=Math.floor(h*16);const w=s*s*(1-Math.abs(l-.5))+.015;const b=bins.get(k)||{w:0,h:0,s:0,l:0};b.w+=w;b.h+=h*w;b.s+=s*w;b.l+=l*w;bins.set(k,b)}
      const top=[...bins.values()].sort((a,b)=>b.w-a.w).slice(0,3).map(b=>[b.h/b.w,b.s/b.w,b.l/b.w]);
      if(!top.length)throw 0;
      while(top.length<3){const [h,s,l]=top[0];top.push([(h+.12*top.length)%1,s,l])}
      setPalette(top.map(([h,s,l])=>`hsl(${Math.round(h*360)},${Math.round(clamp(s,.4,.9)*100)}%,${Math.round(clamp(l,.45,.64)*100)}%)`));
    }catch(e){const h=hash(t.album||t.title)%360;setPalette([`hsl(${h},70%,58%)`,`hsl(${(h+50)%360},72%,56%)`,`hsl(${(h+180)%360},70%,60%)`])}
  };img.src=u;
}

/* ================= now playing UI ================= */
function artInto(el,t){const u=coverFor(t);el.innerHTML=t?(u?`<img src="${u}" alt="">`:`<div class="ph" style="background:${phBg(t.album||t.title)}"><svg class="i"><use href="#i-note"/></svg></div>`):`<div class="ph" style="background:radial-gradient(circle at 30% 30%,rgba(255,255,255,.35),transparent 40%),linear-gradient(135deg,var(--c1),var(--c2))"><svg class="i"><use href="#i-note"/></svg></div>`}
function updateNow(){
  const t=tracks.get(current);
  artInto($('#bCover'),t);artInto($('#npArt'),t);artInto($('#fsArt'),t);
  $('#bTitle').textContent=t?t.title:'—';
  $('#bArtist').innerHTML=t?`<a data-go="artist" data-k="${enc(t.artist)}">${esc(t.artist)}</a>`:'';
  $('#npTitle').textContent=t?t.title:'Rien en lecture';
  $('#npArtist').innerHTML=t?`<a data-go="artist" data-k="${enc(t.artist)}">${esc(t.artist)}</a>${t.album?` · <a data-go="album" data-k="${enc(t.album)}">${esc(t.album)}</a>`:''}`:'Importe ta musique pour commencer';
  $('#fsTitle').textContent=t?t.title:'';$('#fsArtist').textContent=t?t.artist:'';$('#fsAlbum').textContent=t?(t.album||''):'';
  const u=coverFor(t);$('#fsBg').style.backgroundImage=u?`url("${u}")`:'linear-gradient(135deg,var(--c1),var(--c2))';
  document.title=t?`${t.title} · ${t.artist}`:'Lecteur';
  if(t)paletteFrom(t);
  renderFacts();updateControls();markPlaying();renderQueue();renderSide();
  if('mediaSession' in navigator&&t){try{navigator.mediaSession.metadata=new MediaMetadata({title:t.title,artist:t.artist,album:t.album||'',artwork:u?[{src:u,sizes:'512x512',type:'image/jpeg'}]:[]})}catch(e){}}
}
function renderFacts(){
  const t=tracks.get(current);
  const n=queue[qi+1]?tracks.get(queue[qi+1]):null;
  $('#npNext').innerHTML=`<h4>À suivre</h4>${n?`<div class="qrow" data-qi="${qi+1}">${thumb(n,'thumb')}<div class="tx"><div class="ttl">${esc(n.title)}</div><div class="sub">${esc(n.artist)}</div></div></div>`:`<div class="mutedc" style="padding:6px">${S.repeat==='all'&&queue.length?'Retour au début de la file':'Fin de la file'}</div>`}`;
  $('#npFacts').innerHTML=t?`<h4>Détails</h4><div class="facts">
    <div>Écoutes<b>${t.plays||0}</b></div><div>Durée<b>${fmt(t.duration)}</b></div>
    <div>Année<b>${esc(t.year||'—')}</b></div><div>Genre<b>${esc(t.genre||'—')}</b></div>
    <div>Format<b>${esc((t.name.split('.').pop()||'').toUpperCase())}</b></div><div>Taille<b>${((t.size||0)/1048576).toFixed(1)} Mo</b></div></div>`:'';
  $('#npFacts').style.display=t?'':'none';
}
function updateControls(){
  const playing=!audio.paused;
  $$('[data-c=play] use').forEach(u=>u.setAttribute('href',playing?'#i-pause':'#i-play'));
  $$('[data-c=shuffle]').forEach(b=>b.classList.toggle('on',S.shuffle));
  $$('[data-c=repeat]').forEach(b=>{b.classList.toggle('on',S.repeat!=='off');b.querySelector('use').setAttribute('href',S.repeat==='one'?'#i-repeat1':'#i-repeat')});
  const t=tracks.get(current);
  $$('[data-c=like]').forEach(b=>{const on=!!(t&&t.liked);b.classList.toggle('on',on);b.querySelector('use').setAttribute('href',on?'#i-heartf':'#i-heart')});
  const hp=$('[data-act=playall] use');if(hp)hp.setAttribute('href',playing&&curList.includes(current)?'#i-pause':'#i-play');
  $$('[data-c^=tab-]').forEach(b=>b.classList.toggle('on',S.panelOpen&&b.dataset.c==='tab-'+S.tab));
  if('mediaSession' in navigator)navigator.mediaSession.playbackState=playing?'playing':'paused';
}
function markPlaying(){$$('.row').forEach(r=>r.classList.toggle('playing',r.dataset.id===current))}

/* ================= views ================= */
function defaultSort(type){return {library:{key:'added',dir:-1},liked:{key:'likedAt',dir:-1},recent:{key:'none'},playlist:{key:'none'},album:{key:'track',dir:1},artist:{key:'album',dir:1}}[type]||{key:'none'}}
function go(type,id){selected.clear();selMode=false;$('#app').classList.remove('selmode');view={type,id};vsort=defaultSort(type);search='';$('#q').value='';$('#app').classList.remove('menu');render();$('#scroll').scrollTop=0}
function baseTracks(){
  const all=[...tracks.values()];
  switch(view.type){
    case 'library':return all;
    case 'liked':return all.filter(t=>t.liked);
    case 'recent':return all.filter(t=>t.lastPlayed).sort((a,b)=>b.lastPlayed-a.lastPlayed).slice(0,150);
    case 'playlist':{const p=plById(view.id);return p?p.ids.map(id=>tracks.get(id)).filter(Boolean):[]}
    case 'album':return all.filter(t=>norm(t.album)===norm(view.id));
    case 'artist':return all.filter(t=>norm(t.artist)===norm(view.id));
  }return [];
}
function viewTracks(){
  let a=baseTracks();
  if(search){const q=norm(search);a=a.filter(t=>norm(`${t.title} ${t.artist} ${t.album} ${t.genre||''}`).includes(q))}
  const {key,dir}=vsort;
  if(key!=='none'){
    const g={title:t=>norm(t.title),artist:t=>norm(t.artist),album:t=>norm(t.album)+String(t.track||0).padStart(4,'0'),added:t=>t.added,likedAt:t=>t.likedAt||t.added,duration:t=>t.duration||0,track:t=>(t.disc||0)*1000+(t.track||0)}[key];
    a=a.slice().sort((x,y)=>{const p=g(x),q=g(y);return (p<q?-1:p>q?1:0)*dir});
  }
  return a;
}
function render(){
  renderNav();renderSide();
  const v=$('#view');
  if(!tracks.size&&view.type!=='playlist'){v.innerHTML=emptyHTML();curList=[];renderSelbar();return}
  v.innerHTML=(view.type==='albums'||view.type==='artists')?gridHTML():listHTML();
  markPlaying();updateControls();applySel();
}
function emptyHTML(){if(!ADMIN)return `<div class="empty"><div class="dropzone glass"><div class="orb"></div><h2>Bientôt de la musique ici</h2><p>Aucun titre n’a encore été publié.</p></div></div>`;return `<div class="empty"><div class="dropzone glass"><div class="orb"></div><h2>Ta musique, ici.</h2><p>Glisse des fichiers ou des dossiers n'importe où sur la page,<br>ou choisis-les ci-dessous, puis clique sur « Publier ».</p>
  <div class="acts"><button class="pill solid" data-act="files"><svg class="i"><use href="#i-upload"/></svg>Ajouter des fichiers</button>${coarse?'':'<button class="pill" data-act="dir"><svg class="i"><use href="#i-folder"/></svg>Importer un dossier</button>'}</div></div></div>`}
function heroArt(list,kind){
  if(kind==='liked')return `<div class="hero-art liked"><svg class="i"><use href="#i-heartf"/></svg></div>`;
  const urls=[...new Set(list.map(coverFor).filter(Boolean))];
  const r=kind==='artist'?' round':'';
  if(urls.length>=4&&kind!=='album'&&kind!=='artist')return `<div class="hero-art m4">${urls.slice(0,4).map(u=>`<img src="${u}" alt="">`).join('')}</div>`;
  if(urls.length)return `<div class="hero-art${r}"><img src="${urls[0]}" alt=""></div>`;
  return `<div class="hero-art ph${r}" style="background:${phBg(view.id||view.type)}"><svg class="i"><use href="#i-note"/></svg></div>`;
}
function listHTML(){
  const list=viewTracks(),all=baseTracks();curList=list.map(t=>t.id);
  const total=all.reduce((s,t)=>s+(t.duration||0),0);
  let eyebrow='',name='',extra='',acts='';
  switch(view.type){
    case 'library':eyebrow='Collection';name='Bibliothèque';break;
    case 'liked':eyebrow='Collection';name='Favoris';break;
    case 'recent':eyebrow='Historique';name='Écoutés récemment';break;
    case 'playlist':{const p=plById(view.id);eyebrow='Playlist';name=p?p.name:'Introuvable';
      if(ADMIN)acts=`<button class="ibtn" data-act="plcover" title="Changer la pochette"><svg class="i"><use href="#i-image"/></svg></button><button class="ibtn" data-act="plimport" title="Importer des fichiers dans cette playlist"><svg class="i"><use href="#i-upload"/></svg></button><button class="ibtn" data-act="plrename" title="Renommer"><svg class="i"><use href="#i-edit"/></svg></button><button class="ibtn" data-act="pldelete" title="Supprimer la playlist"><svg class="i"><use href="#i-trash"/></svg></button>`;break}
    case 'album':{eyebrow='Album';name=view.id;const a=all[0];if(a)extra=`<b><a data-go="artist" data-k="${enc(a.artist)}">${esc(a.artist)}</a></b>${a.year?' · '+esc(a.year):''} · `;break}
    case 'artist':eyebrow='Artiste';name=view.id;break;
  }
  if(ADMIN&&list.length)acts=`<button class="ibtn${selMode?' on':''}" data-act="select" title="Sélectionner plusieurs titres"><svg class="i"><use href="#i-select"/></svg></button>`+acts;
  const dateLbl=view.type==='recent'?'Écouté':'Ajouté';
  const dateOf=t=>ago(view.type==='recent'?t.lastPlayed:t.added);
  const sc=k=>vsort.key===k?' on':'';
  const arrow=k=>vsort.key===k?(vsort.dir>0?' ↑':' ↓'):'';
  const art=view.type==='playlist'&&plById(view.id)?plHeroArt(plById(view.id),all):heroArt(all,view.type);
  return `<section class="hero">${art}<div class="hero-info"><div class="eyebrow">${eyebrow}</div><h1>${esc(name)}</h1>
    <p>${extra}${all.length} titre${all.length>1?'s':''}${total?' · '+fmtLong(total):''}</p>
    <div class="hero-actions">${all.length?`<button class="play-big" data-act="playall" title="Lecture"><svg class="i"><use href="#i-play"/></svg></button><button class="ibtn${S.shuffle?' on':''}" data-act="shuffleall" title="Lecture aléatoire"><svg class="i"><use href="#i-shuffle"/></svg></button><button class="ibtn" data-act="queueall" title="Ajouter à la file"><svg class="i"><use href="#i-addq"/></svg></button>`:''}${acts}</div></div></section>
  ${list.length?`<div class="lh"><span class="c${sc('track')}" data-sort="track">#</span><span data-sort="title" class="${sc('title')}">Titre${arrow('title')}</span><span data-sort="album" class="${sc('album')}">Album${arrow('album')}</span><span data-sort="added" class="dcol${sc('added')}">${dateLbl}${arrow('added')}</span><span></span><span class="r${sc('duration')}" data-sort="duration">Durée${arrow('duration')}</span><span></span></div>
  <div class="list">${list.map((t,i)=>rowHTML(t,i,dateOf)).join('')}</div>`
  :`<div class="nores">${search?'Aucun résultat':view.type==='playlist'?'Playlist vide · fais glisser des titres sur son nom dans la barre latérale, ou importe des fichiers':view.type==='liked'?'Appuie sur ♥ pour ajouter des titres ici':'Rien pour l’instant'}</div>`}`;
}
function rowHTML(t,i,dateOf){
  return `<div class="row" draggable="${ADMIN}" data-id="${t.id}" data-i="${i}">
  <span class="num"><span class="n">${i+1}</span><svg class="i pi"><use href="#i-play"/></svg><span class="eqb"><i></i><i></i><i></i><i></i></span><span class="ck"></span></span>
  <div class="t">${thumb(t,'thumb')}<div class="tx"><div class="ttl">${esc(t.title)}</div><div class="sub"><a data-go="artist" data-k="${enc(t.artist)}">${esc(t.artist)}</a></div></div></div>
  <span class="alb">${t.album?`<a data-go="album" data-k="${enc(t.album)}">${esc(t.album)}</a>`:''}</span>
  <span class="date">${dateOf(t)}</span>
  <button class="ibtn sm like${t.liked?' on':''}" data-like="${t.id}" title="J'aime"><svg class="i"><use href="#i-heart${t.liked?'f':''}"/></svg></button>
  <span class="dur">${fmt(t.duration)}</span>
  <button class="ibtn sm more" title="Plus d'options"><svg class="i"><use href="#i-more"/></svg></button></div>`;
}
function groups(kind){
  const m=new Map();
  for(const t of tracks.values()){
    if(kind==='albums'&&!t.album)continue;
    const name=kind==='albums'?t.album:t.artist;const k=norm(name);
    if(!m.has(k))m.set(k,{name,sub:kind==='albums'?t.artist:'',ids:[],cover:null,year:t.year});
    const g=m.get(k);g.ids.push(t.id);if(!g.cover)g.cover=coverFor(t);
  }
  let arr=[...m.values()];
  if(search){const q=norm(search);arr=arr.filter(g=>norm(g.name+' '+g.sub).includes(q))}
  return arr.sort((a,b)=>norm(a.name).localeCompare(norm(b.name)));
}
function gridHTML(){
  const kind=view.type,arr=groups(kind),type=kind==='albums'?'album':'artist';curList=[];
  return `<div class="ghead"><div class="eyebrow">${arr.length} ${kind==='albums'?'album':'artiste'}${arr.length>1?'s':''}</div></div>
  ${arr.length?`<div class="grid">${arr.map(g=>`<div class="card${type==='artist'?' round':''}" data-type="${type}" data-k="${enc(g.name)}">
    <div class="art">${g.cover?`<img src="${g.cover}" alt="" loading="lazy">`:`<div class="ph" style="background:${phBg(g.name)}"><svg class="i"><use href="#i-${type==='artist'?'person':'note'}"/></svg></div>`}</div>
    <button class="fab" title="Lecture"><svg class="i"><use href="#i-play"/></svg></button>
    <b>${esc(g.name)}</b><small>${type==='album'?esc(g.sub):`${g.ids.length} titre${g.ids.length>1?'s':''}`}</small></div>`).join('')}</div>`
  :`<div class="nores">${search?'Aucun résultat':'Aucun album tagué'}</div>`}`;
}
function renderNav(){
  $$('#nav button').forEach(b=>b.classList.toggle('on',b.dataset.view===view.type));
  $('#cLib').textContent=tracks.size||'';
  const l=[...tracks.values()].filter(t=>t.liked).length;$('#cLiked').textContent=l||'';  const tot=[...tracks.values()].reduce((s,t)=>s+(t.duration||0),0);
  $('#stat').textContent=tracks.size?`${tracks.size} titres · ${fmtLong(tot)}`:'';
  if(ADMIN)renderPublish();
}
function renderSide(){
  const curPl=view.type==='playlist'?view.id:null;
  $('#pls').innerHTML=playlists.map(p=>{
    const urls=[...new Set(p.ids.map(id=>coverFor(tracks.get(id))).filter(Boolean))];
    const art=plCovers.has(p.id)?`<div class="mini"><img src="${plCovers.get(p.id)}" alt=""></div>`:urls.length>=4?`<div class="mini m4">${urls.slice(0,4).map(u=>`<img src="${u}" alt="">`).join('')}</div>`:urls.length?`<div class="mini"><img src="${urls[0]}" alt=""></div>`:`<div class="mini ph" style="background:${phBg(p.name)}"><svg class="i"><use href="#i-note"/></svg></div>`;
    const live=current&&p.ids.includes(current)&&!audio.paused;
    return `<button class="pl${p.id===curPl?' on':''}" data-pl="${p.id}">${art}<span class="tx"><b>${esc(p.name)}</b><small>${p.ids.length} titre${p.ids.length>1?'s':''}</small></span>${live?'<svg class="i live"><use href="#i-vol"/></svg>':''}</button>`;
  }).join('')||`<div class="mutedc">Aucune playlist</div>`;
}
function renderQueue(){
  const el=$('#pane-queue');if(!el)return;
  if(!queue.length){el.innerHTML='<div class="mutedc">La file d’attente est vide.<br>Lance un titre pour la remplir.</div>';return}
  const cur=tracks.get(queue[qi]),up=queue.slice(qi+1,qi+201);
  const q=(t,n,c)=>`<div class="qrow${c?' cur':''}" data-qi="${n}">${thumb(t,'thumb')}<div class="tx"><div class="ttl">${esc(t.title)}</div><div class="sub">${esc(t.artist)}</div></div>${c?'':`<button class="ibtn sm x" data-qrm="${n}" title="Retirer"><svg class="i"><use href="#i-close"/></svg></button>`}</div>`;
  el.innerHTML=`<div class="qh">En cours</div>${cur?q(cur,qi,true):''}
    <div class="qh">Ensuite · ${queue.length-qi-1}${up.length?'<button data-qclear>Vider</button>':''}</div>
    ${up.map((id,j)=>{const t=tracks.get(id);return t?q(t,qi+1+j):''}).join('')||'<div class="mutedc">Rien ensuite</div>'}`;
  renderFacts();
}

/* ================= panel / tabs ================= */
function applyPanel(){
  $('#app').classList.toggle('np',!S.panelOpen);
  $$('#tabs button').forEach(b=>b.classList.toggle('on',b.dataset.tab===S.tab));
  $$('.pane').forEach(p=>p.classList.toggle('on',p.id==='pane-'+S.tab));
  updateControls();
}
function openTab(tab){if(S.panelOpen&&S.tab===tab)S.panelOpen=false;else{S.panelOpen=true;S.tab=tab}save();applyPanel()}
$('#tabs').addEventListener('click',e=>{const b=e.target.closest('[data-tab]');if(b){S.tab=b.dataset.tab;save();applyPanel()}});

/* ================= sound pane ================= */
function buildSound(){
  $('#presets').innerHTML=Object.keys(PRESETS).map(n=>`<button class="chip" data-preset="${n}">${n}</button>`).join('');
  $('#eq').innerHTML=BANDS.map((f,i)=>`<div class="band"><span class="v" id="ev${i}"></span><input type="range" class="vr" min="-12" max="12" step="0.5" data-band="${i}"><span>${f>=1000?f/1000+'k':f}</span></div>`).join('');
  $('#speeds').innerHTML=[.5,.75,1,1.25,1.5,2].map(s=>`<button class="chip" data-speed="${s}">${s}×</button>`).join('');
  $('#sleeps').innerHTML=[['0','Désactivé'],['15','15 min'],['30','30 min'],['60','1 h'],['end','Fin du titre']].map(([v,l])=>`<button class="chip" data-sleep="${v}">${l}</button>`).join('');
  syncEq();syncSpeed();renderSleep();renderFx();
}
function syncEq(){
  BANDS.forEach((_,i)=>{const r=$(`[data-band="${i}"]`),v=S.eq[i]||0;r.value=v;r.style.setProperty('--p',((v+12)/24*100)+'%');$('#ev'+i).textContent=(v>0?'+':'')+v;if(eqNodes[i])eqNodes[i].gain.setTargetAtTime(v,actx.currentTime,.03)});
  $$('[data-preset]').forEach(b=>b.classList.toggle('on',b.dataset.preset===S.preset));
  $('#eqName').textContent=S.preset;
}
function renderFx(){
  $('#fxBox').innerHTML=`<div class="lbl">Effets audio <span>${S.fx?'égaliseur + visualiseur':'désactivés'}</span></div>
    <div class="chips"><button class="chip${S.fx?' on':''}" data-fx="1">Activés</button><button class="chip${S.fx?'':' on'}" data-fx="0">Désactivés</button></div>
    ${MOBILE?`<div class="mutedc" style="text-align:left;padding:0 4px 18px">Sur téléphone, laisse les effets désactivés pour que la musique continue quand tu quittes l’app ou verrouilles l’écran.</div>`:''}`;
  const eq=$('#eq');eq.style.opacity=S.fx?1:.35;eq.style.pointerEvents=S.fx?'':'none';
}
function syncSpeed(){$$('[data-speed]').forEach(b=>b.classList.toggle('on',+b.dataset.speed===S.speed));$('#spdVal').textContent=S.speed+'×';audio.playbackRate=S.speed}
$('#pane-sound').addEventListener('input',e=>{const r=e.target.closest('[data-band]');if(!r)return;S.eq[+r.dataset.band]=+r.value;S.preset='Personnalisé';syncEq();save()});
$('#pane-sound').addEventListener('click',e=>{
  const p=e.target.closest('[data-preset]');if(p){S.preset=p.dataset.preset;S.eq=PRESETS[S.preset].slice();syncEq();save()}
  const s=e.target.closest('[data-speed]');if(s){S.speed=+s.dataset.speed;syncSpeed();save()}
  const z=e.target.closest('[data-sleep]');if(z)setSleep(z.dataset.sleep);
  const fx=e.target.closest('[data-fx]');
  if(fx){const on=fx.dataset.fx==='1';if(on===S.fx)return;S.fx=on;save();renderFx();
    if(on){if(!audio.paused)initAudio();toast('Égaliseur et visualiseur activés',1600)}
    else toast(actx?'Recharge la page pour terminer la désactivation':'Effets désactivés : lecture en arrière-plan possible',2600)}
});
const sleep={until:0,end:false};
function setSleep(v){sleep.until=0;sleep.end=false;if(v==='end')sleep.end=true;else if(+v)sleep.until=Date.now()+v*60000;renderSleep();toast(v==='0'?'Minuteur désactivé':v==='end'?'Arrêt à la fin du titre':`Arrêt dans ${v} min`,1500)}
function renderSleep(){
  const left=sleep.until?Math.max(0,sleep.until-Date.now()):0;
  const txt=sleep.end?'fin du titre':left?fmt(left/1000):'';
  $('#sleepVal').textContent=txt;const b=$('#sleepBadge');b.textContent=txt?'☾ '+txt:'';b.classList.toggle('on',!!txt);
  $$('[data-sleep]').forEach(c=>c.classList.toggle('on',(c.dataset.sleep==='end'&&sleep.end)||(c.dataset.sleep==='0'&&!sleep.end&&!sleep.until)));
}

/* ================= pochettes de playlist ================= */
function plHeroArt(p,list){
  if(!ADMIN)return plCovers.has(p.id)?`<div class="hero-art"><img src="${plCovers.get(p.id)}" alt=""></div>`:heroArt(list,'playlist');
  const edit=`<div class="edit"><svg class="i"><use href="#i-image"/></svg>${p.cover||p.coverPath?'Changer la pochette':'Ajouter une pochette'}</div>`;
  if(plCovers.has(p.id))return `<div class="hero-art editable" data-act="plcover"><img src="${plCovers.get(p.id)}" alt="">${edit}</div>`;
  return heroArt(list,'playlist').replace('class="hero-art','data-act="plcover" class="hero-art editable').replace(/<\/div>$/,edit+'</div>');
}
const imgIn=Object.assign(document.createElement('input'),{type:'file',accept:'image/*',hidden:true});document.body.append(imgIn);
let coverTarget=null;
function pickPlCover(id){coverTarget=id;imgIn.value='';imgIn.click()}
imgIn.addEventListener('change',async()=>{const f=imgIn.files[0];if(!f||!coverTarget)return;
  const b=await shrinkSquare(f);if(!b){toast('Image illisible');return}setPlCover(coverTarget,b)});
async function setPlCover(id,blob){
  const p=plById(id);if(!p)return;
  if(plCovers.has(id)){URL.revokeObjectURL(plCovers.get(id));plCovers.delete(id)}
  delete p.coverPath;if(blob){p.cover=blob;p.coverRev=uid().slice(-6);plCovers.set(id,URL.createObjectURL(blob))}else delete p.cover;
  await DB.put('playlists',p);render();toast(blob?'Pochette mise à jour':'Pochette retirée',1400);
}
async function shrinkSquare(file){ // recadre au centre en carré, 800 px max
  try{const bmp=await createImageBitmap(file);const s=Math.min(bmp.width,bmp.height),n=Math.min(800,s);
    const c=document.createElement('canvas');c.width=c.height=n;
    c.getContext('2d').drawImage(bmp,(bmp.width-s)/2,(bmp.height-s)/2,s,s,0,0,n,n);
    return await new Promise(r=>c.toBlob(b=>r(b),'image/jpeg',.9))}catch(e){return null}
}

/* ================= sélection multiple ================= */
function enterSelect(ids=[]){selMode=true;selected.clear();ids.forEach(id=>selected.add(id));$('#app').classList.add('selmode');render()}
function exitSelect(rerender=true){selMode=false;selected.clear();selAnchor=-1;$('#app').classList.remove('selmode');if(rerender)render();else renderSelbar()}
function applySel(){$$('.row').forEach(r=>r.classList.toggle('sel',selected.has(r.dataset.id)));renderSelbar()}
const selIds=()=>curList.filter(id=>selected.has(id));
function renderSelbar(){
  const bar=$('#selbar'),n=selected.size,show=selMode||n>1;
  bar.classList.toggle('on',show);if(!show)return;
  const all=curList.length&&curList.every(id=>selected.has(id));
  const dis=n?'':' disabled style="opacity:.4"';
  bar.innerHTML=`<span class="cnt">${n} sélectionné${n>1?'s':''}</span>
    <button class="pill ghost" data-sb="all">${all?'Aucun':'Tout'}</button>
    <span class="sep"></span>
    <button class="ibtn sm" data-sb="queue" title="Ajouter à la file"${dis}><svg class="i"><use href="#i-addq"/></svg></button>
    <button class="ibtn sm" data-sb="pl" title="Ajouter à une playlist"${dis}><svg class="i"><use href="#i-plist"/></svg></button>
    ${view.type==='playlist'?`<button class="ibtn sm" data-sb="unpl" title="Retirer de cette playlist"${dis}><svg class="i"><use href="#i-close"/></svg></button>`:''}
    <button class="pill danger" data-sb="del"${dis}><svg class="i"><use href="#i-trash"/></svg><span class="lbl-m">Supprimer</span></button>
    <button class="ibtn sm" data-sb="exit" title="Terminer (Échap)"><svg class="i"><use href="#i-close"/></svg></button>`;
}
$('#selbar').addEventListener('click',async e=>{
  const b=e.target.closest('[data-sb]');if(!b||b.disabled)return;const k=b.dataset.sb;
  if(k==='all'){const all=curList.every(id=>selected.has(id));selected.clear();if(!all)curList.forEach(id=>selected.add(id));applySel()}
  else if(k==='queue')addQueue(selIds());
  else if(k==='pl'){const r=b.getBoundingClientRect();plMenu(r.left,r.top-10,selIds())}
  else if(k==='unpl'){const p=plById(view.id);if(!p)return;const gone=new Set(selected);p.ids=p.ids.filter(x=>!gone.has(x));await DB.put('playlists',p);
    toast(`${gone.size} titre${gone.size>1?'s':''} retiré${gone.size>1?'s':''} de la playlist`,1500);selected.clear();render()}
  else if(k==='del')deleteTracks(selIds());
  else if(k==='exit')exitSelect();
});
function bulkMenu(x,y){
  const ids=selIds();
  openMenu(x,y,[{head:`${ids.length} titres`},{i:'play',l:'Lire',f:()=>playFrom(ids,0)},{i:'playnext',l:'Lire ensuite',f:()=>playNext(ids)},{i:'addq',l:'Ajouter à la file',f:()=>addQueue(ids)},
    {i:'plist',l:'Ajouter à une playlist…',f:()=>setTimeout(()=>plMenu(x,y,ids),0)},
    ...(view.type==='playlist'?[{i:'close',l:'Retirer de cette playlist',f:async()=>{const p=plById(view.id);const gone=new Set(ids);p.ids=p.ids.filter(x=>!gone.has(x));await DB.put('playlists',p);selected.clear();render()}}]:[]),
    '-',{i:'trash',l:`Supprimer ${ids.length} titres`,danger:1,f:()=>deleteTracks(ids)}]);
}

/* ================= library ops ================= */
async function toggleLike(id){
  const t=tracks.get(id);if(!t)return;t.liked=!t.liked;t.likedAt=t.liked?Date.now():0;saveTrack(t);
  $$(`[data-like="${id}"]`).forEach(b=>{b.classList.toggle('on',t.liked);b.querySelector('use').setAttribute('href',t.liked?'#i-heartf':'#i-heart')});
  updateControls();renderNav();if(view.type==='liked')render();
}
async function newPlaylist(ids=[]){
  const name=await ask({title:'Nouvelle playlist',value:`Playlist n° ${playlists.length+1}`,ok:'Créer'});if(!name)return null;
  const p={id:uid(),name,ids:[...new Set(ids)],created:Date.now()};playlists.push(p);await DB.put('playlists',p);renderSide();
  toast(ids.length?`Ajouté à « ${name} »`:`« ${name} » créée`,1600);return p;
}
async function addToPl(pid,ids){
  const p=plById(pid);if(!p)return;const before=p.ids.length;ids.forEach(id=>{if(!p.ids.includes(id))p.ids.push(id)});
  await DB.put('playlists',p);renderSide();if(view.type==='playlist'&&view.id===pid)render();
  const n=p.ids.length-before;toast(n?`Ajouté à « ${p.name} »`:'Déjà dans la playlist',1500);
}
async function removeFromPl(pid,id){const p=plById(pid);if(!p)return;p.ids=p.ids.filter(x=>x!==id);await DB.put('playlists',p);render()}
const deleteTrack=id=>deleteTracks([id]);
async function deleteTracks(ids){
  ids=ids.filter(id=>tracks.has(id));if(!ids.length)return;
  const one=ids.length===1,t=tracks.get(ids[0]);
  if(!await ask({title:one?'Supprimer ce titre ?':`Supprimer ${ids.length} titres ?`,
    text:`${one?`« ${t.title} » sera retiré`:'Ils seront retirés'} de la bibliothèque et de toutes les playlists. Ils disparaîtront du site à la prochaine publication ; tes fichiers d’origine ne sont pas touchés.`,ok:'Supprimer',input:false,danger:true}))return;
  const del=new Set(ids);
  for(const id of ids){
    try{await DB.del('tracks',id);await DB.del('files',id)}catch(e){}
    tracks.delete(id);selected.delete(id);
    if(covers.has(id)){URL.revokeObjectURL(covers.get(id));covers.delete(id)}
  }
  rebuildAlbumCovers();
  for(const p of playlists)if(p.ids.some(x=>del.has(x))){p.ids=p.ids.filter(x=>!del.has(x));DB.put('playlists',p)}
  const curGone=current&&del.has(current);
  const before=queue.slice(0,qi).filter(x=>del.has(x)).length;
  queue=queue.filter(x=>!del.has(x));baseQueue=baseQueue.filter(x=>!del.has(x));qi-=before;
  if(curGone){audio.pause();audio.removeAttribute('src');current=null;qi=Math.min(qi,queue.length-1);updateNow()}
  if(!tracks.size)exitSelect(false);
  persistQueue();render();toast(one?'Titre supprimé':`${ids.length} titres supprimés`,1600);
}

/* ================= import ================= */
const AUDIO_RE=/\.(mp3|flac|m4a|mp4|aac|ogg|oga|opus|wav|wave|webm|weba|aiff?|caf)$/i;
function readTags(file){return new Promise(res=>{if(!window.jsmediatags)return res({});try{jsmediatags.read(file,{onSuccess:t=>res(t.tags||{}),onError:()=>res({})})}catch(e){res({})}})}
function getDuration(file){return new Promise(res=>{const a=new Audio(),u=URL.createObjectURL(file);let done=false;const fin=v=>{if(done)return;done=true;URL.revokeObjectURL(u);res(v)};a.preload='metadata';a.onloadedmetadata=()=>fin(isFinite(a.duration)?a.duration:0);a.onerror=()=>fin(0);setTimeout(()=>fin(0),8000);a.src=u})}
async function shrink(blob){try{const bmp=await createImageBitmap(blob);const s=Math.min(1,600/Math.max(bmp.width,bmp.height));const c=document.createElement('canvas');c.width=Math.round(bmp.width*s);c.height=Math.round(bmp.height*s);c.getContext('2d').drawImage(bmp,0,0,c.width,c.height);return await new Promise(r=>c.toBlob(b=>r(b),'image/jpeg',.9))}catch(e){return null}}
function parseName(n){const base=n.replace(/\.[^.]+$/,'').replace(/_/g,' ').replace(/^\d{1,3}[\s.\-_]+/,'').trim();const m=base.split(/\s+[-–—]\s+/);return m.length>1?{artist:m[0].trim(),title:m.slice(1).join(' - ').trim()}:{title:base}}
let importing=false;
async function importFiles(files,plId=null){
  files=[...files].filter(f=>f&&(AUDIO_RE.test(f.name)||(f.type||'').startsWith('audio/')));
  if(!files.length){toast('Aucun fichier audio trouvé');return}
  if(!DB.db){toast('Stockage local indisponible dans ce navigateur');return}
  importing=true;
  const byKey=new Map([...tracks.values()].map(t=>[t.name+'|'+t.size,t.id]));
  const added=[];let done=0,skipped=0,tooBig=0;const tt=toast(`Import… 0 / ${files.length}`,0);
  const pool=files.slice();
  const work=async f=>{
    const key=f.name+'|'+f.size;
    if(f.size>95*1048576){tooBig++;return}
    if(byKey.has(key)){added.push(byKey.get(key));skipped++;return}
    byKey.set(key,'pending');
    const [tags,dur]=await Promise.all([readTags(f),getDuration(f)]);
    const pn=parseName(f.name);
    let cover=null;if(tags.picture&&tags.picture.data){cover=await shrink(new Blob([new Uint8Array(tags.picture.data)],{type:tags.picture.format||'image/jpeg'}))}
    const tn=parseInt(String(tags.track||'').split('/')[0])||0;
    const t={id:uid(),name:f.name,size:f.size,type:f.type,title:(tags.title||pn.title||f.name).trim(),artist:(tags.artist||pn.artist||UNKNOWN).trim(),album:(tags.album||'').trim(),
      year:String(tags.year||'').slice(0,4),genre:(typeof tags.genre==='string'?tags.genre:'').trim(),track:tn,duration:dur,cover,added:Date.now(),plays:0,liked:false};
    await DB.put('files',{id:t.id,blob:f});await DB.put('tracks',t);
    tracks.set(t.id,t);byKey.set(key,t.id);if(cover)covers.set(t.id,URL.createObjectURL(cover));added.push(t.id);
  };
  await Promise.all(Array.from({length:4},async()=>{while(pool.length){const f=pool.shift();try{await work(f)}catch(e){console.warn('import',f.name,e)}done++;tt.set(`Import… ${done} / ${files.length}`)}}));
  tt.close();rebuildAlbumCovers();importing=false;
  if(tooBig)toast(`${tooBig} fichier${tooBig>1?'s':''} ignoré${tooBig>1?'s':''} : plus de 95 Mo (limite GitHub)`,4000);
  if(plId)await addToPl(plId,added);
  const n=added.length-skipped;
  toast(n?`${n} titre${n>1?'s':''} ajouté${n>1?'s':''}${skipped?` · ${skipped} déjà présent${skipped>1?'s':''}`:''}`:'Déjà dans ta bibliothèque',2600);
  render();updateNow();
}
let pendingPl=null;
function pick(kind,pl=null){pendingPl=pl;(kind==='dir'?$('#dirIn'):$('#fileIn')).click()}
['#fileIn','#dirIn'].forEach(s=>$(s).addEventListener('change',e=>{importFiles(e.target.files,pendingPl);e.target.value='';pendingPl=null}));
$$('[data-import]').forEach(b=>b.addEventListener('click',()=>pick(b.dataset.import)));

/* drag & drop files */
let dragDepth=0;const isFiles=e=>[...(e.dataTransfer?.types||[])].includes('Files');
addEventListener('dragenter',e=>{if(!ADMIN||!isFiles(e))return;e.preventDefault();dragDepth++;$('#dropHint').textContent=view.type==='playlist'&&plById(view.id)?`Ajout à « ${plById(view.id).name} »`:'Fichiers ou dossiers entiers';$('#drop').classList.add('on')});
addEventListener('dragleave',e=>{if(!ADMIN||!isFiles(e))return;if(--dragDepth<=0){dragDepth=0;$('#drop').classList.remove('on')}});
addEventListener('dragover',e=>{if(ADMIN&&isFiles(e))e.preventDefault()});
addEventListener('drop',async e=>{
  if(!ADMIN||!isFiles(e))return;e.preventDefault();dragDepth=0;$('#drop').classList.remove('on');
  const entries=[...e.dataTransfer.items].map(i=>i.webkitGetAsEntry&&i.webkitGetAsEntry()).filter(Boolean);
  const plain=[...e.dataTransfer.files];
  let files=[];
  if(entries.length){
    const walk=async en=>{if(en.isFile){const f=await new Promise(r=>en.file(r,()=>r(null)));if(f)files.push(f)}else if(en.isDirectory){const rd=en.createReader();let b;do{b=await new Promise(r=>rd.readEntries(r,()=>r([])));for(const c of b)await walk(c)}while(b.length)}};
    for(const en of entries)await walk(en);
  }
  if(!files.length)files=plain;
  importFiles(files,view.type==='playlist'?view.id:null);
});
/* drag tracks to playlists */
$('#view').addEventListener('dragstart',e=>{const r=e.target.closest('.row');if(!r)return;e.dataTransfer.setData('text/x-track',r.dataset.id);e.dataTransfer.effectAllowed='copy'});
$('#pls').addEventListener('dragover',e=>{const p=e.target.closest('.pl');if(!p||![...e.dataTransfer.types].includes('text/x-track'))return;e.preventDefault();$$('.pl.dropping').forEach(x=>x!==p&&x.classList.remove('dropping'));p.classList.add('dropping')});
$('#pls').addEventListener('dragleave',e=>{const p=e.target.closest('.pl');if(p&&!p.contains(e.relatedTarget))p.classList.remove('dropping')});
$('#pls').addEventListener('drop',e=>{const p=e.target.closest('.pl');const id=e.dataTransfer.getData('text/x-track');$$('.pl.dropping').forEach(x=>x.classList.remove('dropping'));if(p&&id){e.preventDefault();e.stopPropagation();addToPl(p.dataset.pl,[id])}});

/* ================= menus & dialogs ================= */
const menu=$('#menu');
function openMenu(x,y,items){
  menu.innerHTML=items.map((it,i)=>it==='-'?'<hr>':it.head?`<div class="mh">${esc(it.head)}</div>`:`<button data-mi="${i}" class="${it.danger?'danger':''}"><svg class="i"><use href="#i-${it.i}"/></svg>${esc(it.l)}</button>`).join('');
  menu.classList.add('on');
  const r=menu.getBoundingClientRect();
  menu.style.left=clamp(x,8,innerWidth-r.width-8)+'px';menu.style.top=clamp(y,8,innerHeight-r.height-8)+'px';
  menu.onclick=e=>{const b=e.target.closest('[data-mi]');if(!b)return;const it=items[+b.dataset.mi];closeMenu();it.f&&it.f()};
}
const closeMenu=()=>menu.classList.remove('on');
addEventListener('pointerdown',e=>{if(!menu.contains(e.target))closeMenu()},true);
addEventListener('blur',closeMenu);$('#scroll').addEventListener('scroll',closeMenu,{passive:true});
function plMenu(x,y,ids){
  openMenu(x,y,[{head:'Ajouter à'},{i:'plus',l:'Nouvelle playlist…',f:()=>newPlaylist(ids)},...(playlists.length?['-']:[]),...playlists.map(p=>({i:'plist',l:p.name,f:()=>addToPl(p.id,ids)}))]);
}
function trackMenu(x,y,id){
  const t=tracks.get(id);if(!t)return;
  const items=[
    {i:'play',l:'Lire',f:()=>{const k=curList.indexOf(id);k>=0?playFrom(curList,k):playFrom([id],0)}},
    {i:'playnext',l:'Lire ensuite',f:()=>playNext(id)},
    {i:'addq',l:'Ajouter à la file',f:()=>addQueue(id)},'-',
    ...(ADMIN?[{i:'plist',l:'Ajouter à une playlist…',f:()=>setTimeout(()=>plMenu(x,y,[id]),0)}]:[]),
    {i:t.liked?'heartf':'heart',l:t.liked?'Retirer des favoris':'Ajouter aux favoris',f:()=>toggleLike(id)}];
  if(ADMIN&&view.type==='playlist')items.push({i:'close',l:'Retirer de cette playlist',f:()=>removeFromPl(view.id,id)});
  items.push('-');
  if(t.album)items.push({i:'album',l:'Voir l’album',f:()=>go('album',t.album)});
  items.push({i:'person',l:'Voir l’artiste',f:()=>go('artist',t.artist)});
  if(ADMIN)items.push({i:'edit',l:'Modifier les infos…',f:()=>editTrack(id)},{i:'select',l:'Sélectionner plusieurs…',f:()=>enterSelect([id])},'-',{i:'trash',l:'Supprimer de la bibliothèque',danger:1,f:()=>deleteTrack(id)});
  openMenu(x,y,items);
}
async function editTrack(id){
  const t=tracks.get(id);if(!t)return;
  const v=await ask({title:'Modifier les infos',fields:[['title','Titre',t.title],['artist','Artiste',t.artist],['album','Album',t.album]],ok:'Enregistrer'});
  if(!v)return;t.title=v.title||t.title;t.artist=v.artist||UNKNOWN;t.album=v.album;await DB.put('tracks',t);rebuildAlbumCovers();render();if(id===current)updateNow();
}
function ask({title,text='',value='',ok='OK',input=true,danger=false,fields=null,cancel=true}){
  return new Promise(res=>{
    const m=$('#modal');
    const body=fields?fields.map(([k,l,v,tp])=>`<div class="lbl" style="margin:12px 2px 6px">${esc(l)}</div><input class="field" data-k="${k}" type="${tp||'text'}" value="${esc(v)}" maxlength="300" autocomplete="off" spellcheck="false">`).join(''):input?`<input class="field" value="${esc(value)}" maxlength="80">`:'';
    m.innerHTML=`<div class="dialog glass"><h3>${esc(title)}</h3>${text?`<p>${esc(text)}</p>`:''}${body}<div class="dact">${cancel?'<button class="pill ghost" data-r="0">Annuler</button>':''}<button class="pill ${danger?'danger':'solid'}" data-r="1">${esc(ok)}</button></div></div>`;
    m.classList.add('on');
    const inp=m.querySelector('input');if(inp)setTimeout(()=>{inp.focus();inp.select()},60);
    const val=()=>fields?Object.fromEntries([...m.querySelectorAll('[data-k]')].map(i=>[i.dataset.k,i.value.trim()])):input?(inp.value.trim()||null):true;
    const done=v=>{m.classList.remove('on');m.onclick=null;removeEventListener('keydown',kd,true);res(v)};
    const kd=e=>{if(e.key==='Escape'){e.preventDefault();e.stopPropagation();done(null)}else if(e.key==='Enter'){e.preventDefault();e.stopPropagation();done(val())}};
    addEventListener('keydown',kd,true);
    m.onclick=e=>{if(e.target===m)return done(null);const r=e.target.closest('[data-r]');if(r)done(r.dataset.r==='1'?val():null)};
  });
}
function toast(msg,ms=2400){
  const el=document.createElement('div');el.className='toast glass';el.textContent=msg;$('#toasts').append(el);
  requestAnimationFrame(()=>requestAnimationFrame(()=>el.classList.add('on')));
  const close=()=>{el.classList.remove('on');setTimeout(()=>el.remove(),350)};if(ms)setTimeout(close,ms);
  return {set:m=>el.textContent=m,close};
}

/* ================= events ================= */
$('#nav').addEventListener('click',e=>{const b=e.target.closest('[data-view]');if(b)go(b.dataset.view)});
$('#newPl').addEventListener('click',async()=>{const p=await newPlaylist();if(p)go('playlist',p.id)});
$('#pls').addEventListener('click',e=>{const b=e.target.closest('[data-pl]');if(b)go('playlist',b.dataset.pl)});
$('#pls').addEventListener('contextmenu',e=>{const b=e.target.closest('[data-pl]');if(!b)return;e.preventDefault();const p=plById(b.dataset.pl);
  openMenu(e.clientX,e.clientY,[{i:'play',l:'Lire',f:()=>playFrom(p.ids.filter(id=>tracks.has(id)),0)},{i:'shuffle',l:'Lecture aléatoire',f:()=>{S.shuffle=true;save();const ids=p.ids.filter(id=>tracks.has(id));playFrom(ids,Math.random()*ids.length|0)}},...(ADMIN?['-',{i:'edit',l:'Renommer…',f:()=>renamePl(p.id)},{i:'image',l:'Changer la pochette…',f:()=>pickPlCover(p.id)},...(p.cover||p.coverPath?[{i:'close',l:'Retirer la pochette',f:()=>setPlCover(p.id,null)}]:[]),{i:'trash',l:'Supprimer',danger:1,f:()=>deletePl(p.id)}]:[])])});
async function renamePl(id){const p=plById(id);const n=await ask({title:'Renommer la playlist',value:p.name,ok:'Renommer'});if(!n)return;p.name=n;await DB.put('playlists',p);render()}
async function deletePl(id){const p=plById(id);if(!await ask({title:`Supprimer « ${p.name} » ?`,text:'Les titres restent dans ta bibliothèque.',ok:'Supprimer',input:false,danger:true}))return;playlists=playlists.filter(x=>x.id!==id);if(plCovers.has(id)){URL.revokeObjectURL(plCovers.get(id));plCovers.delete(id)}await DB.del('playlists',id);if(view.type==='playlist'&&view.id===id)go('library');else renderSide()}

let qT;$('#q').addEventListener('input',e=>{clearTimeout(qT);qT=setTimeout(()=>{search=e.target.value.trim();if(search&&['recent'].includes(view.type)){view={type:'library'};vsort=defaultSort('library')}render()},120)});

document.addEventListener('click',e=>{
  const g=e.target.closest('[data-go]');if(g){e.preventDefault();e.stopPropagation();if($('#fs').classList.contains('on'))toggleFs(false);go(g.dataset.go,decodeURIComponent(g.dataset.k));return}
  const c=e.target.closest('[data-c]');if(!c)return;
  const a=c.dataset.c;
  if(a==='play')togglePlay();else if(a==='next')next();else if(a==='prev')prev();
  else if(a==='shuffle')toggleShuffle();else if(a==='repeat')cycleRepeat();
  else if(a==='like'){current&&toggleLike(current)}
  else if(a==='fs')toggleFs();
  else if(a==='mute'){S.muted=!S.muted;if(!S.muted&&S.vol===0)S.vol=.5;applyVol();save()}
  else if(a.startsWith('tab-'))openTab(a.slice(4));
},true);

$('#view').addEventListener('click',e=>{
  const a=e.target.closest('[data-act]');
  if(a){const k=a.dataset.act;
    if(k==='files'||k==='dir')return pick(k);
    if(k==='playall'){if(current&&curList.includes(current))togglePlay();else playFrom(curList,0);return}
    if(k==='shuffleall'){if(!S.shuffle){S.shuffle=true;save()}playFrom(curList,Math.random()*curList.length|0);render();return}
    if(k==='queueall')return addQueue(curList);
    if(k==='select')return selMode?exitSelect():enterSelect();
    if(k==='plcover')return pickPlCover(view.id);
    if(k==='plimport')return pick('files',view.id);
    if(k==='plrename')return renamePl(view.id);
    if(k==='pldelete')return deletePl(view.id);
  }
  const s=e.target.closest('[data-sort]');if(s){const k=s.dataset.sort;vsort=vsort.key===k?{key:k,dir:-vsort.dir}:{key:k,dir:k==='added'||k==='duration'?-1:1};render();return}
  const card=e.target.closest('.card');
  if(card){const k=decodeURIComponent(card.dataset.k),type=card.dataset.type;
    if(e.target.closest('.fab')){const ids=[...tracks.values()].filter(t=>norm(type==='album'?t.album:t.artist)===norm(k)).sort((x,y)=>type==='album'?(x.track||0)-(y.track||0):0).map(t=>t.id);playFrom(ids,0);return}
    return go(type,k)}
  const row=e.target.closest('.row');if(!row)return;const id=row.dataset.id;
  const lk=e.target.closest('[data-like]');if(lk)return toggleLike(id);
  const mo=e.target.closest('.more');if(mo){const r=mo.getBoundingClientRect();return trackMenu(r.right-230,r.bottom+4,id)}
  const i=+row.dataset.i;
  if(ADMIN&&(selMode||e.ctrlKey||e.metaKey||e.shiftKey)){
    if(e.shiftKey&&selAnchor>=0){const a=Math.min(selAnchor,i),b=Math.max(selAnchor,i);for(let k=a;k<=b;k++)selected.add(curList[k])}
    else{selected.has(id)?selected.delete(id):selected.add(id);selAnchor=i}
    applySel();return;
  }
  if(e.target.closest('.num,.thumb')||coarse)return playFrom(curList,i);
  selected.clear();selected.add(id);selAnchor=i;applySel();
});
$('#view').addEventListener('dblclick',e=>{const row=e.target.closest('.row');if(row&&!selMode&&!e.shiftKey&&!e.ctrlKey&&!e.metaKey&&!e.target.closest('button,a'))playFrom(curList,+row.dataset.i)});
$('#view').addEventListener('contextmenu',e=>{
  const row=e.target.closest('.row');
  if(row){e.preventDefault();const id=row.dataset.id;
    if(selected.size>1&&selected.has(id))return bulkMenu(e.clientX,e.clientY);
    if(!selMode){selected.clear();selected.add(id);selAnchor=+row.dataset.i;applySel()}
    return trackMenu(e.clientX,e.clientY,id)}
  const card=e.target.closest('.card');
  if(card){e.preventDefault();const k=decodeURIComponent(card.dataset.k),type=card.dataset.type;const ids=[...tracks.values()].filter(t=>norm(type==='album'?t.album:t.artist)===norm(k)).map(t=>t.id);
    openMenu(e.clientX,e.clientY,[{i:'play',l:'Lire',f:()=>playFrom(ids,0)},{i:'playnext',l:'Lire ensuite',f:()=>playNext(ids)},{i:'addq',l:'Ajouter à la file',f:()=>addQueue(ids)},{i:'plist',l:'Ajouter à une playlist…',f:()=>setTimeout(()=>plMenu(e.clientX,e.clientY,ids),0)}])}
});
const onQueueClick=e=>{
  if(e.target.closest('[data-qclear]')){queue=queue.slice(0,qi+1);persistQueue();return}
  const rm=e.target.closest('[data-qrm]');if(rm){const n=+rm.dataset.qrm;queue.splice(n,1);persistQueue();return}
  const r=e.target.closest('[data-qi]');if(r){qi=+r.dataset.qi;load(queue[qi])}
};
$('#pane-queue').addEventListener('click',onQueueClick);$('#npNext').addEventListener('click',onQueueClick);
$('#mbtn').addEventListener('click',()=>$('#app').classList.toggle('menu'));
$('#scrim').addEventListener('click',()=>$('#app').classList.remove('menu'));

/* seek & volume */
let seeking=false;
$$('.seek').forEach(r=>{
  r.addEventListener('input',()=>{seeking=true;const d=audio.duration||0;const t=r.value/1000*d;$$('.tcur').forEach(x=>x.textContent=fmt(t));$$('.seek').forEach(x=>{x.value=r.value;x.style.setProperty('--p',r.value/10+'%')})});
  r.addEventListener('change',()=>{if(isFinite(audio.duration))audio.currentTime=r.value/1000*audio.duration;seeking=false});
});
$('#vol').addEventListener('input',e=>{S.vol=e.target.value/100;S.muted=false;applyVol();save()});
$('#vol').addEventListener('wheel',e=>{e.preventDefault();S.vol=clamp(S.vol+(e.deltaY<0?.05:-.05),0,1);S.muted=false;applyVol();save()},{passive:false});

/* fullscreen immersive */
function toggleFs(force){const f=$('#fs');const on=force??!f.classList.contains('on');f.classList.toggle('on',on)}

/* keyboard */
addEventListener('keydown',e=>{
  if($('#modal').classList.contains('on'))return;
  const tg=e.target;
  if(tg.matches('input:not([type=range]),textarea')){if(e.key==='Escape'){tg.value='';tg.dispatchEvent(new Event('input'));tg.blur()}return}
  if(e.ctrlKey||e.metaKey||e.altKey){const k=e.key.toLowerCase();
    if((e.ctrlKey||e.metaKey)&&k==='k'){e.preventDefault();$('#q').focus()}
    if(ADMIN&&(e.ctrlKey||e.metaKey)&&k==='a'&&curList.length&&!tg.matches('input')){e.preventDefault();curList.forEach(id=>selected.add(id));applySel()}
    return}
  const isRange=tg.matches('input[type=range]');
  switch(e.code){
    case 'Space':e.preventDefault();togglePlay();break;
    case 'ArrowRight':if(isRange)return;e.preventDefault();e.shiftKey?next():seekBy(5);break;
    case 'ArrowLeft':if(isRange)return;e.preventDefault();e.shiftKey?prev():seekBy(-5);break;
    case 'ArrowUp':if(isRange)return;e.preventDefault();S.vol=clamp(S.vol+.05,0,1);S.muted=false;applyVol();save();break;
    case 'ArrowDown':if(isRange)return;e.preventDefault();S.vol=clamp(S.vol-.05,0,1);applyVol();save();break;
    case 'KeyM':S.muted=!S.muted;applyVol();save();break;
    case 'KeyL':current&&toggleLike(current);break;
    case 'KeyS':toggleShuffle();break;
    case 'KeyR':cycleRepeat();break;
    case 'KeyF':toggleFs();break;
    case 'KeyN':next();break;
    case 'KeyP':prev();break;
    case 'Slash':e.preventDefault();$('#q').focus();break;
    case 'Escape':closeMenu();toggleFs(false);$('#app').classList.remove('menu');if(selMode||selected.size)exitSelect();break;
    case 'Delete':case 'Backspace':if(ADMIN&&selected.size){e.preventDefault();deleteTracks(selIds().length?selIds():[...selected])}break;
    case 'Enter':{const s=$('.row.sel');if(s)playFrom(curList,+s.dataset.i);break}
  }
});

/* media session */
if('mediaSession' in navigator){
  const h={play:()=>togglePlay(),pause:()=>audio.pause(),previoustrack:prev,nexttrack:()=>next(),seekbackward:()=>seekBy(-10),seekforward:()=>seekBy(10),seekto:d=>{if(d.seekTime!=null)audio.currentTime=d.seekTime}};
  for(const k in h){try{navigator.mediaSession.setActionHandler(k,h[k])}catch(e){}}
}

/* ================= render loop: progress + visualizers ================= */
const vizC=$('#viz'),fsC=$('#fsViz');let lastSec=-1,sleepTick=0,smooth=new Float32Array(128);
function fit(c){const r=c.getBoundingClientRect(),d=Math.min(devicePixelRatio||1,2);const w=Math.max(1,Math.round(r.width*d)),h=Math.max(1,Math.round(r.height*d));if(c.width!==w||c.height!==h){c.width=w;c.height=h}return [w,h,d]}
function bandsOf(n){const out=new Float32Array(n),max=Math.floor(freq.length*.7);for(let i=0;i<n;i++){const a=Math.floor(Math.pow(i/n,2)*max),b=Math.max(a+1,Math.floor(Math.pow((i+1)/n,2)*max));let s=0;for(let k=a;k<b;k++)s+=freq[k];out[i]=s/(b-a)/255}return out}
function grad(x,w){const g=x.createLinearGradient(0,0,w,0);g.addColorStop(0,palette[0]);g.addColorStop(.5,palette[1]);g.addColorStop(1,palette[2]);return g}
function drawPanel(){
  if(!vizC.offsetParent)return;const [w,h,d]=fit(vizC);const x=vizC.getContext('2d');x.clearRect(0,0,w,h);
  const n=44,b=bandsOf(n),gap=3*d,bw=(w-gap*(n-1))/n;x.fillStyle=grad(x,w);
  for(let i=0;i<n;i++){smooth[i]+=(b[i]-smooth[i])*.35;const v=Math.max(.04,Math.pow(smooth[i],1.3));const bh=Math.max(bw,v*h*.95);x.globalAlpha=.55+v*.45;x.beginPath();x.roundRect(i*(bw+gap),(h-bh)/2,bw,bh,bw/2);x.fill()}
  x.globalAlpha=1;
}
function drawFs(){
  const [w,h,d]=fit(fsC);const x=fsC.getContext('2d');x.clearRect(0,0,w,h);
  const n=72,b=bandsOf(n),gap=4*d,bw=(w-gap*(n-1))/n;const g=x.createLinearGradient(0,h,0,0);g.addColorStop(0,palette[0]);g.addColorStop(.6,palette[1]);g.addColorStop(1,'rgba(255,255,255,.9)');x.fillStyle=g;
  for(let i=0;i<n;i++){const k=64+(i%64);smooth[k]+=(b[i]-smooth[k])*.3;const v=Math.pow(smooth[k],1.4);const bh=Math.max(2*d,v*h);x.beginPath();x.roundRect(i*(bw+gap),h-bh,bw,bh+bw,bw/2);x.fill()}
  let bass=0;for(let i=1;i<8;i++)bass+=freq[i];bass/=7*255;$('#fsArt').style.transform=`scale(${1+Math.pow(bass,3)*.06})`;
}
function frame(){
  requestAnimationFrame(frame);
  const d=audio.duration,t=audio.currentTime;
  if(!seeking&&isFinite(d)&&d>0){const p=t/d;$$('.seek').forEach(r=>{r.value=p*1000;r.style.setProperty('--p',p*100+'%')});const s=Math.floor(t);if(s!==lastSec){lastSec=s;$$('.tcur').forEach(x=>x.textContent=fmt(t));$$('.tdur').forEach(x=>x.textContent=fmt(d))}}
  if(analyser){analyser.getByteFrequencyData(freq)}else freq.fill(0);
  drawPanel();if($('#fs').classList.contains('on'))drawFs();
  const now=Date.now();if(now-sleepTick>1000){sleepTick=now;if(sleep.until){if(now>=sleep.until){sleep.until=0;audio.pause();toast('Bonne nuit ☾',2500)}renderSleep()}}
}

/* ================= publication GitHub (page de gestion uniquement) ================= */
let base={version:0,tracks:[],playlists:[]}, publishing=false;
const isDirty=()=>catKey(serialize())!==catKey(base);
function detectRepo(){
  const h=location.hostname.match(/^([^.]+)\.github\.io$/i);if(!h)return {};
  const seg=location.pathname.split('/').filter(Boolean);
  return {owner:h[1],repo:seg.length&&seg[0]!=='conf'?seg[0]:`${h[1]}.github.io`};
}
function ghConf(){const c=LS.get('conf-gh',{}),d=detectRepo();return {owner:c.owner||d.owner||'',repo:c.repo||d.repo||'',branch:c.branch||'main',token:ghToken,api:(c.api||'https://api.github.com').replace(/\/$/,'')}}
async function gh(path,opt={}){
  const c=ghConf();
  const r=await fetch(`${c.api}/repos/${c.owner}/${c.repo}${path}`,{method:opt.method||'GET',body:opt.body,cache:'no-store',
    headers:{Authorization:`Bearer ${c.token}`,Accept:'application/vnd.github+json',...(opt.body?{'Content-Type':'application/json'}:{})}});
  if(!r.ok){let m='';try{m=(await r.json()).message||''}catch(e){}throw new Error(`${r.status}${m?' '+m:''}`)}
  return r.status===204?null:r.json();
}
const toB64=blob=>new Promise((res,rej)=>{const r=new FileReader();r.onload=()=>res(String(r.result).split(',')[1]||'');r.onerror=()=>rej(r.error);r.readAsDataURL(blob)});
const fromB64=s=>new TextDecoder().decode(Uint8Array.from(atob(String(s).replace(/\s/g,'')),ch=>ch.charCodeAt(0)));
async function fetchRemoteCatalog(){
  const c=ghConf();
  if(c.token&&c.owner&&c.repo){
    try{const j=await gh(`/contents/data/catalog.json?ref=${encodeURIComponent(c.branch)}`);const x=JSON.parse(fromB64(j.content));return {version:x.version||0,tracks:x.tracks||[],playlists:x.playlists||[]}}
    catch(e){if(/^404/.test(e.message))return {version:0,tracks:[],playlists:[]};toast('GitHub : '+e.message,4500)}
  }
  return fetchSiteCatalog();
}
async function adoptCatalog(cat){
  const prev=new Map([...tracks.values()].map(t=>[t.id,t]));
  for(const u of [...covers.values(),...plCovers.values()])if(String(u).startsWith('blob:'))URL.revokeObjectURL(u);
  tracks.clear();covers.clear();plCovers.clear();
  await DB.clear('tracks').catch(()=>{});await DB.clear('playlists').catch(()=>{});
  for(const c of cat.tracks){const t=fromCatalog(c),o=prev.get(t.id);
    if(o){t.liked=o.liked;t.likedAt=o.likedAt;t.plays=o.plays;t.lastPlayed=o.lastPlayed}
    tracks.set(t.id,t);setCoverURL(t);await DB.put('tracks',t).catch(()=>{})}
  playlists=cat.playlists.map(plFromCatalog);
  for(const p of playlists){setPlCoverURL(p);await DB.put('playlists',p).catch(()=>{})}
  try{const keys=await DB.run('files','readonly',x=>x.getAllKeys());for(const k of keys)if(!tracks.has(k))await DB.del('files',k)}catch(e){}
  base={version:cat.version||0,tracks:cat.tracks,playlists:cat.playlists};LS.set('conf-base',base);
}
function renderPublish(){
  const b=$('#pubBtn');if(!b)return;const d=isDirty();
  b.disabled=!d||publishing;b.classList.toggle('dirty',d&&!publishing);
  b.querySelector('span').textContent=publishing?'Publication…':d?'Publier':'Site à jour';
  b.title=d?'Envoyer les modifications sur GitHub':'Aucune modification à publier';
}
async function ghSettings(){
  const c=ghConf();
  const v=await ask({title:'Réglages GitHub',text:'Compte, dépôt et branche GitHub où le site est publié.',
    fields:[['owner','Compte GitHub',c.owner],['repo','Dépôt',c.repo],['branch','Branche',c.branch]],ok:'Enregistrer'});
  if(!v)return false;
  LS.set('conf-gh',{...LS.get('conf-gh',{}),owner:v.owner,repo:v.repo,branch:v.branch||'main'});
  try{const r=await gh('');if(r.permissions&&r.permissions.push===false)throw new Error('ce compte ne peut pas écrire dans le dépôt');toast(`Connecté à ${r.full_name||v.repo}`,2500);return true}
  catch(e){toast('Connexion GitHub impossible : '+e.message,5000);return false}
}
async function publish(){
  if(publishing)return;
  let c=ghConf();if(!c.token){lockNow();return}if(!c.owner||!c.repo){if(!await ghSettings())return;c=ghConf()}
  const cat=serialize();if(catKey(cat)===catKey(base)){toast('Rien à publier',1500);return}
  publishing=true;renderPublish();const tt=toast('Préparation…',0);
  try{
    const ref=await gh(`/git/ref/heads/${encodeURIComponent(c.branch)}`),head=ref.object.sha;
    const commit=await gh(`/git/commits/${head}`);
    const uploads=[];
    for(const t of tracks.values()){
      if(!t.file){const f=await DB.get('files',t.id);if(!f||!f.blob)throw new Error(`fichier local manquant pour « ${t.title} »`);uploads.push({path:trackPath(t),blob:f.blob})}
      if(t.cover&&!t.coverPath)uploads.push({path:trackCoverPath(t),blob:t.cover});
    }
    for(const p of playlists)if(p.cover&&!p.coverPath)uploads.push({path:plCoverPath(p),blob:p.cover});
    const tree=[],mb=uploads.reduce((s,u)=>s+u.blob.size,0)/1048576;let i=0;
    for(const u of uploads){
      tt.set(`Envoi ${++i} / ${uploads.length}${mb>=1?` · ${mb.toFixed(0)} Mo au total`:''}…`);
      const b=await gh('/git/blobs',{method:'POST',body:JSON.stringify({content:await toB64(u.blob),encoding:'base64'})});
      tree.push({path:u.path,mode:'100644',type:'blob',sha:b.sha});
    }
    const version=Date.now(),out={version,updated:new Date(version).toISOString(),...cat};
    const cb=await gh('/git/blobs',{method:'POST',body:JSON.stringify({content:await toB64(new Blob([JSON.stringify(out,null,1)])),encoding:'base64'})});
    tree.push({path:'data/catalog.json',mode:'100644',type:'blob',sha:cb.sha});
    const paths=x=>new Set([...x.tracks.flatMap(t=>[t.file,t.cover]),...x.playlists.map(p=>p.cover)].filter(Boolean));
    const keep=paths(cat);for(const p of paths(base))if(!keep.has(p))tree.push({path:p,mode:'100644',type:'blob',sha:null});
    tt.set('Enregistrement sur GitHub…');
    const nt=await gh('/git/trees',{method:'POST',body:JSON.stringify({base_tree:commit.tree.sha,tree})});
    const added=uploads.filter(u=>u.path.startsWith('music/')).length;
    const nc=await gh('/git/commits',{method:'POST',body:JSON.stringify({message:`Catalogue : ${cat.tracks.length} titres, ${cat.playlists.length} playlists${added?` (+${added} nouveaux)`:''}`,tree:nt.sha,parents:[head]})});
    await gh(`/git/refs/heads/${encodeURIComponent(c.branch)}`,{method:'PATCH',body:JSON.stringify({sha:nc.sha})});
    for(const t of tracks.values()){t.file=trackPath(t);if(t.cover&&!t.coverPath)t.coverPath=trackCoverPath(t);await DB.put('tracks',t)}
    for(const p of playlists){if(p.cover&&!p.coverPath)p.coverPath=plCoverPath(p);await DB.put('playlists',p)}
    base={version,...serialize()};LS.set('conf-base',base);
    tt.close();toast('Publié ✓ Le site sera à jour dans 1 à 2 minutes',4500);
  }catch(e){tt.close();console.error(e);toast('Publication échouée : '+e.message,7000)}
  publishing=false;renderPublish();
}

/* ================= connexion (page de gestion) =================
   Le jeton GitHub est chiffré (AES-GCM, clé dérivée du mot de passe par PBKDF2)
   et stocké uniquement dans ce navigateur. Aucun mot de passe n'est écrit dans le code. */
let ghToken='';
const b2a=u=>btoa(String.fromCharCode(...u)), a2b=s=>Uint8Array.from(atob(s),c=>c.charCodeAt(0));
async function deriveKey(pw,salt){
  const k=await crypto.subtle.importKey('raw',new TextEncoder().encode(pw),'PBKDF2',false,['deriveKey']);
  return crypto.subtle.deriveKey({name:'PBKDF2',salt,iterations:310000,hash:'SHA-256'},k,{name:'AES-GCM',length:256},false,['encrypt','decrypt']);
}
async function sealToken(tok,pw){
  const salt=crypto.getRandomValues(new Uint8Array(16)),iv=crypto.getRandomValues(new Uint8Array(12));
  const ct=new Uint8Array(await crypto.subtle.encrypt({name:'AES-GCM',iv},await deriveKey(pw,salt),new TextEncoder().encode(tok)));
  LS.set('conf-key',{salt:b2a(salt),iv:b2a(iv),ct:b2a(ct)});
}
async function openToken(pw){
  const v=LS.get('conf-key',null);if(!v)throw new Error('none');
  return new TextDecoder().decode(await crypto.subtle.decrypt({name:'AES-GCM',iv:a2b(v.iv)},await deriveKey(pw,a2b(v.salt)),a2b(v.ct)));
}
function lockNow(){try{sessionStorage.removeItem('conf-session')}catch(e){}ghToken='';location.reload()}
function loginScreen(){
  return new Promise(resolve=>{
    let sess=null;try{sess=sessionStorage.getItem('conf-session')}catch(e){}
    if(sess&&LS.get('conf-key',null)){ghToken=sess;return resolve()}
    const el=document.createElement('div');el.className='login';document.body.append(el);
    if(!(window.crypto&&crypto.subtle)){el.innerHTML=`<div class="lg-card glass"><div class="orb"></div><h2>Connexion impossible</h2><p>Ouvre cette page depuis son adresse en ligne (https://…github.io/…/conf/), pas depuis un fichier sur ton ordinateur.</p></div>`;return}
    const finish=tok=>{ghToken=tok;try{sessionStorage.setItem('conf-session',tok)}catch(e){}
      el.classList.add('out');setTimeout(()=>el.remove(),450);resolve()};
    const draw=mode=>{
      const c=ghConf(),legacy=(LS.get('conf-gh',{}).token)||'';
      el.innerHTML=mode==='login'
        ?`<form class="lg-card glass" autocomplete="off"><div class="orb"></div><h2>Bon retour</h2><p>Entre ton mot de passe pour continuer.</p>
          <div class="lg-f"><input class="field" type="password" name="pw" placeholder="Mot de passe" autocomplete="current-password" required></div>
          <button class="pill solid">Entrer</button><div class="lg-err"></div>
          <button type="button" class="lg-link" data-reset>Mot de passe oublié ? Réinitialiser l’accès</button></form>`
        :`<form class="lg-card glass" autocomplete="off"><div class="orb"></div><h2>Première connexion</h2>
          <p>Colle ton jeton GitHub et choisis un mot de passe. Le jeton est chiffré avec ce mot de passe et reste uniquement dans ce navigateur.</p>
          <div class="lg-f"><label>Compte GitHub</label><input class="field" name="owner" value="${esc(c.owner)}" required spellcheck="false"></div>
          <div class="lg-f"><label>Dépôt</label><input class="field" name="repo" value="${esc(c.repo)}" required spellcheck="false"></div>
          <div class="lg-f"><label>Jeton d’accès GitHub</label><input class="field" type="password" name="tok" value="${esc(legacy)}" placeholder="github_pat_…" required spellcheck="false"></div>
          <div class="lg-f"><label>Nouveau mot de passe</label><input class="field" type="password" name="pw" minlength="8" placeholder="8 caractères minimum" autocomplete="new-password" required></div>
          <div class="lg-f"><input class="field" type="password" name="pw2" placeholder="Confirmer le mot de passe" autocomplete="new-password" required></div>
          <button class="pill solid">Continuer</button><div class="lg-err"></div>
          ${LS.get('conf-key',null)?'<button type="button" class="lg-link" data-back>Retour</button>':''}</form>`;
      const f=el.querySelector('form'),err=el.querySelector('.lg-err'),btn=f.querySelector('.pill');
      setTimeout(()=>f.querySelector('input:not([value]),input[value=""]')?.focus(),80);
      const fail=m=>{err.textContent=m;f.classList.remove('shake');void f.offsetWidth;f.classList.add('shake');btn.disabled=false;btn.textContent=mode==='login'?'Entrer':'Continuer'};
      el.querySelector('[data-reset]')?.addEventListener('click',async()=>{
        if(await ask({title:'Réinitialiser l’accès ?',text:'Il faudra recoller ton jeton GitHub et choisir un nouveau mot de passe. Tes brouillons non publiés sont conservés.',ok:'Réinitialiser',input:false,danger:true})){
          try{localStorage.removeItem('conf-key')}catch(e){}draw('setup')}});
      el.querySelector('[data-back]')?.addEventListener('click',()=>draw('login'));
      f.addEventListener('submit',async e=>{
        e.preventDefault();const d=Object.fromEntries(new FormData(f));btn.disabled=true;btn.textContent='Vérification…';err.textContent='';
        if(mode==='login'){
          let tok;try{tok=await openToken(d.pw)}catch(x){return fail('Mot de passe incorrect')}
          ghToken=tok;
          try{await gh('')}catch(x){if(/^40[13]/.test(x.message))return fail('Ce jeton n’est plus accepté par GitHub. Réinitialise l’accès avec un nouveau jeton.');toast('GitHub injoignable : '+x.message,4000)}
          return finish(tok);
        }
        if(d.pw!==d.pw2)return fail('Les mots de passe ne correspondent pas');
        if(d.pw.length<8)return fail('8 caractères minimum');
        LS.set('conf-gh',{...LS.get('conf-gh',{}),owner:d.owner.trim(),repo:d.repo.trim(),token:undefined});
        ghToken=d.tok.trim();
        try{const r=await gh('');if(r.permissions&&r.permissions.push===false)return fail('Ce compte ne peut pas écrire dans le dépôt')}
        catch(x){return fail(/^404/.test(x.message)?'Dépôt introuvable : vérifie le compte et le nom du dépôt':/^401/.test(x.message)?'Jeton refusé par GitHub':'GitHub : '+x.message)}
        await sealToken(ghToken,d.pw);
        finish(ghToken);
      });
    };
    draw(LS.get('conf-key',null)?'login':'setup');
  });
}
function gearMenu(){
  const r=$('#ghBtn').getBoundingClientRect();
  openMenu(r.left,r.top-170,[
    {i:'gear',l:'Réglages du dépôt…',f:ghSettings},
    {i:'edit',l:'Changer de jeton ou de mot de passe…',f:()=>{try{sessionStorage.removeItem('conf-session');localStorage.removeItem('conf-key')}catch(e){}location.reload()}},
    '-',{i:'lock',l:'Verrouiller',f:lockNow}]);
}

/* ================= boot ================= */
(async()=>{
  try{await DB.open()}catch(e){toast('Stockage local indisponible',5000)}
  if(ADMIN){
    await loginScreen();
    base=LS.get('conf-base',base);
    const [ts,ps]=await Promise.all([DB.all('tracks'),DB.all('playlists')]);
    ts.forEach(t=>{tracks.set(t.id,t);setCoverURL(t)});
    playlists=ps.sort((a,b)=>a.created-b.created);playlists.forEach(setPlCoverURL);
    const remote=await fetchRemoteCatalog();
    if(remote){
      if(catKey(remote)!==catKey(base)){
        if((!ts.length&&!ps.length)||!isDirty())await adoptCatalog(remote);
        else toast('Le site a changé depuis ta dernière publication. Tes modifications locales sont gardées : publier remplacera la version en ligne.',7000);
      }else if(remote.version!==base.version){base.version=remote.version;LS.set('conf-base',base)}
    }
    $('#pubBtn').addEventListener('click',publish);$('#ghBtn').addEventListener('click',gearMenu);
    setInterval(renderPublish,1500);
  }else{
    const [cat,meta]=await Promise.all([fetchSiteCatalog(),DB.all('meta')]);
    const m=new Map(meta.map(x=>[x.id,x]));
    for(const c of (cat?cat.tracks:[])){
      const t=fromCatalog(c),x=m.get(t.id)||{};
      Object.assign(t,{liked:!!x.liked,likedAt:x.likedAt||0,plays:x.plays||0,lastPlayed:x.lastPlayed||0});
      tracks.set(t.id,t);setCoverURL(t);
    }
    playlists=(cat?cat.playlists:[]).map(plFromCatalog);playlists.forEach(setPlCoverURL);
  }
  rebuildAlbumCovers();
  if(innerWidth<=1000)S.panelOpen=false;
  applyPanel();applyVol();buildSound();
  queue=(S.queue||[]).filter(id=>tracks.has(id));baseQueue=(S.base||[]).filter(id=>tracks.has(id));
  if(S.last&&tracks.has(S.last)){current=S.last;qi=queue.indexOf(current);if(qi<0){queue=[current];qi=0}
    const src=await sourceFor(tracks.get(current));
    if(src){curURL=src.blob?src.url:null;audio.src=src.url;audio.playbackRate=S.speed;const p=S.pos||0;audio.addEventListener('loadedmetadata',()=>{try{audio.currentTime=p}catch(e){}},{once:true})}}
  else qi=-1;
  render();updateNow();updateControls();
  requestAnimationFrame(frame);
  try{navigator.storage&&navigator.storage.persist&&navigator.storage.persist()}catch(e){}
})();
