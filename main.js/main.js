(()=>{"use strict";function t(t,e,i){const s=document.documentElement,o="data-outside";function n(a){t.contains(a.target)||(t.removeAttribute(o,""),e.forEach((t=>{s.removeEventListener(t,n)})),i())}t.hasAttribute(o)||(e.forEach((t=>{setTimeout((()=>s.addEventListener(t,n)))})),t.setAttribute(o,""))}class e{constructor(t,e,i){this.numeros=document.querySelectorAll(t),this.observerTarget=document.querySelector(e),this.observerClass=i,this.handleMutation=this.handleMutation.bind(this)}static incrementarNumero(t){const e=+t.innerText,i=Math.floor(e/100);let s=0;const o=setInterval((()=>{s+=i,t.innerText=s,s>e&&(t.innerText=e,clearInterval(o))}),25*Math.random())}animaNumeros(){this.numeros.forEach((t=>this.constructor.incrementarNumero(t)))}handleMutation(t){t[0].target.classList.contains(this.observerClass)&&(this.observer.disconnect(),this.animaNumeros())}addMutationObserver(){this.observer=new MutationObserver(this.handleMutation),this.observer.observe(this.observerTarget,{attributes:!0})}init(){return this.numeros.length&&this.observerTarget&&this.addMutationObserver(),this}}new class{constructor(t,e){this.linkInternos=document.querySelectorAll(t),this.options=void 0===e?{behavior:"smooth",block:"start"}:e,this.scrollToSection=this.scrollToSection.bind(this)}scrollToSection(t){t.preventDefault();const e=t.currentTarget.getAttribute("href");document.querySelector(e).scrollIntoView(this.options)}addlinkEvent(){this.linkInternos.forEach((t=>{t.addEventListener("click",this.scrollToSection)}))}init(){return this.linkInternos.length&&this.addlinkEvent(),this}}('[data-menu="suave"] a[href^="#"]').init(),new class{constructor(t){this.accordionList=document.querySelectorAll(t),this.activeClass="ativo"}toggleAccordion(t){t.classList.toggle(this.activeClass),t.nextElementSibling.classList.toggle(this.activeClass)}addAcorddionEvent(){this.accordionList.forEach((t=>{t.addEventListener("click",(()=>this.toggleAccordion(t)))}))}init(){return this.accordionList.length&&(this.toggleAccordion(this.accordionList[0]),this.addAcorddionEvent()),this}}("[data-anime='accordion'] dt").init(),new class{constructor(t,e){this.tabMenu=document.querySelectorAll(t),this.tabContent=document.querySelectorAll(e),this.activeClass="ativo"}activeTab(t){this.tabContent.forEach((t=>{t.classList.remove(this.activeClass)}));const e=this.tabContent[t].dataset.anime;this.tabContent[t].classList.add(this.activeClass,e)}addTabMenuEvent(){this.tabMenu.forEach(((t,e)=>{t.addEventListener("click",(()=>{this.activeTab(e)}))}))}init(){return this.tabMenu.length&&this.tabContent.length&&(this.activeTab(0),this.addTabMenuEvent()),this}}("[data-tab='menu'] li","[data-tab='content'] section").init(),new class{constructor(t,e,i){this.botaoAbrir=document.querySelector(t),this.botaoFechar=document.querySelector(e),this.container=document.querySelector(i),this.eventToggleModal=this.eventToggleModal.bind(this),this.cliqueForaModal=this.cliqueForaModal.bind(this)}toggleModal(){this.container.classList.toggle("ativo")}eventToggleModal(t){t.preventDefault(),this.toggleModal()}cliqueForaModal(t){t.target===this.container&&this.toggleModal()}addModalEvents(){this.botaoAbrir.addEventListener("click",this.eventToggleModal),this.botaoFechar.addEventListener("click",this.eventToggleModal),this.container.addEventListener("click",this.cliqueForaModal)}init(){return this.botaoAbrir&&this.botaoFechar&&this.container&&this.addModalEvents(),this}}("[data-modal='abrir'","[data-modal='fechar'","[data-modal='container'").init(),new class{constructor(t){this.tooltips=document.querySelectorAll(t),this.onMouseLeave=this.onMouseLeave.bind(this),this.onMouseMove=this.onMouseMove.bind(this),this.onMouseOver=this.onMouseOver.bind(this)}onMouseMove(t){this.tooltipBox.style.top=`${t.pageY+15}px`,t.pageX+240>window.innerWidth?this.tooltipBox.style.left=t.pageX-240+"px":this.tooltipBox.style.left=`${t.pageX+15}px`}onMouseLeave(t){this.tooltipBox.remove(),t.currentTarget.removeEventListener("mouseleave",this.onMouseLeave),this.tooltipBox.removeEventListener("mousemove",this.onMouseMove)}criarToolTipBox(t){const e=document.createElement("div"),i=t.getAttribute("aria-label");e.classList.add("tooltip"),e.innerText=i,document.body.appendChild(e),this.tooltipBox=e}onMouseOver(t){this.criarToolTipBox(t.currentTarget),t.currentTarget.addEventListener("mousemove",this.onMouseMove),t.currentTarget.addEventListener("mouseleave",this.onMouseLeave)}addToolTipsEvents(){this.tooltips.forEach((t=>{t.addEventListener("mouseover",this.onMouseOver)}))}init(){return this.tooltips.length&&this.addToolTipsEvents(),this}}("[data-tooltip]").init(),new class{constructor(t){this.sections=document.querySelectorAll(t),this.windowMetade=.6*window.innerHeight,this.checkDistance=function(t,e){let i;return(...e)=>{i&&clearTimeout(i),i=setTimeout((()=>{t(...e),i=null}),50)}}(this.checkDistance.bind(this))}getDistance(){this.distance=[...this.sections].map((t=>{const e=t.offsetTop;return{element:t,offset:Math.floor(e-this.windowMetade)}}))}checkDistance(){this.distance.forEach((t=>{window.pageYOffset>t.offset?t.element.classList.add("ativo"):t.element.classList.contains("ativo")&&t.element.classList.remove("ativo")}))}init(){return this.sections.length&&(this.getDistance(),this.checkDistance(),window.addEventListener("scroll",this.checkDistance)),this}stop(){window.removeEventListener("scroll",this.checkDistance)}}("[data-anime='scroll']").init(),new class{constructor(t){this.dropDownMenus=document.querySelectorAll(t),this.activeClass="ativo",this.activeDropDownMenu=this.activeDropDownMenu.bind(this)}activeDropDownMenu(e){e.preventDefault();const i=e.currentTarget;i.classList.add(this.activeClass),t(i,["touchstart","click"],(()=>{i.classList.remove("ativo")}))}addEventDropdown(){this.dropDownMenus.forEach((t=>{["touchstart","click"].forEach((e=>{t.addEventListener(e,this.activeDropDownMenu)}))}))}init(){return this.dropDownMenus.length&&this.addEventDropdown(),this}}("[data-dropdown]").init(),new class{constructor(t,e){this.menuButton=document.querySelector(t),this.menuList=document.querySelector(e),this.eventos=["click","touchstart"],this.openMenu=this.openMenu.bind(this)}openMenu(){this.menuList.classList.add("active"),this.menuButton.classList.add("active"),t(this.menuList,this.eventos,(()=>{this.menuList.classList.remove("active"),this.menuButton.classList.remove("active")}))}addMenuMobileEvents(){this.eventos.forEach((t=>{this.menuButton.addEventListener(t,this.openMenu)}))}init(){return this.menuButton&&this.menuList&&this.addMenuMobileEvents(),this}}("[data-menu='button'","[data-menu='list'").init(),async function(){const t=await fetch("../../animaisapi.json"),i=await t.json(),s=document.querySelector(".numeros-grid");i.forEach((t=>{const e=function(t){const e=document.createElement("div");return e.classList.add("numero-animal"),e.innerHTML=`<h3>${t.specie}</h3><span data-numero>${t.total}</span>`,e}(t);s.appendChild(e)})),new e("[data-numero",".numeros","ativo").init()}(),function(t){const e=document.querySelector(".btc-preco");!async function(t){try{const t=await fetch("https://blockchain.info/ticker"),i=await t.json();e.innerText=(500/i.BRL.buy).toFixed(5)}catch(t){console.log(Error(t))}}()}(),function(){const t=document.querySelector("[data-semana]"),e=t.dataset.semana.split(",").map(Number),i=t.dataset.horario.split(",").map(Number),s=new Date,o=s.getDay(),n=s.getHours(),a=-1!==e.indexOf(o),r=n>=i[0]&&n<i[1];a&&r&&t.classList.add("aberto")}()})();