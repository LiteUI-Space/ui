<script setup lang="ts">
  import DemoBlock from './DemoBlock.vue'
  import { Breadcrumb, BreadcrumbItem } from '@lite-ui/ui'
</script>

<template>
  <Breadcrumb>
    <BreadcrumbItem>Home</BreadcrumbItem>
    <BreadcrumbItem>Application Center</BreadcrumbItem>
    <BreadcrumbItem>Application List</BreadcrumbItem>
  </Breadcrumb>

  <DemoBlock title="separator">
    <Breadcrumb separator=">">
      <BreadcrumbItem>Home</BreadcrumbItem>
      <BreadcrumbItem>Application Center</BreadcrumbItem>
      <BreadcrumbItem>Application List</BreadcrumbItem>
    </Breadcrumb>

    <Breadcrumb separator="i-carbon:car">
      <BreadcrumbItem>Home</BreadcrumbItem>
      <BreadcrumbItem>Application Center</BreadcrumbItem>
      <BreadcrumbItem>Application List</BreadcrumbItem>
    </Breadcrumb>
  </DemoBlock>

  <DemoBlock title="items">
    <Breadcrumb :items="['Home', 'Application Center', 'Application List']" separator=">" />
  </DemoBlock>
</template>
