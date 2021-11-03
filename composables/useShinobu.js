import { useState } from '#app'
const state = ref({
    images: [],
    currentImage: ""
})
const count = ref(1)
const inc = reactive({ count })
const useImages = () => {
    for (var i = 1; i <= 8; i++) {
        state.value.images.push(`/shinobu-${i}.jpg`)
    }
}
const setCurrentImage = (i) => {
    state.value.currentImage = state.value.images[i-1]
}
const incrementImage = () =>  {
    setCurrentImage(inc.count)
    setTimeout(() => {
        if (inc.count === state.value.images.length - 1) {
            inc.count = 1
        } else {
            inc.count++
        }
        incrementImage()
        
    }, 5000)
}

export default {
    state: readonly(state.value),
    useImages,
    incrementImage,
    inc
}