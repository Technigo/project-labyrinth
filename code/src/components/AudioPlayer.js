import React, { useState, useEffect } from "react"
import styled from "styled-components"

import winSound from "./Assets/endgame2.mp3"

const SoundButton = styled.button`
    appearance: none;
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

    return (
        <>
        <button onClick={toggle}>{playing ? "Pause" : "Play"}</button>
        </>
    )
    
}

export default AudioPlayer