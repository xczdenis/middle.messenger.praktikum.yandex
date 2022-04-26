export default `
<button type='{{type}}' class='{{buttonClass}}'>
  <span class='d-flex'>
    {{#if ico}}
      <i class='ri-{{ico}}'></i>
    {{/if}}
    <span class='{{titleClass}}'>{{title}}</span>
  </span>
</button>`
