const translations = {
  de: {
    pageTitle: 'Oscar Quintana - Softwareentwicklung & Datenprodukte',
    navProjects: 'Projekte',
    navNews: 'Neuigkeiten',
    navExperience: 'Erfahrung',
    navStack: 'Stack',
    navContact: 'Kontakt',
    heroEyebrow: 'Software Engineering & Datenprodukte',
    heroTitle: 'Premium-Software für klare Daten, robuste Systeme und präzise Visualisierung',
    heroSub: 'Web- und Desktop-Anwendungen mit Fokus auf Architektur, Performance und nachvollziehbare Ergebnisse.',
    heroCtaPrimary: 'Projekte ansehen',
    heroCtaSecondary: 'CV herunterladen',
    videoCaption: 'Projekt-Statement - 60-90 Sekunden',
    videoPlay: 'Video abspielen',
    videoRobotLine: 'Oscar hat das Video dieser Saison noch nicht hochgeladen.',
    projectsTitle: 'Ausgewählte Projekte',
    projectsSub: 'Große, klare Projektsektionen mit Fokus auf Wirkung, Architektur und Stack.',
    tagWeb: 'Web',
    tagDesktop: 'Desktop',
    tagEngineering: 'Engineering',
    kovoDesc: 'E-Commerce-Seite für eine Premium-Boots-Marke mit Fokus auf Produktstory, Klarheit und Performance.',
    kovoRole: 'Konzeption, Designsystem, Frontend-Entwicklung',
    kovoFocus: 'UX, visuelle Hierarchie, schnelle Ladezeiten',
    nordDesc: 'Desktop-App zur Analyse von CSV- und Excel-Daten mit Dashboards, Tabellen und klarer Visualisierung.',
    nordRole: 'Produktkonzept, Daten-UX, Entwicklung',
    nordFocus: 'Datenaufbereitung, Übersichtlichkeit, Performance',
    sentinelDesc: 'Echtzeit-Monitoring für industrielle Maschinen mit sensorgesteuerter Telemetrie, MVVM-Architektur und 60 FPS-Visualisierung.',
    sentinelRole: 'Architektur, Multi-Threading, Datenpipeline, UI',
    sentinelFocus: 'Robustheit, niedrige Latenz, Testbarkeit',
    projectCta: 'Case Study',
    projectMore: 'Mehr erfahren',
    projectLink: 'GitHub / Demo',
    projectPreview: 'Projektvorschau',
    caseTitle: 'Case Studies',
    caseSub: 'Vertiefte Einblicke in Rolle, Entscheidungen und Ergebnisse.',
    caseRole: 'Rolle',
    caseDecisions: 'Entscheidungen',
    caseResult: 'Ergebnis',
    caseStack: 'Stack',
    kovoCaseSummary: 'Premium-Brand-Website mit klarer Produktstory und starker visueller Hierarchie.',
    kovoCaseRole: 'Konzeption, Designsystem, Frontend-Entwicklung',
    kovoCaseDecisions: 'Modulares Layout, klare CTA-Führung, performanceorientiertes Styling',
    kovoCaseResult: 'Konsistentes Markenbild, klare Produktkommunikation, schnelle Interaktion',
    nordCaseSummary: 'Desktop-App für strukturierte Datenanalyse mit Dashboards, Tabellen und schneller Navigation.',
    nordCaseRole: 'Produktkonzept, Daten-UX, Entwicklung',
    nordCaseDecisions: 'Import-Pipeline für CSV/Excel, konfigurierbare Layouts, klare Datenhierarchie',
    nordCaseResult: 'Schneller Datenzugriff, übersichtliche Visualisierung, stabile Desktop-Performance',
    sentinelCaseSummary: 'Echtzeit-Monitoring mit Sensor-Simulation, MVVM-Architektur und stabiler Visualisierung.',
    sentinelCaseRole: 'Architektur, Multi-Threading, Datenpipeline, UI',
    sentinelCaseDecisions: 'MVVM-Trennung, SQLite-Historie, 60 FPS Charts, Unit Tests',
    sentinelCaseResult: 'Niedrige Latenz, stabile Darstellung, robuste Logik',
    extraFolderTitle: 'Folder Structure',
    extraFolderHint: 'Details anzeigen',
    extraCodeTitle: 'Technical Fix',
    extraCodeHint: 'Details anzeigen',
    playgroundTitle: 'Mini playground',
    playgroundOpen: 'Playground starten',
    playgroundRun: 'Run',
    playgroundReset: 'Reset',
    playgroundClose: 'Schliessen',
    phaseNordImportA: 'CSV/Excel lesen',
    phaseNordImportB: 'Header pruefen',
    phaseNordImportC: 'Spalten mappen',
    phaseNordParseA: 'Typen erkennen',
    phaseNordParseB: 'Werte bereinigen',
    phaseNordParseC: 'Modell bauen',
    phaseNordGridA: 'Sortieren/Filtern',
    phaseNordGridB: 'Summen/Stats',
    phaseNordGridC: 'Schnelles Grid',
    phaseSentinelSensorsA: 'Sensoren erfassen',
    phaseSentinelSensorsB: 'Zeitstempel',
    phaseSentinelPipelineA: 'Puffer + Normalize',
    phaseSentinelPipelineB: 'Metriken berechnen',
    phaseSentinelMvvmA: 'UI/Logik trennen',
    phaseSentinelMvvmB: 'Stabile Updates',
    phaseSentinelUiA: 'Live Dashboards',
    phaseSentinelUiB: 'Alerts/Charts',
    kovoChallenge: 'Problem: Parallax und UI-States verursachten Ruckler beim Scrollen.',
    kovoSolution: 'Loesung: Ein einzelner rAF-Loop buendelt Updates und vermeidet Layout-Thrashing.',
    nordChallenge: 'Problem: Der Splash-Screen konnte haengen bleiben, wenn das Frontend langsam lud.',
    nordSolution: 'Loesung: Zeitgesteuerter Fallback + asynchrones Schliessen fuer garantierten UI-Unlock.',
    sentinelChallenge: 'Problem: Queue-Overflow bei hoher Ingest-Rate.',
    sentinelSolution: 'Loesung: Begrenzte Queues + Drop-Counter + Loop mit fester Rate.',
    newsTitle: 'Neuigkeiten',
    newsSub: 'Aktuelle Entwicklungen und Projekte in Arbeit.',
    newsStatus: 'In Entwicklung',
    newsHeadline: 'SAKO OS',
    newsDesc: 'Betriebssystem mit automatischer Personalisierung der Oberfläche und Funktionen – angepasst an Beruf und Arbeitsstil (z. B. Architektur, Management, Programmierung, Office, Finance, Gaming).',
    newsOsTag: 'Open Source',
    newsOsTitle: 'Community Contribution',
    newsOsDesc: 'Beiträge zu einem Open-Source-Projekt: Issues, Code-Review und kleine Features. Projektname wird ergänzt.',
    calloutTitle: 'Nachricht senden',
    calloutSub: 'Direkter Kontakt steht gleich unten bereit.',
    mapTitle: 'Concept Map',
    mapOpen: 'Map öffnen',
    mapClose: 'Schliessen',
    mapNordRoot: 'Nordbund Suite',
    mapNordPhaseImport: 'Phase: Import',
    mapNordImportA: 'CSV/Excel laden',
    mapNordImportB: 'Header pruefen',
    mapNordImportC: 'Schema Mapping',
    mapNordPhaseProcessing: 'Phase: Processing',
    mapNordProcessA: 'Typen erkennen',
    mapNordProcessB: 'Werte bereinigen',
    mapNordProcessC: 'Fehlerreport',
    mapNordPhaseGrid: 'Phase: Data Grid',
    mapNordGridA: 'Sortieren/Filtern',
    mapNordGridB: 'Summen/Stats',
    mapNordGridC: 'Schnelles Rendering',
    mapSentinelRoot: 'Industrial Sentinel',
    mapSentinelPhaseSensors: 'Phase: Sensors',
    mapSentinelSensorsA: 'Sampling',
    mapSentinelSensorsB: 'Telemetry',
    mapSentinelPhasePipeline: 'Phase: Pipeline',
    mapSentinelPipelineA: 'Buffering',
    mapSentinelPipelineB: 'Metriken',
    mapSentinelPhaseMvvm: 'Phase: MVVM',
    mapSentinelMvvmA: 'State/Bindings',
    mapSentinelMvvmB: 'Stabile Updates',
    mapSentinelPhaseUi: 'Phase: UI',
    mapSentinelUiA: 'Live Charts',
    mapSentinelUiB: 'Alerts',
    newsBadgeAdaptive: 'Adaptive UI',
    newsBadgeProfiles: 'Berufsprofile',
    newsBadgeAutomation: 'Automation',
    metaRole: 'Rolle',
    metaStack: 'Stack',
    metaFocus: 'Fokus',
    expTitle: 'Erfahrung & Qualifikationen',
    expSub: 'Kompakte Timeline mit Fokus auf fundierte Weiterbildung und praxisnahe Projekte.',
    exp2025Year: '2025-heute',
    exp2025Title: 'Data Analytics & Machine Learning',
    exp2025Desc: 'Google Data Analytics / Kaggle ML. Datenaufbereitung, Analyse, Visualisierung.',
    exp2023Title: 'CS50 - Harvard University',
    exp2023Desc: 'Informatikgrundlagen, Algorithmen, Datenstrukturen, C & Python.',
    exp2022Title: 'Freelance & persönliche Projekte',
    exp2022Desc: 'Web- und IT-Projekte, eigenständige Umsetzung, Praxisfokus.',
    exp2017Title: 'Abschluss als Medientechniker',
    exp2017Desc: 'Fokus auf digitale Medien und technische Grundlagen.',
    stackTitle: 'Technologie-Stack',
    stackSub: 'Kerntechnologien aus Web, Desktop und Daten.',
    stackLang: 'Sprachen',
    stackWeb: 'Web',
    stackDesktop: 'Desktop',
    stackData: 'Daten',
    stackTools: 'Tools',
    contactTitle: 'Kontakt',
    contactSub: 'Direkter Kontakt ohne Formular. Nachricht per E-Mail.',
    contactLabel: 'E-Mail',
    contactCopy: 'E-Mail kopieren',
    contactCv: 'CV herunterladen',
    contactNote: 'Formular folgt in einer späteren Version.'
  },
  en: {
    pageTitle: 'Oscar Quintana - Software Engineering & Data Products',
    navProjects: 'Projects',
    navNews: 'News',
    navExperience: 'Experience',
    navStack: 'Stack',
    navContact: 'Contact',
    heroEyebrow: 'Software Engineering & Data Products',
    heroTitle: 'Premium software for clear data, robust systems, and precise visualization',
    heroSub: 'Web and desktop applications focused on architecture, performance, and measurable outcomes.',
    heroCtaPrimary: 'View projects',
    heroCtaSecondary: 'Download CV',
    videoCaption: 'Project statement - 60-90 seconds',
    videoPlay: 'Play video',
    videoRobotLine: 'Oscar has not uploaded the video for this season yet.',
    projectsTitle: 'Selected Projects',
    projectsSub: 'Large, clear project sections focused on impact, architecture, and stack.',
    tagWeb: 'Web',
    tagDesktop: 'Desktop',
    tagEngineering: 'Engineering',
    kovoDesc: 'E-commerce site for a premium boots brand focused on product story, clarity, and performance.',
    kovoRole: 'Concept, design system, frontend development',
    kovoFocus: 'UX, visual hierarchy, fast loading',
    nordDesc: 'Desktop app for CSV and Excel analysis with dashboards, tables, and clean visualization.',
    nordRole: 'Product concept, data UX, development',
    nordFocus: 'Data preparation, clarity, performance',
    sentinelDesc: 'Real-time monitoring for industrial machinery with sensor telemetry, MVVM architecture, and 60 FPS visualization.',
    sentinelRole: 'Architecture, multi-threading, data pipeline, UI',
    sentinelFocus: 'Reliability, low latency, testability',
    projectCta: 'Case study',
    projectMore: 'Learn more',
    projectLink: 'GitHub / Demo',
    projectPreview: 'Project preview',
    caseTitle: 'Case Studies',
    caseSub: 'Focused insights into role, decisions, and outcomes.',
    caseRole: 'Role',
    caseDecisions: 'Decisions',
    caseResult: 'Outcome',
    caseStack: 'Stack',
    kovoCaseSummary: 'Premium brand website with clear product story and strong visual hierarchy.',
    kovoCaseRole: 'Concept, design system, frontend development',
    kovoCaseDecisions: 'Modular layout, clear CTA guidance, performance-oriented styling',
    kovoCaseResult: 'Consistent brand presentation, clear product communication, fast interaction',
    nordCaseSummary: 'Desktop app for structured data analysis with dashboards, tables, and fast navigation.',
    nordCaseRole: 'Product concept, data UX, development',
    nordCaseDecisions: 'CSV/Excel import pipeline, configurable layouts, clear data hierarchy',
    nordCaseResult: 'Fast data access, clear visualization, stable desktop performance',
    sentinelCaseSummary: 'Real-time monitoring with sensor simulation, MVVM architecture, and stable visualization.',
    sentinelCaseRole: 'Architecture, multi-threading, data pipeline, UI',
    sentinelCaseDecisions: 'MVVM separation, SQLite history, 60 FPS charts, unit tests',
    sentinelCaseResult: 'Low latency, stable rendering, robust logic',
    extraFolderTitle: 'Folder Structure',
    extraFolderHint: 'Show details',
    extraCodeTitle: 'Technical Fix',
    extraCodeHint: 'Show details',
    playgroundTitle: 'Mini playground',
    playgroundOpen: 'Play playground',
    playgroundRun: 'Run',
    playgroundReset: 'Reset',
    playgroundClose: 'Close',
    phaseNordImportA: 'Read CSV/Excel',
    phaseNordImportB: 'Validate headers',
    phaseNordImportC: 'Map columns',
    phaseNordParseA: 'Infer types',
    phaseNordParseB: 'Clean values',
    phaseNordParseC: 'Build model',
    phaseNordGridA: 'Sort & filter',
    phaseNordGridB: 'Summaries',
    phaseNordGridC: 'Fast grid',
    phaseSentinelSensorsA: 'Capture sensors',
    phaseSentinelSensorsB: 'Timestamps',
    phaseSentinelPipelineA: 'Buffer + normalize',
    phaseSentinelPipelineB: 'Compute metrics',
    phaseSentinelMvvmA: 'Split UI/logic',
    phaseSentinelMvvmB: 'Stable updates',
    phaseSentinelUiA: 'Live dashboards',
    phaseSentinelUiB: 'Alerts/charts',
    kovoChallenge: 'Problem: parallax + UI state updates caused scroll jank.',
    kovoSolution: 'Solution: single rAF loop to batch updates and avoid layout thrash.',
    nordChallenge: 'Problem: splash screen could hang if frontend load was slow.',
    nordSolution: 'Solution: timed fallback + async close to guarantee UI unlock.',
    sentinelChallenge: 'Problem: queue overflow under high ingest rate.',
    sentinelSolution: 'Solution: bounded queues + drop counter + fixed-rate loop.',
    newsTitle: 'News',
    newsSub: 'Current developments and projects in progress.',
    newsStatus: 'In progress',
    newsHeadline: 'SAKO OS',
    newsDesc: 'Operating system with automatic personalization of interface and features based on profession and workflow (e.g., architecture, management, programming, office, finance, gaming).',
    newsOsTag: 'Open source',
    newsOsTitle: 'Community contribution',
    newsOsDesc: 'Contributions to an open-source project: issues, code review, and small feature work. Project name will be added.',
    calloutTitle: 'Send message',
    calloutSub: 'Direct contact is available right below.',
    mapTitle: 'Concept Map',
    mapOpen: 'Open map',
    mapClose: 'Close',
    mapNordRoot: 'Nordbund Suite',
    mapNordPhaseImport: 'Phase: Import',
    mapNordImportA: 'Load CSV/Excel',
    mapNordImportB: 'Validate headers',
    mapNordImportC: 'Schema mapping',
    mapNordPhaseProcessing: 'Phase: Processing',
    mapNordProcessA: 'Infer types',
    mapNordProcessB: 'Clean values',
    mapNordProcessC: 'Error report',
    mapNordPhaseGrid: 'Phase: Data Grid',
    mapNordGridA: 'Sort/filter',
    mapNordGridB: 'Summaries',
    mapNordGridC: 'Fast rendering',
    mapSentinelRoot: 'Industrial Sentinel',
    mapSentinelPhaseSensors: 'Phase: Sensors',
    mapSentinelSensorsA: 'Sampling',
    mapSentinelSensorsB: 'Telemetry',
    mapSentinelPhasePipeline: 'Phase: Pipeline',
    mapSentinelPipelineA: 'Buffering',
    mapSentinelPipelineB: 'Metrics',
    mapSentinelPhaseMvvm: 'Phase: MVVM',
    mapSentinelMvvmA: 'State/bindings',
    mapSentinelMvvmB: 'Stable updates',
    mapSentinelPhaseUi: 'Phase: UI',
    mapSentinelUiA: 'Live charts',
    mapSentinelUiB: 'Alerts',
    newsBadgeAdaptive: 'Adaptive UI',
    newsBadgeProfiles: 'Role profiles',
    newsBadgeAutomation: 'Automation',
    metaRole: 'Role',
    metaStack: 'Stack',
    metaFocus: 'Focus',
    expTitle: 'Experience & Credentials',
    expSub: 'Compact timeline focused on solid training and practical projects.',
    exp2025Year: '2025-present',
    exp2025Title: 'Data Analytics & Machine Learning',
    exp2025Desc: 'Google Data Analytics / Kaggle ML. Data preparation, analysis, visualization.',
    exp2023Title: 'CS50 - Harvard University',
    exp2023Desc: 'CS fundamentals, algorithms, data structures, C & Python.',
    exp2022Title: 'Freelance & personal projects',
    exp2022Desc: 'Web and IT projects, independent delivery, hands-on focus.',
    exp2017Title: 'Media technician diploma',
    exp2017Desc: 'Focus on digital media and technical foundations.',
    stackTitle: 'Tech Stack',
    stackSub: 'Core technologies across web, desktop, and data.',
    stackLang: 'Languages',
    stackWeb: 'Web',
    stackDesktop: 'Desktop',
    stackData: 'Data',
    stackTools: 'Tools',
    contactTitle: 'Contact',
    contactSub: 'Direct contact without a form. Reach out via email.',
    contactLabel: 'Email',
    contactCopy: 'Copy email',
    contactCv: 'Download CV',
    contactNote: 'Form will be added in a later version.'
  }
};

