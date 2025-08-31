<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CareZiaSpace - Digital Emergency</title>
    <meta name="theme-color" content="#2c3e50">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            -webkit-tap-highlight-color: transparent;
        }

        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            background: #2c3e50;
            color: white;
            min-height: 100vh;
            overflow-x: hidden;
            position: relative;
        }

        .status-bar {
            background: linear-gradient(135deg, #e74c3c 0%, #27ae60 100%);
            color: white;
            padding: 15px 20px;
            text-align: center;
            font-weight: 600;
            font-size: 0.9rem;
            position: relative;
        }

        .status-bar::before {
            content: '🛡️';
            margin-right: 8px;
        }

        .lifetime-banner {
            background: #f1c40f;
            color: #2c3e50;
            padding: 15px 20px;
            text-align: center;
            font-weight: 700;
            font-size: 1rem;
            margin-bottom: 30px;
        }

        .lifetime-banner::before {
            content: '⭐';
            margin-right: 8px;
        }

        .app-title {
            text-align: center;
            margin: 30px 0;
            font-size: 1.5rem;
            font-weight: 300;
            opacity: 0.9;
        }

        .emergency-container {
            padding: 20px;
            max-width: 400px;
            margin: 0 auto;
        }

        .emergency-btn {
            width: 100%;
            border: none;
            border-radius: 15px;
            padding: 25px 20px;
            margin-bottom: 15px;
            font-size: 1.1rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 12px;
            position: relative;
            overflow: hidden;
        }

        .emergency-btn::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
            transition: left 0.5s;
        }

        .emergency-btn:active::before {
            left: 100%;
        }

        .emergency-btn:active {
            transform: scale(0.98);
        }

        .btn-call {
            background: #e74c3c;
            color: white;
        }

        .btn-call:hover {
            background: #c0392b;
            box-shadow: 0 8px 25px rgba(231, 76, 60, 0.3);
        }

        .btn-location {
            background: #3498db;
            color: white;
        }

        .btn-location:hover {
            background: #2980b9;
            box-shadow: 0 8px 25px rgba(52, 152, 219, 0.3);
        }

        .btn-family {
            background: #27ae60;
            color: white;
        }

        .btn-family:hover {
            background: #219a52;
            box-shadow: 0 8px 25px rgba(39, 174, 96, 0.3);
        }

        .btn-medical {
            background: #9b59b6;
            color: white;
        }

        .btn-medical:hover {
            background: #8e44ad;
            box-shadow: 0 8px 25px rgba(155, 89, 182, 0.3);
        }

        .btn-international {
            background: linear-gradient(135deg, #1abc9c 0%, #16a085 100%);
            color: white;
        }

        .btn-international:hover {
            box-shadow: 0 8px 25px rgba(26, 188, 156, 0.3);
        }

        .btn-description {
            font-size: 0.9rem;
            font-weight: 400;
            opacity: 0.9;
            margin-top: 5px;
        }

        .modal {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.9);
            backdrop-filter: blur(10px);
            z-index: 10000;
            animation: fadeIn 0.3s ease;
        }

        .modal-content {
            background: #2c3e50;
            margin: 10% auto;
            padding: 30px;
            border-radius: 20px;
            width: 90%;
            max-width: 500px;
            position: relative;
            animation: slideUp 0.3s ease;
        }

        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }

        @keyframes slideUp {
            from { transform: translateY(50px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
        }

        .close {
            position: absolute;
            right: 15px;
            top: 15px;
            font-size: 28px;
            font-weight: bold;
            cursor: pointer;
            color: #bdc3c7;
            width: 40px;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.1);
            transition: all 0.3s ease;
        }

        .close:hover {
            background: #e74c3c;
            color: white;
        }

        .family-list {
            margin: 20px 0;
        }

        .family-member {
            background: rgba(255, 255, 255, 0.1);
            padding: 15px;
            border-radius: 10px;
            margin-bottom: 10px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .member-info {
            flex-grow: 1;
        }

        .member-name {
            font-weight: 600;
            font-size: 1.1rem;
        }

        .member-relation {
            color: #bdc3c7;
            font-size: 0.9rem;
        }

        .member-actions {
            display: flex;
            gap: 10px;
        }

        .action-btn {
            background: #3498db;
            color: white;
            border: none;
            padding: 8px 12px;
            border-radius: 6px;
            cursor: pointer;
            font-size: 0.8rem;
            transition: all 0.3s ease;
        }

        .action-btn:hover {
            background: #2980b9;
        }

        .action-btn.delete {
            background: #e74c3c;
        }

        .action-btn.delete:hover {
            background: #c0392b;
        }

        .add-family-btn {
            background: #f39c12;
            color: white;
            border: none;
            padding: 15px;
            border-radius: 10px;
            cursor: pointer;
            font-weight: 600;
            width: 100%;
            margin-top: 15px;
            transition: all 0.3s ease;
        }

        .add-family-btn:hover {
            background: #e67e22;
        }

        .form-group {
            margin-bottom: 20px;
        }

        .form-group label {
            display: block;
            margin-bottom: 8px;
            font-weight: 600;
            color: #ecf0f1;
        }

        .form-group input, .form-group select {
            width: 100%;
            padding: 12px;
            border: none;
            border-radius: 8px;
            background: rgba(255, 255, 255, 0.1);
            color: white;
            font-size: 1rem;
        }

        .form-group input::placeholder {
            color: rgba(255, 255, 255, 0.6);
        }

        .save-btn {
            background: #27ae60;
            color: white;
            border: none;
            padding: 15px 30px;
            border-radius: 10px;
            cursor: pointer;
            font-weight: 600;
            font-size: 1rem;
            width: 100%;
            transition: all 0.3s ease;
        }

        .save-btn:hover {
            background: #219a52;
        }

        .gps-status {
            background: rgba(39, 174, 96, 0.2);
            border: 1px solid #27ae60;
            padding: 15px;
            border-radius: 10px;
            margin: 20px;
            text-align: center;
        }

        .gps-indicator {
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

        .notification {
            position: fixed;
            top: 20px;
            right: 20px;
            background: #27ae60;
            color: white;
            padding: 15px 20px;
            border-radius: 10px;
            box-shadow: 0 10px 25px rgba(0,0,0,0.3);
            z-index: 10001;
            animation: slideInRight 0.5s ease;
            max-width: 300px;
        }

        @keyframes slideInRight {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }

        .platform-link {
            position: fixed;
            bottom: 20px;
            right: 20px;
            background: #f39c12;
            color: white;
            padding: 15px 20px;
            border-radius: 50px;
            text-decoration: none;
            font-weight: 600;
            box-shadow: 0 8px 25px rgba(243, 156, 18, 0.3);
            transition: all 0.3s ease;
            animation: float 3s ease-in-out infinite;
        }

        @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
        }

        .platform-link:hover {
            background: #e67e22;
            transform: scale(1.1);
        }

        @media (max-width: 480px) {
            .emergency-container {
                padding: 15px;
            }
            
            .modal-content {
                margin: 5% auto;
                padding: 20px;
                width: 95%;
            }
            
            .emergency-btn {
                padding: 20px 15px;
                font-size: 1rem;
            }
        }
    </style>
</head>
<body>
    <div class="status-bar">
        CAMPUS GUARD ALERT: Emergency protocols activated
    </div>

    <div class="lifetime-banner">
        LIFETIME ACCESS - No monthly fees
    </div>

    <div class="app-title">
        CareZiaSpace - Digital Emergency
    </div>

    <div class="gps-status">
        <span class="gps-indicator"></span>
        <strong>GPS Active:</strong> Your location is being tracked for emergency services
        <br><small id="location-display">Knoxville, TN • Ready for emergency dispatch</small>
    </div>

    <div class="emergency-container">
        <button class="emergency-btn btn-call" onclick="call911()">
            📞 CALL 911
            <div class="btn-description">Immediate emergency response</div>
        </button>

        <button class="emergency-btn btn-location" onclick="shareLocation()">
            📍 SHARE MY LOCATION
            <div class="btn-description">GPS coordinates to family & 911</div>
        </button>

        <button class="emergency-btn btn-family" onclick="showFamilyModal()">
            👨‍👩‍👧‍👦 FAMILY EMERGENCY ALERT
            <div class="btn-description">Notify all family members</div>
        </button>

        <button class="emergency-btn btn-medical" onclick="medicalEmergency()">
            🏥 MEDICAL EMERGENCY
            <div class="btn-description">Medical ID & ambulance request</div>
        </button>

        <button class="emergency-btn btn-international" onclick="internationalEmergency()">
            🌍 INTERNATIONAL EMERGENCY
            <div class="btn-description">Global emergency services (25+ countries)</div>
        </button>
    </div>

    <!-- Family Management Modal -->
    <div id="familyModal" class="modal">
        <div class="modal-content">
            <span class="close" onclick="closeModal('familyModal')">&times;</span>
            <h2 style="text-align: center; margin-bottom: 30px; color: #27ae60;">👨‍👩‍👧‍👦 Family Emergency Contacts</h2>
            
            <div class="family-list" id="familyList">
                <!-- Family members will be loaded here -->
            </div>
            
            <button class="add-family-btn" onclick="showAddFamilyForm()">➕ Add New Family Member</button>
        </div>
    </div>

    <!-- Add Family Member Modal -->
    <div id="addFamilyModal" class="modal">
        <div class="modal-content">
            <span class="close" onclick="closeModal('addFamilyModal')">&times;</span>
            <h2 style="text-align: center; margin-bottom: 30px; color: #f39c12;">➕ Add Family Member</h2>
            
            <form id="familyForm" onsubmit="saveFamilyMember(event)">
                <div class="form-group">
                    <label for="memberName">Full Name</label>
                    <input type="text" id="memberName" name="name" placeholder="Enter full name" required>
                </div>
                
                <div class="form-group">
                    <label for="memberRelation">Relationship</label>
                    <select id="memberRelation" name="relation" required>
                        <option value="">Select relationship</option>
                        <option value="Spouse">Spouse</option>
                        <option value="Parent">Parent</option>
                        <option value="Child">Child</option>
                        <option value="Sibling">Brother/Sister</option>
                        <option value="Grandparent">Grandparent</option>
                        <option value="Friend">Friend</option>
                        <option value="Doctor">Doctor</option>
                        <option value="Emergency Contact">Emergency Contact</option>
                    </select>
                </div>
                
                <div class="form-group">
                    <label for="memberPhone">Phone Number</label>
                    <input type="tel" id="memberPhone" name="phone" placeholder="(555) 123-4567" required>
                </div>
                
                <div class="form-group">
                    <label for="memberEmail">Email (Optional)</label>
                    <input type="email" id="memberEmail" name="email" placeholder="email@example.com">
                </div>
                
                <button type="submit" class="save-btn">💾 Save Contact</button>
            </form>
        </div>
    </div>

    <!-- International Emergency Modal -->
    <div id="internationalModal" class="modal">
        <div class="modal-content">
            <span class="close" onclick="closeModal('internationalModal')">&times;</span>
            <h2 style="text-align: center; margin-bottom: 30px; color: #1abc9c;">🌍 International Emergency Services</h2>
            
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)); gap: 15px;">
                <button onclick="selectCountry('US', '911')" style="background: #3498db; color: white; border: none; padding: 15px 10px; border-radius: 10px; cursor: pointer;">🇺🇸<br>USA<br>911</button>
                <button onclick="selectCountry('CA', '911')" style="background: #3498db; color: white; border: none; padding: 15px 10px; border-radius: 10px; cursor: pointer;">🇨🇦<br>Canada<br>911</button>
                <button onclick="selectCountry('UK', '999')" style="background: #3498db; color: white; border: none; padding: 15px 10px; border-radius: 10px; cursor: pointer;">🇬🇧<br>UK<br>999</button>
                <button onclick="selectCountry('AU', '000')" style="background: #3498db; color: white; border: none; padding: 15px 10px; border-radius: 10px; cursor: pointer;">🇦🇺<br>Australia<br>000</button>
                <button onclick="selectCountry('DE', '112')" style="background: #3498db; color: white; border: none; padding: 15px 10px; border-radius: 10px; cursor: pointer;">🇩🇪<br>Germany<br>112</button>
                <button onclick="selectCountry('FR', '112')" style="background: #3498db; color: white; border: none; padding: 15px 10px; border-radius: 10px; cursor: pointer;">🇫🇷<br>France<br>112</button>
                <button onclick="selectCountry('JP', '110')" style="background: #3498db; color: white; border: none; padding: 15px 10px; border-radius: 10px; cursor: pointer;">🇯🇵<br>Japan<br>110</button>
                <button onclick="selectCountry('IN', '112')" style="background: #3498db; color: white; border: none; padding: 15px 10px; border-radius: 10px; cursor: pointer;">🇮🇳<br>India<br>112</button>
            </div>
            
            <div style="margin-top: 30px; text-align: center;">
                <button onclick="translateSOS()" style="background: #f39c12; color: white; border: none; padding: 15px 30px; border-radius: 10px; cursor: pointer; font-weight: 600;">🗣️ Translate Emergency Phrases</button>
            </div>
        </div>
    </div>

    <a href="#" class="platform-link" onclick="openFullPlatform()">
        🌟 Full Platform
    </a>

    <script>
        // Family members storage
        let familyMembers = JSON.parse(localStorage.getItem('familyMembers')) || [
            {
                id: 1,
                name: 'Sarah Johnson',
                relation: 'Spouse',
                phone: '(865) 555-0001',
                email: 'sarah@email.com'
            },
            {
                id: 2,
                name: 'Mom (Betty Johnson)',
                relation: 'Parent',
                phone: '(865) 555-0002',
                email: 'mom@email.com'
            }
        ];

        let currentLocation = { lat: 35.9606, lng: -83.9207 };
        let editingMemberId = null;

        // Emergency functions
        function call911() {
            if (confirm('🚨 This will call 911 Emergency Services. Continue only if you have a real emergency.')) {
                showNotification('🚨 Calling 911... GPS location shared with emergency services', 'emergency');
                shareLocationWithEmergency();
                window.open('tel:911');
            }
        }

        function shareLocation() {
            if (navigator.geolocation) {
                showNotification('📍 Getting your precise location...', 'info');
                navigator.geolocation.getCurrentPosition(
                    function(position) {
                        currentLocation = {
                            lat: position.coords.latitude,
                            lng: position.coords.longitude
                        };
                        
                        const locationText = `📍 EMERGENCY LOCATION SHARE\n\nGPS Coordinates:\nLatitude: ${currentLocation.lat}\nLongitude: ${currentLocation.lng}\n\nGoogle Maps Link:\nhttps://maps.google.com?q=${currentLocation.lat},${currentLocation.lng}\n\nTime: ${new Date().toLocaleString()}\nShared by: Emergency Remote`;
                        
                        if (navigator.share) {
                            navigator.share({
                                title: '🚨 Emergency Location Share',
                                text: locationText
                            });
                        } else {
                            navigator.clipboard.writeText(locationText).then(() => {
                                showNotification('📍 Location copied to clipboard! Share with family & emergency services', 'success');
                            });
                        }
                        
                        updateLocationDisplay();
                        notifyFamilyMembers('location');
                    },
                    function() {
                        showNotification('⚠️ Using approximate location. Enable GPS for precise coordinates.', 'warning');
                        notifyFamilyMembers('location');
                    }
                );
            } else {
                showNotification('📍 Sharing approximate location...', 'info');
                notifyFamilyMembers('location');
            }
        }

        function shareLocationWithEmergency() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(function(position) {
                    currentLocation = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    };
                    updateLocationDisplay();
                    showNotification('📍 Precise GPS coordinates shared with 911', 'success');
                });
            }
        }

        function showFamilyModal() {
            loadFamilyMembers();
            document.getElementById('familyModal').style.display = 'block';
        }

        function loadFamilyMembers() {
            const familyList = document.getElementById('familyList');
            familyList.innerHTML = '';

            if (familyMembers.length === 0) {
                familyList.innerHTML = '<p style="text-align: center; opacity: 0.7;">No family members added yet. Add your first emergency contact below.</p>';
                return;
            }

            familyMembers.forEach(member => {
                const memberElement = document.createElement('div');
                memberElement.className = 'family-member';
                memberElement.innerHTML = `
                    <div class="member-info">
                        <div class="member-name">${member.name}</div>
                        <div class="member-relation">${member.relation} • ${member.phone}</div>
                    </div>
                    <div class="member-actions">
                        <button class="action-btn" onclick="callMember('${member.phone}', '${member.name}')">📞</button>
                        <button class="action-btn" onclick="alertMember(${member.id})">🚨</button>
                        <button class="action-btn" onclick="editMember(${member.id})">✏️</button>
                        <button class="action-btn delete" onclick="deleteMember(${member.id})">🗑️</button>
                    </div>
                `;
                familyList.appendChild(memberElement);
            });
        }

        function showAddFamilyForm() {
            editingMemberId = null;
            document.getElementById('familyForm').reset();
            document.getElementById('addFamilyModal').style.display = 'block';
            document.querySelector('#addFamilyModal h2').textContent = '➕ Add Family Member';
        }

        function editMember(id) {
            const member = familyMembers.find(m => m.id === id);
            if (!member) return;

            editingMemberId = id;
            document.getElementById('memberName').value = member.name;
            document.getElementById('memberRelation').value = member.relation;
            document.getElementById('memberPhone').value = member.phone;
            document.getElementById('memberEmail').value = member.email || '';
            
            document.getElementById('addFamilyModal').style.display = 'block';
            document.querySelector('#addFamilyModal h2').textContent = '✏️ Edit Family Member';
        }

        function saveFamilyMember(event) {
            event.preventDefault();
            
            const formData = new FormData(event.target);
            const memberData = {
                name: formData.get('name'),
                relation: formData.get('relation'),
                phone: formData.get('phone'),
                email: formData.get('email')
            };

            if (editingMemberId) {
                // Update existing member
                const index = familyMembers.findIndex(m => m.id === editingMemberId);
                if (index !== -1) {
                    familyMembers[index] = { ...familyMembers[index], ...memberData };
                    showNotification(`✏️ ${memberData.name} updated successfully!`, 'success');
                }
            } else {
                // Add new member
                const newMember = {
                    id: Date.now(),
                    ...memberData
                };
                familyMembers.push(newMember);
                showNotification(`➕ ${memberData.name} added to emergency contacts!`, 'success');
            }

            // Save to localStorage
            localStorage.setItem('familyMembers', JSON.stringify(familyMembers));
            
            // Refresh the family list and close modal
            loadFamilyMembers();
            closeModal('addFamilyModal');
        }

        function deleteMember(id) {
            const member = familyMembers.find(m => m.id === id);
            if (member && confirm(`Remove ${member.name} from emergency contacts?`)) {
                familyMembers = familyMembers.filter(m => m.id !== id);
                localStorage.setItem('familyMembers', JSON.stringify(familyMembers));
                loadFamilyMembers();
                showNotification(`🗑️ ${member.name} removed from emergency contacts`, 'info');
            }
        }

        function callMember(phone, name) {
            if (confirm(`Call ${name} at ${phone}?`)) {
                window.open(`tel:${phone}`);
                showNotification(`📞 Calling ${name}...`, 'info');
            }
        }

        function alertMember(id) {
            const member = familyMembers.find(m => m.id === id);
            if (member) {
                showNotification(`🚨 Emergency alert sent to ${member.name}`, 'emergency');
                
                // Simulate sending emergency alert
                const alertMessage = `🚨 EMERGENCY ALERT 🚨\n\nYour family member needs help!\n\nLocation: ${currentLocation.lat}, ${currentLocation.lng}\nTime: ${new Date().toLocaleString()}\n\nPlease call them immediately or contact emergency services.`;
                
                if (navigator.share) {
                    navigator.share({
                        title: '🚨 Emergency Alert',
                        text: alertMessage
                    });
                }
            }
        }

        function notifyFamilyMembers(type) {
            if (familyMembers.length === 0) {
                showNotification('⚠️ No family members to notify. Add contacts first.', 'warning');
                return;
            }

            const messageType = type === 'location' ? 'Location Share' : 'Emergency Alert';
            showNotification(`📱 ${messageType} sent to ${familyMembers.length} family members`, 'success');
        }

        function medicalEmergency() {
            const medicalInfo = `🏥 MEDICAL EMERGENCY\n\n📋 Medical ID:\n• Blood Type: O+\n• Allergies: None known\n• Medications: None\n• Emergency Contact: ${familyMembers[0]?.name || 'Not set'}\n• Location: ${currentLocation.lat}, ${currentLocation.lng}`;
            
            if (confirm('🏥 This will call for medical emergency assistance and share your medical ID. Continue?')) {
                showNotification('🚑 Requesting ambulance... Medical ID shared', 'emergency');
                
                if (navigator.clipboard) {
                    navigator.clipboard.writeText(medicalInfo);
                }
                
                setTimeout(() => {
                    window.open('tel:911');
                }, 1000);
            }
        }

        function internationalEmergency() {
            document.getElementById('internationalModal').style.display = 'block';
        }

        function selectCountry(country, number) {
            if (confirm(`Call ${country} emergency services (${number})?`)) {
                showNotification(`📞 Calling ${country} emergency: ${number}`, 'emergency');
                window.open(`tel:${number}`);
                closeModal('internationalModal');
            }
        }

        function translateSOS() {
            const translations = {
                'English': 'HELP! EMERGENCY!',
                'Spanish': '¡AYUDA! ¡EMERGENCIA!',
                'French': 'AIDE! URGENCE!',
                'German': 'HILFE! NOTFALL!',
                'Italian': 'AIUTO! EMERGENZA!',
                'Portuguese': 'AJUDA! EMERGÊNCIA!',
                'Japanese': '助けて！緊急事態！',
                'Chinese': '救命！紧急情况！',
                'Arabic': 'مساعدة! حالة طوارئ!',
                'Russian': 'ПОМОЩЬ! ЧРЕЗВЫЧАЙНАЯ СИТУАЦИЯ!'
            };

            let message = '🆘 EMERGENCY PHRASES
