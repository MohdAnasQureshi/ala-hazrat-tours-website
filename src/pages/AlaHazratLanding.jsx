import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
// Animations
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Color Variables
const colors = {
  primary: "#1B4B59",
  secondary: "#2E8B57",
  accent: "#FFD700",
  white: "#FFFFFF",
  lightGray: "#F8F9FA",
  darkGray: "#666666",
  green: "#28A745",
  orange: "#FF6B35",
};

// Main Container
const Container = styled.div`
  font-family: "Inter", -apple-system, BlinkMacSystemFont, sans-serif;
  line-height: 1.6;
  color: ${colors.darkGray};
`;

// Header
const Header = styled.header`
  background: ${colors.white};
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
  padding: 12px 0;
`;

const HeaderContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 16px;
  }
`;

const Logo = styled.div`
  font-size: 1.8rem;
  font-weight: 800;
  color: ${colors.primary};
  letter-spacing: -0.5px;
`;
const Nav = styled.nav`
  margin-top: 12px;
  a {
    color: #fff;
    margin: 0 18px;
    font-weight: 600;
    text-decoration: none;
    &:hover {
      color: #ffd700;
    }
  }

  @media (max-width: 480px) {
    display: flex;
    flex-direction: column;
    gap: 12px;
    a {
      margin: 0;
      font-size: 1.1rem;
    }
  }
`;
const NavLink = styled.a`
  text-decoration: none;
  color: ${colors.darkGray};
  font-weight: 500;
  transition: color 0.3s ease;

  &:hover {
    color: ${colors.primary};
  }
`;

const ContactButton = styled.button`
  background: ${colors.primary};
  color: ${colors.white};
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: #0f3a47;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

// Hero Section
const Hero = styled.section`
  background: linear-gradient(
    135deg,
    ${colors.primary} 0%,
    ${colors.secondary} 100%
  );
  color: ${colors.white};
  padding: 80px 24px 120px;
  text-align: center;
  position: relative;
  overflow: hidden;
`;

const HeroContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  animation: ${fadeIn} 1s ease-out;
`;

const HeroTitle = styled.h1`
  font-size: 3.2rem;
  font-weight: 800;
  margin-bottom: 24px;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 2.4rem;
  }

  @media (max-width: 480px) {
    font-size: 1.9rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.3rem;
  margin-bottom: 40px;
  opacity: 0.9;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const HeroCTA = styled.button`
  background: ${colors.accent};
  color: ${colors.primary};
  border: none;
  padding: 18px 40px;
  font-size: 1.1rem;
  font-weight: 700;
  border-radius: 50px;
  cursor: pointer;
  transition: transform 0.3s ease;
  box-shadow: 0 8px 25px rgba(255, 215, 0, 0.3);

  &:hover {
    transform: translateY(-3px);
  }

  @media (max-width: 480px) {
    width: 100%;
    padding: 16px 32px;
  }
`;

// Search Form
const SearchSection = styled.section`
  background: ${colors.white};
  padding: 0 24px;
  transform: translateY(-60px);
  margin-bottom: -60px;
`;

const SearchCard = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  background: ${colors.white};
  border-radius: 16px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
  padding: 40px 32px;
`;

const SearchForm = styled.form`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  align-items: end;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-weight: 600;
  margin-bottom: 8px;
  color: ${colors.primary};
  font-size: 0.9rem;
`;

const Input = styled.input`
  padding: 12px 16px;
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${colors.primary};
  }
`;

const Select = styled.select`
  padding: 12px 16px;
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  font-size: 1rem;
  background: ${colors.white};
  cursor: pointer;

  &:focus {
    outline: none;
    border-color: ${colors.primary};
  }
`;

const SearchButton = styled.button`
  background: ${colors.green};
  color: ${colors.white};
  border: none;
  padding: 12px 32px;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: #218838;
  }
`;

// Packages Section
const PackagesSection = styled.section`
  background: ${colors.lightGray};
  padding: 100px 24px;
`;

const SectionContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  font-weight: 800;
  color: ${colors.primary};
  margin-bottom: 16px;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const SectionSubtitle = styled.p`
  text-align: center;
  font-size: 1.2rem;
  color: ${colors.darkGray};
  margin-bottom: 60px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const PackagesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 32px;
`;

const PackageCard = styled.div`
  background: ${colors.white};
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-8px);
  }
`;

const PackageImage = styled.div`
  height: 200px;
  background: linear-gradient(45deg, ${colors.primary}, ${colors.secondary});
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.white};
  font-size: 1.2rem;
  font-weight: 600;
`;

const PackageContent = styled.div`
  padding: 24px;