const elements = document.querySelectorAll('[data-i18n]');
const langButtons = document.querySelectorAll('.lang-btn');
const copyButton = document.querySelector('[data-copy-email]');
const brandO = document.querySelector('[data-brand-o]');
let startBrandAnimation = null;
let stopBrandAnimation = null;
let brandAnimRaf = null;
let brandAnimRunning = false;
let brandAnimLoop = false;
let brandAnimFrameIndex = 0;
let brandAnimLastStep = 0;
let brandAnimStartedAt = 0;
let updateProjectRanges = null;
let heroAggressiveMode = false;
let i18nFadeTimer = null;
let i18nFadeRaf = null;
const I18N_FADE_MS = 260;
const MODAL_OPEN_SELECTOR = '.playground-modal.is-open, .concept-modal.is-open, .nordbund-modal.is-open, .sentinel-modal.is-open';
const FOCUSABLE_SELECTOR = [
  'a[href]',
  'area[href]',
  'button:not([disabled])',
  'input:not([disabled]):not([type="hidden"])',
  'select:not([disabled])',
  'textarea:not([disabled])',
  'iframe',
  '[tabindex]:not([tabindex="-1"])',
  '[contenteditable="true"]'
].join(', ');
let openModalCount = 0;

const reconcileBodyScrollLock = () => {
  if (!document.querySelector(MODAL_OPEN_SELECTOR)) {
    openModalCount = 0;
    document.body.classList.remove('modal-open');
    // iOS can sometimes get "stuck" after toggling overflow via a class.
    // Clearing inline styles is harmless and helps recover scroll reliably.
    document.body.style.overflow = '';
    document.documentElement.style.overflow = '';
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.width = '';
  }
};

const lockBodyScroll = () => {
  openModalCount += 1;
  document.body.classList.add('modal-open');
};

const unlockBodyScroll = () => {
  openModalCount = Math.max(0, openModalCount - 1);
  if (openModalCount === 0) {
    document.body.classList.remove('modal-open');
  }
  requestAnimationFrame(reconcileBodyScrollLock);
};

window.addEventListener('pageshow', () => {
  requestAnimationFrame(reconcileBodyScrollLock);
});

window.addEventListener('scroll', reconcileBodyScrollLock, { passive: true });
window.addEventListener('touchstart', reconcileBodyScrollLock, { passive: true });

function getFocusableElements(container) {
  return Array.from(container.querySelectorAll(FOCUSABLE_SELECTOR)).filter((el) => {
    const style = window.getComputedStyle(el);
    return style.display !== 'none' && style.visibility !== 'hidden';
  });
}

