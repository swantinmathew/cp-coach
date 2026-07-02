import "./Footer.css";
import FooterCTA from "./FooterCTA";
import FooterLinks from "./FooterLinks";
import FooterBottom from "./FooterBottom";

function Footer() {
    return (
        <footer id="footer" className="footer">

            <FooterCTA />

            <FooterLinks />

            <FooterBottom />

        </footer>
    );
}

export default Footer;