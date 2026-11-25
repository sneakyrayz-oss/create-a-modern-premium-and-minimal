/**
 * RAYZ — Gaming Video Editor Portfolio
 * 9:16 Vertical Video Previews, Velocity & Flow Montages
 * Direct Discord Contact: rayz_69
 */

const PROJECTS = [
  {
    id: "showreel-gaming",
    title: "2026 Gaming Montage & Velocity Reel",
    category: "Featured Reel",
    duration: "01:12",
    durationSeconds: 72,
    role: "Mobile Editor · After Motion Z · Gold Motion",
    summary:
      "Curated montage of high-speed gaming velocity cuts, frame-locked beat syncs, clean gun audio transients, and 9:16 vertical mobile edits.",
    thumbnail: "assets/showreel-hero.jpg",
    videoUrl: "",
    specs: ["9:16 & 4K", "60 FPS", "Velocity Sync", "After Motion Z"],
    cuts: [
      { time: 0.0, label: "01 — Opening Velocity Hook", image: "assets/showreel-hero.jpg", zoom: [1.0, 1.1], panY: [0, -15] },
      { time: 0.22, label: "02 — Sniper Headshot Impact", image: "assets/project-documentary.jpg", zoom: [1.05, 1.18], panY: [-10, 10] },
      { time: 0.45, label: "03 — Katana Neon Slash", image: "assets/project-music.jpg", zoom: [1.0, 1.12], panY: [10, -10] },
      { time: 0.68, label: "04 — Clutch Defuse Beat Drop", image: "assets/project-commercial.jpg", zoom: [1.08, 1.15], panY: [0, 12] },
      { time: 0.88, label: "05 — Champion Victory Finale", image: "assets/project-brand.jpg", zoom: [1.02, 1.09], panY: [-10, 5] },
    ],
    featuredOnly: true,
  },
  {
    id: "overdrive-velocity",
    title: "Overdrive Velocity",
    category: "Velocity Sync",
    duration: "00:32",
    durationSeconds: 32,
    role: "After Motion Z · Flow Ramp",
    summary:
      "Hyper-fluid speed ramp montage cut to heavy 808 bass kicks, seamless screen rotation wipes, and impact color flashes.",
    thumbnail: "assets/showreel-hero.jpg",
    videoUrl: "",
    specs: ["9:16 Vertical", "60 FPS", "After Motion Z", "Bass Drop Sync"],
    cuts: [
      { time: 0.0, label: "Speed Ramp Entry", image: "assets/showreel-hero.jpg", zoom: [1.0, 1.14], panY: [0, -20] },
      { time: 0.4, label: "Transient Peak", image: "assets/project-music.jpg", zoom: [1.12, 1.05], panY: [15, -5] },
      { time: 0.75, label: "Clean Exit Blur", image: "assets/project-brand.jpg", zoom: [1.02, 1.1], panY: [-5, 15] },
    ],
  },
  {
    id: "shadow-clutch",
    title: "Shadow Clutch 1v4",
    category: "Tactical FPS",
    duration: "00:28",
    durationSeconds: 28,
    role: "Gaming Editor · Kill Sync",
    summary:
      "Frame-accurate match cuts synchronized to weapon triggers, clean kill banners, and sharp directional audio foley.",
    thumbnail: "assets/project-commercial.jpg",
    videoUrl: "",
    specs: ["9:16 1080p", "60 FPS", "Gaming Editor", "Gun Foley"],
    cuts: [
      { time: 0.0, label: "Corridor Peeking", image: "assets/project-commercial.jpg", zoom: [1.0, 1.08], panY: [-10, 10] },
      { time: 0.45, label: "Flick Shot Impact", image: "assets/project-documentary.jpg", zoom: [1.16, 1.06], panY: [10, -10] },
      { time: 0.78, label: "Defuse Timer Tick", image: "assets/project-creator.jpg", zoom: [1.04, 1.12], panY: [0, 10] },
    ],
  },
  {
    id: "sniper-pulse",
    title: "Sniper Pulse Flow",
    category: "Montage Edit",
    duration: "00:45",
    durationSeconds: 45,
    role: "Mobile Editor · Pacing",
    summary:
      "Quickscope headshot flow with tactile screen recoil shakes, rhythmic velocity slowdowns, and subtle violet edge rim lighting.",
    thumbnail: "assets/project-documentary.jpg",
    videoUrl: "",
    specs: ["9:16 Vertical", "60 FPS", "Mobile Editor", "Recoil Sync"],
    cuts: [
      { time: 0.0, label: "Breath Hold", image: "assets/project-documentary.jpg", zoom: [1.0, 1.06], panY: [-8, 12] },
      { time: 0.35, label: "Scope Alignment", image: "assets/showreel-hero.jpg", zoom: [1.15, 1.05], panY: [12, -8] },
      { time: 0.72, label: "Triple Collateral", image: "assets/project-music.jpg", zoom: [1.05, 1.18], panY: [0, 14] },
    ],
  },
  {
    id: "neon-strike",
    title: "Neon Katana Strike",
    category: "Anime Gaming",
    duration: "00:38",
    durationSeconds: 38,
    role: "After Motion Z · Visual FX",
    summary:
      "Cinematic sword slice impact synchronized to hard trap beats with monochrome contrast and sharp violet energy trail lines.",
    thumbnail: "assets/project-music.jpg",
    videoUrl: "",
    specs: ["9:16 4K", "60 FPS", "After Motion Z", "Edge Glow CC"],
    cuts: [
      { time: 0.0, label: "Blade Unsheathe", image: "assets/project-music.jpg", zoom: [1.0, 1.1], panY: [10, -15] },
      { time: 0.42, label: "Mid-Air Slash", image: "assets/project-music-stage.jpg", zoom: [1.14, 1.04], panY: [-10, 10] },
      { time: 0.76, label: "Impact Freeze Frame", image: "assets/showreel-hero.jpg", zoom: [1.02, 1.12], panY: [5, -10] },
    ],
  },
  {
    id: "apex-overcharge",
    title: "Apex Overcharge",
    category: "Movement Reel",
    duration: "00:41",
    durationSeconds: 41,
    role: "Gold Motion · Speed Ramping",
    summary:
      "Superglide mechanics and wall bounce chains cut to kinetic drum fills, directional pans, and crisp hit shield audio.",
    thumbnail: "assets/project-brand.jpg",
    videoUrl: "",
    specs: ["9:16 Vertical", "60 FPS", "Gold Motion", "Spatial Sound"],
    cuts: [
      { time: 0.0, label: "Slide Hop Momentum", image: "assets/project-brand.jpg", zoom: [1.0, 1.09], panY: [-12, 12] },
      { time: 0.48, label: "Wall Bounce Hit", image: "assets/project-commercial.jpg", zoom: [1.12, 1.03], panY: [14, -6] },
      { time: 0.8, label: "Squad Wipe Badge", image: "assets/project-creator.jpg", zoom: [1.02, 1.1], panY: [0, 10] },
    ],
  },
  {
    id: "creator-highlight",
    title: "Streamer Clutch Reel",
    category: "Creator Highlight",
    duration: "00:35",
    durationSeconds: 35,
    role: "Gaming Editor · Viral Hook",
    summary:
      "Shorts-optimized edit with instant 2-second narrative hook, streamer webcam punch-in, and punchy kill sound design.",
    thumbnail: "assets/project-creator.jpg",
    videoUrl: "",
    specs: ["9:16 YouTube", "60 FPS", "Gaming Editor", "Retention Cut"],
    cuts: [
      { time: 0.0, label: "Hook & Setup", image: "assets/project-creator.jpg", zoom: [1.0, 1.08], panY: [-8, 12] },
      { time: 0.44, label: "1v1 Duel Peak", image: "assets/showreel-hero.jpg", zoom: [1.13, 1.04], panY: [10, -10] },
      { time: 0.78, label: "Hype Climax", image: "assets/project-documentary.jpg", zoom: [1.02, 1.1], panY: [-6, 8] },
    ],
  },
  {
    id: "cyber-showdown",
    title: "Cyber Arena Showdown",
    category: "Esports Short",
    duration: "00:29",
    durationSeconds: 29,
    role: "Mobile Editor · Color Grade",
    summary:
      "Monochrome tournament play with high dynamic range highlights, subtle purple beam accents, and sub-bass impact risers.",
    thumbnail: "assets/project-music-stage.jpg",
    videoUrl: "",
    specs: ["9:16 4K", "60 FPS", "Mobile Editor", "Grade & CC"],
    cuts: [
      { time: 0.0, label: "Stage Spotlight", image: "assets/project-music-stage.jpg", zoom: [1.0, 1.1], panY: [12, -12] },
      { time: 0.38, label: "Flick Shot Beat Drop", image: "assets/project-music.jpg", zoom: [1.15, 1.06], panY: [-10, 10] },
      { time: 0.72, label: "Victory Walk", image: "assets/project-commercial.jpg", zoom: [1.03, 1.12], panY: [5, -5] },
    ],
  },
  {
    id: "battle-royale-finale",
    title: "Battle Royale Victory",
    category: "Victory Cut",
    duration: "00:36",
    durationSeconds: 36,
    role: "Gold Motion · Climax Flow",
    summary:
      "Final zone 1v1 showdown with muted ambient tension, heartbeat riser sound design, and clean slow-mo victory hit.",
    thumbnail: "assets/showreel-hero.jpg",
    videoUrl: "",
    specs: ["9:16 Vertical", "60 FPS", "Gold Motion", "Climax Mix"],
    cuts: [
      { time: 0.0, label: "Final Zone Closing", image: "assets/showreel-hero.jpg", zoom: [1.0, 1.08], panY: [0, -15] },
      { time: 0.45, label: "High Ground Peek", image: "assets/project-brand.jpg", zoom: [1.12, 1.05], panY: [10, -10] },
      { time: 0.76, label: "Victory Screen Freeze", image: "assets/project-creator.jpg", zoom: [1.04, 1.14], panY: [-8, 8] },
    ],
  },
];

