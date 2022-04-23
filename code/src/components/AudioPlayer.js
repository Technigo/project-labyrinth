import React, { useState, useEffect } from "react"
import styled from "styled-components"

import winSound from "./Assets/endgame2.mp3"
import mutedIcon from "./Assets/muted.svg"
import unmutedIcon from "./Assets/unmuted.svg"



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
    /* background: transparent;
    filter: invert(100%); */
` 

const UnmutedImage = styled.img`
    width: 35px;
    height: 35px;
    /* background: transparent;
    filter: invert(100%); */
`

const AudioPlayer = ({ sound }) => {
    const [playing, toggle] = useAudio(sound)

    // const toggleIcon = () => {
    //     if (playing) {
    //         return <mutedImage></mutedImage>
    //     }
    //     return <unmutedImage></unmutedImage>
    // }

    return (
        <>
        <SoundButton onClick={toggle}>{playing ? <MutedImage src={unmutedIcon}></MutedImage> : <UnmutedImage src={mutedIcon}></UnmutedImage>}</SoundButton>
        </>
    )
    
}

export default AudioPlayer