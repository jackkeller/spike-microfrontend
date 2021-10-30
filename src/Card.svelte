<script lang="ts">
  export let title = '{title}';
  export let content = '{content}';
</script>

<style lang="sass">
  .card
    background: #fff
    border: 1px solid #ededed
    font-family: sans-serif
    padding: 1rem 1rem 2rem
</style>

<svelte:options tag="jack-card" />

<div class="card">
  <h3>{title}</h3>
  <p>{content}</p>
  <slot></slot>
</div>