function createModalA11y(modal, options = {}) {
  let isOpen = false;
  let lastFocused = null;
  let keydownHandler = null;
  let focusinHandler = null;

  const getInitialFocus = () => {
    if (typeof options.getInitialFocus === 'function') {
      const preferred = options.getInitialFocus();
      if (preferred) return preferred;
    }
    const focusable = getFocusableElements(modal);
    return focusable[0] || modal;
  };

  const handleKeydown = (event) => {
    if (!isOpen) return;
    if (event.key === 'Escape') {
      if (typeof options.onEscape === 'function') {
        event.preventDefault();
        options.onEscape();
      }
      return;
    }
    if (event.key !== 'Tab') return;

    const focusable = getFocusableElements(modal);
    if (!focusable.length) {
      event.preventDefault();
      modal.focus();
      return;
    }

    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    const active = document.activeElement;

    if (event.shiftKey) {
      if (active === first || !modal.contains(active)) {
        event.preventDefault();
        last.focus();
      }
      return;
    }

    if (active === last) {
      event.preventDefault();
      first.focus();
    }
  };

  const keepFocusInside = (event) => {
    if (!isOpen || modal.contains(event.target)) return;
    const target = getInitialFocus();
    if (target && typeof target.focus === 'function') {
      target.focus({ preventScroll: true });
    }
  };

  const open = (trigger) => {
    if (isOpen) return;
    isOpen = true;
    lastFocused = trigger instanceof HTMLElement ? trigger : document.activeElement;
    if (!modal.hasAttribute('tabindex')) {
      modal.setAttribute('tabindex', '-1');
    }
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    lockBodyScroll();

    keydownHandler = handleKeydown;
    focusinHandler = keepFocusInside;
    document.addEventListener('keydown', keydownHandler, true);
    document.addEventListener('focusin', focusinHandler, true);

    const target = getInitialFocus();
    requestAnimationFrame(() => {
      if (target && typeof target.focus === 'function') {
        target.focus({ preventScroll: true });
      } else {
        modal.focus({ preventScroll: true });
      }
    });
  };

  const close = (optionsClose = {}) => {
    const { restoreFocus = true } = optionsClose;
    if (!isOpen) return;
    isOpen = false;
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    unlockBodyScroll();

    if (keydownHandler) {
      document.removeEventListener('keydown', keydownHandler, true);
      keydownHandler = null;
    }
    if (focusinHandler) {
      document.removeEventListener('focusin', focusinHandler, true);
      focusinHandler = null;
    }

    const focusTarget = lastFocused;
    lastFocused = null;
    if (
      restoreFocus &&
      focusTarget &&
      typeof focusTarget.focus === 'function' &&
      document.contains(focusTarget)
    ) {
      requestAnimationFrame(() => focusTarget.focus({ preventScroll: true }));
    }
  };

  return { open, close, isOpen: () => isOpen };
}

function setupLazyFrameModal(config) {
  const {
    modalSelector,
    triggerSelector,
    closeSelector,
    frameSelector,
    closeButtonSelector,
    modalKey,
    preload = 'none',
    preloadTimeoutMs = 2000
  } = config;

  const modal = document.querySelector(modalSelector);
  const triggers = document.querySelectorAll(triggerSelector);
  if (!modal || !triggers.length) return null;

  const closeTargets = modal.querySelectorAll(closeSelector);
  const frame = frameSelector ? modal.querySelector(frameSelector) : null;
  const resolvedModalKey = modalKey || modalSelector.replace(/^\./, '').replace(/-modal$/, '');
  let closeModal = null;

  const modalA11y = createModalA11y(modal, {
    getInitialFocus: () => modal.querySelector(closeButtonSelector) || modal.querySelector(closeSelector),
    onEscape: () => {
      if (typeof closeModal === 'function') {
        closeModal();
      }
    }
  });

  const ensureFrameLoaded = () => {
    if (!frame || frame.getAttribute('src')) return;
    const frameSrc = frame.dataset.src;
    if (frameSrc) {
      frame.setAttribute('src', frameSrc);
    }
  };

  const notifyFrameVisibility = (visible) => {
    if (!frame || !frame.contentWindow) return;
    frame.contentWindow.postMessage(
      { type: 'portfolio:modal-visibility', modal: resolvedModalKey, visible },
      '*'
    );
  };

  if (frame) {
    frame.addEventListener('load', () => {
      notifyFrameVisibility(modalA11y.isOpen());
    });
  }

  const scheduleFramePreload = () => {
    if (!frame || frame.getAttribute('src') || preload === 'none') return;

    const runPreload = () => {
      ensureFrameLoaded();
    };

    if (preload === 'immediate') {
      runPreload();
      return;
    }

    if (preload === 'idle') {
      const startIdleWarmup = () => {
        if (frame.getAttribute('src')) return;
        if ('requestIdleCallback' in window) {
          window.requestIdleCallback(runPreload, { timeout: preloadTimeoutMs });
          return;
        }
        setTimeout(runPreload, Math.min(preloadTimeoutMs, 900));
      };

      if (document.readyState === 'complete') {
        startIdleWarmup();
      } else {
        window.addEventListener('load', startIdleWarmup, { once: true });
      }
    }
  };

  const openModal = (trigger) => {
    ensureFrameLoaded();
    notifyFrameVisibility(true);
    modalA11y.open(trigger);
  };

  closeModal = () => {
    modalA11y.close();
    notifyFrameVisibility(false);
  };

  triggers.forEach((trigger) => {
    const warmup = () => ensureFrameLoaded();
    trigger.addEventListener('pointerenter', warmup, { passive: true });
    trigger.addEventListener('focusin', warmup);
    trigger.addEventListener('touchstart', warmup, { passive: true });
    trigger.addEventListener('click', () => openModal(trigger));
  });

  scheduleFramePreload();
  closeTargets.forEach((btn) => btn.addEventListener('click', closeModal));
  return { open: openModal, close: closeModal };
}

const markLoaded = () => {
  document.body.classList.add('is-loaded');
  if (
    typeof startBrandAnimation === 'function' &&
    !window.matchMedia('(prefers-reduced-motion: reduce)').matches
  ) {
    startBrandAnimation(false);
  }
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    requestAnimationFrame(markLoaded);
  });
} else {
  requestAnimationFrame(markLoaded);
}

function setLanguage(lang, options = {}) {
  const { animate = true } = options;
  const dictionary = translations[lang] || translations.de;
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const applyLanguage = () => {
    elements.forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (dictionary[key]) {
        el.textContent = dictionary[key];
      }
    });
    langButtons.forEach((btn) => {
      btn.classList.toggle('is-active', btn.dataset.lang === lang);
    });
    const langToggle = document.querySelector('.lang-toggle');
    if (langToggle) {
      langToggle.dataset.active = lang;
    }
    document.documentElement.lang = lang;
    document.title = dictionary.pageTitle;
      localStorage.setItem('lang', lang);
      if (typeof updateProjectRanges === 'function') {
        requestAnimationFrame(() => updateProjectRanges());
      }
      if (typeof window.updateConceptMap === 'function') {
        requestAnimationFrame(() => window.updateConceptMap());
      }
    };

  if (!animate || prefersReducedMotion) {
    applyLanguage();
    return;
  }

  if (i18nFadeTimer) {
    clearTimeout(i18nFadeTimer);
  }
  if (i18nFadeRaf) {
    cancelAnimationFrame(i18nFadeRaf);
  }

  document.body.classList.add('is-i18n-fade');
  i18nFadeTimer = setTimeout(() => {
    applyLanguage();
    i18nFadeRaf = requestAnimationFrame(() => {
      document.body.classList.remove('is-i18n-fade');
    });
  }, I18N_FADE_MS);
}

langButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    setLanguage(btn.dataset.lang);
  });
});

if (copyButton) {
  copyButton.addEventListener('click', async () => {
    const email = 'oscarquintana2125@gmail.com';
    try {
      await navigator.clipboard.writeText(email);
      copyButton.textContent = document.documentElement.lang === 'de' ? 'E-Mail kopiert' : 'Email copied';
      setTimeout(() => {
        copyButton.textContent = translations[document.documentElement.lang].contactCopy;
      }, 1800);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  });
}

const optimizeMediaLoading = () => {
  document.querySelectorAll('img').forEach((img) => {
    if (img.closest('.site-header') || img.closest('.hero')) {
      if (!img.hasAttribute('decoding')) {
        img.setAttribute('decoding', 'async');
      }
      return;
    }

    if (!img.hasAttribute('loading')) {
      img.setAttribute('loading', 'lazy');
    }
    if (!img.hasAttribute('decoding')) {
      img.setAttribute('decoding', 'async');
    }
  });

  document.querySelectorAll('.stack-carousel img').forEach((img) => {
    img.setAttribute('fetchpriority', 'low');
  });
};

optimizeMediaLoading();


class CircularScroll {
  constructor(canvasId, options = {}) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    this.config = {
      size: options.size || 120,
      radius: options.radius || 45,
      ballSize: options.ballSize || 5,
      color: options.color || '#000000',
      spring: options.spring || 0.15,
      friction: options.friction || 0.92,
      ...options
    };
    this.state = {
      currentAngle: -Math.PI / 2,
      targetAngle: -Math.PI / 2,
      velocity: 0,
      mouseX: 0,
      mouseY: 0,
      isHovering: false
    };
    this.rafId = null;
    this.isVisible = true;
    this.init();
  }

  init() {
    const dpr = window.devicePixelRatio || 1;
    this.canvas.width = this.config.size * dpr;
    this.canvas.height = this.config.size * dpr;
    this.canvas.style.width = `${this.config.size}px`;
    this.canvas.style.height = `${this.config.size}px`;
    this.ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    window.addEventListener('mousemove', (event) => this.handleMouseMove(event), { passive: true });

    this.visibilityObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        this.isVisible = entry.isIntersecting;
        this.updateRunState();
      });
    }, { threshold: 0 });

    this.visibilityObserver.observe(this.canvas);
    document.addEventListener('visibilitychange', () => this.updateRunState());
    this.updateRunState();
  }

  updateRunState() {
    const shouldRun = this.isVisible && document.visibilityState === 'visible';
    if (shouldRun && !this.rafId) {
      this.rafId = requestAnimationFrame(() => this.animate());
      return;
    }
    if (!shouldRun && this.rafId) {
      cancelAnimationFrame(this.rafId);
      this.rafId = null;
    }
  }

  handleMouseMove(event) {
    const rect = this.canvas.getBoundingClientRect();
    this.state.mouseX = event.clientX - rect.left;
    this.state.mouseY = event.clientY - rect.top;
    const centerX = this.config.size / 2;
    const centerY = this.config.size / 2;
    const dx = this.state.mouseX - centerX;
    const dy = this.state.mouseY - centerY;
    const dist = Math.sqrt(dx * dx + dy * dy);
    this.state.isHovering = dist > this.config.radius - 20 && dist < this.config.radius + 20;
  }

  updatePhysics() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = docHeight > 0 ? scrollTop / docHeight : 0;
    this.state.targetAngle = scrollPercent * Math.PI * 2 - Math.PI / 2;

    let diff = this.state.targetAngle - this.state.currentAngle;
    while (diff > Math.PI) diff -= Math.PI * 2;
    while (diff < -Math.PI) diff += Math.PI * 2;

    const acceleration = diff * this.config.spring;
    this.state.velocity += acceleration;
    this.state.velocity *= this.config.friction;
    this.state.currentAngle += this.state.velocity;

    if (this.state.isHovering) {
      const centerX = this.config.size / 2;
      const centerY = this.config.size / 2;
      const angleToMouse = Math.atan2(this.state.mouseY - centerY, this.state.mouseX - centerX);
      let mouseDiff = angleToMouse - this.state.currentAngle;
      while (mouseDiff > Math.PI) mouseDiff -= Math.PI * 2;
      while (mouseDiff < -Math.PI) mouseDiff += Math.PI * 2;
      this.state.currentAngle += mouseDiff * 0.08;
    }
  }

  draw() {
    const { size, radius, ballSize, color } = this.config;
    const centerX = size / 2;
    const centerY = size / 2;
    const ctx = this.ctx;

    ctx.clearRect(0, 0, size, size);
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
    ctx.strokeStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.lineWidth = 1.5;
    ctx.stroke();

    const ballX = centerX + Math.cos(this.state.currentAngle) * radius;
    const ballY = centerY + Math.sin(this.state.currentAngle) * radius;
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(ballX, ballY, ballSize, 0, Math.PI * 2);
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(ballX, ballY);
    ctx.lineTo(centerX, centerY);
    ctx.strokeStyle = 'rgba(0, 0, 0, 0.03)';
    ctx.setLineDash([2, 2]);
    ctx.stroke();
    ctx.setLineDash([]);
  }

  animate() {
    if (!this.isVisible || document.visibilityState !== 'visible') {
      this.rafId = null;
      return;
    }
    this.updatePhysics();
    this.draw();
    this.rafId = requestAnimationFrame(() => this.animate());
  }
}

