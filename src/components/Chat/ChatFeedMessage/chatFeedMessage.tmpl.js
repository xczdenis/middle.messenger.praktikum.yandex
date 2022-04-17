// export default `<button type="{{type}}" class="{{class}}">
//   <span class='d-flex'>
//   {{#if ico}}<i class="ri-{{ico}}"></i>{{/if}}
//   <span class="{{#if title}}{{#if ico}}ms-2{{/if}}{{/if}} {{#if titleBp}}d-none d-{{titleBp}}-block{{/if}}">{{title}}</span>
//   </span>
// </button>`
export default `
<div class='chat-feed__message-box {{#if isMine}}sent{{else}}received{{/if}}'>
  <div class='chat-feed__message {{#if isMine}}sent{{else}}received{{/if}}'>{{text}}</div>
  <div class='d-flex justify-content-end align-items-center text-muted mt-1'>
    {{#if isMine}}
      {{#if msgRead}}
        <i class="ri-check-double-line text-success me-1"></i>
      {{else}}
        {{#if msgDelivered}}
          <i class="ri-check-double-line text-muted me-1"></i>
        {{else}}
          {{#if msgSent}}
            <i class="ri-check-line text-muted me-1"></i>
          {{else}}
          {{/if}}
        {{/if}}
      {{/if}}
    {{else}}{{/if}}
    <small>{{time}}</small>
  </div>
</div>

`