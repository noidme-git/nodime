"use client";

import { useSyncExternalStore } from "react";

const STORAGE_KEY = "noidme_cookie_consent";

type ConsentChoice = "accepted" | "rejected";

type CookieConsentProps = {
  message: string;
  rejectLabel: string;
  acceptLabel: string;
  ariaLabel: string;
};

const subscribe = (onStoreChange: () => void) => {
  window.addEventListener("storage", onStoreChange);
  window.addEventListener("noidme-consent-change", onStoreChange);
  return () => {
    window.removeEventListener("storage", onStoreChange);
    window.removeEventListener("noidme-consent-change", onStoreChange);
  };
};

const getSnapshot = () => window.localStorage.getItem(STORAGE_KEY);
const getServerSnapshot = () => null;

export function CookieConsent({ message, rejectLabel, acceptLabel, ariaLabel }: CookieConsentProps) {
  const savedChoice = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const visible = savedChoice !== "accepted" && savedChoice !== "rejected";

  const setChoice = (choice: ConsentChoice) => {
    window.localStorage.setItem(STORAGE_KEY, choice);
    window.dispatchEvent(new Event("noidme-consent-change"));
  };

  if (!visible) {
    return null;
  }

  return (
    <aside className="cookie-banner" role="dialog" aria-live="polite" aria-label={ariaLabel}>
      <p>{message}</p>
      <div className="cookie-actions">
        <button type="button" className="btn btn-ghost" onClick={() => setChoice("rejected")}>
          {rejectLabel}
        </button>
        <button type="button" className="btn btn-primary" onClick={() => setChoice("accepted")}>
          {acceptLabel}
        </button>
      </div>
    </aside>
  );
}
