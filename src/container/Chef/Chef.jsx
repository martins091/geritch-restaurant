import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className='app__wrapper_img app__wrapper_img-reverse'>
      <img src={images.chef} alt="chef" />
    </div>

    <div className='app__wrapper_info'>
        <SubHeading title="chef's word" />
        <h1 className='headtext__cormorant'>What We Believe In</h1>

        <div className='app__chef-content'>
          <div className='app__chef-content_quote'>
            <img src={images.quote} alt="quote" />
            <p className='p__opensans'> Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
          </div>
        <p className='p__opensans'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam magni soluta possimus illum, earum fuga veniam consectetur deserunt, corrupti saepe culpa distinctio eveniet impedit alias in vel ipsam accusamus modi?</p>
        </div>

        <div className='app__chef-sign'>
          <p>Kevin Luo</p>
          <p className='p__opensans'>Chef & Founder</p>
          <img src={images.sign} alt="sign" />
        </div>
    </div>
  </div>
);

export default Chef;
