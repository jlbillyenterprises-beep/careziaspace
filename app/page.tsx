<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Emergency Remote - Life-Saving Technology</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
            color: white;
            min-height: 100vh;
            overflow-x: hidden;
        }

        .header {
            background: #1a1a2e;
            padding: 10px 20px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1px solid #333;
        }

        .logo {
            font-size: 18px;
            font-weight: 600;
        }

        .contact-btn {
            background: #e74c3c;
            color: white;
            border: none;
            padding: 8px 16px;
            border-radius: 6px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
        }

        .contact-btn:hover {
            background: #c0392b;
            transform: translateY(-2px);
        }

        .hero {
            background: linear-gradient(135deg, #e74c3c 0%, #c0392b 100%);
            padding: 40px 20px;
            text-align: center;
        }

        .hero h1 {
            font-size: 2.5rem;
            margin-bottom: 10px;
            font-weight: 700;
        }

        .hero h2 {
            font-size: 1.8rem;
            margin-bottom: 20px;
            font-weight: 500;
        }

        .hero p {
            font-size: 1.1rem;
            line-height: 1.6;
            max-width: 800px;
            margin: 0 auto;
            opacity: 0.95;
        }

        .main-container {
            padding: 20px;
            max-width: 1200px;
            margin: 0 auto;
        }

        .country-selector {
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            padding: 20px;
            border-radius: 15px;
            margin-bottom: 30px;
            text-align: center;
        }

        .country-selector h3 {
            margin-bottom: 15px;
            color: #3498db;
        }

        .country-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
            gap: 10px;
            margin-top: 15px;
        }

        .country-btn {
            background: linear-gradient(135deg, #3498db 0%, #2980b9 100%);
            border: none;
            color: white;
            padding: 10px;
            border-radius: 8px;
            cursor: pointer;
            font-size: 0.9rem;
            transition: all 0.3s ease;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 5px;
        }

        .country-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 25px rgba(52, 152, 219, 0.3);
        }

        .country-btn.active {
            background: linear-gradient(135deg, #e74c3c 0%, #c0392b 100%);
        }

        .emergency-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 20px;
            margin-bottom: 30px;
        }

        .emergency-card {
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            border-radius: 15px;
            padding: 20px;
            transition: all 0.3s ease;
            border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .emergency-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
        }

        .card-header {
            display: flex;
            align-items: center;
            gap: 15px;
            margin-bottom: 15px;
        }

        .card-icon {
            font-size: 2rem;
        }

        .card-title {
            font-size: 1.3rem;
            font-weight: 600;
        }

        .action-buttons {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            margin-top: 15px;
        }

        .action-btn {
            background: linear-gradient(135deg, #27ae60 0%, #219a52 100%);
            border: none;
            color: white;
            padding: 10px 15px;
            border-radius: 8px;
            cursor: pointer;
            font-size: 0.9rem;
            font-weight: 600;
            transition: all 0.3s ease;
            flex: 1;
            min-width: 120px;
        }

        .action-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 20px rgba(39, 174, 96, 0.3);
        }

        .action-btn.emergency {
            background: linear-gradient(135deg, #e74c3c 0%, #c0392b 100%);
        }

        .action-btn.emergency:hover {
            box-shadow: 0 8px 20px rgba(231, 76, 60, 0.3);
        }

        .action-btn.info {
            background: linear-gradient(135deg, #3498db 0%, #2980b9 100%);
        }

        .action-btn.info:hover {
            box-shadow: 0 8px 20px rgba(52, 152, 219, 0.3);
        }

        .family-section {
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            border-radius: 15px;
            padding: 20px;
            margin-bottom: 20px;
        }

        .family-section h3 {
            color: #f39c12;
            margin-bottom: 15px;
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .contact-list {
            display: grid;
            gap: 10px;
        }

        .contact-item {
            background: rgba(255, 255, 255, 0.05);
            padding: 15px;
            border-radius: 10px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .contact-info {
            display: flex;
            flex-direction: column;
            gap: 5px;
        }

        .contact-name {
            font-weight: 600;
            font-size: 1.1rem;
        }

        .contact-relation {
            color: #bdc3c7;
            font-size: 0.9rem;
        }

        .contact-actions {
            display: flex;
            gap: 10px;
        }

        .contact-btn-small {
            background: #27ae60;
            border: none;
            color: white;
            padding: 8px 12px;
            border-radius: 6px;
            cursor: pointer;
            font-size: 0.8rem;
            transition: all 0.3s ease;
        }

        .contact-btn-small:hover {
            background: #219a52;
            transform: translateY(-1px);
        }

        .contact-btn-small.track {
            background: #3498db;
        }

        .contact-btn-small.track:hover {
            background: #2980b9;
        }

        .gps-info {
            background: rgba(46, 204, 113, 0.1);
            border: 1px solid rgba(46, 204, 113, 0.3);
            padding: 15px;
            border-radius: 10px;
            margin-bottom: 20px;
            text-align: center;
        }

        .status-indicator {
            display: inline-block;
            width: 12px;
            height: 12px;
            background: #27ae60;
            border-radius: 50%;
            margin-right: 10px;
            animation: pulse 2s infinite;
        }

        @keyframes pulse {
            0% { opacity: 1; }
            50% { opacity: 0.5; }
            100% { opacity: 1; }
        }

        .add-contact {
            background: linear-gradient(135deg, #f39c12 0%, #e67e22 100%);
            border: none;
            color: white;
            padding: 15px;
            border-radius: 10px;
            cursor: pointer;
            font-weight: 600;
            width: 100%;
            margin-top: 15px;
            transition: all 0.3s ease;
        }

        .add-contact:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 20px rgba(243, 156, 18, 0.3);
        }

        .modal {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.8);
            backdrop-filter: blur(5px);
            z-index: 1000;
        }

        .modal-content {
            background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
            margin: 10% auto;
            padding: 20px;
            border-radius: 15px;
            width: 90%;
            max-width: 500px;
            position: relative;
        }

        .close {
            position: absolute;
            right: 15px;
            top: 15px;
            font-size: 28px;
            font-weight: bold;
            cursor: pointer;
            color: #bdc3c7;
        }

        .close:hover {
            color: #e74c3c;
        }

        @media (max-width: 768px) {
            .hero h1 {
                font-size: 2rem;
            }
            
            .hero h2 {
                font-size: 1.5rem;
            }
            
            .emergency-grid {
                grid-template-columns: 1fr;
            }
            
            .country-grid {
                grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
            }
        }
    </style>
</head>
<body>
    <div class="header">
        <div class="logo">Emergency Remote</div>
        <button class="contact-btn" onclick="showContactModal()">Contact Us</button>
    </div>

    <div class="hero">
        <h1>Emergency Remote</h1>
        <h2>Life-Saving Technology for Your Family</h2>
        <p>Advanced AI-powered emergency response technology that connects your family when seconds matter most. One tap gives you organized emergency contacts, GPS location sharing, and 24/7 crisis support.</p>
    </div>

    <div class="main-container">
        <div class="gps-info">
            <span class="status-indicator"></span>
            <strong>GPS Active:</strong> Your location is being tracked for emergency services
            <br><small>Lat: 35.9606° N, Long: 83.9207° W (Knoxville, TN)</small>
        </div>

        <div class="country-selector">
            <h3>🌍 Select Your Country/Region</h3>
            <p>Choose your location for localized emergency services and contacts</p>
            <div class="country-grid">
                <button class="country-btn active" onclick="selectCountry('US')" data-country="US">
                    🇺🇸<br>USA
                </button>
                <button class="country-btn" onclick="selectCountry('CA')" data-country="CA">
                    🇨🇦<br>Canada
                </button>
                <button class="country-btn" onclick="selectCountry('UK')" data-country="UK">
                    🇬🇧<br>UK
                </button>
                <button class="country-btn" onclick="selectCountry('AU')" data-country="AU">
                    🇦🇺<br>Australia
                </button>
                <button class="country-btn" onclick="selectCountry('DE')" data-country="DE">
                    🇩🇪<br>Germany
                </button>
                <button class="country-btn" onclick="selectCountry('FR')" data-country="FR">
                    🇫🇷<br>France
                </button>
                <button class="country-btn" onclick="selectCountry('JP')" data-country="JP">
                    🇯🇵<br>Japan
                </button>
                <button class="country-btn" onclick="selectCountry('IN')" data-country="IN">
                    🇮🇳<br>India
                </button>
            </div>
        </div>

        <div class="emergency-grid">
            <div class="emergency-card">
                <div class="card-header">
                    <div class="card-icon">🚨</div>
                    <div class="card-title">Emergency Services</div>
                </div>
                <p>Immediate access to police, fire, and medical emergency services</p>
                <div class="action-buttons">
                    <button class="action-btn emergency" onclick="callEmergency('911')">📞 Call 911</button>
                    <button class="action-btn info" onclick="findNearbyServices('police')">🚓 Find Police</button>
                </div>
            </div>

            <div class="emergency-card">
                <div class="card-header">
                    <div class="card-icon">🏥</div>
                    <div class="card-title">Medical Services</div>
                </div>
                <p>Locate nearest hospitals, urgent care, and medical facilities</p>
                <div class="action-buttons">
                    <button class="action-btn emergency" onclick="callEmergency('911')">🚑 Call Ambulance</button>
                    <button class="action-btn info" onclick="findNearbyServices('hospital')">🏥 Find Hospitals</button>
                </div>
            </div>

            <div class="emergency-card">
                <div class="card-header">
                    <div class="card-icon">🔥</div>
                    <div class="card-title">Fire Department</div>
                </div>
                <p>Fire emergency services and safety information</p>
                <div class="action-buttons">
                    <button class="action-btn emergency" onclick="callEmergency('911')">🚒 Call Fire Dept</button>
                    <button class="action-btn info" onclick="findNearbyServices('fire')">🔥 Find Stations</button>
                </div>
            </div>

            <div class="emergency-card">
                <div class="card-header">
                    <div class="card-icon">🌍</div>
                    <div class="card-title">Embassy Services</div>
                </div>
                <p>Contact embassy and consular services for international emergencies</p>
                <div class="action-buttons">
                    <button class="action-btn info" onclick="findEmbassy()">🏛️ Find Embassy</button>
                    <button class="action-btn info" onclick="translateSOS()">🗣️ Translate SOS</button>
                </div>
            </div>
        </div>

        <div class="family-section">
            <h3>👨‍👩‍👧‍👦 Family Emergency Contacts</h3>
            <div class="contact-list" id="familyContacts">
                <div class="contact-item">
                    <div class="contact-info">
                        <div class="contact-name">Sarah Johnson</div>
                        <div class="contact-relation">Spouse</div>
                    </div>
                    <div class="contact-actions">
                        <button class="contact-btn-small" onclick="callContact('Sarah Johnson')">📞 Call</button>
                        <button class="contact-btn-small track" onclick="trackContact('Sarah Johnson')">📍 Track</button>
                    </div>
                </div>
                <div class="contact-item">
                    <div class="contact-info">
                        <div class="contact-name">Mom (Betty Johnson)</div>
                        <div class="contact-relation">Mother</div>
                    </div>
                    <div class="contact-actions">
                        <button class="contact-btn-small" onclick="callContact('Mom')">📞 Call</button>
                        <button class="contact-btn-small track" onclick="trackContact('Mom')">📍 Track</button>
                    </div>
                </div>
                <div class="contact-item">
                    <div class="contact-info">
                        <div class="contact-name">Dr. Smith</div>
                        <div class="contact-relation">Family Doctor</div>
                    </div>
                    <div class="contact-actions">
                        <button class="contact-btn-small" onclick="callContact('Dr. Smith')">📞 Call</button>
                        <button class="contact-btn-small info" onclick="viewContactInfo('Dr. Smith')">ℹ️ Info</button>
                    </div>
                </div>
            </div>
            <button class="add-contact" onclick="addNewContact()">➕ Add New Emergency Contact</button>
        </div>
    </div>

    <!-- Contact Modal -->
    <div id="contactModal" class="modal">
        <div class="modal-content">
            <span class="close" onclick="closeModal('contactModal')">&times;</span>
            <h2>Contact Emergency Remote Support</h2>
            <p><strong>24/7 Crisis Support:</strong> +1-800-EMERGENCY</p>
            <p><strong>Technical Support:</strong> support@careziaspace.com</p>
            <p><strong>Website:</strong> careziaspace.com</p>
            <br>
            <p>🌐 Available in 20+ languages</p>
            <p>🚨 Instant emergency response</p>
            <p>📍 GPS location services</p>
        </div>
    </div>

    <script>
        let currentCountry = 'US';
        
        const emergencyNumbers = {
            'US': '911',
            'CA': '911', 
            'UK': '999',
            'AU': '000',
            'DE': '112',
            'FR': '112',
            'JP': '110',
            'IN': '112'
        };

        const countryNames = {
            'US': 'United States',
            'CA': 'Canada',
            'UK': 'United Kingdom', 
            'AU': 'Australia',
            'DE': 'Germany',
            'FR': 'France',
            'JP': 'Japan',
            'IN': 'India'
        };

        function selectCountry(country) {
            // Update active button
            document.querySelectorAll('.country-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            document.querySelector(`[data-country="${country}"]`).classList.add('active');
            
            currentCountry = country;
            updateEmergencyNumbers();
            showNotification(`Switched to ${countryNames[country]}. Emergency number: ${emergencyNumbers[country]}`);
        }

        function updateEmergencyNumbers() {
            const emergencyNumber = emergencyNumbers[currentCountry];
            document.querySelectorAll('.action-btn.emergency').forEach(btn => {
                if (btn.textContent.includes('Call')) {
                    btn.onclick = () => callEmergency(emergencyNumber);
                }
            });
        }

        function callEmergency(number) {
            if (confirm(`This will attempt to call ${number}. Are you sure this is an emergency?`)) {
                // In a real app, this would initiate the call
                showNotification(`Calling ${number}... GPS location shared with emergency services.`);
                // For demonstration purposes
                window.open(`tel:${number}`);
            }
        }

        function findNearbyServices(type) {
            showNotification(`Finding nearest ${type} services in ${countryNames[currentCountry]}...`);
            
            // Simulate Google Maps integration
            setTimeout(() => {
                const services = {
                    'police': ['Knoxville Police Department (0.5 mi)', 'Knox County Sheriff (1.2 mi)', 'University of Tennessee Police (0.8 mi)'],
                    'hospital': ['University of Tennessee Medical Center (1.1 mi)', 'East Tennessee Children\'s Hospital (1.5 mi)', 'Parkwest Medical Center (3.2 mi)'],
                    'fire': ['Knoxville Fire Department Station 1 (0.3 mi)', 'Station 15 (0.7 mi)', 'Station 8 (1.1 mi)']
                };
                
                alert(`Nearest ${type} services:\n\n${services[type].join('\n')}\n\nTap any location to get directions via Google Maps.`);
            }, 1500);
        }

        function findEmbassy() {
            showNotification(`Finding ${countryNames[currentCountry]} embassy/consulate services...`);
            setTimeout(() => {
                alert(`Embassy Services for ${countryNames[currentCountry]}:\n\n• Emergency Consular Services: Available 24/7\n• Lost Passport Assistance\n• Legal Aid Referrals\n• Translation Services\n• Citizen Services\n\nContact: embassy.emergency@gov`);
            }, 1000);
        }

        function translateSOS() {
            const sosTranslations = {
                'US': 'HELP! EMERGENCY!',
                'CA': 'HELP! EMERGENCY!',
                'UK': 'HELP! EMERGENCY!',
                'AU': 'HELP! EMERGENCY!',
                'DE': 'HILFE! NOTFALL!',
                'FR': 'AIDE! URGENCE!',
                'JP': '助けて！緊急事態！',
                'IN': 'मदद! आपातकाल!'
            };
            
            alert(`SOS in ${countryNames[currentCountry]}:\n\n"${sosTranslations[currentCountry]}"\n\nShow this message to locals for help.`);
        }

        function callContact(name) {
            showNotification(`Calling ${name}... Location shared automatically.`);
            // In a real app, this would call the contact
        }

        function trackContact(name) {
            showNotification(`Requesting GPS location from ${name}...`);
            setTimeout(() => {
                alert(`${name}'s Location:\n\n📍 Main Street, Downtown Knoxville\nLast updated: Just now\n\n🗺️ Open in Maps for directions`);
            }, 2000);
        }

        function viewContactInfo(name) {
            alert(`${name} - Contact Information:\n\n📞 Phone: (865) 555-0123\n🏥 Practice: Knoxville Family Medicine\n📍 Address: 123 Medical Plaza\n\n⚕️ Specialties: Family Medicine, Emergency Care`);
        }

        function addNewContact() {
            const name = prompt("Enter contact name:");
            const relation = prompt("Enter relationship (e.g., Brother, Friend, Doctor):");
            const phone = prompt("Enter phone number:");
            
            if (name && relation && phone) {
                const contactList = document.getElementById('familyContacts');
                const newContact = document.createElement('div');
                newContact.className = 'contact-item';
                newContact.innerHTML = `
                    <div class="contact-info">
                        <div class="contact-name">${name}</div>
                        <div class="contact-relation">${relation}</div>
                    </div>
                    <div class="contact-actions">
                        <button class="contact-btn-small" onclick="callContact('${name}')">📞 Call</button>
                        <button class="contact-btn-small track" onclick="trackContact('${name}')">📍 Track</button>
                    </div>
                `;
                contactList.appendChild(newContact);
                showNotification(`${name} added to emergency contacts!`);
            }
        }

        function showContactModal() {
            document.getElementById('contactModal').style.display = 'block';
        }

        function closeModal(modalId) {
            document.getElementById(modalId).style.display = 'none';
        }

        function showNotification(message) {
            // Simple notification system
            const notification = document.createElement('div');
            notification.style.cssText = `
                position: fixed;
                top: 20px;
                right: 20px;
                background: linear-gradient(135deg, #27ae60, #219a52);
                color: white;
                padding: 15px 20px;
                border-radius: 10px;
                box-shadow: 0 10px 25px rgba(0,0,0,0.3);
                z-index: 10000;
                max-width: 300px;
                font-weight: 600;
                backdrop-filter: blur(10px);
                animation: slideIn 0.3s ease;
            `;
            notification.textContent = message;
            document.body.appendChild(notification);

            // Add animation keyframes
            if (!document.getElementById('notificationStyles')) {
                const style = document.createElement('style');
                style.id = 'notificationStyles';
                style.textContent = `
                    @keyframes slideIn {
                        from { transform: translateX(100%); opacity: 0; }
                        to { transform: translateX(0); opacity: 1; }
                    }
                `;
                document.head.appendChild(style);
            }

            setTimeout(() => {
                notification.style.animation = 'slideIn 0.3s ease reverse';
                setTimeout(() => {
                    document.body.removeChild(notification);
                }, 300);
            }, 3000);
        }

        // Close modals when clicking outside
        window.onclick = function(event) {
            const modals = document.querySelectorAll('.modal');
            modals.forEach(modal => {
                if (event.target === modal) {
                    modal.style.display = 'none';
                }
            });
        }

        // Initialize GPS tracking simulation
        function updateGPSLocation() {
            // Simulate GPS updates
            const coords = [
                { lat: 35.9606, lng: -83.9207, desc: "University of Tennessee, Knoxville" },
                { lat: 35.9640, lng: -83.9186, desc: "Downtown Knoxville" },
                { lat: 35.9500, lng: -83.9300, desc: "West Knoxville" }
            ];
            
            let index = 0;
            setInterval(() => {
                const coord = coords[index % coords.length];
                const gpsInfo = document.querySelector('.gps-info small');
                if (gpsInfo) {
                    gpsInfo.textContent = `Lat: ${coord.lat}° N, Long: ${coord.lng}° W (${coord.desc})`;
                }
                index++;
            }, 10000);
        }

        // Start GPS simulation
        updateGPSLocation();

        // Show welcome message
        setTimeout(() => {
            showNotification('Emergency Remote activated! Your safety is our priority. 🛡️');
        }, 1000);
    </script>
</body>
</html>
