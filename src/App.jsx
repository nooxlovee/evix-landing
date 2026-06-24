import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import Home from './pages/Home.jsx';
import Functions from './pages/Functions.jsx';
import Pricing from './pages/Pricing.jsx';
import Clients from './pages/Clients.jsx';
import About from './pages/About.jsx';
import Blog from './pages/Blog.jsx';
import Contacts from './pages/Contacts.jsx';
import Faq from './pages/Faq.jsx';
import Implementation from './pages/Implementation.jsx';
import Integrations from './pages/Integrations.jsx';
import KnowledgeBase from './pages/KnowledgeBase.jsx';
import Training from './pages/Training.jsx';
import HowItWorks from './pages/HowItWorks.jsx';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/functions" element={<Functions />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/implementation" element={<Implementation />} />
        <Route path="/integrations" element={<Integrations />} />
        <Route path="/knowledge-base" element={<KnowledgeBase />} />
        <Route path="/training" element={<Training />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
}
