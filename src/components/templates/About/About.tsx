import { forwardRef } from "react";
import "./About.scss";

interface AboutProps {}

/**
 * About component
 * @param {AboutProps} _
 * @param {React.RefObject<HTMLDivElement>} ref
 * @returns {JSX.Element}
 */
const About = forwardRef<HTMLDivElement, AboutProps>((_, ref): JSX.Element => {
  return (
    <div className={`About`} ref={ref}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin accumsan
      molestie nibh, in aliquet nisl commodo a. Ut placerat neque enim, a
      laoreet turpis condimentum sed. Phasellus consectetur eros sed dui
      placerat egestas. Mauris placerat sapien in nisl feugiat facilisis. Nulla
      facilisi. Morbi pretium tincidunt purus. Fusce et purus condimentum,
      luctus leo vitae, maximus leo. Phasellus aliquet augue lectus, convallis
      maximus orci accumsan id. Sed nec eleifend leo. Proin sit amet risus eros.
      Cras leo dolor, lacinia tincidunt orci sed, accumsan vestibulum velit.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris efficitur
      pretium rutrum. Fusce fermentum risus eget urna bibendum, eu placerat
      turpis tincidunt. Curabitur non tellus eros. Sed eget tempor ante, a
      placerat lacus.
    </div>
  );
});

export default About;
