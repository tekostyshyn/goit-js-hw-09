var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var r={id:e,exports:{}};return t[e]=r,o.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},e.parcelRequired7c6=o);var r=o("iQIUW");function i(e,t){const n=Math.random()>.3;return new Promise(((o,r)=>{setTimeout((()=>{n?o({position:e,delay:t}):r({position:e,delay:t})}),t)}))}document.querySelector(".form").addEventListener("submit",(function(e){e.preventDefault();const{elements:{delay:t,step:n,amount:o}}=e.currentTarget,l={delay:Number(t.value),step:Number(n.value),amount:Number(o.value)};let a=l.delay;for(let e=1;e<=l.amount;e+=1)i(e,a).then((({position:e,delay:t})=>{r.Notify.success(`✅ Fulfilled promise ${e} in ${t} ms`)})).catch((({position:e,delay:t})=>{r.Notify.failure(`❌ Rejected promise ${e} in ${t}ms`)})),a+=l.step}));
//# sourceMappingURL=03-promises.e66ca0b5.js.map
