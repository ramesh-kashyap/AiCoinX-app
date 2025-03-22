import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const DetailPage = () => {
  return (
    <div className="container bg-n900 relative overflow-hidden flex justify-start items-start text-white pb-36">
      {/* Tailwind classes for background styling */}
      <div className="w-[582px] h-[582px] rounded-full bg-g300/10 absolute -top-48 -left-20 blur-[575px]"></div>

      <div className="relative z-20 w-full">
        {/* Inline-styled container for the page content */}
        <div
          style={{
            minHeight: '100vh',
          
            color: '#FFFFFF',
            fontFamily: 'sans-serif',
            position: 'relative',
          }}
        >
          {/* Header with Back Icon and "DETAIL" on the same line */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              padding: '1rem',
              borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
            }}
          >
            {/* Back Icon on the Left */}
            <NavLink
              to="/defi"
              style={{
                marginRight: '1rem',
                fontSize: '1.2rem',
                color: '#000',
                textDecoration: 'none',
                backgroundColor:"#9583ff",
              }}
            >
              <i className="fa-solid fa-arrow-left"></i>
            </NavLink>

            {/* Page Title (on the same line as the back icon) */}
            <h1
              style={{
                margin: 0,
                textAlign: 'center',
                fontSize: '1.2rem',
                fontWeight: 'bold',
              }}
            >
              DETAIL
            </h1>
          </div>

          {/* Card Container */}
          <div style={{ padding: '0 1rem' }}>
            {/* First Card */}
            <div
              style={{
                backgroundColor: '#16222A',
                borderRadius: '0.5rem',
                padding: '1rem',
                marginBottom: '1rem',
              }}
            >
              {/* Top Row: Title & Button */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <div>
                  <p style={{ fontSize: '1rem', fontWeight: '600' }}>
                    12-month package
                  </p>
                  <p
                    style={{
                      color: '#04D361',
                      fontSize: '0.9rem',
                      marginTop: '0.25rem',
                    }}
                  >
                    Interest rate 24%
                  </p>
                </div>
                <button
                  style={{
                    backgroundColor: '#9583ff',
                    border: 'none',
                    borderRadius: '0.25rem',
                    color: '#FFFFFF',
                    padding: '0.5rem 1rem',
                    fontSize: '0.875rem',
                    fontWeight: '500',
                    cursor: 'pointer',
                  }}
                  onClick={() => alert('Send Money!')}
                >
                  Send money
                </button>
              </div>

              {/* Stats */}
              <div style={{ marginTop: '1rem', fontSize: '0.875rem' }}>
                <p style={{ marginBottom: '0.25rem', color: '#E5E7EB' }}>
                  <span style={{ fontWeight: '500' }}>Total number of participants:</span>{' '}
                  71,088
                </p>
                <p style={{ marginBottom: '0.25rem', color: '#E5E7EB' }}>
                  <span style={{ fontWeight: '500' }}>Total profit:</span> 713,922
                </p>
                <p style={{ marginBottom: '0.25rem', color: '#E5E7EB' }}>
                  <span style={{ fontWeight: '500' }}>ATH sent:</span> 14,866,407
                </p>
                <p style={{ marginBottom: '0.25rem', color: '#E5E7EB' }}>
                  <span style={{ fontWeight: '500' }}>Current pool balance:</span>{' '}
                  9,886,396.756
                </p>
              </div>
            </div>

            {/* Second Card */}
            <div
              style={{
                backgroundColor: '#16222A',
                borderRadius: '0.5rem',
                padding: '1rem',
              }}
            >
              {/* Top Row: Title & Button */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <div>
                  <p style={{ fontSize: '1rem', fontWeight: '600' }}>
                    6-month package
                  </p>
                  <p
                    style={{
                      color: '#04D361',
                      fontSize: '0.9rem',
                      marginTop: '0.25rem',
                    }}
                  >
                    Interest rate 8.9%
                  </p>
                </div>
                <button
                  style={{
                    backgroundColor: '#9583ff',
                    border: 'none',
                    borderRadius: '0.25rem',
                    color: '#FFFFFF',
                    padding: '0.5rem 1rem',
                    fontSize: '0.875rem',
                    fontWeight: '500',
                    cursor: 'pointer',
                  }}
                  onClick={() => alert('Send Money!')}
                >
                  Send money
                </button>
              </div>

              {/* Stats */}
              <div style={{ marginTop: '1rem', fontSize: '0.875rem' }}>
                <p style={{ marginBottom: '0.25rem', color: '#E5E7EB' }}>
                  <span style={{ fontWeight: '500' }}>Total number of participants:</span>{' '}
                  38,631
                </p>
                <p style={{ marginBottom: '0.25rem', color: '#E5E7EB' }}>
                  <span style={{ fontWeight: '500' }}>Total profit:</span> 207,800
                </p>
                <p style={{ marginBottom: '0.25rem', color: '#E5E7EB' }}>
                  <span style={{ fontWeight: '500' }}>ATH sent:</span> 8,566,256
                </p>
                <p style={{ marginBottom: '0.25rem', color: '#E5E7EB' }}>
                  <span style={{ fontWeight: '500' }}>Current pool balance:</span>{' '}
                  2,874,747.592
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
