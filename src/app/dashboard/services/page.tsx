import ServiceImageWithText from "@/app/components/ServiceImageWithText/ServiceImageWithText";
import ServiceCards from "@/app/components/Service_Card/ServiceCard";

const Services = () => {
  return (
    <>
      <div className="center">INICIO SERVICES CON IMAGEN</div>
      {/* <ServiceCards /> */}
      <div>
        <ServiceImageWithText />
        {/* <p>A LA IZQUIERDA</p>
        <p>A LA DERECHA</p>
        <p>A LA IZQUIERDA</p>
        <p>A LA DERECHA</p> */}
      </div>
    </>
  );
};

export default Services;