const projectScrollIndicator = document.getElementById('project-scroll-indicator');
if (projectScrollIndicator) {
  new CircularScroll('project-scroll-indicator', {
    size: 88,
    radius: 34,
    ballSize: 3.8,
    color: '#000000',
    spring: 0.15,
    friction: 0.9
  });
}

if (brandO) {
  const oFrames = [
    'public/Icons%20O.Q/letra-o%20(1).png',
    'public/Icons%20O.Q/letra-o%20(2).png',
    'public/Icons%20O.Q/letra-o%20(3).png',
    'public/Icons%20O.Q/letra-o%20(4).png',
    'public/Icons%20O.Q/letra-o%20(5).png'
  ];

  oFrames.forEach((src) => {
    new Image().src = src;
  });

  const defaultFrame = 'public/Icons%20O.Q/letra-o.png';
  const frameStepMs = 80;
  const autoStopMs = 5000;

  const applyFrame = (frameSrc) => {
    if (brandO.getAttribute('src') !== frameSrc) {
      brandO.setAttribute('src', frameSrc);
    }
  };

  const tickBrandAnimation = (time) => {
    if (!brandAnimRunning) return;

    if (!brandAnimLastStep) {
      brandAnimLastStep = time;
      brandAnimStartedAt = time;
    }

    if (time - brandAnimLastStep >= frameStepMs) {
      brandAnimLastStep = time;
      applyFrame(oFrames[brandAnimFrameIndex % oFrames.length]);
      brandAnimFrameIndex += 1;
    }

    if (!brandAnimLoop && time - brandAnimStartedAt >= autoStopMs) {
      stopBrandAnimation();
      return;
    }

    brandAnimRaf = requestAnimationFrame(tickBrandAnimation);
  };

  stopBrandAnimation = () => {
    brandAnimRunning = false;
    brandAnimLoop = false;
    brandAnimFrameIndex = 0;
    brandAnimLastStep = 0;
    brandAnimStartedAt = 0;
    if (brandAnimRaf) {
      cancelAnimationFrame(brandAnimRaf);
      brandAnimRaf = null;
    }
    applyFrame(defaultFrame);
  };

  startBrandAnimation = (loop = false) => {
    brandAnimLoop = loop;
    brandAnimRunning = true;
    brandAnimFrameIndex = 0;
    brandAnimLastStep = 0;
    brandAnimStartedAt = 0;
    if (brandAnimRaf) {
      cancelAnimationFrame(brandAnimRaf);
    }
    brandAnimRaf = requestAnimationFrame(tickBrandAnimation);
  };
}

const storedLang = localStorage.getItem('lang');
setLanguage(storedLang || 'de', { animate: false });

const videoOverlay = document.querySelector('.video-overlay');
const videoToggle = document.querySelector('[data-video-toggle]');
const heroVideo = document.querySelector('.hero-video');
const videoFallback = document.querySelector('[data-video-fallback]');
const videoRobot = document.querySelector('.pixel-robot');
const siteHeader = document.querySelector('.site-header');
const nav = document.querySelector('.nav');
let showVideoFallback = null;
let hideVideoFallback = null;

const brandTrigger = document.querySelector('.brand-oq');
if (brandTrigger && typeof startBrandAnimation === 'function') {
  brandTrigger.addEventListener('mouseenter', () => {
    startBrandAnimation(true);
  });
  brandTrigger.addEventListener('mouseleave', () => {
    if (typeof stopBrandAnimation === 'function') {
      stopBrandAnimation();
    }
  });
  brandTrigger.addEventListener('focusin', () => {
    startBrandAnimation(true);
  });
  brandTrigger.addEventListener('focusout', () => {
    if (typeof stopBrandAnimation === 'function') {
      stopBrandAnimation();
    }
  });
}

if (brandO && typeof stopBrandAnimation === 'function') {
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden') {
      stopBrandAnimation();
    }
  });
}

if (videoToggle && videoFallback && videoOverlay) {
  const showFallback = () => {
    videoFallback.classList.add('is-visible');
    videoFallback.setAttribute('aria-hidden', 'false');
    videoOverlay.classList.add('is-hidden');
    videoToggle.classList.add('is-hidden');
    heroAggressiveMode = true;
    if (heroVideo) {
      heroVideo.pause();
    }
  };

  const hideFallback = () => {
    videoFallback.classList.remove('is-visible');
    videoFallback.setAttribute('aria-hidden', 'true');
    videoOverlay.classList.remove('is-hidden');
    videoToggle.classList.remove('is-hidden');
    heroAggressiveMode = false;
  };

  showVideoFallback = showFallback;
  hideVideoFallback = hideFallback;

  videoToggle.addEventListener('click', showFallback);
}

if (videoRobot) {
  let robotPulseTimer = null;
  videoRobot.addEventListener('click', () => {
    videoRobot.classList.remove('is-react');
    void videoRobot.offsetWidth;
    videoRobot.classList.add('is-react');
    if (robotPulseTimer) {
      clearTimeout(robotPulseTimer);
    }
    robotPulseTimer = setTimeout(() => {
      videoRobot.classList.remove('is-react');
      if (typeof hideVideoFallback === 'function') {
        hideVideoFallback();
      }
    }, 360);
  });
}

if (siteHeader) {
  const heroSection = document.querySelector('#top');
  if (heroSection) {
    let isCompact = false;
    const touchDevice = window.matchMedia('(hover: none), (pointer: coarse)').matches;
    let baseHeaderHeight = siteHeader.getBoundingClientRect().height || 80;

    const setHeaderCompact = (nextCompact) => {
      if (nextCompact === isCompact) return;
      isCompact = nextCompact;
      siteHeader.classList.toggle('is-compact', isCompact);
    };

    const syncCompactFromScroll = () => {
      const heroBottom = heroSection.getBoundingClientRect().bottom;
      const enterThreshold = baseHeaderHeight + 18;
      const exitThreshold = baseHeaderHeight + 68;
      if (!isCompact && heroBottom <= enterThreshold) {
        setHeaderCompact(true);
        return;
      }
      if (isCompact && heroBottom >= exitThreshold) {
        setHeaderCompact(false);
      }
    };

    if (touchDevice) {
      window.addEventListener('scroll', syncCompactFromScroll, { passive: true });
      window.addEventListener('resize', () => {
        baseHeaderHeight = Math.max(72, siteHeader.getBoundingClientRect().height || baseHeaderHeight);
        syncCompactFromScroll();
      });
      window.addEventListener('load', syncCompactFromScroll, { once: true });
      syncCompactFromScroll();
    } else {
      const heroObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const ratio = entry.intersectionRatio;
            if (!isCompact && ratio < 0.12) {
              setHeaderCompact(true);
            } else if (isCompact && ratio > 0.35) {
              setHeaderCompact(false);
            }
          });
        },
        { threshold: [0, 0.12, 0.35, 1] }
      );
      heroObserver.observe(heroSection);
    }
  }
}

if (nav) {
  const navHighlight = nav.querySelector('.nav-highlight');
  const navLinks = nav.querySelectorAll('a');
  let activeLink = null;
  let navRaf = null;
  let pendingLink = null;

  const updateHighlight = () => {
    if (!navHighlight || !pendingLink) return;
    const navRect = nav.getBoundingClientRect();
    const linkRect = pendingLink.getBoundingClientRect();
    navHighlight.style.setProperty('--hl-x', `${linkRect.left - navRect.left}px`);
    navHighlight.style.setProperty('--hl-y', `${linkRect.top - navRect.top}px`);
    navHighlight.style.setProperty('--hl-w', `${linkRect.width}px`);
    navHighlight.style.setProperty('--hl-h', `${linkRect.height}px`);
    navHighlight.classList.add('is-visible');
  };

  const scheduleHighlight = (link) => {
    pendingLink = link;
    if (navRaf) return;
    navRaf = requestAnimationFrame(() => {
      navRaf = null;
      updateHighlight();
    });
  };

  const hideHighlight = () => {
    if (!navHighlight) return;
    navHighlight.classList.remove('is-visible');
    activeLink = null;
  };

  navLinks.forEach((link) => {
    link.addEventListener('mouseenter', () => {
      activeLink = link;
      scheduleHighlight(link);
    });
    link.addEventListener('focusin', () => {
      activeLink = link;
      scheduleHighlight(link);
    });
  });

  nav.addEventListener('mouseleave', hideHighlight);
  nav.addEventListener('focusout', (event) => {
    if (!nav.contains(event.relatedTarget)) {
      hideHighlight();
    }
  });

  window.addEventListener('resize', () => {
    if (activeLink) {
      scheduleHighlight(activeLink);
    }
  });
}

const hero = document.querySelector('.hero');
const dotsCanvas = document.querySelector('.hero-dots');
const useHeroGradientFlow = window.matchMedia('(max-width: 720px), (hover: none), (pointer: coarse)').matches;
if (hero && dotsCanvas && useHeroGradientFlow) {
  hero.classList.add('hero-gradient-flow');
  dotsCanvas.style.display = 'none';
}

