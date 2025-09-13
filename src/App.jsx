import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate, useNavigate } from 'react-router-dom';
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

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const sendMessage = () => {
    if (name.trim() === '' || phone.trim() === '' || message.trim() === '') return;
    const newMessage = {
      name,
      phone,
      text: message,
    };
    setMessages([...messages, newMessage]);
    setMessage('');
  };

  return (
    <section className="chat">
      <h2>Chat with STACKLY</h2>
      <div className="chat-window">
        {messages.map((msg, idx) => (
          <div key={idx} className="chat-message">
            <p><strong>Name:</strong> {msg.name}</p>
            <p><strong>Phone:</strong> {msg.phone}</p>
            <p><strong>Message:</strong> {msg.text}</p>
            <hr />
          </div>
        ))}
      </div>
      <div className="chat-input-form">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <textarea
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </section>
  );
};

const Login = ({ setIsLoggedIn }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'pavangowda3344@gmail.com' && password === 'pavan1234') {
      setIsLoggedIn(true);
      navigate('/home');
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

const ProtectedRoute = ({ isLoggedIn, children }) => {
  if (!isLoggedIn) {
    return <Navigate to="/" replace />;
  }
  return children;
};

const MainLayout = () => {
  return (
    <>
      <header className="header">
        <div className="logo-container">
          <img
            src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=500&q=60"
            alt="STACKLY Logo"
            className="logo-img"
          />
          <span className="logo-text">STACKLY</span>
        </div>
        <nav className="nav">
          <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/testimonials">Testimonials</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/chat">Chat</Link></li>
          </ul>
        </nav>
      </header>

      <main className="main-content">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </main>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} STACKLY. All rights reserved.</p>
      </footer>
    </>
  );
};

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/*" element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <MainLayout />
            </ProtectedRoute>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
