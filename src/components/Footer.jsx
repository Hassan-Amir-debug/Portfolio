import { profile } from "../data/resumeData.js";
import "./Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <p>© {year} {profile.name}.</p>
      </div>
    </footer>
  );
}
