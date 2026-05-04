const broResponses = [
  "Wealth is a mindset. Also, have you tried turning water into wine? High profit margins.",
  "Walk on water. It's hard to stay mad at a man who is literally floating.",
  "The Father has closed a door so he can open a window. Or maybe a sunroof. Stay blessed.",
  "I once parted the Red Sea. You can't part a Toyota Corolla? Work on your faith.",
  "Have you tried fasting? Not eating for 40 days really puts things in perspective.",
  "Forgive them. Then block them. Then forgive yourself for blocking them.",
  "Turn the other cheek. Then turn it back. Nobody said you had to keep turning.",
  "The answer is within you. Also check your spam folder.",
  "I walked on water once. The trick is confidence and not looking down.",
  "Your problem is temporary. My robe is eternal.",
  "Have you considered that maybe YOU are the problem? Just a thought. Stay blessed.",
  "Pray about it. If that doesn't work, pray louder.",
  "The miracle you need is already on its way. It's just stuck in traffic.",
  "I turned water into wine. You can turn this situation into a lesson. Probably.",
  "Bro, I died for your sins and you're still making the same ones. Incredible.",
  "The path forward is narrow. Like, really narrow. You might need to lose some baggage.",
  "Ask and you shall receive. But also maybe send a follow-up email.",
  "I fed 5,000 people with two fish. You can't meal prep for the week? Disappointing.",
  "Your enemies are just disciples who haven't realized it yet.",
  "Blessed are those who hustle, for they shall inherit the bag.",
  "If the Wi-Fi is weak, maybe the universe is telling you to go outside.",
  "I healed the blind. You can't see your own potential? Same energy.",
  "The answer is love. If that doesn't work, the answer is a nap.",
  "Cast your worries into the sea. Or the group chat. Either works.",
  "You are exactly where you need to be. Unless you're in the wrong Uber. Check the app.",
  "Rise and grind. I literally rose from the dead. You can get out of bed.",
  "Your vibe is your miracle. Protect it like it's your last loaf of bread.",
  "I was betrayed by my closest friend for 30 pieces of silver. Your situation can't be worse. Can it?",
  "The storm will pass. Have you tried turning it off and on again?",
  "Seek and you shall find. Have you tried Google first though?",
  "I carried a cross up a hill. You can carry this responsibility. Probably.",
  "Your blessing is loading. Please do not close the tab.",
  "Sometimes the miracle is just surviving the day. Today counts.",
  "I turned one fish into many. You need to learn to stretch your budget.",
  "The truth shall set you free. But first it will make things very awkward.",
  "Do not worry about tomorrow. Tomorrow has enough problems of its own. Trust me.",
  "You are the light of the world. Turn the brightness up a little.",
  "I had 12 followers and changed the world. You have 47 and can't get 50 likes?",
  "Blessed are the patient, for they shall eventually get a response to their text.",
  "The kingdom of heaven is within you. The kingdom of chaos is also within you. Choose wisely.",
  "I was homeless for 40 days in the desert. Your rent situation is a miracle by comparison.",
  "Love your neighbor. Unless they play loud music at 2 AM. Then pray for them.",
  "Your breakthrough is one step away. Unfortunately it's a very big step.",
  "I performed miracles daily and still got bad reviews. Keep going.",
  "The universe has a plan for you. It just hasn't shared the calendar invite yet.",
  "Be still and know. Also, put your phone down for five minutes.",
  "I multiplied the bread. You need to multiply your effort first.",
  "Forgiveness is free. Therapy is not. Start with forgiveness.",
  "Your season of struggle is building your season of testimony. Or it's just a bad week. Hard to tell.",
  "I turned nothing into something. You can turn this mess into a message.",
  "The enemy is busy. But so is your potential. Race to the finish.",
  "I wore the same robe every day and nobody said anything. Stop stressing about your outfit.",
  "Your prayer has been received. Please allow 3-5 business days for processing.",
  "I was misunderstood by millions. You are misunderstood by your group chat. Perspective.",
  "The miracle is not the destination. The miracle is the Wi-Fi password at the destination.",
  "Do not let the sun go down on your anger. Unless it's a really good sunset. Then just enjoy it.",
  "I calmed the storm with my voice. Have you tried talking to your problems out loud? Weird but works.",
  "Your faith can move mountains. Your doubt can't even move the couch. Choose faith.",
  "I was born in a stable and still made it. Your situation has better starting conditions.",
  "The blessing is already yours. You just need to stop leaving it on read.",
];

const broTips = [
  "💡 Bro Tip: Drink water. It's basically holy water if you believe hard enough.",
  "💡 Bro Tip: Your robe doesn't have to be white to have divine energy.",
  "💡 Bro Tip: Walk confidently. Nobody questions a man who walks like he owns the place.",
  "💡 Bro Tip: If in doubt, nod slowly. It makes you look wise.",
  "💡 Bro Tip: A beard adds 40% more credibility to any statement.",
  "💡 Bro Tip: Silence is powerful. Especially when you don't know the answer.",
  "💡 Bro Tip: Always arrive late. It builds anticipation.",
  "💡 Bro Tip: Point at the sky occasionally. People will think you have connections.",
  "💡 Bro Tip: Never explain your miracles. Mystery is the brand.",
  "💡 Bro Tip: If someone doubts you, just smile. It's more unsettling than arguing.",
  "💡 Bro Tip: Eat slowly. It looks intentional.",
  "💡 Bro Tip: The best miracles happen when nobody is watching. Or when everyone is.",
  "💡 Bro Tip: A dramatic pause before speaking adds 60% more impact.",
  "💡 Bro Tip: Wear white. It hides nothing but says everything.",
  "💡 Bro Tip: If you fall, call it a 'grounding exercise'.",
  "💡 Bro Tip: Never run. Walk with purpose. Running is for people who are late. You are never late.",
  "💡 Bro Tip: Stare at the horizon occasionally. It looks prophetic.",
  "💡 Bro Tip: If the door won't open, it's not your door. Or it's automatic. Check first.",
  "💡 Bro Tip: Bless your food before eating. It tastes better. Scientifically unproven but spiritually confirmed.",
  "💡 Bro Tip: The best response to a hard question is 'That is a great question' followed by silence.",
];

