import React from 'react';
import LoadingGif from "../imgs/loading.gif";

export function Loading(): JSX.Element {
  return (
    <div className="loading-gif" >
      <img alt="loading gif" src={LoadingGif} />
    </div>
  )
}

export default Loading;