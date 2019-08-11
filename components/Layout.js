import Header from './Header';
import Container from '@material-ui/core/Container';
const Layout = props => (
  <div>
    <Header />
    <Container>
      {props.children}
    </Container>
  </div>
);

export default Layout;