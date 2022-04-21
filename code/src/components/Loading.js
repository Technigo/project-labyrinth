import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components/macro'

import LoaderAnimation from './animation'

/*const LoaderAnimation = styled.p`
  background-color: #000;
  
`*/

//store.ui för att nå den slicen
//store.ui.isLoading då det är initialState som då är antingen falsk till att börja med
//men när api (fetchen) hämtas kommer det ta 1 sek cirkus och då finns det inget att mappa

const Loading = () => {
    const isLoading = useSelector((store) => store.ui.isLoading)
    
    return isLoading && <LoaderAnimation/>
}

export default Loading