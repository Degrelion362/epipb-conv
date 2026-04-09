var micO = false;
var headO = false;
var toggleOpen = false;

window.onload = function () {
    setTimeout(function () {
        var loader = document.getElementById('loader');
        if (loader) {
            loader.remove();
        }
    }, 6000);
};

var x = new Audio("./Assets/discordmute_IZNcLx2.mp3"); // Make sure this URL points directly to an audio file
var y = new Audio("./Assets/discord-unmute-sound.mp3"); // Make sure this URL points directly to an audio file

function mic() {
    if (!micO) {
        x.play();
        document.getElementById("mic").className = "fa-solid fa-microphone-slash mute";
        micO = true;
    } else {
        y.play();
        document.getElementById("mic").className = "fa-solid fa-microphone";
        micO = false;
    }
}

function headp() {
    if (!headO) {
        x.play();
        document.getElementById("head").className = "fa-solid fa-headphones mute";
        headO = true;
    } else {
        document.getElementById("head").className = "fa-solid fa-headphones";
        y.play();
        headO = false;
    }
}

function openToggle() {
    if (window.innerWidth < 750) {
        if (!toggleOpen) {
            document.getElementById("s").style.display = "none";
            document.getElementById("r").style.display = "flex";
            toggleOpen = true;
        } else {
            document.getElementById("s").style.display = "block";
            document.getElementById("r").style.display = "none";
            toggleOpen = false;
        }
    }
}

