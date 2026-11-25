/**
 * RAYZ — Long-Form Gaming Video Editor & Mobile Editor
 * 9:16 Video Previews | 16:9 Master Aspect Ratio
 * Turnaround: 70–80 hours | Direct Discord: rayz_69
 */

const PROJECTS = [
  {
    id: "showreel-gaming",
    title: "Long-Form Gaming Video Showcase",
    category: "Featured Showcase",
    duration: "18:24",
    durationSeconds: 1104,
    role: "Mobile Editor · Long-Form 16:9 Editor",
    summary:
      "Curated showcase of retention-paced 16:9 long-form gaming video editing, narrative progression, dialogue sculpting, and clean sound mixing.",
    thumbnail: "assets/showreel-hero.jpg",
    videoUrl: "",
    specs: ["16:9 4K", "60 FPS", "Long-Form Pacing", "Mobile Editor"],
    cuts: [
      { time: 0.0, label: "01 — Episode Narrative Intro", image: "assets/showreel-hero.jpg", zoom: [1.0, 1.08], panY: [0, -12] },
      { time: 0.22, label: "02 — Critical Story Encounter", image: "assets/project-documentary.jpg", zoom: [1.04, 1.12], panY: [-8, 8] },
      { time: 0.45, label: "03 — Boss Battle Sequence", image: "assets/project-music.jpg", zoom: [1.0, 1.1], panY: [8, -8] },
      { time: 0.68, label: "04 — Tactical Mission Climax", image: "assets/project-commercial.jpg", zoom: [1.06, 1.14], panY: [0, 10] },
      { time: 0.88, label: "05 — Chapter Outro & Cliffhanger", image: "assets/project-brand.jpg", zoom: [1.02, 1.08], panY: [-8, 4] },
    ],
    featuredOnly: true,
  },
  {
    id: "storyline-walkthrough",
    title: "Storyline Walkthrough — Episode 01",
    category: "Long-Form Gaming",
    duration: "34:20",
    durationSeconds: 2060,
    role: "Long-Form 16:9 Edit · Narrative Flow",
    summary: "Full-length episodic gaming video paced for audience retention and continuous story progression.",
    thumbnail: "assets/showreel-hero.jpg",
    videoUrl: "",
    specs: ["16:9 Master", "60 FPS", "Mobile Editor", "Story Flow"],
    cuts: [
      { time: 0.0, label: "Chapter Intro", image: "assets/showreel-hero.jpg", zoom: [1.0, 1.1], panY: [0, -16] },
      { time: 0.42, label: "Mid-Mission Fight", image: "assets/project-music.jpg", zoom: [1.1, 1.04], panY: [12, -4] },
      { time: 0.78, label: "Episode Cliffhanger", image: "assets/project-brand.jpg", zoom: [1.02, 1.08], panY: [-4, 12] },
    ],
  },
  {
    id: "hardcore-survival",
    title: "100 Days Hardcore Survival",
    category: "Long-Form Gaming",
    duration: "58:30",
    durationSeconds: 3510,
    role: "Gaming Editor · Progression Pacing",
    summary: "High-retention episodic survival cut with structured day markers, ambient sound design, and clean time transitions.",
    thumbnail: "assets/project-documentary.jpg",
    videoUrl: "",
    specs: ["16:9 4K", "60 FPS", "Gaming Editor", "Retention Structure"],
    cuts: [
      { time: 0.0, label: "Base Construction", image: "assets/project-documentary.jpg", zoom: [1.0, 1.06], panY: [-6, 8] },
      { time: 0.45, label: "Night Threat Wave", image: "assets/showreel-hero.jpg", zoom: [1.12, 1.05], panY: [8, -6] },
      { time: 0.8, label: "Day 100 Finale", image: "assets/project-music-stage.jpg", zoom: [1.04, 1.12], panY: [0, 8] },
    ],
  },
  {
    id: "campaign-playthrough",
    title: "Full Campaign Playthrough",
    category: "Long-Form Gaming",
    duration: "45:15",
    durationSeconds: 2715,
    role: "After Motion Z · Sound Mixing",
    summary: "Seamless story cut balancing in-game dialogue, exploration pacing, and cinematic action beats.",
    thumbnail: "assets/project-commercial.jpg",
    videoUrl: "",
    specs: ["16:9 1080p", "60 FPS", "After Motion Z", "Dialogue Mix"],
    cuts: [
      { time: 0.0, label: "Mission Briefing", image: "assets/project-commercial.jpg", zoom: [1.0, 1.07], panY: [-8, 8] },
      { time: 0.48, label: "Infiltration Phase", image: "assets/project-documentary.jpg", zoom: [1.14, 1.05], panY: [8, -8] },
      { time: 0.82, label: "Extraction Escape", image: "assets/project-creator.jpg", zoom: [1.03, 1.1], panY: [0, 8] },
    ],
  },
  {
    id: "tactical-heist",
    title: "Tactical Heist Mission",
    category: "Long-Form Gaming",
    duration: "29:40",
    durationSeconds: 1780,
    role: "Mobile Editor · Tension Build",
    summary: "Full mission playthrough cut to emphasize stealth tension, team comms, and explosive breach moments.",
    thumbnail: "assets/project-music.jpg",
    videoUrl: "",
    specs: ["16:9 Master", "60 FPS", "Mobile Editor", "Audio Foley"],
    cuts: [
      { time: 0.0, label: "Stealth Entry", image: "assets/project-music.jpg", zoom: [1.0, 1.09], panY: [8, -12] },
      { time: 0.44, label: "Vault Alarm Phase", image: "assets/project-music-stage.jpg", zoom: [1.12, 1.03], panY: [-8, 8] },
      { time: 0.76, label: "Getaway Pursuit", image: "assets/showreel-hero.jpg", zoom: [1.02, 1.1], panY: [4, -8] },
    ],
  },
  {
    id: "dungeon-raid",
    title: "Full Raid & Boss Fight",
    category: "Long-Form Gaming",
    duration: "38:12",
    durationSeconds: 2292,
    role: "Gold Motion · Pacing",
    summary: "Complete dungeon encounter edited with clear combat choreography, mechanic callouts, and clean spatial audio.",
    thumbnail: "assets/project-brand.jpg",
    videoUrl: "",
    specs: ["16:9 4K", "60 FPS", "Gold Motion", "Spatial Audio"],
    cuts: [
      { time: 0.0, label: "Encounter Opening", image: "assets/project-brand.jpg", zoom: [1.0, 1.08], panY: [-10, 10] },
      { time: 0.5, label: "Enrage Phase Mechanic", image: "assets/project-commercial.jpg", zoom: [1.1, 1.03], panY: [10, -5] },
      { time: 0.82, label: "Boss Defeated", image: "assets/project-creator.jpg", zoom: [1.02, 1.08], panY: [0, 8] },
    ],
  },
  {
    id: "open-world-deepdive",
    title: "Open World Gameplay Deep Dive",
    category: "Long-Form Gaming",
    duration: "41:50",
    durationSeconds: 2510,
    role: "Gaming Editor · Episodic Cut",
    summary: "Immersive open world exploration video with organic travel pacing, lore discoveries, and balanced editing rhythm.",
    thumbnail: "assets/project-creator.jpg",
    videoUrl: "",
    specs: ["16:9 Master", "60 FPS", "Gaming Editor", "Story Pacing"],
    cuts: [
      { time: 0.0, label: "World Exploration", image: "assets/project-creator.jpg", zoom: [1.0, 1.07], panY: [-6, 10] },
      { time: 0.46, label: "Hidden Lore Secret", image: "assets/showreel-hero.jpg", zoom: [1.11, 1.04], panY: [8, -8] },
      { time: 0.8, label: "Journey Milestone", image: "assets/project-documentary.jpg", zoom: [1.02, 1.08], panY: [-5, 6] },
    ],
  },
  {
    id: "creator-special",
    title: "Creator Gameplay Special",
    category: "Long-Form Gaming",
    duration: "26:15",
    durationSeconds: 1575,
    role: "Mobile Editor · Retention Flow",
    summary: "Long-form gaming video structured with quick setup, seamless narrative progression, and punchy comedy pacing.",
    thumbnail: "assets/project-music-stage.jpg",
    videoUrl: "",
    specs: ["16:9 1080p", "60 FPS", "Mobile Editor", "Retention Flow"],
    cuts: [
      { time: 0.0, label: "Video Hook", image: "assets/project-music-stage.jpg", zoom: [1.0, 1.08], panY: [10, -10] },
      { time: 0.42, label: "Climax Challenge", image: "assets/project-music.jpg", zoom: [1.12, 1.05], panY: [-8, 8] },
      { time: 0.76, label: "End Screen Teaser", image: "assets/project-commercial.jpg", zoom: [1.03, 1.09], panY: [4, -4] },
    ],
  },
  {
    id: "season-finale",
    title: "Season Finale Long-Form Cut",
    category: "Long-Form Gaming",
    duration: "52:40",
    durationSeconds: 3160,
    role: "Gold Motion · Narrative Climax",
    summary: "Full season conclusion gameplay episode with high emotional resonance, clean audio mastering, and dramatic ending.",
    thumbnail: "assets/showreel-hero.jpg",
    videoUrl: "",
    specs: ["16:9 4K", "60 FPS", "Gold Motion", "Full Storyline"],
    cuts: [
      { time: 0.0, label: "Season Recap Hook", image: "assets/showreel-hero.jpg", zoom: [1.0, 1.07], panY: [0, -12] },
      { time: 0.48, label: "Final Battle Assembly", image: "assets/project-brand.jpg", zoom: [1.1, 1.04], panY: [8, -8] },
      { time: 0.82, label: "Credits & Finale Frame", image: "assets/project-creator.jpg", zoom: [1.03, 1.11], panY: [-6, 6] },
    ],
  },
];

