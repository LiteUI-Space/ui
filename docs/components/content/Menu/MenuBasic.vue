<script setup lang="ts">
  import { Menu, MenuItem } from '@lite-space/ui'

  const checked = ref('2')
</script>

<template>
  <Menu v-model="checked">
    <MenuItem value="0" icon="i-carbon:3d-cursor">
      navbar1
    </MenuItem>
    <MenuItem :value="1">
      navbar2
    </MenuItem>
    <MenuItem value="2">
      navbar3
    </MenuItem>
    <MenuItem
      value="3"
      title="navbarFater"
      icon="i-carbon:3d-cursor"
    >
      <MenuItem value="4">
        navbar4
      </MenuItem>
      <MenuItem value="5">
        navbar5
      </MenuItem>
    </MenuItem>
  </Menu>
</template>
