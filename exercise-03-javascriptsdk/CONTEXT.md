# AI Mapping Assistant

This context describes an ArcGIS Online application for choosing and exploring organizational web maps with an AI assistant.

## Language

**Map Catalogue**:
The selectable collection of accessible 2D Web Maps shown after a user signs in.
_Avoid_: map list, map picker

**Selected Map**:
The single Web Map currently loaded into the application and supplied as the assistant's context.
_Avoid_: active map, current map

**Embedding**:
A map-owned assistant resource that makes a Selected Map's content available for AI-assisted exploration.
_Avoid_: vector data, assistant cache

**Assistant Readiness**:
The status of a Selected Map whose Embedding is available for assistant-powered data exploration.
_Avoid_: embedding generation, AI enabled

**Session Layer**:
A layer added to the Selected Map for the current application session without saving that change to its source Web Map.
_Avoid_: permanent layer, map update

**Layer Source**:
The catalogue from which a Session Layer is selected: either the signed-in user's organization or ArcGIS Living Atlas.
_Avoid_: layer provider