import"./assets/styles-6c98c517.js";const e=document.querySelector(".feedback-form"),l="feedback-form-state";function s(a){localStorage.setItem(l,JSON.stringify(a))}function m(){const a=localStorage.getItem(l);if(a){const t=JSON.parse(a);e.elements.email.value=t.email,e.elements.message.value=t.message}}m();e.addEventListener("input",()=>{const a={email:e.elements.email.value,message:e.elements.message.value.trim()};s(a)});e.addEventListener("submit",a=>{a.preventDefault();const t={email:e.elements.email.value,message:e.elements.message.value.trim()};t.email===""||t.message===""?alert("Fill please all fields"):(console.log("Form:",t),localStorage.removeItem(l),e.reset())});
//# sourceMappingURL=commonHelpers2.js.map
