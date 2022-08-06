<script setup lang="ts">

const handle = (e:string):void => {
  console.log(e);
}
</script>

<template>
  <ZButton @click="handle(123)" text type="success" disabled size="large">123456</ZButton>
</template>

<style>
</style>
