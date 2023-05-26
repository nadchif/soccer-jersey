import React from 'react';

import SoccerJersey from '../index';
import {DrawSoccerJerseyProps} from '../types';

export const ReactTeamPage = (props: DrawSoccerJerseyProps) => {
  const jerseyImgSrc = SoccerJersey.draw(props); //

  return (
    <div style={{textAlign: 'center'}}>
      <img
        src={jerseyImgSrc}
        style={{display: 'inline-block', maxWidth: 480}}
      />
    </div>
  );
};
