import { Download, Mail } from "lucide-react";

function App() {
  return (
    <div style={styles.app}>
      {/* Animated Background */}
      <div style={styles.animatedBackground}></div>

      {/* Centered PDF */}
      <main style={styles.centerWrapper}>
        <div style={styles.pdfWrapper}>
          <div style={styles.pdfContainer}>
            <object
              data="/resume.pdf#toolbar=0&navpanes=0&scrollbar=0&view=FitH"
              type="application/pdf"
              style={styles.pdfEmbed}
            >
              <div style={styles.fallback}>
                <p>
                  Unable to display PDF.{" "}
                  <a href="/resume.pdf" target="_blank">
                    Click here to view
                  </a>
                </p>
              </div>
            </object>
          </div>
        </div>
      </main>

      {/* Fixed Icon Panel */}
      <div style={styles.iconPanel}>
        <a
          href="/resume.pdf"
          download
          style={styles.iconButton}
          title="Download Resume"
        >
          <Download size={20} />
        </a>
        <a
          href="mailto:vedantc252@gmail.com"
          style={styles.iconButton}
          title="Email Me"
        >
          <Mail size={20} />
        </a>
      </div>

      <style jsx>{`
        @keyframes gradientBG {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .icon-button:hover {
          transform: scale(1.1);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
        }
      `}</style>
    </div>
  );
}

const styles = {
  app: {
    fontFamily: "'Segoe UI', sans-serif",
    position: "relative",
    minHeight: "100vh",
    overflow: "hidden",
  },
  animatedBackground: {
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: -1,
    width: "100%",
    height: "100%",
    background: `
      linear-gradient(
        -45deg,
        #ff6ec4,
        #7873f5,
        #17ead9,
        #f9f871,
        #ff9a8b,
        #a18cd1,
        #fbc2eb,
        #8fd3f4
      )
    `,
    backgroundSize: "800% 800%",
    animation: "gradientBG 20s ease infinite",
  },
  centerWrapper: {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: 1,
  },
  pdfWrapper: {
    width: "min(800px, 90vw)",
    height: "min(90vh, 800px)",
    backgroundColor: "#fff",
    borderRadius: "1rem",
    boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
    overflow: "hidden",
    padding: "0.5rem",
  },
  pdfContainer: {
    width: "100%",
    height: "100%",
    backgroundColor: "#fff",
    borderRadius: "0.5rem",
    overflow: "hidden",
    position: "relative",
  },
  pdfEmbed: {
    width: "100%",
    height: "100%",
    border: "none",
    outline: "none",
    backgroundColor: "#fff",
    borderRadius: "0.5rem",
    transform: "scale(1.02)",
    transformOrigin: "center",
  },
  fallback: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    color: "#666",
    textAlign: "center",
    backgroundColor: "#fff",
  },
  iconPanel: {
    position: "fixed",
    right: "2rem",
    top: "50%",
    transform: "translateY(-50%)",
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    zIndex: 10,
  },
  iconButton: {
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    border: "none",
    borderRadius: "50%",
    padding: "0.75rem",
    cursor: "pointer",
    boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
    color: "#000",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "all 0.3s ease",
    backdropFilter: "blur(8px)",
    textDecoration: "none",
  },
};

export default App;
