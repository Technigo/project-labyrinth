import React from 'react' 
import { useSelector } from 'react-redux'

const Loading = () => {
const Loader = useSelector((store) => store.ui.isLoading)

return (
    <>
        {Loader && <div> Loading ...</div>}
        <progress class="nes-progress is-success" value="50" max="100"> </progress>
       
    </>
)
    

}

export default Loading

