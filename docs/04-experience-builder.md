# Experience Builder Developer Edition

[Back to the pre-work overview](../README.md)

> [!NOTE]
> This setup is optional. Complete it only if you want to follow the Experience Builder widget section hands-on. You can watch that section without installing Developer Edition.

For the Experience Builder exercise, we'll develop a custom widget that can be hosted in ArcGIS Enterprise and look just like an out-of-the-box widget.

A quick note on versioning ([Experience Builder release and version table](https://developers.arcgis.com/experience-builder/guide/release-versions/)). Custom Experience Builder widgets can only be hosted in ArcGIS Enterprise, but you can also build fully custom apps on the framework and host them independently, which is why Esri releases downloadable versions that stay in step with ArcGIS Online. For this exercise, we're targeting a widget hosted on **ArcGIS Enterprise 12.1**, using **Experience Builder Developer Edition 1.20** — so that's the version you'll download.

> [!NOTE]
> There is a newer version (1.21) but it is contemporary with the ArcGIS Online Experience Builder, not ArcGIS Enterprise.

## Step 1: Download and Install Experience Builder Developer Edition

1. Download Experience Builder 1.20 from the [Experience Builder downloads](https://developers.arcgis.com/experience-builder/guide/downloads/)

2. Unzip the folder to a local spot on your machine (do not unzip in the downloads folder). For example: `C:\Dev\arcgis-experience-builder-1.20` (on Mac, `~/dev/arcgis-experience-builder-1.20`).

3. Follow the [Experience Builder Developer Edition install guide](https://developers.arcgis.com/experience-builder/guide/install-guide/) for Steps 1 (option 1), 2, and 3. No need to reinstall node, since you already did so in your pre-work.

## Quick check

Run `npm start` from `/server`. Experience Builder should open at `https://localhost:3001` with no terminal errors.

Your browser will warn about the certificate the first time (it's self-signed and local) — choose **Advanced → Proceed** to continue.

> [!NOTE]
> If you are using Chrome, you may experience issues. Try using Edge or Firefox instead.
