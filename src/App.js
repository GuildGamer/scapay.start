import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import { ReactNotifications } from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'

function App() {
  return (
    <div className="container">
      <ReactNotifications />
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