// ============================================================================
// Portfolio Grid Rendering (8 9:16 Vertical Video Previews)
// ============================================================================

const portfolioGrid = document.getElementById("portfolio-grid");
const revealObserver = createRevealObserver();

function createRevealObserver() {
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReduced || !("IntersectionObserver" in window)) {
    document.querySelectorAll("[data-reveal]").forEach((el) => {
      el.classList.add("is-visible");
    });
    return null;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const delay = Number(entry.target.dataset.delay || 0);
        if (delay > 0) {
          entry.target.style.transitionDelay = `${delay}ms`;
        }
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -36px 0px" }
  );

  document.querySelectorAll("[data-reveal]").forEach((el) => observer.observe(el));
  return observer;
}

function renderProjects() {
  const items = PROJECTS.filter((project) => !project.featuredOnly);

  portfolioGrid.innerHTML = "";

  items.forEach((project, idx) => {
    const card = document.createElement("article");
    card.className = "project-card";
    card.setAttribute("data-reveal", "");
    card.dataset.delay = String((idx % 4) * 60);

    card.innerHTML = `
      <button
        type="button"
        class="project-card-trigger"
        data-project-id="${project.id}"
        aria-label="Play 9:16 Preview: ${project.title}"
      >
        <div class="video-frame">
          <img
            src="${project.thumbnail}"
            alt="${project.title} 9:16 vertical video preview frame"
            class="video-thumb"
          />
          <div class="frame-overlay">
            <span class="project-play-icon" aria-hidden="true">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5.14v13.72a1 1 0 0 0 1.52.85l11-6.86a1 1 0 0 0 0-1.7l-11-6.86A1 1 0 0 0 8 5.14z" />
              </svg>
            </span>
          </div>
          <div class="frame-timecode">${project.duration}</div>
        </div>

        <div class="project-info">
          <div class="project-top-row">
            <h3 class="project-title">${project.title}</h3>
            <span class="project-category">${project.category}</span>
          </div>
          <p class="project-summary">${project.summary}</p>
          <span class="project-role">${project.role}</span>
        </div>
      </button>
    `;

    portfolioGrid.appendChild(card);

    if (revealObserver) {
      revealObserver.observe(card);
    } else {
      card.classList.add("is-visible");
    }
  });
}

