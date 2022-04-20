import React from 'react'
import { useSelector } from 'react-redux'

//store.ui för att nå den slicen
//store.ui.isLoading då det är initialState som då är antingen falsk till att börja med
//men när api (fetchen) hämtas kommer det ta 1 sek cirkus och då finns det inget att mappa

const Loading = () => {
    const isLoading = useSelector((store) => store.ui.isLoading)
    
    return isLoading && <p>Un momento por favor</p>
}

export default Loading