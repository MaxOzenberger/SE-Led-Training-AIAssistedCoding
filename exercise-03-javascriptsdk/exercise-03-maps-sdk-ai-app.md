# Exercise 4 — Maps SDK for JavaScript + AI Components App

> 💡 **Tip:** Press `Ctrl+Shift+V` to view this file as a formatted preview (or `Cmd+Shift+V` on Mac).

**What you'll build:** a web app using the ArcGIS Maps SDK for JavaScript and its AI Components — users sign in, load and switch between web maps, and chat with a set of agents (the built-in ones plus two custom agents you define).

We'll design it first using `/grill-with-docs`, then build it.

---

## Step 1 — The prompt

Open a new chat in the GitHub Copilot panel by selecting the `+` button at the top of the window. Paste the following prompt:

```
/grill-with-docs I want to build a web app using the ArcGIS Maps SDK for JavaScript and
its AI Components. It should have:

1. Sign-in to ArcGIS (named ArcGIS Online account).

2. The ability to switch between web maps - but when the app first
   loads, start by prompting me to choose which map to load.

3. An AI assistant with several agents:
   - the out-of-the-box agents that come with the AI Components,
   - a custom agent that lets me add any layer from my ArcGIS
     organization to the map,
   - and another custom agent that lets me add any layer from the
     ArcGIS Living Atlas to the map.

Ask me about anything ambiguous before we settle the design.

Write all code and files for this project only inside the `exercise-03-javascriptsdk/` folder in this repo. Create it if it doesn't exist. Don't add or modify files anywhere else in the repo.
```

---

## Step 5 — What happens next

- Answer the interview questions (by number where it helps).
  > **Note — scaling up to bigger builds:** For a small app like this, going straight from grilling to building is fine. For a bigger, multi-part app, this is where you'd add two steps first:
  >
  > - **`/to-spec`** — turns the design you just settled into a written spec you can review.
  > - **`/to-tickets`** — breaks that spec into small, ordered tickets, each one a buildable chunk.
  >
  > **Why bother?** It keeps the AI working on one clearly-defined piece at a time instead of juggling the whole app at once. That's where large AI builds usually drift — losing track of earlier decisions as the work grows. The spec and tickets are the paper trail that keeps it on course.
- When the design is settled, tell the assistant to `/implement`

### Building and running your app

Because the agent designs the app during the interview, the exact run command depends on what it built (a plain HTML page, a Vite app, and so on). These steps work for any of them:

1. **Register an OAuth app in ArcGIS Online.** The sign-in needs a client ID. In ArcGIS Online: **Content → New item → Developer credentials** (OAuth 2.0), then add your local address (e.g. `https://localhost:5173`) as a **Redirect URI**. Copy the generated **Client ID**.
2. **Give the app the client ID.** Ask the agent where to put it — usually an `.env.local` file or a config value. It will tell you the exact variable name for the app it built.
3. **Ask the agent how to run it.** Something like: _"How do I install dependencies and run this app locally?"_ For a Vite app that's usually `npm install` then `npm run dev`; for a plain HTML page it may just be the Live Preview extension.
4. **Open the local address** the run command prints (often `https://localhost:5173`) in your browser.
5. **Sign in** with your ArcGIS Online named account when the app prompts you.
6. **Try each agent** in the assistant chat:
   - ask a built-in agent to navigate or explore the map (e.g. _"zoom to the largest features"_),
   - ask your **org-layer agent** to add a layer from your organization,
   - ask your **Living Atlas agent** to add a Living Atlas layer.

Test and iterate with the agent as needed.

## When something breaks, or you want to add more

You've built the core. Here's how to keep going once the workshop's over.

**When something breaks.** Instead of just telling the agent "it's not working," ask it to use **`/diagnosing-bugs`**. It runs a disciplined loop — reproduce the bug → shrink it down to the smallest failing case → form a hypothesis → instrument and test → fix → add a check so it can't come back. That structure is what makes it reliable on the hard bugs, where a plain "fix this" tends to send the AI in circles. For a quick typo it's overkill; for a "why is this behaving strangely" moment, reach for it.

**When you want to add a feature.** Resist the urge to bolt it on mid-conversation. Start a **new `/grill-with-docs` session** scoped to just the new piece — the same design-first flow you used the first time. Two reasons: the design of the addition gets the same careful interview the original did, and you start from a clean slate instead of a long, cluttered chat where the agent has half-forgotten earlier decisions. Design the addition, then build it, just like before.

## When to start a fresh chat (and how to carry your work over)

**When to start a new context window.** A chat has a limited working space, and a long one fills up — early instructions get buried, and answers start to wander or repeat. The signs: the agent forgets a decision you made earlier, its replies get vaguer, or it starts going in circles. We want to start a **new chat** before we get context degradation, rather than push a tired one further.

**How to not lose everything.** Before you switch, ask the agent to use **`/handoff`**. It compacts the current conversation into a short handoff document — the kind of thing you'd want a new teammate to read before picking up your work. A good handoff captures:

- **What you're building** — the goal, in a sentence or two.
- **Decisions already made** — the design choices you settled, so they don't get re-litigated.
- **Where you left off** — what's built and working so far.
- **What's next** — the immediate next step.

Open a fresh chat, tell your assistant to reference the new handoff document and the project, and the new session starts with a clean working space _and_ full context. If you also ran `/grill-with-docs`, a lot of this already lives in your `CONTEXT.md` and ADRs — the handoff doc is the lighter companion to those.