// ============================================================================
// Interactive 9:16 Screening Room Modal (Native MP4 or 9:16 Canvas Reel)
// ============================================================================

const modal = document.getElementById("screening-modal");
const modalCloseBtn = document.getElementById("modal-close");
const modalTitle = document.getElementById("modal-project-title");
const modalCategory = document.getElementById("modal-project-category");
const modalDesc = document.getElementById("modal-project-desc");
const modalSpecs = document.getElementById("modal-project-specs");

const reelCanvas = document.getElementById("reel-canvas");
const nativeVideo = document.getElementById("native-video");
const customControls = document.getElementById("custom-player-controls");
const stagePlayOverlay = document.getElementById("stage-play-overlay");
const playerToggleBtn = document.getElementById("player-toggle-btn");
const timelineScrubber = document.getElementById("timeline-scrubber");
const timelineMarkers = document.getElementById("timeline-markers");
const playerTimecode = document.getElementById("player-timecode");

const ctx = reelCanvas.getContext("2d");
const imageCache = new Map();

const playerState = {
  project: null,
  isPlaying: false,
  progress: 0, // 0..1
  lastFrameTime: 0,
  rafId: null,
};

function loadImage(src) {
  if (imageCache.has(src)) return imageCache.get(src);
  const promise = new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = () => resolve(null);
    img.src = src;
  });
  imageCache.set(src, promise);
  return promise;
}

