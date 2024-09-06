<script setup lang="ts">
  import { ref } from 'vue'
  import { Menu, MenuItem } from '@lite-space/ui'

  import DemoBlock from './DemoBlock.vue'

  const activedCheck = ref('7')
  const isopen = ref(true)
</script>

<template>
  <button @click="isopen = !isopen">
    change open:{{ isopen }}
  </button>
  activedCheck:{{ activedCheck }}
  <Menu v-model="activedCheck">
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
      :open="isopen"
    >
      <MenuItem value="4">
        navbar4
      </MenuItem>
      <MenuItem value="5">
        navbar5
      </MenuItem>
    </MenuItem>

    <MenuItem
      value="6"
      title="navbarFater1"
      icon="i-carbon:3d-cursor"
    >
      <MenuItem value="7">
        navbar7
      </MenuItem>
      <MenuItem value="8">
        navbar8
      </MenuItem>
    </MenuItem>
  </Menu>

  <DemoBlock title="header">
    <Menu />
  </DemoBlock>
</template>
