import React from "react"
import LottieView from "lottie-react-native"

const Lottie = () => {
    return (
        <LottieView
        loop={true}
        source={require('../assets/31366-fun-rainbow.json')}
        autoPlay
        style={{ width: 300, height: 300}}
      />
    )
}

export default Lottie