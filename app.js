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
const communityForm = $("#communityForm");
const communityInput = $("#communityInput");
const communityList = $("#communityList");
const communityStatus = $("#communityStatus");
const communityClear = $("#communityClear");
const communityCount = $("#communityCount");

let currentResponse = "";
let blessingNonce = 0;
let audioCtx = null;

const COMMUNITY_KEY = "wwbd_community_struggles_v1";
const COMMUNITY_MAX_STORE = 50;
const COMMUNITY_MAX_SHOW = 5;
const COMMUNITY_MAX_LEN = 280;
const SHARE_PARAM_INDEX = "i";
const SHARE_PARAM_LEGACY = "r";
const SOUND_KEY = "wwbd_sound_v1";

function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function prefersReducedMotion() {
  return window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
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
    // ignore
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
    // ignore
  }
}

function maybeVibrate(pattern) {
  if (!getSoundEnabled()) return;
  if (!("vibrate" in navigator)) return;
  try {
    navigator.vibrate(pattern);
  } catch (e) {
    // ignore
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
    showView("result");
    return true;
  } catch (e) {
    return false;
  }
}

function normalizeStruggle(text) {
  return String(text || "").replace(/\s+/g, " ").trim();
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

function setActiveTab(view) {
  $$(".tab").forEach((btn) => {
    btn.classList.toggle("is-active", btn.dataset.view === view);
  });
}

function showView(view) {
  const viewEls = $$(".view");
  viewEls.forEach((el) => el.classList.remove("is-active", "is-enter"));

  const active = $(`#view-${view}`);
  if (!active) return;

  active.classList.add("is-active");
  requestAnimationFrame(() => active.classList.add("is-enter"));
  setActiveTab(view === "result" ? "home" : view);

  shareStatusEl.textContent = "";
  if (view === "home") {
    struggleInput?.focus({ preventScroll: true });
    renderCommunityStruggles();
  }
}

function generateBlessing() {
  const myNonce = (blessingNonce += 1);
  broResponseEl.textContent = "Receiving the blessing...";
  broTipEl.textContent = "";
  showView("result");

  const picked = pickRandom(broResponses);
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
  }, 220);
}

async function copyToClipboard(text) {
  if (navigator.clipboard && window.isSecureContext) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch (e) {
      // fall through
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
  const shareUrl = getShareUrlForResponse(currentResponse);
  const shareText = `${currentResponse}\n\nFollow @BroThinksHesJesus for daily miracles\n${shareUrl}`;

  try {
    if (navigator.share) {
      await navigator.share({
        title: "What Would Bro Do?",
        text: shareText,
        url: shareUrl,
      });
      shareStatusEl.textContent = "Shared. Now go forth and be unhinged 🙏";
      burstConfetti(44);
      playChime("share");
      maybeVibrate([30, 40, 30]);
      return;
    }

    const copied = await copyToClipboard(shareText);
    shareStatusEl.textContent = copied
      ? "Copied! Now paste it and spread the word 🙏"
      : `Copy this link:\n${shareUrl}`;
    if (copied) {
      burstConfetti(36);
      playChime("share");
      maybeVibrate([20, 30, 20]);
    }
  } catch (err) {
    const copied = await copyToClipboard(shareText);
    shareStatusEl.textContent = copied
      ? "Copied! Now paste it and spread the word 🙏"
      : `Copy this link:\n${shareUrl}`;
    if (copied) {
      burstConfetti(36);
      playChime("share");
      maybeVibrate([20, 30, 20]);
    } else {
      playChime("error");
      maybeVibrate([60]);
    }
  }
}

function wireTabs() {
  $$(".tab").forEach((btn) => {
    btn.addEventListener("click", () => {
      const target = btn.dataset.view;
      if (target === "home") showView("home");
      if (target === "social") showView("social");
      if (target === "about") showView("about");
    });
  });
}

function wireActions() {
  blessBtn.addEventListener("click", generateBlessing);
  againBtn.addEventListener("click", () => showView("home"));
  shareBtn.addEventListener("click", shareBlessing);

  if (soundToggle) {
    updateSoundToggleUi();
    soundToggle.addEventListener("click", async () => {
      const next = !getSoundEnabled();
      setSoundEnabled(next);
      if (next) {
        await playChime("blessing");
        maybeVibrate(20);
      }
    });
  }

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

  if (struggleInput) {
    setTextareaHeight(struggleInput);
    struggleInput.addEventListener("input", () => setTextareaHeight(struggleInput));
  }

  struggleInput.addEventListener("keydown", (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === "Enter") generateBlessing();
  });

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
        // ignore
      }
      if (communityStatus) communityStatus.textContent = "Community struggles cleared. A fresh start.";
      updateCommunityUi();
      renderCommunityStruggles();
    });
  }
}

function registerServiceWorker() {
  if (!("serviceWorker" in navigator)) return;

  window.addEventListener("load", async () => {
    try {
      await navigator.serviceWorker.register("service-worker.js");
    } catch (err) {
      // silent by design
    }
  });
}

wireTabs();
wireActions();
registerServiceWorker();

renderCommunityStruggles();
if (!tryLoadSharedResponse()) showView("home");