if (hero && dotsCanvas && !useHeroGradientFlow) {
  const ctx = dotsCanvas.getContext('2d', { alpha: true, desynchronized: true });
  let width = 0;
  let height = 0;
  let dpr = Math.min(window.devicePixelRatio || 1, 1.25);
  const maxCanvasWidth = 1920;
  let mouse = { x: 0, y: 0, active: false };
  const spacing = 16;
  const radius = 120;
  const bandWidth = 90;
  const waveAmp = 30;
  const waveSpeed = 0.001;
  const bandStep = 16;
  const jitterCache = [];
  const alphaBuckets = 26;
  const batches = Array.from({ length: alphaBuckets }, () => ({
    x: [], y: [], rx: [], ry: [], rot: []
  }));
  const colorBatches = Array.from({ length: alphaBuckets }, () => ({
    x: [], y: [], rx: [], ry: [], rot: []
  }));
  const dotRed = [201, 42, 42];
  const colorPalette = [
    [47, 158, 68],
    [245, 159, 0],
    [28, 126, 214],
    [214, 51, 108]
  ];
  let animId = null;
  let running = false;
  let isVisible = false;
  let resizeTimer = null;
  let pendingMouseEvent = null; // For throttling mouse events
  let heroScrollTimer = null;
  let freezeUntil = 0;
  let lastFrameTime = 0;
  let renderDensity = 1;
  let densityScore = 0;
  let densityMode = 0;
  let samplePositions = [];

  function buildSamplePositions() {
    samplePositions = [];
    const baseSpacing = width > 1600 ? spacing * 1.5 : spacing;
    const step = Math.max(8, baseSpacing * renderDensity);
    for (let x = 0; x <= width; x += step) {
      samplePositions.push(x);
    }
  }

  function resize() {
    const rect = hero.getBoundingClientRect();
    width = Math.min(rect.width, maxCanvasWidth);
    height = rect.height;
    dpr = window.devicePixelRatio > 1 ? 1.25 : 1;
    dotsCanvas.width = Math.floor(width * dpr);
    dotsCanvas.height = Math.floor(height * dpr);
    dotsCanvas.style.width = '100%';
    dotsCanvas.style.height = '100%';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const steps = Math.floor(maxCanvasWidth / spacing) + 1;
    jitterCache.length = steps;
    for (let i = 0; i < steps; i += 1) {
      const h = Math.sin(i * 12.9898) * 43758.5453;
      jitterCache[i] = (h - Math.floor(h)) * 2 - 1;
    }
    buildSamplePositions();
  }

  function startAnimation() {
    if (!running && isVisible) {
      running = true;
      if (!animId) animId = requestAnimationFrame(render);
    }
  }

  function stopAnimation() {
    running = false;
    if (animId) {
      cancelAnimationFrame(animId);
      animId = null;
    }
  }

  function render(time) {
    if (!running) return;

    // Process throttled mouse event
    if (pendingMouseEvent) {
      const rect = dotsCanvas.getBoundingClientRect();
      mouse.x = pendingMouseEvent.clientX - rect.left;
      mouse.y = pendingMouseEvent.clientY - rect.top;
      mouse.active = mouse.x >= 0 && mouse.x <= rect.width && mouse.y >= 0 && mouse.y <= rect.height;
      pendingMouseEvent = null;
    }

    if (time < freezeUntil) {
      animId = requestAnimationFrame(render);
      return;
    }

    const minDelta = 1000 / 60;
    const frameDelta = lastFrameTime ? (time - lastFrameTime) : minDelta;
    if (frameDelta < minDelta) {
      animId = requestAnimationFrame(render);
      return;
    }
    lastFrameTime = time;

    if (frameDelta > 22) {
      densityScore = Math.min(20, densityScore + 2);
    } else {
      densityScore = Math.max(0, densityScore - 1);
    }

    // Hysteresis to avoid density "popping" (can look like flicker on cursor hover).
    let nextMode = densityMode;
    if (densityMode === 0) {
      if (densityScore > 14) nextMode = 2;
      else if (densityScore > 8) nextMode = 1;
    } else if (densityMode === 1) {
      if (densityScore > 16) nextMode = 2;
      else if (densityScore < 4) nextMode = 0;
    } else {
      if (densityScore < 10) nextMode = 1;
    }

    if (nextMode !== densityMode) {
      densityMode = nextMode;
      renderDensity = densityMode === 2 ? 1.3 : (densityMode === 1 ? 1.15 : 1);
      buildSamplePositions();
    }

    ctx.clearRect(0, 0, width, height);
    for (let i = 0; i < alphaBuckets; i++) {
      batches[i].x.length = 0;
      batches[i].y.length = 0;
      batches[i].rx.length = 0;
      batches[i].ry.length = 0;
      batches[i].rot.length = 0;
      colorBatches[i].x.length = 0;
      colorBatches[i].y.length = 0;
      colorBatches[i].rx.length = 0;
      colorBatches[i].ry.length = 0;
      colorBatches[i].rot.length = 0;
    }
    const t = time * waveSpeed;
    const band1 = (x) => {
      const base = height * 0.35;
      return base + Math.sin(x * 0.012 + t) * waveAmp + Math.sin(x * 0.004 - t * 1.2) * 18;
    };
    const band2 = (x) => {
      const base = height * 0.68;
      return base + Math.sin(x * 0.011 - t * 1.1) * (waveAmp * 0.9) + Math.sin(x * 0.003 + t) * 14;
    };
    const band3 = (x) => {
      const base = height * 0.52;
      return base + Math.sin(x * 0.013 + t * 0.8) * (waveAmp * 0.6) + Math.sin(x * 0.002 - t * 0.9) * 12;
    };

    const cx = width * 0.55;
    const cy = height * 0.52;
    const rx = width * 0.38;
    const ry = height * 0.26;

    const hasCursor = mouse.active;
    const cursorX = mouse.x;
    const cursorY = mouse.y;
    for (let i = 0; i < samplePositions.length; i += 1) {
      const x = samplePositions[i];
      const y1 = band1(x);
      const y2 = band2(x);
      const y3 = band3(x);
      drawBand(x, y1);
      drawBand(x, y2);
      drawBand(x, y3);
    }

    function drawBand(x, centerY) {
      let mx = 0;
      let isMouseNearX = false;
      if (hasCursor) {
        mx = cursorX - x;
        isMouseNearX = Math.abs(mx) < radius;
      }

      for (let offset = -bandWidth; offset <= bandWidth; offset += bandStep) {
        const y = centerY + offset;
        if (y < 0 || y > height) continue;
        const nx = (x - cx) / rx;
        const ny = (y - cy) / ry;
        const ellipse = nx * nx + ny * ny;
        if (ellipse > 1.05) continue;
        const d = Math.abs(offset);
        const falloff = 1 - d / bandWidth;
        let size = 0.8;
        let alpha = 0.08;
        if (falloff > 0.66) {
          size = 2.6;
          alpha = 0.24;
        } else if (falloff > 0.33) {
          size = 1.8;
          alpha = 0.16;
        }
        const edgeFade = Math.max(0, 1 - (ellipse - 0.7) / 0.35);
        alpha *= edgeFade;

        let dx = 0;
        let dy = 0;
        let colorBoost = 0;
        if (hasCursor && isMouseNearX) {
          const my = cursorY - y;
          if (Math.abs(my) < radius) {
            const distSq = (mx * mx) + (my * my);
            if (distSq < (radius * radius) && distSq > 0.001) {
              const dist = Math.sqrt(distSq);
              const force = (1 - dist / radius) * 10;
              dx = -mx / dist * force;
              dy = -my / dist * force;
              colorBoost = 1 - dist / radius;
            }
          }
        }

        const jitter = jitterCache[Math.floor(x / spacing)] || 0;
        const microNoise = jitterCache[Math.floor((x + y) / 10)] || 0;
        const rxDot = Math.max(0.5, size * (1.1 + jitter * 0.25));
        const ryDot = Math.max(0.5, size * (0.85 - jitter * 0.25));
        const rotation = (jitter * 0.5) + (microNoise * 0.08);

        const bucketIdx = Math.floor(alpha * 100);
        if (bucketIdx > 0 && bucketIdx < alphaBuckets) {
          const b = batches[bucketIdx];
          b.x.push(x + dx);
          b.y.push(y + dy);
          b.rx.push(rxDot);
          b.ry.push(ryDot);
          b.rot.push(rotation);
        }

        if (colorBoost > 0.2) {
          const colorAlpha = alpha * Math.min(1, 0.85 + colorBoost * 3.2);
          const colorIdx = Math.floor(colorAlpha * 100);
          if (colorIdx > 0 && colorIdx < alphaBuckets) {
            const cb = colorBatches[colorIdx];
            cb.x.push(x + dx);
            cb.y.push(y + dy);
            cb.rx.push(rxDot);
            cb.ry.push(ryDot);
            cb.rot.push(rotation);
          }
        }
      }
    }
    const [rr, rg, rb] = dotRed;
    ctx.fillStyle = heroAggressiveMode ? `rgb(${rr}, ${rg}, ${rb})` : '#3c3c3c';
    for (let i = 1; i < alphaBuckets; i++) {
      const b = batches[i];
      if (b.x.length === 0) continue;
      ctx.globalAlpha = i / 100;
      ctx.beginPath();
      for (let j = 0; j < b.x.length; j++) {
        const bx = b.x[j], by = b.y[j], brx = b.rx[j], bry = b.ry[j], brot = b.rot[j];
        ctx.moveTo(bx + brx * Math.cos(brot), by + brx * Math.sin(brot));
        ctx.ellipse(bx, by, brx, bry, brot, 0, Math.PI * 2);
      }
      ctx.fill();
    }

    if (hasCursor && !heroAggressiveMode) {
      const phase = (time * 0.00025) % colorPalette.length;
      const idx = Math.floor(phase);
      const fracRaw = phase - idx;
      const frac = fracRaw * fracRaw * (3 - 2 * fracRaw);
      const c1 = colorPalette[idx];
      const c2 = colorPalette[(idx + 1) % colorPalette.length];
      const r = Math.round(c1[0] + (c2[0] - c1[0]) * frac);
      const g = Math.round(c1[1] + (c2[1] - c1[1]) * frac);
      const b = Math.round(c1[2] + (c2[2] - c1[2]) * frac);

      ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
      for (let i = 1; i < alphaBuckets; i++) {
        const cb = colorBatches[i];
        if (cb.x.length === 0) continue;
        ctx.globalAlpha = Math.min(1, (i / 100) * 2.2);
        ctx.beginPath();
        for (let j = 0; j < cb.x.length; j++) {
          const bx = cb.x[j], by = cb.y[j], brx = cb.rx[j], bry = cb.ry[j], brot = cb.rot[j];
          ctx.moveTo(bx + brx * Math.cos(brot), by + brx * Math.sin(brot));
          ctx.ellipse(bx, by, brx, bry, brot, 0, Math.PI * 2);
        }
        ctx.fill();
      }

      // Glow pass (kept, but auto-dials down when frames are too slow).
      if (frameDelta < 32) {
        ctx.globalAlpha = 0.12;
        ctx.shadowColor = `rgb(${r}, ${g}, ${b})`;
        ctx.shadowBlur = 10;
        ctx.beginPath();
        for (let i = 1; i < alphaBuckets; i++) {
          const cb = colorBatches[i];
          if (cb.x.length === 0) continue;
          for (let j = 0; j < cb.x.length; j++) {
            const bx = cb.x[j], by = cb.y[j], brx = cb.rx[j], bry = cb.ry[j], brot = cb.rot[j];
            ctx.moveTo(bx + brx * Math.cos(brot), by + brx * Math.sin(brot));
            ctx.ellipse(bx, by, brx * 1.2, bry * 1.2, brot, 0, Math.PI * 2);
          }
        }
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    }
    animId = requestAnimationFrame(render);
  }

  resize();
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        isVisible = entry.isIntersecting;
        if (isVisible) {
          startAnimation();
        } else {
          stopAnimation();
        }
      });
    },
    { threshold: 0.1 }
  );
  observer.observe(hero);

  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden') {
      stopAnimation();
      return;
    }
    if (isVisible) {
      startAnimation();
    }
  });

  const sizeObserver = new ResizeObserver(() => {
    resize();
  });
  sizeObserver.observe(hero);

  hero.addEventListener('mousemove', (event) => {
    pendingMouseEvent = event;
  });

  hero.addEventListener('mouseleave', () => {
    pendingMouseEvent = null;
    mouse.active = false;
  });

  window.addEventListener('resize', () => {
    stopAnimation();
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      resize();
      if (isVisible) {
        startAnimation();
      }
    }, 250);
  });

  window.addEventListener('scroll', () => {
    if (!isVisible) return;
    freezeUntil = performance.now() + 140;
    hero.classList.add('is-frozen');
    clearTimeout(heroScrollTimer);
    heroScrollTimer = setTimeout(() => {
      hero.classList.remove('is-frozen');
    }, 260);
  }, { passive: true });
}

