# Exercise 2 — ArcGIS Hub: Glass Cards (HTML / CSS)

> 💡 **Tip:** Press `Ctrl+Shift+V` to view this file as a formatted preview (or `Cmd+Shift+V` on Mac).

**What you'll build:** a set of modern "glassmorphism" cards in HTML and CSS that you can drop into an ArcGIS Hub site — frosted, semi-transparent panels that sit over a background image or map.

We'll design it first using `/grill-with-docs`, then build it.

---

## Step 1 — The prompt

Open a new chat in the GitHub Copilot panel by selecting the `+` button at the top of the window. Paste the following prompt:

```
/grill-with-docs I want to build a set of "glass" cards in plain HTML and CSS that I can
add to an ArcGIS Hub site. The look I'm going for is glassmorphism:
frosted, semi-transparent panels with a soft blur, a thin light border,
and a gentle shadow, sitting on top of a background image.

Each card should have:
- a title
- a short description
- an icon or small image
- a button or link

I'd like a few cards laid out in a responsive row that stacks on
smaller screens. Keep the code simple and self-contained so I can paste
it into a Hub embed, and make it easy to swap the colors, text, and
background later.

Ask me about anything ambiguous — like how many cards, the color theme,
and whether the cards should link out or open something — before we
settle the design.

Write all code and files for this project only inside the `exercise-02-htmlcss/` folder in this repo. Create it if it doesn't exist. Don't add or modify files anywhere else in the repo.
```

---

## Step 5 — What happens next

- Answer the questions (by number where it helps).
- When the design is settled, tell the assistant to `/implement`
- Preview it with **Live Preview** (steps below). Optional: paste it into an ArcGIS Hub site Text HTML/CSS.
- Work through any iterations / changes with the assistant.

### Previewing your cards in VS Code

Use the **Live Preview** extension — it shows your page in a pane inside VS Code and refreshes as the file changes.

1. If you don't have it yet: open Extensions (`Ctrl+Shift+X`), search **Live Preview** (by Microsoft), and install it.
2. Open your HTML file (e.g. `index.html`).
3. Click the **preview icon** in the top-right of the editor, or press `Ctrl+Shift+P` and run **Live Preview: Show Preview**.
4. A browser pane opens inside VS Code at a `localhost` address and updates every time you save.
   > Other preview option: you can also double-click the HTML file in File Explorer to open it in your browser. That's fine for static cards, but Live Preview is the smoother option and avoids browser security blocks if your cards ever pull live data.

### Want to go further?

If you finish early, ask the agent about cooler additions, for example:

- cards that **flip or expand** on hover to reveal more,
- a **live stat** on each card pulled from a feature layer,
- or matching the card colors to your Hub site's theme automatically.
