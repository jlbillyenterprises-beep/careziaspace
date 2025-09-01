<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CareZiaSpace - Campus Guard Dog Live Emergency</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;
            background: linear-gradient(135deg, #1e3c72 0%, #2a5298 50%, #1a1a2e 100%);
            color: white;
            min-height: 100vh;
        }
        
        /* Alert Banner */
        .alert-banner {
            background: linear-gradient(90deg, #ff4444, #ff6b6b, #4ecdc4);
            padding: 15px;
            text-align: center;
            font-weight: bold;
            animation: pulse 2s infinite;
            position: sticky;
            top: 0;
            z-index: 100;
        }
        @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.8; } }
        
        /* Navigation */
        .nav-tabs {
            display: flex;
            overflow-x: auto;
            background: rgba(0,0,0,0.3);
            padding: 10px;
            gap: 10px;
            scrollbar-width: none;
            -ms-overflow-style: none;
        }
        .nav-tabs::-webkit-scrollbar { display: none; }
        .nav-tab {
            padding: 8px 12px;
            background: rgba(255,255,255,0.1);
            border: none;
            color: white;
            border-radius: 20px;
            white-space: nowrap;
            cursor: pointer;
            font-size: 12px;
        }
        .nav-tab.active { background: #4ecdc4; }
        
        /* Main Content */
        .container { max-width: 400px; margin: 0 auto; padding: 20px; }
        .lifetime-badge {
            background: #ffd700;
            color: #000;
            padding: 15px;
            border-radius: 10px;
            text-align: center;
            font-weight: bold;
            margin-bottom: 20px;
        }
        
        /* Emergency Buttons */
        .emergency-button {
            display: block;
            width: 100%;
            padding: 20px;
            margin-bottom: 15px;
            border: none;
            border-radius: 15px;
            font-size: 16px;
            font-weight: bold;
            color: white;
            cursor: pointer;
            transition: transform 0.3s ease;
            text-align: center;
        }
        .emergency-button:hover { transform: translateY(-2px); }
        .call-911 { background: linear-gradient(135deg, #e74c3c, #c0392b); }
        .location-share { background: linear-gradient(135deg, #3498db, #2980b9); }
        .family-alert { background: linear-gradient(135deg, #27ae60, #229954); }
        .medical-emergency { background: linear-gradient(135deg, #9b59b6, #8e44ad); }
        .crisis-resources { background: linear-gradient(135deg, #f39c12, #e67e22); }
        
        /* Program Cards */
        .program-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 15px;
            margin: 20px 0;
        }
        .program-card {
            background: rgba(0,0,0,0.3);
            padding: 20px;
            border-radius: 15px;
            text-align: center;
            cursor: pointer;
            transition: transform 0.3s ease;
        }
        .program-card:hover { transform: translateY(-2px); }
        .program-card h3 { margin-bottom: 10px; font-size: 14px; }
        .program-card p { font-size: 12px; opacity: 0.8; }
        
        /* Pricing Section */
        .pricing-section {
            background: linear-gradient(135deg, #e74c3c, #c0392b);
            padding: 30px 20px;
            border-radius: 15px;
            text-align: center;
            margin: 20px 0;
        }
        .price { font-size: 48px; font-weight: bold; margin: 10px 0; }
        .pricing-features { text-align: left; margin: 15px 0; }
        .pricing-features li { margin: 5px 0; }
        
        /* Payment Buttons */
        .payment-buttons { display: flex; gap: 10px; margin-top: 20px; }
        .payment-btn {
            flex: 1;
            padding: 15px;
            border: none;
            border-radius: 10px;
            font-weight: bold;
            cursor: pointer;
            font-size: 16px;
        }
        .paypal-btn { background: #0070ba; color: white; }
        .cashapp-btn { background: #00d632; color: white; }
        
        /* Crisis Hotlines */
        .crisis-hotlines {
            display: flex;
            gap: 10px;
            margin: 20px 0;
        }
        .hotline-btn {
            flex: 1;
            padding: 15px 10px;
            background: #e74c3c;
            color: white;
            border: none;
            border-radius: 10px;
            cursor: pointer;
            font-size: 14px;
            font-weight: bold;
        }
        
        /* Todd Access Panel */
        .owner-panel {
            background: linear-gradient(135deg, #9b59b6, #8e44ad);
            padding: 20px;
            border-radius: 15px;
            text-align: center;
            margin: 20px 0;
        }
        .admin-buttons {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 10px;
            margin-top: 15px;
        }
        .admin-btn {
            padding: 12px;
            border: none;
            border-radius: 8px;
            font-weight: bold;
            cursor: pointer;
            font-size: 14px;
        }
        .admin-btn:nth-child(1) { background: #34495e; color: white; }
        .admin-btn:nth-child(2) { background: #27ae60; color: white; }
        .admin-btn:nth-child(3) { background: #3498db; color: white; }
        .admin-btn:nth-child(4) { background: #e67e22; color: white; }
        
        /* Hidden Sections */
        .section { display: none; }
        .section.active { display: block; }
        
        /* Modal */
        .modal {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.9);
            z-index: 1000;
        }
        .modal-content {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: white;
            color: black;
            padding: 30px;
            border-radius: 15px;
            max-width: 90%;
            max-height: 80%;
            overflow-y: auto;
        }
        .close-btn {
            position: absolute;
            top: 10px;
            right: 15px;
            font-size: 30px;
            cursor: pointer;
        }
    </style>
</head>
<body>
    <div class="alert-banner">
        🚨 CAMPUS GUARD DOG - LIVE EMERGENCY 🚨
    </div>
    
    <!-- Navigation -->
    <div class="nav-tabs">
        <button class="nav-tab active" onclick="showSection('home')">Home</button>
        <button class="nav-tab" onclick="showSection('emergency')">Emergency</button>
        <button class="nav-tab" onclick="showSection('programs')">Programs</button>
        <button class="nav-tab" onclick="showSection('support')">Support</button>
        <button class="nav-tab" onclick="showSection('carezia')">CareZia</button>
        <button class="nav-tab" onclick="showSection('b2b')">B2B</button>
        <button class="nav-tab" onclick="showSection('four')">Four</button>
    </div>
    
    <div class="container">
        <!-- Home Section -->
        <div id="home" class="section active">
            <div class="lifetime-badge">
                ⭐ LIFETIME ACCESS - No monthly fees
            </div>
            
            <h2 style="text-align: center; margin-bottom: 20px;">CareZiaSpace - Digital Emergency</h2>
            
            <div style="background: rgba(0,0,0,0.3); padding: 20px; border-radius: 15px; margin-bottom: 20px;">
                <img src="data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='30' cy='30' r='30' fill='%23ff6b6b'/%3E%3Ctext x='30' y='40' text-anchor='middle' fill='white' font-size='30'%3E👨%3C/text%3E%3C/svg%3E" style="width: 60px; height: 60px; border-radius: 50%; float: left; margin-right: 15px;" alt="Todd">
                <h3>A Personal Message from Todd (Founder):</h3>
                <p style="font-style: italic; margin-top: 10px;">
                    "I remember the nights in a truck cab, when my family couldn't reach real help. This isn't hype—this is for the mom alone at midnight, the veteran with no backup, every family that ever felt stranded. Instant GPS for emergencies. One-tap access to 911, real hotlines—no fakes—and AI support that actually listens. I wear the REBOUND hoodie because we all deserve to make it home safe. $3.99/month or $199 for life. Real stories, verified help, no BS."
                </p>
                <p style="margin-top: 10px; font-weight: bold;">- Todd T., Platform Founder & Truck Driver</p>
            </div>
            
            <div style="background: rgba(139, 69, 19, 0.2); padding: 15px; border-radius: 10px; margin-bottom: 20px;">
                <h3>Why We Built This: Our Autism Journey</h3>
                <p style="font-size: 14px; margin-top: 10px;">
                    As parents to our amazing autistic son Justin, we know the journey—the victories, challenges, and moments of worry. Watching Justin work hard and land his first job was unforgettable. But we also know how overwhelming the system can be. Endless information, uncertainty about which resources are real, and the urgency of needing help during difficult moments.
                </p>
                <p style="font-size: 14px; margin-top: 10px; font-weight: bold;">
                    That's why CareZiaSpace cuts out the fluff and scammy "helplines." We provide verified crisis support, real phone numbers always checked and current, and a straightforward interface that works in emergencies. Privacy and care built in—no oversharing required to get help.
                </p>
                <p style="text-align: right; margin-top: 10px;">- The CareZiaSpace Family</p>
            </div>
        </div>
        
        <!-- Emergency Section -->
        <div id="emergency" class="section">
            <h2 style="text-align: center; margin-bottom: 20px;">Emergency Services</h2>
            
            <button class="emergency-button call-911" onclick="call911()">
                📞 CALL 911
                <br><small>Immediate emergency response</small>
            </button>
            
            <button class="emergency-button location-share" onclick="shareLocation()">
                📍 SHARE MY LOCATION
                <br><small>GPS coordinates to family & 911</small>
            </button>
            
            <button class="emergency-button family-alert" onclick="openModal('familyModal')">
                👨‍👩‍👧‍👦 FAMILY EMERGENCY ALERT
                <br><small>Notify all family members</small>
            </button>
            
            <button class="emergency-button medical-emergency" onclick="openModal('medicalModal')">
                🏥 MEDICAL EMERGENCY
                <br><small>Medical ID & ambulance request</small>
            </button>
            
            <button class="emergency-button crisis-resources" onclick="openModal('crisisModal')">
                💬 CRISIS RESOURCES
                <br><small>24/7 mental health support</small>
            </button>
            
            <div class="crisis-hotlines">
                <button class="hotline-btn" onclick="callCrisis('988')">988<br><small>Crisis Lifeline</small></button>
                <button class="hotline-btn" onclick="callCrisis('741741')">741741<br><small>Text HOME</small></button>
                <button class="hotline-btn" onclick="call911()">911<br><small>Emergency</small></button>
            </div>
        </div>
        
        <!-- Programs Section -->
        <div id="programs" class="section">
            <h2 style="text-align: center; margin-bottom: 20px;">Mental Health Support Programs</h2>
            <p style="text-align: center; margin-bottom: 20px;">Tailored mental health support for specific communities and needs</p>
            
            <div class="program-grid">
                <div class="program-card">
                    <h3>24/7 AI Support</h3>
                    <p>CareZia AI provides instant emotional support anytime</p>
                </div>
                <div class="program-card">
                    <h3>Crisis Intervention</h3>
                    <p>Immediate connection to verified crisis hotlines</p>
                </div>
                <div class="program-card">
                    <h3>GPS Safety Features</h3>
                    <p>Emergency location sharing for family protection</p>
                </div>
                <div class="program-card">
                    <h3>Professional Resources</h3>
                    <p>Access to licensed therapists and counselors</p>
                </div>
                <div class="program-card">
                    <h3>Veterans Support</h3>
                    <p>Specialized care for military families</p>
                </div>
                <div class="program-card">
                    <h3>Family Emergency GPS</h3>
                    <p>Real-time location safety for loved ones</p>
                </div>
                <div class="program-card">
                    <h3>Youth & Teen Support</h3>
                    <p>Mental health support for young people</p>
                </div>
                <div class="program-card">
                    <h3>Trucker Support</h3>
                    <p>Mental health resources for drivers</p>
                </div>
            </div>
            
            <div class="program-card" style="grid-column: span 2; margin-top: 15px;">
                <h3>Addiction Recovery</h3>
                <p>Path to recovery with AI guidance</p>
            </div>
            
            <div class="program-card" style="grid-column: span 2; margin-top: 15px;">
                <h3>Family Round Table</h3>
                <p>AI-moderated family therapy sessions</p>
            </div>
        </div>
        
        <!-- Support Section -->
        <div id="support" class="section">
            <div class="pricing-section">
                <div style="text-decoration: line-through; opacity: 0.7;">$47.88/year forever</div>
                <div class="price">$199 Lifetime</div>
                <p>One payment. Your entire family protected for life.</p>
                <p>That's less than $40 per family member - forever.</p>
                
                <ul class="pricing-features">
                    <li>✅ No monthly fees after $199 payment</li>
                    <li>✅ 30-Day Money Back Guarantee</li>
                </ul>
                
                <div class="payment-buttons">
                    <button class="payment-btn paypal-btn" onclick="supportPayPal()">
                        Protect My Family For Life - $199
                    </button>
                </div>
            </div>
        </div>
        
        <!-- CareZia AI Section -->
        <div id="carezia" class="section">
            <h2 style="text-align: center; margin-bottom: 20px;">Campus Guard Dog 🐕 College Safety AI</h2>
            <p style="text-align: center; margin-bottom: 20px;">The ultimate campus safety companion with continuous panic button, GPS family alerts, and AI-powered emergency response. Perfect for college students and their families.</p>
            
            <div style="background: rgba(0,0,0,0.3); padding: 20px; border-radius: 15px; margin-bottom: 20px;">
                <h3>POWERED BY THREE INTEGRATED PLATFORMS</h3>
                <div class="program-grid" style="margin-top: 15px;">
                    <div style="background: #3498db; padding: 15px; border-radius: 10px;">
                        <h4>🏢 CareZiaSpace Technologies</h4>
                        <p style="font-size: 12px;">Platform Infrastructure & AI Systems</p>
                    </div>
                    <div style="background: #27ae60; padding: 15px; border-radius: 10px;">
                        <h4>💚 REBOUND</h4>
                        <p style="font-size: 12px;">Life Recovery & Free Resources</p>
                    </div>
                    <div style="background: #9b59b6; padding: 15px; border-radius: 10px;">
                        <h4>💜 XCare</h4>
                        <p style="font-size: 12px;">Complete Wellness & Support</p>
                    </div>
                </div>
            </div>
            
            <button style="background: #3498db; color: white; padding: 15px; border: none; border-radius: 10px; width: 100%; margin-bottom: 10px;" onclick="testSound()">
                🔊 TEST SOUND FIRST
                <br><small>Click to test if audio works before using emergency button</small>
            </button>
            
            <div style="display: flex; gap: 10px; margin-bottom: 20px;">
                <button style="background: #27ae60; color: white; padding: 10px; border: none; border-radius: 5px; flex: 1;" onclick="talkToCarezia()">💬 Talk to CareZia AI - Free</button>
                <button style="background: #e74c3c; color: white; padding: 10px; border: none; border-radius: 5px; flex: 1;" onclick="emergencyServices()">🚨 Emergency Services</button>
                <button style="background: #f39c12; color: white; padding: 10px; border: none; border-radius: 5px; flex: 1;" onclick="buyCrypto()">₿ Buy with Crypto</button>
            </div>
        </div>
        
        <!-- Todd Owner Access -->
        <div class="owner-panel">
            <h3>🛡️ TODD OWNER ACCESS</h3>
            <p>All premium features enabled</p>
            <div class="admin-buttons">
                <button class="admin-btn">Admin</button>
                <button class="admin-btn">Revenue</button>
                <button class="admin-btn">GPS Pro</button>
                <button class="admin-btn">Apparel</button>
            </div>
        </div>
    </div>
    
    <!-- Modals -->
    <div id="familyModal" class="modal">
        <div class="modal-content">
            <span class="close-btn" onclick="closeModal('familyModal')">&times;</span>
            <h3>👨‍👩‍👧‍👦 Family Emergency Alert</h3>
            <p>Send emergency message to family contacts</p>
            <button style="background: #27ae60; color: white; padding: 15px; border: none; border-radius: 8px; width: 100%; margin: 10px 0;" onclick="sendFamilyAlert()">📱 Send Emergency Text</button>
            <button style="background: #3498db; color: white; padding: 15px; border: none; border-radius: 8px; width: 100%;" onclick="callFamily()">📞 Call Emergency Contact</button>
        </div>
    </div>
    
    <div id="medicalModal" class="modal">
        <div class="modal-content">
            <span class="close-btn" onclick="closeModal('medicalModal')">&times;</span>
            <h3>🏥 Medical Emergency</h3>
            <button style="background: #e74c3c; color: white; padding: 15px; border: none; border-radius: 8px; width: 100%; margin: 10px 0; font-size: 18px; font-weight: bold;" onclick="call911()">🚑 Call 911 Ambulance</button>
            <button style="background: #3498db; color: white; padding: 12px; border: none; border-radius: 8px; width: 100%; margin: 5px 0;" onclick="shareLocation()">📍 Share Location with 911</button>
            <button style="background: #9b59b6; color: white; padding: 12px; border: none; border-radius: 8px; width: 100%; margin: 5px 0;" onclick="medicalInfo()">🆔 Medical ID Info</button>
        </div>
    </div>
    
    <div id="crisisModal" class="modal">
        <div class="modal-content">
            <span class="close-btn" onclick="closeModal('crisisModal')">&times;</span>
            <h3>💬 Crisis Resources - 24/7 Support</h3>
            <div style="text-align: left; line-height: 1.6;">
                <h4>🇺🇸 National Crisis Lines:</h4>
                <button style="background: #e74c3c; color: white; padding: 10px; border: none; border-radius: 5px; margin: 5px 0; width: 100%;" onclick="callCrisis('988')">📞 Call 988 - Suicide & Crisis Lifeline</button>
                <button style="background: #e74c3c; color: white; padding: 10px; border: none; border-radius: 5px; margin: 5px 0; width: 100%;" onclick="callCrisis('18006624357')">📞 SAMHSA Mental Health</button>
                <button style="background: #e74c3c; color: white; padding: 10px; border: none; border-radius: 5px; margin: 5px 0; width: 100%;" onclick="callCrisis('18007997233')">📞 Domestic Violence Hotline</button>
                
                <h4 style="margin-top: 15px;">📱 Text Support:</h4>
                <button style="background: #3498db; color: white; padding: 10px; border: none; border-radius: 5px; margin: 5px 0; width: 100%;" onclick="textCrisis()">💬 Text HOME to 741741 - Crisis Text Line</button>
                
                <h4 style="margin-top: 15px;">🏳️‍🌈 LGBTQ+ Support:</h4>
                <button style="background: #9b59b6; color: white; padding: 10px; border: none; border-radius: 5px; margin: 5px 0; width: 100%;" onclick="callCrisis('18666488911')">📞 Trevor Project</button>
            </div>
        </div>
    </div>

    <script>
        // Navigation
        function showSection(sectionName) {
            // Hide all sections
            document.querySelectorAll('.section').forEach(section => {
                section.classList.remove('active');
            });
            
            // Remove active from all tabs
            document.querySelectorAll('.nav-tab').forEach(tab => {
                tab.classList.remove('active');
            });
            
            // Show selected section
            document.getElementById(sectionName).classList.add('active');
            
            // Add active to clicked tab
            event.target.classList.add('active');
        }
        
        // Emergency Functions
        function call911() {
            if (confirm('🚨 Call 911 Emergency Services?\n\nThis will dial emergency services immediately.')) {
                window.location.href = 'tel:911';
            }
        }
        
        function shareLocation() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(function(position) {
                    const lat = position.coords.latitude;
                    const lng = position.coords.longitude;
                    const locationText = `🚨 EMERGENCY LOCATION 🚨\nLatitude: ${lat.toFixed(6)}\nLongitude: ${lng.toFixed(6)}\nGoogle Maps: https://maps.google.com/?q=${lat},${lng}\n\nSent from CareZiaSpace Emergency System`;
                    
                    if (navigator.share) {
                        navigator.share({
                            title: '🚨 Emergency Location',
                            text: locationText
                        });
                    } else {
                        navigator.clipboard.writeText(locationText);
                        alert('📍 Location copied to clipboard!\n\n' + locationText);
                    }
                }, function(error) {
                    alert('Unable to get location. Please ensure location services are enabled.');
                });
            } else {
                alert('Geolocation not supported by this browser.');
            }
        }
        
        function sendFamilyAlert() {
            const message = `🚨 EMERGENCY ALERT 🚨\nI need immediate help. Please contact me or call 911 if you cannot reach me.\n\nThis is an automated emergency message from CareZiaSpace.`;
            window.location.href = `sms:?body=${encodeURIComponent(message)}`;
            closeModal('familyModal');
        }
        
        function callFamily() {
            const contact = prompt('Enter emergency contact number:');
            if (contact) {
                window.location.href = `tel:${contact}`;
            }
            closeModal('familyModal');
        }
        
        function callCrisis(number) {
            window.location.href = `tel:${number}`;
        }
        
        function textCrisis() {
            window.location.href = 'sms:741741?body=HOME';
        }
        
        function medicalInfo() {
            alert('💡 Medical ID Setup:\n\nAdd medical info to your phone:\n• iPhone: Health app → Medical ID\n• Android: Settings → Emergency Info\n\nThis helps first responders access your medical information even when your phone is locked.');
            closeModal('medicalModal');
        }
        
        function testSound() {
            // Create audio context for test
            if (typeof AudioContext !== 'undefined' || typeof webkitAudioContext !== 'undefined') {
                const AudioContextClass = AudioContext || webkitAudioContext;
                const audioContext = new AudioContextClass();
                const oscillator = audioContext.createOscillator();
                const gainNode = audioContext.createGain();
                
                oscillator.connect(gainNode);
                gainNode.connect(audioContext.destination);
                
                oscillator.frequency.value = 800;
                gainNode.gain.value = 0.1;
                
                oscillator.start();
                oscillator.stop(audioContext.currentTime + 0.5);
                
                alert('🔊 Sound test complete! If you heard a beep, audio is working.');
            } else {
                alert('🔊 Audio test complete! Your device should support emergency sounds.');
            }
        }
        
        function talkToCarezia() {
            alert('💬 CareZia AI Chat\n\nThis feature connects you to our AI support system. In a full deployment, this would open a chat interface with our mental health support AI.');
        }
        
        function emergencyServices() {
            showSection('emergency');
        }
        
        function buyCrypto() {
            alert('₿ Crypto Payment\n\nCrypto payment integration would be implemented here for alternative payment methods.');
        }
        
        function supportPayPal() {
            // Replace with your actual PayPal link
            alert('💳 Payment Processing\n\nThis would redirect to PayPal checkout for $199 lifetime access. Replace this alert with your actual PayPal payment link.');
            // window.open('https://paypal.me/yourusername/199', '_blank');
        }
        
        // Modal Functions
        function openModal(modalId) {
            document.getElementById(modalId).style.display = 'block';
        }
        
        function closeModal(modalId) {
            document.getElementById(modalId).style.display = 'none';
        }
        
        // Close modal when clicking outside
        window.onclick = function(event) {
            if (event.target.classList.contains('modal')) {
                event.target.style.display = 'none';
            }
        }
        
        // Service Worker for PWA functionality (optional)
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('/sw.js').catch(function(error) {
                console.log('Service Worker registration failed:', error);
            });
        }
        
        // Emergency button always accessible
        document.addEventListener('keydown', function(event) {
            // Emergency activation with Ctrl+Shift+E
            if (event.ctrlKey && event.shiftKey && event.key === 'E') {
                if (confirm('Emergency services activated via keyboard shortcut. Call 911?')) {
                    call911();
                }
            }
        });
    </script>
</body>
</html>
