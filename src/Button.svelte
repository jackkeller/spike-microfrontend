<script lang="ts">
  export let name: string;
  export let appearance: string;
  export let href: string;
  export let target: string;
</script>

<style lang="sass">
.btn
  background: #ededed
  border: 1px solid #ccc
  color: #2d2d2d
  font: normal 1rem/1.1 sans-serif
  padding: .5rem 1.25rem
  text-decoration: none

  &.positive
    background: #009d0e
    border-color: #007d0e
    color: #fff

  &.negative
    background: #930
    border-color: #900
    color: #fff
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