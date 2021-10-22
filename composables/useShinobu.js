import { useState } from '#app'
const state = ref({
    images: [],
    incrementer: 0
})
const useImages = () => {
    for (var i = 1; i < 8; i++) {
        state.value.images.push(`/shinobu-${i}.jpg`)
    }
}
const incrementImage = () =>  {
    //var i = 0
    
    console.log("initial:", state.value.incrementer)
    setTimeout(() => {
        //var currentNum = state.value.incrementer + 1
        state.value.incrementer++
        console.log("After increase: ", state.value.incrementer)
        if (state.value.incrementer == 8) {
            state.value.incrementer = 0
            
        }
        incrementImage()
        
    }, 1000)
}

export default {
    state: readonly(state.value),
    useImages,
    incrementImage
}