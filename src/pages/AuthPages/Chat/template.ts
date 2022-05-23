export default `
<div class='chat-container'>
  <div class='row h-10'>
    <div class='col-4 col-xxl-3 h-10 overflow-auto thin-gray-scroll' {{{:child 'chatList'}}}></div>
    <div class='col-8 col-xxl-9 h-10' {{{:child 'chatFeed'}}}></div>
  </div>
</div>
`
