import styles from '../styles/Footer.module.css';

const Footer = () => (
  <footer className={styles.footer}>
    <p>© {new Date().getFullYear()} Generador de Personajes. Todos los derechos reservados.</p>
  </footer>
);

export default Footer;