/* Random facts/messages for the "Le saviez-vous" section */
document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('fact');
  if (!container) return;

  const messages = [
  `<span>Petit secret #1 : il y a 99 Petits Secrets...</span><span>Serez‑vous assez confiants pour tous les retrouver ?</span>`,
  `<span>Petit secret #2 : ceci est le 2e secret</span><span>Serez‑vous assez confiants trouver les autres ?</span>`,
  `<span>Petit secret #3 : bravo pour le 3e</span><span>Serez‑vous assez confiants trouver les autres ? (ok j'arrête)</span>`,
  `<span>Petit secret #4 : il y a en tout, 28 Morceaux Musicals de M (110 si on comptes les variantes((168 si on comptes les brouillons))</span><span>Seulement 13 accessibles dans un dossier secret.</span>`,
  `<span>Petit secret #5 : Retrouver la piste</span><span>ne fera pas revenir M.</span>`,
  `<span>Petit secret #6 : Le biscuit as genre quatre gros angles, comme les quatre saisons,</span><span>52 bords crantés, pareil pour les semaines de l'année, et 24 points qui font référence aux heures de la journée ?</span>`,
  `<span>Petit secret #7 : NON! Je ne dors pas...</span><span>Je ferme juste les yeux...</span>`,
  `<span>Petit secret #8 : une courte pause de 5 minutes</span><span>peut sauver ta journée.</span>`,
  `<span>Petit secret #9 : garder un biscuit pour « plus tard »</span><span>revient souvent à le retrouver disparu.</span>`,
  `<span>Petit secret #10 : paypal.me/degrelion362</span><span>......</span>`,
  `<span>Petit secret #11 : les biscuits faits maison ont un langage secret</span><span>qui dit « partage‑moi » dès qu’ils sortent du four.</span>`,
  `<span>Petit secret #12 : il existe un coin du frigo</span><span>où les biscuits disparaissent mystérieusement sans laisser de miettes.</span>`,
  `<span>Petit secret #13 : les plantes d’intérieur se souviennent</span><span>quand tu oublies de les arroser, elles ne pardonnent pas.</span>`,
  `<span>Petit secret #14 : parler à ton écran</span><span>ne le fera pas mieux fonctionner, mais ça soulage.</span>`,
  `<span>Petit secret #15 : ton oreiller garde des secrets</span><span>Donc évite de dormir...</span>`,
  `<span>Petit secret #16 : les meilleures excuses pour arriver en retard</span><span>ont toutes été testées et approuvées par un comité invisible.</span>`,
  `<span>Petit secret #17 : E.P.I.P.B, est l'acronyme de :</span><span>Etablissement Pour l'Indice Petit Beurre.</span>`,
  `<span>Petit secret #18 : sourire à ton écran augmente légèrement de 0.00009%</span><span>que quelqu’un te réponde gentiment dans la journée.</span>`,
  `<span>Petit secret #19 : les meilleures idées arrivent toujours</span><span>sous la douche ou juste avant de s’endormir.</span>`,
  `<span>Petit secret #20 : Je fais une overdose de Petit Beurre</span><span>LU jusqu’à la lie</span>`,
  `<span>Petit secret #21 :<span class="button-style">CTRL</span> <span class="button-style">F</span> pour chercher un Petit Beurre</span><span>et prétendre que tu savais où c'était depuis le début.</span>`,
  `<span>Petit secret #22 :<span class="button-style">SHIFT</span> <span class="button-style">ESC</span> pour ouvrir un paquet</span><span>et faire semblant d'être au régime.</span>`,
  `<span>Petit secret #23 :<span class="button-style">ALT</span> <span class="button-style">/</span> pour l'aide</span><span>ou pour demander poliment à ton ordi de t'expliquer la vie.</span>`,
  `<span>Petit secret #24 :<span class="button-style">CTRL</span> <span class="button-style">N</span> pour une nouvelle fenêtre</span><span>parce que celle-ci est déjà trop pleine de procrastination.</span>`,
  `<span>Petit secret #25 : glisse-dépose une image</span><span>et regarde tes amis prétendre que c'est de l'art moderne.</span>`,
  `<span>Petit secret #26 :<span class="button-style">CTRL</span> <span class="button-style">W</span> pour obtenir un Petit Beurre gratuit... GRATUIT !!!</span>`,
  `<span>Petit secret #27 :<span class="button-style">CTRL</span> <span class="button-style">SHIFT</span> <span class="button-style">T</span> pour rouvrir un onglet fermé</span><span>comme si le temps pouvait revenir en arrière.</span>`,
  `<span>Petit secret #28 : </span><span>......</span>`,
  `<span>Petit secret #29 : Je cherche travail. Donner Travail.</span><span>......</span>`,
  `<span>Petit secret #30 : paypal.me/degrelion362</span><span>......</span>`,
  `<span>Petit secret #31 : paypal.me/degrelion362</span><span>......</span>`,
  `<span>Petit secret #32 : paypal.me/degrelion362</span><span>......</span>`,
  `<span>Petit secret #33 : paypal.me/degrelion362</span><span>......</span>`,
  `<span>Petit secret #34 : paypal.me/degrelion362</span><span>......</span>`,
  `<span>Petit secret #35 : paypal.me/degrelion362</span><span>......</span>`,
  `<span>Petit secret #36 : paypal.me/degrelion362</span><span>......</span>`,
  `<span>Petit secret #37 : paypal.me/degrelion362</span><span>......</span>`,
  `<span>Petit secret #38 : paypal.me/degrelion362</span><span>......</span>`,
  `<span>Petit secret #39 : paypal.me/degrelion362</span><span>......</span>`,
  `<span>Petit secret #40 : paypal.me/degrelion362</span><span>......</span>`,
  `<span>Petit secret #41 : paypal.me/degrelion362</span><span>......</span>`,
  `<span>Petit secret #42 : paypal.me/degrelion362</span><span>......</span>`,
  `<span>Petit secret #43 : paypal.me/degrelion362</span><span>......</span>`,
  `<span>Petit secret #44 : paypal.me/degrelion362</span><span>......</span>`,
  `<span>Petit secret #45 : paypal.me/degrelion362</span><span>......</span>`,
  `<span>Petit secret #46 : paypal.me/degrelion362</span><span>......</span>`,
  `<span>Petit secret #47 : paypal.me/degrelion362</span><span>......</span>`,
  `<span>Petit secret #48 : paypal.me/degrelion362</span><span>......</span>`,
  `<span>Petit secret #49 : paypal.me/degrelion362</span><span>......</span>`,
  `<span>Petit secret #50 : Cela m'amuse pas de faire cela...</span><span>......</span>`,
  `<span>Petit secret #51 : paypal.me/degrelion362</span><span>......</span>`,
  `<span>Petit secret #52 : paypal.me/degrelion362</span><span>......</span>`,
  `<span>Petit secret #53 : paypal.me/degrelion362</span><span>......</span>`,
  `<span>Petit secret #54 : paypal.me/degrelion362</span><span>......</span>`,
  `<span>Petit secret #55 : paypal.me/degrelion362</span><span>......</span>`,
  `<span>Petit secret #56 : paypal.me/degrelion362</span><span>......</span>`,
  `<span>Petit secret #57 : paypal.me/degrelion362</span><span>......</span>`,
  `<span>Petit secret #58 : paypal.me/degrelion362</span><span>......</span>`,
  `<span>Petit secret #59 : paypal.me/degrelion362</span><span>......</span>`,
  `<span>Petit secret #60 : paypal.me/degrelion362</span><span>......</span>`,
  `<span>Petit secret #61 : paypal.me/degrelion362</span><span>......</span>`,
  `<span>Petit secret #62 : paypal.me/degrelion362</span><span>......</span>`,
  `<span>Petit secret #63 : paypal.me/degrelion362</span><span>......</span>`,
  `<span>Petit secret #64 : paypal.me/degrelion362</span><span>......</span>`,
  `<span>Petit secret #65 : paypal.me/degrelion362</span><span>......</span>`,
  `<span>Petit secret #66 : paypal.me/degrelion362</span><span>......</span>`,
  `<span>Petit secret #67 : paypal.me/degrelion362</span><span>......</span>`,
  `<span>Petit secret #68 : paypal.me/degrelion362</span><span>......</span>`,
  `<span>Petit secret #69 : Monkey's Sex. (Désolé)</span><span>......</span>`,
  `<span>Petit secret #70 : paypal.me/degrelion362</span><span>......</span>`,
  `<span>Petit secret #71 : paypal.me/degrelion362</span><span>......</span>`,
  `<span>Petit secret #72 : paypal.me/degrelion362</span><span>......</span>`,
  `<span>Petit secret #73 : paypal.me/degrelion362</span><span>......</span>`,
  `<span>Petit secret #74 : paypal.me/degrelion362</span><span>......</span>`,
  `<span>Petit secret #75 : paypal.me/degrelion362</span><span>......</span>`,
  `<span>Petit secret #76 : paypal.me/degrelion362</span><span>......</span>`,
  `<span>Petit secret #77 : paypal.me/degrelion362</span><span>......</span>`,
  `<span>Petit secret #78 : paypal.me/degrelion362</span><span>......</span>`,
  `<span>Petit secret #79 : paypal.me/degrelion362</span><span>......</span>`,
  `<span>Petit secret #80 : paypal.me/degrelion362</span><span>......</span>`,
  `<span>Petit secret #81 : paypal.me/degrelion362</span><span>......</span>`,
  `<span>Petit secret #82 : paypal.me/degrelion362</span><span>......</span>`,
  `<span>Petit secret #83 : paypal.me/degrelion362</span><span>......</span>`,
  `<span>Petit secret #84 : paypal.me/degrelion362</span><span>......</span>`,
  `<span>Petit secret #85 : paypal.me/degrelion362</span><span>......</span>`,
  `<span>Petit secret #86 : paypal.me/degrelion362</span><span>......</span>`,
  `<span>Petit secret #87 : paypal.me/degrelion362</span><span>......</span>`,
  `<span>Petit secret #88 : paypal.me/degrelion362</span><span>......</span>`,
  `<span>Petit secret #89 : paypal.me/degrelion362</span><span>......</span>`,
  `<span>Petit secret #90 : paypal.me/degrelion362</span><span>......</span>`,
  `<span>Petit secret #91 : paypal.me/degrelion362</span><span>......</span>`,
  `<span>Petit secret #92 : paypal.me/degrelion362</span><span>......</span>`,
  `<span>Petit secret #92 : paypal.me/degrelion362</span><span>......</span>`,
  `<span>Petit secret #93 : paypal.me/degrelion362</span><span>......</span>`,
  `<span>Petit secret #94 : paypal.me/degrelion362</span><span>......</span>`,
  `<span>Petit secret #95 : paypal.me/degrelion362</span><span>......</span>`,
  `<span>Petit secret #96 : paypal.me/degrelion362</span><span>......</span>`,
  `<span>Petit secret #97 : paypal.me/degrelion362</span><span>......</span>`,
  `<span>Petit secret #98 : paypal.me/degrelion362</span><span>......</span>`,
  `<span>Petit secret #99 : prout.</span><span>Je n'avais plus d'idées...</span>`
];

  const rotate = true;
  const rotateIntervalMs = 8000;
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const shouldRotate = rotate && !prefersReducedMotion;

  function pickRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  function setMessage(htmlString) {
    container.innerHTML = htmlString;
    container.setAttribute('aria-live', 'off');
    setTimeout(() => container.setAttribute('aria-live', 'polite'), 50);
  }

  setMessage(pickRandom(messages));

  let rotationTimer = null;
  if (shouldRotate) {
    rotationTimer = setInterval(() => {
      setMessage(pickRandom(messages));
    }, rotateIntervalMs);
  }

  window.setRandomFact = () => setMessage(pickRandom(messages));
});
// Ajoute ceci à la fin de ton script.js
document.addEventListener('DOMContentLoaded', () => {
  const mrSigma = document.getElementById('mr-sigma');
  const rightArea = document.getElementById('r'); // .rightside-area
  if (!mrSigma || !rightArea) return;

  function createChatPanel(chatId, name, avatarSrc) {
    const panel = document.createElement('div');
    panel.className = 'dm-panel';
    panel.setAttribute('role', 'region');
    panel.setAttribute('aria-label', `Conversation avec ${name}`);
    panel.innerHTML = `
      <div class="chat-header">
        <div class="avatar"><img src="${avatarSrc}" alt="Avatar ${name}" style="width:100%;height:100%;object-fit:cover"></div>
        <div class="title">${name}</div>
        <button class="close-chat" aria-label="Fermer la conversation">&times;</button>
      </div>
      <div class="messages" id="messages-${chatId}">
        <div class="msg system" aria-hidden="true">Conversation ouverte avec <strong>${name}</strong>. Tapez un message pour commencer.</div>
      </div>
      <div class="composer">
        <input type="text" id="input-${chatId}" placeholder="Envoyer un message à ${name}" aria-label="Écrire un message">
        <button id="send-${chatId}" aria-label="Envoyer">Envoyer</button>
      </div>
    `;
    return panel;
  }

  function openChatInline(el) {
    const chatId = el.dataset.chatId || 'chat';
    const name = el.querySelector('p') ? el.querySelector('p').textContent.trim() : 'Conversation';
    const img = el.querySelector('img') ? el.querySelector('img').src : './Assets/img-icon-profile.jpeg';

    // fermer tout panel existant
    const existing = rightArea.querySelector('.dm-panel');
    if (existing) {
      existing.remove();
    }

    const panel = createChatPanel(chatId, name, img);
    rightArea.appendChild(panel);

    // force reflow puis ouvrir (pour transition)
    void panel.offsetWidth;
    panel.classList.add('open');

    // focus sur l'input
    const input = panel.querySelector(`#input-${chatId}`);
    if (input) input.focus();

    // close handler
    panel.querySelector('.close-chat').addEventListener('click', () => {
      panel.classList.remove('open');
      setTimeout(() => panel.remove(), 300);
    });

    // send handler (simulé)
    const sendBtn = panel.querySelector(`#send-${chatId}`);
    const messagesContainer = panel.querySelector(`#messages-${chatId}`);
    sendBtn.addEventListener('click', () => {
      const val = input.value.trim();
      if (!val) return;
      const bubble = document.createElement('div');
      bubble.className = 'msg out';
      bubble.textContent = val;
      messagesContainer.appendChild(bubble);
      input.value = '';
      messagesContainer.scrollTop = messagesContainer.scrollHeight;
      // réponse simulée
      setTimeout(() => {
        const reply = document.createElement('div');
        reply.className = 'msg in';
        reply.textContent = `Réponse automatique de ${name} : merci pour ton message !`;
        messagesContainer.appendChild(reply);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
      }, 700);
    });

    // Enter to send
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        sendBtn.click();
      }
    });
  }

  function handleActivate(e) {
    e.preventDefault();
    openChatInline(e.currentTarget);
  }

  mrSigma.addEventListener('click', handleActivate);
  mrSigma.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      openChatInline(e.currentTarget);
    }
  });
});
document.addEventListener('DOMContentLoaded', () => {
  const amisBtn = document.querySelector('.one');
  const rightArea = document.getElementById('r');

  if (!amisBtn || !rightArea) return;

  function closeDmPanel() {
    const panel = rightArea.querySelector('.dm-panel');
    if (!panel) return;
    panel.classList.remove('open');
    setTimeout(() => {
      if (panel.parentNode) panel.parentNode.removeChild(panel);
    }, 300);
  }

  amisBtn.addEventListener('click', (e) => {
    closeDmPanel();
    // optional: focus back to the friends list search input if present
    const searchInput = document.querySelector('.top-nav input, #search');
    if (searchInput) searchInput.focus();
  });

  amisBtn.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      closeDmPanel();
    }
  });
});
// Ajoute ceci à la fin de ton script.js (ou remplace la fonction createChatPanel/openChatInline existante)
document.addEventListener('DOMContentLoaded', () => {
  const rightArea = document.getElementById('r');
  if (!rightArea) return;

  // Historique simulé pour Mr_Sigma (et possibilité d'autres conversations)
  // Historique de conversation (anciens messages inclus)
const conversationHistory = {
  'mr-sigma': {
    messages: [
      { from: 'sigma', authorName: 'Mr_Sigma', text: "Par contre...\nNe pas avoir Discord en 2026...\nMe faire codé en plusieurs nuit blanche...", time: '2026-04-02 22:14' },
      { from: 'me', authorName: 'Vous', text: "La honte 🫵😂", time: '2026-04-02 22:16' },
      { from: 'sigma', authorName: 'Mr_Sigma', text: "Et GRATUITEMENT......", time: '2026-04-02 22:17' }
    ],
    older: [
      { from: 'sigma', authorName: 'Mr_Sigma', text: "Tu as vu le message du service communication ? Ils disent qu’un “canal externe” a été réactivé cette nuit.\nJe croyais que ce genre d’accès était bloqué depuis la migration.", time: '2026-03-30 22:10' },
      { from: 'me', authorName: 'E.P.I.P.B', text: "Oui, j’ai vu\nCe qui est bizarre, c’est que seuls quelques employés ont reçu la notification.\nTon nom est dans la liste, non ?", time: '2026-03-30 22:22' },
      { from: 'sigma', authorName: 'Mr_Sigma', text: "Apparemment oui.\nLa notification dit juste :\n“Un salon temporaire a été rouvert. Code : ak5XEGQ7fA.”", time: '2026-03-30 22:30' },
      { from: 'sigma', authorName: 'Mr_Sigma', text: "Mais je ne trouve rien dans nos outils internes.", time: '2026-03-30 22:30' },
      { from: 'me', authorName: 'E.P.I.P.B', text: "Normal.\nCe n’est pas un salon interne 🫵 😂", time: '2026-03-30 22:32' },
      { from: 'me', authorName: 'E.P.I.P.B', text: "C’est un serveur tiers, celui qu’on utilisait avant la refonte.", time: '2026-03-30 22:32' },
      { from: 'me', authorName: 'E.P.I.P.B', text: "Tu te souviens ? Celui dont le nom commence par Singe et finis par Sex", time: '2026-03-30 22:32' },
      { from: 'sigma', authorName: 'Mr_Sigma', text: "Ah… ce vieux truc.\nJe pensais qu’on l’avait supprimé 💀", time: '2026-03-30 22:32' },
      { from: 'me', authorName: 'E.P.I.P.B', text: "Supprimé, non.", time: '2026-03-30 22:33' },
      { from: 'me', authorName: 'E.P.I.P.B', text: "Mis en sommeil, oui.", time: '2026-03-30 22:33' },
      { from: 'me', authorName: 'E.P.I.P.B', text: "Et pour y accéder, il faut passer par le raccourci ultra‑court, celui qui ne contient que deux lettres.", time: '2026-03-30 22:33' },
      { from: 'me', authorName: 'E.P.I.P.B', text: "Tu sais, celui qu’on utilisait pour les invitations rapides.", time: '2026-03-30 22:33' },
      { from: 'sigma', authorName: 'Mr_Sigma', text: "Je teste\nça me demande de rejoindre un “salon temporaire”\nTu sais ce qu’il y a dedans ?", time: '2026-03-30 22:33' },
      { from: 'me', authorName: 'E.P.I.P.B', text: "Aucune idée\nMais si quelqu’un a pris la peine de réactiver ce canal après toutes ces années…\nC’est qu’il y a quelque chose à y trouver", time: '2026-03-30 22:35' },
      { from: 'sigma', authorName: 'Mr_Sigma', text: "Peut-être un détraqué", time: '2026-03-30 22:35' }
    ]
  }
};

// Helpers pour réponses automatiques et scroll
(function() {
  const autoReplies = [
    "Super, je note ça.",
    "Merci pour l'info, je regarde.",
    "Parfait, on en reparle bientôt.",
    "Bien reçu — je m'en occupe.",
    "Intéressant, merci !",
    "Je te confirme dès que possible.",
    "Ça marche pour moi.",
    "Bonne idée, on teste ça.",
    "Merci, c'est noté.",
    "Je te réponds après vérif."
  ];
  let lastAutoReply = null;
  function pickAutoReply() {
    if (autoReplies.length === 0) return "Ok.";
    let idx;
    do { idx = Math.floor(Math.random() * autoReplies.length); }
    while (autoReplies[idx] === lastAutoReply && autoReplies.length > 1);
    lastAutoReply = autoReplies[idx];
    return autoReplies[idx];
  }
  function isAtBottom(container, threshold = 60) {
    return (container.scrollHeight - container.clientHeight - container.scrollTop) < threshold;
  }
  function attachLoadOlderHandler(loadOlderBtn, convo, messagesContainer, displayName) {
    loadOlderBtn.addEventListener('click', () => {
      if (!convo || !Array.isArray(convo.older) || convo.older.length === 0) {
        loadOlderBtn.textContent = 'Aucun message ancien';
        loadOlderBtn.disabled = true;
        return;
      }
      const prevScrollHeight = messagesContainer.scrollHeight;
      const prevScrollTop = messagesContainer.scrollTop;
      // insérer anciens messages en tête (ordre chronologique)
      convo.older.slice().reverse().forEach(m => {
        const node = renderMessageNode(m, displayName);
        messagesContainer.insertBefore(node, messagesContainer.firstChild);
      });
      // recalculer scroll pour garder la même vue
      const newScrollHeight = messagesContainer.scrollHeight;
      messagesContainer.scrollTop = newScrollHeight - prevScrollHeight + prevScrollTop;
      convo.older = [];
      loadOlderBtn.textContent = 'Tous les anciens messages chargés';
      loadOlderBtn.disabled = true;
    });
  }
  function attachSendHandler(sendBtn, input, messagesContainer, convo, chatId, displayName) {
    sendBtn.addEventListener('click', () => {
      const val = input.value.trim();
      if (!val) return;
      const now = new Date();
      const ts = now.getFullYear() + '-' +
                 String(now.getMonth()+1).padStart(2,'0') + '-' +
                 String(now.getDate()).padStart(2,'0') + ' ' +
                 String(now.getHours()).padStart(2,'0') + ':' +
                 String(now.getMinutes()).padStart(2,'0');
      const outMsg = { from: 'me', text: val, time: ts, authorName: 'Vous' };
      const userWasAtBottom = isAtBottom(messagesContainer);
      messagesContainer.appendChild(renderMessageNode(outMsg, displayName));
      if (!conversationHistory[chatId]) conversationHistory[chatId] = { messages: [], older: [] };
      conversationHistory[chatId].messages.push(outMsg);
      if (userWasAtBottom) messagesContainer.scrollTop = messagesContainer.scrollHeight;
      input.value = '';
      input.focus();
      // réponse simulée différente et délai aléatoire
      setTimeout(() => {
        const replyText = pickAutoReply();
        const replyNow = new Date();
        const replyTs = replyNow.getFullYear() + '-' +
                        String(replyNow.getMonth()+1).padStart(2,'0') + '-' +
                        String(replyNow.getDate()).padStart(2,'0') + ' ' +
                        String(replyNow.getHours()).padStart(2,'0') + ':' +
                        String(replyNow.getMinutes()).padStart(2,'0');
        const replyMsg = { from: 'sigma', text: replyText, time: replyTs, authorName: displayName };
        const atBottomBeforeReply = isAtBottom(messagesContainer);
        messagesContainer.appendChild(renderMessageNode(replyMsg, displayName));
        conversationHistory[chatId].messages.push(replyMsg);
        if (userWasAtBottom || atBottomBeforeReply) messagesContainer.scrollTop = messagesContainer.scrollHeight;
      }, 600 + Math.floor(Math.random() * 700));
    });
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') { e.preventDefault(); sendBtn.click(); }
    });
  }
  window._chatHelpers = { pickAutoReply, isAtBottom, attachLoadOlderHandler, attachSendHandler };
})();

