class WorktualWidget extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div style="font-family: Arial, sans-serif; padding: 24px; text-align: center; background: #ffffff; border: 1px solid #e5e7eb; border-radius: 8px;">
        <h2 style="margin: 0 0 8px; color: #111827;">Worktual</h2>
        <p style="margin: 0 0 16px; color: #374151;">Practical MCP and TPI solutions for businesses.</p>
        <a href="https://worktual.in/" target="_blank" rel="noopener"
           style="display: inline-block; padding: 10px 18px; background: #111827; color: #ffffff; text-decoration: none; border-radius: 6px;">
          Visit Worktual
        </a>
      </div>`;
  }
}

if (!customElements.get('widget')) {
  customElements.define('widget', WorktualWidget);
}
