export default `
<div class='chat-feed-container thin-gray-scroll'>
  <div class='row h-9 m-0'>
    <div class='col-12 h-10 p-3 overflow-auto thin-gray-scroll' {{{:child 'messages'}}}>
    </div>
  </div>
    <form enctype='multipart/form-data'>
      <div class='row h-1 p-3 m-0 align-items-center'>
        <div class='col-1 d-none d-md-block text-center'>
          <div class='me-3' {{{:child 'btnAttach'}}}></div>
        </div>
        <div class='col-10 text-center'>
          <div class='me-3' {{{:child 'inputMsg'}}}></div>
        </div>
        <div class='col-1 text-center'>
          <div {{{:child 'btnSend'}}}></div>
        </div>
      </div>
    </form>
</div>
`
