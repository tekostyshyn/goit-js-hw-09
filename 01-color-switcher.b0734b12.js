const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]");let c;function o(){const t=`#${Math.floor(16777215*Math.random()).toString(16)}`;document.body.style.backgroundColor=t}t.addEventListener("click",(function(){c=setInterval(o,1e3),t.disabled=!0,t.classList.add("button-clicked"),e.classList.remove("button-clicked")})),e.addEventListener("click",(function(){clearInterval(c),t.disabled=!1,e.classList.add("button-clicked"),t.classList.remove("button-clicked")}));
//# sourceMappingURL=01-color-switcher.b0734b12.js.map