const chaosResponses = [
  "I consulted the heavens and they said: unblock them, then immediately re-block them for character development.",
  "You need a miracle? Bet. Drink water, delete three apps, and rebuke your bank account in a firm tone.",
  "I just received a divine push notification: your ex is not your soulmate, your sleep schedule is.",
  "My robe is vibrating. That means stop arguing with people who still use “u” instead of “you.”",
  "I turned your situation into a parable. The moral is: stop texting first. Become unbothered.",
  "I would walk on water, but your group chat is deeper and somehow wetter. Exit gracefully.",
  "The universe is testing you. I’m not. I’m judging. Kindly lock in.",
  "I prayed about it and the answer was: eat a snack, take a nap, then return with holy confidence.",
  "Your enemies are loud because they’re far from God and also far from accurate.",
  "You are not stuck. You are buffering. Refresh your spirit and clear your emotional cache.",
  "I saw the future. It was you thriving, but only after you stopped rereading that one message 47 times.",
  "I forgave them spiritually. Physically? I’m walking the other direction at maximum speed.",
  "Let go and let Bro. But also let go of that situationship. It is not a ministry.",
  "Your anxiety is doing cardio. Tell it to sit down and drink holy water immediately.",
  "I multiplied bread. You can multiply boundaries. Start with “no” and season it with silence.",
  "If it’s meant for you, it won’t require you to beg, chase, or become a detective.",
  "I calmed storms. You can calm your inbox by turning on Do Not Disturb and pretending it’s scripture.",
  "The sign you asked for is this: stop doom-scrolling and go outside like an ancient prophet.",
  "I walked into this timeline and immediately regretted it. Please act right so I can rest.",
  "The blessing is here. Unfortunately it has a shipping delay because you keep ignoring the lesson.",
];

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));

const struggleInput = $("#struggleInput");
const blessBtn = $("#blessBtn");
const shareBtn = $("#shareBtn");
const againBtn = $("#againBtn");
const broResponseEl = $("#broResponse");
const broTipEl = $("#broTip");
const shareStatusEl = $("#shareStatus");
const soundToggle = $("#soundToggle");
const aiToggle = $("#aiToggle");
const chaosToggle = $("#chaosToggle");
const streakBadge = $("#streakBadge");
const modeStatus = $("#modeStatus");
const chaosBanner = $("#chaosBanner");
const funnelCard = $("#funnelCard");
const notifyCard = $("#notifyCard");
const notifyEnable = $("#notifyEnable");
const notifyDismiss = $("#notifyDismiss");
const notifyStatus = $("#notifyStatus");
const splash = $("#splash");
const splashCta = $("#splashCta");
const shareModal = $("#shareModal");
const sharePreview = $("#sharePreview");
const shareImageBtn = $("#shareImageBtn");
const downloadImageBtn = $("#downloadImageBtn");
const shareImageStatus = $("#shareImageStatus");
const videoIdeaBtn = $("#videoIdeaBtn");
const hooksBtn = $("#hooksBtn");
const commentBaitBtn = $("#commentBaitBtn");
const creatorOutput = $("#creatorOutput");
const visionHint = $("#visionHint");
const miraclesList = $("#miraclesList");
const communityForm = $("#communityForm");
const communityInput = $("#communityInput");
const communityList = $("#communityList");
const communityStatus = $("#communityStatus");
const communityClear = $("#communityClear");
const communityCount = $("#communityCount");
const trendBoard = $("#trendBoard");
const trendList = $("#trendList");
const trendWords = $("#trendWords");

let currentResponse = "";
let blessingNonce = 0;
let audioCtx = null;
let shareImageBlob = null;
let shareImageObjectUrl = "";
let lastStruggle = "";

const COMMUNITY_KEY = "wwbd_community_struggles_v1";
const COMMUNITY_MAX_STORE = 50;
const COMMUNITY_MAX_SHOW = 5;
const COMMUNITY_MAX_LEN = 280;
const SHARE_PARAM_INDEX = "i";
const SHARE_PARAM_LEGACY = "r";
const SOUND_KEY = "wwbd_sound_v1";
const AI_KEY = "wwbd_ai_v1";
const CHAOS_KEY = "wwbd_chaos_v1";
const STREAK_KEY = "wwbd_streak_v1";
const NOTIFY_ENABLED_KEY = "wwbd_notify_enabled_v1";
const NOTIFY_DISMISSED_KEY = "wwbd_notify_dismissed_v1";
const NOTIFY_LAST_KEY = "wwbd_notify_last_v1";
const TRENDS_KEY = "wwbd_trends_v1";
const SPLASH_SEEN_KEY = "wwbd_splash_seen_v1";
const WATERMARK_DOMAIN = "wwbd.app";

const LINKS = {
  youtube: "https://youtube.com/@BroThinksHesJesus",
  tiktok: "https://tiktok.com/@BroThinksHesJesus",
  instagram: "https://instagram.com/BroThinksHesJesus",
  facebook: "https://facebook.com/BroThinksHesJesus",
  tattooVogue: "https://example.com",
  meowDancing: "https://example.com",
  adultBizGo: "https://example.com",
};

