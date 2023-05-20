import React from 'react';
import { css } from '@emotion/react';
import { SyncLoader } from 'react-spinners';

const Loader = () => {
  const override = css`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  `;

  return (
    <div  style={{display:'flex',justifyContent:'center',alignItems:'center'}} className="loader-container">
      <SyncLoader color="#000" css={override} size={15} />
    </div>
  );
};

export default Loader;
