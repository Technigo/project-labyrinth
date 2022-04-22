import React, { useState, useEffect } from "react"
import styled from "styled-components"

import winSound from "./Assets/endgame2.mp3"
import mutedIcon from "./Assets/muted.svg"
import unmutedIcon from "./Assets/unmuted.svg"

const SoundButton = styled.button`
    appearance: none;
`

const mutedImage = styled.img`
    width: 40px;
    height: 40px;
    filter: invert(100%);
` 

const unmutedImage = styled.img`
    width: 40px;
    height: 40px;
    filter: invert(100%);
`

const useAudio = () => {
    const sound = winSound
    const [audio] = useState(new Audio(sound))
    const [playing, setPlaying] = useState(false)

    const toggle = () => setPlaying(!playing)

    useEffect(() => {
        playing ? audio.play() : audio.pause()
    }, [audio, playing])

    useEffect(() => {
        audio.addEventListener("ended", () => setPlaying(false))
        return () => {
            audio.removeEventListener("ended", () => setPlaying(false))
        }
    }, [audio])
    return [playing, toggle]
}

const AudioPlayer = ({ sound }) => {
    const [playing, toggle] = useAudio(sound)

    // const toggleIcon = () => {
    //     if (playing) {
    //         return <img src={mutedIcon} alt="muted icon" />
    //     }
    //     return <img src={unmutedIcon} alt="unmuted icon" />
    // }

    return (
        <>
        <SoundButton onClick={toggle}>{playing ? <mutedImage src={mutedIcon}></mutedImage> : <unmutedImage src={unmutedIcon}></unmutedImage>}</SoundButton>
        </>
    )
    
}

export default AudioPlayer