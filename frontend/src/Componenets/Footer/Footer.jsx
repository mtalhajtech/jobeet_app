import React from 'react';
import { Row,Container } from 'react-bootstrap';
function Footer() {
    return (
    <footer className="bg-black text-white text-center py-3">
      <Container>
        <p>Jobeet app &copy; {new Date().getFullYear()}</p>
      </Container>
    </footer>
    );
}

export default Footer;