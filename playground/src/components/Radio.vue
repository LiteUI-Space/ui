<script setup lang="ts">
  import type { CheckboxGroupProps, RadioChangeEvent } from '@lite-ui/ui'

  import { ref } from 'vue'
  import { Radio, RadioGroup } from '@lite-ui/ui'

  import DemoBlock from './DemoBlock.vue'

  const options = ['Apple', 'Pear', 'Orange']
  const options1: CheckboxGroupProps['options'] = [{ label: 'Apple', value: '0' }, { label: 'Pear', value: 'Pear' }, { label: 'Orange', value: 'Orange' }]
  const options2 = [{ label: 'Apple', value: 'Apple', disabled: true }, { label: 'Pear', value: 'Pear' }, { label: 'Orange', value: 'Orange' }]

  const checkval = ref('Apple')
  const checkval1 = ref('0')
  const checkval2 = ref('Apple')

  function handleChange(val: RadioChangeEvent) {
    console.log('val', val)
  }

  const modelValue = ref('0')
  const slotGroupModdel = ref(true)
  function slotChange(value: RadioChangeEvent) {
    console.log('value slotChange', value)
  }
</script>

<template>
  <Radio @change="handleChange">
    Radio
  </Radio>
  <Radio :model-value="true">
    Radio checked
  </Radio>

  <DemoBlock title="modelvalue">
    <Radio value="test" @change="handleChange">
      model-value
    </Radio>
    <Radio :model-value="true" disabled>
      disabled
    </Radio>
  </DemoBlock>

  <DemoBlock title="Disabled">
    <Radio disabled @change="handleChange">
      disabled
    </Radio>
    <Radio :model-value="true" disabled>
      disabled
    </Radio>
  </DemoBlock>

  <DemoBlock title="RadioGroup">
    <div>{{ options }}</div>
    <RadioGroup v-model="checkval" :options="options" />
    <span>{{ checkval }}</span>
    <br>
    <div>{{ options1 }}</div>
    <RadioGroup v-model="checkval1 " :options="options1" @change="handleChange" />
    <span>{{ checkval1 }}</span>

    <br>
    <div>{{ options2 }}</div>
    <RadioGroup v-model="checkval2" :options="options2" />
    <span>{{ checkval2 }}</span>
  </DemoBlock>

  <DemoBlock title="RadioGroup">
    <RadioGroup v-model="modelValue">
      slotGroupModdel:{{ slotGroupModdel }}
      <Radio v-model="slotGroupModdel" value="0" @change="slotChange">
        Apple
      </Radio>
      <Radio value="Pear">
        Pear
      </Radio>
      <Radio :value="2">
        orange
      </Radio>
    </RadioGroup>
    <span> {{ modelValue }}</span>
  </DemoBlock>
</template>
