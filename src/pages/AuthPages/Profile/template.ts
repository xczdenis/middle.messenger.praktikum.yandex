export default `
<div class='container h-10 pt-5'>
  <div class='row'>
    <div class='col-12 d-flex'>
      <div {{{:child this.linkChat}}}></div>
      <div class='text-muted'>&nbsp;/&nbsp;Profile</div>
    </div>
  </div>
  <div class='row my-4'>
    <div class='col-12 d-flex justify-content-center' {{{:child this.avatarForm}}}></div>
  </div>
  <div class='row justify-content-center'>
    <div class='col-12 col-sm-9 col-md-7 col-lg-5 col-xxl-3'>
        <div class='card chat-card'>
          <div class='card-header'>
            <h3>Profile</h3>
          </div>
          <div class='card-body text-center'>
            <div class='d-flex align-items-center justify-content-center mb-3'>
              <div class='text-start' style='width: auto'>light</div>
                <div class='switch-button mx-2'>
                  <input class='switch-button-checkbox' type='checkbox' id='theme_switcher' {{checked}}>
                  <label class='switch-button-label' for=''><span class='switch-button-label-span'></span></label>
                </div>
              <div class='text-start' style='width: auto'>dark</div>
            </div>
            <form id='form' enctype='multipart/form-data'>
              <div class='mb-3' {{{:child this.first_name}}}></div>
              <div class='mb-3' {{{:child this.second_name}}}></div>
              <div class='mb-3' {{{:child this.display_name}}}></div>
              <div class='mb-3' {{{:child this.login}}}></div>
              <div class='mb-3' {{{:child this.email}}}></div>
              <div class='mb-3' {{{:child this.phone}}}></div>
              <div {{{:child this.btnSave}}}></div>
          </form>
          </div>
        </div>
        <div class='mt-3 d-flex justify-content-center'>
          <div {{{:child this.btnChangePassword}}}></div>
          <div {{{:child this.btnLogout}}}></div>
        </div>
      </div>
  </div>
</div>
`
