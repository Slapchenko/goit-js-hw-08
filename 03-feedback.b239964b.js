!function(){var e,t="feedback-form-state",r={},a={form:document.querySelector(".feedback-form"),input:document.querySelector("input"),textarea:document.querySelector("textarea")};a.form.addEventListener("submit",(function(e){if(e.preventDefault(),""===a.input.value||""===a.textarea.value)return alert("All fields are required to be completed");console.log(r),r={},e.currentTarget.reset(),a.textarea.textContent="",localStorage.removeItem(t)})),a.form.addEventListener("input",(function(e){var a=e.target,n=a.name,o=a.value;r[n]="".concat(o),localStorage.setItem(t,JSON.stringify(r))})),(e=JSON.parse(localStorage.getItem(t)))&&(r=e,a.input.value=e.email||"",a.textarea.textContent=e.message||"")}();
//# sourceMappingURL=03-feedback.b239964b.js.map
