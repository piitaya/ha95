// Home Assistant 95 for Home Assistant
// Transforms HA into a nostalgic Home Assistant 95 experience

const RETRO_THEME_LIGHT = {
  // Sharp corners
  "--ha-border-radius-sm": "0",
  "--ha-border-radius-md": "0",
  "--ha-border-radius-lg": "0",
  "--ha-border-radius-xl": "0",
  "--ha-border-radius-2xl": "0",
  "--ha-border-radius-3xl": "0",
  "--ha-border-radius-4xl": "0",
  "--ha-border-radius-5xl": "0",
  "--ha-border-radius-6xl": "0",
  "--ha-border-radius-pill": "0",
  "--ha-border-radius-circle": "0",

  // Fonts
  "--ha-font-family-body":
    "Tahoma, 'MS Sans Serif', 'Microsoft Sans Serif', Arial, sans-serif",
  "--ha-font-family-heading":
    "Tahoma, 'MS Sans Serif', 'Microsoft Sans Serif', Arial, sans-serif",
  "--ha-font-family-code": "'Courier New', Courier, monospace",
  "--ha-font-family-longform":
    "Tahoma, 'MS Sans Serif', 'Microsoft Sans Serif', Arial, sans-serif",

  // No transparency
  "--ha-dialog-scrim-backdrop-filter": "none",

  // Disable animations
  "--ha-animation-duration-fast": "1ms",
  "--ha-animation-duration-normal": "1ms",
  "--ha-animation-duration-slow": "1ms",

  // Base colors
  "--primary-color": "#000080",
  "--dark-primary-color": "#00006B",
  "--light-primary-color": "#4040C0",
  "--accent-color": "#000080",
  "--primary-text-color": "#000000",
  "--secondary-text-color": "#404040",
  "--text-primary-color": "#ffffff",
  "--text-light-primary-color": "#000000",
  "--disabled-text-color": "#808080",

  // Backgrounds
  "--primary-background-color": "#C0C0C0",
  "--lovelace-background": "#008080",
  "--secondary-background-color": "#C0C0C0",
  "--card-background-color": "#C0C0C0",
  "--clear-background-color": "#C0C0C0",

  // RGB values
  "--rgb-primary-color": "0, 0, 128",
  "--rgb-accent-color": "0, 0, 128",
  "--rgb-primary-text-color": "0, 0, 0",
  "--rgb-secondary-text-color": "64, 64, 64",
  "--rgb-text-primary-color": "255, 255, 255",
  "--rgb-card-background-color": "192, 192, 192",

  // UI chrome
  "--divider-color": "#808080",
  "--outline-color": "#808080",
  "--outline-hover-color": "#404040",
  "--shadow-color": "rgba(0, 0, 0, 0.5)",
  "--scrollbar-thumb-color": "#808080",
  "--disabled-color": "#808080",

  // Cards - retro bevel effect
  "--ha-card-border-width": "1px",
  "--ha-card-border-color": "#808080",
  "--ha-card-box-shadow": "1px 1px 0 #404040, -1px -1px 0 #ffffff",
  "--ha-card-border-radius": "0",

  // Dialogs
  "--ha-dialog-border-radius": "0",
  "--ha-dialog-surface-background": "#C0C0C0",
  "--dialog-box-shadow": "1px 1px 0 #404040, -1px -1px 0 #ffffff",

  // Box shadows - retro bevel
  "--ha-box-shadow-s": "1px 1px 0 #404040, -1px -1px 0 #ffffff",
  "--ha-box-shadow-m": "1px 1px 0 #404040, -1px -1px 0 #ffffff",
  "--ha-box-shadow-l": "1px 1px 0 #404040, -1px -1px 0 #ffffff",

  // Header
  "--app-header-background-color": "#000080",
  "--app-header-text-color": "#ffffff",
  "--app-header-border-bottom": "2px outset #C0C0C0",

  // Sidebar
  "--sidebar-background-color": "#C0C0C0",
  "--sidebar-text-color": "#000000",
  "--sidebar-selected-text-color": "#ffffff",
  "--sidebar-selected-icon-color": "#000080",
  "--sidebar-icon-color": "#000000",

  // Input
  "--input-fill-color": "#C0C0C0",
  "--input-disabled-fill-color": "#C0C0C0",
  "--input-ink-color": "#000000",
  "--input-label-ink-color": "#000000",
  "--input-disabled-ink-color": "#808080",
  "--input-idle-line-color": "#808080",
  "--input-hover-line-color": "#000000",
  "--input-disabled-line-color": "#808080",
  "--input-outlined-idle-border-color": "#808080",
  "--input-outlined-hover-border-color": "#000000",
  "--input-outlined-disabled-border-color": "#C0C0C0",
  "--input-dropdown-icon-color": "#000000",

  // Status colors
  "--error-color": "#FF0000",
  "--warning-color": "#FF8000",
  "--success-color": "#008000",
  "--info-color": "#000080",

  // State
  "--state-icon-color": "#000080",
  "--state-active-color": "#000080",
  "--state-inactive-color": "#808080",

  // Data table
  "--data-table-border-width": "0",

  // Primary scale
  "--ha-color-primary-05": "#00003A",
  "--ha-color-primary-10": "#000050",
  "--ha-color-primary-20": "#000066",
  "--ha-color-primary-30": "#00007A",
  "--ha-color-primary-40": "#000080",
  "--ha-color-primary-50": "#0000AA",
  "--ha-color-primary-60": "#4040C0",
  "--ha-color-primary-70": "#6060D0",
  "--ha-color-primary-80": "#8080E0",
  "--ha-color-primary-90": "#C8C8D8",
  "--ha-color-primary-95": "#D8D8E0",

  // Neutral scale
  "--ha-color-neutral-05": "#000000",
  "--ha-color-neutral-10": "#2A2A2A",
  "--ha-color-neutral-20": "#404040",
  "--ha-color-neutral-30": "#606060",
  "--ha-color-neutral-40": "#707070",
  "--ha-color-neutral-50": "#808080",
  "--ha-color-neutral-60": "#909090",
  "--ha-color-neutral-70": "#A0A0A0",
  "--ha-color-neutral-80": "#B0B0B0",
  "--ha-color-neutral-90": "#C8C8C8",
  "--ha-color-neutral-95": "#D0D0D0",

  // Codemirror
  "--codemirror-keyword": "#000080",
  "--codemirror-operator": "#000000",
  "--codemirror-variable": "#008080",
  "--codemirror-variable-2": "#000080",
  "--codemirror-variable-3": "#808000",
  "--codemirror-builtin": "#800080",
  "--codemirror-atom": "#008080",
  "--codemirror-number": "#FF0000",
  "--codemirror-def": "#000080",
  "--codemirror-string": "#008000",
  "--codemirror-string-2": "#808000",
  "--codemirror-comment": "#808080",
  "--codemirror-tag": "#800000",
  "--codemirror-meta": "#000080",
  "--codemirror-attribute": "#FF0000",
  "--codemirror-property": "#000080",
  "--codemirror-qualifier": "#808000",
  "--codemirror-type": "#000080",
};

