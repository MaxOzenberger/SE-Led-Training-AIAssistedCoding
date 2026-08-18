# Exercise 1 — Python Notebook: Feature Storage Alert Email

> 💡 **Tip:** Press `Ctrl+Shift+V` to view this file as a formatted preview (or `Cmd+Shift+V` on Mac).

**What you'll build:** an ArcGIS Notebook that an administrator can run to check the org's feature storage, then email the admin when any owner's total storage — or any new item's storage — crosses a threshold.

We'll design it first using `/grill-with-docs`, then build it.

---

## Step 1 — Open Visual Studio Code

1. In VS Code: **File → Open Folder** and open the folder location of your cloned respository from the pre-work.
2. Open a terminal inside VS Code: **Terminal → New Terminal** (or `` Ctrl+` ``).

---

## Step 2 — Install the skills into this folder

Run these two commands, one at a time, in the terminal:

```
npx skills@latest add mattpocock/skills
```

1. Your keyboard strokes will be to paste the above then hit enter to run
   When the skills load, `space` to select all skills to install > `Enter`

2. No need to install additional agents, so select `Enter` again

3. The setup defaults to project - which installs in the current directory, `Enter` to confirm

4. `Enter` to proceed with installation

```
npx skills@latest add valdesrosier/arcgis-skills
```

1. Choose all ArcGIS Skills by hitting `Space` + `arrow down` 6 times
2. `Enter` 4x to install

> You only install and set up the skills once per project.

---

## Step 3 — Setup your skills and start the design interview

1. Open **Copilot Chat** using the chat box to the right of the search bar at the top of the Visual Studio window.

2. Ensure you are on "Agent" mode and your chosen model.

3. When it's ready, paste the prompt below and follow the setup process. Connect your forked repository if pro

```
/setup-matt-pocock-skills
```

> **What `/setup-matt-pocock-skills` does:** This is a one-time setup command for Matt's skills. It wires them into your project's workflow — it asks which **issue tracker** you use (GitHub, Linear, or local files), what **labels** you apply when triaging tickets, and where to **save the docs** the skills create (like `CONTEXT.md` and ADRs). It's what lets later skills publish tickets and save their paper trail in a consistent place. You run it once per project — we're running it here in the cloned repo, and exercises 2 and 3 reuse it.

---

## Step 4 — The prompt

> **About:** `/grill-with-docs` interviews you and writes down the design (it does **not** write the code yet). Answer its questions, ask follow up and clarifyication questions as needed. Once the design is settled, you'll tell it to build.

Paste this to start the grilling session:

```
/grill-with-docs I want to build an ArcGIS Notebook for an org administrator that monitors feature storage.

It should do two things in one run:
1. Build a table of all the content in our ArcGIS organization.
2. Send ONE email to the admin that flags two problems:
   - every owner whose combined feature storage goes over a threshold, and
   - every newly created item whose own feature storage goes over a (separate) threshold.

Only hosted feature services should count toward storage — other item
types like files, tiles, and imagery should be left out.

The notebook runs inside ArcGIS Online, so it can't send normal email.
Use Group.notify() to email named users in the org instead.

Both thresholds should be easy to change at the top of the notebook.
Ask me about anything that's ambiguous before we settle the design.

Write all code and files for this project only inside the `exercise-01-python/` folder in this repo. Create it if it doesn't exist. Don't add or modify files anywhere else in the repo.
```

---

## Step 5 — What happens next

- Answer the interview questions (reply by number where it helps).
- When the design is settled, tell the assistant to `/implement`
- Build it in VS Code, then upload the `.ipynb` to ArcGIS Online and schedule it on the notebook's **Tasks** tab.
- Work through any iterations / changes with the assistant.
