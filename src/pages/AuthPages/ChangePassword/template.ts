export default `
<div class='container h-10 pt-5'>
  <div class='row'>
    <div class='col-12' {{{child 'Breadcrumb'}}}></div>
  </div>
  <div class='row justify-content-center'>
    <div class='col-12 col-sm-9 col-md-7 col-lg-5 col-xxl-3'>
        <div class='card chat-card'>
          <div class='card-header'>
            <h3>Change password</h3>
          </div>
          <div class='card-body text-center'>
            <form>
              <div class='mb-3' {{{child 'OldPassword'}}}></div>
              <div class='mb-3' {{{child 'Password'}}}></div>
              <div class='mb-3' {{{child 'Password2'}}}></div>
              <div class='mb-3' {{{child 'BtnSave'}}}></div>
            </form>
          </div>
        </div>
      </div>
  </div>
</div>
`
