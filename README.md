# Spike MicroFrontend

This is a Svelte project that compiles to a single JS file that can be published and ingested by other app-shells in a micro-frontend manner.

## Develop project
`npm run dev`

## Build project
`npm run build`

Rollup will bundle everything into `./public/build/jackui.js`
That file should then be deployed at a publicly accessbile url for demo purposes a version can be linked to from here [https://cdn.jsdelivr.net/gh/jackkeller/spike-microfrontend/public/build/jackui.js](https://cdn.jsdelivr.net/gh/jackkeller/spike-microfrontend/public/build/jackui.js).

## Using the FE
To use the Microfrontend on any other site:

Find the public url of the js file and include it on the page like so:  
`<script type="module" src="https://cdn.jsdelivr.net/gh/jackkeller/spike-microfrontend/public/build/jackui.js"></script>`

## Components

`<jack-button>`  
**jack-button Props**  
```js
name: string; // this will populate the button value
appearance: string; // currently available: 'positive' & 'negative'
href: string; // optional, turns button into a link that appears like a button
target: string; // only really useful if `href` is passed as a property
```

`<jack-card>`  
**jack-card Props**  
```js
title: string; // this will populate the card header value
content: string; // this will populate the card content value
// There is a <slot /> to allow child properties to pass through beneath content
```
