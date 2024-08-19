<script setup lang="ts">
  import type { InputProps } from '@lite-ui/ui'

  import { ref } from 'vue'
  import { Button, Input, InputPassword, TextArea } from '@lite-ui/ui'

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

  const sizeList: InputProps['size'][] = ['small', 'default', 'large']
  const size = ref(sizeList[1])
  const textareaValue = ref('啊大姐说的安静的卡进度加快很多')
</script>

<template>
  <div flex="~">
    <Button
      v-for="item in sizeList"
      :key="item"
      size="small"
      @click="size = item"
    >
      {{ item }}
    </Button>
  </div>
  <div border-b="~ solid red">
    <Input :size="size" placeholder="Please Input" />
    <Input :size="size" addon-before="搜索" placeholder="default size" />
    <Input
      :size="size"
      prefix="i-carbon:user-avatar"
      placeholder="default size"
      suffix="i-carbon:customer"
    />
    <Input :size="size" placeholder="Please Input" />
  </div>

  <div flex="~ col">
    <Input :size="size" placeholder="Please Input" />
    <Input :size="size" addon-before="搜索" placeholder="default size" />
    <Input
      :size="size"
      prefix="i-carbon:user-avatar"
      placeholder="default size"
      suffix="i-carbon:customer"
    />
    <Input :size="size" placeholder="Please Input" />
  </div>

  <DemoBlock title="Prefix & Suffix">
    <Input
      :size="size"
      prefix="i-carbon:user-avatar"
      placeholder="default size"
      suffix="i-carbon:customer"
    />
    <Input
      :size="size"
      prefix="$"
      placeholder="default size"
      suffix="rmb"
    />
    <Input :size="size" placeholder="default size" suffix="rmb123">
      <template #prefix>
        <span>$</span>
      </template>
      <template #suffix>
        <span>rmb</span>
      </template>
    </Input>
  </DemoBlock>

  <DemoBlock title="addonBefore & isAddonAfter" col>
    <Input :size="size" addon-before="http://" placeholder="default size" />
    <Input :size="size" addon-after=".com" placeholder="default size" />
    <Input
      :size="size"
      addon-before="http://"
      placeholder="default size"
      addon-after=".com"
    />
    <Input :size="size" placeholder="default size">
      <template #addonBefore>
        <span>http://</span>
      </template>
      <template #addonAfter>
        <span>.com</span>
      </template>
    </Input>
  </DemoBlock>

  <DemoBlock title="Disabled " col>
    <Input :size="size" placeholder="Disabled" disabled />
    <Input
      :size="size"
      disabled
      prefix="i-carbon:user-avatar"
      placeholder="default size"
      suffix="i-carbon:customer"
    />
    <Input
      :size="size"
      disabled
      addon-before="http://"
      placeholder="default size"
    />
    <TextArea disabled />
  </DemoBlock>

  <DemoBlock title="Password" col>
    <Input
      v-model="password"
      :size="size"
      placeholder="Disabled"
      :password="isPasssword"
    />

    <div>
      <InputPassword
        v-model:visible="visible"
        :size="size"
        @change="handleChange"
      >
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
      :size="size"
      clearable
      placeholder="Disabled"
      @clear="handleClearable"
    />
  </DemoBlock>

  <DemoBlock title="TextArea">
    <TextArea v-model="textareaValue" />
  </DemoBlock>

  <DemoBlock title="TextArea resize ">
    <TextArea resize />
  </DemoBlock>
</template>
