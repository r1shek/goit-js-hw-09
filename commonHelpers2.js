import"./assets/styles-6c98c517.js";const e={email:"",message:""},a=document.querySelector(".feedback-form"),l="feedback-form-state";function m(){localStorage.setItem(l,JSON.stringify(e))}function o(){const s=localStorage.getItem(l);if(s){const t=JSON.parse(s);t.email!==""&&t.message!==""&&(e.email=t.email,e.message=t.message,a.elements.email.value=e.email,a.elements.message.value=e.message)}}o();a.addEventListener("input",()=>{e.email=a.elements.email.value,e.message=a.elements.message.value.trim(),m()});a.addEventListener("submit",s=>{s.preventDefault(),e.email===""||e.message===""?alert("Fill please all fields"):(console.log("Form",e),localStorage.removeItem(l),e.email="",e.message="",a.reset())});
//# sourceMappingURL=commonHelpers2.js.map