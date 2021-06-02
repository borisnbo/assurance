import Contact from './contact/contact';
import Content from './content/content';
import Feature from './features1/feature';
import Footer from './footer/footer';
import Header from './header6/header';
import Pricing from './pricing/pricing';
import Testimoni from './testimonial/testimoni';

const Index =()=>{

    return <>
            <div className="root">
                <Header/>
                <Feature/>
                <Testimoni/>
                <Content/>
                <Pricing/>
                <Contact/>
                <Footer/>
            </div>
        </>
}
export default Index;