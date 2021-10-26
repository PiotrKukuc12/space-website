import Layout from '../components/layouts/layout';
import imgDesktop from '../public/images/destination/background-destination-desktop.jpg';
import imgTablet from '../public/images/destination/background-destination-tablet.jpg';
import imgMobile from '../public/images/destination/background-destination-mobile.jpg';
import Planets from '../components/destination/planets';
import HeadingNumb from '../components/headingNumb';

const destination = () => {
  return (
    <>
      <Layout
        title="Destination"
        desktop={imgDesktop}
        tablet={imgTablet}
        mobile={imgMobile}
      >
        <HeadingNumb number='01'>PICK YOUR DESTINATION</HeadingNumb>
        <Planets />
      </Layout>
    </>
  );
};

export default destination;
