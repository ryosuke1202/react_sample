import React, { useState } from 'react';
import { useEffect } from 'react';
import ColorfullMessage from './components/ColorfullMessage';

const App = () => {
  const [num, setNum] = useState(0);
  const [faseFlg, setFaseFlg] = useState(true);

  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const onClickChangeFlg = () => {
    setFaseFlg(!faseFlg);
  }
  useEffect(() => {
    if (num % 3 === 0) {
      faseFlg || setFaseFlg(true);
    }
    if (num % 3 !== 0) {
      faseFlg && setFaseFlg(false);
    }
  }, [num]);
  return (
    <>
      <h1>こんにちは</h1>
      <ColorfullMessage color="blue">お元気ですか？</ColorfullMessage>
      <ColorfullMessage color="pink">元気です</ColorfullMessage>
      <button onClick={onClickCountUp}>カウントアップ</button><br />
      <button onClick={onClickChangeFlg}>on/off</button>
      <p>{num}</p>
      { faseFlg && <p>顔文字</p> }
    </>
  );
}

export default App;