const sentinelFrame = document.querySelector('.preview-img.is-sentinel')?.closest('.visual-frame');
const sentinelTemp = document.querySelector('[data-sentinel-temp]');
const sentinelVibration = document.querySelector('[data-sentinel-vibration]');
const sentinelPosition = document.querySelector('[data-sentinel-position]');
const sentinelRpm = document.querySelector('[data-sentinel-rpm]');
let sentinelTimer = null;

function updateSentinelReadout() {
  if (!sentinelTemp || !sentinelVibration || !sentinelPosition || !sentinelRpm) return;
  const temp = (42 + Math.random() * 6).toFixed(1);
  const vibration = (0.12 + Math.random() * 0.4).toFixed(2);
  const position = (1.2 + Math.random() * 0.8).toFixed(2);
  const rpm = Math.floor(1450 + Math.random() * 120);
  sentinelTemp.textContent = `${temp}°C`;
  sentinelVibration.textContent = `${vibration} g`;
  sentinelPosition.textContent = `${position} mm`;
  sentinelRpm.textContent = `${rpm}`;
}

function startSentinelReadout() {
  if (sentinelTimer) return;
  updateSentinelReadout();
  sentinelTimer = setInterval(updateSentinelReadout, 120);
}

function stopSentinelReadout() {
  if (!sentinelTimer) return;
  clearInterval(sentinelTimer);
  sentinelTimer = null;
}

if (sentinelFrame) {
  sentinelFrame.addEventListener('mouseenter', startSentinelReadout);
  sentinelFrame.addEventListener('mouseleave', stopSentinelReadout);
  sentinelFrame.addEventListener('pointerenter', startSentinelReadout);
  sentinelFrame.addEventListener('pointerleave', stopSentinelReadout);
  sentinelFrame.addEventListener('focusin', startSentinelReadout);
  sentinelFrame.addEventListener('focusout', stopSentinelReadout);

  if (window.matchMedia('(hover: none), (pointer: coarse)').matches) {
    const sentinelObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startSentinelReadout();
          } else {
            stopSentinelReadout();
          }
        });
      },
      { threshold: 0.45 }
    );
    sentinelObserver.observe(sentinelFrame);
  }
}

const scrollThumb = document.querySelector('.scroll-thumb');
const scrollTrack = document.querySelector('.scroll-track');
const scrollTicks = document.querySelector('.scroll-ticks');
let scrollTickItems = [];
let updateScrollIndicator = null;
let layoutScrollTicks = null;
if (scrollThumb && scrollTrack) {
  let targetRatio = 0;
  let currentRatio = 0;
  let rafId = null;
  let stopTimer = null;
  let intensity = 0;
  let intensityTarget = 0;
  let hoverActive = false;
  let scrollActive = false;
  let hoverRatio = 0;
  const hoverIntensity = 2.4;
  const projectCards = Array.from(document.querySelectorAll('.project'));
  let projectRanges = [];
  const baseThumbWidth = 48;
  const projectThumbWidth = 48;

  const updateIntensityTarget = () => {
    intensityTarget = hoverActive ? hoverIntensity : (scrollActive ? 1 : 0);
  };

  const layoutTicks = () => {
    if (!scrollTickItems.length) return;
    const trackHeight = scrollTrack.clientHeight;
    const maxIndex = scrollTickItems.length - 1;
    scrollTickItems.forEach((tick, idx) => {
      const tickHeight = tick.dataset.major === 'true' ? 1 : 1;
      const y = Math.round(((trackHeight - tickHeight) * idx) / (maxIndex || 1));
      tick.style.top = `${y}px`;
    });
  };

  layoutScrollTicks = layoutTicks;

  const getScrollRatio = () => {
    const doc = document.documentElement;
    const scrollTop = doc.scrollTop || document.body.scrollTop;
    const scrollHeight = doc.scrollHeight - doc.clientHeight;
    return scrollHeight > 0 ? scrollTop / scrollHeight : 0;
  };

  const updateThumb = (ratio) => {
    const trackHeight = scrollTrack.clientHeight;
    const thumbHeight = scrollThumb.clientHeight;
    const maxTravel = trackHeight - thumbHeight;
    const y = Math.max(0, Math.min(maxTravel, ratio * maxTravel));
    scrollThumb.style.setProperty('--thumb-y', `${y}px`);
  };

  const updateProjectIndicator = () => {
    if (!projectRanges.length) {
      scrollThumb.style.setProperty('--thumb-width', `${baseThumbWidth}px`);
      return;
    }
    const scrollPos = window.scrollY;
    const inProject = projectRanges.some((range) => {
      const isActive = scrollPos >= range.top && scrollPos <= range.bottom;
      return isActive;
    });
    scrollThumb.style.setProperty('--thumb-width', inProject ? `${projectThumbWidth}px` : `${baseThumbWidth}px`);
  };

  const updateTickScales = (ratio, strength) => {
    if (!scrollTickItems.length) return;
    const influenceRadius = 0.085;
    const maxIndex = scrollTickItems.length - 1;
    scrollTickItems.forEach((tick, idx) => {
      if (strength <= 0.001) {
        tick.style.setProperty('--tick-scale', '1');
        tick.style.setProperty('--tick-scale-y', '1');
        return;
      }
      const tickRatio = maxIndex > 0 ? idx / maxIndex : 0;
      const distance = Math.abs(tickRatio - ratio);
      const influence = Math.max(0, 1 - distance / influenceRadius);
      const isMajor = tick.dataset.major === 'true';
      const scaleX = 1 + influence * (isMajor ? 0.35 : 0.55) * strength;
      const scaleY = 1 + influence * (isMajor ? 0.45 : 0.7) * strength;
      tick.style.setProperty('--tick-scale', scaleX);
      tick.style.setProperty('--tick-scale-y', scaleY);
    });
  };

  const animateTicks = () => {
    const activeRatio = hoverActive ? hoverRatio : targetRatio;
    currentRatio += (activeRatio - currentRatio) * 0.12;
    intensity += (intensityTarget - intensity) * 0.18;
    updateTickScales(currentRatio, intensity);

    const isSettled = intensityTarget === 0 && intensity < 0.02 && Math.abs(targetRatio - currentRatio) < 0.001;
    if (isSettled) {
      rafId = null;
      updateTickScales(currentRatio, 0);
      return;
    }
    rafId = requestAnimationFrame(animateTicks);
  };

  updateScrollIndicator = () => {
    targetRatio = getScrollRatio();
    updateThumb(targetRatio);
    updateTickScales(currentRatio, intensity);
    updateProjectIndicator();
  };

  const scheduleUpdate = () => {
    targetRatio = getScrollRatio();
    updateThumb(targetRatio);
    updateProjectIndicator();
    scrollActive = true;
    updateIntensityTarget();
    if (!rafId) {
      currentRatio = targetRatio;
      rafId = requestAnimationFrame(animateTicks);
    }
    clearTimeout(stopTimer);
    stopTimer = setTimeout(() => {
      scrollActive = false;
      updateIntensityTarget();
      if (!rafId && intensityTarget > 0) {
        rafId = requestAnimationFrame(animateTicks);
      }
    }, 180);
  };

  updateScrollIndicator();
  window.addEventListener('scroll', scheduleUpdate, { passive: true });
  window.addEventListener('resize', () => requestAnimationFrame(() => {
    targetRatio = getScrollRatio();
    updateThumb(targetRatio);
    updateProjectIndicator();
    if (typeof layoutScrollTicks === 'function') {
      layoutScrollTicks();
    }
  }));

  const handleHover = (event) => {
    hoverActive = true;
    updateIntensityTarget();
    targetRatio = getScrollRatio();
    if (event) {
      const rect = scrollTrack.getBoundingClientRect();
      const y = event.clientY - rect.top;
      hoverRatio = Math.max(0, Math.min(1, y / rect.height));
    }
    if (!rafId) {
      currentRatio = hoverRatio;
      rafId = requestAnimationFrame(animateTicks);
    }
  };

  scrollTrack.addEventListener('mouseenter', handleHover);
  scrollTrack.addEventListener('mousemove', handleHover);
  scrollTrack.addEventListener('mouseleave', () => {
    hoverActive = false;
    updateIntensityTarget();
    if (!rafId && intensityTarget > 0) {
      rafId = requestAnimationFrame(animateTicks);
    }
  });

  updateProjectRanges = () => {
    if (!projectCards.length) {
      projectRanges = [];
      updateProjectIndicator();
      return;
    }
    projectRanges = projectCards.map((card) => {
      const rect = card.getBoundingClientRect();
      const top = rect.top + window.scrollY;
      const bottom = top + rect.height;
      return { top, bottom };
    });
    updateProjectIndicator();
  };
}

if (scrollTicks) {
  const totalTicks = 34;
  const majorTicks = 6;
  const majorIndices = new Set();
  for (let i = 0; i < majorTicks; i += 1) {
    const idx = Math.round(((totalTicks - 1) * i) / (majorTicks - 1));
    majorIndices.add(idx);
  }
  scrollTicks.innerHTML = '';
  scrollTickItems = [];
  for (let i = 0; i < totalTicks; i += 1) {
    const tick = document.createElement('span');
    tick.className = majorIndices.has(i) ? 'scroll-tick is-major' : 'scroll-tick';
    tick.dataset.major = majorIndices.has(i) ? 'true' : 'false';
    scrollTicks.appendChild(tick);
    scrollTickItems.push(tick);
  }
  if (typeof layoutScrollTicks === 'function') {
    layoutScrollTicks();
  }
  if (typeof updateProjectRanges === 'function') {
    updateProjectRanges();
  }
  if (typeof updateScrollIndicator === 'function') {
    updateScrollIndicator();
  }
}

