# Atlas Desk

Atlas Desk is a React application for signed-in ArcGIS Online users to select a 2D Web Map, explore it with ArcGIS AI Components, and add reversible session-only layers from their organization or ArcGIS Living Atlas.

## Setup

1. Register an ArcGIS Online OAuth 2.0 application and add `http://localhost:5173` as a redirect URI.
2. Create `.env.local` from `.env.example` and set `VITE_ARCGIS_CLIENT_ID` to that application's client ID.
3. Run `npm install` and `npm run dev`.

The signed-in account must be a named ArcGIS Online organizational user with AI assistants enabled and permission to use them.

## Assistant Readiness

ArcGIS AI Components require Web Map embeddings prepared in ArcGIS Online. This app intentionally does not attempt an undocumented programmatic embedding write. For each selected map, prepare embeddings in the Web Map item's settings under **Manage AI vector embeddings**.

Custom layer agents search supported 2D layer items, show matches in the conversation, and require confirmation before adding a layer. Added layers are session-only: they are not saved to the source Web Map and are not guaranteed to be available to the built-in Data Exploration Agent.