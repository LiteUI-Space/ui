<script setup lang="ts">
  const { params } = useRoute()
  const router = useRouter()
</script>

<template>
  <div>
    <div i-carbon-pedestrian class="inline-block text-4xl" />
    <p>
      Hi, {{ params.name }}
    </p>
    <p class="text-sm op-50">
      <em>Dynamic route!</em>
    </p>

    <div>
      <button
        class="m-3 mt-8 text-sm btn"
        @click="router.back()"
      >
        Back
      </button>
    </div>
  </div>
</template>
