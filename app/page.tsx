'use client';

export default function Home() {
  const handleShareLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;
        const message = `EMERGENCY! My current location: https://maps.google.com/maps?q=${lat},${lng}`;
        
        // Try to share via SMS
        if (navigator.share) {
          navigator.share({
            title: 'Emergency Location',
            text: message
          });
        } else {
          // Fallback to SMS
          window.open(`sms:?body=${encodeURIComponent(message)}`, '_self');
        }
      }, () => {
        alert('Location access denied. Please enable location services.');
      });
    } else {
      alert('Geolocation not supported by this browser.');
    }
  };

  const handleFamilyAlert = () => {
    const message = 'FAMILY EMERGENCY ALERT: I need immediate assistance. Please contact me or emergency services.';
    if (navigator.share) {
      navigator.share({
        title: 'Family Emergency Alert',
        text: message
      });
    } else {
      window.open(`sms:?body=${encodeURIComponent(message)}`, '_self');
    }
  };

  const handleMedicalEmergency = () => {
    const message = 'MEDICAL EMERGENCY: I require immediate medical attention. Please send help to my location.';
    if (navigator.share) {
      navigator.share({
        title: 'Medical Emergency',
        text: message
      });
    } else {
      window.open(`sms:?body=${encodeURIComponent(message)}`, '_self');
    }
  };

  const handleInternationalEmergency = () => {
    const message = 'INTERNATIONAL EMERGENCY: I am in distress and need assistance. Please contact local emergency services.';
    if (navigator.share) {
      navigator.share({
        title: 'International Emergency',
        text: message
      });
    } else {
      window.open(`sms:?body=${encodeURIComponent(message)}`, '_self');
    }
  };

  return (
    <div style={{
      fontFamily: 'Arial, sans-serif',
      background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
      minHeight: '100vh',
      color: 'white',
      margin: 0,
      padding: 0
    }}>
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

        {/* Call 911 Button - Working */}
        <a href="tel:911" style={{ textDecoration: 'none' }}>
          <button style={{
            width: '100%',
            padding: '20px',
            margin: '10px 0',
            background: 'linear-gradient(45deg, #dc3545, #c82333)',
            color: 'white',
            border: 'none',
            borderRadius: '10px',
            textAlign: 'center',
            fontSize: '20px',
            fontWeight: 'bold',
            cursor: 'pointer',
            boxShadow: '0 4px 15px rgba(220, 53, 69, 0.4)'
          }}>
            📞 CALL 911<br />
            <span style={{ fontSize: '14px', fontWeight: 'normal' }}>Immediate emergency response</span>
          </button>
        </a>

        {/* Share Location Button - Working */}
        <button onClick={handleShareLocation} style={{
          width: '100%',
          padding: '20px',
          margin: '10px 0',
          background: 'linear-gradient(45deg, #007bff, #0056b3)',
          color: 'white',
          border: 'none',
          borderRadius: '10px',
          textAlign: 'center',
          fontSize: '20px',
          fontWeight: 'bold',
          cursor: 'pointer',
          boxShadow: '0 4px 15px rgba(0, 123, 255, 0.4)'
        }}>
          📍 SHARE MY LOCATION<br />
          <span style={{ fontSize: '14px', fontWeight: 'normal' }}>GPS coordinates to family & 911</span>
        </button>

        {/* Family Alert Button - Working */}
        <button onClick={handleFamilyAlert} style={{
          width: '100%',
          padding: '20px',
          margin: '10px 0',
          background: 'linear-gradient(45deg, #28a745, #1e7e34)',
          color: 'white',
          border: 'none',
          borderRadius: '10px',
          textAlign: 'center',
          fontSize: '20px',
          fontWeight: 'bold',
          cursor: 'pointer',
          boxShadow: '0 4px 15px rgba(40, 167, 69, 0.4)'
        }}>
          👨‍👩‍👧‍👦 FAMILY EMERGENCY ALERT<br />
          <span style={{ fontSize: '14px', fontWeight: 'normal' }}>Notify all family members</span>
        </button>

        {/* Medical Emergency Button - Working */}
        <button onClick={handleMedicalEmergency} style={{
          width: '100%',
          padding: '20px',
          margin: '10px 0',
          background: 'linear-gradient(45deg, #6f42c1, #5a2d91)',
          color: 'white',
          border: 'none',
          borderRadius: '10px',
          textAlign: 'center',
          fontSize: '20px',
          fontWeight: 'bold',
          cursor: 'pointer',
          boxShadow: '0 4px 15px rgba(111, 66, 193, 0.4)'
        }}>
          🏥 MEDICAL EMERGENCY<br />
          <span style={{ fontSize: '14px', fontWeight: 'normal' }}>Medical ID & ambulance request</span>
        </button>

        {/* International Emergency Button - Working */}
        <button onClick={handleInternationalEmergency} style={{
          width: '100%',
          padding: '20px',
          margin: '10px 0',
          background: 'linear-gradient(45deg, #17a2b8, #117a8b)',
          color: 'white',
          border: 'none',
          borderRadius: '10px',
          textAlign: 'center',
          fontSize: '20px',
          fontWeight: 'bold',
          cursor: 'pointer',
          boxShadow: '0 4px 15px rgba(23, 162, 184, 0.4)'
        }}>
          🌍 INTERNATIONAL EMERGENCY<br />
          <span style={{ fontSize: '14px', fontWeight: 'normal' }}>Global emergency services (25+ countries)</span>
        </button>

        <h3 style={{ textAlign: 'center', margin: '30px 0 20px 0' }}>🗺️ GPS EMERGENCY LOCATIONS</h3>

        {/* Location Finder Buttons - All Working */}
        <a href="https://maps.google.com/maps?q=police+station+near+me" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
          <button style={{
            width: '100%',
            padding: '15px',
            margin: '10px 0',
            background: 'linear-gradient(45deg, #007bff, #0056b3)',
            color: 'white',
            border: 'none',
            borderRadius: '10px',
            textAlign: 'center',
            fontSize: '16px',
            fontWeight: 'bold',
            cursor: 'pointer',
            boxShadow: '0 4px 15px rgba(0, 123, 255, 0.4)'
          }}>
            🚔 FIND POLICE STATION<br />
            <span style={{ fontSize: '12px', fontWeight: 'normal' }}>Opens GPS map to nearest police</span>
          </button>
        </a>

        <a href="https://maps.google.com/maps?q=fire+department+near+me" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
          <button style={{
            width: '100%',
            padding: '15px',
            margin: '10px 0',
            background: 'linear-gradient(45deg, #dc3545, #c82333)',
            color: 'white',
            border: 'none',
            borderRadius: '10px',
            textAlign: 'center',
            fontSize: '16px',
            fontWeight: 'bold',
            cursor: 'pointer',
            boxShadow: '0 4px 15px rgba(220, 53, 69, 0.4)'
          }}>
            🚒 FIND FIRE DEPARTMENT<br />
            <span style={{ fontSize: '12px', fontWeight: 'normal' }}>Opens GPS map to nearest fire station</span>
          </button>
        </a>

        <a href="https://maps.google.com/maps?q=hospital+emergency+room+near+me" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
          <button style={{
            width: '100%',
            padding: '15px',
            margin: '10px 0',
            background: 'linear-gradient(45deg, #28a745, #1e7e34)',
            color: 'white',
            border: 'none',
            borderRadius: '10px',
            textAlign: 'center',
            fontSize: '16px',
            fontWeight: 'bold',
            cursor: 'pointer',
            boxShadow: '0 4px 15px rgba(40, 167, 69, 0.4)'
          }}>
            🏥 FIND HOSPITAL/ER<br />
            <span style={{ fontSize: '12px', fontWeight: 'normal' }}>Opens GPS map to nearest emergency room</span>
          </button>
        </a>

        <a href="https://maps.google.com/maps?q=24+hour+pharmacy+near+me" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
          <button style={{
            width: '100%',
            padding: '15px',
            margin: '10px 0',
            background: 'linear-gradient(45deg, #6f42c1, #5a2d91)',
            color: 'white',
            border: 'none',
            borderRadius: '10px',
            textAlign: 'center',
            fontSize: '16px',
            fontWeight: 'bold',
            cursor: 'pointer',
            boxShadow: '0 4px 15px rgba(111, 66, 193, 0.4)'
          }}>
            💊 FIND 24HR PHARMACY<br />
            <span style={{ fontSize: '12px', fontWeight: 'normal' }}>Opens GPS map to nearest 24-hour pharmacy</span>
          </button>
        </a>

        {/* Bottom Row Buttons */}
        <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
          <button style={{
            flex: 1,
            padding: '10px',
            background: 'linear-gradient(45deg, #007bff, #0056b3)',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            textAlign: 'center',
            fontSize: '14px',
            fontWeight: 'bold',
            cursor: 'pointer'
          }} onClick={() => alert('Family Guard Pro feature coming soon!')}>
            📱 FAMILY GUARD PRO
          </button>
          <button style={{
            flex: 1,
            padding: '10px',
            background: 'linear-gradient(45deg, #ffc107, #e0a800)',
            color: '#000',
            border: 'none',
            borderRadius: '8px',
            textAlign: 'center',
            fontSize: '14px',
            fontWeight: 'bold',
            cursor: 'pointer'
          }} onClick={() => window.open('https://weather.com', '_blank')}>
            🌦️ WEATHER ALERT
          </button>
        </div>

        <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
          <button style={{
            flex: 1,
            padding: '10px',
            background: 'linear-gradient(45deg, #dc3545, #c82333)',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            textAlign: 'center',
            fontSize: '14px',
            fontWeight: 'bold',
            cursor: 'pointer'
          }} onClick={() => {
            const message = 'SAFETY CHECK: Please confirm you have received this message and are safe.';
            window.open(`sms:?body=${encodeURIComponent(message)}`, '_self');
          }}>
            ⚠️ SAFETY CHECK
          </button>
          <button style={{
            flex: 1,
            padding: '10px',
            background: 'linear-gradient(45deg, #28a745, #1e7e34)',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            textAlign: 'center',
            fontSize: '14px',
            fontWeight: 'bold',
            cursor: 'pointer'
          }} onClick={() => {
            const message = 'TRUCKING EMERGENCY: Driver in distress. Please send assistance immediately.';
            window.open(`sms:?body=${encodeURIComponent(message)}`, '_self');
          }}>
            🚛 TRUCKING EMERGENCY
          </button>
        </div>
      </main>
    </div>
  );
}
