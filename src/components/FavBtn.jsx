import React, { useState } from 'react';
import favIcon from '../images/whiteHeartIcon.svg';
import favIcon2 from '../images/blackHeartIcon.svg';

function FavBtn() {
  const [fav, setFav] = useState(favIcon);

  function markFav(a, b) {
    if (a === favIcon) {
      b(favIcon2);
    } else {
      b(favIcon);
    }
  }

  return (
    <div>
      <button data-testid="favorite-btn" src={fav} onClick={() => markFav(fav, setFav)}>
        <img alt="fav" width="25 px" />
      </button>
    </div>
  );
}

export default FavBtn;
