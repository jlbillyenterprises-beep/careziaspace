export default function Home() {
  return (
    <div style={{
      fontFamily: 'Arial, sans-serif',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
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

      <main style={{ padding: '20px', textAlign: 'center' }}>
        <h1>CareZiaSpace - Digital Emergency</h1>
        <p>Your emergency response platform is ready.</p>
      </main>
    </div>
  );
}
