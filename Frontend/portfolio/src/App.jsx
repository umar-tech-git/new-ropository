import React from 'react';

const Portfolio = () => {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>Umar's Portfolio</h1>
        <h3 style={styles.subtitle}>Tech Enthusiast | Explorer | Nature Admirer</h3>
        <nav>
          <ul style={styles.navList}>
            <li><a href="#about" style={styles.navLink}>About Me</a></li>
            <li><a href="#projects" style={styles.navLink}>Projects</a></li>
            <li><a href="#internships" style={styles.navLink}>Internships</a></li>
            <li><a href="#contact" style={styles.navLink}>Contact</a></li>
          </ul>
        </nav>
      </header>

      <section id="about" style={styles.section}>
        <h2 style={styles.sectionTitle}>About Me</h2>
        <p style={styles.paragraph}>I am a passionate and dedicated student currently pursuing Engineering in Electronics and Communication. My deep interest in electronics drives me to create efficient, innovative, and user-friendly solutions to real-world challenges.</p>
      </section>

      <section id="projects" style={styles.section}>
        <h2 style={styles.sectionTitle}>Projects</h2>
        <ul style={styles.projectList}>
          <li><strong>Temperature Controller Project:</strong> Developed using Keil and Proteus.</li>
          <li><strong>System Monitoring Script:</strong> Created using C programming on Ubuntu.</li>
          <li><strong>Number Guess System:</strong> Java-based game built in Eclipse (CodSoft Task 1).</li>
          <li><strong>Grading System:</strong> Java-based application built in Eclipse (CodSoft Task 2).</li>
          <li><strong>ATM Interface:</strong> Java-based simulation built in Eclipse (CodSoft Task 3).</li>
        </ul>
      </section>

      <section id="internships" style={styles.section}>
        <h2 style={styles.sectionTitle}>Internships Attended</h2>
        <ul style={styles.projectList}>
          <li><strong>Internship at XYZ Electronics:</strong> Worked on embedded systems development.</li>
          <li><strong>Internship at ABC Tech:</strong> Developed IoT-based solutions for smart homes.</li>
          <li><strong>Internship at BSNL office</strong>Developed a knowledge internet transmission and signal transmission</li>
        </ul>
      </section>

      <section id="contact" style={styles.section}>
        <h2 style={styles.sectionTitle}>Contact Me</h2>
        <p style={styles.paragraph}>Email: <a href="mailto:umar@example.com" style={styles.emailLink}>umar@example.com</a></p>
        <a href="#" style={styles.button}>Download Resume</a>
      </section>

      <footer style={styles.footer}>
        <p>&copy; 2025 Umar. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

const styles = {
  '@keyframes backgroundAnimation': {
    '0%': { backgroundPosition: '0% 50%' },
    '50%': { backgroundPosition: '100% 50%' },
    '100%': { backgroundPosition: '0% 50%' },
  },
  '@keyframes fadeIn': {
    '0%': { opacity: 0, transform: 'translateY(20px)' },
    '100%': { opacity: 1, transform: 'translateY(0)' }
  },
  container: {
    fontFamily: 'Poppins, sans-serif',
    backgroundImage: 'url(https://images.unsplash.com/photo-1504384308090-c894fdcc538d)',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    animation: 'backgroundAnimation 20s infinite linear',
    color: '#fff',
    padding: '20px',
    minHeight: '100vh'
  },
  header: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    color: '#fff',
    padding: '40px 0',
    textAlign: 'center',
    borderRadius: '12px',
    animation: 'fadeIn 1.5s ease-in'
  },
  title: {
    fontSize: '3rem',
    marginBottom: '10px'
  },
  subtitle: {
    fontSize: '1.5rem',
    fontStyle: 'italic'
  },
  navList: {
    listStyle: 'none',
    padding: 0,
    display: 'flex',
    justifyContent: 'center',
    gap: '30px'
  },
  navLink: {
    color: '#fff',
    textDecoration: 'none',
    fontWeight: '700',
    fontSize: '1.1rem',
    transition: 'color 0.3s',
    ':hover': {
      color: '#ffcc00'
    }
  },
  section: {
    margin: '50px 0',
    padding: '40px',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    borderRadius: '12px',
    animation: 'fadeIn 2s ease-in'
  },
  sectionTitle: {
    fontSize: '2rem',
    marginBottom: '20px'
  },
  paragraph: {
    fontSize: '1.1rem',
    lineHeight: '1.8'
  },
  projectList: {
    paddingLeft: '20px',
    lineHeight: '1.8'
  },
  emailLink: {
    color: '#ffcc00',
    textDecoration: 'underline'
  },
  button: {
    display: 'inline-block',
    padding: '15px 30px',
    backgroundColor: '#ff5722',
    color: '#fff',
    textDecoration: 'none',
    borderRadius: '30px',
    fontWeight: 'bold',
    transition: 'transform 0.3s',
    ':hover': {
      transform: 'scale(1.1)'
    }
  },
  footer: {
    textAlign: 'center',
    padding: '20px',
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
    color: '#fff',
    marginTop: '50px'
  }
};

export default Portfolio;
