/**
 * RAYZ — Video Editor Portfolio
 * Handles portfolio rendering, category filtering, interactive canvas/video
 * screening player, blur+opacity scroll reveal animations, Discord ID copy,
 * and client inquiry preparation.
 */

const PROJECTS = [
  {
    id: "showreel-2026",
    title: "2026 Editorial & Commercial Showreel",
    category: "Commercial",
    duration: "01:34",
    durationSeconds: 94,
    role: "Lead Editor · Sound Design · Grade",
    summary:
      "A curated montage of commercial campaigns, narrative documentary cuts, and rhythmic brand visuals edited over the past year.",
    thumbnail: "assets/showreel-hero.jpg",
    videoUrl: "", // Optional: set to an .mp4 path or URL to play native video
    specs: ["4K ProRes 422", "24 FPS", "DaVinci Resolve", "Sound Mix"],
    cuts: [
      { time: 0.0, label: "01 — Opening Hook", image: "assets/showreel-hero.jpg", zoom: [1.0, 1.09], panX: [0, -18] },
      { time: 0.2, label: "02 — Product Precision", image: "assets/project-commercial.jpg", zoom: [1.04, 1.12], panX: [-10, 14] },
      { time: 0.4, label: "03 — Narrative Beat", image: "assets/project-documentary.jpg", zoom: [1.0, 1.07], panX: [12, -10] },
      { time: 0.6, label: "04 — Rhythm Climax", image: "assets/project-music.jpg", zoom: [1.06, 1.15], panX: [0, 12] },
      { time: 0.8, label: "05 — Architectural Finish", image: "assets/project-brand.jpg", zoom: [1.02, 1.08], panX: [-12, 8] },
    ],
    featuredOnly: true,
  },
  {
    id: "apex-night-run",
    title: "Apex Night Run — Spec Spot",
    category: "Commercial",
    duration: "00:48",
    durationSeconds: 48,
    role: "Offline & Online Edit · Sound Design",
    summary:
      "High-contrast automotive spec commercial cut to percussive foley transients, engine resonance, and tight match-cuts.",
    thumbnail: "assets/showreel-hero.jpg",
    videoUrl: "",
    specs: ["4K Anamorphic", "24 FPS", "Premiere Pro", "Foley Layering"],
    cuts: [
      { time: 0.0, label: "Tunnel Entry", image: "assets/showreel-hero.jpg", zoom: [1.0, 1.1], panX: [0, -24] },
      { time: 0.35, label: "Headlight Reflection", image: "assets/showreel-hero.jpg", zoom: [1.14, 1.04], panX: [16, -6] },
      { time: 0.7, label: "Final Silhouette", image: "assets/project-brand.jpg", zoom: [1.02, 1.09], panX: [-8, 12] },
    ],
  },
  {
    id: "monolith-audio",
    title: "Monolith Studio — Hardware Launch",
    category: "Commercial",
    duration: "01:15",
    durationSeconds: 75,
    role: "Lead Editor · Color Finishing",
    summary:
      "Minimalist industrial design reveal emphasizing tactile material transitions, crisp whip-cuts, and clean studio acoustics.",
    thumbnail: "assets/project-commercial.jpg",
    videoUrl: "",
    specs: ["4K Master", "24 FPS", "DaVinci Resolve", "Rec.709 Grade"],
    cuts: [
      { time: 0.0, label: "Surface Reveal", image: "assets/project-commercial.jpg", zoom: [1.0, 1.08], panX: [-10, 12] },
      { time: 0.45, label: "Macro Detail", image: "assets/project-commercial.jpg", zoom: [1.16, 1.06], panX: [14, -8] },
      { time: 0.75, label: "Studio Close", image: "assets/project-creator.jpg", zoom: [1.02, 1.1], panX: [0, 14] },
    ],
  },
  {
    id: "stillness-before-gun",
    title: "Stillness Before the Gun",
    category: "Documentary",
    duration: "04:20",
    durationSeconds: 260,
    role: "Narrative Editor · Dialogue Mix",
    summary:
      "Short-form athlete portrait built around breath, ambient stadium space, and restrained editorial pacing before race start.",
    thumbnail: "assets/project-documentary.jpg",
    videoUrl: "",
    specs: ["4K DCI", "23.976 FPS", "Story Assembly", "Audio Stem Mix"],
    cuts: [
      { time: 0.0, label: "Morning Mist", image: "assets/project-documentary.jpg", zoom: [1.0, 1.06], panX: [-8, 10] },
      { time: 0.4, label: "Starting Blocks", image: "assets/project-documentary.jpg", zoom: [1.1, 1.17], panX: [10, -10] },
      { time: 0.75, label: "Quiet Focus", image: "assets/project-brand.jpg", zoom: [1.0, 1.07], panX: [8, -12] },
    ],
  },
  {
    id: "afterglow-visual",
    title: "Afterglow — Live Performance",
    category: "Music Video",
    duration: "03:08",
    durationSeconds: 188,
    role: "Rhythm Edit · Look Development",
    summary:
      "Single-beam studio performance piece cut tightly on beat subdivisions with dynamic speed ramps and monochrome contrast.",
    thumbnail: "assets/project-music.jpg",
    videoUrl: "",
    specs: ["4K UHD", "24 FPS", "After Effects", "Beat-Locked Cut"],
    cuts: [
      { time: 0.0, label: "Intro Beam", image: "assets/project-music.jpg", zoom: [1.0, 1.09], panX: [0, 16] },
      { time: 0.38, label: "Chorus Impact", image: "assets/project-music.jpg", zoom: [1.15, 1.05], panX: [-14, 8] },
      { time: 0.72, label: "Outro Fade", image: "assets/showreel-hero.jpg", zoom: [1.03, 1.1], panX: [10, -10] },
    ],
  },
  {
    id: "form-and-concrete",
    title: "Form & Concrete — Studio Profile",
    category: "Brand Film",
    duration: "01:52",
    durationSeconds: 112,
    role: "Editorial · Atmospheric Sound",
    summary:
      "Architectural brand film following daylight across raw concrete volumes, guided by minimalist ambient scoring.",
    thumbnail: "assets/project-brand.jpg",
    videoUrl: "",
    specs: ["4K ProRes", "24 FPS", "DaVinci Resolve", "Spatial Sound"],
    cuts: [
      { time: 0.0, label: "Shadow Geometry", image: "assets/project-brand.jpg", zoom: [1.0, 1.07], panX: [-12, 12] },
      { time: 0.5, label: "Gallery Walk", image: "assets/project-brand.jpg", zoom: [1.12, 1.03], panX: [14, -6] },
      { time: 0.8, label: "Closing Frame", image: "assets/project-commercial.jpg", zoom: [1.02, 1.08], panX: [0, -10] },
    ],
  },
  {
    id: "inside-the-frame",
    title: "Inside the Frame — Creator Essay",
    category: "Creator",
    duration: "11:40",
    durationSeconds: 700,
    role: "Retention Edit · Motion Graphics",
    summary:
      "Long-form YouTube essay structured for audience retention with clean typography callouts, B-roll rhythm, and tight story chapters.",
    thumbnail: "assets/project-creator.jpg",
    videoUrl: "",
    specs: ["4K YouTube", "24 FPS", "Premiere + AE", "Retention Pacing"],
    cuts: [
      { time: 0.0, label: "Chapter 01 Hook", image: "assets/project-creator.jpg", zoom: [1.0, 1.08], panX: [-8, 12] },
      { time: 0.42, label: "Timeline Breakdown", image: "assets/project-creator.jpg", zoom: [1.13, 1.04], panX: [12, -10] },
      { time: 0.78, label: "Final Takeaway", image: "assets/project-documentary.jpg", zoom: [1.02, 1.09], panX: [-6, 10] },
    ],
  },
];

