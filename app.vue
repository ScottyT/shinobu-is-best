<template>
  <div>
    <div @click="updateHeadline">
      <h1>{{$headline(headline !== '' ? headline : 'is lewdable')}}</h1>
    </div>
    <Slideshow message="best Girl and breedable"/>
    <!-- Remove this component to get started! -->
    <NuxtWelcome/>
  </div>
</template>
<script setup>
const headline = ref("")
const updateHeadline = () => {
  headline.value = "is cute!!"
}
</script>