const RETRO_THEME_DARK = {
  // Sharp corners
  "--ha-border-radius-sm": "0",
  "--ha-border-radius-md": "0",
  "--ha-border-radius-lg": "0",
  "--ha-border-radius-xl": "0",
  "--ha-border-radius-2xl": "0",
  "--ha-border-radius-3xl": "0",
  "--ha-border-radius-4xl": "0",
  "--ha-border-radius-5xl": "0",
  "--ha-border-radius-6xl": "0",
  "--ha-border-radius-pill": "0",
  "--ha-border-radius-circle": "0",

  // Fonts
  "--ha-font-family-body":
    "Tahoma, 'MS Sans Serif', 'Microsoft Sans Serif', Arial, sans-serif",
  "--ha-font-family-heading":
    "Tahoma, 'MS Sans Serif', 'Microsoft Sans Serif', Arial, sans-serif",
  "--ha-font-family-code": "'Courier New', Courier, monospace",
  "--ha-font-family-longform":
    "Tahoma, 'MS Sans Serif', 'Microsoft Sans Serif', Arial, sans-serif",

  // No transparency
  "--ha-dialog-scrim-backdrop-filter": "none",

  // Disable animations
  "--ha-animation-duration-fast": "1ms",
  "--ha-animation-duration-normal": "1ms",
  "--ha-animation-duration-slow": "1ms",

  // Base colors
  "--primary-color": "#4040C0",
  "--dark-primary-color": "#000080",
  "--light-primary-color": "#6060D0",
  "--accent-color": "#4040C0",
  "--primary-text-color": "#C0C0C0",
  "--secondary-text-color": "#A0A0A0",
  "--text-primary-color": "#ffffff",
  "--text-light-primary-color": "#C0C0C0",
  "--disabled-text-color": "#606060",

  // Backgrounds
  "--primary-background-color": "#2A2A2A",
  "--lovelace-background": "#003030",
  "--secondary-background-color": "#2A2A2A",
  "--card-background-color": "#3A3A3A",
  "--clear-background-color": "#2A2A2A",

  // RGB values
  "--rgb-primary-color": "64, 64, 192",
  "--rgb-accent-color": "64, 64, 192",
  "--rgb-primary-text-color": "192, 192, 192",
  "--rgb-secondary-text-color": "160, 160, 160",
  "--rgb-text-primary-color": "255, 255, 255",
  "--rgb-card-background-color": "58, 58, 58",

  // UI chrome
  "--divider-color": "#606060",
  "--outline-color": "#606060",
  "--outline-hover-color": "#808080",
  "--shadow-color": "rgba(0, 0, 0, 0.7)",
  "--scrollbar-thumb-color": "#606060",
  "--disabled-color": "#606060",

  // Cards - retro bevel effect
  "--ha-card-border-width": "1px",
  "--ha-card-border-color": "#606060",
  "--ha-card-box-shadow": "1px 1px 0 #1A1A1A, -1px -1px 0 #5A5A5A",
  "--ha-card-border-radius": "0",

  // Dialogs
  "--ha-dialog-border-radius": "0",
  "--ha-dialog-surface-background": "#3A3A3A",
  "--dialog-box-shadow": "1px 1px 0 #1A1A1A, -1px -1px 0 #5A5A5A",

  // Box shadows - retro bevel
  "--ha-box-shadow-s": "1px 1px 0 #1A1A1A, -1px -1px 0 #5A5A5A",
  "--ha-box-shadow-m": "1px 1px 0 #1A1A1A, -1px -1px 0 #5A5A5A",
  "--ha-box-shadow-l": "1px 1px 0 #1A1A1A, -1px -1px 0 #5A5A5A",

  // Header
  "--app-header-background-color": "#000060",
  "--app-header-text-color": "#ffffff",
  "--app-header-border-bottom": "2px outset #3A3A3A",

  // Sidebar
  "--sidebar-background-color": "#2A2A2A",
  "--sidebar-text-color": "#C0C0C0",
  "--sidebar-selected-text-color": "#ffffff",
  "--sidebar-selected-icon-color": "#4040C0",
  "--sidebar-icon-color": "#A0A0A0",

  // Input
  "--input-fill-color": "#3A3A3A",
  "--input-disabled-fill-color": "#3A3A3A",
  "--input-ink-color": "#C0C0C0",
  "--input-label-ink-color": "#A0A0A0",
  "--input-disabled-ink-color": "#606060",
  "--input-idle-line-color": "#606060",
  "--input-hover-line-color": "#808080",
  "--input-disabled-line-color": "#404040",
  "--input-outlined-idle-border-color": "#606060",
  "--input-outlined-hover-border-color": "#808080",
  "--input-outlined-disabled-border-color": "#404040",
  "--input-dropdown-icon-color": "#A0A0A0",

  // Status colors
  "--error-color": "#FF4040",
  "--warning-color": "#FFA040",
  "--success-color": "#40C040",
  "--info-color": "#4040C0",

  // State
  "--state-icon-color": "#4040C0",
  "--state-active-color": "#4040C0",
  "--state-inactive-color": "#606060",

  // Data table
  "--data-table-border-width": "0",

  // Primary scale
  "--ha-color-primary-05": "#00002A",
  "--ha-color-primary-10": "#000040",
  "--ha-color-primary-20": "#000060",
  "--ha-color-primary-30": "#000080",
  "--ha-color-primary-40": "#4040C0",
  "--ha-color-primary-50": "#6060D0",
  "--ha-color-primary-60": "#8080E0",
  "--ha-color-primary-70": "#A0A0F0",
  "--ha-color-primary-80": "#C0C0FF",
  "--ha-color-primary-90": "#3A3A58",
  "--ha-color-primary-95": "#303048",

  // Neutral scale
  "--ha-color-neutral-05": "#1A1A1A",
  "--ha-color-neutral-10": "#2A2A2A",
  "--ha-color-neutral-20": "#3A3A3A",
  "--ha-color-neutral-30": "#4A4A4A",
  "--ha-color-neutral-40": "#606060",
  "--ha-color-neutral-50": "#707070",
  "--ha-color-neutral-60": "#808080",
  "--ha-color-neutral-70": "#909090",
  "--ha-color-neutral-80": "#A0A0A0",
  "--ha-color-neutral-90": "#C0C0C0",
  "--ha-color-neutral-95": "#D0D0D0",

  // Codemirror
  "--codemirror-keyword": "#8080E0",
  "--codemirror-operator": "#C0C0C0",
  "--codemirror-variable": "#40C0C0",
  "--codemirror-variable-2": "#8080E0",
  "--codemirror-variable-3": "#C0C040",
  "--codemirror-builtin": "#C040C0",
  "--codemirror-atom": "#40C0C0",
  "--codemirror-number": "#FF6060",
  "--codemirror-def": "#8080E0",
  "--codemirror-string": "#40C040",
  "--codemirror-string-2": "#C0C040",
  "--codemirror-comment": "#808080",
  "--codemirror-tag": "#C04040",
  "--codemirror-meta": "#8080E0",
  "--codemirror-attribute": "#FF6060",
  "--codemirror-property": "#8080E0",
  "--codemirror-qualifier": "#C0C040",
  "--codemirror-type": "#8080E0",
  "--map-filter":
    "invert(0.9) hue-rotate(170deg) brightness(1.5) contrast(1.2) saturate(0.3)",
};

