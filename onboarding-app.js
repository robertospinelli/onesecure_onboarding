/* ONESecure × Alta Defensivos — Onboarding app
 * Renders sidebar nav + all sections from window.ONB, handles
 * navigation, pagination and localStorage persistence. */
(function () {
  const D = window.ONB;
  const STORE = "onb-alta-defensivos";
  const EMAIL = "stephanie.borges@teleone.com.br";
  const state = JSON.parse(localStorage.getItem(STORE) || "{}");
  const save = () => localStorage.setItem(STORE, JSON.stringify(state));

  /* ---- inline icons (DS-native: check + shield) ---- */
  const ICON = {
    check: '<svg viewBox="0 0 20.617 14.967" fill="none"><path d="M7.051 11.7 18.351.4C18.617.133 18.928 0 19.284 0c.356 0 .667.133.933.4.267.267.4.583.4.95 0 .367-.133.683-.4.95L7.984 14.567c-.267.266-.578.4-.933.4-.356 0-.667-.134-.934-.4L.384 8.833C.117 8.567-.01 8.25.001 7.883.012 7.517.151 7.2.417 6.933.684 6.667 1.001 6.533 1.367 6.533c.367 0 .684.134.95.4L7.051 11.7Z" fill="currentColor"/></svg>',
    shield: '<svg viewBox="0 0 42.667 52.667" fill="none"><path d="M18.533 28.133 14.8 24.4c-.533-.533-1.156-.8-1.867-.8-.711 0-1.333.267-1.866.8-.534.533-.8 1.167-.8 1.9 0 .733.266 1.367.8 1.9l5.6 5.667c.533.533 1.155.8 1.866.8.711 0 1.334-.267 1.867-.8l11.333-11.334c.534-.533.8-1.166.8-1.9 0-.733-.266-1.366-.8-1.9-.533-.533-1.166-.8-1.9-.8-.733 0-1.366.267-1.9.8l-9.4 9.4ZM20.467 52.6c-.267-.044-.534-.111-.8-.2-6-2-10.778-5.7-14.334-11.1C1.778 35.9 0 30.089 0 23.867V11.267c0-1.111.322-2.111.967-3 .644-.889 1.477-1.534 2.5-1.934l16-6C20.089.111 20.711 0 21.333 0c.623 0 1.245.111 1.867.333l16 6c1.022.4 1.856 1.045 2.5 1.934.644.889.967 1.889.967 3v12.6c0 6.222-1.778 12.033-5.334 17.433-3.555 5.4-8.333 9.1-14.333 11.1-.267.089-.533.156-.8.2-.267.044-.556.067-.867.067-.311 0-.6-.023-.866-.067ZM21.333 47.333c4.623-1.466 8.445-4.4 11.467-8.8 3.022-4.4 4.533-9.289 4.533-14.666V11.267l-16-6-16 6v12.6c0 5.377 1.511 10.266 4.534 14.666 3.022 4.4 6.844 7.334 11.466 8.8Z" fill="currentColor"/></svg>',
    arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>'
  };
  const esc = (s) => String(s).replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
  const strong = (text, term) => term ? esc(text).replace(esc(term), `<strong>${esc(term)}</strong>`) : esc(text);

  /* ============ SECTION RENDERERS ============ */
  const R = {};

  R.cover = () => `
    <div class="cover">
      <div class="cover__map"></div>
      <div class="cover__circle cover__circle--1"></div>
      <div class="cover__circle cover__circle--2"></div>
      <div class="cover__bar">
        <img src="assets/logo/onesecure-horizontal-negative.png" alt="ONESecure">
        <div class="cover__logoslot"><img src="assets/logo/alta-defensivos.png" alt="Alta Defensivos"></div>
      </div>
      <div class="cover__body">
        <div class="cover__eyebrow">Onboarding</div>
        <h1 class="cover__title">Bem-vindos à jornada ONESecure</h1>
        <div class="cover__client">${esc(D.client)}</div>
        <p class="cover__lead">Segurança cibernética com visibilidade, direcionamento e acompanhamento especializado. Uma jornada assistida para ativar os módulos contratados e acelerar a primeira evidência de valor.</p>
      </div>
      <div class="cover__foot">
        <div class="cover__tagline">Segurança como sistema. Gestão como padrão.</div>
        <button class="cover__cta" data-go="boas-vindas">Iniciar a apresentação ${ICON.arrow}</button>
      </div>
    </div>`;

  R['boas-vindas'] = () => `
    <div class="eyebrow">Onboarding — ${esc(D.client)}</div>
    <h1 class="page-title">Bem-vindos à jornada ONESecure, ${esc(D.client)}</h1>
    <p class="lead">Segurança cibernética com visibilidade, direcionamento e acompanhamento especializado.</p>
    <p class="lead" style="margin-top:12px">A partir de agora, a ${esc(D.client)} conta com uma jornada assistida para ativar os módulos contratados, validar prioridades e acelerar a primeira evidência de valor em segurança.</p>
    <div class="kicker">Agenda da reunião de hoje</div>
    <div class="agenda-grid">
      ${D.agenda.map((a,i)=>`<div class="agenda-item"><div class="n">${i+1}</div><span>${esc(a)}</span></div>`).join("")}
    </div>
    <div class="callout"><span class="ico">${ICON.check}</span><span>Ao final desta reunião, teremos responsáveis definidos, dependências registradas e a próxima agenda orientada à ativação no menor prazo possível.</span></div>`;

  R.time = () => {
    const t = D.time;
    return `
    <div class="eyebrow">Seção 01</div>
    <h1 class="page-title">Uma equipe dedicada à jornada da ${esc(D.client)}</h1>
    <p class="lead">${strong(t.lead, t.leadStrong)}</p>
    <div class="people" style="margin-top:28px">
      ${t.people.map(p=>`
        <div class="card person${p.primary?' is-primary':''}">
          ${p.primary?'<div class="person__badge">Seu contato principal</div>':''}
          <div class="person__head">
            <div class="avatar">${esc(p.initials)}</div>
            <div><div class="person__name">${esc(p.name)}</div><div class="person__role">${esc(p.role)}</div></div>
          </div>
          <p class="person__desc">${esc(p.desc)}</p>
          <div class="resp-label">Responsabilidades</div>
          <ul class="resp-list">${p.items.map(i=>`<li>${esc(i)}</li>`).join("")}</ul>
          <div class="person__foot">${ICON.shield}<span>${esc(p.foot)}</span></div>
        </div>`).join("")}
    </div>
    <div class="kicker">Fluxo de acompanhamento da jornada</div>
    <div class="flow">
      ${t.flow.map((n,i)=>`<div class="flow__node"><span class="dot"></span>${esc(n)}</div>${i<t.flow.length-1?'<span class="flow__arrow">→</span>':''}`).join("")}
    </div>`;
  };

  R.escopo = () => {
    const s = D.escopo;
    return `
    <div class="eyebrow">Seção 02</div>
    <h1 class="page-title">Escopo contratado e limites da jornada</h1>
    <p class="lead">${esc(s.lead)}</p>
    <div class="kicker">Abrangido — módulos contratados</div>
    <div class="mod-grid">
      ${s.modules.map(m=>`
        <div class="card">
          <div class="module__title">${esc(m.title)}</div>
          <div class="module__tags">${m.tags.map((tg,i)=>`<span class="tag${i===0?' tag--solid':''}">${esc(tg)}</span>`).join("")}</div>
          <ul class="module__items">${m.items.map(i=>`<li>${esc(i)}</li>`).join("")}</ul>
          ${m.note?`<div class="module__note">${esc(m.note)}</div>`:''}
        </div>`).join("")}
    </div>
    <div class="kicker">Clareza de escopo desde o início</div>
    <div class="scope-cols">
      <div class="card scope-col scope-col--yes">
        <div class="scope-col__head"><span class="mk">${ICON.check}</span>Abrangido nesta jornada</div>
        <ul class="scope-list">${s.incluso.map(i=>`<li>${esc(i)}</li>`).join("")}</ul>
      </div>
      <div class="card scope-col scope-col--no">
        <div class="scope-col__head"><span class="mk"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M5 5l14 14"/></svg></span>Não abrangido nesta fase</div>
        <ul class="scope-list">${s.excluso.map(i=>`<li>${esc(i)}</li>`).join("")}</ul>
      </div>
    </div>`;
  };

  R.criterios = () => {
    const c = D.criterios;
    const checkRow = (label, key) => {
      const on = !!state[key];
      return `<div class="check-row${on?' is-checked':''}" data-check="${key}"><span class="check-box">${ICON.check}</span><span>${esc(label)}</span></div>`;
    };
    return `
    <div class="eyebrow">Seção 03</div>
    <h1 class="page-title">Critérios de sucesso e First Value</h1>
    <p class="lead">${strong(c.lead, c.leadStrong)}</p>
    <div class="crit-layout" style="margin-top:24px">
      <div>
        <ul class="crit-list">${c.criteria.map(i=>`<li><span class="dot"></span>${esc(i)}</li>`).join("")}</ul>
        ${c.groups.map(g=>`
          <div class="kicker">${esc(g.title)}</div>
          ${g.items.map((it,idx)=>checkRow(it, "crit-"+esc(g.title).slice(0,4).replace(/\\W/g,'')+"-"+idx)).join("")}
        `).join("")}
        <div class="note">${ICON.shield}<span>${esc(c.note)}</span></div>
      </div>
      <div class="input-card">
        <div class="ic-eyebrow">Contribuição da ${esc(D.client)}</div>
        ${c.inputs.map(f=>`<div class="field"><label>${esc(f.label)}</label><textarea data-input="${f.key}" placeholder="Registrar…">${esc(state[f.key]||"")}</textarea></div>`).join("")}
      </div>
    </div>`;
  };

  R.jornada = () => {
    const j = D.jornada;
    const active = state["jornada-phase"] ?? 0;
    return `
    <div class="eyebrow">Seção 04</div>
    <h1 class="page-title">Jornada de ativação e evolução ONESecure</h1>
    <p class="lead">${esc(j.lead)}</p>
    <div class="phase-tabs">
      ${j.phases.map((p,i)=>`
        <button class="phase-tab${i===active?' is-active':''}" data-phase="${i}">
          <div class="phase-tab__n">${esc(p.when)}</div>
          <div class="phase-tab__name">${esc(p.tab)}</div>
          <div class="phase-tab__when">Fase ${i+1}</div>
        </button>`).join("")}
    </div>
    <div id="phase-body">${R._phase(j.phases[active], active)}</div>`;
  };
  R._phase = (p, i) => `
    <div class="phase-head phase-head--${p.tone}">
      <div class="pn">${i+1}</div>
      <div><div class="phase-head__title">${esc(p.title)}</div><div class="phase-head__sub">${esc(p.sub)}</div></div>
    </div>
    <ul class="phase-steps">${p.steps.map((s,k)=>`<li><span class="sn">${k+1}</span>${esc(s)}</li>`).join("")}</ul>
    <div class="note" style="margin-top:16px">${ICON.arrow}<span><strong>Saída da fase.</strong> ${esc(p.out)}</span></div>`;

  R.responsabilidades = () => {
    const r = D.responsabilidades;
    return `
    <div class="eyebrow">Seção 05</div>
    <h1 class="page-title">Responsabilidades e dependências</h1>
    <p class="lead">${esc(r.lead)}</p>
    <div class="resp-cols" style="margin-top:24px">
      <div class="card">
        <div class="resp-card__head"><span class="mk">${ICON.check}</span>ONESecure</div>
        <ul class="resp-ul">${r.onesecure.map(i=>`<li>${ICON.arrow}<span>${esc(i)}</span></li>`).join("")}</ul>
      </div>
      <div class="card">
        <div class="resp-card__head"><span class="mk">${ICON.check}</span>${esc(D.client)}</div>
        <ul class="resp-ul">${r.cliente.map(i=>`<li>${ICON.arrow}<span>${esc(i)}</span></li>`).join("")}</ul>
      </div>
    </div>
    <div class="note">${ICON.shield}<span>${strong(r.note, r.noteStrong)}</span></div>
    <div class="kicker">O que precisamos alinhar para avançar com agilidade</div>
    <table class="dep-table">
      <thead><tr><th>Dependência</th><th>Responsável</th><th>Impacto</th></tr></thead>
      <tbody>${r.table.map(row=>`<tr><td>${esc(row[0])}</td><td><span class="resp-pill">${esc(row[1])}</span></td><td>${esc(row[2])}</td></tr>`).join("")}</tbody>
    </table>
    <div style="margin-top:16px;display:flex;flex-direction:column;gap:10px">
      ${r.foots.map(f=>`<div class="note" style="margin:0">${ICON.arrow}<span>${esc(f)}</span></div>`).join("")}
    </div>`;
  };

  R.acompanhamento = () => {
    const a = D.acompanhamento;
    return `
    <div class="eyebrow">Seção 06</div>
    <h1 class="page-title">Acompanhamento contínuo da sua jornada</h1>
    <p class="lead">${esc(a.lead)}</p>
    <div class="cadence" style="margin-top:24px">
      ${a.cadence.map(c=>`
        <div class="card cad-card${c.highlight?' is-hl':''}">
          <div class="cad-card__when">${esc(c.when)}</div>
          <div class="cad-card__title">${esc(c.title)}</div>
          <div class="cad-card__desc">${esc(c.desc)}</div>
        </div>`).join("")}
    </div>
    <div class="kicker">Governança e cadência</div>
    <div class="pillars">
      ${a.pillars.map(p=>`<div class="card"><div class="pillar__title"><span class="b"></span>${esc(p.title)}</div><div class="pillar__desc">${esc(p.desc)}</div></div>`).join("")}
    </div>
    <div class="kicker">Resumo da governança</div>
    <div class="summary">
      ${a.fields.map((f,i)=>`<div class="summary__row"><div class="k">${esc(f[0])}</div>${f[2]?`<input data-input="acomp-${i}" placeholder="A definir…" value="${esc(state['acomp-'+i]||f[1])}">`:`<div class="v">${esc(f[1])}</div>`}</div>`).join("")}
    </div>`;
  };

  R.proximos = () => {
    const p = D.proximos;
    const koOn = !!state["ko-confirm"];
    return `
    <div class="eyebrow">Seção 07</div>
    <h1 class="page-title">Próximos passos confirmados</h1>
    <p class="lead">${esc(p.lead)}</p>
    <div class="done-card" style="margin-top:24px">
      <div class="dc-head"><span class="mk">${ICON.check}</span>Definições formalizadas neste onboarding</div>
      <ul class="done-grid">${p.done.map(d=>`<li><span class="mk">${ICON.check}</span>${esc(d)}</li>`).join("")}</ul>
    </div>
    <div class="kicker">Encaminhamentos após o onboarding</div>
    <ul class="step-list">
      ${p.steps.map((s,i)=>`<li class="step-item"><span class="sn">${i+1}</span><div><div class="st">${esc(s.t)}</div><div class="sd">${esc(s.d)}</div></div></li>`).join("")}
    </ul>
    <div class="kicker">${esc(p.agenda.title)}</div>
    <div class="kickoff">
      <div class="kickoff__head">${ICON.shield}Próxima agenda — Kick-off técnico</div>
      <div class="check-row${koOn?' is-checked':''}" data-check="ko-confirm"><span class="check-box">${ICON.check}</span><span>${esc(p.agenda.checkbox)}</span></div>
      <div class="ko-grid">
        ${p.agenda.fields.map(f=>`<div class="ko-field"><div class="k">${esc(f[0])}</div><div class="v">${esc(f[1])}</div></div>`).join("")}
        ${p.agenda.registrar.map((r,i)=>`<div class="ko-field full"><div class="k">${esc(r)}</div><textarea data-input="ko-reg-${i}" placeholder="Registrar…">${esc(state['ko-reg-'+i]||"")}</textarea></div>`).join("")}
      </div>
    </div>
    <div class="submit" id="submit-panel">
      <div class="submit__head">${ICON.shield}<span>Enviar registros da reunião</span></div>
      <p class="submit__desc">Os campos preenchidos durante a apresentação serão compilados e enviados para <b>${EMAIL}</b>.</p>
      <div class="submit__actions">
        <button class="btn btn--primary" data-action="send">Concluir e enviar por e-mail</button>
        <button class="btn btn--ghost" data-action="download">Baixar registros (.txt)</button>
      </div>
      <div class="submit__hint" id="send-hint"></div>
    </div>
    <div class="closing">
      <div class="closing__brand">ONESecure × ${esc(D.client)}</div>
      <div class="closing__sub">${esc(p.closing)}</div>
    </div>`;
  };

  /* ============ SHELL + NAV ============ */
  const app = document.getElementById("app");
  const navEl = document.getElementById("nav");
  const scrollEl = document.getElementById("scroll");
  const crumbEl = document.getElementById("crumb");
  const countEl = document.getElementById("count");
  const prevBtn = document.getElementById("prev");
  const nextBtn = document.getElementById("next");

  const navItems = D.nav;
  let current = navItems.findIndex(n => n.id === state.current);
  if (current < 0) current = 0;

  // build nav (skip cover from numbered list but show as 'Capa')
  navEl.innerHTML = navItems.map((n, i) => `
    <button class="nav__item" data-idx="${i}">
      <span class="nav__num">${n.n || (i===0 ? '◆' : '')}</span>
      <span class="nav__txt"><span class="nav__label">${esc(n.label)}</span><span class="nav__sub">${esc(n.sub)}</span></span>
    </button>`).join("");

  // build pages
  scrollEl.innerHTML = navItems.map(n => `<section class="page" id="page-${n.id}" data-screen-label="${esc(n.label)}"></section>`).join("");
  navItems.forEach(n => { document.getElementById("page-"+n.id).innerHTML = R[n.id](); });

  function render() {
    const n = navItems[current];
    document.querySelectorAll(".page").forEach(p => p.classList.toggle("is-active", p.id === "page-"+n.id));
    document.querySelectorAll(".nav__item").forEach((b, i) => {
      b.classList.toggle("is-active", i === current);
      b.classList.toggle("is-done", i < current && i > 0);
    });
    app.classList.toggle("is-cover", n.id === "cover");
    crumbEl.innerHTML = `<b>${esc(n.label)}</b><span class="sep">·</span><span>${esc(n.sub)}</span>`;
    countEl.textContent = `Página ${current} de ${navItems.length-1}`;
    prevBtn.disabled = current === 0;
    nextBtn.innerHTML = current === navItems.length-1 ? `Concluir` : `Próximo ${ICON.arrow}`;
    scrollEl.scrollTop = 0;
    state.current = n.id; save();
  }

  function goTo(idx) { current = Math.max(0, Math.min(navItems.length-1, idx)); render(); }
  function goId(id) { const i = navItems.findIndex(n=>n.id===id); if(i>=0) goTo(i); }

  navEl.addEventListener("click", e => { const b = e.target.closest(".nav__item"); if (b) goTo(+b.dataset.idx); });
  prevBtn.addEventListener("click", () => goTo(current-1));
  nextBtn.addEventListener("click", () => {
    if (current === navItems.length-1) { sendEmail(); return; }
    goTo(current+1);
  });

  // delegated interactions on pages
  scrollEl.addEventListener("click", e => {
    const cta = e.target.closest("[data-go]"); if (cta) { goId(cta.dataset.go); return; }
    const act = e.target.closest("[data-action]"); if (act) {
      if (act.dataset.action === "send") sendEmail();
      if (act.dataset.action === "download") downloadTxt();
      return;
    }
    const chk = e.target.closest("[data-check]"); if (chk) { const k = chk.dataset.check; state[k] = !state[k]; chk.classList.toggle("is-checked", state[k]); save(); return; }
    const tab = e.target.closest("[data-phase]"); if (tab) {
      const i = +tab.dataset.phase; state["jornada-phase"] = i; save();
      document.querySelectorAll(".phase-tab").forEach((t,k)=>t.classList.toggle("is-active",k===i));
      document.getElementById("phase-body").innerHTML = R._phase(D.jornada.phases[i], i);
      return;
    }
  });
  scrollEl.addEventListener("input", e => {
    const inp = e.target.closest("[data-input]"); if (inp) { state[inp.dataset.input] = inp.value; save(); }
  });

  /* ---- collect filled-in answers across all sections ---- */
  function labelFor(el) {
    const f = el.closest(".field"); if (f && f.querySelector("label")) return f.querySelector("label").textContent.trim();
    const sr = el.closest(".summary__row"); if (sr && sr.querySelector(".k")) return sr.querySelector(".k").textContent.trim();
    const kf = el.closest(".ko-field"); if (kf && kf.querySelector(".k")) return kf.querySelector(".k").textContent.trim();
    return "Campo";
  }
  function collect() {
    const out = [];
    navItems.forEach(n => {
      const page = document.getElementById("page-" + n.id);
      const items = [], checks = [];
      page.querySelectorAll("[data-input]").forEach(el => {
        const v = (el.value || "").trim(); if (v) items.push([labelFor(el), v]);
      });
      page.querySelectorAll(".check-row[data-check]").forEach(el => {
        if (el.classList.contains("is-checked")) checks.push(el.querySelector("span:last-child").textContent.trim());
      });
      if (items.length || checks.length) out.push({ section: n.label, items, checks });
    });
    return out;
  }
  function buildText() {
    const data = collect();
    const now = new Date().toLocaleString("pt-BR", { dateStyle: "long", timeStyle: "short" });
    let t = `ONESecure × ${D.client} — Registros do Onboarding\n`;
    t += `Data: ${now}\n`;
    t += `\n========================================\n`;
    if (!data.length) { t += "\nNenhum campo foi preenchido durante a apresentação.\n"; return t; }
    data.forEach(s => {
      t += `\n■ ${s.section.toUpperCase()}\n`;
      s.items.forEach(([k, v]) => { t += `\n  ${k}\n  → ${v}\n`; });
      if (s.checks.length) { t += `\n  Itens confirmados:\n`; s.checks.forEach(c => t += `   [x] ${c}\n`); }
    });
    t += `\n========================================\n`;
    t += `Enviado pelo material de onboarding ONESecure.\n`;
    return t;
  }
  function flashHint(msg) {
    const h = document.getElementById("send-hint"); if (h) { h.textContent = msg; h.classList.add("is-on"); }
  }
  function sendEmail() {
    const body = buildText();
    const subject = `Onboarding ONESecure × ${D.client} — Registros da reunião`;
    const url = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = url;
    flashHint(`Abrindo seu cliente de e-mail para ${EMAIL}. Se nada abrir, use “Baixar registros (.txt)” e anexe ao e-mail.`);
  }
  function downloadTxt() {
    const blob = new Blob([buildText()], { type: "text/plain;charset=utf-8" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = `onboarding-${D.client.toLowerCase().replace(/\s+/g, "-")}-registros.txt`;
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(a.href), 1000);
    flashHint("Arquivo de registros baixado. Anexe-o ao e-mail para a equipe.");
  }

  // keyboard nav
  document.addEventListener("keydown", e => {
    if (e.target.matches("textarea, input")) return;
    if (e.key === "ArrowRight") goTo(current+1);
    if (e.key === "ArrowLeft") goTo(current-1);
  });

  render();
})();