// ============================================================================
// Portfolio Grid Rendering & Filtering
// ============================================================================

const portfolioGrid = document.getElementById("portfolio-grid");
const filterButtons = document.querySelectorAll(".filter-btn");
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

function renderProjects(category = "all") {
  const items = PROJECTS.filter((project) => {
    if (project.featuredOnly) return false;
    return category === "all" || project.category === category;
  });

  portfolioGrid.innerHTML = "";

  items.forEach((project, idx) => {
    const card = document.createElement("article");
    card.className = "project-card";
    card.setAttribute("data-reveal", "");
    card.dataset.delay = String((idx % 2) * 80);

    card.innerHTML = `
      <button
        type="button"
        class="project-card-trigger"
        data-project-id="${project.id}"
        aria-label="Play ${project.title}"
      >
        <div class="video-frame">
          <img
            src="${project.thumbnail}"
            alt="${project.title} video preview frame"
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

filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterButtons.forEach((b) => {
      b.classList.remove("is-active");
      b.setAttribute("aria-selected", "false");
    });
    btn.classList.add("is-active");
    btn.setAttribute("aria-selected", "true");
    renderProjects(btn.dataset.filter);
  });
});

// ============================================================================
// Interactive Screening Room Modal (Supports native MP4 or Canvas Reel Player)
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
    const panStart = current.panX ? current.panX[0] : 0;
    const panEnd = current.panX ? current.panX[1] : 0;

    const scale = zoomStart + (zoomEnd - zoomStart) * localT;
    const offsetX = panStart + (panEnd - panStart) * localT;

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

    const x = (w - drawW) / 2 + offsetX;
    const y = (h - drawH) / 2;
    ctx.drawImage(img, x, y, drawW, drawH);

    // Subtle editorial cut-in fade for the first 6% of each shot
    if (localT < 0.06) {
      const fadeAlpha = (1 - localT / 0.06) * 0.45;
      ctx.fillStyle = `rgba(0, 0, 0, ${fadeAlpha.toFixed(3)})`;
      ctx.fillRect(0, 0, w, h);
    }
  }

  // Subtle letterbox bars for cinema preview feel
  const barHeight = 32;
  ctx.fillStyle = "#000000";
  ctx.fillRect(0, 0, w, barHeight);
  ctx.fillRect(0, h - barHeight, w, barHeight);

  // Minimal shot label & live timecode inside lower cinema bar
  ctx.font = "600 13px Inter, sans-serif";
  ctx.fillStyle = "rgba(255, 255, 255, 0.78)";
  ctx.textBaseline = "middle";
  ctx.textAlign = "left";
  ctx.fillText(current.label.toUpperCase(), 24, h - barHeight / 2);

  const currentSec = playerState.progress * project.durationSeconds;
  const frameNum = Math.floor((currentSec % 1) * 24);
  const tcText = `${formatSeconds(currentSec)}:${String(frameNum).padStart(2, "0")} · 24 FPS`;
  ctx.textAlign = "right";
  ctx.fillStyle = "rgba(255, 255, 255, 0.9)";
  ctx.fillText(tcText, w - 24, h - barHeight / 2);
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

  // Preview playback runs at realistic 1x pacing (capped for crisp demo feel)
  const previewCycleSeconds = Math.min(24, playerState.project.durationSeconds);
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

  // Auto-play the preview reel smoothly on open
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
// Contact Form Handling
// ============================================================================

const contactForm = document.getElementById("contact-form");
const formFeedback = document.getElementById("form-feedback");

contactForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const name = document.getElementById("client-name").value.trim();
  const contact = document.getElementById("client-contact").value.trim();
  const type = document.getElementById("project-type").value;
  const brief = document.getElementById("project-brief").value.trim();

  if (!name || !contact || !brief) {
    formFeedback.textContent = "Please complete your name, contact handle, and brief.";
    formFeedback.className = "form-feedback is-error";
    return;
  }

  const formattedBrief = [
    `Project Inquiry for Rayz (Discord: rayz_69)`,
    `Name: ${name}`,
    `Contact: ${contact}`,
    `Project Type: ${type}`,
    `Brief: ${brief}`,
  ].join("\n");

  try {
    await navigator.clipboard.writeText(formattedBrief);
    formFeedback.textContent =
      "Brief formatted and copied to your clipboard. Message rayz_69 on Discord and paste to start.";
  } catch {
    formFeedback.textContent =
      "Brief ready. Reach out directly to rayz_69 on Discord with your project summary.";
  }

  formFeedback.className = "form-feedback is-success";
  contactForm.reset();
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

// Initial portfolio render
renderProjects("all");
