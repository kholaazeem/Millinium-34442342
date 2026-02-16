import React from 'react';
import { Users, BarChart3, Heart, Zap } from 'lucide-react';

const featuresData = [
  {
    icon: <Users size={24} color="#E0A852" />,
    title: "Designed for Couples",
    description: "Every workout is crafted to build connection, communication, and shared achievement between partners."
  },
  {
    icon: <BarChart3 size={24} color="#E0A852" />,
    title: "Crowd-Sourced Data",
    description: "Our platform leverages insights from thousands of couples to optimize your fitness experience."
  },
  {
    icon: <Heart size={24} color="#E0A852" />,
    title: "Faithfulness & Partnership",
    description: "Strengthen your bond while strengthening your body. Commitment in fitness, commitment in life."
  },
  {
    icon: <Zap size={24} color="#E0A852" />,
    title: "Science-Backed Results",
    description: "Years of research ensure every program delivers measurable, meaningful progress for both of you."
  }
];

const Features = () => {
  return (
    <section className="py-5" style={{ backgroundColor: '#fafafa' }}> {/* Halka sa grey background */}
      <div className="container py-5">
        
        {/* Section Heading */}
        <div className="text-center mb-5">
          <h6 className="text-uppercase fw-bold mb-3" style={{ color: '#E0A852', letterSpacing: '2px', fontSize: '0.9rem' }}>
            Why Millennium
          </h6>
          <h2 className="display-5 fw-bold" style={{ fontFamily: 'Playfair Display' }}>
            Built for Partnership
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="row g-4">
          {featuresData.map((feature, index) => (
            <div className="col-md-6 col-lg-3 animate-fade-up" style={{ animationDelay: `${index * 0.2}s` }} key={index}>
              <div className="feature-card p-4 h-100 bg-white rounded-4">
                
                {/* Icon with Light Square Box */}
                <div className="icon-box mb-4">
                  {feature.icon}
                </div>
                
                {/* Card Title & Description */}
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
    </section>
  );
};

export default Features;