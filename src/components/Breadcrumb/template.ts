export default `
{{#each items}}
    <a href='{{this.href}}' class='text-secondary'>{{this.text}}</a>
    {{#if @last}}{{else}} <span class='text-secondary'>/</span>
     {{/if}}
{{/each}}
`
