import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import Swal from 'sweetalert2'; // 1. SweetAlert Import

const LetsConnect = () => {

  // 2. Form Submit hone par yeh function chalega
  const handleSubmit = (e) => {
    e.preventDefault(); // Page reload hone se roken

    // Pyara sa Sweet Alert
    Swal.fire({
      title: 'Message Sent! 💌',
      text: 'Thank you for reaching out! We will get back to you and your partner shortly.',
      icon: 'success',
      confirmButtonText: 'Great!',
      confirmButtonColor: '#E0A852', // Brand Gold Color
      background: '#fff',
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    });

    // Optional: Form reset karne ke liye
    e.target.reset(); 
  };

  return (
    <section className="py-5 bg-white">
      <div className="container py-4">
        <div className="row g-5">
          
          {/* Left Column: Contact Info */}
          <div className="col-lg-5">
            <h2 className="fw-bold mb-3" style={{ fontFamily: 'Playfair Display' }}>Let's Connect</h2>
            <p className="text-muted mb-5" style={{ lineHeight: '1.7' }}>
              Whether you're ready to start your fitness journey together or just want to say hello, our team is here for you.
            </p>

            <div className="d-flex align-items-start mb-4">
              <div className="icon-box me-3">
                <Mail size={24} color="#E0A852" />
              </div>
              <div>
                <h6 className="fw-bold mb-1 text-uppercase small text-muted">Email</h6>
                <p className="mb-0 fw-bold" style={{ fontSize: '1.1rem' }}>hello@millennium.fit</p>
              </div>
            </div>

            <div className="d-flex align-items-start mb-4">
              <div className="icon-box me-3">
                <Phone size={24} color="#E0A852" />
              </div>
              <div>
                <h6 className="fw-bold mb-1 text-uppercase small text-muted">Phone</h6>
                <p className="mb-0 fw-bold" style={{ fontSize: '1.1rem' }}>+1 (555) 000-0000</p>
              </div>
            </div>

            <div className="d-flex align-items-start">
              <div className="icon-box me-3">
                <MapPin size={24} color="#E0A852" />
              </div>
              <div>
                <h6 className="fw-bold mb-1 text-uppercase small text-muted">Location</h6>
                <p className="mb-0 fw-bold" style={{ fontSize: '1.1rem' }}>Los Angeles, CA</p>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="col-lg-7">
            {/* 3. onSubmit handler yahan lagaya */}
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="form-label fw-bold small text-muted">Name</label>
                <input required type="text" className="form-control p-3 bg-light border-0" placeholder="Your name" />
              </div>
              
              <div className="mb-4">
                <label className="form-label fw-bold small text-muted">Email</label>
                <input required type="email" className="form-control p-3 bg-light border-0" placeholder="your@email.com" />
              </div>
              
              <div className="mb-4">
                <label className="form-label fw-bold small text-muted">Message</label>
                <textarea required className="form-control p-3 bg-light border-0" rows="5" placeholder="How can we help?"></textarea>
              </div>

              <button type="submit" className="btn w-100 rounded-pill py-3 fw-bold text-white submit-btn">
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>

      <style jsx>{`
        .icon-box {
          width: 50px;
          height: 50px;
          background-color: rgba(224, 168, 82, 0.1);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .form-control:focus {
          box-shadow: none;
          background-color: #fff !important;
          border: 1px solid #E0A852 !important;
        }

        .submit-btn {
          background-color: #E0A852;
          border: none;
          transition: all 0.3s ease;
        }

        .submit-btn:hover {
          background-color: #d49a45;
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(224, 168, 82, 0.3);
        }
      `}</style>
    </section>
  );
};

export default LetsConnect;