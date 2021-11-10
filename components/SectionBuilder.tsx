import { Section } from 'lib/api';
import Header from 'components/modules/Header';
import Content from 'components/modules/Content';

const components = {
  header: Header,
  content: Content,
};

export default function Builder(props: Section): JSX.Element {
  const { type, ...rest } = props;
  const Component = components[type];
  return <Component {...rest} />;
}
