<script setup lang="ts">
  import { Dropdown, DropdownItem } from '@lite-space/ui'
</script>

<template>
  <Dropdown trigger="contextMenu">
    <div
      class="w-70 h-40 text-gray-400 bg-gray-300 flex-center"
    >
      Right Click on here
    </div>
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
