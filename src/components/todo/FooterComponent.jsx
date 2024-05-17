import { useContext } from 'react';
import { AuthContext } from './security/AuthContext.jsx';

function FooterComponent() {

  const authContext = useContext(AuthContext);

  return (
    <footer className="footer">
      <div className="container">
        <span className="text-muted">All Rights Reserved 2024 @BryanVillafuerte</span>
      </div>
    </footer>
  );
}

export default FooterComponent;