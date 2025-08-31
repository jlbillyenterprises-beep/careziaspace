'use client'

export default function Home() {
  const shareLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const coord = `${position.coords.latitude},${position.coords.longitude}`;
        alert('📍 Location shared: ' + coord);
      });
    } else {
      alert('❌ GPS location not available on this device');
    }
  };

  const familyAlert = () => alert('👨‍👩‍👧‍👦 Family Emergency Alert Sent!');
  const medicalEmergency = () => alert('🏥 Medical Emergency Alert Sent!');
  const internationalEmergency = () => alert('🌍 International Emergency Services Contacted!');
  const findPolice = () => window.open('https://www.google.com/maps/search/police+station+near+me');
  const findFire = () => window.open('https://www.google.com/maps/search/fire+station+near+me');
  const findHospital = () => window.open('https://www.google.com/maps/search/hospital+near+me');
  const findPharmacy = () => window.open('https://www.google.com/maps/search/pharmacy+near+me');

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 p-5">
      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-2xl p-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          🚨 CareZia Emergency App
        </h1>
        
        <div className="bg-red-50 p-6 rounded-lg mb-6">
          <h3 className="text-2xl font-semibold text-red-600 mb-4">🆘 Emergency Alerts</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <button onClick={shareLocation} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg">📍 Share My Location</button>
            <button onClick={familyAlert} className="bg-red-500 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg">👨‍👩‍👧‍👦 Family Emergency Alert</button>
            <button onClick={medicalEmergency} className="bg-red-600 hover:bg-red-800 text-white font-bold py-3 px-6 rounded-lg">🏥 Medical Emergency</button>
            <button onClick={internationalEmergency} className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg">🌍 International Emergency</button>
          </div>
        </div>

        <div className="bg-green-50 p-6 rounded-lg">
          <h3 className="text-2xl font-semibold text-green-600 mb-4">🔍 Find Emergency Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <button onClick={findPolice} className="bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg">👮‍♂️ Find Police</button>
            <button onClick={findFire} className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-3 px-6 rounded-lg">🚒 Find Fire Department</button>
            <button onClick={findHospital} className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-lg">🏥 Find Hospital</button>
            <button onClick={findPharmacy} className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-3 px-6 rounded-lg">💊 Find Pharmacy</button>
          </div>
        </div>
      </div>
    </div>
  );
}
