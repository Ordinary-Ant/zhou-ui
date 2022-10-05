<script setup lang="ts">
import { ref,watch } from "vue";

const radio_value = ref('1')

const handle = (e:string):void => {
  console.log(e);
}
const flag = ref(false)
watch(() => flag.value, (newValue) => {
  console.log(newValue);
})

const handleChange = (e: boolean) => {
  console.log(e);
}
</script>

<template>
  <ZButton @click="handle('123')" text type="success" size="large">123456</ZButton>
  <ZSwitch
    start_color="#fff"
    end_color="#000"
    v-model="flag"
    @change="handleChange"
  ></ZSwitch>
  <ZRadio value="1" @change="handleChange" v-model="radio_value" border shadow></ZRadio>
  <ZRadio value="2" v-model="radio_value"></ZRadio>
</template>

<style>
</style>
