import React from 'react' 
import { useSelector } from 'react-redux'

const Loading = () => {
const Loader = useSelector((store) => store.ui.isLoading)

return (
    <>
        {Loader && <div> Loading ...</div>}
    </>
)
}

export default Loading