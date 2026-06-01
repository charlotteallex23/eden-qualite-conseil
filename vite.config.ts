import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-react': ['react', 'react-dom', 'react-router-dom'],
          'vendor-ui': ['lucide-react', 'react-helmet-async'],
          'vendor-forms': ['@emailjs/browser', 'react-google-recaptcha'],
          'pages-acquisition': [
            './src/pages/acquisition/ObtenerQualiopi',
            './src/pages/acquisition/EtreCertifieQualiopi',
            './src/pages/acquisition/QuialiopiRapidement',
            './src/pages/acquisition/QuialiopiFormateur',
            './src/pages/acquisition/PackQualiopiEdof',
            './src/pages/acquisition/ReferencerFormationCpf',
            './src/pages/acquisition/AccederEdof',
            './src/pages/acquisition/PackCreationOfQualiopi',
            './src/pages/acquisition/QualiopiOrganismeFormation',
          ],
          'pages-blog': ['./src/pages/Blog'],
          'pages-main': [
            './src/pages/Accueil',
            './src/pages/Services',
            './src/pages/Tarifs',
            './src/pages/About',
            './src/pages/Contact',
            './src/pages/Qualiopi',
            './src/pages/CpfEligibilite',
            './src/pages/EdofReferencement',
            './src/pages/CaseStudies',
            './src/pages/Ressources',
          ],
        },
      },
    },
  },
})
