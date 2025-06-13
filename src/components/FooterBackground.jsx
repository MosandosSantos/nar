import fundo from '../assets/image/principal/fundos.png';

const FooterBackground = () => (
  <div
    className="absolute inset-0 z-[-5] pointer-events-none"
    style={{
      backgroundImage: `url(${fundo})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      filter: 'brightness(0.8) contrast(1.1)',
      opacity: 0.9,
    }}
  />
);

export default FooterBackground;
