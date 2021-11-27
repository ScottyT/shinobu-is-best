<template>
  <div class="main">
    <!-- <div @click="updateHeadline">
      <h1>{{$headline(headline !== '' ? headline : 'is lewdable')}}</h1>
    </div> -->
    <Slideshow columnStyle="--two-column" :headline="$headline('is cute!!!')" message="best Girl"/>
    <div class="content-blocks">
      <h2 class="content-blocks__header">Reasons why she is the Best!!</h2>
      <div class="content-blocks__content">
        <ContentBlocks :columns="3" v-for="col in cols" :key="col.heading" hasImage>
          <template v-slot:image>
            <img :src="col.image" />
          </template>
          <template v-slot:heading>
            <h3>{{col.heading}}</h3>
          </template>
        </ContentBlocks>
      </div>
    </div>
    
    <!--Use this when I use pages/ dir. <NuxtPage /> -->
    <!-- <NuxtWelcome/> -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      headline: "",
      image1: "/shinobu-11.jpg",
      image2: "/shinobu-10.jpg",
      image3: "/shinobu-9.jpg",
      cols: [
        {heading: "Reason 1", content: "", image: "/shinobu-11.jpg"},
        {heading: "Reason 2", content: "", image: "/shinobu-10.jpg"},
        {heading: "Reason 3", content: "", image: "/shinobu-9.jpg"},
      ]
    }
  },
  mounted() {
    this.headline = this.$headline('is cute!!!')
  }
}
</script>