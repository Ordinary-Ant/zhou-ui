<script lang="ts">
import { computed } from "vue";
export default { name: "ZButton" };
</script>

<script setup lang="ts">
import { string, bool } from "vue-types";

const props = defineProps({
  type: string().def(""),
  text: bool().def(false),
  plain: bool().def(false),
  circle: bool().def(false),
  round: bool().def(false),
  disabled: bool().def(false),
  icon: string().def(""),
  loading: bool().def(false),
  size: string().def(""),
  color: string().def("")
});

const border_type = computed(() => {
  return (
    (props.plain && "plain") ||
    (props.round && "round") ||
    (props.circle && "circle")
  )
})

</script>

<template>
  <button
    class="z-button"
    :class="[
      props.type && `z-button--${props.type}`,
      props.size && `z-button--${props.size}`,
      props.disabled && `is_disabled--${props.type}`,
      `is_${border_type}`
    ]"
    :disabled="props.disabled"
  >
    <slot></slot>
  </button>
</template>

<style scoped lang="scss">
.z-button {
  @include base-button;
  padding: 8px 10px;
  border: 1px solid #4d4c4f;
  background: transparent;
  border-radius: 4px;
  text-align: center;
  color: #cfd3dc;
  font-size: 14px;
  &:hover {
    border-color: #213d5b;
    color: #409eff;
    background-color: rgba(#18222c, 0.5);
  }
  &--large {
    font-size: 16px;
    padding: 10px 12px;
  }
  &--small {
    font-size: 12px;
    padding: 6px 8px;
  }
  &--primary {
    color: #fff;
    background: #409eff;
    border: none;
    &:hover {
      background: #3375b9;
      color: #fff;
    }
  }
  &--success {
    color: #fff;
    background: #67c23a;
    border: none;
    &:hover {
      background: #4e8e2f;
      color: #fff;
    }
  }
  &--info {
    color: #fff;
    background: #909399;
    border: none;
    &:hover {
      background: #6b6d7e;
      color: #fff;
    }
  }
  &--warning {
    color: #fff;
    background: #e6a23c;
    border: none;
    &:hover {
      background: #a77730;
      color: #fff;
    }
  }
  &--danger {
    color: #fff;
    background: #f56c63;
    border: none;
    &:hover {
      background: #b25252;
      color: #fff;
    }
  }
}
.is_plain {
  border-radius: 10px;
}
.is_round {
  border-radius: 20px;
}
.is_circle {
  border-radius: 50%;
}
.is_disabled {
  background-color: transparent;
  cursor: not-allowed;
  &:hover {
    background-color: transparent;
  }
  &--primary {
    background-color: #2a598a;
    cursor: not-allowed;
    &:hover {
      background-color: #2a598a;
    }
  }
  &--success {
    background-color: #3e6b27;
    cursor: not-allowed;
    &:hover {
      background-color: #3e6b27;
    }
  }
  &--info {
    background-color: #525457;
    cursor: not-allowed;
    &:hover {
      background-color: #525457;
    }
  }
  &--warning {
    background-color: #7d5b28;
    cursor: not-allowed;
    &:hover {
      background-color: #7d5b28;
    }
  }
  &--danger {
    background-color: #854040;
    cursor: not-allowed;
    &:hover {
      background-color: #854040;
    }
  }
}
</style>
