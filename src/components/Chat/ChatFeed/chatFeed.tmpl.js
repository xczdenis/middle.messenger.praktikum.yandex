export default `
<div class='chat-feed-container'>
  <div class='row h-9 m-0'>
    <div class='col-12 h-10 p-3 overflow-auto thin-gray-scroll'>
      {{#each messages}}
        <div class='chat-feed__message-row {{#if this.isMine}}sent{{else}}received{{/if}}'>
          {{{this.template}}}
        </div>
      {{else}}
        <h3 class='text-secondary' style='margin: auto'>
          Select a chat to send a message
        </h3>
      {{/each}}
    </div>
  </div>
  <div class='row h-1 p-3 m-0 align-items-center'>
    <div class='col-1 d-none d-md-block text-center'>
      <div class='me-3'>{{{btnAttach}}}</div>
    </div>
    <div class='col-10 text-center'>
      <div class='me-3'>{{{inputMsg}}}</div>
    </div>
    <div class='col-1 text-center'>
      <div>{{{btnSend}}}</div>
    </div>
  </div>
</div>
`