function formatSeconds(totalSeconds) {
  const sec = Math.max(0, Math.floor(totalSeconds));
  const mins = Math.floor(sec / 60);
  const rem = sec % 60;
  return `${String(mins).padStart(2, "0")}:${String(rem).padStart(2, "0")}`;
}

function getActiveCut(project, progress) {
  const cuts = project.cuts || [];
  let activeIndex = 0;
  for (let i = 0; i < cuts.length; i += 1) {
    if (progress >= cuts[i].time) activeIndex = i;
  }
  const current = cuts[activeIndex];
  const nextTime = activeIndex < cuts.length - 1 ? cuts[activeIndex + 1].time : 1.0;
  const span = Math.max(0.001, nextTime - current.time);
  const localT = Math.min(1, Math.max(0, (progress - current.time) / span));
  return { current, localT, index: activeIndex };
}

async function drawCanvasFrame() {
  const project = playerState.project;
  if (!project) return;

  const { current, localT } = getActiveCut(project, playerState.progress);
  const img = await loadImage(current.image);

  const w = reelCanvas.width;
  const h = reelCanvas.height;
  ctx.fillStyle = "#000000";
  ctx.fillRect(0, 0, w, h);

  if (img) {
    const zoomStart = current.zoom ? current.zoom[0] : 1.0;
    const zoomEnd = current.zoom ? current.zoom[1] : 1.1;
    const panYStart = current.panY ? current.panY[0] : 0;
    const panYEnd = current.panY ? current.panY[1] : 0;

    const scale = zoomStart + (zoomEnd - zoomStart) * localT;
    const offsetY = panYStart + (panYEnd - panYStart) * localT;

    const imgRatio = img.width / img.height;
    const canvasRatio = w / h;
    let drawW = w;
    let drawH = h;
    if (imgRatio > canvasRatio) {
      drawH = h;
      drawW = h * imgRatio;
    } else {
      drawW = w;
      drawH = w / imgRatio;
    }

    drawW *= scale;
    drawH *= scale;

    const x = (w - drawW) / 2;
    const y = (h - drawH) / 2 + offsetY;
    ctx.drawImage(img, x, y, drawW, drawH);

    // Subtle velocity impact flash during first 6% of each cut
    if (localT < 0.06) {
      const flashAlpha = (1 - localT / 0.06) * 0.35;
      ctx.fillStyle = `rgba(255, 255, 255, ${flashAlpha.toFixed(3)})`;
      ctx.fillRect(0, 0, w, h);
    }
  }

  // Top and bottom 9:16 mobile overlay bars
  const topBarH = 50;
  const bottomBarH = 60;
  ctx.fillStyle = "rgba(0, 0, 0, 0.65)";
  ctx.fillRect(0, 0, w, topBarH);
  ctx.fillRect(0, h - bottomBarH, w, bottomBarH);

  // Top header text
  ctx.font = "700 22px Inter, sans-serif";
  ctx.fillStyle = "rgba(255, 255, 255, 0.95)";
  ctx.textBaseline = "middle";
  ctx.textAlign = "left";
  ctx.fillText(project.title.toUpperCase(), 28, topBarH / 2);

  ctx.textAlign = "right";
  ctx.font = "600 18px Inter, sans-serif";
  ctx.fillStyle = "#a855f7";
  ctx.fillText("9:16 60FPS", w - 28, topBarH / 2);

  // Bottom caption & live frame timecode
  ctx.font = "600 20px Inter, sans-serif";
  ctx.fillStyle = "rgba(255, 255, 255, 0.85)";
  ctx.textAlign = "left";
  ctx.fillText(current.label.toUpperCase(), 28, h - bottomBarH / 2);

  const currentSec = playerState.progress * project.durationSeconds;
  const frameNum = Math.floor((currentSec % 1) * 60);
  const tcText = `${formatSeconds(currentSec)}:${String(frameNum).padStart(2, "0")}`;
  ctx.textAlign = "right";
  ctx.font = "600 20px Inter, sans-serif";
  ctx.fillStyle = "rgba(255, 255, 255, 0.95)";
  ctx.fillText(tcText, w - 28, h - bottomBarH / 2);
}

