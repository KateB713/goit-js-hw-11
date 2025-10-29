import{a as f,S as u,i as a}from"./assets/vendor-CIu9XFSi.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function t(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=t(e);fetch(e.href,o)}})();const m="52975697-1a0d4c1008252be130962ab4a",g="https://pixabay.com/api/";async function h(i){try{return(await f.get(g,{params:{key:m,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}catch(r){throw console.error("Error fetching data:",r),r}}const c=document.querySelector(".gallery"),d=document.querySelector(".loader"),p=new u(".gallery a",{captionsData:"alt",captionDelay:250});function y(i){const r=i.map(t=>`
            <li class="gallery-item">
                <a a class= "gallery-link" href = "${t.largeImageURL}" >
                     <img class="gallery-image" src="${t.webformatURL}" alt="${t.tags}" width="360" />
                </a>
                <div class="img-info">
                    <div class="img-info-box">
                        <h2 class="img-info-title">Likes</h2>
                        <p class="img-info-value">${t.likes}</p>
                    </div>
                    <div class="img-info-box">
                        <h2 class="img-info-title">Views</h2>
                        <p class="img-info-value">${t.views}</p>
                    </div>
                    <div class="img-info-box">
                        <h2 class="img-info-title">Comments</h2>
                        <p class="img-info-value">${t.comments}</p>
                    </div>
                    <div class="img-info-box">
                        <h2 class="img-info-title">Downloads</h2>
                        <p class="img-info-value">${t.downloads}</p>
                    </div>
                </div>
            </li>`).join("");c.insertAdjacentHTML("beforeend",r),p.refresh()}function v(){c.innerHTML=""}function L(){d.classList.remove("hidden")}function b(){d.classList.add("hidden")}const l=document.querySelector(".form");l.addEventListener("submit",async i=>{i.preventDefault();const r=i.currentTarget.elements["search-text"].value.trim();if(!r){a.warning({title:"Ooops!",message:"Please enter a search query before searching!",position:"topRight"});return}v(),L();try{const t=await h(r);if(t.hits.length===0){a.info({title:"Ooops!",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}y(t.hits),l.reset()}catch{a.error({title:"Error!",message:"Something went wrong. Please try again!",position:"topRight"})}finally{b()}});
//# sourceMappingURL=index.js.map
