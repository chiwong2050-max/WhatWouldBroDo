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
const communityForm = $("#communityForm");
const communityInput = $("#communityInput");
const communityList = $("#communityList");
const communityStatus = $("#communityStatus");
const communityClear = $("#communityClear");

let currentResponse = "";

const COMMUNITY_KEY = "wwbd_community_struggles_v1";
const COMMUNITY_MAX_STORE = 50;
const COMMUNITY_MAX_SHOW = 5;
const COMMUNITY_MAX_LEN = 280;
const SHARE_PARAM_INDEX = "i";
const SHARE_PARAM_LEGACY = "r";

function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
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
  const items = loadCommunityStruggles().slice(0, COMMUNITY_MAX_SHOW);

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
  currentResponse = pickRandom(broResponses);
  broResponseEl.textContent = currentResponse;
  broTipEl.textContent = pickRandom(broTips);
  showView("result");
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
      return;
    }

    const copied = await copyToClipboard(shareText);
    shareStatusEl.textContent = copied
      ? "Copied! Now paste it and spread the word 🙏"
      : `Copy this link:\n${shareUrl}`;
  } catch (err) {
    const copied = await copyToClipboard(shareText);
    shareStatusEl.textContent = copied
      ? "Copied! Now paste it and spread the word 🙏"
      : `Copy this link:\n${shareUrl}`;
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

  struggleInput.addEventListener("keydown", (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === "Enter") generateBlessing();
  });

  if (communityForm) {
    communityForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const text = normalizeStruggle(communityInput?.value);
      if (!text) {
        if (communityStatus) communityStatus.textContent = "Type something first, my child.";
        return;
      }

      if (text.length > COMMUNITY_MAX_LEN) {
        if (communityStatus)
          communityStatus.textContent = `Keep it under ${COMMUNITY_MAX_LEN} characters. Parables, not novels.`;
        return;
      }

      const existing = loadCommunityStruggles();
      const next = [{ text, ts: Date.now() }, ...existing].slice(0, COMMUNITY_MAX_STORE);
      saveCommunityStruggles(next);
      if (communityInput) communityInput.value = "";
      if (communityStatus) communityStatus.textContent = "Submitted. The community is now burdened with your lore.";
      renderCommunityStruggles();
    });
  }

  if (communityClear) {
    communityClear.addEventListener("click", () => {
      try {
        localStorage.removeItem(COMMUNITY_KEY);
      } catch (e) {
        // ignore
      }
      if (communityStatus) communityStatus.textContent = "Community struggles cleared. A fresh start.";
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
