(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&l(u)}).observe(document,{childList:!0,subtree:!0});function c(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(e){if(e.ep)return;e.ep=!0;const o=c(e);fetch(e.href,o)}})();new Swiper(".mySwiper",{slidesPerView:1,spaceBetween:10,loop:!0,keyboard:{enabled:!0},pagination:{el:".swiper-pagination",type:"fraction"},navigation:{nextEl:".button-next",prevEl:".button-prev"}});const s={open:document.querySelector(".btn-menu"),close:document.querySelector(".menu-close-btn"),menu:document.querySelector(".mobile-menu"),links:document.querySelectorAll(".menu-link")},i=document.querySelector("body");function f(){var n,t;(n=s.menu)==null||n.classList.toggle("menu-animation"),i==null||i.classList.toggle("overflow-hidden"),(t=s.links)==null||t.forEach(c=>{c.addEventListener("click",()=>{var l;(l=s.menu)==null||l.classList.remove("menu-animation"),i==null||i.classList.remove("overflow-hidden")})})}const r={open:document.querySelector(".catalog-btn"),close:document.querySelector(".modal-close-btn"),backdrop:document.querySelector(".modal-backdrop"),modal:document.querySelector(".modal"),column:document.querySelector(".first-column")};document.querySelectorAll(".catalog-item"),document.querySelector(".catalog-require");function y(){var c;const n=document.querySelectorAll(".catalog-item");let t=null;n.forEach(l=>{l.addEventListener("click",()=>{var e,o;(e=document.querySelector(".selected"))==null||e.classList.remove("selected"),l.classList.add("selected"),t=document.createElement("div"),t.innerHTML=l.innerHTML,t.classList.add("modal-column"),(o=r.open)==null||o.removeAttribute("disabled"),document.querySelector(".catalog-require").style.opacity="0"})}),(c=r.open)==null||c.addEventListener("click",()=>{t!==null&&(r.column.innerHTML="",r.column.appendChild(t),p())})}function p(){var n,t;(n=r.backdrop)==null||n.classList.toggle("backdrop-animation"),(t=r.modal)==null||t.classList.toggle("modal-animation")}function g(){document.querySelectorAll(".catalog-item").forEach(t=>{t.addEventListener("click",y)})}var d;(d=s.open)==null||d.addEventListener("click",f);var a;(a=s.close)==null||a.addEventListener("click",f);g();var m;(m=r.close)==null||m.addEventListener("click",p);