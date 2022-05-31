export default `
<button type='{{type}}' class='{{buttonClass}}'>
  <span class='d-flex justify-content-center'>
    {{#if ico}}
      <i class='ri-{{ico}}'></i>
    {{/if}}
    <span class='{{titleClass}}'>{{title}}</span>
  </span>
</button>`
