import Image from 'next/image';
import classes from './hero-section.module.css';

function HeroSection() {
  return (
    <div className={classes.container}>
      <Image
        src={'/images/background2.jpg'}
        alt="This is a landing page image"
        width={800}
        height={1000}
      />
    </div>
  );
}

export default HeroSection;
