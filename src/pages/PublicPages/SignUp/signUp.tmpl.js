export default `
<div class='container h-10 pt-5'>
  <div class='row justify-content-center'>
  <div class='col-12 col-sm-9 col-md-7 col-lg-5 col-xxl-3'>
      <div class='card chat-card'>
        <div class='card-header'>
          <h3>Sign up</h3>
        </div>
        <div class='card-body text-center'>
          <form>
            <div class="mb-3">
              {{{ first_name }}}
            </div>
            <div class="mb-3">
              {{{ second_name }}}
            </div>
            <div class="mb-3">
              {{{ login }}}
            </div>
            <div class="mb-3">
              {{{ email }}}
            </div>
            <div class="mb-3">
              {{{ password }}}
            </div>
            <div class="mb-3">
              {{{ password2 }}}
            </div>
            <div class="mb-3">
              {{{ phone }}}
            </div>
            {{{ btnSignUp }}}
            {{{ btnSignIn }}}
        </form>
        </div>
      </div>
    </div>
  </div>
</div>
`
