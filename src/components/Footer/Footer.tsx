import { FunctionComponent } from "react";
import "../styles.css";

export const Footer: FunctionComponent = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <a href="https//newline.co">Newline co</a>
      <br />
      {currentYear}
    </footer>
  );
};