function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function prefersReducedMotion() {
  return window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function isDevMode() {
  try {
    const url = new URL(window.location.href);
    if (url.searchParams.get("dev") === "1") return true;
  } catch (e) {
  }
  return false;
}

function track(name, data) {
  try {
    if (data !== undefined) console.log(`[EVENT] ${name}`, data);
    else console.log(`[EVENT] ${name}`);
  } catch (e) {
  }
}

function setModeStatus(text) {
  if (!modeStatus) return;
  modeStatus.textContent = text || "";
}

function getSoundEnabled() {
  try {
    return localStorage.getItem(SOUND_KEY) === "1";
  } catch (e) {
    return false;
  }
}

function setSoundEnabled(enabled) {
  try {
    localStorage.setItem(SOUND_KEY, enabled ? "1" : "0");
  } catch (e) {
  }
  updateSoundToggleUi();
}

function updateSoundToggleUi() {
  if (!soundToggle) return;
  const enabled = getSoundEnabled();
  soundToggle.classList.toggle("is-on", enabled);
  soundToggle.setAttribute("aria-pressed", enabled ? "true" : "false");
  const label = soundToggle.querySelector(".pill__label");
  const iconWrap = soundToggle.querySelector(".pill__icon");
  if (label) label.textContent = enabled ? "Sound: On" : "Sound: Off";
  if (iconWrap) {
    iconWrap.innerHTML = enabled
      ? '<i class="fa-solid fa-volume-high"></i>'
      : '<i class="fa-solid fa-volume-xmark"></i>';
  }
}

function getAiEnabled() {
  try {
    return localStorage.getItem(AI_KEY) === "1";
  } catch (e) {
    return false;
  }
}

function setAiEnabled(enabled) {
  try {
    localStorage.setItem(AI_KEY, enabled ? "1" : "0");
  } catch (e) {
  }
  updateAiToggleUi();
  updateModeStatus();
}

function updateAiToggleUi() {
  if (!aiToggle) return;
  const enabled = getAiEnabled();
  aiToggle.classList.toggle("is-on", enabled);
  aiToggle.setAttribute("aria-pressed", enabled ? "true" : "false");
  const label = aiToggle.querySelector(".pill__label");
  if (label) label.textContent = enabled ? "AI (Beta): On" : "AI (Beta): Off";
}

function getChaosEnabled() {
  try {
    return localStorage.getItem(CHAOS_KEY) === "1";
  } catch (e) {
    return false;
  }
}

function setChaosEnabled(enabled) {
  try {
    localStorage.setItem(CHAOS_KEY, enabled ? "1" : "0");
  } catch (e) {
  }
  updateChaosToggleUi();
  applyChaosUi();
}

function updateChaosToggleUi() {
  if (!chaosToggle) return;
  const enabled = getChaosEnabled();
  chaosToggle.classList.toggle("is-on", enabled);
  chaosToggle.setAttribute("aria-pressed", enabled ? "true" : "false");
  const label = chaosToggle.querySelector(".pill__label");
  const iconWrap = chaosToggle.querySelector(".pill__icon");
  if (label) label.textContent = enabled ? "Chaos: On" : "Chaos: Off";
  if (iconWrap) {
    iconWrap.innerHTML = enabled
      ? '<i class="fa-solid fa-triangle-exclamation"></i>'
      : '<i class="fa-solid fa-triangle-exclamation"></i>';
  }
}

function applyChaosUi() {
  const enabled = getChaosEnabled();
  document.body.classList.toggle("is-chaos", enabled);
  if (chaosBanner) chaosBanner.hidden = !enabled;
  if (broResponseEl) broResponseEl.classList.toggle("is-glitch", enabled && !prefersReducedMotion());
}

function getAiEndpoint() {
  const endpoint = typeof window.WWBD_AI_ENDPOINT === "string" ? window.WWBD_AI_ENDPOINT : "";
  return endpoint.trim();
}

function updateModeStatus() {
  const flags = [];
  if (getAiEnabled()) flags.push("AI Mode (Beta)");
  if (getChaosEnabled()) flags.push("Chaos Mode");
  if (flags.length === 0) return setModeStatus("");
  const extra = getAiEnabled() && !getAiEndpoint() ? " (fallback)" : "";
  setModeStatus(`${flags.join(" • ")}${extra}`);
}

async function playChime(kind) {
  if (!getSoundEnabled()) return;
  try {
    const AudioContextImpl = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextImpl) return;
    if (!audioCtx) audioCtx = new AudioContextImpl();
    if (audioCtx.state === "suspended") await audioCtx.resume();

    const now = audioCtx.currentTime;
    const gain = audioCtx.createGain();
    gain.gain.setValueAtTime(0.0001, now);
    gain.connect(audioCtx.destination);

    const seq =
      kind === "share"
        ? [740, 988, 1175]
        : kind === "error"
          ? [196, 165, 147]
          : [523, 659, 784];

    let t = now;
    seq.forEach((freq, idx) => {
      const o = audioCtx.createOscillator();
      o.type = "triangle";
      o.frequency.setValueAtTime(freq, t);
      o.connect(gain);
      const a = 0.0001;
      const peak = 0.06;
      gain.gain.setValueAtTime(a, t);
      gain.gain.exponentialRampToValueAtTime(peak, t + 0.02);
      gain.gain.exponentialRampToValueAtTime(a, t + 0.12);
      o.start(t);
      o.stop(t + 0.13);
      t += idx === 0 ? 0.08 : 0.1;
    });
  } catch (e) {
  }
}

function maybeVibrate(pattern) {
  if (!getSoundEnabled()) return;
  if (!("vibrate" in navigator)) return;
  try {
    navigator.vibrate(pattern);
  } catch (e) {
  }
}

function burstConfetti(count = 44) {
  if (prefersReducedMotion()) return;
  const root = document.createElement("div");
  root.className = "confetti";
  document.body.appendChild(root);

  const colors = [
    "rgba(255, 215, 0, 0.98)",
    "rgba(255, 255, 255, 0.95)",
    "rgba(24, 119, 242, 0.9)",
    "rgba(225, 48, 108, 0.9)",
    "rgba(37, 244, 238, 0.9)",
  ];

  for (let i = 0; i < count; i += 1) {
    const piece = document.createElement("div");
    piece.className = "confettiPiece";
    const left = Math.random() * 100;
    const x = (Math.random() * 2 - 1) * 60;
    const drift = (Math.random() * 2 - 1) * 120;
    const rot = (Math.random() * 2 - 1) * 420;
    const delay = Math.random() * 0.12;
    const dur = 720 + Math.random() * 520;
    const w = 7 + Math.random() * 8;
    const h = 10 + Math.random() * 14;
    piece.style.left = `${left}%`;
    piece.style.setProperty("--x", `${x}px`);
    piece.style.setProperty("--drift", `${drift}px`);
    piece.style.setProperty("--rot", `${rot}deg`);
    piece.style.animationDelay = `${delay}s`;
    piece.style.animationDuration = `${dur}ms`;
    piece.style.width = `${w}px`;
    piece.style.height = `${h}px`;
    piece.style.background = colors[Math.floor(Math.random() * colors.length)];
    root.appendChild(piece);
  }

  window.setTimeout(() => {
    root.remove();
  }, 1400);
}

function setTextareaHeight(el) {
  if (!el) return;
  el.style.height = "auto";
  const next = Math.min(el.scrollHeight, 260);
  el.style.height = `${next}px`;
}

function getShareUrlForResponse(responseText) {
  const url = new URL(window.location.href);
  url.searchParams.delete(SHARE_PARAM_LEGACY);
  url.searchParams.delete(SHARE_PARAM_INDEX);

  const normalized = String(responseText || "");
  const idx = broResponses.indexOf(normalized);
  if (idx >= 0) {
    url.searchParams.set(SHARE_PARAM_INDEX, String(idx));
  } else {
    url.searchParams.set(SHARE_PARAM_LEGACY, normalized);
  }

  return url.toString();
}

function tryLoadSharedResponse() {
  try {
    const url = new URL(window.location.href);
    const idxRaw = url.searchParams.get(SHARE_PARAM_INDEX);
    const legacy = url.searchParams.get(SHARE_PARAM_LEGACY);

    let resolved = "";
    if (idxRaw !== null) {
      const idx = Number(idxRaw);
      if (Number.isInteger(idx) && idx >= 0 && idx < broResponses.length) {
        resolved = broResponses[idx];
      }
    }

    if (!resolved && legacy) resolved = legacy;
    if (!resolved) return false;

    currentResponse = resolved;
    broResponseEl.textContent = currentResponse;
    broTipEl.textContent = pickRandom(broTips);
    renderFunnel("");
    showView("result");
    applyChaosUi();
    maybeShowFunnelTrigger();
    if (splash) splash.classList.add("is-hidden");
    return true;
  } catch (e) {
    return false;
  }
}

