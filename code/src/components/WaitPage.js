import React from 'react'
import "nes.css/css/nes.min.css"
import styled from 'styled-components'

const Loader = styled.div`
    background-color: white;
    font-size: 17px;
`
function WaitPage() {
    return (
        <div>
            <Loader><i class="nes-octocat animate"></i> Loading....</Loader> 
        </div>
    )
}

export default WaitPage