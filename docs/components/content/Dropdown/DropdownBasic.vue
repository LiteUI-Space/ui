<script setup lang="ts">
  import { Dropdown, DropdownItem } from '@lite-space/ui'
</script>

<template>
  <Dropdown>
    <a class="text-sm cursor-pointer">
      Hover Me
      <span i-heroicons:chevron-down class=" inline-block align-middle text-gray-400" />
    </a>
    <template #content>
      <DropdownItem>test2</DropdownItem>
      <DropdownItem divider>
        test3
      </DropdownItem>
      <DropdownItem>test4</DropdownItem>
      <DropdownItem title="test5">
        <DropdownItem>
          test7
        </DropdownItem>
        <DropdownItem>test8</DropdownItem>
      </DropdownItem>
      <DropdownItem>test6</DropdownItem>
    </template>
  </Dropdown>
</template>