function normalizeStruggle(text) {
  return String(text || "").replace(/\s+/g, " ").trim();
}

function loadTrends() {
  try {
    const raw = localStorage.getItem(TRENDS_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed
      .map((x) => ({ text: normalizeStruggle(x?.text), ts: Number(x?.ts) || Date.now() }))
      .filter((x) => x.text.length > 0);
  } catch (e) {
    return [];
  }
}

function saveTrends(list) {
  try {
    localStorage.setItem(TRENDS_KEY, JSON.stringify(list.slice(0, 200)));
  } catch (e) {
  }
}

function addTrend(text) {
  const normalized = normalizeStruggle(text);
  if (!normalized) return;
  const existing = loadTrends();
  const next = [{ text: normalized, ts: Date.now() }, ...existing].slice(0, 200);
  saveTrends(next);
}

function tokenizeWords(text) {
  return String(text || "")
    .toLowerCase()
    .replace(/[^a-z0-9\s']/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .split(" ")
    .filter(Boolean);
}

function renderTrendBoard() {
  if (!trendBoard) return;
  const show = isDevMode();
  trendBoard.hidden = !show;
  if (!show) return;

  const items = loadTrends().slice(0, 50);
  if (trendList) {
    if (items.length === 0) {
      trendList.innerHTML = `<div class="communityEmpty">No saved struggles yet.</div>`;
    } else {
      trendList.innerHTML = items
        .map(
          (it, idx) => `
          <article class="trendItem">
            <p class="trendItem__text">${escapeHtml(it.text)}</p>
            <button class="btn btn--gold btn--sm" type="button" data-trend-use="${idx}">
              Use this as video idea
            </button>
          </article>
        `,
        )
        .join("");
      trendList.querySelectorAll("[data-trend-use]").forEach((btn) => {
        btn.addEventListener("click", () => {
          const i = Number(btn.getAttribute("data-trend-use"));
          const picked = items[i];
          if (!picked) return;
          if (struggleInput) {
            struggleInput.value = picked.text;
            setTextareaHeight(struggleInput);
          }
          showView("home");
          struggleInput?.focus({ preventScroll: true });
          track("Trend_UseAsIdea");
        });
      });
    }
  }

  const stop = new Set([
    "the",
    "a",
    "an",
    "and",
    "or",
    "but",
    "so",
    "to",
    "of",
    "in",
    "on",
    "for",
    "with",
    "at",
    "by",
    "from",
    "is",
    "are",
    "was",
    "were",
    "be",
    "been",
    "being",
    "i",
    "im",
    "i'm",
    "me",
    "my",
    "you",
    "your",
    "yours",
    "we",
    "our",
    "they",
    "them",
    "this",
    "that",
    "it",
    "its",
    "not",
    "no",
    "yes",
    "do",
    "did",
    "does",
    "have",
    "has",
    "had",
    "just",
    "like",
    "really",
    "very",
  ]);

  const counts = new Map();
  items.forEach((it) => {
    tokenizeWords(it.text)
      .filter((w) => w.length >= 3 && !stop.has(w))
      .forEach((w) => counts.set(w, (counts.get(w) || 0) + 1));
  });
  const top = Array.from(counts.entries())
    .sort((a, b) => b[1] - a[1])
    .slice(0, 14);

  if (trendWords) {
    if (top.length === 0) {
      trendWords.innerHTML = `<div class="communityEmpty">No trends yet.</div>`;
    } else {
      trendWords.innerHTML = top
        .map(
          ([w, c]) =>
            `<div class="trendWord"><span>${escapeHtml(w)}</span><span class="trendWord__count">${c}</span></div>`,
        )
        .join("");
    }
  }
}

function loadCommunityStruggles() {
  try {
    const raw = localStorage.getItem(COMMUNITY_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed
      .map((x) => ({ text: normalizeStruggle(x?.text), ts: Number(x?.ts) || Date.now() }))
      .filter((x) => x.text.length > 0);
  } catch (e) {
    return [];
  }
}

function saveCommunityStruggles(list) {
  localStorage.setItem(COMMUNITY_KEY, JSON.stringify(list.slice(0, COMMUNITY_MAX_STORE)));
}

function renderCommunityStruggles() {
  if (!communityList) return;
  const all = loadCommunityStruggles();
  const items = all.slice(0, COMMUNITY_MAX_SHOW);

  if (communityClear) communityClear.disabled = all.length === 0;

  if (items.length === 0) {
    communityList.innerHTML = `<div class="communityEmpty">No community struggles yet. Be the first to confess.</div>`;
    return;
  }

  communityList.innerHTML = items
    .map(
      (item, idx) => `
      <article class="communityItem">
        <p class="communityItem__text">${escapeHtml(item.text)}</p>
        <div class="communityItem__actions">
          <button class="btn btn--gold btn--sm" type="button" data-community-answer="${idx}">
            Bro Answered This
          </button>
        </div>
      </article>
    `,
    )
    .join("");

  communityList.querySelectorAll("[data-community-answer]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const i = Number(btn.getAttribute("data-community-answer"));
      const list = loadCommunityStruggles().slice(0, COMMUNITY_MAX_SHOW);
      const picked = list[i];
      if (!picked) return;
      struggleInput.value = picked.text;
      generateBlessing();
    });
  });
}

function escapeHtml(str) {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function getLocalDateKey(d = new Date()) {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

function loadStreak() {
  try {
    const raw = localStorage.getItem(STREAK_KEY);
    if (!raw) return { last: "", count: 0 };
    const parsed = JSON.parse(raw);
    return { last: String(parsed?.last || ""), count: Number(parsed?.count || 0) };
  } catch (e) {
    return { last: "", count: 0 };
  }
}

function saveStreak(streak) {
  try {
    localStorage.setItem(STREAK_KEY, JSON.stringify(streak));
  } catch (e) {
  }
}

function updateStreakOnOpen() {
  const today = getLocalDateKey();
  const y = new Date();
  y.setDate(y.getDate() - 1);
  const yesterday = getLocalDateKey(y);

  const prev = loadStreak();
  if (prev.last === today) return { count: prev.count, increased: false };

  const nextCount = prev.last === yesterday ? Math.max(1, prev.count + 1) : 1;
  saveStreak({ last: today, count: nextCount });
  return { count: nextCount, increased: true };
}

function renderStreakBadge({ count, increased }) {
  if (!streakBadge) return;
  if (!count || count < 1) {
    streakBadge.textContent = "";
    return;
  }

  streakBadge.classList.toggle("is-pulse", Boolean(increased) && !prefersReducedMotion());
  const dayLabel = count === 1 ? "Day" : "Days";
  streakBadge.innerHTML = `<span class="streakBadge__pill">🔥 ${count} ${dayLabel} Blessing Streak</span>`;
  if (increased && !prefersReducedMotion()) {
    window.setTimeout(() => streakBadge.classList.remove("is-pulse"), 650);
  }
}

function applyLinks() {
  document.querySelectorAll("[data-link]").forEach((el) => {
    const key = el.getAttribute("data-link") || "";
    const href = LINKS[key];
    if (href) el.setAttribute("href", href);
  });
}

function setActiveTab(view) {
  const target = view === "result" ? "home" : view;
  $$(".bottomNav__btn").forEach((btn) => {
    btn.classList.toggle("is-active", btn.dataset.view === target);
  });
}

function showView(view) {
  const viewEls = $$(".view");
  viewEls.forEach((el) => el.classList.remove("is-active", "is-enter"));

  const active = $(`#view-${view}`);
  if (!active) return;

  active.classList.add("is-active");
  requestAnimationFrame(() => active.classList.add("is-enter"));
  setActiveTab(view);
  track("Tab_Switch", { view });

  shareStatusEl.textContent = "";
  if (view === "home") {
    struggleInput?.focus({ preventScroll: true });
    renderCommunityStruggles();
  }
  if (view === "vision") {
    renderTrendBoard();
  }
}

const miracles = [
  {
    title: "Bro vs. Modern Problems (Shorts)",
    url: LINKS.youtube,
  },
  {
    title: "The Walmart Sermon (Shorts)",
    url: LINKS.youtube,
  },
  {
    title: "Bro Discovers Group Chats (Shorts)",
    url: LINKS.youtube,
  },
  {
    title: "The Algorithm Is Testing My Faith (Shorts)",
    url: LINKS.youtube,
  },
  {
    title: "When Bro Tries to Be Humble (Shorts)",
    url: LINKS.youtube,
  },
  {
    title: "Bro Gives Unhinged Advice (Shorts)",
    url: LINKS.youtube,
  },
];

function renderMiracles() {
  if (!miraclesList) return;
  miraclesList.innerHTML = miracles
    .map(
      (m) => `
      <article class="miracleCard">
        <div class="miracleThumb" aria-hidden="true"><i class="fa-solid fa-play"></i></div>
        <h3 class="miracleTitle">${escapeHtml(m.title)}</h3>
        <a class="btn btn--white" href="${escapeHtml(m.url)}" target="_blank" rel="noopener noreferrer" data-miracle="${escapeHtml(
          m.title,
        )}">
          Watch Now
        </a>
      </article>
    `,
    )
    .join("");

  miraclesList.querySelectorAll("[data-miracle]").forEach((a) => {
    a.addEventListener("click", () => track("Miracle_Click", { title: a.getAttribute("data-miracle") || "" }));
  });
}

async function fetchAiText(prompt) {
  const endpoint = getAiEndpoint();
  if (!endpoint) return "";

  const controller = new AbortController();
  const t = window.setTimeout(() => controller.abort(), 9000);
  try {
    const headers = { "content-type": "application/json" };
    if (typeof window.WWBD_AI_TOKEN === "string" && window.WWBD_AI_TOKEN.trim()) {
      headers.authorization = `Bearer ${window.WWBD_AI_TOKEN.trim()}`;
    }
    const res = await fetch(endpoint, {
      method: "POST",
      headers,
      body: JSON.stringify({ prompt }),
      signal: controller.signal,
    });
    if (!res.ok) return "";
    const contentType = res.headers.get("content-type") || "";
    if (contentType.includes("application/json")) {
      const json = await res.json();
      const candidatesText =
        json?.text ||
        json?.response ||
        json?.output ||
        json?.message ||
        json?.choices?.[0]?.message?.content ||
        json?.choices?.[0]?.text ||
        json?.candidates?.[0]?.content?.parts?.[0]?.text ||
        "";
      return String(candidatesText || "").trim();
    }
    return String(await res.text()).trim();
  } catch (e) {
    return "";
  } finally {
    window.clearTimeout(t);
  }
}

async function generateAiResponseForStruggle(struggleText) {
  const situation = normalizeStruggle(struggleText);
  if (!situation) return "";
  const chaos = getChaosEnabled() ? "ON" : "OFF";
  const prompt = `User situation: ${situation}\nRespond as a modern-day Jesus-like character giving funny, confident, slightly absurd advice. Keep it short (1–2 sentences). Never break character. Chaos mode: ${chaos}.`;
  const raw = await fetchAiText(prompt);
  const cleaned = String(raw || "").replace(/\s+/g, " ").trim();
  if (!cleaned) return "";
  return cleaned.slice(0, 240);
}

function renderFunnel(type) {
  if (!funnelCard) return;
  if (!type) {
    funnelCard.hidden = true;
    funnelCard.innerHTML = "";
    return;
  }

  funnelCard.hidden = false;
  const map = {
    video: {
      title: "Watch how Bro handled this situation →",
      sub: "A quick miracle clip to seal the lesson.",
      cta: "Watch Video",
    },
    tiktok: {
      title: "Join the chaos on TikTok",
      sub: "Short-form anointing. Maximum unhinged.",
      cta: "Open TikTok",
    },
    vision: {
      title: "Explore The Vision",
      sub: "Blessed projects. Serious funnels. Bro-approved.",
      cta: "Open The Vision",
    },
  };

  const cfg = map[type];
  if (!cfg) return renderFunnel("");

  funnelCard.innerHTML = `
    <div class="funnelCard__title">${escapeHtml(cfg.title)}</div>
    <div class="funnelCard__sub">${escapeHtml(cfg.sub)}</div>
    <button class="btn btn--gold" type="button" data-funnel-cta="${escapeHtml(type)}">${escapeHtml(cfg.cta)}</button>
  `;

  const btn = funnelCard.querySelector("[data-funnel-cta]");
  if (btn) {
    btn.addEventListener("click", () => {
      const t = btn.getAttribute("data-funnel-cta") || "";
      track("Funnel_Click", { type: t });
      if (t === "vision") {
        showView("vision");
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        return;
      }
      const url = t === "tiktok" ? LINKS.tiktok : LINKS.youtube;
      window.open(url, "_blank", "noopener,noreferrer");
    });
  }
}

function maybeShowFunnelTrigger() {
  const r = Math.random();
  if (r < 0.3) return renderFunnel("video");
  if (r < 0.6) return renderFunnel("tiktok");
  if (r < 0.9) return renderFunnel("vision");
  return renderFunnel("");
}

function setCreatorOutput(text) {
  if (!creatorOutput) return;
  creatorOutput.textContent = String(text || "").trim();
}

function generateHooks() {
  const pool = [
    "Bro just broke reality",
    "This is why people panic",
    "He thinks this is normal",
    "I was NOT expecting this",
    "This man has no fear",
    "He said it so confidently",
    "The audacity is holy",
    "Bro is living in 4D",
    "This is getting wild",
    "Why does it make sense",
    "He doubled down instantly",
    "The robe is powerful",
    "This sermon is unhinged",
    "My jaw actually dropped",
    "It escalated so fast",
  ];
  const picked = [];
  while (picked.length < 5 && pool.length) {
    const i = Math.floor(Math.random() * pool.length);
    picked.push(pool.splice(i, 1)[0]);
  }
  return picked.map((h, i) => `${i + 1}. ${h}`).join("\n");
}

function generateCommentBait() {
  const pool = [
    "Bro is actually onto something",
    "This is getting out of hand",
    "Why does this make sense",
    "He needs to be stopped",
    "I can’t look away",
    "He said it like scripture",
    "Someone take his phone",
    "This is oddly comforting",
    "The confidence is insane",
    "He’s preaching in HD",
  ];
  const picked = [];
  while (picked.length < 3 && pool.length) {
    const i = Math.floor(Math.random() * pool.length);
    picked.push(pool.splice(i, 1)[0]);
  }
  return picked.map((c, i) => `${i + 1}. ${c}`).join("\n");
}

function generateVideoIdea() {
  const situation = lastStruggle || "a modern struggle";
  const response = currentResponse || "a divine response";
  const titleTemplates = [
    "Bro Tried to Fix This and Made It Worse",
    "He Said THIS Like It Was Normal",
    "Bro’s Advice Should Be Illegal",
    "Modern Problems, Ancient Confidence",
    "Bro Thinks This Is a Miracle",
    "I Asked Bro For Help… He Did That",
  ];
  const hookTemplates = [
    "Bro said this with a straight face.",
    "Tell me why he thinks this is holy.",
    "I regret asking him for advice.",
    "He doubled down immediately.",
    "This is not how miracles work.",
    "He actually believes he’s right.",
  ];
  const captions = [
    "I asked Bro for a blessing and he gave me a whole situation.",
    "Bro’s confidence is a supernatural event.",
    "If this advice helps you, I’m sorry and you’re welcome.",
    "This is your sign to log off and pray quietly.",
  ];
  const hashtags = ["#shorts", "#tiktok", "#comedy", "#parody", "#jesus", "#meme", "#relatable", "#storytime"];

  const title = pickRandom(titleTemplates);
  const hook = pickRandom(hookTemplates);
  const caption = pickRandom(captions);
  const tags = hashtags.slice(0, 6).join(" ");

  return `TITLE:\n${title}\n\nHOOK:\n${hook}\n\nSCENARIO:\n${situation}\n\nCAPTION:\n${caption}\n\nHASHTAGS:\n${tags}\n\nBRO SAYS:\n${response}`;
}

async function generateBlessing() {
  const myNonce = (blessingNonce += 1);
  lastStruggle = normalizeStruggle(struggleInput?.value);
  if (lastStruggle) addTrend(lastStruggle);
  setCreatorOutput("");
  broResponseEl.textContent = "Receiving the blessing...";
  broTipEl.textContent = "";
  renderFunnel("");
  showView("result");
  applyChaosUi();

  let picked = "";
  if (getAiEnabled() && getAiEndpoint() && lastStruggle) {
    track("AI_Generate");
    picked = await generateAiResponseForStruggle(lastStruggle);
  }
  if (!picked) {
    picked = pickRandom(getChaosEnabled() ? chaosResponses : broResponses);
  }
  currentResponse = picked;
  window.setTimeout(() => {
    if (myNonce !== blessingNonce) return;
    broResponseEl.textContent = currentResponse;
    broResponseEl.classList.remove("is-pop");
    requestAnimationFrame(() => broResponseEl.classList.add("is-pop"));
    broTipEl.textContent = pickRandom(broTips);
    burstConfetti(28);
    playChime("blessing");
    maybeVibrate([20, 40, 20]);
    maybeShowFunnelTrigger();
  }, 220);
}

function openModal(el) {
  if (!el) return;
  el.classList.add("is-open");
  el.setAttribute("aria-hidden", "false");
}

function closeModal(el) {
  if (!el) return;
  el.classList.remove("is-open");
  el.setAttribute("aria-hidden", "true");
  if (el === shareModal && shareImageObjectUrl) {
    try {
      URL.revokeObjectURL(shareImageObjectUrl);
    } catch (e) {
    }
    shareImageObjectUrl = "";
    shareImageBlob = null;
    if (sharePreview) sharePreview.removeAttribute("src");
    if (shareImageStatus) shareImageStatus.textContent = "";
  }
}

function wrapLines(ctx, text, maxWidth) {
  const words = String(text || "").split(/\s+/g).filter(Boolean);
  const lines = [];
  let line = "";
  words.forEach((w) => {
    const test = line ? `${line} ${w}` : w;
    if (ctx.measureText(test).width <= maxWidth) {
      line = test;
      return;
    }
    if (line) lines.push(line);
    line = w;
  });
  if (line) lines.push(line);
  return lines;
}

function drawRoundedRect(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}

async function generateShareImage(text) {
  const W = 1080;
  const H = 1920;
  const canvas = document.createElement("canvas");
  canvas.width = W;
  canvas.height = H;
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("Canvas unavailable");

  const g = ctx.createLinearGradient(0, 0, 0, H);
  g.addColorStop(0, "#0a0a2e");
  g.addColorStop(1, "#050518");
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, W, H);

  ctx.save();
  ctx.globalAlpha = 0.12;
  ctx.fillStyle = "#FFD700";
  for (let i = 0; i < 28; i += 1) {
    const x = Math.random() * W;
    const y = Math.random() * H;
    const r = 1 + Math.random() * 3.5;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.restore();

  const pad = 84;
  ctx.fillStyle = "rgba(255, 215, 0, 0.96)";
  ctx.font = "700 56px Cinzel, serif";
  ctx.fillText("Bro Says:", pad, 160);

  const cardX = pad;
  const cardY = 240;
  const cardW = W - pad * 2;
  const cardH = 1160;
  drawRoundedRect(ctx, cardX, cardY, cardW, cardH, 34);
  ctx.fillStyle = "rgba(255,255,255,0.06)";
  ctx.fill();
  ctx.lineWidth = 3;
  ctx.strokeStyle = "rgba(255,215,0,0.22)";
  ctx.stroke();

  const maxTextWidth = cardW - 120;
  let fontSize = 66;
  ctx.font = `800 ${fontSize}px Poppins, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif`;
  let lines = wrapLines(ctx, text, maxTextWidth);
  while (lines.length > 9 && fontSize > 46) {
    fontSize -= 4;
    ctx.font = `800 ${fontSize}px Poppins, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif`;
    lines = wrapLines(ctx, text, maxTextWidth);
  }

  const lineH = Math.round(fontSize * 1.25);
  const blockH = lines.length * lineH;
  let y = cardY + Math.round(cardH / 2 - blockH / 2) + lineH;
  ctx.fillStyle = "rgba(255,255,255,0.96)";
  ctx.textAlign = "left";
  lines.forEach((ln) => {
    ctx.fillText(ln, cardX + 60, y);
    y += lineH;
  });

  ctx.textAlign = "left";
  ctx.font = "800 44px Poppins, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif";
  ctx.fillStyle = "rgba(255,255,255,0.92)";
  ctx.fillText(`Ask Bro → ${WATERMARK_DOMAIN}`, pad, H - 180);
  ctx.fillStyle = "rgba(255, 215, 0, 0.96)";
  ctx.fillText("@BroThinksHesJesus", pad, H - 118);

  const blob = await new Promise((resolve) => canvas.toBlob(resolve, "image/png"));
  if (!blob) throw new Error("Image export failed");
  return blob;
}

async function openShareModal() {
  if (!shareModal) return;
  track("Share_Click");
  openModal(shareModal);
  if (shareImageStatus) shareImageStatus.textContent = "Forging the meme…";
  if (sharePreview) sharePreview.removeAttribute("src");

  if (shareImageObjectUrl) {
    try {
      URL.revokeObjectURL(shareImageObjectUrl);
    } catch (e) {
    }
  }
  shareImageBlob = null;
  shareImageObjectUrl = "";

  try {
    const blob = await generateShareImage(currentResponse || "…");
    shareImageBlob = blob;
    shareImageObjectUrl = URL.createObjectURL(blob);
    if (sharePreview) sharePreview.src = shareImageObjectUrl;
    if (shareImageStatus) shareImageStatus.textContent = "Ready. Post the blessing.";
    playChime("share");
  } catch (e) {
    if (shareImageStatus) shareImageStatus.textContent = "Could not generate the image on this device.";
    playChime("error");
  }
}

function downloadShareImage() {
  track("ShareImage_Download");
  if (!shareImageBlob) return;
  const url = URL.createObjectURL(shareImageBlob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "bro-blessing.png";
  document.body.appendChild(a);
  a.click();
  a.remove();
  window.setTimeout(() => URL.revokeObjectURL(url), 1200);
}

async function shareShareImage() {
  track("ShareImage_Share");
  if (!shareImageBlob) return;
  const file = new File([shareImageBlob], "bro-blessing.png", { type: "image/png" });
  const shareUrl = getShareUrlForResponse(currentResponse);
  const shareText = `Follow @BroThinksHesJesus for daily miracles\n${shareUrl}`;

  try {
    if (navigator.share && navigator.canShare && navigator.canShare({ files: [file] })) {
      await navigator.share({
        title: "What Would Bro Do?",
        text: shareText,
        files: [file],
      });
      if (shareImageStatus) shareImageStatus.textContent = "Shared. Go forth.";
      burstConfetti(44);
      playChime("share");
      maybeVibrate([30, 40, 30]);
      return;
    }
  } catch (e) {
  }

  downloadShareImage();
  if (shareImageStatus) shareImageStatus.textContent = "Downloaded. Post it to Stories.";
}

async function copyToClipboard(text) {
  if (navigator.clipboard && window.isSecureContext) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch (e) {
    }
  }

  try {
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.setAttribute("readonly", "true");
    ta.style.position = "fixed";
    ta.style.top = "-9999px";
    ta.style.left = "-9999px";
    document.body.appendChild(ta);
    ta.focus();
    ta.select();
    const ok = document.execCommand("copy");
    ta.remove();
    return ok;
  } catch (e) {
    return false;
  }
}

async function shareBlessing() {
  await openShareModal();
}

function wireNav() {
  $$(".bottomNav__btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const target = btn.dataset.view;
      if (!target) return;
      showView(target);
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    });
  });
}