// Tips displayed by the Casita assistant
const TIPS = [
  "Try turning your house off and on again.",
  "If your automation doesn't work, just add more YAML.",
  "Talk to your devices. They won't answer, but it helps.",
  "The best way to secure your smart home is to go back to candles.",
  "Rebooting fixes everything. Everything.",
  "Naming your vacuum 'DJ Roomba' increases cleaning efficiency by 200%.",
  "Your automations run better when you're not looking.",
  "Every time you restart Home Assistant, a smart bulb loses its pairing.",
  "The cloud is just someone else's Raspberry Pi.",
  "You can automate your coffee machine, but you still have to drink it yourself.",
  "You can save energy by not having a home.",
  "Psst... you can drag me anywhere you want!",
  "Did you know? I never sleep. Well, sometimes I do. Zzz...",
  "Zigbee, Z-Wave, Wi-Fi, Thread... so many protocols, so little time.",
  "The sun can trigger your automations. Nature is the best sensor.",
  "It looks like you're trying to automate your home! Would you like help?",
  "My previous job was a paperclip. I got promoted.",
  "I run entirely on YAML and good vibes.",
  "Somewhere, a smart plug is blinking and nobody knows why.",
  "Home Assistant runs on a Raspberry Pi. I run on hopes and dreams.",
  "Behind every great home, there's someone staring at logs at 2am.",
  "404: Motivation not found. Try again after coffee.",
  "There are two types of people: those who back up, and those who will.",
  "My favorite color is #008080. Don't ask me why.",
  "Automations are just spicy if-then statements.",
];

