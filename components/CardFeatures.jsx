import Image from 'next/image';
import CardFeature from "../assets/CardFeatures.png";

const CardFeatures = () => {
  return (
<div className='w-full flex justify-center my-28 relative'>
  <Image src={CardFeature} alt="Features" quality={100} width={550} height={650} style={{position: "relative", zIndex: "1"}}/>
  <div className="absolute top-0 left-0 w-full h-full z-0">
    <div className="credit-debit__gradient rounded-full animate-ping" style={{ width: '50%', height: '50%', position: 'absolute', top: '25%', left: '25%', backgroundSize: '90% 90%' }} />
  </div>
</div>



  )
}

export default CardFeatures;

