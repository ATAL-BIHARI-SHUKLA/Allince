import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";

const quickLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Academics", path: "/academics" },
  { name: "Faculty", path: "/faculty" },
  { name: "Facilities", path: "/facilities" },
];

const importantLinks = [
  { name: "Admissions", path: "/admissions" },
  { name: "Gallery", path: "/gallery" },
  { name: "Contact Us", path: "/contact" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* School Info */}
          <div>
            <Link to="/" className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-lg font-bold text-white">
                A
              </div>

              <div>
                <h2 className="text-xl font-bold text-white">Alliance</h2>

                <p className="text-xs text-slate-400">School of Excellence</p>
              </div>
            </Link>

            <p className="mt-5 text-sm leading-6 text-slate-400">
              Providing a strong educational foundation and helping students
              learn, grow, and achieve their full potential.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base font-semibold text-white">Quick Links</h3>

            <ul className="mt-5 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-slate-400 transition hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Important Links */}
          <div>
            <h3 className="text-base font-semibold text-white">
              Important Links
            </h3>

            <ul className="mt-5 space-y-3">
              {importantLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-slate-400 transition hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <Link
              to="/admissions"
              className="mt-6 inline-block rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              Apply Now
            </Link>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-base font-semibold text-white">Contact Us</h3>

            <div className="mt-5 space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 shrink-0 text-blue-400" />

                <p className="leading-6 text-slate-400">
                  School Address,
                  <br />
                  Your City, India
                </p>
              </div>

              <a
                href="tel:+910000000000"
                className="flex items-center gap-3 text-slate-400 transition hover:text-white"
              >
                <Phone size={18} className="text-blue-400" />
                +91 00000 00000
              </a>

              <a
                href="mailto:info@alliance.edu"
                className="flex items-center gap-3 text-slate-400 transition hover:text-white"
              >
                <Mail size={18} className="text-blue-400" />
                info@alliance.edu
              </a>
            </div>

            {/* Social Links */}
            <div className="mt-6 flex gap-3">
              <a
                href="#"
                aria-label="Facebook"
                className="rounded-lg bg-slate-800 p-2.5 transition hover:bg-blue-600"
              >
                <span className="text-sm font-bold" aria-hidden="true">f</span>
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="rounded-lg bg-slate-800 p-2.5 transition hover:bg-blue-600"
              >
                <span className="text-xs font-bold" aria-hidden="true">◎</span>
              </a>

              <a
                href="#"
                aria-label="LinkedIn"
                className="rounded-lg bg-slate-800 p-2.5 transition hover:bg-blue-600"
              >
                <span className="text-xs font-bold" aria-hidden="true">in</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-slate-800">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-6 text-center text-sm text-slate-500 sm:px-6 md:flex-row md:text-left lg:px-8">
          <p>© {currentYear} Alliance School. All rights reserved.</p>

          <p>Designed and developed for Alliance School</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
