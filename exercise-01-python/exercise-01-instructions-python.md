# Exercise 1 — Python Notebook: Feature Storage Alert Email

> 💡 **Tip:** Press `Ctrl+Shift+V` to view this file as a formatted preview (or `Cmd+Shift+V` on Mac).

**What you'll build:** an ArcGIS Notebook that an administrator can run to check the org's feature storage, then email the admin when any owner's total storage — or any new item's storage — crosses a threshold.

We'll design it first using `/grill-with-docs`, then build it.

> [!IMPORTANT]
> After copilot has finished responding, you can review what files were created, deleted, or changed by expanding the **Files changed** section in the chat. You can also click on any file to see a diff of what was added or removed. If you don't like the changes, you can click **Undo** to undo them. If you are fine with the changes, you can click the blue **Keep** button.

![Command approval from copilot](../docs/assets/copilot-edits-keep-undo-buttons.jpg)

---

## Step 1 — Open Visual Studio Code

1. In VS Code: **File → Open Folder** and open the folder location of your cloned respository from the pre-work.

2. Open a terminal inside VS Code: **Terminal → New Terminal** (or `` Ctrl+` ``).

3. Ensure you are in the root of the cloned repo in the terminal. You should see a prompt like this:

   Windows:

   ```
   PS C:\dev\SE-Led-Training-AIAssistedCoding>
   ```

   Mac:

   ```
   $ ~/dev/SE-Led-Training-AIAssistedCoding
   ```

   If you don't see that, use the `cd` command to navigate to the root of the cloned repo.

   Windows:

   ```
   cd C:\dev\SE-Led-Training-AIAssistedCoding
   ```

   Mac:

   ```
   cd ~/dev/SE-Led-Training-AIAssistedCoding
   ```

---

## Step 2 — Install the skills into this project

Run these two commands, one at a time, in the terminal:

### Command 1

```
npx skills@latest add mattpocock/skills
```

1. Your keyboard strokes will be to paste the above then hit enter to run.

2. If prompted with `Ok to proceed? (y)`, type `y` and hit `Enter`.

3. When the skills load, press the spacebar on your keyboard to select all skills. All the empty dots in the terminal will turn green indicating they have been selected. Press `Enter` to continue.

4. No need to install additional agents, so press `Enter` again.

5. The setup defaults to `Project` - which installs in the current directory, press `Enter` to confirm.

6. Press `Enter` to proceed with installation.

7. If successful, you should see a message like this:

   `Done! Review skills before use; they run with full agent permissions.`

### Command 2

```
npx skills@latest add valdesrosier/arcgis-skills
```

1. As with `Command 1`, press the spacebar on your keyboard to select all ArcGIS Skills. All the empty dots in the terminal will turn green indicating they have been selected. Press `Enter` to continue.

2. No need to install additional agents, so press `Enter` again.

3. As before, the setup defaults to `Project` - which installs in the current directory, press `Enter` to confirm.

4. Press `Enter` to proceed with installation.

5. If successful, you should see a message like this:

   `Done! Review skills before use; they run with full agent permissions.`

> [!NOTE]
> You only install and set up the skills once per project.

---

## Step 3 — Setup your skills and start the design interview

1. Open **Copilot Chat** using the chat box to the right of the search bar at the top of the Visual Studio window.

2. Ensure you are on "Agent" mode and select "Auto" for the model.

3. When it's ready, start by typing a forward slash (`/`) to see the list of available skills. Select `/setup-matt-pocock-skills` from the list by arrowing up or down to highlight it and then press tab. You'll notice that the slash and text turns into a blue pill shape. This is normal for invoking a skill. You are able to type more context after the pill shape, but for now just hit `Enter` to run the skill.
   - You may be prompted at various times during the skill to allow access to your local files or to run `git` commands. Click **Allow** when prompted.

   > [!NOTE]
   > **What `/setup-matt-pocock-skills` does:** This is a one-time setup command for Matt's skills. It wires them into your project's workflow — it asks which **issue tracker** you use (GitHub, Linear, or local files), what **labels** you apply when triaging tickets, and where to **save the docs** the skills create (like `CONTEXT.md` and ADRs). It's what lets later skills publish tickets and save their paper trail in a consistent place. You run it once per project — we're running it here in the cloned repo, and exercises 2 and 3 reuse it.

4. During the setup skill, if asked on the following (you can reply in the chat with natural language):
   - **Issue tracker:** choose GitHub
   - **Labels:** choose to keep the defaults
   - **Domain Docs :** choose to create AGENTS.md

   - When done, you should see something similar to this in the chat panel:
     ![Setup Matt Pocock Skills Done](../docs/assets/mp-setup-skills-done.jpg)

---

## Step 4 — The prompt

> **About:** `/grill-with-docs` interviews you and writes down the design (it does **not** write the code yet). Answer its questions, ask follow up and clarifyication questions as needed. Once the design is settled, you'll tell it to build.

1. Start by typing a forward slash (`/`) to see the list of available skills. Select `/grill-with-docs` from the list by arrowing up or down to highlight it and then press tab, but do not press enter yet.

2. Paste the prompt below after the pill shape.

```
I want to build an ArcGIS Notebook for an organization administrator that monitors newly created hosted feature services.

It should do two things in one run:

1. Search our ArcGIS organization and build a table showing the **10 most recently created hosted feature services**. Include useful information such as the title, owner, creation date, sharing level, and number of views.

2. Stub out code that will send **ONE email** to the admin if any of those items are publicly shared.

   * The email should identify the items and their owners.
   * **IMPORTANT:** Put this email code in its own notebook cell and comment it out so I can review it before implementing it.

Only hosted feature services should be included. Files, tiles, imagery, and other item types should be excluded.

Use ArcGIS search and its server-side sorting capabilities rather than retrieving every item in the organization and sorting them locally.

The notebook runs inside ArcGIS Online, so it can't send normal email. Use `Group.notify()` to email named users in the organization instead.

Keep the implementation straightforward.

Ask me about anything that's ambiguous before we settle the design.

Write all code and files for this project only inside the `exercise-01-python/` folder in this repo. Create it if it doesn't exist. Don't add or modify files anywhere else in the repo.
```

3. Press `Enter` to run the skill.

## Step 5 — What happens next

1. Answer each question in the chat. You can answer however you like, as long it's clear to the model which question you are answering. You can also ask follow up questions to clarify anything you don't understand. The skill will write down the design as you go.
   - Example: "q1: agreed, q2: explain in less technical terms, q3-6: agreed, q7: yes but add ..."

   > [!NOTE]
   > Copilot may ask your approval to run commands during the course of a response. Be sure to review the **command summary** beneath the code preview to see what commands it wants to run. If you approve, click **Allow**. If you don't, click **Skip** and ask the model to clarify or change its approach.

   ![Command approval from copilot](../docs/assets/copilot-chat-run-command-approval.jpg)

2. When the design is settled, copilot may begin implementing on its own. If not you can use the `/implement` skill to tell it to start building the notebook and any other files needed for the project.

3. Upload the `.ipynb` to ArcGIS Online and schedule it on the notebook's **Tasks** tab.

- Work through any iterations / changes with copilot.

## OPTIONAL - Step 6 - Re-run with a different model

Using the same skill, and same prompt, re-run Step 4. But this time, choose either Opus 5 or GPT 5.6 Sol. Note the differences in the design and implementation.

### Questions to consider

- Which went _faster_?
- Which produced a more _complete_ design?
- Which produced a more _correct_ implementation?
- In your opinion, which model is the best for this type of work?