const quantumScroll = document.querySelector('.quantum-scroll');
if (quantumScroll) {
  const isTouchPointer = window.matchMedia('(hover: none), (pointer: coarse)').matches;
  const track = quantumScroll.querySelector('.quantum-track');
  const node = quantumScroll.querySelector('.quantum-node');
  const field = quantumScroll.querySelector('.quantum-wave-field');
  const newsSection = document.getElementById('news');
  if (track && node && field && newsSection && !isTouchPointer) {
    const particleCount = 5;
    const particles = [];
    const waveLines = [];

    for (let i = 0; i < particleCount; i += 1) {
      const particle = document.createElement('div');
      particle.className = 'quantum-entity';
      track.appendChild(particle);
      particles.push(particle);
    }

    for (let i = 0; i < 50; i += 1) {
      const wave = document.createElement('div');
      wave.className = 'quantum-wave';
      wave.style.top = `${(i / 50) * 100}%`;
      field.appendChild(wave);
      waveLines.push(wave);
    }

    const PHYS = {
      TENSION: 0.15
    };

    const state = {
      y: 0,
      targetY: 0,
      isObserved: false,
      probability: 0,
      time: 0
    };

    let newsTop = 0;
    const doc = document.documentElement;
    const clamp = (value, min, max) => Math.max(min, Math.min(value, max));

    const getMax = () => Math.max(0, track.clientHeight - node.clientHeight);

    const updateNewsTop = () => {
      newsTop = newsSection.getBoundingClientRect().top + window.scrollY;
    };

    const updateQuantumVisibility = () => {
      const show = window.scrollY >= newsTop - 20;
      document.body.classList.toggle('show-quantum-scroll', show);
    };

    const shouldRenderQuantum = () => (
      document.visibilityState === 'visible' &&
      (state.isObserved || window.scrollY >= newsTop - 20)
    );

    const syncTargetFromScroll = () => {
      const max = getMax();
      if (max <= 0) {
        state.targetY = 0;
        return;
      }
      const maxScroll = doc.scrollHeight - window.innerHeight;
      const range = Math.max(1, maxScroll - newsTop);
      const progress = clamp((window.scrollY - newsTop) / range, 0, 1);
      state.targetY = progress * max;
    };

    const setScrollFromTarget = () => {
      const max = getMax();
      if (max <= 0) return;
      const maxScroll = doc.scrollHeight - window.innerHeight;
      const range = Math.max(1, maxScroll - newsTop);
      const progress = clamp(state.targetY / max, 0, 1);
      const nextScroll = newsTop + progress * range;
      window.scrollTo({ top: nextScroll, behavior: 'auto' });
    };

    const update = () => {
      if (!shouldRenderQuantum()) {
        requestAnimationFrame(update);
        return;
      }

      state.time += 0.05;
      if (!state.isObserved) {
        syncTargetFromScroll();
      }

      state.y += (state.targetY - state.y) * PHYS.TENSION;

      if (!state.isObserved) {
        state.probability += (1 - state.probability) * 0.05;
      } else {
        state.probability += (0 - state.probability) * 0.2;
      }

      const nodeHalf = node.clientHeight / 2;
      particles.forEach((particle, i) => {
        const wobble = Math.sin(state.time + i) * (state.probability * 40);
        const opacity = state.isObserved ? (i === 0 ? 1 : 0) : 1 / particleCount;
        const size = state.isObserved ? 10 : 10 + state.probability * 20;
        const y = clamp(state.y + wobble * (i / 2), 0, getMax());

        particle.style.top = `${y}px`;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.opacity = opacity;
        particle.style.borderWidth = state.isObserved ? '2px' : '1px';

        if (i === 0) {
          node.style.top = `${state.y}px`;
        }
      });

      const trackHeight = track.clientHeight;
      waveLines.forEach((wave, index) => {
        const lineY = (index / waveLines.length) * trackHeight;
        const dist = Math.abs(lineY - (state.y + nodeHalf));
        const intensity = Math.sin(dist * 0.1 - state.time) * (20 * state.probability);
        wave.style.transform = `translateX(${intensity}px)`;
        wave.style.opacity = Math.max(0.02, 0.2 - dist * 0.002);
      });

      requestAnimationFrame(update);
    };

    node.addEventListener('pointerdown', (event) => {
      state.isObserved = true;
      node.setPointerCapture(event.pointerId);
    });

    window.addEventListener('pointermove', (event) => {
      if (!state.isObserved) return;
      const rect = track.getBoundingClientRect();
      const y = event.clientY - rect.top - node.clientHeight / 2;
      state.targetY = clamp(y, 0, getMax());
      state.y = state.targetY;
      setScrollFromTarget();
    });

    window.addEventListener('pointerup', () => {
      state.isObserved = false;
    });
    window.addEventListener('pointercancel', () => {
      state.isObserved = false;
    });

    window.addEventListener('scroll', () => {
      if (!state.isObserved) {
        syncTargetFromScroll();
      }
      updateQuantumVisibility();
    }, { passive: true });

    window.addEventListener('resize', () => {
      updateNewsTop();
      updateQuantumVisibility();
      if (!state.isObserved) {
        syncTargetFromScroll();
      }
    });
    window.addEventListener('load', () => {
      updateNewsTop();
      updateQuantumVisibility();
      if (!state.isObserved) {
        syncTargetFromScroll();
      }
    });

    updateNewsTop();
    updateQuantumVisibility();
    syncTargetFromScroll();
    update();
  }
}

const calloutSection = document.querySelector('.message-callout');
if (calloutSection) {
  const calloutObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle('is-visible', entry.isIntersecting);
      });
    },
    { threshold: 0.3 }
  );
  calloutObserver.observe(calloutSection);
}


let pageScrollTimer = null;
window.addEventListener(
  'scroll',
  () => {
    document.body.classList.add('is-scrolling');
    clearTimeout(pageScrollTimer);
    pageScrollTimer = setTimeout(() => {
      document.body.classList.remove('is-scrolling');
    }, 160);
  },
  { passive: true }
);

const caseList = document.querySelector('.case-list');
if (caseList) {
  const caseObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle('is-visible', entry.isIntersecting);
      });
    },
    { threshold: 0.15 }
  );
  caseObserver.observe(caseList);
}

const projectsSection = document.getElementById('projects');
if (projectsSection) {
  const projectsObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        document.body.classList.toggle('show-project-scroll', entry.isIntersecting);
      });
    },
    { threshold: 0.2 }
  );
  projectsObserver.observe(projectsSection);
}


const playgrounds = document.querySelectorAll('.playground');
const playgroundModal = document.querySelector('.playground-modal');
if (playgrounds.length && playgroundModal) {
  const modalInput = playgroundModal.querySelector('.playground-modal-input');
  const modalOutput = playgroundModal.querySelector('.playground-modal-output');
  const modalRun = playgroundModal.querySelector('.playground-modal-run');
  const modalReset = playgroundModal.querySelector('.playground-modal-reset');
  const closeTargets = playgroundModal.querySelectorAll('[data-playground-close]');
  let closeModal = null;
  const playgroundModalA11y = createModalA11y(playgroundModal, {
    getInitialFocus: () => modalInput || playgroundModal.querySelector('[data-playground-close]'),
    onEscape: () => {
      if (typeof closeModal === 'function') {
        closeModal();
      }
    }
  });

  const formatValue = (value) => {
    if (value === null) return 'null';
    if (value === undefined) return 'undefined';
    if (typeof value === 'string') return value;
    if (typeof value === 'bigint') return String(value) + 'n';
    if (typeof value === 'symbol') return value.toString();
    if (typeof value === 'function') {
      return '[Function' + (value.name ? ': ' + value.name : '') + ']';
    }
    if (value instanceof Error) {
      return value.stack || value.message || String(value);
    }
    if (typeof value === 'object') {
      try {
        return JSON.stringify(value);
      } catch (error) {
        return Object.prototype.toString.call(value);
      }
    }
    return String(value);
  };

  const createWorker = () => {
    const workerSource = `
      const formatValue = ${formatValue.toString()};
      const send = (type, payload) => self.postMessage({ type, payload });
      const emit = (type, args) => {
        send(type, args.map(formatValue).join(' '));
      };
      console.log = (...args) => emit('log', args);
      console.warn = (...args) => emit('warn', args);
      console.error = (...args) => emit('error', args);
      console.table = (...args) => emit('log', args);

      self.onmessage = (event) => {
        const code = event && event.data ? event.data.code : '';
        let result;
        try {
          const fn = new Function(code);
          result = fn();
        } catch (err) {
          send('error', formatValue(err));
        }
        if (typeof result !== 'undefined') {
          send('result', formatValue(result));
        }
        send('done', '');
      };
    `;
    const blob = new Blob([workerSource], { type: 'application/javascript' });
    const url = URL.createObjectURL(blob);
    const worker = new Worker(url, { name: 'playground' });
    URL.revokeObjectURL(url);
    return worker;
  };

  let worker = null;
  let runTimer = null;
  let buffer = [];
  let hasCompleted = false;
  let initialCode = '';

  const clearRun = () => {
    if (worker) {
      worker.terminate();
      worker = null;
    }
    if (runTimer) {
      clearTimeout(runTimer);
      runTimer = null;
    }
  };

  const renderOutput = () => {
    if (modalOutput) {
      modalOutput.textContent = buffer.join('\n');
    }
  };

  const appendLine = (line) => {
    buffer.push(line);
    renderOutput();
  };

  const runCode = () => {
    if (!modalInput || !modalOutput) return;
    clearRun();
    buffer = [];
    hasCompleted = false;
    renderOutput();
    appendLine('Running...');
    worker = createWorker();
    worker.onmessage = (event) => {
      const { type, payload } = event.data || {};
      if (!type) return;
      if (buffer.length && buffer[0] === 'Running...') {
        buffer.shift();
      }
      if (type === 'log') appendLine(payload);
      if (type === 'warn') appendLine(`warn: ${payload}`);
      if (type === 'error') appendLine(`error: ${payload}`);
      if (type === 'result') appendLine(`return: ${payload}`);
      if (type === 'done') {
        hasCompleted = true;
        if (!buffer.length) {
          appendLine('done');
        }
      }
    };
    worker.onerror = (event) => {
      if (buffer.length && buffer[0] === 'Running...') {
        buffer.shift();
      }
      appendLine(`error: ${event.message || 'Unexpected error'}`);
    };
    worker.postMessage({ code: modalInput.value });
    runTimer = setTimeout(() => {
      if (!worker) return;
      if (hasCompleted) {
        clearRun();
        return;
      }
      if (buffer.length && buffer[0] === 'Running...') {
        buffer.shift();
      }
      appendLine('stopped: time limit reached');
      clearRun();
    }, 1800);
  };

  const resetCode = () => {
    if (!modalInput) return;
    clearRun();
    hasCompleted = false;
    modalInput.value = initialCode;
    buffer = [];
    renderOutput();
  };

  const openModal = (playground, trigger) => {
    if (!modalInput) return;
    const source = playground.querySelector('.playground-source');
    initialCode = source ? source.value : '';
    modalInput.value = initialCode;
    buffer = [];
    hasCompleted = false;
    renderOutput();
    playgroundModalA11y.open(trigger);
  };

  closeModal = () => {
    clearRun();
    buffer = [];
    hasCompleted = false;
    renderOutput();
    playgroundModalA11y.close();
  };

  playgrounds.forEach((playground) => {
    const openButton = playground.querySelector('.playground-open');
    if (!openButton) return;
    openButton.addEventListener('click', () => openModal(playground, openButton));
  });

  if (modalRun) modalRun.addEventListener('click', runCode);
  if (modalReset) modalReset.addEventListener('click', resetCode);
  closeTargets.forEach((btn) => btn.addEventListener('click', closeModal));
}

