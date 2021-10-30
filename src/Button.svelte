<script lang="ts">
  export let name: 'name';
  export let appearance: '';
  export let href: '';
  export let target: '';
</script>

<style lang="sass">
$bg-default: #ededed
$bg-positive: #009d0e
$bg-negative: #930

.btn
  --button-background: #{$bg-default}
  --button-background-hover: #{darken($bg-default, 20%)}
  --button-background-positive: #{$bg-positive}
  --button-background-positive-hover: #{darken($bg-positive, 20%)}
  --button-background-negative: #{$bg-negative}
  --button-background-negative-hover: #{darken($bg-negative, 20%)}

  background: var(--button-background)
  border: 1px solid #ccc
  color: #2d2d2d
  font: normal 1rem/1.1 sans-serif
  padding: .5rem 1.25rem
  text-decoration: none
  transition: all .2s ease-in-out

  &:hover
    background: var(--button-background-hover)

  &.positive
    background: var(--button-background-positive)
    border-color: #007d0e
    color: #fff

    &:hover
      background: var(--button-background-positive-hover)

  &.negative
    background: var(--button-background-negative)
    border-color: #900
    color: #fff

    &:hover
      background: var(--button-background-negative-hover)
</style>

<svelte:options tag="jack-button" />

{#if href}
  <a class="btn {appearance}" href={href} target={target}>
    {name}
  </a>
{:else}
  <button class="btn {appearance}">
    {name}
  </button>
{/if}