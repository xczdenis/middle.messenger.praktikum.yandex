export default `
<div class='chat-feed-container'>
  <div class='row h-9 m-0'>
    <div class='col-12 h-10 p-3 overflow-auto thin-gray-scroll'>
      {{#if messages}}
        <div {{{child 'Msg1'}}}></div>
        <div {{{child 'Msg2'}}}></div>
        <div {{{child 'Msg3'}}}></div>
      {{else}}
        <div class='h-10 d-flex text-secondary align-items-center justify-content-center'>
          <h3 class='text-muted'>Select a chat to send a message</h3>
        </div>
      {{/if}}

      <h1>{{header}}</h1>

    </div>
  </div>
  <form enctype='multipart/form-data'>
    <div class='row h-1 p-3 m-0 align-items-center'>
        <div class='col-1 d-none d-md-block text-center'>
          <div class='me-3' {{{child 'BtnAttach'}}}></div>
        </div>
        <div class='col-10 text-center'>
          <div class='me-3' {{{child 'InputMsg'}}}></div>
        </div>
        <div class='col-1 text-center'>
          <div {{{child 'BtnSend'}}}></div>
        </div>
    </div>
  </form>
</div>
`
