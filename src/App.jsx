import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './layouts/Layout';
import Home from './pages/Home';
import posthog from './posthog';

function PostHogPageViewTracker() {
  const location = useLocation();

  useEffect(() => {
    posthog.capture('$pageview', {
      $current_url: window.location.href,
    });
  }, [location]);

  return null;
}

function App() {
  return (
    <Router>
      <PostHogPageViewTracker />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Add more routes here for detailed case studies */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