// fonctions utilitaires pour rendu
function escapeHtml(str) {
  return String(str || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
function renderMessageNode(msg, displayName) {
  if (!msg) return document.createElement('div');
  if (msg.from === 'system') {
    const sys = document.createElement('div');
    sys.className = 'msg system';
    sys.textContent = msg.text;
    return sys;
  }
  const node = document.createElement('div');
  node.className = `msg ${msg.from === 'me' ? 'out' : 'in'}`;
  const author = document.createElement('div');
  author.className = 'author';
  author.textContent = msg.from === 'me' ? (msg.authorName || 'Vous') : (msg.authorName || displayName || 'Interlocuteur');
  const bubble = document.createElement('div');
  bubble.className = 'bubble';
  bubble.innerHTML = `${escapeHtml(msg.text)}<div class="ts">${escapeHtml(msg.time || '')}</div>`;
  node.appendChild(author);
  node.appendChild(bubble);
  return node;
}

// création du panneau et ouverture inline
function createChatPanel(chatId, name, avatarSrc) {
  const panel = document.createElement('div');
  panel.className = 'dm-panel';
  panel.setAttribute('role', 'region');
  panel.setAttribute('aria-label', `Conversation avec ${name}`);
  panel.innerHTML = `
    <div class="chat-header">
      <div class="avatar"><img src="${avatarSrc}" alt="Avatar ${name}" style="width:100%;height:100%;object-fit:cover"></div>
      <div class="title">${name}</div>
      <button class="close-chat" aria-label="Fermer la conversation">&times;</button>
    </div>
    <div class="messages-wrapper">
      <button class="load-older" aria-label="Charger les messages plus anciens">Charger les messages anciens</button>
      <div class="messages" id="messages-${chatId}"></div>
    </div>
    <div class="composer">
      <input type="text" id="input-${chatId}" placeholder="Envoyer un message à ${name}" aria-label="Écrire un message">
      <button id="send-${chatId}" aria-label="Envoyer">Envoyer</button>
    </div>
  `;
  return panel;
}

function openChatInline(el) {
  const rightArea = document.getElementById('r');
  if (!rightArea) return;
  const chatId = el.dataset.chatId || 'mr-sigma';
  const name = el.querySelector('p') ? el.querySelector('p').textContent.trim() : 'Conversation';
  const img = el.querySelector('img') ? el.querySelector('img').src : './Assets/img-icon-profile.jpeg';
  const existing = rightArea.querySelector('.dm-panel');
  if (existing) existing.remove();
  const panel = createChatPanel(chatId, name, img);
  rightArea.appendChild(panel);
  void panel.offsetWidth;
  panel.classList.add('open');

  const messagesContainer = panel.querySelector(`#messages-${chatId}`);
  const input = panel.querySelector(`#input-${chatId}`);
  const sendBtn = panel.querySelector(`#send-${chatId}`);
  const loadOlderBtn = panel.querySelector('.load-older');

  // charger l'historique (messages récents)
  const convo = conversationHistory[chatId];
  if (convo && Array.isArray(convo.messages)) {
    convo.messages.forEach(m => messagesContainer.appendChild(renderMessageNode(m, name)));
    // scroll en bas après rendu initial
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  } else {
    const sys = document.createElement('div');
    sys.className = 'msg system';
    sys.textContent = `Aucune conversation précédente avec ${name}.`;
    messagesContainer.appendChild(sys);
  }

  // handlers
  panel.querySelector('.close-chat').addEventListener('click', () => {
    panel.classList.remove('open');
    setTimeout(() => panel.remove(), 300);
  });

  const helpers = window._chatHelpers || {};
  if (helpers.attachLoadOlderHandler) helpers.attachLoadOlderHandler(loadOlderBtn, convo, messagesContainer, name);
  if (helpers.attachSendHandler) helpers.attachSendHandler(sendBtn, input, messagesContainer, convo, chatId, name);

  // permettre scroll avec la molette naturellement (déjà géré par overflow-y)
  // focus sur l'input
  input.focus();
}

// attacher l'ouverture aux éléments .f-li[data-chat-id]
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.f-li[data-chat-id]').forEach(el => {
    el.addEventListener('click', (e) => openChatInline(e.currentTarget));
    el.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openChatInline(e.currentTarget); }
    });
  });
});


  function renderMessageNode(msg) {
    const node = document.createElement('div');
    node.className = `msg ${msg.from === 'me' ? 'out' : 'in'}`;
    node.innerHTML = `<div class="bubble">${escapeHtml(msg.text)}<div class="ts">${escapeHtml(msg.time)}</div></div>`;
    return node;
  }

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  function createChatPanel(chatId, name, avatarSrc) {
    const panel = document.createElement('div');
    panel.className = 'dm-panel';
    panel.setAttribute('role', 'region');
    panel.setAttribute('aria-label', `Conversation avec ${name}`);
    panel.innerHTML = `
      <div class="chat-header">
        <div class="avatar"><img src="${avatarSrc}" alt="Avatar ${name}" style="width:100%;height:100%;object-fit:cover"></div>
        <div class="title">${name}</div>
        <button class="close-chat" aria-label="Fermer la conversation">&times;</button>
      </div>
      <div class="messages-wrapper">
        <button class="load-older" aria-label="Charger les messages plus anciens">Charger les messages anciens</button>
        <div class="messages" id="messages-${chatId}"></div>
      </div>
      <div class="composer">
        <input type="text" id="input-${chatId}" placeholder="Envoyer un message à ${name}" aria-label="Écrire un message">
        <button id="send-${chatId}" aria-label="Envoyer">Envoyer</button>
      </div>
    `;
    return panel;
  }

  function openChatInline(el) {
    const chatId = el.dataset.chatId || 'chat';
    const name = el.querySelector('p') ? el.querySelector('p').textContent.trim() : 'Conversation';
    const img = el.querySelector('img') ? el.querySelector('img').src : './Assets/img-icon-profile.jpeg';

    const existing = rightArea.querySelector('.dm-panel');
    if (existing) existing.remove();

    const panel = createChatPanel(chatId, name, img);
    rightArea.appendChild(panel);
    void panel.offsetWidth;
    panel.classList.add('open');

    const messagesContainer = panel.querySelector(`#messages-${chatId}`);
    const input = panel.querySelector(`#input-${chatId}`);
    const sendBtn = panel.querySelector(`#send-${chatId}`);
    const loadOlderBtn = panel.querySelector('.load-older');

    // Charger l'historique existant (si présent)
    const convo = conversationHistory[chatId];
    if (convo && Array.isArray(convo.messages)) {
      convo.messages.forEach(m => messagesContainer.appendChild(renderMessageNode(m)));
      messagesContainer.scrollTop = messagesContainer.scrollHeight;
    } else {
      const sys = document.createElement('div');
      sys.className = 'msg system';
      sys.textContent = `Aucune conversation précédente avec ${name}.`;
      messagesContainer.appendChild(sys);
    }

    // Handler pour charger messages plus anciens (préfixe)
    loadOlderBtn.addEventListener('click', () => {
      if (!convo || !Array.isArray(convo.older) || convo.older.length === 0) {
        loadOlderBtn.textContent = 'Aucun message ancien';
        loadOlderBtn.disabled = true;
        return;
      }
      // Prépend older messages
      convo.older.slice().reverse().forEach(m => {
        const node = renderMessageNode(m);
        messagesContainer.insertBefore(node, messagesContainer.firstChild);
      });
      // Vider older pour simuler qu'on a tout chargé
      convo.older = [];
      loadOlderBtn.textContent = 'Tous les anciens messages chargés';
      loadOlderBtn.disabled = true;
    });

    // close handler
    panel.querySelector('.close-chat').addEventListener('click', () => {
      panel.classList.remove('open');
      setTimeout(() => panel.remove(), 300);
    });

    // send handler (simulé)
    sendBtn.addEventListener('click', () => {
      const val = input.value.trim();
      if (!val) return;
      const now = new Date();
      const ts = now.getFullYear() + '-' +
                 String(now.getMonth()+1).padStart(2,'0') + '-' +
                 String(now.getDate()).padStart(2,'0') + ' ' +
                 String(now.getHours()).padStart(2,'0') + ':' +
                 String(now.getMinutes()).padStart(2,'0');
      const outMsg = { from: 'me', text: val, time: ts };
      messagesContainer.appendChild(renderMessageNode(outMsg));
      // sauvegarde locale dans l'historique simulé
      if (!conversationHistory[chatId]) conversationHistory[chatId] = { messages: [], older: [] };
      conversationHistory[chatId].messages.push(outMsg);
      input.value = '';
      messagesContainer.scrollTop = messagesContainer.scrollHeight;

      setTimeout(() => {
        const reply = { from: 'sigma', text: `Je ne suis pas assez payé à l'EPIPB pour faire des messages générés via IA... Mais merci, j'ai bien reçu : "${val}"`, time: ts };
        messagesContainer.appendChild(renderMessageNode(reply));
        conversationHistory[chatId].messages.push(reply);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
      }, 700);
    });

    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        sendBtn.click();
      }
    });






    input.focus();
  }

  // Attacher au Mr_Sigma existant (ou à tout élément .f-li avec data-chat-id)
  document.querySelectorAll('.f-li[data-chat-id]').forEach(el => {
    el.addEventListener('click', (e) => openChatInline(e.currentTarget));
    el.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openChatInline(e.currentTarget);
      }
    });
  });
});
// Ajoute/Remplace ces fonctions et handlers dans ton script (à l'intérieur de openChatInline ou juste après la création des éléments)
(function() {
  // Réponses automatiques variées (sans être identiques)
  const autoReplies = [
    "Super, je note ça.",
    "Merci pour l'info, je regarde.",
    "Parfait, on en reparle bientôt.",
    "Bien reçu — je m'en occupe.",
    "Intéressant, merci !",
    "Je te confirme dès que possible.",
    "Ça marche pour moi.",
    "Bonne idée, on teste ça.",
    "Merci, c'est noté.",
    "Je te réponds après vérif."
  ];
  let lastAutoReply = null;

  function pickAutoReply() {
    if (autoReplies.length === 0) return "Ok.";
    let idx;
    do {
      idx = Math.floor(Math.random() * autoReplies.length);
    } while (autoReplies[idx] === lastAutoReply && autoReplies.length > 1);
    lastAutoReply = autoReplies[idx];
    return autoReplies[idx];
  }

  function isAtBottom(container, threshold = 60) {
    return (container.scrollHeight - container.clientHeight - container.scrollTop) < threshold;
  }

  // Handler pour charger anciens messages en préservant la position de scroll
  function attachLoadOlderHandler(loadOlderBtn, convo, messagesContainer, displayName) {
    loadOlderBtn.addEventListener('click', () => {
      if (!convo || !Array.isArray(convo.older) || convo.older.length === 0) {
        loadOlderBtn.textContent = 'Aucun message ancien';
        loadOlderBtn.disabled = true;
        return;
      }
      const prevScrollHeight = messagesContainer.scrollHeight;
      const prevScrollTop = messagesContainer.scrollTop;

      // Insérer les anciens messages en tête (ordre chronologique)
      convo.older.slice().reverse().forEach(m => {
        const node = renderMessageNode(m, displayName);
        messagesContainer.insertBefore(node, messagesContainer.firstChild);
      });

      // recalculer le scroll pour garder la vue sur le même message
      const newScrollHeight = messagesContainer.scrollHeight;
      messagesContainer.scrollTop = newScrollHeight - prevScrollHeight + prevScrollTop;

      convo.older = [];
      loadOlderBtn.textContent = 'Tous les anciens messages chargés';
      loadOlderBtn.disabled = true;
    });
  }

  // Handler d'envoi qui respecte le scroll de l'utilisateur et génère une réponse différente
  function attachSendHandler(sendBtn, input, messagesContainer, convo, chatId, displayName) {
    sendBtn.addEventListener('click', () => {
      const val = input.value.trim();
      if (!val) return;

      const now = new Date();
      const ts = now.getFullYear() + '-' +
                 String(now.getMonth()+1).padStart(2,'0') + '-' +
                 String(now.getDate()).padStart(2,'0') + ' ' +
                 String(now.getHours()).padStart(2,'0') + ':' +
                 String(now.getMinutes()).padStart(2,'0');

      const outMsg = { from: 'me', text: val, time: ts, authorName: 'Vous' };

      const userWasAtBottom = isAtBottom(messagesContainer);

      messagesContainer.appendChild(renderMessageNode(outMsg, displayName));
      if (!convo) convo = { messages: [], older: [] };
      if (!conversationHistory[chatId]) conversationHistory[chatId] = convo;
      conversationHistory[chatId].messages.push(outMsg);

      if (userWasAtBottom) {
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
      }

      input.value = '';
      input.focus();

      // Réponse simulée, différente et avec délai
      setTimeout(() => {
        const replyText = pickAutoReply();
        const replyNow = new Date();
        const replyTs = replyNow.getFullYear() + '-' +
                        String(replyNow.getMonth()+1).padStart(2,'0') + '-' +
                        String(replyNow.getDate()).padStart(2,'0') + ' ' +
                        String(replyNow.getHours()).padStart(2,'0') + ':' +
                        String(replyNow.getMinutes()).padStart(2,'0');
        const replyMsg = { from: 'sigma', text: replyText, time: replyTs, authorName: displayName };

        const atBottomBeforeReply = isAtBottom(messagesContainer);
        messagesContainer.appendChild(renderMessageNode(replyMsg, displayName));
        conversationHistory[chatId].messages.push(replyMsg);

        if (userWasAtBottom || atBottomBeforeReply) {
          messagesContainer.scrollTop = messagesContainer.scrollHeight;
        }
      }, 600 + Math.floor(Math.random() * 700)); // délai aléatoire entre 600ms et 1300ms
    });

    // Envoi avec Enter
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        sendBtn.click();
      }
    });
  }

  // Expose helpers globalement pour réutilisation dans openChatInline
  window._chatHelpers = {
    pickAutoReply,
    isAtBottom,
    attachLoadOlderHandler,
    attachSendHandler
  };
})();

