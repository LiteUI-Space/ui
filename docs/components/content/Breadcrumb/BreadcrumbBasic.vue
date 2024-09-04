<script setup lang="ts">
  import { Breadcrumb, BreadcrumbItem } from '@lite-space/ui'
</script>

<template>
  <Breadcrumb>
    <BreadcrumbItem>Home</BreadcrumbItem>
    <BreadcrumbItem>Application Center</BreadcrumbItem>
    <BreadcrumbItem>Application List</BreadcrumbItem>
  </Breadcrumb>

  <!-- 简写 -->
  <Breadcrumb :items="['Home', 'Application Center', 'Application List']" separator=">" />
</template>
