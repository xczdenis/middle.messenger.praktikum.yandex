export default `
<div class='container h-10 pt-5'>
  <div class='row'>
    <div class='col-12'>
      {{{breadcrumbs}}}
    </div>  
  </div>
  <div class='row justify-content-center'>
    <div class='col-12 col-sm-9 col-md-7 col-lg-5 col-xxl-3'>
        <div class='card chat-card'>
          <div class='card-header'>
            <h3>Change password</h3>
          </div>
          <div class='card-body text-center'>
            <form>
              <div class='mb-3'>
                {{{ oldPassword }}}
              </div>
              <div class='mb-3'>
                {{{ newPassword }}}
              </div>
              <div class='mb-3'>
                {{{ newPasswordRepeat }}}
              </div>
              {{{ btnSave }}}
            </form>
          </div>
        </div>
      </div>
  </div>
</div>
`