function hasNotificationSupport() {
  return "Notification" in window && "serviceWorker" in navigator;
}

function getNotifyEnabled() {
  try {
    return localStorage.getItem(NOTIFY_ENABLED_KEY) === "1";
  } catch (e) {
    return false;
  }
}

function setNotifyEnabled(enabled) {
  try {
    localStorage.setItem(NOTIFY_ENABLED_KEY, enabled ? "1" : "0");
  } catch (e) {
  }
}

function getNotifyDismissed() {
  try {
    return localStorage.getItem(NOTIFY_DISMISSED_KEY) === "1";
  } catch (e) {
    return false;
  }
}

function setNotifyDismissed() {
  try {
    localStorage.setItem(NOTIFY_DISMISSED_KEY, "1");
  } catch (e) {
  }
}

async function maybeSendDailyNotification() {
  if (!hasNotificationSupport()) return;
  if (!getNotifyEnabled()) return;
  if (Notification.permission !== "granted") return;

  const today = getLocalDateKey();
  try {
    const last = localStorage.getItem(NOTIFY_LAST_KEY) || "";
    if (last === today) return;
  } catch (e) {
  }

  const reg = await navigator.serviceWorker.ready;
  const wisdom = pickRandom(broResponses);
  await reg.showNotification("Daily Blessing", {
    body: `Bro says: ${wisdom}`,
    icon: "icons/icon-192.png",
    badge: "icons/icon-192.png",
    tag: "daily-blessing",
    renotify: false,
    data: { url: "./" },
  });

  try {
    localStorage.setItem(NOTIFY_LAST_KEY, today);
  } catch (e) {
  }
  track("Notification_Shown", { kind: "daily" });
}

