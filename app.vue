<template>
  <div class="main">
    <!-- <div @click="updateHeadline">
      <h1>{{$headline(headline !== '' ? headline : 'is lewdable')}}</h1>
    </div> -->
    <Slideshow columnStyle="--two-column" :headline="$headline('is cute!')" message="best Girl and breedable"/>
    <!--Use this when I use pages/ dir. <NuxtPage /> -->
    <!-- <NuxtWelcome/> -->
  </div>
</template>
<script setup>
const headline = ref("")
const updateHeadline = () => {
  headline.value = "is cute!!"
}
</script>