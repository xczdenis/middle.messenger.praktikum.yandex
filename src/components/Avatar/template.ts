export default `
<div class='avatar-wrapper shadow'>
  <img class='profile-pic' src='' />
  <div class='upload-button'></div>
  <input name='avatar' {{#if form_name}}form={{"form_name"}}{{/if}} class='file-upload' type='file' accept='image/*'/>
</div>
`
