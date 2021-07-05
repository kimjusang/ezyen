import React from 'react';
import Icon1 from '../../images/svg-1.svg';
import Icon2 from '../../images/svg-3.svg';
import Icon3 from '../../images/svg-5.svg';
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
} from './ServicesElements';

const Services = () => {
  return (
    <ServicesContainer id='services'>
      <ServicesH1>제공 서비스</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>소비 절약</ServicesH2>
          <ServicesP>
            불필요한 고액의 수수료를 절약하고 전체적인 소득증대 효과를 보실 수
            있습니다.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>24시간 상담센터</ServicesH2>
          <ServicesP>
            시간 제약이 많은 은행업무를 EZMONEY는 24시간 가능하게 합니다.{' '}
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>프리미엄 혜택</ServicesH2>
          <ServicesP>
            행사기간 중 가입 하시면 즉시 프리미엄 멤버쉽 혜택을 통해 5% 캐쉬백을
            드립니다.
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
