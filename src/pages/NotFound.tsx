
import React from 'react';
import Layout from '@/components/Layout';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const NotFound = () => {
  return (
    <Layout>
      <section className="min-h-screen flex items-center justify-center py-20 px-6">
        <div className="container mx-auto max-w-lg text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-8xl font-bold text-gradient block mb-6">404</span>
            <h1 className="text-3xl font-bold mb-4">Page Not Found</h1>
            <p className="text-foreground/70 mb-8">
              The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            </p>
            <Link 
              to="/" 
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-md font-medium shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all"
            >
              Return to Home
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