function syncPlayerUI() {
  const project = playerState.project;
  if (!project) return;

  timelineScrubber.value = Math.round(playerState.progress * 1000);
  const currentSec = playerState.progress * project.durationSeconds;
  playerTimecode.textContent = `${formatSeconds(currentSec)} / ${project.duration}`;

  playerToggleBtn.textContent = playerState.isPlaying ? "Pause" : "Play";
  stagePlayOverlay.classList.toggle("is-playing", playerState.isPlaying);
}

function tickPlayer(timestamp) {
  if (!playerState.isPlaying || !playerState.project) return;

  if (!playerState.lastFrameTime) {
    playerState.lastFrameTime = timestamp;
  }
  const dt = (timestamp - playerState.lastFrameTime) / 1000;
  playerState.lastFrameTime = timestamp;

  // Vertical preview speed
  const previewCycleSeconds = Math.min(18, playerState.project.durationSeconds);
  playerState.progress += dt / previewCycleSeconds;

  if (playerState.progress >= 1) {
    playerState.progress = 0;
  }

  drawCanvasFrame();
  syncPlayerUI();
  playerState.rafId = requestAnimationFrame(tickPlayer);
}

function startPlayback() {
  if (!playerState.project || playerState.project.videoUrl) return;
  if (playerState.isPlaying) return;
  playerState.isPlaying = true;
  playerState.lastFrameTime = 0;
  syncPlayerUI();
  playerState.rafId = requestAnimationFrame(tickPlayer);
}

function pausePlayback() {
  playerState.isPlaying = false;
  playerState.lastFrameTime = 0;
  if (playerState.rafId) {
    cancelAnimationFrame(playerState.rafId);
    playerState.rafId = null;
  }
  syncPlayerUI();
}

