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
            <div class='mb-3' {{{:child this.first_name}}}></div>
            <div class='mb-3' {{{:child this.second_name}}}></div>
            <div class='mb-3' {{{:child this.login}}}></div>
            <div class='mb-3' {{{:child this.email}}}></div>
            <div class='mb-3' {{{:child this.password}}}></div>
            <div class='mb-3' {{{:child this.password2}}}></div>
            <div class='mb-3' {{{:child this.phone}}}></div>
            <div class='mb-3' {{{:child this.btnSignUp}}}></div>
            <div class='mb-3' {{{:child this.btnSignIn}}}></div>
          </form>
        </div>
        <div {{{:child this.errorText}}}></div>
      </div>
    </div>
  </div>
</div>
`
