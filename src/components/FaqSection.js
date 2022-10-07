import styled from 'styled-components';
import {About} from "../styles";
import Toggle from "./Toggle";
import {AnimateSharedLayout} from "framer-motion";
import {useScroll} from "./useScroll";
import {fade, scrollReveal} from "../Animation";

const FaqSection = () => {
      const [element, controls] = useScroll();
      return (
        <Faq variants={scrollReveal} ref={element} animate={controls} initial="hidden">
          <h2>
            Any Questions <span>FAQ</span>
          </h2>
            <AnimateSharedLayout>
                <Toggle title="How do I start?">
                    <div className="question">
                        <div className="answer">
                            <p>Lorem ipsum dolor sit amet.</p>
                            <p>
                              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt,
                              molestiae?
                            </p>
                        </div>
                    </div>
                </Toggle>
                <Toggle title="Daily Schedule">
                    <div className="question">
                        <div className="answer">
                            <p>Lorem ipsum dolor sit amet.</p>
                            <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt,
                                molestiae?
                            </p>
                        </div>
                    </div>
                </Toggle>
                <Toggle title="Different Payment Methods">
                    <div className="question">
                        <div className="answer">
                            <p>Lorem ipsum dolor sit amet.</p>
                            <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt,
                                molestiae?
                            </p>
                        </div>
                    </div>
                </Toggle>
                <Toggle title="What products do we offer">
                    <div className="question">
                        <div className="answer">
                            <p>Lorem ipsum dolor sit amet.</p>
                            <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt,
                                molestiae?
                            </p>
                        </div>
                    </div>
                </Toggle>
            </AnimateSharedLayout>
        </Faq>
      );
};

const Faq = styled(About)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line{
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .question{
    padding: 3rem 0rem;
    cursor: pointer;
  }
  .answer{
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;

export default FaqSection;
