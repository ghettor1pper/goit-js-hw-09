import"./assets/style-604bb2ab.js";const e=document.querySelector(".feedback-form"),n="feedback-form-state",l=localStorage.getItem(n);if(l){const a=JSON.parse(l);a.email&&(e.elements.email.value=a.email),a.message&&(e.elements.message.value=a.message)}function c(a){const t=e.elements.email.value,s=e.elements.message.value,o=JSON.stringify({email:t,message:s});localStorage.setItem(n,o)}function i(a){a.preventDefault();const t=e.elements.email.value,s=e.elements.message.value;console.log({email:t,message:s}),localStorage.removeItem(n),e.reset()}e.addEventListener("submit",i);e.addEventListener("input",c);
//# sourceMappingURL=commonHelpers2.js.map