const BSOD = {
  title: "Home Assistant",
  error:
    "A fatal exception 0E has occurred at C0FF:EE15G00D in VXD L1GHT5(01) + 0FF. The current automation will be terminated.",
  line1: "Don't worry, nothing is actually broken.",
  line2: "Your automations are still running. Probably.",
  continue: "Press any key or click to continue",
};

const STORAGE_KEY = "retro-position";
const THEME_STORAGE_KEY = "ha95-theme";
const CASITA_STORAGE_KEY = "ha95-assistant";
const DRAG_THRESHOLD = 5;
const BUBBLE_TIMEOUT = 8000;
const SLEEP_TIMEOUT = 30000;
const BSOD_CLICK_COUNT = 5;
const BSOD_CLICK_TIMEOUT = 300;
const BSOD_DISMISS_DELAY = 500;

const DOMAIN = "ha95";

// ----- Cached state (for instant theme on refresh) -----

function getCached(key) {
  try {
    return localStorage.getItem(key) === "true";
  } catch {
    return false;
  }
}

function setCached(key, enabled) {
  try {
    localStorage.setItem(key, enabled ? "true" : "false");
  } catch {
    // Ignore storage errors
  }
}

// ----- HA Connection Helper -----

function getHass() {
  const main = document.querySelector("home-assistant");
  return main?.hass || null;
}

function findRetroEntities(hass) {
  const result = { theme: null, assistant: null };
  if (!hass?.entities) return result;
  for (const [entityId, entry] of Object.entries(hass.entities)) {
    if (entry.platform !== DOMAIN) continue;
    if (entry.translation_key === "theme") {
      result.theme = entityId;
    } else if (entry.translation_key === "assistant") {
      result.assistant = entityId;
    }
  }
  return result;
}

