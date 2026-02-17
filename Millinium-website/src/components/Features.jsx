import React from 'react';
import { Users, BarChart3, Heart, Zap } from 'lucide-react';

// --- COLOR CONFIGURATION (Purana Gold Color) ---
const BRAND_COLOR = "#E0A852"; 
const BRAND_COLOR_LIGHT = "rgba(224, 168, 82, 0.1)"; // Very light gold for normal state

const featuresData = [
  {
    icon: <Users size={28} />,
    title: "Designed for Couples",
    description: "Every workout is crafted to build connection, communication, and shared achievement between partners."
  },
  {
    icon: <BarChart3 size={28} />,
    title: "Crowd-Sourced Data",
    description: "Our platform leverages insights from thousands of couples to optimize your fitness experience."
  },
  {
    icon: <Heart size={28} />,
    title: "Faithfulness & Partnership",
    description: "Strengthen your bond while strengthening your body. Commitment in fitness, commitment in life."
  },
  {
    icon: <Zap size={28} />,
    title: "Science-Backed Results",
    description: "Years of research ensure every program delivers measurable, meaningful progress for both of you."
  }
];

const Features = () => {
  return (
    <section className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
      <div className="container py-5">
        
        {/* Section Heading */}
        <div className="text-center mb-5">
          <h6 className="text-uppercase fw-bold mb-3" style={{ color: BRAND_COLOR, letterSpacing: '2px', fontSize: '0.9rem' }}>
            Why Millennium
          </h6>
          <h2 className="display-5 fw-bold" style={{ fontFamily: 'Playfair Display' }}>
            Built for Partnership
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="row g-4">
          {featuresData.map((feature, index) => (
            <div className="col-md-6 col-lg-3" key={index}>
              <div className="feature-card p-4 h-100 bg-white rounded-4 position-relative">
                
                {/* Icon Box */}
                <div className="icon-box mb-4">
                  {feature.icon}
                </div>
                
                {/* Content */}
                <h4 className="fw-bold mb-3" style={{ fontFamily: 'Playfair Display', fontSize: '1.25rem' }}>
                  {feature.title}
                </h4>
                <p className="text-muted mb-0" style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>
                  {feature.description}
                </p>

              </div>
            </div>
          ))}
        </div>

      </div>

      {/* CSS Styling */}
      <style jsx>{`
        .feature-card {
          transition: all 0.3s ease;
          border: 1px solid #eaeaea; /* Halka border */
          box-shadow: 0 4px 6px rgba(0,0,0,0.02); /* Base shadow */
        }

        /* Hover Effect: Sirf Shadow change hogi */
        .feature-card:hover {
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
          border-color: transparent;
        }

        /* Icon Box Normal State */
        .icon-box {
          width: 64px;
          height: 64px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 12px; /* Square with slight roundness */
          background-color: ${BRAND_COLOR_LIGHT}; /* Halka Gold BG */
          color: ${BRAND_COLOR}; /* Gold Icon */
          transition: all 0.3s ease;
        }

        /* Icon Box Hover State (Solid Gold BG + White Icon) */
        .feature-card:hover .icon-box {
          background-color: ${BRAND_COLOR}; 
          color: #ffffff;
          box-shadow: 0 10px 20px rgba(241, 191, 116, 0.3);
        }
      `}</style>
    </section>
  );
};

export default Features;