`;

const PackageTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 700;
  color: ${colors.primary};
  margin-bottom: 12px;
`;

const PackageFeatures = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 20px 0;
`;

const PackageFeature = styled.li`
  padding: 6px 0;
  color: ${colors.darkGray};

  &:before {
    content: "✓";
    color: ${colors.green};
    font-weight: bold;
    margin-right: 8px;
  }
`;

const PackagePrice = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
`;

const Price = styled.span`
  font-size: 1.5rem;
  font-weight: 800;
  color: ${colors.orange};
`;

const PackageButton = styled.button`
  background: ${colors.primary};
  color: ${colors.white};
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: #0f3a47;
  }
`;

// Services Section
const ServicesSection = styled.section`
  padding: 100px 24px;
  background: ${colors.white};
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
  margin-top: 60px;
`;

const ServiceCard = styled.div`
  text-align: center;
  padding: 32px 20px;
  border-radius: 12px;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ServiceIcon = styled.div`
  width: 80px;
  height: 80px;
  background: ${colors.lightGray};
  border-radius: 50%;
  margin: 0 auto 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: ${colors.primary};
`;

const ServiceTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 700;
  color: ${colors.primary};
  margin-bottom: 12px;
`;

const ServiceDescription = styled.p`
  color: ${colors.darkGray};
  line-height: 1.6;
`;

// Footer
const Footer = styled.footer`
  background: ${colors.primary};
  color: ${colors.white};
  padding: 60px 24px 24px;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
`;

const FooterSection = styled.div`
  h3 {
    font-size: 1.2rem;
    font-weight: 700;
    margin-bottom: 20px;
  }

  p,
  a {
    color: rgba(255, 255, 255, 0.8);
    line-height: 1.8;
    text-decoration: none;

    &:hover {
      color: ${colors.white};
    }
  }
`;

const FooterBottom = styled.div`
  text-align: center;
  padding-top: 40px;
  margin-top: 40px;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  color: rgba(255, 255, 255, 0.6);
`;

