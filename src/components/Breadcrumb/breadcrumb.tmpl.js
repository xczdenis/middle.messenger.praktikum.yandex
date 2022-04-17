export default `
<div class='p-3'>
{{#each objectList}}
    <a href='{{this.href}}' class='text-secondary'>{{this.text}}</a>
    {{#if @last}}{{else}} <span class='text-secondary'>/</span>
     {{/if}}
{{/each}}
</div>`
