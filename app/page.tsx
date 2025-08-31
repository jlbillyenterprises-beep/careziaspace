export default function Home() {
  const handleCall911 = () => {
    window.open('tel:911', '_self');
  };

  const handleShareLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;
        const message = `Emergency! My location: https://maps.google.com/maps?q=${lat},${lng}`;
        window.open(`sms:?body=${encodeURIComponent(message)}`, '_self');
      });
    }
  };

  const handleFindLocation = (type) => {
    const searches = {
      police: 'police station near me',
      fire: 'fire department near me',
      hospital: 'hospital emergency room near me',
      pharmacy: '24 hour pharmacy near me'
    };
    window.open(`https://maps.google.com/maps?q=${encodeURIComponent(searches[type])}`, '_blank');
  };

  const handleEmergencyAlert = (type) => {
    const messages = {
      family: 'EMERGENCY ALERT: I need immediate assistance. Please contact me or emergency services.',
      medical: 'MEDICAL EMERGENCY: I require immediate medical attention. Please send help.',
      international: 'EMERGENCY: I am in distress and need assistance. Please contact local authorities.',
      safety: 'SAFETY CHECK: Please confirm you have received this message.',
      trucking: 'TRUCKING EMERGENCY: Driver in distress. Please send assistance.',
      weather: 'WEATHER EMERGENCY: Severe weather conditions. Need immediate shelter/assistance.'
    };
    
    if (navigator.share) {
      navigator.share({
        title: 'Emergency Alert',
        text: messages[type]
      });
    } else {
      window.open(`sms:?body=${encodeURIComponent(messages[type])}`, '_self');
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

        {/* Primary Emergency Actions */}
        <div style={{ marginBottom: '30px' }}>
          <button 
            onClick={handleCall911}
            style={{
              width: '100%',
              padding: '20px',
              margin: '10px 0',
              background: 'linear-gradient(45deg, #dc3545, #c82333)',
              color: 'white',
              border: 'none',
              borderRadius: '10px',
              fontSize: '20px',
              fontWeight: 'bold',
              cursor: 'pointer',
              boxShadow: '0 4px 15px rgba(220, 53, 69, 0.4)'
            }}
          >
            📞 CALL 911<br />
            <span style={{ fontSize: '14px', fontWeight: 'normal' }}>Immediate emergency response</span>
          </button>

          <button 
            onClick={handleShareLocation}
            style={{
              width: '100%',
              padding: '20px',
              margin: '10px 0',
              background: 'linear-gradient(45deg, #007bff, #0056b3)',
              color: 'white',
              border: 'none',
              borderRadius: '10px',
              fontSize: '20px',
              fontWeight: 'bold',
              cursor: 'pointer',
              boxShadow: '0 4px 15px rgba(0, 123, 255, 0.4)'
            }}
          >
            📍 SHARE MY LOCATION<br />
            <span style={{ fontSize: '14px', fontWeight: 'normal' }}>GPS coordinates to family & 911</span>
          </button>

          <button 
            onClick={() => handleEmergencyAlert('family')}
            style={{
              width: '100%',
              padding: '20px',
              margin: '10px 0',
              background: 'linear-gradient(45deg, #28a745, #1e7e34)',
              color: 'white',
              border: 'none',
              borderRadius: '10px',
              fontSize: '20px',
              fontWeight: 'bold',
              cursor: 'pointer',
              boxShadow: '0 4px 15px rgba(40, 167, 69, 0.4)'
            }}
          >
            👨‍👩‍👧‍👦 FAMILY EMERGENCY ALERT<br />
            <span style={{ fontSize: '14px', fontWeight: 'normal' }}>Notify all family members</span>
          </button>

          <button 
            onClick={() => handleEmergencyAlert('medical')}
            style={{
              width: '100%',
              padding: '20px',
              margin: '10px 0',
              background: 'linear-gradient(45deg, #6f42c1, #5a2d91)',
              color: 'white',
              border: 'none',
              borderRadius: '10px',
              fontSize: '20px',
              fontWeight: 'bold',
              cursor: 'pointer',
              boxShadow: '0 4px 15px rgba(111, 66, 193, 0.4)'
            }}
          >
            🏥 MEDICAL EMERGENCY<br />
            <span style={{ fontSize: '14px', fontWeight: 'normal' }}>Medical ID & ambulance request</span>
          </button>

          <button 
            onClick={() => handleEmergencyAlert('international')}
            style={{
              width: '100%',
              padding: '20px',
              margin: '10px 0',
              background: 'linear-gradient(45deg, #17a2b8, #117a8b)',
              color: 'white',
              border: 'none',
              borderRadius: '10px',
              fontSize: '20px',
              fontWeight: 'bold',
              cursor: 'pointer',
              boxShadow: '0 4px 15px rgba(23, 162, 184, 0.4)'
            }}
          >
            🌍 INTERNATIONAL EMERGENCY<br />
            <span style={{ fontSize: '14px', fontWeight: 'normal' }}>Global emergency services (25+ countries)</span>
          </button>
        </div>

        {/* GPS Emergency Locations */}
        <h3 style={{ textAlign: 'center', margin: '30px 0 20px 0' }}>🗺️ GPS EMERGENCY LOCATIONS</h3>

        <button 
          onClick={() => handleFindLocation('police')}
          style={{
            width: '100%',
            padding: '15px',
            margin: '10px 0',
            background: 'linear-gradient(45deg, #007bff, #0056b3)',
            color: 'white',
            border: 'none',
            borderRadius: '10px',
            fontSize: '16px',
            fontWeight: 'bold',
            cursor: 'pointer',
            boxShadow: '0 4px 15px rgba(0, 123, 255, 0.4)'
          }}
        >
          🚔 FIND POLICE STATION<br />
          <span style={{ fontSize: '12px', fontWeight: 'normal' }}>Opens GPS map to nearest police</span>
        </button>

        <button 
          onClick={() => handleFindLocation('fire')}
          style={{
            width: '100%',
            padding: '15px',
            margin: '10px 0',
            background: 'linear-gradient(45deg, #dc3545, #c82333)',
            color: 'white',
            border: 'none',
            borderRadius: '10px',
            fontSize: '16px',
            fontWeight: 'bold',
            cursor: 'pointer',
            boxShadow: '0 4px 15px rgba(220, 53, 69, 0.4)'
          }}
        >
          🚒 FIND FIRE DEPARTMENT<br />
          <span style={{ fontSize: '12px', fontWeight: 'normal' }}>Opens GPS map to nearest fire station</span>
        </button>

        <button 
          onClick={() => handleFindLocation('hospital')}
          style={{
            width: '100%',
            padding: '15px',
            margin: '10px 0',
            background: 'linear-gradient(45deg, #28a745, #1e7e34)',
            color: 'white',
            border: 'none',
            borderRadius: '10px',
            fontSize: '16px',
            fontWeight: 'bold',
            cursor: 'pointer',
            boxShadow: '0 4px 15px rgba(40, 167, 69, 0.4)'
          }}
        >
          🏥 FIND HOSPITAL/ER<br />
          <span style={{ fontSize: '12px', fontWeight: 'normal' }}>Opens GPS map to nearest emergency room</span>
        </button>

        <button 
          onClick={() => handleFindLocation('pharmacy')}
          style={{
            width: '100%',
            padding: '15px',
            margin: '10px 0',
            background: 'linear-gradient(45deg, #6f42c1, #5a2d91)',
            color: 'white',
            border: 'none',
            borderRadius: '10px',
            fontSize: '16px',
            fontWeight: 'bold',
            cursor: 'pointer',
            boxShadow: '0 4px 15px rgba(111, 66, 193, 0.4)'
          }}
        >
          💊 FIND 24HR PHARMACY<br />
          <span style={{ fontSize: '12px', fontWeight: 'normal' }}>Opens GPS map to nearest 24-hour pharmacy</span>
        </button>

        {/* Additional