function openProjectModal(projectId) {
  const project = PROJECTS.find((p) => p.id === projectId);
  if (!project) return;

  pausePlayback();
  playerState.project = project;
  playerState.progress = 0;

  modalCategory.textContent = project.category;
  modalTitle.textContent = project.title;
  modalDesc.textContent = project.summary;
  modalSpecs.innerHTML = project.specs
    .map((spec) => `<span class="spec-chip">${spec}</span>`)
    .join("");

  // Preload cut frames
  (project.cuts || []).forEach((cut) => loadImage(cut.image));

  // Render cut markers on timeline
  timelineMarkers.innerHTML = (project.cuts || [])
    .slice(1)
    .map(
      (cut) =>
        `<span class="cut-marker" style="left: ${(cut.time * 100).toFixed(1)}%"></span>`
    )
    .join("");

  if (project.videoUrl) {
    reelCanvas.hidden = true;
    customControls.hidden = true;
    stagePlayOverlay.hidden = true;
    nativeVideo.hidden = false;
    nativeVideo.src = project.videoUrl;
    nativeVideo.play().catch(() => {});
  } else {
    nativeVideo.hidden = true;
    nativeVideo.pause();
    nativeVideo.removeAttribute("src");
    reelCanvas.hidden = false;
    customControls.hidden = false;
    stagePlayOverlay.hidden = false;
    drawCanvasFrame();
    syncPlayerUI();
  }

  modal.hidden = false;
  document.body.style.overflow = "hidden";
  requestAnimationFrame(() => {
    modal.classList.add("is-open");
  });

  if (!project.videoUrl) {
    startPlayback();
  }
}

function closeProjectModal() {
  pausePlayback();
  nativeVideo.pause();
  modal.classList.remove("is-open");
  document.body.style.overflow = "";
  setTimeout(() => {
    if (!modal.classList.contains("is-open")) {
      modal.hidden = true;
    }
  }, 260);
}

document.addEventListener("click", (event) => {
  const trigger = event.target.closest("[data-project-id]");
  if (trigger) {
    openProjectModal(trigger.dataset.projectId);
  }
});

playerToggleBtn.addEventListener("click", () => {
  if (playerState.isPlaying) {
    pausePlayback();
  } else {
    startPlayback();
  }
});

stagePlayOverlay.addEventListener("click", () => {
  if (playerState.isPlaying) {
    pausePlayback();
  } else {
    startPlayback();
  }
});

timelineScrubber.addEventListener("input", () => {
  if (!playerState.project) return;
  playerState.progress = Number(timelineScrubber.value) / 1000;
  drawCanvasFrame();
  syncPlayerUI();
});

modalCloseBtn.addEventListener("click", closeProjectModal);

modal.addEventListener("click", (event) => {
  if (event.target === modal) closeProjectModal();
});

document.addEventListener("keydown", (event) => {
  if (modal.hidden) return;
  if (event.key === "Escape") {
    closeProjectModal();
  } else if (event.key === " " && document.activeElement !== timelineScrubber) {
    event.preventDefault();
    if (playerState.isPlaying) pausePlayback();
    else startPlayback();
  }
});

// ============================================================================
// Discord Copy Interaction (rayz_69)
// ============================================================================

document.querySelectorAll(".copy-discord-trigger").forEach((btn) => {
  btn.addEventListener("click", async () => {
    const discordId = btn.dataset.discord || "rayz_69";
    try {
      await navigator.clipboard.writeText(discordId);
    } catch {
      const temp = document.createElement("input");
      temp.value = discordId;
      document.body.appendChild(temp);
      temp.select();
      document.execCommand("copy");
      document.body.removeChild(temp);
    }

    const hintEl = btn.querySelector(".copy-hint");
    const originalText = hintEl ? hintEl.textContent : btn.textContent;
    btn.classList.add("is-copied");

    if (hintEl) {
      hintEl.textContent = "Copied";
    } else {
      btn.textContent = `Copied: ${discordId}`;
    }

    setTimeout(() => {
      btn.classList.remove("is-copied");
      if (hintEl) {
        hintEl.textContent = originalText;
      } else {
        btn.textContent = originalText;
      }
    }, 2000);
  });
});

// ============================================================================
// Mobile Navigation Drawer
// ============================================================================

const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
const mobileNav = document.getElementById("mobile-nav");

if (mobileMenuBtn && mobileNav) {
  mobileMenuBtn.addEventListener("click", () => {
    const isExpanded = mobileMenuBtn.getAttribute("aria-expanded") === "true";
    mobileMenuBtn.setAttribute("aria-expanded", String(!isExpanded));
    mobileNav.hidden = isExpanded;
  });

  mobileNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenuBtn.setAttribute("aria-expanded", "false");
      mobileNav.hidden = true;
    });
  });
}

// Initial portfolio render: 8 9:16 vertical video previews
renderProjects();