// Conversation simulée pour Gpro-fighter
const conversationHistory = conversationHistory || {}; // si conversationHistory existe déjà, on réutilise
conversationHistory['gpro-fighter'] = {
  messages: [
    { from: 'gpro', authorName: 'Gpro-fighter', text: "Yo — tu as testé la dernière build du bot ?", time: '2026-04-03 00:12' },
    { from: 'me', authorName: 'Vous', text: "Pas encore, je vais lancer les tests demain matin.", time: '2026-04-03 00:15' },
    { from: 'gpro', authorName: 'Gpro-fighter', text: "Ok, tiens-moi au courant si tu vois des erreurs de permission.", time: '2026-04-03 00:16' }
  ],
  older: [
    { from: 'gpro', authorName: 'Gpro-fighter', text: "Rappel : on a migré les webhooks la semaine dernière.", time: '2026-03-28 09:02' },
    { from: 'me', authorName: 'Vous', text: "Oui, j'ai mis à jour les tokens et vérifié les endpoints.", time: '2026-03-28 09:10' },
    { from: 'gpro', authorName: 'Gpro-fighter', text: "Parfait. Si tu veux, je peux lancer un run de charge ce soir.", time: '2026-03-28 09:12' }
  ]
};

// Helpers pour réponses automatiques et gestion du scroll (réutilisables)
(function() {
  const autoReplies = [
    "Reçu, je regarde ça.",
    "Merci — je te dis quand c'est fait.",
    "Ok, je lance un test rapide.",
    "Bonne idée, je note.",
    "Je te confirme après vérif."
  ];
  let lastAutoReply = null;
  function pickAutoReply() {
    if (autoReplies.length === 0) return "Ok.";
    let idx;
    do { idx = Math.floor(Math.random() * autoReplies.length); }
    while (autoReplies[idx] === lastAutoReply && autoReplies.length > 1);
    lastAutoReply = autoReplies[idx];
    return autoReplies[idx];
  }
  function isAtBottom(container, threshold = 60) {
    return (container.scrollHeight - container.clientHeight - container.scrollTop) < threshold;
  }
  function attachLoadOlderHandler(loadOlderBtn, convo, messagesContainer, displayName) {
    loadOlderBtn.addEventListener('click', () => {
      if (!convo || !Array.isArray(convo.older) || convo.older.length === 0) {
        loadOlderBtn.textContent = 'Aucun message ancien';
        loadOlderBtn.disabled = true;
        return;
      }
      const prevScrollHeight = messagesContainer.scrollHeight;
      const prevScrollTop = messagesContainer.scrollTop;
      convo.older.slice().reverse().forEach(m => {
        const node = renderMessageNode(m, displayName);
        messagesContainer.insertBefore(node, messagesContainer.firstChild);
      });
      const newScrollHeight = messagesContainer.scrollHeight;
      messagesContainer.scrollTop = newScrollHeight - prevScrollHeight + prevScrollTop;
      convo.older = [];
      loadOlderBtn.textContent = 'Tous les anciens messages chargés';
      loadOlderBtn.disabled = true;
    });
  }
  function attachSendHandler(sendBtn, input, messagesContainer, convo, chatId, displayName) {
    sendBtn.addEventListener('click', () => {
      const val = input.value.trim();
      if (!val) return;
      const now = new Date();
      const ts = now.getFullYear() + '-' +
                 String(now.getMonth()+1).padStart(2,'0') + '-' +
                 String(now.getDate()).padStart(2,'0') + ' ' +
                 String(now.getHours()).padStart(2,'0') + ':' +
                 String(now.getMinutes()).padStart(2,'0');
      const outMsg = { from: 'me', text: val, time: ts, authorName: 'Vous' };
      const userWasAtBottom = isAtBottom(messagesContainer);
      messagesContainer.appendChild(renderMessageNode(outMsg, displayName));
      if (!conversationHistory[chatId]) conversationHistory[chatId] = { messages: [], older: [] };
      conversationHistory[chatId].messages.push(outMsg);
      if (userWasAtBottom) messagesContainer.scrollTop = messagesContainer.scrollHeight;
      input.value = '';
      input.focus();
      setTimeout(() => {
        const replyText = pickAutoReply();
        const replyNow = new Date();
        const replyTs = replyNow.getFullYear() + '-' +
                        String(replyNow.getMonth()+1).padStart(2,'0') + '-' +
                        String(replyNow.getDate()).padStart(2,'0') + ' ' +
                        String(replyNow.getHours()).padStart(2,'0') + ':' +
                        String(replyNow.getMinutes()).padStart(2,'0');
        const replyMsg = { from: 'gpro', text: replyText, time: replyTs, authorName: displayName };
        const atBottomBeforeReply = isAtBottom(messagesContainer);
        messagesContainer.appendChild(renderMessageNode(replyMsg, displayName));
        conversationHistory[chatId].messages.push(replyMsg);
        if (userWasAtBottom || atBottomBeforeReply) messagesContainer.scrollTop = messagesContainer.scrollHeight;
      }, 500 + Math.floor(Math.random() * 900));
    });
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') { e.preventDefault(); sendBtn.click(); }
    });
  }
  window._gproChatHelpers = { pickAutoReply, isAtBottom, attachLoadOlderHandler, attachSendHandler };
})();

