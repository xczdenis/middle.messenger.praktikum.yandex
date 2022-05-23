export default `
<div class='p-3'>
{{#each items}}
    <a href='{{this.href}}' class='text-secondary'>{{this.text}}</a>
    {{#if @last}}{{else}} <span class='text-secondary'>/</span>
     {{/if}}
{{/each}}
</div>`
