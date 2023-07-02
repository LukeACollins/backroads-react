import Title from './Title';
import { tours } from '../data';

// Code use Require to dynamicaly load images in map using Webpack
//https://stackoverflow.com/questions/62091386/how-to-render-images-from-an-array-using-the-map-method/62095265#62095265

const Tours = () => {
  return (
    <section className="section" id="tours">
      <Title title="featured" subTitle="tours" />

      <div className="section-center featured-center">
        {tours.map(({ id, title,img:src, date, text, footer: { icon, country, days, price } }) => {
          return (
            <article className="tour-card" key={id}>
              <div className="tour-img-container">
                <img src={require('../images/' + src)} className="tour-img" alt="" />
                <p className="tour-date">{date}</p>
              </div>
              <div className="tour-info">
                <div className="tour-title">
                  <h4>{title}</h4>
                </div>
                <p>{text}</p>
                <div className="tour-footer">
                  <p>
                    <span>
                      <i className={icon}></i>
                    </span>{' '}
                    {country}
                  </p>
                  <p>
                    {days} {parseInt(days) > 1 ? 'days' : 'day'}
                  </p>
                  <p>from {`$${price}`}</p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
export default Tours;