// Utilitaires de rendu (auteur + bulle)
function escapeHtml(str) {
  return String(str || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
function renderMessageNode(msg, displayName) {
  if (!msg) return document.createElement('div');
  if (msg.from === 'system') {
    const sys = document.createElement('div');
    sys.className = 'msg system';
    sys.textContent = msg.text;
    return sys;
  }
  const node = document.createElement('div');
  node.className = `msg ${msg.from === 'me' ? 'out' : 'in'}`;
  const author = document.createElement('div');
  author.className = 'author';
  author.textContent = msg.from === 'me' ? (msg.authorName || 'Vous') : (msg.authorName || displayName || 'Interlocuteur');
  const bubble = document.createElement('div');
  bubble.className = 'bubble';
  bubble.innerHTML = `${escapeHtml(msg.text)}<div class="ts">${escapeHtml(msg.time || '')}</div>`;
  node.appendChild(author);
  node.appendChild(bubble);
  return node;
}

// Création du panneau et ouverture inline (identique à Mr_Sigma)
function createChatPanelGpro(chatId, name, avatarSrc) {
  const panel = document.createElement('div');
  panel.className = 'dm-panel';
  panel.setAttribute('role', 'region');
  panel.setAttribute('aria-label', `Conversation avec ${name}`);
  panel.innerHTML = `
    <div class="chat-header">
      <div class="avatar"><img src="${avatarSrc}" alt="Avatar ${name}" style="width:100%;height:100%;object-fit:cover"></div>
      <div class="title">${name}</div>
      <button class="close-chat" aria-label="Fermer la conversation">&times;</button>
    </div>
    <div class="messages-wrapper">
      <button class="load-older" aria-label="Charger les messages plus anciens">Charger les messages anciens</button>
      <div class="messages" id="messages-${chatId}"></div>
    </div>
    <div class="composer">
      <input type="text" id="input-${chatId}" placeholder="Envoyer un message à ${name}" aria-label="Écrire un message">
      <button id="send-${chatId}" aria-label="Envoyer">Envoyer</button>
    </div>
  `;
  return panel;
}

function openGproChatInline(el) {
  const rightArea = document.getElementById('r');
  if (!rightArea) return;
  const chatId = el.dataset.chatId || 'gpro-fighter';
  const name = el.querySelector('p') ? el.querySelector('p').textContent.trim() : 'Conversation';
  const img = el.querySelector('img') ? el.querySelector('img').src : './Assets/gpro-avatar.jpeg';
  const existing = rightArea.querySelector('.dm-panel');
  if (existing) existing.remove();
  const panel = createChatPanelGpro(chatId, name, img);
  rightArea.appendChild(panel);
  void panel.offsetWidth;
  panel.classList.add('open');

  const messagesContainer = panel.querySelector(`#messages-${chatId}`);
  const input = panel.querySelector(`#input-${chatId}`);
  const sendBtn = panel.querySelector(`#send-${chatId}`);
  const loadOlderBtn = panel.querySelector('.load-older');

  const convo = conversationHistory[chatId];
  if (convo && Array.isArray(convo.messages)) {
    convo.messages.forEach(m => messagesContainer.appendChild(renderMessageNode(m, name)));
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  } else {
    const sys = document.createElement('div');
    sys.className = 'msg system';
    sys.textContent = `Aucune conversation précédente avec ${name}.`;
    messagesContainer.appendChild(sys);
  }

  panel.querySelector('.close-chat').addEventListener('click', () => {
    panel.classList.remove('open');
    setTimeout(() => panel.remove(), 300);
  });

  const helpers = window._gproChatHelpers || {};
  if (helpers.attachLoadOlderHandler) helpers.attachLoadOlderHandler(loadOlderBtn, convo, messagesContainer, name);
  if (helpers.attachSendHandler) helpers.attachSendHandler(sendBtn, input, messagesContainer, convo, chatId, name);

  input.focus();
}

// Attacher l'ouverture au clic/entrée sur l'élément .f-li[data-chat-id="gpro-fighter"]
document.addEventListener('DOMContentLoaded', () => {
  const el = document.querySelector('.f-li[data-chat-id="gpro-fighter"]');
  if (!el) return;
  el.addEventListener('click', (e) => openGproChatInline(e.currentTarget));
  el.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openGproChatInline(e.currentTarget); }
  });
});

