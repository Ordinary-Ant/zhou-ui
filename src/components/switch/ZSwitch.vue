<script lang="ts">
  export default { name: "ZSwitch" };
</script>
<script setup lang="ts">
import { computed } from "vue";
import { string, bool } from "vue-types";
import { debounce } from 'lodash-es'

const props = defineProps({
  start_color: string().def(""),
  end_color: string().def(""),
  disabled: bool().def(false),
  icon: string().def(""),
  loading: bool().def(false),
  size: string().def(""),
  modelValue: bool()
});

const emits = defineEmits(['update:modelValue', 'change'])


const switch_flag = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emits('update:modelValue', value)
  }
})

// 自定义背景色
const custom_bg = computed(() => {
  if (switch_flag.value && props.start_color) {
    return { backgroundColor: `${props.start_color}`}
  } else if (!switch_flag.value && props.end_color) {
    return { backgroundColor: `${props.end_color}`}
  }
})

// 切换
const triggle = debounce(() => {
  switch_flag.value = !switch_flag.value
  emits('change', switch_flag.value)
}, 100)

</script>

<template>
  <div 
    :class="['z-switch', `z-switch--${switch_flag}`]" 
    :style="custom_bg"
    @click="triggle"
  >
    <div :class="['z-switch--circle', switch_flag ? 'true' : 'false']"></div>
  </div>
</template>

<style lang="scss" scoped>
.z-switch {
  width: 64px;
  height: 32px;
  border-radius: 20px;
  padding: 4px;
  box-sizing: border-box;
  cursor: pointer;
  box-shadow: 0 0 2px rgba($color: #000000, $alpha: .5);
  transition: all .7s;
  &--true {
    background: #67c23a;
  }
  &--false {
    background: #ccc;
  }
  &--circle {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: #fff;
    transition: all .5s;
    box-shadow: 0 0 2px rgba($color: #000000, $alpha: .5);
    &.false {
      transform: translateX(0);
    }
    &.true {
      transform: translateX(130%);
    }
  }
  &:hover {
    box-shadow: 0 0 0 4px rgba($color: #bfdbfe, $alpha: .5);
  }
  &:active {
    box-shadow: 0 0 0 4px rgba($color: #bfdbfe, $alpha: .5);
  }
  &:focus {
    box-shadow: 0 0 0 4px rgba($color: #bfdbfe, $alpha: .5);
  }
}
</style>