// ============================================================================
// Portfolio Grid Rendering (8 9:16 Video Preview Boxes — Details Removed)
// "in all preview boxes , remove all information , I just wanted to show my work not details"
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

    // Pure 9:16 visual preview card: all textual details and metadata removed
    card.innerHTML = `
      <button
        type="button"
        class="project-card-trigger"
        data-project-id="${project.id}"
        aria-label="Play preview: ${project.title}"
      >
        <div class="video-frame">
          <img
            src="${project.thumbnail}"
            alt="Gaming video preview frame"
            class="video-thumb"
          />
          <div class="frame-overlay">
            <span class="project-play-icon" aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5.14v13.72a1 1 0 0 0 1.52.85l11-6.86a1 1 0 0 0 0-1.7l-11-6.86A1 1 0 0 0 8 5.14z" />
              </svg>
            </span>
          </div>
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
// Interactive Screening Room Modal (Native MP4 or 9:16 Canvas Reel)
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
    const zoomEnd = current.zoom ? current.zoom[1] : 1.08;
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

    // Subtle cut transition fade during initial 5% of shot
    if (localT < 0.05) {
      const flashAlpha = (1 - localT / 0.05) * 0.28;
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
  ctx.font = "700 20px Inter, sans-serif";
  ctx.fillStyle = "rgba(255, 255, 255, 0.95)";
  ctx.textBaseline = "middle";
  ctx.textAlign = "left";
  ctx.fillText(project.title.toUpperCase(), 28, topBarH / 2);

  ctx.textAlign = "right";
  ctx.font = "600 18px Inter, sans-serif";
  ctx.fillStyle = "#a855f7";
  ctx.fillText("16:9 MASTER", w - 28, topBarH / 2);

  // Bottom caption & live frame timecode
  ctx.font = "600 19px Inter, sans-serif";
  ctx.fillStyle = "rgba(255, 255, 255, 0.85)";
  ctx.textAlign = "left";
  ctx.fillText(current.label.toUpperCase(), 28, h - bottomBarH / 2);

  const currentSec = playerState.progress * project.durationSeconds;
  const frameNum = Math.floor((currentSec % 1) * 60);
  const tcText = `${formatSeconds(currentSec)}:${String(frameNum).padStart(2, "0")}`;
  ctx.textAlign = "right";
  ctx.font = "600 19px Inter, sans-serif";
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

  const previewCycleSeconds = Math.min(22, playerState.project.durationSeconds);
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

  modalCategory.textContent = "16:9 Long-Form Gaming";
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

// Initial portfolio render: 8 9:16 vertical video previews (pure visual cards)
renderProjects();