const conceptModal = document.querySelector('.concept-modal');
const conceptTriggers = document.querySelectorAll('.concept-map-open');
if (conceptModal && conceptTriggers.length) {
  const modalBody = conceptModal.querySelector('[data-concept-modal-body]');
  const closeTargets = conceptModal.querySelectorAll('[data-concept-close]');
  let activeMap = null;
  let closeConcept = null;
  const conceptModalA11y = createModalA11y(conceptModal, {
    getInitialFocus: () => conceptModal.querySelector('.concept-modal-close') || conceptModal.querySelector('[data-concept-close]'),
    onEscape: () => {
      if (typeof closeConcept === 'function') {
        closeConcept();
      }
    }
  });

  const applyTranslations = (root) => {
    const dictionary = translations[document.documentElement.lang] || translations.de;
    root.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (dictionary[key]) {
        el.textContent = dictionary[key];
      }
    });
  };

  const setChildrenState = (children, expanded) => {
    if (expanded) {
      children.style.maxHeight = `${children.scrollHeight}px`;
      children.style.maxWidth = `${children.scrollWidth}px`;
      children.style.opacity = '1';
      children.style.transform = 'translateX(0)';
      children.style.pointerEvents = 'auto';
    } else {
      children.style.maxHeight = '0px';
      children.style.maxWidth = '0px';
      children.style.opacity = '0';
      children.style.transform = 'translateX(-8px)';
      children.style.pointerEvents = 'none';
    }
  };

  const bindToggles = (root) => {
    root.querySelectorAll('[data-concept-toggle]').forEach((toggle) => {
      toggle.addEventListener('click', () => {
        const expanded = toggle.getAttribute('aria-expanded') === 'true';
        const next = toggle.nextElementSibling;
        if (!next || !next.classList.contains('concept-children')) return;
        toggle.setAttribute('aria-expanded', expanded ? 'false' : 'true');
        setChildrenState(next, !expanded);
      });
    });
  };

  const openConcept = (key, trigger) => {
    const template = document.querySelector(`#concept-map-${key}`);
    const source = template ? template.content.firstElementChild : null;
    if (!source || !modalBody) return;
    modalBody.innerHTML = '';
    const clone = source.cloneNode(true);
    modalBody.appendChild(clone);
    applyTranslations(clone);
    clone.querySelectorAll('[data-concept-toggle]').forEach((toggle) => {
      toggle.setAttribute('aria-expanded', 'false');
    });
    bindToggles(clone);
    clone.querySelectorAll('.concept-children').forEach((children) => {
      const toggle = children.previousElementSibling;
      const expanded = toggle && toggle.getAttribute('aria-expanded') === 'true';
      setChildrenState(children, expanded);
    });
    activeMap = clone;
    panX = 0;
    panY = 0;
    zoom = 1;
    applyPan();
    conceptModalA11y.open(trigger);
  };

  let isPanning = false;
  let panStartX = 0;
  let panStartY = 0;
  let panX = 0;
  let panY = 0;
  let panOriginX = 0;
  let panOriginY = 0;
  let panRaf = null;
  let zoom = 1;
  let pinchDistance = 0;
  let pinchMidX = 0;
  let pinchMidY = 0;
  const PINCH_ZOOM_THRESHOLD = 4;
  const prefersTouchInput = window.matchMedia('(hover: none), (pointer: coarse)').matches;
  const activePointers = new Map();
  const MIN_ZOOM = 0.6;
  const MAX_ZOOM = 2.4;

  const applyPan = () => {
    if (!activeMap) return;
    activeMap.style.transform = `translate3d(${panX}px, ${panY}px, 0) translate(-50%, -50%) scale(${zoom})`;
  };

  const queueApplyPan = () => {
    if (panRaf) return;
    panRaf = requestAnimationFrame(() => {
      applyPan();
      panRaf = null;
    });
  };

  const setZoomAtPoint = (nextZoom, clientX, clientY) => {
    if (!modalBody || !activeMap) return;
    if (nextZoom === zoom) return;
    const rect = modalBody.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const f = nextZoom / zoom;
    panX = f * panX + (1 - f) * (clientX - centerX);
    panY = f * panY + (1 - f) * (clientY - centerY);
    zoom = nextZoom;
    queueApplyPan();
  };

  const endPan = () => {
    if (!modalBody) return;
    isPanning = false;
    modalBody.classList.remove('is-grabbing');
  };

  const beginDragPan = (clientX, clientY) => {
    if (!modalBody) return;
    isPanning = true;
    modalBody.classList.add('is-grabbing');
    panStartX = clientX;
    panStartY = clientY;
    panOriginX = panX;
    panOriginY = panY;
  };

  const onPointerDown = (event) => {
    if (!modalBody || !activeMap) return;
    if (event.target.closest('button')) return;
    if (prefersTouchInput && event.pointerType !== 'touch') return;
    if (event.pointerType === 'mouse' && event.button !== 0) return;
    activePointers.set(event.pointerId, { x: event.clientX, y: event.clientY });
    if (typeof modalBody.setPointerCapture === 'function') {
      try {
        modalBody.setPointerCapture(event.pointerId);
      } catch (_error) {
        // Ignore capture failures on unsupported browsers.
      }
    }
    if (activePointers.size === 1) {
      beginDragPan(event.clientX, event.clientY);
    } else if (activePointers.size === 2) {
      const [a, b] = Array.from(activePointers.values());
      pinchDistance = Math.hypot(b.x - a.x, b.y - a.y);
      pinchMidX = (a.x + b.x) / 2;
      pinchMidY = (a.y + b.y) / 2;
      isPanning = false;
      modalBody.classList.add('is-grabbing');
    }
    event.preventDefault();
  };

  const onPointerMove = (event) => {
    if (!modalBody || !activeMap) return;
    if (!activePointers.has(event.pointerId)) return;
    activePointers.set(event.pointerId, { x: event.clientX, y: event.clientY });

    if (activePointers.size >= 2) {
      const [a, b] = Array.from(activePointers.values());
      const nextDistance = Math.hypot(b.x - a.x, b.y - a.y);
      const nextMidX = (a.x + b.x) / 2;
      const nextMidY = (a.y + b.y) / 2;

      if (pinchDistance > 0 && nextDistance > 0) {
        const delta = nextDistance - pinchDistance;
        if (Math.abs(delta) >= PINCH_ZOOM_THRESHOLD) {
          const ratio = nextDistance / pinchDistance;
          const nextZoom = Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, zoom * ratio));
          setZoomAtPoint(nextZoom, nextMidX, nextMidY);
        }
      }

      panX += nextMidX - pinchMidX;
      panY += nextMidY - pinchMidY;
      pinchDistance = nextDistance;
      pinchMidX = nextMidX;
      pinchMidY = nextMidY;
      queueApplyPan();
      event.preventDefault();
      return;
    }

    if (!isPanning) return;
    const dx = event.clientX - panStartX;
    const dy = event.clientY - panStartY;
    panX = panOriginX + dx;
    panY = panOriginY + dy;
    queueApplyPan();
    event.preventDefault();
  };

  const onPointerUp = (event) => {
    if (activePointers.has(event.pointerId)) {
      activePointers.delete(event.pointerId);
    }
    if (modalBody && typeof modalBody.hasPointerCapture === 'function' && modalBody.hasPointerCapture(event.pointerId)) {
      try {
        modalBody.releasePointerCapture(event.pointerId);
      } catch (_error) {
        // Ignore release failures on unsupported browsers.
      }
    }

    if (activePointers.size === 1) {
      const remaining = Array.from(activePointers.values())[0];
      beginDragPan(remaining.x, remaining.y);
      return;
    }

    if (activePointers.size === 0) {
      pinchDistance = 0;
      endPan();
    }
  };

  modalBody.addEventListener('pointerdown', onPointerDown);
  window.addEventListener('pointermove', onPointerMove, { passive: false });
  window.addEventListener('pointerup', onPointerUp);
  window.addEventListener('pointercancel', onPointerUp);
  const preventNativeGesture = (event) => {
    if (!conceptModal.classList.contains('is-open')) return;
    event.preventDefault();
  };
  modalBody.addEventListener('gesturestart', preventNativeGesture, { passive: false });
  modalBody.addEventListener('gesturechange', preventNativeGesture, { passive: false });
  modalBody.addEventListener('gestureend', preventNativeGesture, { passive: false });
  modalBody.addEventListener('touchmove', (event) => {
    if (!conceptModal.classList.contains('is-open')) return;
    if (event.touches && event.touches.length > 1) {
      event.preventDefault();
    }
  }, { passive: false });
  modalBody.addEventListener('wheel', (event) => {
    const zoomFactor = Math.exp(-event.deltaY * 0.0015);
    const nextZoom = Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, zoom * zoomFactor));
    setZoomAtPoint(nextZoom, event.clientX, event.clientY);
    event.preventDefault();
  }, { passive: false });

  closeConcept = () => {
    if (modalBody) {
      activePointers.clear();
      pinchDistance = 0;
      endPan();
      modalBody.innerHTML = '';
    }
    activeMap = null;
    conceptModalA11y.close();
  };

  conceptTriggers.forEach((trigger) => {
    trigger.addEventListener('click', () => {
      const key = trigger.dataset.mapTarget;
      if (key) {
        openConcept(key, trigger);
      }
    });
  });

  closeTargets.forEach((btn) => btn.addEventListener('click', closeConcept));

  window.updateConceptMap = () => {
    if (activeMap) {
      applyTranslations(activeMap);
      applyPan();
      activeMap.querySelectorAll('.concept-children').forEach((children) => {
        const toggle = children.previousElementSibling;
        const expanded = toggle && toggle.getAttribute('aria-expanded') === 'true';
        setChildrenState(children, expanded);
      });
    }
  };
}

setupLazyFrameModal({
  modalSelector: '.nordbund-modal',
  triggerSelector: '[data-nordbund-open]',
  closeSelector: '[data-nordbund-close]',
  frameSelector: '.nordbund-modal-frame',
  closeButtonSelector: '.nordbund-modal-head [data-nordbund-close]',
  preload: 'idle',
  preloadTimeoutMs: 1800
});

setupLazyFrameModal({
  modalSelector: '.sentinel-modal',
  triggerSelector: '[data-sentinel-open]',
  closeSelector: '[data-sentinel-close]',
  frameSelector: '.sentinel-modal-frame',
  closeButtonSelector: '.sentinel-modal-head [data-sentinel-close]'
});

function setupMobileCaseExtras() {
  const isTouchDevice = window.matchMedia('(hover: none), (pointer: coarse)').matches;
  if (!isTouchDevice) return;

  const cards = Array.from(document.querySelectorAll('.case-extra'));
  if (!cards.length) return;

  const closeAll = (except) => {
    cards.forEach((card) => {
      if (card !== except) {
        card.classList.remove('is-open');
      }
    });
  };

  cards.forEach((card) => {
    let touchMoved = false;
    let touchStartX = 0;
    let touchStartY = 0;

    card.addEventListener('touchstart', (event) => {
      if (!event.touches.length) return;
      touchMoved = false;
      touchStartX = event.touches[0].clientX;
      touchStartY = event.touches[0].clientY;
    }, { passive: true });

    card.addEventListener('touchmove', (event) => {
      if (!event.touches.length) return;
      const dx = Math.abs(event.touches[0].clientX - touchStartX);
      const dy = Math.abs(event.touches[0].clientY - touchStartY);
      if (dx > 8 || dy > 8) {
        touchMoved = true;
      }
    }, { passive: true });

    card.addEventListener('click', (event) => {
      if (touchMoved) return;
      const isOpen = card.classList.contains('is-open');
      const insideBody = event.target.closest('.extra-body');

      if (insideBody) return;

      if (!isOpen) {
        closeAll(card);
        card.classList.add('is-open');
        return;
      }
    });
  });

  document.addEventListener('click', (event) => {
    if (!event.target.closest('.case-extra')) {
      closeAll(null);
    }
  });
}

setupMobileCaseExtras();
