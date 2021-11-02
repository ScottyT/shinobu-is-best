import { useState } from '#app'
const state = ref({
    images: [],
    currentImage: ""
})
const count = ref(0)
const inc = reactive({ count })
const useImages = () => {
    for (var i = 1; i < 8; i++) {
        state.value.images.push(`/shinobu-${i}.jpg`)
    }
}
const setCurrentImage = (i) => {
    useImages()
    state.value.currentImage = state.value.images[Math.abs(i)]
}
const incrementImage = () =>  {
    setCurrentImage(inc.count)
    console.log(state.value.currentImage)
    setTimeout(() => {
        //var currentNum = state.value.incrementer + 1
        
        inc.count++
        if (inc.count == 8) {
            inc.count = 0
        }
        incrementImage()
        
    }, 6000)
}

export default {
    state: readonly(state.value),
    useImages,
    incrementImage,
    inc
}