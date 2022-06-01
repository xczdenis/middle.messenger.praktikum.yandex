export default `
<form id='{{formId}}'>
  <input id='avatar' type='file' name='avatar' accept='image/*'>
  <div {{{:child this.btnSave }}}></div>
</form>
<img src='{{avatarURL}}' alt=''>`