// Main Component
export default function UmrahMeReplica() {
  return (
    <Container>
      <Header>
        <HeaderContent>
          <Logo>ALA HAZRAT TOURS AND TRAVELS</Logo>
          <Nav>
            <Link to="/">Home</Link>
            <Link to="/#packages">Packages</Link>
            <Link to="/#booking">Booking</Link>
            <Link to="/#faq">FAQ</Link>
            <Link to="/contact">Contact</Link>
          </Nav>
          <ContactButton>
            <NavLink href="contact">Contact Us</NavLink>
          </ContactButton>
        </HeaderContent>
      </Header>

      <Hero>
        <HeroContent>
          <HeroTitle>Your Sacred Journey to Makkah & Madinah</HeroTitle>
          <HeroSubtitle>
            Experience personalized Umrah packages with complete peace of mind.
            IATA accredited service with expert guidance every step of the way.
          </HeroSubtitle>
          <HeroCTA>Find Your Package</HeroCTA>
        </HeroContent>
      </Hero>

      <SearchSection>
        <SearchCard>
          <SearchForm>
            <FormGroup>
              <Label>Departure City</Label>
              <Select>
                <option>Delhi</option>
                <option>Mumbai</option>
                <option>Bareilly</option>
                <option>Lucknow</option>
              </Select>
            </FormGroup>
            <FormGroup>
              <Label>Departure Date</Label>
              <Input type="date" />
            </FormGroup>
            <FormGroup>
              <Label>Duration</Label>
              <Select>
                <option>7 Days</option>
                <option>10 Days</option>
                <option>14 Days</option>
                <option>21 Days</option>
              </Select>
            </FormGroup>
            <FormGroup>
              <Label>Travelers</Label>
              <Select>
                <option>1 Person</option>
                <option>2 People</option>
                <option>3-4 People</option>
                <option>5+ People</option>
              </Select>
            </FormGroup>
            <SearchButton>Search Packages</SearchButton>
          </SearchForm>
        </SearchCard>
      </SearchSection>

      <PackagesSection id="packages">
        <SectionContent>
          <SectionTitle>Popular Umrah Packages</SectionTitle>
          <SectionSubtitle>
            Choose from our carefully crafted packages designed for every budget
            and preference
          </SectionSubtitle>
          <PackagesGrid>
            <PackageCard>
              <PackageImage>Economy Package</PackageImage>
              <PackageContent>
                <PackageTitle>Budget Umrah Package</PackageTitle>
                <PackageFeatures>
                  <PackageFeature>7 Days / 6 Nights</PackageFeature>
                  <PackageFeature>3-Star Hotel near Haram</PackageFeature>
                  <PackageFeature>Round trip airfare</PackageFeature>
                  <PackageFeature>Visa processing</PackageFeature>
                  <PackageFeature>Group transfers</PackageFeature>
                </PackageFeatures>
                <PackagePrice>
                  <Price>₹89,999</Price>
                  <PackageButton>Book Now</PackageButton>
                </PackagePrice>
              </PackageContent>
            </PackageCard>

            <PackageCard>
              <PackageImage>Standard Package</PackageImage>
              <PackageContent>
                <PackageTitle>Standard Umrah Package</PackageTitle>
                <PackageFeatures>
                  <PackageFeature>10 Days / 9 Nights</PackageFeature>
                  <PackageFeature>4-Star Hotel near Haram</PackageFeature>
                  <PackageFeature>Round trip airfare</PackageFeature>
                  <PackageFeature>Visa processing</PackageFeature>
                  <PackageFeature>Private transfers</PackageFeature>
                </PackageFeatures>
                <PackagePrice>
                  <Price>₹1,29,999</Price>
                  <PackageButton>Book Now</PackageButton>
                </PackagePrice>
              </PackageContent>
            </PackageCard>

            <PackageCard>
              <PackageImage>Premium Package</PackageImage>
              <PackageContent>
                <PackageTitle>Premium Umrah Package</PackageTitle>
                <PackageFeatures>
                  <PackageFeature>14 Days / 13 Nights</PackageFeature>
                  <PackageFeature>5-Star Hotel near Haram</PackageFeature>
                  <PackageFeature>Premium airline</PackageFeature>
                  <PackageFeature>Fast visa processing</PackageFeature>
                  <PackageFeature>VIP services</PackageFeature>
                </PackageFeatures>
                <PackagePrice>
                  <Price>₹1,89,999</Price>
                  <PackageButton>Book Now</PackageButton>
                </PackagePrice>
              </PackageContent>
            </PackageCard>
          </PackagesGrid>
        </SectionContent>
      </PackagesSection>

      <ServicesSection id="services">
        <SectionContent>
          <SectionTitle>Why Choose ALA HAZRAT TOURS?</SectionTitle>
          <SectionSubtitle>
            We provide comprehensive services to make your pilgrimage smooth and
            memorable
          </SectionSubtitle>
          <ServicesGrid>
            <ServiceCard>
              <ServiceIcon>🕋</ServiceIcon>
              <ServiceTitle>Expert Guidance</ServiceTitle>
              <ServiceDescription>
                Certified religious guides to help you perform your Umrah with
                proper knowledge
              </ServiceDescription>
            </ServiceCard>
            <ServiceCard>
              <ServiceIcon>✈️</ServiceIcon>
              <ServiceTitle>Complete Travel Support</ServiceTitle>
              <ServiceDescription>
                From visa processing to airport transfers, we handle every
                detail of your journey
              </ServiceDescription>
            </ServiceCard>
            <ServiceCard>
              <ServiceIcon>🏨</ServiceIcon>
              <ServiceTitle>Premium Accommodation</ServiceTitle>
              <ServiceDescription>
                Stay in carefully selected hotels close to Masjid al-Haram and
                Masjid an-Nabawi
              </ServiceDescription>
            </ServiceCard>
            <ServiceCard>
              <ServiceIcon>💳</ServiceIcon>
              <ServiceTitle>Flexible Payment</ServiceTitle>
              <ServiceDescription>
                Easy EMI options and multiple payment methods to suit your
                budget
              </ServiceDescription>
            </ServiceCard>
          </ServicesGrid>
        </SectionContent>
      </ServicesSection>

      <Footer>
        <FooterContent>
          <FooterSection>
            <h3>ALA HAZRAT TOURS AND TRAVELS</h3>
            <p>
              Your trusted partner for Hajj and Umrah journeys. Making sacred
              pilgrimages accessible and memorable for every Muslim.
            </p>
          </FooterSection>
          <FooterSection>
            <h3>Services</h3>
            <p>
              <a href="#">Umrah Packages</a>
            </p>
            <p>
              <a href="#">Hajj Packages</a>
            </p>
            <p>
              <a href="#">Hotel Booking</a>
            </p>
            <p>
              <a href="#">Visa Services</a>
            </p>
          </FooterSection>
          <FooterSection>
            <h3>Contact Info</h3>
            <p>📧 info@alahazrattours.com</p>
            <p>📞 +91 9876543210</p>
            <p>📍 Bareilly, Uttar Pradesh, India</p>
          </FooterSection>
        </FooterContent>
        <FooterBottom>
          <p>&copy; 2025 ALA HAZRAT TOURS AND TRAVELS. All rights reserved.</p>
        </FooterBottom>
      </Footer>
    </Container>
  );
}
