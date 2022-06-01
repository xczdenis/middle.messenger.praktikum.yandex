export default `
<div class='chat-list-container'>
  <div class='row h-10'>
    <div class='col-12'>
      <div class='text-end p-3' {{{:child this.linkProfile}}}></div>
      <div class='my-2' {{{:child this.search}}}></div>
      <div class='my-2' {{{:child this.btnCreateChat}}}></div>
      <div {{{:child this 'chats'}}}></div>
    </div>
  </div>
</div>
`
