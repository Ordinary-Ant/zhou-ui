<script lang="ts">
    export default { name: "ZRadio" };
  </script>
  <script setup lang="ts">
  import { computed, nextTick } from "vue";
  import { bool, any } from "vue-types";
  import { debounce } from 'lodash-es'
  
  const props = defineProps({
    disabled: bool().def(false),
    value: any(),
    modelValue: any(),
    shadow: bool().def(false),
    border: bool().def(false)
  });
  
  const emits = defineEmits(['update:modelValue', 'change'])
  
  const check_value = computed({
    get() {
      return props.modelValue
    },
    set(value) {
      emits('update:modelValue', value)
    }
  })
  
  // 切换
  const checked = debounce(() => {
    if (!props.value) throw Error('radio 未绑定 value') 
    else if (check_value.value == props.value) return
    check_value.value = props.value
    nextTick(() => {
      emits('change', check_value.value)
    })
  }, 100)
  
  </script>
  
  <template>
    <div 
      :class="['z-radio', props.border && 'border', props.shadow && 'shadow']" 
      @click="checked"
    >
      <span :class="['z-radio--check', check_value == props.value && 'checked' ]"></span>
      <slot>{{ props.value }}</slot>
    </div>
  </template>
  
  <style lang="scss" scoped>
  .z-radio {
    display: inline-block;
    cursor: pointer;
    transition: all .7s;
    font-size: 14px;
    line-height: 22px;
    &--check {
      display: inline-block;
      vertical-align: top;
      width: 22px;
      height: 22px;
      border-radius: 50%;
      border: 1px solid #bfdbfe;
      padding: 2px;
      box-sizing: border-box;
      margin-right: 8px;
      &:hover{
        box-shadow: 0 0 5px 1px rgba($color: #bfdbfe, $alpha: 1.0);
      }
      &.checked{
        border-width: 4px;
      }
    }
    &.border{
      padding: 5px;
      border: 1px solid rgba($color: #bfdbfe, $alpha: .2);
      border-radius: 5px;
      &:hover {
        border-color: #bfdbfe;
      }
    }
    &.shadow{
      box-shadow: 0 0 5px 1px rgba($color: #bfdbfe, $alpha: 1.0);
    }
  }
  </style>