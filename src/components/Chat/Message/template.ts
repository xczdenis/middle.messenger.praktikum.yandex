export default `
<div class='chat-feed__message-row {{#if isMine}}sent{{else}}received{{/if}}'>
  <div class='chat-feed__message-box {{#if isMine}}sent{{else}}received{{/if}}'>
    <div class='chat-feed__message {{#if isMine}}sent{{else}}received{{/if}}'>{{text}}</div>
    <div class='d-flex justify-content-end align-items-center text-muted mt-1'>
      {{#if isMine}}
        <div {{{:child 'status' }}}></div>
      {{/if}}
      <time style='font-size: 0.8em'>{{time}}</time>
    </div>
  </div>
</div>
`
