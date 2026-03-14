import * as React from 'react';

interface EmailTemplateProps {
  fullName: string;
  email: string;
  phone?: string;
  company?: string;
  service: string;
  message: string;
}

/**
 * Simplified Email Template to improve deliverability.
 * Uses a cleaner layout and avoids complex nested tables which can trigger spam filters.
 */
export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  fullName,
  email,
  phone,
  company,
  service,
  message,
}) => (
  <div style={{
    fontFamily: 'Arial, sans-serif',
    color: '#1a1a1a',
    lineHeight: '1.5',
    maxWidth: '600px',
    margin: '20px auto',
    padding: '20px',
    border: '1px solid #e5e7eb',
    borderRadius: '8px'
  }}>
    <h1 style={{ 
      color: '#B30000', 
      fontSize: '20px', 
      fontWeight: 'bold',
      marginBottom: '16px',
      borderBottom: '1px solid #e5e7eb',
      paddingBottom: '10px'
    }}>
      New Inquiry: {service}
    </h1>
    
    <div style={{ marginBottom: '24px' }}>
      <p style={{ margin: '8px 0' }}><strong>From:</strong> {fullName}</p>
      <p style={{ margin: '8px 0' }}><strong>Email:</strong> {email}</p>
      <p style={{ margin: '8px 0' }}><strong>Phone:</strong> {phone || 'Not provided'}</p>
      <p style={{ margin: '8px 0' }}><strong>Organization:</strong> {company || 'Not provided'}</p>
    </div>
    
    <div style={{ 
      backgroundColor: '#f9fafb', 
      padding: '16px', 
      borderRadius: '6px',
      border: '1px solid #f3f4f6'
    }}>
      <h2 style={{ fontSize: '16px', margin: '0 0 10px 0', color: '#374151' }}>Message Content:</h2>
      <p style={{ whiteSpace: 'pre-wrap', margin: 0, fontSize: '14px' }}>
        {message}
      </p>
    </div>
    
    <div style={{ 
      marginTop: '30px', 
      paddingTop: '15px', 
      borderTop: '1px solid #e5e7eb',
      fontSize: '12px', 
      color: '#6b7280',
      textAlign: 'center'
    }}>
      <p>© {new Date().getFullYear()} Bisly Nigeria Limited. Sent via corporate portal.</p>
    </div>
  </div>
);
