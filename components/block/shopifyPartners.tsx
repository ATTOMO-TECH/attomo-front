import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import shopifyLogo from '../../public/shopify-logo.png';
import { fadeInUp } from '../animations/animations';
import { getLocale } from '../../public/locales/getLocale';

const PartnerSection = styled.section`
  display: flex;
  align-items: center;
  border-radius: 1rem;
  gap: 10rem;
  margin: 10rem 0;

  @media (max-width: 1150px) {
    flex-direction: column;
    gap: 2rem;
    text-align: center;
  }
`;

const LogoWrapper = styled.div`
  width: 400px;

  @media (max-width: 768px) {
    width: 280px;
  }
`;

const PartnerText = styled.p`
  font-size: 1.5rem;
  font-weight: 200;
  line-height: 1.6;
  font-family: 'Merriweather Sans', sans-serif;
  color: white;
`;

type Props = {
  locale?: string;
};

export default function ShopifyPartner({ locale }: Props) {
  const translate = getLocale(locale);

  return (
    <motion.div
      variants={fadeInUp}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.3 }}>
      <PartnerSection>
        <Link href="/shopify-partners">
          <LogoWrapper>
            <Image
              src={shopifyLogo}
              alt="Shopify Logo"
              width={400}
              height={120}
              className="w-full h-auto cursor-pointer"
            />
          </LogoWrapper>
        </Link>
        <PartnerText>{translate.shopifyPartnerComponent[0].text}</PartnerText>
      </PartnerSection>
    </motion.div>
  );
}