// Assure-toi de placer ce bloc après les helpers et la définition globale conversationHistory existante
window.conversationHistory = window.conversationHistory || {};

// Historique simulé pour moiz-hussain
window.conversationHistory['moiz-hussain'] = {
  messages: [
    { from: 'moiz', authorName: 'moiz hussain', text: "Salut, tu as 5 minutes pour regarder le ticket #342 ?", time: '2026-04-02 18:05' },
    { from: 'me', authorName: 'Vous', text: "Oui, je peux jeter un œil maintenant.", time: '2026-04-02 18:07' },
    { from: 'moiz', authorName: 'moiz hussain', text: "Top. J'ai ajouté des logs et une capture d'écran dans le ticket.", time: '2026-04-02 18:09' }
  ],
  older: [
    { from: 'moiz', authorName: 'moiz hussain', text: "Rappel : réunion d'équipe demain 10h.", time: '2026-03-29 09:12' },
    { from: 'me', authorName: 'Vous', text: "Noté, je serai présent.", time: '2026-03-29 09:15' }
  ]
};

// Réutilise les helpers existants si présents, sinon crée des fallback simples
const _chatHelpers = window._chatHelpers || (function(){
  const autoReplies = ["Reçu, je regarde.", "Merci, je te dis.", "Ok, je m'en occupe."];
  let last = null;
  function pickAutoReply() {
    let idx;
    do { idx = Math.floor(Math.random() * autoReplies.length); }
    while (autoReplies[idx] === last && autoReplies.length > 1);
    last = autoReplies[idx];
    return autoReplies[idx];
  }
  function isAtBottom(container, threshold = 60) {
    return (container.scrollHeight - container.clientHeight - container.scrollTop) < threshold;
  }
  function attachLoadOlderHandler(loadOlderBtn, convo, messagesContainer, displayName) {
    loadOlderBtn.addEventListener('click', () => {
      if (!convo || !Array.isArray(convo.older) || convo.older.length === 0) {
        loadOlderBtn.textContent = 'Aucun message ancien';
        loadOlderBtn.disabled = true;
        return;
      }
      const prevScrollHeight = messagesContainer.scrollHeight;
      const prevScrollTop = messagesContainer.scrollTop;
      convo.older.slice().reverse().forEach(m => {
        const node = renderMessageNode(m, displayName);
        messagesContainer.insertBefore(node, messagesContainer.firstChild);
      });
      messagesContainer.scrollTop = messagesContainer.scrollHeight - prevScrollHeight + prevScrollTop;
      convo.older = [];
      loadOlderBtn.textContent = 'Tous les anciens messages chargés';
      loadOlderBtn.disabled = true;
    });
  }
  function attachSendHandler(sendBtn, input, messagesContainer, convo, chatId, displayName) {
    sendBtn.addEventListener('click', () => {
      const val = input.value.trim();
      if (!val) return;
      const now = new Date();
      const ts = now.getFullYear() + '-' +
                 String(now.getMonth()+1).padStart(2,'0') + '-' +
                 String(now.getDate()).padStart(2,'0') + ' ' +
                 String(now.getHours()).padStart(2,'0') + ':' +
                 String(now.getMinutes()).padStart(2,'0');
      const outMsg = { from: 'me', text: val, time: ts, authorName: 'Vous' };
      const userWasAtBottom = isAtBottom(messagesContainer);
      messagesContainer.appendChild(renderMessageNode(outMsg, displayName));
      window.conversationHistory[chatId] = window.conversationHistory[chatId] || { messages: [], older: [] };
      window.conversationHistory[chatId].messages.push(outMsg);
      if (userWasAtBottom) messagesContainer.scrollTop = messagesContainer.scrollHeight;
      input.value = '';
      input.focus();
      setTimeout(() => {
        const replyText = pickAutoReply();
        const replyNow = new Date();
        const replyTs = replyNow.getFullYear() + '-' +
                        String(replyNow.getMonth()+1).padStart(2,'0') + '-' +
                        String(replyNow.getDate()).padStart(2,'0') + ' ' +
                        String(replyNow.getHours()).padStart(2,'0') + ':' +
                        String(replyNow.getMinutes()).padStart(2,'0');
        const replyMsg = { from: 'moiz', text: replyText, time: replyTs, authorName: displayName };
        const atBottomBeforeReply = isAtBottom(messagesContainer);
        messagesContainer.appendChild(renderMessageNode(replyMsg, displayName));
        window.conversationHistory[chatId].messages.push(replyMsg);
        if (userWasAtBottom || atBottomBeforeReply) messagesContainer.scrollTop = messagesContainer.scrollHeight;
      }, 500 + Math.floor(Math.random() * 800));
    });
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') { e.preventDefault(); sendBtn.click(); }
    });
  }
  return { pickAutoReply, isAtBottom, attachLoadOlderHandler, attachSendHandler };
})();

