# Experience Builder Developer Edition

[Back to the pre-work overview](../README.md)

> [!NOTE]
> This setup is optional. Complete it only if you want to follow the Experience Builder widget section hands-on. You can watch that section without installing Developer Edition.

Experience Builder Developer Edition is the most involved installation in this guide, so allow extra time. Esri's official documentation is the source of truth and changes with each release:

- [Experience Builder Developer Edition install guide](https://developers.arcgis.com/experience-builder/guide/install-guide/) (includes a walkthrough video)
- [Experience Builder downloads](https://developers.arcgis.com/experience-builder/guide/downloads/)
- [Experience Builder release and version table](https://developers.arcgis.com/experience-builder/guide/release-versions/) (lists the required Node.js and package manager versions)

## Common setup issues

> [!WARNING]
> Match both Node.js and the package manager to the Experience Builder version you download. Check the release and version table before installing dependencies.

- Experience Builder **1.21 and newer** requires **Node.js 22 or newer** and uses `pnpm`. Install pnpm with `npm install --global pnpm`, then install dependencies with `pnpm ci`.
- Experience Builder **1.20 and older** uses `npm ci`. Version 1.20 requires Node.js 20 or newer.
- If you upgrade Node.js later, run `pnpm ci` or `npm ci` again in both the `/server` and `/client` directories.
- Match the Experience Builder version to the ArcGIS Enterprise and Maps SDK versions you target. For example, Experience Builder 1.17 maps to ArcGIS Enterprise 11.5 and ArcGIS Maps SDK for JavaScript 4.32.
- Start Experience Builder from the `/server` directory with `npm start` or `pnpm start`. It runs locally at `https://localhost:3001`.
- To use private content, add an **Application** item in ArcGIS Online and set `https://localhost:3001/` as a redirect URL. The official install guide explains the client ID registration process.

## Quick check

Run `npm start` or `pnpm start` from `/server`. Experience Builder should open at `https://localhost:3001` with no terminal errors.

If you get stuck, record the step number and exact error text and bring them to the workshop.
