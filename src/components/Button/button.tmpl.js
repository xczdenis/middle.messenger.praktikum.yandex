export default `<button type="{{type}}" class="{{class}}">
  <span class='d-flex'>
  {{#if ico}}<i class="ri-{{ico}}"></i>{{/if}}
  <span class="{{#if title}}{{#if ico}}ms-2{{/if}}{{/if}} {{#if titleBp}}d-none d-{{titleBp}}-block{{/if}}">{{title}}</span>
  </span>
</button>`