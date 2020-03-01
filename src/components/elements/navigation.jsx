import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../sections/experience";
import EN from "../../en-US.json";
import CH from "../../zh-CN.json";
import moment from "moment";
// import "moment/locale/zh-cn";
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: { Aboutme: EN.other.nav.aboutme }
      }
    },
    lng: "en",
    fallbackLng: "en",

    interpolation: {
      escapeValue: false
    }
  });

function Navigation() {
  const { t } = useTranslation();
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand>{moment().format("MMMM Do YYYY")}</Navbar.Brand>
      <Nav className="justify-content-end">
        <Nav.Link href="#">Home</Nav.Link>
        <Nav.Link href="#aboutme">{t("Aboutme")}</Nav.Link>
        <Nav.Link href="#experience">Experience</Nav.Link>
        <Nav.Link href="#skill">Skill</Nav.Link>
        <Nav.Link href="#project">Project</Nav.Link>
        <Nav>{/* {EN}/{中文} */}</Nav>
      </Nav>
    </Navbar>
  );
}

export default Navigation;
