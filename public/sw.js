if(!self.define){let e,s={};const n=(n,t)=>(n=new URL(n+".js",t).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(t,i)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(s[a])return;let c={};const r=e=>n(e,a),o={module:{uri:a},exports:c,require:r};s[a]=Promise.all(t.map((e=>o[e]||r(e)))).then((e=>(i(...e),c)))}}define(["./workbox-62f137f2"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/GyMSFTLtZKXeX_NLnG1np/_buildManifest.js",revision:"GyMSFTLtZKXeX_NLnG1np"},{url:"/_next/static/GyMSFTLtZKXeX_NLnG1np/_middlewareManifest.js",revision:"GyMSFTLtZKXeX_NLnG1np"},{url:"/_next/static/GyMSFTLtZKXeX_NLnG1np/_ssgManifest.js",revision:"GyMSFTLtZKXeX_NLnG1np"},{url:"/_next/static/chunks/0b7b90cd.6cb8607c44bda9b4.js",revision:"GyMSFTLtZKXeX_NLnG1np"},{url:"/_next/static/chunks/163.5ced4ab038722036.js",revision:"GyMSFTLtZKXeX_NLnG1np"},{url:"/_next/static/chunks/651.243d23442247d286.js",revision:"GyMSFTLtZKXeX_NLnG1np"},{url:"/_next/static/chunks/framework-5f4595e5518b5600.js",revision:"GyMSFTLtZKXeX_NLnG1np"},{url:"/_next/static/chunks/main-4c3c3b99c532ed6b.js",revision:"GyMSFTLtZKXeX_NLnG1np"},{url:"/_next/static/chunks/pages/%5Bslug%5D-a55d939c30cfee8c.js",revision:"GyMSFTLtZKXeX_NLnG1np"},{url:"/_next/static/chunks/pages/_app-4ed305205dd802dc.js",revision:"GyMSFTLtZKXeX_NLnG1np"},{url:"/_next/static/chunks/pages/_error-8022dacb1937fc7a.js",revision:"GyMSFTLtZKXeX_NLnG1np"},{url:"/_next/static/chunks/pages/index-4f8ff6a91b2951c6.js",revision:"GyMSFTLtZKXeX_NLnG1np"},{url:"/_next/static/chunks/pages/places/%5Bslug%5D-c73860ec55fe5c35.js",revision:"GyMSFTLtZKXeX_NLnG1np"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"GyMSFTLtZKXeX_NLnG1np"},{url:"/_next/static/chunks/webpack-dfdd92c7e6a4032a.js",revision:"GyMSFTLtZKXeX_NLnG1np"},{url:"/favicon.ico",revision:"c30c7d42707a47a3f4591831641e50dc"},{url:"/img/nextjs.png",revision:"a2488252f4d424bb4ea89bf574ccf0a4"},{url:"/manifest.json",revision:"eb6efc507dcc4304dda40f110740a7c1"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:t})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
