export default function Home() {
  return (
    <div style={{
      fontFamily: 'Arial, sans-serif',
      background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
      minHeight: '100vh',
      color: 'white',
      margin: 0,
      padding: 0
    }}>
      {/* Campus Guard Alert Banner */}
      <div style={{
        background: 'linear-gradient(45deg, #ff6b6b, #4ecdc4)',
        padding: '15px 0',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: '18px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.3)'
      }}>
        🚨 CAMPUS GUARD ALERT: Emergency protocols activated
      </div>

      {/* Lifetime Access Banner */}
      <div style={{
        background: 'linear-gradient(45deg, #ffd700, #ffed4e)',
        color: '#000',
        padding: '10px',
        textAlign: 'center',
        fontWeight: 'bold',
        margin: '20px'
      }}>
        ⭐ LIFETIME ACCESS - No monthly fees
      </div>

      <main style={{ padding: '20px' }}>
        <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>CareZiaSpace - Digital Emergency</h1>

        {/* Emergency Buttons */}
        <a href="tel:911" style={{ textDecoration: 'none' }}>
          <div style={{
            width: '100%',
            padding: '20px',
            margin: '10px 0',
            background: 'linear-gradient(45deg, #dc3545, #c82333)',
            color: 'white',
            borderRadius: '10px',
            textAlign: 'center',
            fontSize: '20px',
            fontWeight: 'bold',
            cursor: 'pointer',
            boxShadow: '0 4px 15px rgba(220, 53, 69, 0.4)'
          }}>
            📞 CALL 911<br />
            <span style={{ fontSize: '14px', fontWeight: 'normal' }}>Immediate emergency response</span>
          </div>
        </a>

        <div style={{
          width: '100%',
          padding: '20px',
          margin: '10px 0',
          background: 'linear-gradient(45deg, #007bff, #0056b3)',
          color: 'white',
          borderRadius: '10px',
          textAlign: 'center',
          fontSize: '20px',
          fontWeight: 'bold',
          cursor: 'pointer',
          boxShadow: '0 4px 15px rgba(0, 123, 255, 0.4)'
        }}>
          📍 SHARE MY LOCATION<br />
          <span style={{ fontSize: '14px', fontWeight: 'normal' }}>GPS coordinates to family & 911</span>
        </div>

        <div style={{
          width: '100%',
          padding: '20px',
          margin: '10px 0',
          background: 'linear-gradient(45deg, #28a745, #1e7e34)',
          color: 'white',
          borderRadius: '10px',
          textAlign: 'center',
          fontSize: '20px',
          fontWeight: 'bold',
          cursor: 'pointer',
          boxShadow: '0 4px 15px rgba(40, 167, 69, 0.4)'
        }}>
          👨‍👩‍👧‍👦 FAMILY EMERGENCY ALERT<br />
          <span style={{ fontSize: '14px', fontWeight: 'normal' }}>Notify all family members</span>
        </div>

        <div style={{
          width: '100%',
          padding: '20px',
          margin: '10px 0',
          background: 'linear-gradient(45deg, #6f42c1, #5a2d91)',
          color: 'white',
          borderRadius: '10px',
          textAlign: 'center',
          fontSize: '20px',
          fontWeight: 'bold',
          cursor: 'pointer',
          boxShadow: '0 4px 15px rgba(111, 66, 193, 0.4)'
        }}>
          🏥 MEDICAL EMERGENCY<br />
          <span style={{ fontSize: '14px', fontWeight: '
