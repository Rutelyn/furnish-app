import { heroBg } from "../../../assets"

const Hero = () => {
  return (
    <div className=" flex bg-orange-300">

       <div>
      <p className="w-96">Healthy hair happy you is what we strive to achieve</p>
      <button className="bg-white px-6 py-2 rounded-full drop-shadow-lg text-gray-950 uppercase font-semibold">Discover</button>
      </div>
      <div>
        <img src={heroBg} alt="hero background" />
      </div>
     
    </div>
  )
}

export default Hero