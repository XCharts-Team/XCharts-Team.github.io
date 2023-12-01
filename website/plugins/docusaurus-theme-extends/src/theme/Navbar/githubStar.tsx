import BrowserOnly from '@docusaurus/BrowserOnly';
import React, { useEffect, useState } from 'react';

import StarIcon from './star.svg';
import GithubIcon from './github.svg';

let globalstars = ''

export const GithubStars = () => {
  const [star, setStar] = useState(globalstars);
  useEffect(() => {
    if (!globalstars) {
      fetch('https://api.github.com/repos/XCharts-Team/XCharts')
      .then((response) => response.json())
      .then((data) => {
        let stars;
        if (data.stargazers_count) {
          stars = (data.stargazers_count / 1000).toFixed(1) + ' k';
        } else {
          stars = '2.8k';
        }
        globalstars = stars
        setStar(stars);
      });
    }
  }, []);

  return (
    <a
      href="https://github.com/XCharts-Team/XCharts"
      target="_blank"
      className="hover:no-underline"
    >
      <div className="flex text-grey-4 rounded-sm text-caption">
        <div className="p-1 px-1 flex items-center">
          <a href="https://github.com/XCharts-Team/XCharts" target="_blank">
            <GithubIcon width={20} height={20} />
          </a>
          
        </div>
        <div className="p-1 px-0 flex items-center">
          <StarIcon height={20} width={20} />
          <div className='p-4 px-0'><h5>{star}</h5></div>
        </div>
      </div>
    </a>
  );
};
