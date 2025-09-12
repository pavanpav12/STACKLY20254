import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import './App.css';

// ---- Pages ----

const Home = () => (
  <section className="hero">
    <div className="hero-content">
      <h1>10+ Years of Innovative, Reliable Software Solutions</h1>
      <p>We make technology work to empower your business. Efficiency. Transparency. Growth.</p>
      <button><Link to="/services">Learn More</Link></button>
    </div>
  </section>
);

const Services = () => {
  const services = [
    { title: 'Web Application Development', description: 'We build scalable, high-performance web apps using modern frameworks like React, Angular, and Django.' },
    { title: 'Mobile Application Development', description: 'Cross-platform mobile app development (iOS & Android) using Flutter, React Native, and native tech.' },
    { title: 'Database Management', description: 'Optimized database solutions including MySQL, PostgreSQL, MongoDB, and cloud databases.' },
    { title: 'System Administration & DevOps', description: 'CI/CD pipelines, infrastructure automation, cloud deployment, and server maintenance.' },
    { title: 'Security & Penetration Testing', description: 'We identify vulnerabilities and implement best practices to keep your systems protected.' },
    { title: 'ICT Consulting', description: 'Strategic guidance on tech transformation, software architecture, and automation.' },
    { title: 'Network Design & Management', description: 'Design and maintain secure, scalable network infrastructures including firewalls and VPNs.' },
    { title: 'Enterprise Software Solutions', description: 'Custom ERP, CRM, HRM, and accounting software using Odoo, Oracle, or SAP.' },
  ];

  return (
    <section className="services">
      <h2>What We Provide</h2>
      <div className="service-grid">
        {services.map((s, idx) => (
          <div className="service-card" key={idx}>
            <h3>{s.title}</h3>
            <p>{s.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const About = () => (
  <section className="about">
    <h2>About STACKLY</h2>
    <div className="about-content">
      <img
        src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=500&q=60"
        alt="Team at work"
        className="about-img"
      />
      <p>
        STACKLY is a technology-driven company offering software development and IT services.
        From enterprise software to network management, we help clients streamline operations and accelerate growth.
      </p>
    </div>
  </section>
);

const Testimonials = () => {
  const testimonials = [
    {
      quote: "We needed a robust solution to our growing business needs so we selected Odoo and trusted STACKLY.",
      author: "Pavan Gowda, President, Synergy Group",
      image: "https://i.pravatar.cc/100?img=12",
    },
    {
      quote: "STACKLY helped us deploy Odoo ERP successfully. Their staff is brilliant.",
      author: "Poornima, Founder, Peace of Mind Association",
      image: "https://i.pravatar.cc/100?img=47",
    },
  ];

  return (
    <section className="testimonials">
      <h2>What Our Clients Say</h2>
      {testimonials.map((t, idx) => (
        <div className="testimonial-card" key={idx}>
          <img src={t.image} alt={t.author} className="testimonial-img" />
          <div>
            <blockquote>{t.quote}</blockquote>
            <p className="author">– {t.author}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

const Contact = () => (
  <section className="contact">
    <h2>Contact Us</h2>
    <ul className="contact-list">
      <li>Channi, Bengaluru — sales@stackly.com — 9194445905</li>
      <li>New York, USA — +93 77‑302‑0100 / +93 77‑302‑0101</li>
      <li>Dubai, UAE — sales@stackly.com</li>
      <li>Gandhinagar, India — A‑305, Temple near, KH‑0 Circle, Gandhinagar ‑ 382423</li>
    </ul>
  </section>
);

// ---- Login Page ----

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Dummy credentials for demo
    if (username === 'admin' && password === 'stackly123') {
      navigate('/');
    } else {
      setError('Invalid username or password.');
    }
  };

  return (
    <section className="login">
      <h2>Login</h2>
      <form onSubmit={handleLogin} className="login-form">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {error && <p className="error">{error}</p>}
        <button type="submit">Login</button>
      </form>
    </section>
  );
};

// ---- App Layout ----

function App() {
  return (
    <Router>
      <div className="app">
        <header className="header">
          <div className="logo-container">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
              alt="STACKLY Logo"
              className="logo-img"
            />
            <span className="logo-text">STACKLY</span>
          </div>
          <nav className="nav">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/testimonials">Testimonials</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/login">Login</Link></li>
            </ul>
          </nav>
        </header>

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>

        <footer className="footer">
          <p>&copy; {new Date().getFullYear()} STACKLY. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
