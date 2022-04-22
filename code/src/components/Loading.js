import React from "react";
import { useSelector } from "react-redux";
import { LoadingWrapper, Mario } from "./Style"

const Loading = () => {
    const loading = useSelector((state) => state.ui.loading)
    
    return(
        <LoadingWrapper>
             
        {loading && (
            <>
            Loading...
            <Mario class="icon-list">
            <i class="nes-mario"></i>
            <br></br><br></br><br></br>
           
          </Mario>
          </>
        )}
        </LoadingWrapper>            
        )
}

export default Loading