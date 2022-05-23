export default `
{{#if isRead}}
  <i class='ri-check-double-line text-success me-1'></i>
{{else}}
  {{#if isDelivered}}
    <i class='ri-check-double-line text-muted me-1'></i>
  {{else}}
    <i class='ri-check-line text-muted me-1'></i>
  {{/if}}
{{/if}}
`
