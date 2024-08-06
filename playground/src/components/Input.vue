<script setup lang="ts">
  import { Button, Input, InputPassword, TextArea } from '@lite-ui/ui'

  import { ref } from 'vue'
  import DemoBlock from './DemoBlock.vue'

  const password = ref('123')
  const isPasssword = ref(true)

  function handleChange(data: boolean) {
    console.log('data', data)
  }
  const visible = ref(true)
  function handleClearable() {
    console.log('clear')
  }
</script>

<template>
  <Input placeholder="Please Input" />

  <DemoBlock title="Prefix & Suffix" col>
    <Input prefix="i-carbon:user-avatar" placeholder="default size" suffix="i-carbon:customer" />
    <Input prefix="$" placeholder="default size" suffix="rmb" />
    <Input placeholder="default size" suffix="rmb123">
      <template #prefix>
        <span>$</span>
      </template>
      <template #suffix>
        <span>rmb</span>
      </template>
    </Input>
  </DemoBlock>

  <DemoBlock title="addonBefore & isAddonAfter" col>
    <Input addon-before="http://" placeholder="default size" />
    <Input addon-after=".com" placeholder="default size" />
    <Input addon-before="http://" placeholder="default size" addon-after=".com" />
    <Input placeholder="default size">
      <template #addonBefore>
        <span>http://</span>
      </template>
      <template #addonAfter>
        <span>.com</span>
      </template>
    </Input>
  </DemoBlock>

  <DemoBlock title="Disabled " col>
    <Input placeholder="Disabled" disabled />
    <Input
      disabled
      prefix="i-carbon:user-avatar"
      placeholder="default size"
      suffix="i-carbon:customer"
    />
    <Input disabled addon-before="http://" placeholder="default size" />
    <TextArea disabled />
  </DemoBlock>

  <DemoBlock title="Password" col>
    <Input v-model="password" placeholder="Disabled" :password="isPasssword" />
    <div class="flex-center gap-1">
      <InputPassword v-model:visible="visible" @change="handleChange">
        <template #suffix>
          <span>123</span>
        </template>
      </InputPassword>
      <Button type="primary" @click="visible = !visible">
        {{ visible }}
      </Button>
    </div>
  </DemoBlock>

  <DemoBlock title="Clearable" col>
    <Input
      clearable
      placeholder="Disabled"
      @clear="handleClearable"
    />
  </DemoBlock>

  <DemoBlock title="TextArea" col>
    <TextArea />
  </DemoBlock>

  <DemoBlock title="TextArea resize " col>
    <TextArea resize />
  </DemoBlock>
</template>
