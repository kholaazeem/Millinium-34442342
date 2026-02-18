import React from 'react';

const Terms = () => {
  // Terms ka data array taake code saaf rahay
  const termsData = [
    {
      title: "1. Acceptance of Terms",
      content: "By accessing and using the Millennium platform, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services. We are committed to transparency and building trust with our community of couples."
    },
    {
      title: "2. Use of the Platform",
      content: "Millennium provides a web-based fitness platform designed for couples. You agree to use the platform responsibly, follow all workout safety guidelines, and consult with a healthcare professional before beginning any exercise program. The platform is intended for personal, non-commercial use."
    },
    {
      title: "3. User Accounts",
      content: "You are responsible for maintaining the confidentiality of your account credentials. You agree to provide accurate and current information during registration and to update your information as necessary. You must be at least 18 years old to create an account."
    },
    {
      title: "4. Intellectual Property",
      content: "All content on the Millennium platform, including workout programs, data visualizations, text, graphics, and software, is the property of Millennium and is protected by intellectual property laws. You may not reproduce, distribute, or create derivative works without our written permission."
    },
    {
      title: "5. Data & Privacy",
      content: "We collect crowd-sourced fitness data to improve our programs. Your personal information is handled in accordance with our Privacy Policy. We do not sell your data to third parties. Aggregated, anonymized data may be used for research purposes to enhance workout effectiveness."
    },
    {
      title: "6. Disclaimer of Warranties",
      content: "Millennium provides fitness guidance based on scientific research and crowd-sourced data, but results may vary. Our platform is not a substitute for professional medical advice. We make no guarantees regarding specific fitness outcomes. Always exercise within your abilities and limitations."
    },
    {
      title: "7. Limitation of Liability",
      content: "Millennium shall not be liable for any injuries, health complications, or damages arising from the use of our platform or workout programs. By using our services, you acknowledge that physical exercise carries inherent risks and you assume full responsibility for your participation."
    },
    {
      title: "8. Modifications to Terms",
      content: "We reserve the right to update these Terms of Service at any time. Changes will be posted on this page with an updated effective date. Continued use of the platform after changes constitutes acceptance of the revised terms."
    }
  ];

  return (
    <section className="py-5 bg-white">
      <div className="container py-5">
        
       

        {/* Terms Content List */}
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            {termsData.map((term, index) => (
              <div key={index} className="mb-5 animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
                
                {/* Term Title */}
                <h4 
                  className="fw-bold mb-3" 
                  style={{ fontFamily: 'Playfair Display', fontSize: '1.4rem', color: '#000' }}
                >
                  {term.title}
                </h4>
                
                {/* Term Text */}
                <p 
                  className="text-muted" 
                  style={{ fontFamily: 'Inter', fontSize: '1rem', lineHeight: '1.8' }}
                >
                  {term.content}
                </p>
                
                {/* Halka sa separator line (except last item) */}
                {index !== termsData.length - 1 && (
                  <hr className="my-4" style={{ opacity: 0.1 }} />
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Terms;