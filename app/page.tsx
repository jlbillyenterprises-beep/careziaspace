'use client'

import { useState } from 'react'

export default function CareZiaDirectory() {
  const [activeTab, setActiveTab] = useState('emergency')

  // Emergency Functions
  const call911 = () => {
    if (confirm('This will call 911 Emergency Services. Continue?')) {
      window.location.href = 'tel:911'
      shareLocation()
    }
  }

  const shareLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const coords = `${position.coords.latitude},${position.coords.longitude}`
        alert(`Location coordinates: ${coords}\n\nShare these coordinates with emergency contacts if needed.`)
      }, () => {
        alert('Location sharing not available. Please manually share your address with emergency contacts.')
      })
    } else {
      alert('GPS not available on this device. Please manually share your location with emergency contacts.')
    }
  }

  const familyAlert = () => {
    alert('Emergency Alert System:\n\n• Contact your family members directly\n• Share your location if needed\n• Use emergency contact list below')
  }

  const medicalEmergency = () => {
    alert('Medical Emergency Resources:\n\n• Call 911 for immediate medical emergencies\n• Contact your doctor or urgent care\n• Use medical ID information if available')
  }

  const crisisSupport = () => {
    alert('Crisis Support Resources:\n\n• 988 - Suicide & Crisis Lifeline (24/7)\n• 741741 - Crisis Text Line (Text HOME)\n• 1-800-662-4357 - SAMHSA Mental Health Helpline\n• 911 - Life-threatening emergencies')
  }

  // Location Services
  const findService = (service: string) => {
    const searchUrls = {
      police: 'https://www.google.com/maps/search/police+station+near+me',
      fire: 'https://www.google.com/maps/search/fire+station+near+me', 
      hospital: 'https://www.google.com/maps/search/hospital+emergency+room+near+me',
      pharmacy: 'https://www.google.com/maps/search/24+hour+pharmacy+near+me'
    }
    window.open(searchUrls[service as keyof typeof searchUrls], '_blank')
  }

  const EmergencyTab = () => (
    <div className="space-y-6">
      {/* Main Emergency Controls */}
      <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 rounded">
        <p className="text-yellow-800 font-semibold">Emergency Resource Directory</p>
        <p className="text-yellow-700 text-sm">Connect to emergency services and crisis support resources</p>
      </div>

      <div className="grid grid-cols-1 gap-4 max-w-lg mx-auto">
        <button 
          onClick={call911}
          className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-6 rounded-lg text-lg transition-all"
        >
          📞 CALL 911
          <div className="text-sm font-normal">Immediate emergency response</div>
        </button>
        
        <button 
          onClick={shareLocation}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-lg transition-all"
        >
          📍 SHARE MY LOCATION
          <div className="text-sm font-normal">Get GPS coordinates to share</div>
        </button>
        
        <button 
          onClick={familyAlert}
          className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-6 rounded-lg transition-all"
        >
          👨‍👩‍👧‍👦 FAMILY EMERGENCY ALERT
          <div className="text-sm font-normal">Emergency contact guidance</div>
        </button>
        
        <button 
          onClick={medicalEmergency}
          className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-6 rounded-lg transition-all"
        >
          🏥 MEDICAL EMERGENCY
          <div className="text-sm font-normal">Medical emergency resources</div>
        </button>
        
        <button 
          onClick={crisisSupport}
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 px-6 rounded-lg transition-all"
        >
          🆘 CRISIS SUPPORT
          <div className="text-sm font-normal">24/7 crisis hotlines</div>
        </button>
      </div>

      {/* GPS Location Services */}
      <div className="mt-8">
        <h3 className="text-center text-blue-600 font-bold text-lg mb-4">📍 Find Emergency Services</h3>
        
        <div className="grid grid-cols-2 gap-3">
          <button 
            onClick={() => findService('police')}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-4 rounded text-sm"
          >
            👮 FIND POLICE
            <div className="text-xs font-normal">Nearest police station</div>
          </button>
          
          <button 
            onClick={() => findService('fire')}
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-4 rounded text-sm"
          >
            🚒 FIND FIRE DEPT
            <div className="text-xs font-normal">Nearest fire station</div>
          </button>
          
          <button 
            onClick={() => findService('hospital')}
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 rounded text-sm"
          >
            🏥 FIND HOSPITAL
            <div className="text-xs font-normal">Nearest emergency room</div>
          </button>
          
          <button 
            onClick={() => findService('pharmacy')}
            className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 px-4 rounded text-sm"
          >
            💊 FIND PHARMACY
            <div className="text-xs font-normal">24-hour pharmacy</div>
          </button>
        </div>
      </div>
    </div>
  )

  const ResourcesTab = () => (
    <div className="space-y-6">
      <div className="bg-blue-50 p-6 rounded-lg">
        <h3 className="text-xl font-semibold text-blue-800 mb-4">Crisis Support Hotlines</h3>
        <div className="space-y-3 text-blue-700">
          <div><strong>988</strong> - Suicide & Crisis Lifeline (24/7)</div>
          <div><strong>741741</strong> - Crisis Text Line (Text "HOME")</div>
          <div><strong>1-800-662-4357</strong> - SAMHSA Mental Health</div>
          <div><strong>1-800-799-7233</strong> - Domestic Violence Hotline</div>
          <div><strong>911</strong> - Life-threatening emergencies</div>
        </div>
      </div>

      <div className="bg-green-50 p-6 rounded-lg">
        <h3 className="text-xl font-semibold text-green-800 mb-4">Mental Health Resources</h3>
        <div className="space-y-2 text-green-700">
          <div>• National Alliance on Mental Illness (NAMI)</div>
          <div>• Psychology Today therapist directory</div>
          <div>• Local community mental health centers</div>
          <div>• Employee Assistance Programs (EAP)</div>
        </div>
      </div>

      <div className="bg-yellow-50 p-6 rounded-lg">
        <h3 className="text-xl font-semibold text-yellow-800 mb-4">Important Notes</h3>
        <div className="space-y-2 text-yellow-700 text-sm">
          <div>• This is a resource directory, not professional services</div>
          <div>• Always contact licensed professionals for medical/mental health needs</div>
          <div>• Verify phone numbers independently</div>
          <div>• Keep emergency contacts updated</div>
        </div>
      </div>
    </div>
  )

  const AboutTab = () => (
    <div className="space-y-6">
      <div className="bg-gray-50 p-6 rounded-lg">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">About CareZia Directory</h3>
        <p className="text-gray-700 mb-4">
          CareZia is an emergency resource directory designed to help individuals and families quickly 
          access emergency services and crisis support resources when needed.
        </p>
        <p className="text-gray-700">
          We provide organized access to verified emergency contact information and location services 
          to help coordinate emergency response and family communication during crisis situations.
        </p>
      </div>

      <div className="bg-red-50 border border-red-200 p-6 rounded-lg">
        <h4 className="text-red-800 font-semibold mb-2">Important Disclaimer</h4>
        <p className="text-red-700 text-sm">
          This platform provides directory services and resource coordination only. We do not provide 
          medical, mental health, or emergency response services directly. Always contact licensed 
          professionals and official emergency services for actual assistance.
        </p>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">🚨 CareZia Directory</h1>
          <p className="text-blue-100">Emergency Resource Directory & Communication Platform</p>
        </div>

        {/* Navigation */}
        <div className="flex justify-center mb-8 space-x-2">
          <button
            onClick={() => setActiveTab('emergency')}
            className={`px-4 py-2 rounded font-medium transition ${
              activeTab === 'emergency' 
                ? 'bg-white text-blue-600' 
                : 'bg-blue-600 text-white hover:bg-blue-700'
            }`}
          >
            🚨 Emergency
          </button>
          <button
            onClick={() => setActiveTab('resources')}
            className={`px-4 py-2 rounded font-medium transition ${
              activeTab === 'resources' 
                ? 'bg-white text-blue-600' 
                : 'bg-blue-600 text-white hover:bg-blue-700'
            }`}
          >
            📞 Resources
          </button>
          <button
            onClick={() => setActiveTab('about')}
            className={`px-4 py-2 rounded font-medium transition ${
              activeTab === 'about' 
                ? 'bg-white text-blue-600' 
                : 'bg-blue-600 text-white hover:bg-blue-700'
            }`}
          >
            ℹ️ About
          </button>
        </div>

        {/* Content */}
        <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-2xl p-8">
          {activeTab === 'emergency' && <EmergencyTab />}
          {activeTab === 'resources' && <ResourcesTab />}
          {activeTab === 'about' && <AboutTab />}
        </div>
      </div>
    </div>
  )
}
