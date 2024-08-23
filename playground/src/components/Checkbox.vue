<script setup lang="ts">
  import type { CheckboxGroupChangeEvent, CheckboxGroupProps, LtComponentSize } from '@lite-ui/ui'

  import { ref } from 'vue'
  import { Button, Checkbox, CheckboxGroup } from '@lite-ui/ui'

  import DemoBlock from './DemoBlock.vue'

  defineProps<{ size: LtComponentSize }>()
  const check = ref(false)
  const checked = ref(true)
  const vchecked = ref(true)
  function handleChange(val: boolean | CheckboxGroupChangeEvent) {
    console.log('val', val)
  }

  const options = ['Apple', 'Pear', 'Orange']
  const options1: CheckboxGroupProps['options'] = [{ label: 'Apple', value: '0' }, { label: 'Pear', value: 'Pear' }, { label: 'Orange', value: 'Orange' }]
  const options2 = [{ label: 'Apple', value: 'Apple', disabled: true }, { label: 'Pear', value: 'Pear', readonly: true }, { label: 'Orange', value: 'Orange' }]

  const checkval = ref(['Apple'])
  const checkval1 = ref(['0', 'Orange'])
  const checkval2 = ref(['Apple'])

  const indeterminate = ref(true)
  const checkall = ref(false)
  const options3 = ['Apple', 'Pear', 'Orange']
  const checkva3 = ref(['Apple'])
  function handleCheckAllChange(val: boolean) {
    console.log('val', val)
    checkva3.value = val ? [...options3] : []
    indeterminate.value = false
  }
  function handleCheckedGroupChange(val: CheckboxGroupChangeEvent) {
    const checkedCount = val.length
    checkall.value = checkedCount === options3.length
    indeterminate.value = checkedCount > 0 && checkedCount < options3.length
  }

  const modelCheck = ref(true)
  const checkvalmodel = ref(['Apple'])
</script>

<template>
  <Checkbox :model-value="true" readonly @change=" modelCheck = true">
    Checkbox
  </Checkbox>
  <DemoBlock title="label">
    <Button size="small" type="link" @click="checked = !checked">
      checked:{{ checked }}
    </Button>

    <Checkbox
      v-model="vchecked"
      :size="size"
      :readonly="checked"
      @change="handleChange"
    >
      Checkbox v-model {{ vchecked }}
    </Checkbox>
  </DemoBlock>
  <DemoBlock title="checked">
    <Checkbox
      :size="size"
      checked
      @change="handleChange"
    >
      checked
    </Checkbox>
    <Checkbox v-model="check" :size="size">
      v-model checked
    </Checkbox>
  </DemoBlock>
  <DemoBlock title="indeterminate">
    <Checkbox :size="size" indeterminate @change="handleChange">
      checked
    </Checkbox>
  </DemoBlock>
  <DemoBlock title="disabled">
    <Checkbox :size="size" disabled>
      checked
    </Checkbox>
    <Checkbox :size="size" :model-value="true" disabled>
      checked
    </Checkbox>
    <Checkbox :size="size" indeterminate disabled>
      checked
    </Checkbox>
  </DemoBlock>

  <DemoBlock title="CheckboxGroup">
    <CheckboxGroup v-model="checkval" :options="options" />
    <span>{{ checkval }}</span>
    <br>
    <CheckboxGroup v-model="checkval1 " :options="options1" @change="handleChange" />
    <span>{{ checkval1 }}</span>

    <br>
    <CheckboxGroup v-model="checkval2" :options="options2" />
    <span>{{ checkval2 }}</span>
  </DemoBlock>

  <DemoBlock title="Checkbox all">
    <Checkbox v-model="checkall" :indeterminate="indeterminate" @change="handleCheckAllChange">
      Check all
    </Checkbox>
    <br>
    <CheckboxGroup v-model="checkva3" :options="options3" @change="handleCheckedGroupChange" />
    {{ checkva3 }}
  </DemoBlock>

  <DemoBlock title="CheckboxGroup slot">
    <CheckboxGroup v-model="checkvalmodel" @change="handleChange">
      <Checkbox value="Apple">
        Apple
      </Checkbox>
      <Checkbox :value="0">
        Pear
      </Checkbox>
      <Checkbox value="or">
        Orange
      </Checkbox>
    </CheckboxGroup>
    <span>{{ checkvalmodel }}</span>
  </DemoBlock>
</template>
