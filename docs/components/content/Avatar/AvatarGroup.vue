<script setup lang="ts">
  import { Avatar, AvatarGroup, Divider } from '@lite-space/ui'
</script>

<template>
  <AvatarGroup>
    <Avatar src="https://images.unsplash.com/photo-1727262436067-6ac6dfc03e27?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1N3x8fGVufDB8fHx8fA%3D%3D" />
    <Avatar class="bg-orange">
      U
    </Avatar>
    <Avatar class="bg-green" />
  </AvatarGroup>
  <Divider />
  <AvatarGroup size="large">
    <Avatar src="https://images.unsplash.com/photo-1727262436067-6ac6dfc03e27?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1N3x8fGVufDB8fHx8fA%3D%3D" />
    <Avatar class="bg-orange">
      U
    </Avatar>
    <Avatar class="bg-green" />
  </AvatarGroup>
  <Divider />
  <AvatarGroup shape="square">
    <Avatar src="https://images.unsplash.com/photo-1727262436067-6ac6dfc03e27?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1N3x8fGVufDB8fHx8fA%3D%3D" />
    <Avatar class="bg-orange">
      U
    </Avatar>
    <Avatar class="bg-green" />
  </AvatarGroup>
</template>
