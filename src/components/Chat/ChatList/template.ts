export default `
<div class='chat-list-container'>
  <div class='row h-10'>
    <div class='col-12'>
      <div class='text-end' {{{:child 'breadcrumb'}}}></div>
      <div class='mt-3 mb-3' {{{:child 'search'}}}></div>
      <div {{{:child 'dialogues'}}}></div>
    </div>
  </div>
</div>
`
