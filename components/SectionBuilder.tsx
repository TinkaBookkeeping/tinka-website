import React from 'react';
import { Section } from 'lib/api';
import Header from 'components/modules/Header';
import Content from 'components/modules/Content';
import TwoCols from 'components/modules/2Col';
import ContactForm from 'components/modules/ContactForm';
import Testimonial from 'components/modules/Testimonial';
import Clients from 'components/modules/Clients';
import GridText from 'components/modules/GridText';

const components = {
  content: Content,
  header: Header,
  contactForm: ContactForm,
  testimonial: Testimonial,
  '2col': TwoCols,
  clients: Clients,
  'grid-text': GridText,
};

export default function Builder(props: Section): JSX.Element {
  const { type, ...rest } = props;
  const Component = components[type];
  return <Component {...(rest as any)} />;
}
