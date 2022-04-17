export default `
<div class='container h-10 pt-5'>
  <div class='row'>
    <div class='col-12'>
      {{{breadcrumbs}}}
    </div>  
  </div>
  <div class='row my-4'>
    <div class='col-12 d-flex justify-content-center'>
      {{{avatar}}}
    </div>  
  </div>
  <div class='row justify-content-center'>
    <div class='col-12 col-sm-9 col-md-7 col-lg-5 col-xxl-3'>
        <div class='card chat-card'>
          <div class='card-header'>
            <h3>Profile</h3>
          </div>
          <div class='card-body text-center'>
            <form>
              <div class='mb-3'>
                {{{ first_name }}}
              </div>
              <div class='mb-3'>
                {{{ second_name }}}
              </div>
              <div class='mb-3'>
                {{{ display_name }}}
              </div>
              <div class='mb-3'>
                {{{ login }}}
              </div>
              <div class='mb-3'>
                {{{ email }}}
              </div>
              <div class='mb-3'>
                {{{ phone }}}
              </div>
              {{{ btnSave }}}
          </form>
          </div>
        </div>
        <div class='mt-3 d-flex justify-content-center'>     
          <a href='#' class='mx-2 btn btn-secondary'>Change password</a>
          <a href='#' class='mx-2 btn btn-danger'>Logout</a>
        </div>
      </div>
  </div>
</div>
`
