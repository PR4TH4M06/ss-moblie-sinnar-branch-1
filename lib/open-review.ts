/** Copy review in the same tap, then let a real <a> open Google. */

export function isAppleMobile(): boolean {
  if (typeof navigator === "undefined") return false;
  return (
    /iPad|iPhone|iPod/i.test(navigator.userAgent) ||
    (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1)
  );
}

export function isMobileBrowser(): boolean {
  if (typeof navigator === "undefined") return false;
  return isAppleMobile() || /Android|Mobile/i.test(navigator.userAgent);
}

export function copyTextReliable(text: string): boolean {
  if (!text) return false;

  try {
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.setAttribute("readonly", "true");
    ta.setAttribute("aria-hidden", "true");
    ta.style.cssText =
      "position:fixed;top:0;left:0;z-index:-1;width:2em;height:2em;padding:0;border:0;outline:none;box-shadow:none;background:transparent;opacity:0.01;";
    document.body.appendChild(ta);
    ta.focus();
    ta.select();
    ta.setSelectionRange(0, text.length);
    const ok = document.execCommand("copy");
    document.body.removeChild(ta);
    if (ok) return true;
  } catch {
    /* fall through to Clipboard API */
  }

  try {
    if (navigator.clipboard?.writeText) {
      void navigator.clipboard.writeText(text);
      return true;
    }
  } catch {
    /* ignore */
  }

  return false;
}
