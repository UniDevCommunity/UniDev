import type { KeyboardEvent } from "react";

// Horizontal tab lists follow the reading direction of the Persian interface.
export function navigateTabs(event: KeyboardEvent<HTMLDivElement>) {
  if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
  const buttons = Array.from(event.currentTarget.querySelectorAll<HTMLButtonElement>('[role="tab"]'));
  const index = buttons.findIndex(button => button === document.activeElement);
  if (index < 0) return;
  event.preventDefault();
  const next = event.key === "Home" ? 0 : event.key === "End" ? buttons.length - 1 : (index + (event.key === "ArrowLeft" ? 1 : -1) + buttons.length) % buttons.length;
  buttons[next].focus();
  buttons[next].click();
}
