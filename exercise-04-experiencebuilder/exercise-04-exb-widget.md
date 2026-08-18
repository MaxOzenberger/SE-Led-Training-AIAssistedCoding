# Exercise 3 — Experience Builder: Radar Chart Widget

> 💡 **Tip:** Press `Ctrl+Shift+V` to view this file as a formatted preview (or `Cmd+Shift+V` on Mac).

**What you'll build:** a custom ArcGIS Experience Builder widget that draws a radar (spider) chart from a configured feature layer, with a rich settings panel.

We'll design it first using `/grill-with-docs`, then build it.

> **Before you start:** this one needs Experience Builder Developer Edition installed (see the pre-work appendix). We're targeting **ExB Developer Edition 1.18** deploying on **ArcGIS Enterprise 12.0** but any recent version of the Developer Edition should be fine for this workflow.

---

## Step 1 — Open your Experience Builder folder

We'll be using a different Visual Studio workspace for this one, so you can save your edits from Exercises 1-3. You'll work inside the Experience Builder Developer Edition you already installed in the pre-work.

1. Find where you unzipped Experience Builder. In this example it's:
   `C:\Dev\arcgis-experience-builder-1.20`
   (Yours may be somewhere else — use wherever you put it.)
2. In VS Code: **File → Open Folder** and open that Experience Builder folder.
3. Open a terminal inside VS Code: **Terminal → New Terminal** (or `` Ctrl+` ``).

---

## Step 2 — Install the skills into this folder

Same workflow as Exercise 1.

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

## Step 3 — Start the design interview

1. Open **Copilot Chat** using the chat box to the right of the search bar at the top of the Visual Studio window.
2. Ensure you are on "Agent" mode and your chosen model.

3. When it's ready, paste the prompt below.

> **Heads up:** `/grill-with-docs` interviews you and writes down the design (it does **not** write the code yet). Answer its questions, ask follow up and clarifyication questions as needed. Once the design is settled, you'll tell it to build.

---

## Step 4 — The prompt

```
I'd like to build an ArcGIS Experience Builder custom widget that is a
radar chart (spider chart). I am using Experience Builder developer
edition version 1.20 and will deploy it on ArcGIS Enterprise 12.1. The
widget draws a radar chart from a single configured feature layer -
select the layer from the map in the widget settings: each feature is
one record, and I pick which numeric fields become the axes through the
settings panel, so don't hard-code field names.

Settings I'd like to be able to change:
Configure the maximum for the axes (default 100)
Choose how many axes are available (max 10)
Position axis labels around the outside without overlapping the plot,
allow the user to change the labels, size them, and wrap text
Configure each row in the dataset as a polygon on the radar chart and
select which to include - let the user choose the colors, transparency,
and if the data points have dots
Allow for either single row view (one at a time on the radar chart) or
all overlapping with transparency (these should change as selection or
filter changes)
If a feature is missing a value on an axis, break the line
Add / change title of the chart
Add legend and select location of legend on the chart (above, below,
left, or right of chart)
Turn on and off radial axis scales
Turn on and off data point labels
Turn on and off spoke lines and internal axes lines

Overall, the chart should function with the existing ArcGIS Experience
Builder data schema and should reflect the themes.

Ask me about anything ambiguous before we settle the design.
```

---

## Step 5 — What happens next

- Work through the interview rounds (reply by number where it helps).
- When the design is settled, tell the assistant to `/implement`
- The widget gets built under `client/your-extensions/widgets/` inside your Experience Builder folder.

### Starting Experience Builder to view your widget

Experience Builder runs as two pieces — the **server** and the **client** — each in its own terminal. From your Experience Builder folder (`C:\Dev\arcgis-experience-builder-1.20`):

> **On a newer Experience Builder?** These commands use `npm`, which is correct for **1.20 and older** (including our 1.20). **Experience Builder 1.21 and newer use `pnpm` instead** — so run `pnpm start` in place of `npm start` (and `pnpm ci` in place of `npm ci`). You'd also need pnpm installed once with `npm i -g pnpm`. Everything else below is the same.

1. **Start the server.** Open your Experience Builder folder in File Explorer. Right click `C:\Dev\arcgis-experience-builder-1.20\server` > Select `Open in terminal` then:

```
   npm ci
```

```
   npm start
```

Leave this terminal running.

2. **Start the client.** In your Visual Studio code, open a new terminal. (**Terminal → New Terminal**), then:

```
   cd client
```

```
   npm ci
```

```
   npm start
```

Leave this one running too. The first time, this takes a minute to compile.

3. **Open it in your browser** at:

```
   https://localhost:3001
```

Your browser will warn about the certificate the first time (it's self-signed and local) — choose **Advanced → Proceed** to continue.

4. Sign in, create or open an Experience, and add your **radar chart widget** from the widget panel to see it live. As you edit the widget code, the client rebuilds and you can refresh to see changes.

5. To fully test the radar chart widget, use this WebMap with fictional data formatted for a radar chart: `df060eab8c4447c0a32fd4d874f81e7a`

   > If `npm start` gives you an EBUSY error. Run: `taskkill /F /IM node.exe /T` on both the server and the client terminals then run again.
