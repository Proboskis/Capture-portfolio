import home1 from "../img/home1.png";
import { About, Description, Image, Hide } from "../styles";
// Framer Motion
import {motion} from "framer-motion";
import {titleAnim, fade, photoAnimation} from "../Animation";
import Wave from "./Wave";

const AboutSection = () => {

  /*const titleAnimation = {
    hidden: {opacity: 0},
    show: {opacity: 1, transition: {duration: 2} },
  }*/

  /*const container = {
    hidden: {x: 100},
    show: {x: 0, transition: {duration: 0.75, ease: "easeOut", staggerChildren: 1, when: "afterChildren"}}
  }*/

  return (
    <About>
      <div />
      <Description>
        <motion.div /*variants={container} initial="hidden" animate="show" className="title"*/>
          <Hide>
            <motion.h2 variants={titleAnim}>
              We work to make
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              your <span>dreams</span> come
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>true.</motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fade}>
          Contact us for any photography or videography ides that you have. We
          have professionals with amazing skills.
        </motion.p>
        <motion.button variants={fade}>Contact us</motion.button>
      </Description>
      <Image>
        <motion.img variants={photoAnimation} src={home1} alt="guy with a camera" />
      </Image>
      <Wave />
    </About>
  );
};

export default AboutSection;
