export default `
<div class='row chat-list__dialogue {{#if active}}active{{/if}}'>
  <div class='col-3 d-flex text-center align-items-center justify-content-center'>
    <img src='{{img}}' alt='avatar'>
  </div>
  <div class='col-7 d-none d-sm-flex flex-column justify-content-between align-items-start'>
    <div class='pb-3'>
      <strong class='text-dark'>{{name}}</strong>
    </div>
    <div>
      {{#if itsMe}}<b class='text-dark'>You:</b>{{/if}}
      <span class='text-secondary'>{{msg}}</span>
    </div>
  </div>
  <div class='col-2 d-none d-sm-flex flex-column justify-content-between align-items-center'>
    <time class='text-secondary'>{{time}}</time>
    {{#if newMessagesNumber}}<span class='badge rounded-pill bg-primary d-block'>{{newMessagesNumber}}</span>{{/if}}
  </div>
</div>
`