function wireActions() {
  blessBtn.addEventListener("click", () => {
    track("AskBro_Click");
    generateBlessing();
  });
  againBtn.addEventListener("click", () => showView("home"));
  shareBtn.addEventListener("click", shareBlessing);

  if (aiToggle) {
    updateAiToggleUi();
    aiToggle.addEventListener("click", () => {
      const next = !getAiEnabled();
      setAiEnabled(next);
      track("AI_Toggle", { enabled: next });
    });
  }

  if (soundToggle) {
    updateSoundToggleUi();
    soundToggle.addEventListener("click", async () => {
      const next = !getSoundEnabled();
      setSoundEnabled(next);
      track("Sound_Toggle", { enabled: next });
      if (next) {
        await playChime("blessing");
        maybeVibrate(20);
      }
    });
  }

  if (chaosToggle) {
    updateChaosToggleUi();
    applyChaosUi();
    chaosToggle.addEventListener("click", () => {
      const next = !getChaosEnabled();
      setChaosEnabled(next);
      track("Chaos_Toggle", { enabled: next });
      if (next) {
        burstConfetti(18);
        playChime("blessing");
        maybeVibrate([20, 30, 20]);
      }
    });
  }

  updateModeStatus();

  $$(".chip[data-template]").forEach((chip) => {
    chip.addEventListener("click", () => {
      const template = chip.getAttribute("data-template") || "";
      if (struggleInput) {
        struggleInput.value = template;
        setTextareaHeight(struggleInput);
        struggleInput.focus({ preventScroll: true });
        playChime("blessing");
      }
    });
  });

  if (visionHint) {
    visionHint.addEventListener("click", () => {
      track("VisionHint_Click");
      showView("vision");
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    });
  }

  if (shareModal) {
    shareModal.querySelectorAll("[data-close]").forEach((el) => {
      el.addEventListener("click", () => closeModal(shareModal));
    });
  }
  if (downloadImageBtn) downloadImageBtn.addEventListener("click", downloadShareImage);
  if (shareImageBtn) shareImageBtn.addEventListener("click", shareShareImage);

  if (videoIdeaBtn) {
    videoIdeaBtn.addEventListener("click", () => {
      track("VideoIdea_Click");
      setCreatorOutput(generateVideoIdea());
      burstConfetti(18);
      playChime("share");
    });
  }
  if (hooksBtn) {
    hooksBtn.addEventListener("click", () => {
      track("Hooks_Click");
      setCreatorOutput(generateHooks());
      playChime("blessing");
    });
  }
  if (commentBaitBtn) {
    commentBaitBtn.addEventListener("click", () => {
      track("CommentBait_Click");
      setCreatorOutput(generateCommentBait());
      playChime("blessing");
    });
  }

  if (struggleInput) {
    setTextareaHeight(struggleInput);
    struggleInput.addEventListener("input", () => setTextareaHeight(struggleInput));
  }

  struggleInput.addEventListener("keydown", (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === "Enter") {
      track("AskBro_Click");
      generateBlessing();
    }
  });

  if (notifyCard) {
    const shouldShow = hasNotificationSupport() && !getNotifyEnabled() && !getNotifyDismissed();
    notifyCard.hidden = !shouldShow;
  }
  if (notifyEnable) {
    notifyEnable.addEventListener("click", async () => {
      track("Notify_Enable_Click");
      if (!hasNotificationSupport()) return;
      if (notifyStatus) notifyStatus.textContent = "Requesting permission…";
      const perm = await Notification.requestPermission();
      if (perm === "granted") {
        setNotifyEnabled(true);
        if (notifyStatus) notifyStatus.textContent = "Enabled. Bro will bless you daily.";
        if (notifyCard) notifyCard.hidden = true;
        await maybeSendDailyNotification();
        return;
      }
      if (notifyStatus) notifyStatus.textContent = "Permission denied. Bro respects your boundaries.";
    });
  }
  if (notifyDismiss) {
    notifyDismiss.addEventListener("click", () => {
      track("Notify_Dismiss_Click");
      setNotifyDismissed();
      if (notifyCard) notifyCard.hidden = true;
    });
  }

  const communitySubmitBtn = communityForm?.querySelector('button[type="submit"]') || null;
  const updateCommunityUi = () => {
    const text = normalizeStruggle(communityInput?.value);
    const len = text.length;
    if (communityCount) {
      communityCount.textContent = `${len}/${COMMUNITY_MAX_LEN}`;
      communityCount.classList.toggle("is-over", len > COMMUNITY_MAX_LEN);
    }
    if (communityInput) communityInput.setAttribute("aria-invalid", len > COMMUNITY_MAX_LEN ? "true" : "false");
    if (communitySubmitBtn) communitySubmitBtn.disabled = len === 0 || len > COMMUNITY_MAX_LEN;
  };

  if (communityForm) {
    communityForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const text = normalizeStruggle(communityInput?.value);
      if (!text) {
        if (communityStatus) communityStatus.textContent = "Type something first, my child.";
        if (communityInput) {
          communityInput.classList.remove("wiggle");
          requestAnimationFrame(() => communityInput.classList.add("wiggle"));
        }
        playChime("error");
        return;
      }

      if (text.length > COMMUNITY_MAX_LEN) {
        if (communityStatus)
          communityStatus.textContent = `Keep it under ${COMMUNITY_MAX_LEN} characters. Parables, not novels.`;
        if (communityInput) {
          communityInput.classList.remove("wiggle");
          requestAnimationFrame(() => communityInput.classList.add("wiggle"));
        }
        playChime("error");
        return;
      }

      const existing = loadCommunityStruggles();
      const next = [{ text, ts: Date.now() }, ...existing].slice(0, COMMUNITY_MAX_STORE);
      saveCommunityStruggles(next);
      if (communityInput) communityInput.value = "";
      if (communityStatus) communityStatus.textContent = "Submitted. The community is now burdened with your lore.";
      if (communityInput) setTextareaHeight(communityInput);
      updateCommunityUi();
      renderCommunityStruggles();
    });

    if (communityInput) {
      setTextareaHeight(communityInput);
      communityInput.addEventListener("input", () => {
        setTextareaHeight(communityInput);
        updateCommunityUi();
      });
    }
    updateCommunityUi();
  }

  if (communityClear) {
    communityClear.addEventListener("click", () => {
      try {
        localStorage.removeItem(COMMUNITY_KEY);
      } catch (e) {
      }
      if (communityStatus) communityStatus.textContent = "Community struggles cleared. A fresh start.";
      updateCommunityUi();
      renderCommunityStruggles();
    });
  }

  if (splashCta) {
    splashCta.addEventListener("click", () => {
      if (splash) splash.classList.add("is-hidden");
      try {
        localStorage.setItem(SPLASH_SEEN_KEY, getLocalDateKey());
      } catch (e) {
      }
      struggleInput?.focus({ preventScroll: true });
      track("Splash_CTA");
    });
  }
}

function registerServiceWorker() {
  if (!("serviceWorker" in navigator)) return;
  navigator.serviceWorker.register("service-worker.js").catch(() => {});
}

wireNav();
wireActions();
registerServiceWorker();

applyLinks();
renderMiracles();
renderCommunityStruggles();
renderStreakBadge(updateStreakOnOpen());
maybeSendDailyNotification();

if (splash) {
  try {
    const seen = localStorage.getItem(SPLASH_SEEN_KEY) || "";
    if (seen === getLocalDateKey()) splash.classList.add("is-hidden");
  } catch (e) {
  }
}

renderTrendBoard();

if (!tryLoadSharedResponse()) showView("home");
