if(!self.define){let e,s={};const a=(a,n)=>(a=new URL(a+".js",n).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(n,i)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let l={};const f=e=>a(e,r),o={module:{uri:r},exports:l,require:f};s[r]=Promise.all(n.map((e=>o[e]||f(e)))).then((e=>(i(...e),l)))}}define(["./workbox-1ab968a5"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/dorkerbox-BnfyurS0.png",revision:null},{url:"assets/header-CYKjrhgH.jpg",revision:null},{url:"assets/index-BnMRIh57.css",revision:null},{url:"assets/index-CdRUUZ7J.js",revision:null},{url:"assets/photo-Fj4HRnrw.png",revision:null},{url:"assets/pleenum-DvWkxcE3.png",revision:null},{url:"assets/react-CHdo91hT.svg",revision:null},{url:"assets/sopg-1-DyEGW65I.png",revision:null},{url:"assets/sopg-2-Bx60W1I2.png",revision:null},{url:"assets/sopg-3-F0Y053i3.png",revision:null},{url:"assets/tux-HubwNM-g.svg",revision:null},{url:"favicon.png",revision:"142a60eff228a66a9306163140308485"},{url:"favicon.svg",revision:"0e122c36aebfef7647e50fd2908afe0a"},{url:"index.html",revision:"60b2326f5f7646eb09bcb9354e48e01d"},{url:"manifest.webmanifest",revision:"76423eed90b87653bca0806ed0974b11"},{url:"maskable-128x128.png",revision:"6451ff323f78c89f275799f480d942ac"},{url:"maskable-144x144.png",revision:"57b2201144db8d8f4075160e9a25b79f"},{url:"maskable-152x152.png",revision:"ffab0ab20939afff3735d1ebba301f77"},{url:"maskable-192x192.png",revision:"e0356d00068405c688f530bd34b4d2d5"},{url:"maskable-384x384.png",revision:"3ba104d534157036f1c6ea27526845a9"},{url:"maskable-512x512.png",revision:"24f5ab192d2786b199c7f7c3ec757d9a"},{url:"maskable-72x72.png",revision:"2eca490f88053e42b3c3c69058cd2a1e"},{url:"maskable-96x96.png",revision:"af552be269a356a29445fe60d08a6d02"},{url:"maskable.svg",revision:"35735659c00fda7accfb66be7180c32f"},{url:"registerSW.js",revision:"3b11fbfed845c561c61200da06412041"},{url:"./maskable.svg",revision:"35735659c00fda7accfb66be7180c32f"},{url:"favicon.png",revision:"142a60eff228a66a9306163140308485"},{url:"favicon.svg",revision:"0e122c36aebfef7647e50fd2908afe0a"},{url:"maskable-128x128.png",revision:"6451ff323f78c89f275799f480d942ac"},{url:"maskable-144x144.png",revision:"57b2201144db8d8f4075160e9a25b79f"},{url:"maskable-152x152.png",revision:"ffab0ab20939afff3735d1ebba301f77"},{url:"maskable-192x192.png",revision:"e0356d00068405c688f530bd34b4d2d5"},{url:"maskable-384x384.png",revision:"3ba104d534157036f1c6ea27526845a9"},{url:"maskable-512x512.png",revision:"24f5ab192d2786b199c7f7c3ec757d9a"},{url:"maskable-72x72.png",revision:"2eca490f88053e42b3c3c69058cd2a1e"},{url:"maskable-96x96.png",revision:"af552be269a356a29445fe60d08a6d02"},{url:"manifest.webmanifest",revision:"76423eed90b87653bca0806ed0974b11"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=sw.js.map
