import { useEffect, useRef } from "react";
import * as pdfjsLib from "pdfjs-dist";
import "./pdfWorker";

function App() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const loadPDF = async () => {
      try {
        const loadingTask = pdfjsLib.getDocument("/resume.pdf");
        const pdf = await loadingTask.promise;

        const page = await pdf.getPage(1);

        // Get device pixel ratio for crisp rendering
        const dpr = window.devicePixelRatio || 1;
        const scale = 1.5;

        const viewport = page.getViewport({ scale });
        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");

        // Set canvas size with device pixel ratio
        canvas.width = viewport.width * dpr;
        canvas.height = viewport.height * dpr;

        // Scale the drawing context so everything draws at the correct size
        context.scale(dpr, dpr);

        // Set canvas display size (CSS)
        canvas.style.width = `${viewport.width}px`;
        canvas.style.height = `${viewport.height}px`;

        // Clear canvas
        context.clearRect(0, 0, canvas.width, canvas.height);

        const renderContext = {
          canvasContext: context,
          viewport,
        };

        await page.render(renderContext).promise;
      } catch (error) {
        console.error("Error loading PDF:", error);
      }
    };

    loadPDF();
  }, []);

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1>My Online Resume</h1>
      </header>

      <div style={styles.pdfContainer}>
        <canvas ref={canvasRef} style={styles.canvas}></canvas>
      </div>

      <footer style={styles.footer}>
        &copy; 2025 Your Name. All rights reserved.
      </footer>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
    backgroundColor: "#f4f4f4",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  header: {
    backgroundColor: "#2c3e50",
    color: "white",
    width: "100%",
    padding: "1rem",
    textAlign: "center",
  },
  pdfContainer: {
    margin: "2rem auto",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
    borderRadius: "8px",
    overflow: "hidden",
    backgroundColor: "white",
  },
  canvas: {
    borderRadius: "8px",
    display: "block",
    maxWidth: "100%",
    height: "auto",
  },
  footer: {
    textAlign: "center",
    padding: "1rem",
    fontSize: "0.9rem",
    color: "#888",
    marginTop: "auto",
  },
};

export default App;