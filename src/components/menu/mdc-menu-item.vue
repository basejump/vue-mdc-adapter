<template>
  <li class="mdc-list-item" role="menuitem" 
    :tabindex="disabled?'-1':'0'"
    :aria-disabled="disabled"
    >
    <slot></slot>
  </li>
</template>

<style lang="scss">
  @import "@material/menu/mdc-menu";
</style>

<script lang="babel">
export default {
  name: 'mdc-menu-item',
  props: {
    disabled: Boolean
  }
}
</script>