// Utilitaires de rendu (si déjà définis, ces fonctions seront réutilisées)
function escapeHtml(str) {
  return String(str || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
function renderMessageNode(msg, displayName) {
  if (!msg) return document.createElement('div');
  if (msg.from === 'system') {
    const sys = document.createElement('div');
    sys.className = 'msg system';
    sys.textContent = msg.text;
    return sys;
  }
  const node = document.createElement('div');
  node.className = `msg ${msg.from === 'me' ? 'out' : 'in'}`;
  const author = document.createElement('div');
  author.className = 'author';
  author.textContent = msg.from === 'me' ? (msg.authorName || 'Vous') : (msg.authorName || displayName || 'Interlocuteur');
  const bubble = document.createElement('div');
  bubble.className = 'bubble';
  bubble.innerHTML = `${escapeHtml(msg.text)}<div class="ts">${escapeHtml(msg.time || '')}</div>`;
  node.appendChild(author);
  node.appendChild(bubble);
  return node;
}

// Création du panneau et ouverture inline (réutilise la structure existante)
function createChatPanelFor(contactId, name, avatarSrc) {
  const panel = document.createElement('div');
  panel.className = 'dm-panel';
  panel.setAttribute('role', 'region');
  panel.setAttribute('aria-label', `Conversation avec ${name}`);
  panel.innerHTML = `
    <div class="chat-header">
      <div class="avatar"><img src="${avatarSrc}" alt="Avatar ${name}" style="width:100%;height:100%;object-fit:cover"></div>
      <div class="title">${name}</div>
      <button class="close-chat" aria-label="Fermer la conversation">&times;</button>
    </div>
    <div class="messages-wrapper">
      <button class="load-older" aria-label="Charger les messages plus anciens">Charger les messages anciens</button>
      <div class="messages" id="messages-${contactId}"></div>
    </div>
    <div class="composer">
      <input type="text" id="input-${contactId}" placeholder="Envoyer un message à ${name}" aria-label="Écrire un message">
      <button id="send-${contactId}" aria-label="Envoyer">Envoyer</button>
    </div>
  `;
  return panel;
}

function openMoizChatInline(el) {
  const rightArea = document.getElementById('r');
  if (!rightArea) return;
  const chatId = el.dataset.chatId || 'moiz-hussain';
  const name = el.querySelector('p') ? el.querySelector('p').textContent.trim() : 'moiz hussain';
  const img = el.querySelector('img') ? el.querySelector('img').src : './Assets/moiz-avatar.jpeg';
  const existing = rightArea.querySelector('.dm-panel');
  if (existing) existing.remove();
  const panel = createChatPanelFor(chatId, name, img);
  rightArea.appendChild(panel);
  void panel.offsetWidth;
  panel.classList.add('open');

  const messagesContainer = panel.querySelector(`#messages-${chatId}`);
  const input = panel.querySelector(`#input-${chatId}`);
  const sendBtn = panel.querySelector(`#send-${chatId}`);
  const loadOlderBtn = panel.querySelector('.load-older');

  const convo = window.conversationHistory[chatId];
  if (convo && Array.isArray(convo.messages)) {
    convo.messages.forEach(m => messagesContainer.appendChild(renderMessageNode(m, name)));
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  } else {
    const sys = document.createElement('div');
    sys.className = 'msg system';
    sys.textContent = `Aucune conversation précédente avec ${name}.`;
    messagesContainer.appendChild(sys);
  }

  panel.querySelector('.close-chat').addEventListener('click', () => {
    panel.classList.remove('open');
    setTimeout(() => panel.remove(), 300);
  });

  _chatHelpers.attachLoadOlderHandler(loadOlderBtn, convo, messagesContainer, name);
  _chatHelpers.attachSendHandler(sendBtn, input, messagesContainer, convo, chatId, name);

  input.focus();
}

// Attacher l'ouverture au clic/entrée sur l'élément .f-li[data-chat-id="moiz-hussain"]
document.addEventListener('DOMContentLoaded', () => {
  const el = document.querySelector('.f-li[data-chat-id="moiz-hussain"]');
  if (!el) return;
  el.addEventListener('click', (e) => openMoizChatInline(e.currentTarget));
  el.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openMoizChatInline(e.currentTarget); }
  });
});
// Assure-toi que window.conversationHistory existe
window.conversationHistory = window.conversationHistory || {};

// Historique simulé pour Unknown_Inj3ctor
window.conversationHistory['unknown-inj3ctor'] = {
  messages: [
    { from: 'unknown', authorName: 'Unknown_Inj3ctor', text: "Salut — tu as 5 minutes pour vérifier ce log ?", time: '2026-04-01 21:42' },
    { from: 'me', authorName: 'Vous', text: "Oui, je regarde tout de suite.", time: '2026-04-01 21:44' },
    { from: 'unknown', authorName: 'Unknown_Inj3ctor', text: "Merci. J'ai l'impression que c'est lié à la migration.", time: '2026-04-01 21:46' }
  ],
  older: [
    { from: 'unknown', authorName: 'Unknown_Inj3ctor', text: "Rappel : la clé d'API a été mise à jour la semaine dernière.", time: '2026-03-25 10:12' },
    { from: 'me', authorName: 'Vous', text: "Ok, je vérifierai les permissions ce matin.", time: '2026-03-25 10:15' }
  ]
};

