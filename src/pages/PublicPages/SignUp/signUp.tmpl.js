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
            {{#each fields}}
              <div class="mb-3">{{{ this.template }}}</div>
            {{/each}}
            {{#each buttons}}
              {{{ this.template }}}
            {{/each}}
        </form>
        </div>
      </div>
    </div>
  </div>
</div>
`
