export default `
<div class='row chat {{#if active}}active{{/if}}'>
  <div class='col-3 d-flex text-center align-items-center justify-content-center'>
    <img src='{{img}}' alt='avatar'>
  </div>
  <div class='col-7 d-none d-sm-flex flex-column justify-content-between align-items-start'>
    <div class='pb-3'>
      <strong class='text-dark'>{{title}}</strong>
    </div>
    <div>
      {{#if itsMe}}<b class='text-dark'>You:</b>{{/if}}
      <span class='text-secondary'>{{msg}}</span>
    </div>
  </div>
  <div class='col-2 d-none d-sm-flex flex-column justify-content-between align-items-center position-relative'>
    <div {{{:child this.btnMenu}}}></div>
    <div class='chat__menu d-none'>
      <ul class='nav'>
        <div {{{:child this.navLinkAddUser}}}></div>
        <div {{{:child this.navLinkDeleteChat}}}></div>
        <div {{{:child this.navLinkShowUsers}}}></div>
      </ul>
    </div>
    {{#if newMessagesNumber}}<span class='badge rounded-pill bg-primary d-block'>{{newMessagesNumber}}</span>{{/if}}
  </div>
</div>
`
