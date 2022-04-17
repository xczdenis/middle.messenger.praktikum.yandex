export default `
<div class='chat-list-container'>
  <div class='row h-10'>
    <div class='col-12'>
      <div class='text-end'>
          {{{breadcrumbs}}}
      </div>
      <div class='mt-3 mb-3'>
          {{{search}}}
      </div>
      <div class=''>
        {{#each dialogues}}
            {{{this}}}
        {{/each}}
      </div>
    </div>
  </div>
</div>
`
