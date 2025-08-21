import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const config = {
    title: import.meta.env.VITE_TITLE || '${TITLE}',
    description: import.meta.env.VITE_DESCRIPTION || '${DESCRIPTION}',
    image: import.meta.env.VITE_IMAGE || '${IMAGE}',
    url: import.meta.env.VITE_URL || '${URL}',
    googleDocUrl: import.meta.env.VITE_GOOGLE_DOC_URL || '${GOOGLE_DOC_URL}',
    googleDocId: import.meta.env.VITE_GOOGLE_DOC_ID || '${GOOGLE_DOC_ID}',
    contactEmail: import.meta.env.VITE_CONTACT_EMAIL || '${CONTACT_EMAIL}',
    firstName: import.meta.env.VITE_FIRST_NAME || '${FIRST_NAME}',
    resumeFilename: import.meta.env.VITE_RESUME_FILENAME || '${RESUME_FILENAME}'
  }

  useEffect(() => {
    document.title = config.title

    const updateMetaTag = (property, content) => {
      let meta = document.querySelector(`meta[property="${property}"]`) || 
                 document.querySelector(`meta[name="${property}"]`)
      
      if (!meta) {
        meta = document.createElement('meta')
        if (property.startsWith('twitter:')) {
          meta.name = property
        } else {
          meta.property = property
        }
        document.head.appendChild(meta)
      }
      meta.content = content
    }

    updateMetaTag('og:title', config.title)
    updateMetaTag('og:description', config.description)
    updateMetaTag('og:image', config.image)
    updateMetaTag('og:url', config.url)
    updateMetaTag('og:type', 'website')
    updateMetaTag('twitter:card', 'summary_large_image')
    updateMetaTag('twitter:title', config.title)
    updateMetaTag('twitter:description', config.description)
    updateMetaTag('twitter:image', config.image)
  }, [config])

  const handleDownload = () => {
    const pdfUrl = `https://docs.google.com/document/d/${config.googleDocId}/export?format=pdf`
    
    const link = document.createElement('a')
    link.href = pdfUrl
    link.download = config.resumeFilename
    link.target = '_blank'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handleEmail = () => {
    const subject = 'Resume Inquiry'
    const body = `Hi ${config.firstName},\n\nI found your resume on your website and would like to get in touch.\n\nBest regards`
    
    const mailtoUrl = `mailto:${config.contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.location.href = mailtoUrl
  }

  return (
    <div className="container">
      <div className="resume-content">
        <iframe 
          src={config.googleDocUrl}
          width="100%" 
          height="800" 
          id="resumeFrame"
          frameBorder="0"
          title="Resume"
        />
      </div>

      <div className="action-buttons">
        <button 
          id="downloadBtn" 
          className="btn btn-primary" 
          title="Download PDF"
          onClick={handleDownload}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
            <polyline points="7,10 12,15 17,10"/>
            <line x1="12" y1="15" x2="12" y2="3"/>
          </svg>
        </button>
        <button 
          id="emailBtn" 
          className="btn btn-secondary" 
          title="Email Me"
          onClick={handleEmail}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
            <polyline points="22,6 12,13 2,6"/>
          </svg>
        </button>
      </div>
    </div>
  )
}

export default App