// ----- Theme application -----

const THEME_STYLE_ID = "ha95-theme-style";

function isDarkMode() {
  const hass = getHass();
  if (hass && hass.themes) {
    return hass.themes.darkMode;
  }
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

function applyRetroTheme() {
  const theme = isDarkMode() ? RETRO_THEME_DARK : RETRO_THEME_LIGHT;
  const css = Object.entries(theme)
    .map(([key, value]) => `  ${key}: ${value} !important;`)
    .join("\n");
  let styleEl = document.getElementById(THEME_STYLE_ID);
  if (!styleEl) {
    styleEl = document.createElement("style");
    styleEl.id = THEME_STYLE_ID;
    document.head.appendChild(styleEl);
  }
  styleEl.textContent = `:root {\n${css}\n}`;
}

function revertRetroTheme() {
  const styleEl = document.getElementById(THEME_STYLE_ID);
  if (styleEl) {
    styleEl.remove();
  }
}

// Apply immediately from cache so there's no flash on refresh
if (getCached(THEME_STORAGE_KEY)) {
  applyRetroTheme();
}

// ----- Casita Widget -----

const CASITA_STYLES = `
  :host {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    user-select: none;
    z-index: 9999;
  }

  .casita-container {
    position: fixed;
    pointer-events: auto;
    cursor: grab;
    user-select: none;
    touch-action: none;
    filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.3));
  }

  .casita-container.dragging {
    cursor: grabbing;
  }

  .casita-image {
    width: 100%;
    height: auto;
    animation: bob 3s ease-in-out infinite;
    pointer-events: none;
  }

  .dragging .casita-image {
    animation: none;
  }

  .speech-bubble {
    position: absolute;
    bottom: calc(100% + 8px);
    right: 0;
    background: #ffffe1;
    color: #000000;
    border-radius: 12px;
    border: 2px solid #000000;
    padding: 12px 28px 12px 12px;
    font-family: Tahoma, "MS Sans Serif", Arial, sans-serif;
    font-size: 14px;
    line-height: 1.4;
    width: 300px;
    box-sizing: border-box;
    word-wrap: break-word;
    overflow-wrap: break-word;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
    animation: bubble-in 200ms ease-out;
    pointer-events: auto;
  }

  .bubble-close {
    position: absolute;
    top: 4px;
    right: 4px;
    background: none;
    border: none;
    cursor: pointer;
    color: #000000;
    font-size: 14px;
    padding: 2px 6px;
    line-height: 1;
    border-radius: 50%;
  }

  .bubble-close:hover {
    background: #e0e0c0;
  }

  .bubble-dismiss {
    display: block;
    margin-top: 8px;
    background: none;
    border: none;
    cursor: pointer;
    color: #808080;
    font-family: Tahoma, "MS Sans Serif", Arial, sans-serif;
    font-size: 12px;
    padding: 0;
    text-decoration: underline;
  }

  .bubble-dismiss:hover {
    color: #000000;
  }

  .bubble-arrow {
    position: absolute;
    bottom: -8px;
    right: 32px;
    width: 0;
    height: 0;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-top: 8px solid #ffffe1;
  }

  @keyframes bob {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-4px); }
  }

  @keyframes bubble-in {
    from { opacity: 0; transform: translateY(4px); }
    to { opacity: 1; transform: translateY(0); }
  }

  .bsod {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #0000aa;
    color: #ffffff;
    font-family: "Lucida Console", "Courier New", monospace;
    font-size: 16px;
    line-height: 1.6;
    z-index: 10000;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    pointer-events: auto;
    animation: bsod-in 100ms ease-out;
  }

  .bsod-content {
    max-width: 700px;
    padding: 32px;
    text-align: left;
  }

  .bsod-title {
    display: inline-block;
    background: #aaaaaa;
    color: #0000aa;
    padding: 2px 12px;
    font-size: 18px;
    font-weight: normal;
    margin: 0 0 24px;
  }

  .bsod-content p {
    margin: 16px 0;
  }

  .bsod-prompt {
    margin-top: 32px;
  }

  .bsod-cursor {
    animation: blink 1s step-end infinite;
  }

  @keyframes bsod-in {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @keyframes blink {
    50% { opacity: 0; }
  }

  @media (prefers-reduced-motion: reduce) {
    .casita-image { animation: none; }
    .speech-bubble { animation: none; }
    .bsod { animation: none; }
    .bsod-cursor { animation: none; }
  }
`;

class HA95Assistant extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    this._themeEnabled = false;
    this._casitaEnabled = false;
    this._themeEntityId = null;
    this._assistantEntityId = null;
    this._casitaVisible = true;
    this._showBubble = false;
    this._bubbleText = "";
    this._expression = "hi";
    this._position = null;
    this._showBsod = false;
    this._clickCount = 0;
    this._clickTimer = null;
    this._dragging = false;
    this._dragStartX = 0;
    this._dragStartY = 0;
    this._dragOffsetX = 0;
    this._dragOffsetY = 0;
    this._dragMoved = false;
    this._bubbleTimer = null;
    this._sleepTimer = null;
    this._bsodReadyToDismiss = false;
    this._stateSubscription = null;
    this._themeObserver = null;

    this._boundPointerMove = this._onPointerMove.bind(this);
    this._boundPointerUp = this._onPointerUp.bind(this);
    this._boundDismissBsodOnKey = this._dismissBsod.bind(this);
  }

  connectedCallback() {
    this._loadPosition();
    this._subscribeToState();
  }

  disconnectedCallback() {
    // Clean up without touching the cache — disconnect is not a state change
    this._stopThemeObserver();
    revertRetroTheme();
    this._themeEnabled = false;
    this._casitaEnabled = false;
    this._clearTimers();
    this.shadowRoot.innerHTML = "";
    if (this._stateSubscription) {
      this._stateSubscription();
      this._stateSubscription = null;
    }
    document.removeEventListener("pointermove", this._boundPointerMove);
    document.removeEventListener("pointerup", this._boundPointerUp);
    document.removeEventListener("keydown", this._boundDismissBsodOnKey);
  }

  // --- State subscription ---

  _subscribeToState() {
    const trySubscribe = async () => {
      const hass = getHass();
      if (!hass?.entities || !hass.connection) {
        setTimeout(trySubscribe, 1000);
        return;
      }

      // Find entity IDs from hass.entities (already loaded, no WS call)
      const entities = findRetroEntities(hass);
      this._themeEntityId = entities.theme;
      this._assistantEntityId = entities.assistant;

      if (!this._themeEntityId && !this._assistantEntityId) {
        // Integration not found — stay dormant
        return;
      }

      // Subscribe to state changes — await to avoid race condition
      this._stateSubscription = await hass.connection.subscribeEvents(
        (event) => {
          const entityId = event.data?.entity_id;
          if (!entityId) return;

          const newState = event.data.new_state;

          if (entityId === this._themeEntityId) {
            this._setThemeEnabled(newState ? newState.state === "on" : false);
          }

          if (entityId === this._assistantEntityId) {
            this._setCasitaEnabled(
              newState ? newState.state === "on" : false
            );
          }
        },
        "state_changed"
      );

      // Read initial state now that subscription is active (no gap)
      this._setThemeEnabled(
        this._themeEntityId
          ? hass.states[this._themeEntityId]?.state === "on"
          : false
      );
      this._setCasitaEnabled(
        this._assistantEntityId
          ? hass.states[this._assistantEntityId]?.state === "on"
          : false
      );
    };

    trySubscribe();
  }

  // --- Theme activation / deactivation ---

  _setThemeEnabled(enabled) {
    if (this._themeEnabled === enabled) return;
    this._themeEnabled = enabled;
    setCached(THEME_STORAGE_KEY, enabled);

    if (enabled) {
      if (!_themeApplied) {
        applyRetroTheme();
      }
      this._startThemeObserver();
    } else {
      this._stopThemeObserver();
      revertRetroTheme();
    }
  }

  // --- Casita activation / deactivation ---

  _setCasitaEnabled(enabled) {
    if (this._casitaEnabled === enabled) return;
    this._casitaEnabled = enabled;
    setCached(CASITA_STORAGE_KEY, enabled);

    if (enabled) {
      this._casitaVisible = true;
      this._resetSleepTimer();
      this._render();
    } else {
      this._clearTimers();
      document.removeEventListener("keydown", this._boundDismissBsodOnKey);
      this._showBsod = false;
      this._bsodReadyToDismiss = false;
      this.shadowRoot.innerHTML = "";
    }
  }

  // --- Theme observer (only active when enabled) ---

  _startThemeObserver() {
    if (this._themeObserver) return;
    this._themeObserver = new MutationObserver(() => {
      if (_isApplyingTheme || !this._themeEnabled) return;
      applyRetroTheme();
    });
    this._themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["style"],
    });
  }

  _stopThemeObserver() {
    if (this._themeObserver) {
      this._themeObserver.disconnect();
      this._themeObserver = null;
    }
  }

  // --- Position persistence ---

  _loadPosition() {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const pos = JSON.parse(stored);
        if (typeof pos.x === "number" && typeof pos.y === "number") {
          this._position = this._clampPosition(pos.x, pos.y);
        }
      }
    } catch {
      // Ignore invalid stored position
    }
  }

  _savePosition() {
    if (this._position) {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(this._position));
      } catch {
        // Ignore storage errors
      }
    }
  }

  _clampPosition(x, y) {
    const size = 80;
    return {
      x: Math.max(0, Math.min(window.innerWidth - size, x)),
      y: Math.max(0, Math.min(window.innerHeight - size, y)),
    };
  }

  // --- Drag handling ---

  _onPointerDown(ev) {
    if (ev.button !== 0 || this._showBsod) return;

    this._dragging = true;
    this._dragMoved = false;
    this._dragStartX = ev.clientX;
    this._dragStartY = ev.clientY;

    const rect = ev.currentTarget.getBoundingClientRect();
    this._dragOffsetX = ev.clientX - rect.left;
    this._dragOffsetY = ev.clientY - rect.top;

    ev.currentTarget.setPointerCapture(ev.pointerId);
    document.addEventListener("pointermove", this._boundPointerMove);
    document.addEventListener("pointerup", this._boundPointerUp);

    ev.preventDefault();
  }

  _onPointerMove(ev) {
    if (!this._dragging) return;

    const dx = ev.clientX - this._dragStartX;
    const dy = ev.clientY - this._dragStartY;

    if (!this._dragMoved && Math.hypot(dx, dy) < DRAG_THRESHOLD) {
      return;
    }

    this._dragMoved = true;

    const x = ev.clientX - this._dragOffsetX;
    const y = ev.clientY - this._dragOffsetY;
    this._position = this._clampPosition(x, y);

    const container = this.shadowRoot.querySelector(".casita-container");
    if (container) {
      container.style.left = `${this._position.x}px`;
      container.style.top = `${this._position.y}px`;
      container.style.right = "auto";
      container.style.bottom = "auto";
      if (!container.classList.contains("dragging")) {
        container.classList.add("dragging");
      }
    }
  }

  _onPointerUp(ev) {
    document.removeEventListener("pointermove", this._boundPointerMove);
    document.removeEventListener("pointerup", this._boundPointerUp);

    const container = this.shadowRoot.querySelector(".casita-container");
    if (container) {
      container.classList.remove("dragging");
    }

    this._dragging = false;

    if (this._dragMoved) {
      this._savePosition();
    } else {
      this._toggleBubble();
    }

    ev.preventDefault();
  }

  // --- Bubble / tips ---

  _toggleBubble() {
    this._clickCount++;
    if (this._clickTimer) {
      clearTimeout(this._clickTimer);
    }
    this._clickTimer = setTimeout(() => {
      this._clickCount = 0;
    }, BSOD_CLICK_TIMEOUT);

    if (this._clickCount >= BSOD_CLICK_COUNT) {
      this._clickCount = 0;
      this._triggerBsod();
      return;
    }

    if (this._showBubble) {
      this._hideBubble();
    } else {
      this._showTip();
    }
  }

  _triggerBsod() {
    this._hideBubble();
    this._showBsod = true;
    this._bsodReadyToDismiss = false;
    this._expression = "error";
    this._render();

    setTimeout(() => {
      this._bsodReadyToDismiss = true;
      document.addEventListener("keydown", this._boundDismissBsodOnKey);
    }, BSOD_DISMISS_DELAY);
  }

  _dismissBsod() {
    if (!this._bsodReadyToDismiss) return;
    this._showBsod = false;
    this._expression = "hi";
    this._resetSleepTimer();
    document.removeEventListener("keydown", this._boundDismissBsodOnKey);
    this._render();
  }

  _showTip() {
    const tipIndex = Math.floor(Math.random() * TIPS.length);
    this._bubbleText = TIPS[tipIndex];
    this._showBubble = true;
    this._expression = "ok-nabu";
    this._resetSleepTimer();
    this._render();

    if (this._bubbleTimer) {
      clearTimeout(this._bubbleTimer);
    }
    this._bubbleTimer = setTimeout(() => {
      this._hideBubble();
    }, BUBBLE_TIMEOUT);
  }

  _hideBubble() {
    this._showBubble = false;
    this._expression = "hi";
    this._resetSleepTimer();

    if (this._bubbleTimer) {
      clearTimeout(this._bubbleTimer);
      this._bubbleTimer = null;
    }
    this._render();
  }

  _resetSleepTimer() {
    if (this._sleepTimer) {
      clearTimeout(this._sleepTimer);
    }
    this._sleepTimer = setTimeout(() => {
      if (!this._showBubble) {
        this._expression = "sleep";
        this._updateCasitaImage();
      }
    }, SLEEP_TIMEOUT);
  }

  _clearTimers() {
    if (this._bubbleTimer) {
      clearTimeout(this._bubbleTimer);
      this._bubbleTimer = null;
    }
    if (this._sleepTimer) {
      clearTimeout(this._sleepTimer);
      this._sleepTimer = null;
    }
    if (this._clickTimer) {
      clearTimeout(this._clickTimer);
      this._clickTimer = null;
    }
  }

  _updateCasitaImage() {
    const img = this.shadowRoot.querySelector(".casita-image");
    if (img) {
      img.src = `/static/images/voice-assistant/${this._expression}.png`;
    }
  }

  // --- Rendering ---

  _render() {
    if (!this._casitaEnabled || !this._casitaVisible) {
      this.shadowRoot.innerHTML = "";
      return;
    }

    const size = 80;
    const posStyle = this._position
      ? `left: ${this._position.x}px; top: ${this._position.y}px;`
      : "right: 16px; bottom: 16px;";

    const bsodHtml = this._showBsod
      ? `
      <div class="bsod">
        <div class="bsod-content">
          <h1 class="bsod-title">${BSOD.title}</h1>
          <p>${BSOD.error}</p>
          <p>
            * ${BSOD.line1}<br>
            * ${BSOD.line2}
          </p>
          <p class="bsod-prompt">
            ${BSOD.continue}
            <span class="bsod-cursor">_</span>
          </p>
        </div>
      </div>`
      : "";

    const bubbleHtml = this._showBubble
      ? `
      <div class="speech-bubble">
        <span class="bubble-text">${this._bubbleText}</span>
        <button class="bubble-close">&#x2715;</button>
        <button class="bubble-dismiss">Dismiss me</button>
        <div class="bubble-arrow"></div>
      </div>`
      : "";

    this.shadowRoot.innerHTML = `
      <style>${CASITA_STYLES}</style>
      ${bsodHtml}
      <div class="casita-container" style="width: ${size}px; ${posStyle}" aria-hidden="true">
        ${bubbleHtml}
        <img
          class="casita-image"
          src="/static/images/voice-assistant/${this._expression}.png"
          alt="Casita"
          draggable="false"
        />
      </div>
    `;

    // Attach event listeners
    const container = this.shadowRoot.querySelector(".casita-container");
    if (container) {
      container.addEventListener("pointerdown", (ev) =>
        this._onPointerDown(ev)
      );
    }

    const bsodEl = this.shadowRoot.querySelector(".bsod");
    if (bsodEl) {
      bsodEl.addEventListener("click", () => this._dismissBsod());
    }

    const closeBtn = this.shadowRoot.querySelector(".bubble-close");
    if (closeBtn) {
      closeBtn.addEventListener("pointerdown", (ev) => ev.stopPropagation());
      closeBtn.addEventListener("click", (ev) => {
        ev.stopPropagation();
        this._hideBubble();
      });
    }

    const dismissBtn = this.shadowRoot.querySelector(".bubble-dismiss");
    if (dismissBtn) {
      dismissBtn.addEventListener("pointerdown", (ev) => ev.stopPropagation());
      dismissBtn.addEventListener("click", (ev) => {
        ev.stopPropagation();
        this._casitaVisible = false;
        this._clearTimers();
        this._render();
      });
    }
  }
}

customElements.define("ha95-assistant", HA95Assistant);

// ----- Initialization -----

function injectCasita() {
  if (document.querySelector("ha95-assistant")) return;
  const casita = document.createElement("ha95-assistant");
  document.body.appendChild(casita);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", injectCasita);
} else {
  injectCasita();
}

console.info(
  "%c Home Assistant 95 %c Loaded ",
  "color: #fff; background: #000080; font-weight: bold; padding: 2px 6px;",
  "color: #000; background: #C0C0C0; font-weight: bold; padding: 2px 6px;"
);
