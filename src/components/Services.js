import Title from './Title';
import { services as data } from '../data';
import Service from './Service';

const Services = () => {
  const servicesJSX = data.map((service) => <Service service={service} key={service.id} />);

  return (
    <section className="section services" id="services">
      <Title title="our" subTitle="services" />
      <div className="section-center services-center">
        {servicesJSX}
        </div>
    </section>
  );
};
export default Services;