// Réutilise les helpers existants si présents, sinon fallback léger
const _chatHelpersFallback = window._chatHelpers || (function(){
  const autoReplies = ["Reçu, je regarde.", "Je te dis quand c'est fait.", "Ok, je m'en occupe."];
  let last = null;
  function pickAutoReply() {
    let idx;
    do { idx = Math.floor(Math.random() * autoReplies.length); }
    while (autoReplies[idx] === last && autoReplies.length > 1);
    last = autoReplies[idx];
    return autoReplies[idx];
  }
  function isAtBottom(container, threshold = 60) {
    return (container.scrollHeight - container.clientHeight - container.scrollTop) < threshold;
  }
  function attachLoadOlderHandler(loadOlderBtn, convo, messagesContainer, displayName) {
    loadOlderBtn.addEventListener('click', () => {
      if (!convo || !Array.isArray(convo.older) || convo.older.length === 0) {
        loadOlderBtn.textContent = 'Aucun message ancien';
        loadOlderBtn.disabled = true;
        return;
      }
      const prevScrollHeight = messagesContainer.scrollHeight;
      const prevScrollTop = messagesContainer.scrollTop;
      convo.older.slice().reverse().forEach(m => {
        const node = renderMessageNode(m, displayName);
        messagesContainer.insertBefore(node, messagesContainer.firstChild);
      });
      messagesContainer.scrollTop = messagesContainer.scrollHeight - prevScrollHeight + prevScrollTop;
      convo.older = [];
      loadOlderBtn.textContent = 'Tous les anciens messages chargés';
      loadOlderBtn.disabled = true;
    });
  }
  function attachSendHandler(sendBtn, input, messagesContainer, convo, chatId, displayName) {
    sendBtn.addEventListener('click', () => {
      const val = input.value.trim();
      if (!val) return;
      const now = new Date();
      const ts = now.getFullYear() + '-' +
                 String(now.getMonth()+1).padStart(2,'0') + '-' +
                 String(now.getDate()).padStart(2,'0') + ' ' +
                 String(now.getHours()).padStart(2,'0') + ':' +
                 String(now.getMinutes()).padStart(2,'0');
      const outMsg = { from: 'me', text: val, time: ts, authorName: 'Vous' };
      const userWasAtBottom = isAtBottom(messagesContainer);
      messagesContainer.appendChild(renderMessageNode(outMsg, displayName));
      window.conversationHistory[chatId] = window.conversationHistory[chatId] || { messages: [], older: [] };
      window.conversationHistory[chatId].messages.push(outMsg);
      if (userWasAtBottom) messagesContainer.scrollTop = messagesContainer.scrollHeight;
      input.value = '';
      input.focus();
      setTimeout(() => {
        const replyText = pickAutoReply();
        const replyNow = new Date();
        const replyTs = replyNow.getFullYear() + '-' +
                        String(replyNow.getMonth()+1).padStart(2,'0') + '-' +
                        String(replyNow.getDate()).padStart(2,'0') + ' ' +
                        String(replyNow.getHours()).padStart(2,'0') + ':' +
                        String(replyNow.getMinutes()).padStart(2,'0');
        const replyMsg = { from: 'unknown', text: replyText, time: replyTs, authorName: displayName };
        const atBottomBeforeReply = isAtBottom(messagesContainer);
        messagesContainer.appendChild(renderMessageNode(replyMsg, displayName));
        window.conversationHistory[chatId].messages.push(replyMsg);
        if (userWasAtBottom || atBottomBeforeReply) messagesContainer.scrollTop = messagesContainer.scrollHeight;
      }, 500 + Math.floor(Math.random() * 800));
    });
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') { e.preventDefault(); sendBtn.click(); }
    });
  }
  return { pickAutoReply, isAtBottom, attachLoadOlderHandler, attachSendHandler };
})();

// Utilitaires de rendu (réutilisables)
function escapeHtml(str) {
  return String(str || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
function renderMessageNode(msg, displayName) {
  if (!msg) return document.createElement('div');
  if (msg.from === 'system') {
    const sys = document.createElement('div');
    sys.className = 'msg system';
    sys.textContent = msg.text;
    return sys;
  }
  const node = document.createElement('div');
  node.className = `msg ${msg.from === 'me' ? 'out' : 'in'}`;
  const author = document.createElement('div');
  author.className = 'author';
  author.textContent = msg.from === 'me' ? (msg.authorName || 'Vous') : (msg.authorName || displayName || 'Interlocuteur');
  const bubble = document.createElement('div');
  bubble.className = 'bubble';
  bubble.innerHTML = `${escapeHtml(msg.text)}<div class="ts">${escapeHtml(msg.time || '')}</div>`;
  node.appendChild(author);
  node.appendChild(bubble);
  return node;
}

// Création du panneau et ouverture inline (réutilise la structure existante)
function createChatPanelForUnknown(chatId, name, avatarSrc) {
  const panel = document.createElement('div');
  panel.className = 'dm-panel unknown';
  panel.setAttribute('role', 'region');
  panel.setAttribute('aria-label', `Conversation avec ${name}`);
  panel.innerHTML = `
    <div class="chat-header">
      <div class="avatar"><img src="${avatarSrc}" alt="Avatar ${name}" style="width:100%;height:100%;object-fit:cover"></div>
      <div class="title">${name}</div>
      <button class="close-chat" aria-label="Fermer la conversation">&times;</button>
    </div>
    <div class="messages-wrapper">
      <button class="load-older" aria-label="Charger les messages plus anciens">Charger les messages anciens</button>
      <div class="messages" id="messages-${chatId}"></div>
    </div>
    <div class="composer">
      <input type="text" id="input-${chatId}" placeholder="Envoyer un message à ${name}" aria-label="Écrire un message">
      <button id="send-${chatId}" aria-label="Envoyer">Envoyer</button>
    </div>
  `;
  return panel;
}

function openUnknownChatInline(el) {
  const rightArea = document.getElementById('r');
  if (!rightArea) return;
  const chatId = el.dataset.chatId || 'unknown-inj3ctor';
  const name = el.querySelector('p') ? el.querySelector('p').textContent.trim() : 'Unknown_Inj3ctor';
  const img = el.querySelector('img') ? el.querySelector('img').src : './Assets/unknown-avatar.jpeg';
  const existing = rightArea.querySelector('.dm-panel');
  if (existing) existing.remove();
  const panel = createChatPanelForUnknown(chatId, name, img);
  rightArea.appendChild(panel);
  void panel.offsetWidth;
  panel.classList.add('open');

  const messagesContainer = panel.querySelector(`#messages-${chatId}`);
  const input = panel.querySelector(`#input-${chatId}`);
  const sendBtn = panel.querySelector(`#send-${chatId}`);
  const loadOlderBtn = panel.querySelector('.load-older');

  const convo = window.conversationHistory[chatId];
  if (convo && Array.isArray(convo.messages)) {
    convo.messages.forEach(m => messagesContainer.appendChild(renderMessageNode(m, name)));
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  } else {
    const sys = document.createElement('div');
    sys.className = 'msg system';
    sys.textContent = `Aucune conversation précédente avec ${name}.`;
    messagesContainer.appendChild(sys);
  }

  panel.querySelector('.close-chat').addEventListener('click', () => {
    panel.classList.remove('open');
    setTimeout(() => panel.remove(), 300);
  });

  const helpers = window._chatHelpers || _chatHelpersFallback;
  if (helpers.attachLoadOlderHandler) helpers.attachLoadOlderHandler(loadOlderBtn, convo, messagesContainer, name);
  if (helpers.attachSendHandler) helpers.attachSendHandler(sendBtn, input, messagesContainer, convo, chatId, name);

  input.focus();
}

// Attacher l'ouverture au clic/entrée sur l'élément .f-li[data-chat-id="unknown-inj3ctor"]
document.addEventListener('DOMContentLoaded', () => {
  const el = document.querySelector('.f-li[data-chat-id="unknown-inj3ctor"]');
  if (!el) return;
  el.addEventListener('click', (e) => openUnknownChatInline(e.currentTarget));
  el.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openUnknownChatInline(e.currentTarget); }
  });
});

