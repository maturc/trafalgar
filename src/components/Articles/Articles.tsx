import { Typography } from '@material-ui/core';
import React from 'react';
import Article from './Article';
import './Articles.css';
import articleImage1 from '../../assets/article-image-1.png';
import articleImage2 from '../../assets/article-image-2.png';
import articleImage3 from '../../assets/article-image-3.png';
import { ButtonCustom } from '../shared/ButtonCustom';
import dotsBlue from '../../assets/bg-dots-blue.svg';
import dropRight from '../../assets/bg-drop-right.svg';

export function Articles() {
  return (
    <div className="articles">
      <Typography variant="h2">
        Check out our latest article
      </Typography>
      <hr />
      <div className="articles__container articles__bg-container">
        {/* background elements */}
          <img src={dotsBlue}  alt="" className="articles__dots-blue" />
          <img src={dropRight} alt="" className="articles__drop" />
        {/* /////////////////// */}
        <Article
          img={articleImage1}
          alt="Doctor taking a blood sample from a patient"
          title="Disease detection, check up in the laboratory"
          body="In this case, the role of the health laboratory is very important to do a disease detection..."
        />
        <Article
          img={articleImage2}
          alt="Doctor using a microscope"
          title="Herbal medicines that are safe for consumption"
          body="Herbal medicine is very widely used at this time because of its very good for your health..."
        />
        <Article
          img={articleImage3}
          alt="Patient with a face mask"
          title="Natural care for healthy facial skin"
          body="A healthy lifestyle should start from now and also for your skin health. There are some..."
        />
      </div>
      <div className="articles__button">
        <ButtonCustom>View all</ButtonCustom>
      </div>
    </div>
  );
}