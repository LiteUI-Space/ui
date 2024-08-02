<script setup lang="ts">
  import { computed } from 'vue'
  import { Input } from '@lite-ui/input'

  defineOptions({
    name: 'LtInputPassword'
  })

  const emit = defineEmits<{
    change: [value: boolean]
  }>()

  const visible = defineModel('visible', { default: true })
  const pwdIcon = computed(() => visible.value ? 'i-carbon:view-off' : 'i-carbon:view')

  function handleChange() {
    visible.value = !visible.value
    emit('change', visible.value)
  }
</script>

<template>
  <Input :password="visible" v-bind="$attrs">
    <template v-for="(_, key) in $slots" #[key] :key="key">
      <span
        v-if="key === 'suffix'"
        :class="pwdIcon"
        class="lt-input-password"
        @click="handleChange"
      />
      <slot v-else :name="key" />
    </template>
  </Input>
</template>
