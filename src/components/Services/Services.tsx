import { Typography } from '@material-ui/core';
import React from 'react';
import './Services.css';
import { ButtonCustom } from '../shared/ButtonCustom';
import Card from './Card';
import searchDoctor from '../../assets/search-doctor.svg';
import onlinePharmacy from '../../assets/online-pharmacy.svg';
import consultation from '../../assets/consultation.svg';
import detailsInfo from '../../assets/details-info.svg';
import emergencyCare from '../../assets/emergency-care.svg';
import tracking from '../../assets/tracking.svg';
import dotsBlue from '../../assets/bg-dots-blue.svg';
import dropLeft from '../../assets/bg-drop-left.svg';

export function Services() {
  return (
    <section className="services">
      <Typography variant="h2" className="services__header">
        Our services
      </Typography>
      <hr/>
      <Typography variant="body1" className="services__header-body">
        We provide to you the best choiches for you. Adjust it to your health needs and make sure your undergo treatment with our highly qualified doctors you can consult with us which type of service is suitable for your health
      </Typography>
      <div className="services__cards services__bg-container">
        {/* background elements */}
          <img src={dotsBlue} alt="" className="services__dots-blue" />
          <img src={dropLeft} alt="" className="services__drop" />
        {/* /////////////////// */}
        <Card
          img={searchDoctor}
          title="Search doctor"
          body="Choose your doctor from thousands of specialist, general, and trusted hospitals"
        />
        <Card
          img={onlinePharmacy}
          title="Online pharmacy"
          body="Buy  your medicines with our mobile application with a simple delivery system"
        />
        <Card
          img={consultation}
          title="Consultation"
          body="Free consultation with our trusted doctors and get the best recomendations"
        />
        <Card
          img={detailsInfo}
          title="Details info"
          body="Free consultation with our trusted doctors and get the best recomendations"
        />
        <Card
          img={emergencyCare}
          title="Emergency care"
          body="You can get 24/7 urgent care for yourself or your children and your
          lovely family"
        />
        <Card
          img={tracking}
          title="Tracking"
          body="Track and save your medical history and health data "
        />
      </div>
      <div className="services__button">
        <ButtonCustom buttonStyle="secondary">
            Learn more
        </ButtonCustom>
      </div>
    </section>
  );
}