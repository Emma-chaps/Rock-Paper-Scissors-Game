import React from "react";

type AppProps = {
  userSelection: string;
  iaSelection: string;
  isUserWinning: boolean;
  replay: () => void;
};

const Result = ({
  userSelection,
  iaSelection,
  isUserWinning,
  replay,
}: AppProps) => {
  return (
    <div>
      <div>
        <div>
          <p>You picked</p>
          <img src='' alt='' />
        </div>
        <div>
          <p>The house Picked</p>
          <img src='' alt='' />
        </div>
      </div>
      {isUserWinning ? <p>You Win</p> : <p>You lose</p>}
      <button onClick={replay}>Play again</button>
    </div>
  );
};

export default Result;
