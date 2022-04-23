import React, { useState } from "react"
import styled from "styled-components/macro"
import useSound from "use-sound"

import winSound from "./Assets/endgame2.mp3"
import mutedIcon from "./Assets/muted.svg"
import unmutedIcon from "./Assets/unmuted.svg"


const SoundButton = styled.button`
    position: absolute;
    top: 2rem;
    right: 2rem;
    border: none;
    background-color: transparent;
`

const MutedImage = styled.img`
    width: 35px;
    height: 35px;
` 

const UnmutedImage = styled.img`
    width: 35px;
    height: 35px;
`


const AudioPlayer = () => {
    const sound = winSound
    const [play, {pause}] = useSound(sound, { volume: 0.4 })
    const [playing, setPlaying] = useState(false)

    const toggleSound = () => {
        if (playing === false) {
            setPlaying(true)
            play()
        } else {
            setPlaying(false)
            pause()
        }
    }

    return <SoundButton onClick={() => toggleSound()}>{playing ? <MutedImage src={unmutedIcon} alt="muted icon"></MutedImage> : <UnmutedImage src={mutedIcon} alt="unmuted icon"></UnmutedImage>}</SoundButton>

}

export default AudioPlayer
