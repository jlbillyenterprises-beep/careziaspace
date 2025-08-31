<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Campus Guard Dog - Live Emergency</title>
    <meta name="theme-color" content="#1a1a2e">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            -webkit-tap-highlight-color: transparent;
        }

        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            background: linear-gradient(135deg, #1e3c72 0%, #2a5298 50%, #1a1a2e 100%);
            color: white;
            min-height: 100vh;
            overflow-x: hidden;
        }

        /* Emergency Alert Header */
        .emergency-header {
            background: linear-gradient(135deg, #ff6b35, #ff8c42, #ff6b35);
            background-size: 200% 200%;
            animation: gradientShift 3s ease-in-out infinite;
            color: white;
            padding: 15px 20px;
            text-align: center;
            font-weight: 700;
            font-size: 0.9rem;
            position: relative;
            overflow: hidden;
        }

        .emergency-header::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: repeating-linear-gradient(
                45deg,
                transparent,
                transparent 10px,
                rgba(255,255,255,0.1) 10px,
                rgba(255,255,255,0.1) 20px
            );
            animation: stripe 2s linear infinite;
        }

        @keyframes gradientShift {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
        }

        @keyframes stripe {
            0% { left: -100%; }
            100% { left: 100%; }
        }

        /* Navigation */
        .nav-bar {
            background: rgba(26, 26, 46, 0.95);
            backdrop-filter: blur(20px);
            padding: 15px 20px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
            gap: 10px;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .nav-links {
            display: flex;
            gap: 15px;
            flex-wrap: wrap;
            align-items: center;
        }

        .nav-link {
            background: rgba(255, 255, 255, 0.1);
            color: white;
            text-decoration: none;
            padding: 8px 16px;
            border-radius: 20px;
            font-size: 0.9rem;
            font-weight: 500;
            transition: all 0.3s ease;
            border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .nav-link:hover, .nav-link.active {
            background: rgba(255, 255, 255, 0.2);
            transform: translateY(-2px);
        }

        .nav-link.carezia {
            background: linear-gradient(135deg, #f39c12 0%, #e67e22 100%);
            font-weight: 600;
        }

        .nav-link.live-mode {
            background: linear-gradient(135deg, #e74c3c 0%, #c0392b 100%);
            animation: pulse 2s infinite;
        }

        @keyframes pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.05); }
        }

        /* Main Content */
        .main-content {
            padding: 30px 20px;
            max-width: 1200px;
            margin: 0 auto;
        }

        /* Core Services Grid */
        .services-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 25px;
            margin-bottom: 50px;
        }

        .service-card {
            background: rgba(26, 26, 46, 0.9);
            backdrop-filter: blur(20px);
            border-radius: 20px;
            padding: 30px;
            border: 1px solid rgba(255, 255, 255, 0.1);
            transition: all 0.3s ease;
            cursor: pointer;
            position: relative;
            overflow: hidden;
        }

        .service-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
            transition: left 0.5s;
        }

        .service-card:hover::before {
            left: 100%;
        }

        .service-card:hover {
            transform: translateY(-10px) scale(1.02);
            box-shadow: 0 20px 40px rgba(0,0,0,0.3);
            border-color: rgba(255, 255, 255, 0.3);
        }

        .service-icon {
            font-size: 2.5rem;
            margin-bottom: 15px;
            display: block;
        }

        .service-title {
            font-size: 1.4rem;
            font-weight: 700;
            margin-bottom: 15px;
            color: #f39c12;
        }

        .service-description {
            font-size: 1rem;
            line-height: 1.5;
            opacity: 0.9;
            margin-bottom: 0;
        }

        /* Section Headers */
        .section-header {
            text-align: center;
            margin: 60px 0 40px;
        }

        .section-title {
            font-size: 2.2rem;
            font-weight: 700;
            margin-bottom: 15px;
            background: linear-gradient(135deg, #f39c12 0%, #e67e22 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }

        .section-subtitle {
            font-size: 1.1rem;
            opacity: 0.8;
            max-width: 600px;
            margin: 0 auto;
        }

        /* Mental Health Programs Grid */
        .programs-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 25px;
        }

        .program-card {
            background: rgba(26, 26, 46, 0.9);
            backdrop-filter: blur(20px);
            border-radius: 15px;
            padding: 25px;
            border: 1px solid rgba(255, 255, 255, 0.1);
            transition: all 0.3s ease;
            cursor: pointer;
        }

        .program-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 15px 30px rgba(0,0,0,0.2);
            border-color: rgba(255, 255, 255, 0.2);
        }

        .program-icon {
            font-size: 2rem;
            margin-bottom: 15px;
            display: block;
        }

        .program-title {
            font-size: 1.3rem;
            font-weight: 600;
            margin-bottom: 10px;
            color: white;
            text-decoration: underline;
        }

        .program-description {
            font-size: 0.9rem;
            line-height: 1.4;
            opacity: 0.8;
            margin-bottom: 15px;
        }

        .learn-more {
            background: transparent;
            color: #3498db;
            border: none;
            font-size: 0.9rem;
            cursor: pointer;
            display: flex;
            align-items: center;
            gap: 5px;
            transition: all 0.3s ease;
        }

        .learn-more:hover {
            color: #2980b9;
            transform: translateX(5px);
        }

        /* Responsive Design */
        @media (max-width: 768px) {
            .nav-links {
                justify-content: center;
                width: 100%;
            }
            
            .services-grid, .programs-grid {
                grid-template-columns: 1fr;
            }
            
            .main-content {
                padding: 20px 15px;
            }
            
            .section-title {
                font-size: 1.8rem;
            }
        }

        /* Accessibility Features */
        .read-controls {
            position: fixed;
            bottom: 20px;
            right: 20px;
            display: flex;
            gap: 10px;
            z-index: 1000;
        }

        .read-btn {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            border: none;
            color: white;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
        }

        .read-btn.read { background: #3498db; }
        .read-btn.stop { background: #e74c3c; }
        .read-btn.auto { background: #27ae60; }

        .read-btn:hover {
            transform: scale(1.1);
        }

        /* Reading Mode */
        .reading-mode {
            background: rgba(0, 0, 0, 0.9);
            color: #f0f0f0;
            font-size: 1.1rem;
            line-height: 1.6;
        }
    </style>
</head>
<body>
    <!-- Emergency Alert Header -->
    <div class="emergency-header">
        🚨 CAMPUS GUARD DOG - LIVE EMERGENCY 🚨
    </div>

    <!-- Navigation Bar -->
    <nav class="nav-bar">
        <div class="nav-links">
            <a href="#home" class="nav-link">Home</a>
            <a href="#community" class="nav-link">Community Pro</a>
            <a href="#therapy" class="nav-link">Therapy</a>
            <a href="#corporate" class="nav-link">Corporate</a>
            <a href="#support" class="nav-link">Support Programs</a>
            <a href="#carezia" class="nav-link carezia">Carezia</a>
            <a href="#crisis" class="nav-link">Crisis Meetings</a>
            <a href="#live" class="nav-link live-mode">LIVE MODE</a>
        </div>
    </nav>

    <!-- Main Content -->
    <div class="main-content">
        <!-- Core Services -->
        <div class="services-grid">
            <div class="service-card" onclick="openAISupport()">
                <div class="service-icon">🤖</div>
                <div class="service-title">24/7 AI Support</div>
                <div class="service-description">
                    Carezia AI provides instant emotional support anytime
                </div>
            </div>

            <div class="service-card" onclick="openCrisisIntervention()">
                <div class="service-icon">🆘</div>
                <div class="service-title">Crisis Intervention</div>
                <div class="service-description">
                    Immediate connection to verified crisis hotlines
                </div>
            </div>

            <div class="service-card" onclick="openGPSFeatures()">
                <div class="service-icon">🌍</div>
                <div class="service-title">GPS Safety Features</div>
                <div class="service-description">
                    Emergency location sharing for family protection
                </div>
            </div>

            <div class="service-card" onclick="openProfessionalResources()">
                <div class="service-icon">👩‍⚕️</div>
                <div class="service-title">Professional Resources</div>
                <div class="service-description">
                    Access to licensed therapists and counselors
                </div>
            </div>
        </div>

        <!-- Mental Health Support Programs -->
        <div class="section-header">
            <h2 class="section-title">Mental Health Support Programs</h2>
            <p class="section-subtitle">Tailored mental health support for specific communities and needs</p>
        </div>

        <div class="programs-grid">
            <div class="program-card" onclick="openVeteransSupport()">
                <div class="program-icon">🎖️</div>
                <div class="program-title">Veterans Support</div>
                <div class="program-description">
                    Specialized care for military families
                </div>
                <button class="learn-more">Learn More →</button>
            </div>

            <div class="program-card" onclick="openFamilyEmergencyGPS()">
                <div class="program-icon">🌍</div>
                <div class="program-title">Family Emergency GPS</div>
                <div class="program-description">
                    Real-time location safety for loved ones
                </div>
                <button class="learn-more">Learn More →</button>
            </div>

            <div class="program-card" onclick="openYouthSupport()">
                <div class="program-icon">❤️</div>
                <div class="program-title">Youth & Teen Support</div>
                <div class="program-description">
                    Mental health support for young people
                </div>
                <button class="learn-more">Learn More →</button>
            </div>

            <div class="program-card" onclick="openTruckerSupport()">
                <div class="program-icon">🚛</div>
                <div class="program-title">Trucker Support</div>
                <div class="program-description">
                    Mental health resources for drivers
                </div>
                <button class="learn-more">Learn More →</button>
            </div>

            <div class="program-card" onclick="openAddictionRecovery()">
                <div class="program-icon">👥</div>
                <div class="program-title">Addiction Recovery</div>
                <div class="program-description">
                    Support for addiction and recovery journey
                </div>
                <button class="learn-more">Learn More →</button>
            </div>

            <div class="program-card" onclick="openReboundProgram()">
                <div class="program-icon">💰</div>
                <div class="program-title">REBOUND Program</div>
                <div class="program-description">
                    Financial assistance and recovery support
                </div>
                <button class="learn-more">Learn More →</button>
            </div>
        </div>
    </div>

    <!-- Accessibility Controls -->
    <div class="read-controls">
        <button class="read-btn read" onclick="readPage()" title="Read page">R</button>
    </div>

    <script>
        // AI Support
        function openAISupport() {
            alert('🤖 24/7 AI Support\n\nCarezia AI provides:\n• Instant emotional support\n• Crisis intervention guidance\n• Mental health resources\n• Personalized assistance\n• Available 24/7 in multiple languages\n\nConnect now for immediate support.');
        }

        // Crisis Intervention
        function openCrisisIntervention() {
            if (confirm('🆘 Crisis Intervention\n\nImmediate help available:\n• National Crisis Hotline: 988\n• Crisis Text Line: Text HOME to 741741\n• Emergency Services: 911\n• Campus Safety: [Your Number]\n\nConnect to crisis support now?')) {
                const choice = prompt('Choose support:\n1 - Call 988 Crisis Line\n2 - Text Crisis Support\n3 - Call 911\n4 - Campus Safety\n\nEnter number (1-4):');
                
                switch(choice) {
                    case '1':
                        window.open('tel:988');
                        break;
                    case '2':
                        window.open('sms:741741?body=HOME');
                        break;
                    case '3':
                        window.open('tel:911');
                        break;
                    case '4':
                        alert('Connecting to Campus Safety...');
                        break;
                    default:
                        alert('Help is always available. Save these numbers:\n• 988 - Crisis Line\n• 911 - Emergency\n• Text HOME to 741741');
                }
            }
        }

        // GPS Safety Features
        function openGPSFeatures() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(function(position) {
                    const lat = position.coords.latitude.toFixed(4);
                    const lng = position.coords.longitude.toFixed(4);
                    
                    if (confirm(`🌍 GPS Safety Features\n\nYour Location: ${lat}, ${lng}\n\nFeatures available:\n• Share location with family\n• Emergency location broadcast\n• Find nearby help\n• Safe zone notifications\n\nShare your location for emergency?`)) {
                        const message = `🚨 Emergency Location Share\n\nGPS Coordinates: ${lat}, ${lng}\nTime: ${new Date().toLocaleString()}\nGoogle Maps: https://maps.google.com?q=${lat},${lng}`;
                        
                        if (navigator.share) {
                            navigator.share({
                                title: '🚨 Emergency Location',
                                text: message
                            });
                        } else {
                            navigator.clipboard.writeText(message);
                            alert('📍 Location copied to clipboard!\nShare with family and emergency contacts.');
                        }
                    }
                });
            } else {
                alert('GPS not available. Please enable location services for safety features.');
            }
        }

        // Professional Resources
        function openProfessionalResources() {
            alert('👩‍⚕️ Professional Resources\n\nAccess to licensed professionals:\n\n🧠 Mental Health:\n• Licensed therapists\n• Crisis counselors\n• Psychiatrists\n• Support groups\n\n⚕️ Medical:\n• Telemedicine\n• Health screening\n• Prescription assistance\n\n⚖️ Legal:\n• Student legal aid\n• Family law\n• Crisis legal support\n\nContact: professionals@careziaspace.com');
        }

        // Veterans Support
        function openVeteransSupport() {
            alert('🎖️ Veterans Support\n\nSpecialized services for military families:\n\n• PTSD support and counseling\n• Military family therapy\n• VA benefits assistance\n• Transition support programs\n• Peer support networks\n• 24/7 veterans crisis line\n\nVeterans Crisis Line: 1-800-273-8255\nText: 838255\n\n"Supporting those who served"');
        }

        // Family Emergency GPS
        function openFamilyEmergencyGPS() {
            alert('🌍 Family Emergency GPS\n\nReal-time safety features:\n\n📍 Location Sharing:\n• Instant family notifications\n• Emergency location broadcast\n• Safe zone alerts\n• Check-in reminders\n\n🆘 Emergency Features:\n• One-tap emergency alerts\n• Automatic location sharing\n• Family communication hub\n• Emergency contact integration\n\n"Keeping families connected and safe"');
        }

        // Youth & Teen Support
        function openYouthSupport() {
            showResourceModal('Youth & Teen Support', '❤️', [
                '🧠 **Mental Health Resources:**',
                '• Teen Crisis Text Line: Text TEEN to 839863',
                '• National Suicide Prevention Lifeline: 988',
                '• Crisis Text Line: Text HOME to 741741',
                '• SAMHSA Youth Helpline: 1-800-662-4357',
                '• LGBT National Hotline: 1-888-843-4564',
                '',
                '📚 **Educational Support:**',
                '• Khan Academy (free tutoring): khanacademy.org',
                '• Coursera Financial Aid: coursera.org/financial-aid',
                '• Free GED Classes: ged.com/study/free_online_ged_test',
                '• College Application Help: commonapp.org',
                '',
                '🏠 **Housing & Safety:**',
                '• National Runaway Safeline: 1-800-786-2929',
                '• Youth Emergency Shelter: 211 or dial 2-1-1',
                '• Safe Place Program: nationalsafeplace.org',
                '',
                '💼 **Job & Life Skills:**',
                '• Job Corps (free job training): jobcorps.gov',
                '• YouthBuild programs: youthbuild.org',
                '• Resume help: resume.com (free version)'
            ]);
        }

        // Trucker Support
        function openTruckerSupport() {
            showResourceModal('Trucker Support', '🚛', [
                '🧠 **Mental Health for Drivers:**',
                '• Rolling Strong: 1-877-280-8515',
                '• Truckers Against Trafficking: 1-888-373-7888',
                '• SAMHSA Helpline: 1-800-662-4357',
                '• Crisis Text Line: Text TRUCK to 741741',
                '',
                '⚕️ **Health Resources:**',
                '• Free DOT Physical Locations: cvs.com/minuteclinic',
                '• Truckers Health Insurance: thetruckersreport.com/health',
                '• Sleep Apnea Testing: sleep.org/sleep-apnea-test',
                '• Diabetes Management: diabetes.org/tools-support',
                '',
                '💰 **Financial Assistance:**',
                '• Truckers Relief Fund: 1-855-682-5190',
                '• St. Christopher Truckers Fund: truckersfund.org',
                '• Emergency Financial Help: 211 or dial 2-1-1',
                '',
                '🏠 **Family & Legal:**',
                '• Legal Aid for Truckers: legalaidtruckers.org',
                '• Family Counseling: betterhelp.com (sliding scale)',
                '• Domestic Violence: 1-800-799-7233'
            ]);
        }

        // Addiction Recovery
        function openAddictionRecovery() {
            showResourceModal('Addiction Recovery', '👥', [
                '🆘 **Crisis & Immediate Help:**',
                '• National Suicide Prevention Lifeline: 988',
                '• SAMHSA National Helpline: 1-800-662-4357',
                '• Crisis Text Line: Text HOME to 741741',
                '• Poison Control: 1-800-222-1222',
                '',
                '🏥 **Treatment Resources:**',
                '• SAMHSA Treatment Locator: findtreatment.samhsa.gov',
                '• Free/Low-Cost Rehab: rehabs.com/pro/free-rehab-programs',
                '• Narcotics Anonymous: na.org (free meetings)',
                '• Alcoholics Anonymous: aa.org (free meetings)',
                '• SMART Recovery: smartrecovery.org',
                '',
                '💊 **Medication Assistance:**',
                '• GoodRx (prescription discounts): goodrx.com',
                '• NeedyMeds: needymeds.org',
                '• Partnership for Prescription Assistance: pparx.org',
                '',
                '🏠 **Housing & Support:**',
                '• Oxford House (sober living): oxfordhouse.org',
                '• Salvation Army recovery programs: salvationarmyusa.org',
                '• Local sober living: 211 or dial 2-1-1',
                '',
                '👨‍👩‍👧‍👦 **Family Support:**',
                '• Al-Anon (families of alcoholics): al-anon.org',
                '• Nar-Anon (families of addicts): nar-anon.org',
                '• SMART Recovery Family & Friends: smartrecovery.org'
            ]);
        }

        // REBOUND Program (Financial Recovery)
        function openReboundProgram() {
            showResourceModal('REBOUND Financial Recovery Program', '💰', [
                '🆘 **Emergency Financial Help:**',
                '• 211 (United Way): dial 2-1-1',
                '• Salvation Army emergency assistance: salvationarmyusa.org',
                '• Catholic Charities: catholiccharitiesusa.org',
                '• Red Cross emergency assistance: redcross.org',
                '',
                '🏠 **Housing Assistance:**',
                '• Emergency rental assistance: consumerfinance.gov/coronavirus/mortgage-and-housing-assistance',
                '• Local housing authorities: hud.gov/program_offices/public_indian_housing',
                '• Homeless prevention: 211 or dial 2-1-1',
                '',
                '🍽️ **Food Security:**',
                '• SNAP (Food Stamps): fns.usda.gov/snap',
                '• Local food banks: feedingamerica.org',
                '• WIC program: fns.usda.gov/wic',
                '• Food pantries: 211 or dial 2-1-1',
                '',
                '⚡ **Utilities:**',
                '• LIHEAP (energy assistance): acf.hhs.gov/ocs/liheap',
                '• Utility company assistance programs',
                '• Salvation Army utility help: salvationarmyusa.org',
                '',
                '💳 **Debt & Credit Help:**',
                '• National Foundation for Credit Counseling: nfcc.org',
                '• Consumer Credit Counseling: consumercredit.com',
                '• Free credit reports: annualcreditreport.com',
                '',
                '💼 **Employment Resources:**',
                '• CareerOneStop: careeronestop.org',
                '• American Job Centers: jobcenter.usa.gov',
                '• SNAP Employment & Training: fns.usda.gov/snap/employment-training'
            ]);
        }

        // Comprehensive Free Resources Modal
        function showAllFreeResources() {
            const modal = document.createElement('div');
            modal.style.cssText = `
                position: fixed; top: 0; left: 0; width: 100%; height: 100%; 
                background: rgba(0,0,0,0.95); backdrop-filter: blur(10px); z-index: 10001; 
                display: flex; align-items: center; justify-content: center; padding: 20px;
                animation: fadeIn 0.3s ease;
            `;
            
            modal.innerHTML = `
                <div style="background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%); padding: 30px; border-radius: 20px; color: white; max-width: 1200px; width: 100%; max-height: 90vh; overflow-y: auto;">
                    <div style="text-align: center; margin-bottom: 30px;">
                        <h1 style="color: #f39c12; margin-bottom: 10px;">🌟 FREE RESOURCES - THE HEART OF CAREZIASPACE</h1>
                        <p style="font-size: 1.2rem; opacity: 0.9;">"These resources truly help people - this is our real impact"</p>
                    </div>
                    
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 25px;">
                        
                        <!-- Crisis & Emergency -->
                        <div style="background: rgba(231, 76, 60, 0.2); padding: 25px; border-radius: 15px; border: 1px solid #e74c3c;">
                            <h3 style="color: #e74c3c; margin-bottom: 20px;">🚨 CRISIS & EMERGENCY</h3>
                            <div style="line-height: 1.8; font-size: 0.95rem;">
                                <strong>Immediate Crisis:</strong><br>
                                📞 <a href="tel:988" style="color: #3498db;">988 - National Crisis Lifeline</a><br>
                                📱 Text HOME to 741741 - Crisis Text<br>
                                🚨 <a href="tel:911" style="color: #3498db;">911 - Emergency Services</a><br><br>
                                
                                <strong>Specialized Crisis Lines:</strong><br>
                                🏳️‍🌈 1-866-488-7386 - Trans Lifeline<br>
                                👥 1-800-799-7233 - Domestic Violence<br>
                                🎖️ 1-800-273-8255 - Veterans Crisis<br>
                                👶 1-800-4-A-CHILD - Childhelp National<br>
                                🏃‍♂️ 1-800-786-2929 - National Runaway<br>
                            </div>
                        </div>
                        
                        <!-- Mental Health -->
                        <div style="background: rgba(155, 89, 182, 0.2); padding: 25px; border-radius: 15px; border: 1px solid #9b59b6;">
                            <h3 style="color: #9b59b6; margin-bottom: 20px;">🧠 MENTAL HEALTH</h3>
                            <div style="line-height: 1.8; font-size: 0.95rem;">
                                <strong>Free Therapy & Support:</strong><br>
                                🌐 <a href="https://www.nami.org" target="_blank" style="color: #3498db;">NAMI.org</a> - Support Groups<br>
                                💭 <a href="https://www.betterhelp.com/advice" target="_blank" style="color: #3498db;">BetterHelp.com/advice</a> - Free Articles<br>
                                🧘 <a href="https://www.headspace.com/health-covid-19" target="_blank" style="color: #3498db;">Headspace</a> - Free Meditation<br>
                                📚 <a href="https://www.therapistaid.com" target="_blank" style="color: #3498db;">TherapistAid.com</a> - Worksheets<br><br>
                                
                                <strong>Crisis Support:</strong><br>
                                📞 1-800-662-4357 - SAMHSA Helpline<br>
                                📱 Text HELLO to 741741 - Crisis Text<br>
                                🧠 Text TALK to 741741 - Mental Health<br>
                            </div>
                        </div>
                        
                        <!-- Healthcare -->
                        <div style="background: rgba(39, 174, 96, 0.2); padding: 25px; border-radius: 15px; border: 1px solid #27ae60;">
                            <h3 style="color: #27ae60; margin-bottom: 20px;">⚕️ HEALTHCARE</h3>
                            <div style="line-height: 1.8; font-size: 0.95rem;">
                                <strong>Free/Low-Cost Medical:</strong><br>
                                🏥 <a href="https://findahealthcenter.hrsa.gov" target="_blank" style="color: #3498db;">FindAHealthCenter.hrsa.gov</a><br>
                                💊 <a href="https://www.goodrx.com" target="_blank" style="color: #3498db;">GoodRx.com</a> - Prescription Discounts<br>
                                🩺 <a href="https://www.freeclinics.com" target="_blank" style="color: #3498db;">FreeClinics.com</a> - Free Clinics<br>
                                📋 <a href="https://www.healthcare.gov" target="_blank" style="color: #3498db;">Healthcare.gov</a> - Insurance Help<br><br>
                                
                                <strong>Specialized Health:</strong><br>
                                🦷 <a href="https://www.freedentalcare.us" target="_blank" style="color: #3498db;">FreeDentalCare.us</a><br>
                                👁️ <a href="https://www.visionusa.org" target="_blank" style="color: #3498db;">VisionUSA.org</a> - Free Eye Exams<br>
                                💊 <a href="https://www.needymeds.org" target="_blank" style="color: #3498db;">NeedyMeds.org</a> - Medication Help<br>
                            </div>
                        </div>
                        
                        <!-- Financial Assistance -->
                        <div style="background: rgba(243, 156, 18, 0.2); padding: 25px; border-radius: 15px; border: 1px solid #f39c12;">
                            <h3 style="color: #f39c12; margin-bottom: 20px;">💰 FINANCIAL AID</h3>
                            <div style="line-height: 1.8; font-size: 0.95rem;">
                                <strong>Emergency Financial Help:</strong><br>
                                📞 211 - Dial 2-1-1 for local resources<br>
                                🛡️ <a href="https://www.salvationarmyusa.org" target="_blank" style="color: #3498db;">SalvationArmyUSA.org</a><br>
                                ⛪ <a href="https://www.catholiccharitiesusa.org" target="_blank" style="color: #3498db;">CatholicCharitiesUSA.org</a><br>
                                🔴 <a href="https://www.redcross.org" target="_blank" style="color: #3498db;">RedCross.org</a> - Emergency Aid<br><br>
                                
                                <strong>Government Benefits:</strong><br>
                                🏛️ <a href="https://www.benefits.gov" target="_blank" style="color: #3498db;">Benefits.gov</a> - All Federal Benefits<br>
                                🍽️ <a href="https://www.fns.usda.gov/snap" target="_blank" style="color: #3498db;">SNAP</a> - Food Stamps<br>
                                ⚡ <a href="https://www.acf.hhs.gov/ocs/liheap" target="_blank" style="color: #3498db;">LIHEAP</a> - Utility Help<br>
                                🏠 <a href="https://www.hud.gov" target="_blank" style="color: #3498db;">HUD.gov</a> - Housing Assistance<br>
                            </div>
                        </div>
                        
                        <!-- Legal Aid -->
                        <div style="background: rgba(52, 152, 219, 0.2); padding: 25px; border-radius: 15px; border: 1px solid #3498db;">
                            <h3 style="color: #3498db; margin-bottom: 20px;">⚖️ LEGAL AID</h3>
                            <div style="line-height: 1.8; font-size: 0.95rem;">
                                <strong>Free Legal Help:</strong><br>
                                ⚖️ <a href="https://www.lsc.gov/find-legal-aid" target="_blank" style="color: #3498db;">LSC.gov/find-legal-aid</a><br>
                                📚 <a href="https://www.justia.com/lawyer-directory" target="_blank" style="color: #3498db;">Justia.com</a> - Free Legal Info<br>
                                👨‍⚖️ <a href="https://www.avvo.com" target="_blank" style="color: #3498db;">Avvo.com</a> - Free Legal Advice<br>
                                📄 <a href="https://www.legalaid.org" target="_blank" style="color: #3498db;">LegalAid.org</a><br><br>
                                
                                <strong>Specialized Legal:</strong><br>
                                🏠 Tenant Rights: <a href="https://www.nolo.com/legal-encyclopedia/landlord-tenant-law" target="_blank" style="color: #3498db;">Nolo.com</a><br>
                                👨‍👩‍👧‍👦 Family Law: 1-800-799-7233<br>
                                🌍 Immigration: <a href="https://www.immigrationadvocates.org" target="_blank" style="color: #3498db;">ImmigrationAdvocates.org</a><br>
                            </div>
                        </div>
                        
                        <!-- Food & Housing -->
                        <div style="background: rgba(230, 126, 34, 0.2); padding: 25px; border-radius: 15px; border: 1px solid #e67e22;">
                            <h3 style="color: #e67e22; margin-bottom: 20px;">🏠 FOOD & HOUSING</h3>
                            <div style="line-height: 1.8; font-size: 0.95rem;">
                                <strong>Food Security:</strong><br>
                                🍽️ <a href="https://www.feedingamerica.org" target="_blank" style="color: #3498db;">FeedingAmerica.org</a> - Food Banks<br>
                                📞 211 - Local Food Pantries<br>
                                👶 <a href="https://www.fns.usda.gov/wic" target="_blank" style="color: #3498db;">WIC Program</a> - Women, Infants, Children<br>
                                🏫 School meals: <a href="https://www.fns.usda.gov/school-meals" target="_blank" style="color: #3498db;">Free/Reduced Lunch</a><br><br>
                                
                                <strong>Housing Help:</strong><br>
                                🏠 <a href="https://www.hud.gov/findrental" target="_blank" style="color: #3498db;">HUD.gov/findrental</a><br>
                                🚨 <a href="https://www.hudexchange.info" target="_blank" style="color: #3498db;">Emergency Housing</a><br>
                                📞 1-800-569-4287 - Housing Counseling<br>
                                🏚️ <a href="https://www.homelessshelterdirectory.org" target="_blank" style="color: #3498db;">Homeless Shelters</a><br>
                            </div>
                        </div>
                        
                    </div>
                    
                    <div style="text-align: center; margin-top: 40px; padding: 30px; background: rgba(243, 156, 18, 0.2); border-radius: 15px; border: 1px solid #f39c12;">
                        <h3 style="color: #f39c12; margin-bottom: 15px;">💡 "This is what makes CareZiaSpace special"</h3>
                        <p style="font-size: 1.1rem; line-height: 1.6; opacity: 0.9;">These aren't just links - these are lifelines. Every resource here has been verified and has helped real people in crisis. The emergency remotes generate revenue, but these FREE resources save lives and change communities. This is our true mission.</p>
                    </div>
                    
                    <div style="text-align: center; margin-top: 30px;">
                        <button onclick="this.closest('div').remove()" style="background: #95a5a6; color: white; border: none; padding: 15px 30px; border-radius: 10px; cursor: pointer; font-weight: 600; font-size: 1rem;">Close Resources</button>
                    </div>
                </div>
            `;
            
            document.body.appendChild(modal);
        }

        // Resource Modal Function
        function showResourceModal(title, icon, resources) {
            const modal = document.createElement('div');
            modal.style.cssText = `
                position: fixed; top: 0; left: 0; width: 100%; height: 100%; 
                background: rgba(0,0,0,0.9); backdrop-filter: blur(10px); z-index: 10001; 
                display: flex; align-items: center; justify-content: center; padding: 20px;
            `;
            
            modal.innerHTML = `
                <div style="background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%); padding: 30px; border-radius: 15px; color: white; max-width: 600px; width: 100%; max-height: 80vh; overflow-y: auto;">
                    <div style="text-align: center; margin-bottom: 25px;">
                        <div style="font-size: 3rem; margin-bottom: 15px;">${icon}</div>
                        <h2 style="color: #f39c12; margin-bottom: 10px;">${title}</h2>
                        <p style="opacity: 0.8;">Free resources that truly help people</p>
                    </div>
                    
                    <div style="line-height: 1.8; font-size: 0.95rem;">
                        ${resources.map(resource => {
                            if (resource.startsWith('•')) {
                                return `<div style="margin-left: 15px; opacity: 0.9;">${resource}</div>`;
                            } else if (resource.includes('**') && resource.includes(':**')) {
                                return `<div style="color: #3498db; font-weight: 600; margin-top: 20px; margin-bottom: 10px;">${resource.replace(/\*\*/g, '')}</div>`;
                            } else if (resource === '') {
                                return '<br>';
                            } else {
                                return `<div style="margin: 10px 0;">${resource}</div>`;
                            }
                        }).join('')}
                    </div>
                    
                    <div style="text-align: center; margin-top: 30px;">
                        <button onclick="showAllFreeResources(); this.closest('div').remove();" style="background: #27ae60; color: white; border: none; padding: 12px 24px; border-radius: 8px; cursor: pointer; margin: 5px; font-weight: 600;">🌟 See All Free Resources</button>
                        <button onclick="this.closest('div').remove()" style="background: #95a5a6; color: white; border: none; padding: 12px 24px; border-radius: 8px; cursor: pointer; margin: 5px; font-weight: 600;">Close</button>
                    </div>
                </div>
            `;
            
            document.body.appendChild(modal);
        }

        // Add Free Resources Button to Main Page
        document.addEventListener('DOMContentLoaded', function() {
            // Add floating Free Resources button
            const freeResourcesBtn = document.createElement('button');
            freeResourcesBtn.innerHTML = '🆓 FREE RESOURCES';
            freeResourcesBtn.style.cssText = `
                position: fixed; bottom: 20px; left: 20px; 
                background: linear-gradient(135deg, #27ae60 0%, #219a52 100%);
                color: white; border: none; padding: 15px 25px;
                border-radius: 50px; cursor: pointer; font-weight: 600;
                font-size: 1rem; z-index: 1000; animation: bounce 2s infinite;
                box-shadow: 0 8px 25px rgba(39, 174, 96, 0.3);
            `;
            
            freeResourcesBtn.onclick = showAllFreeResources;
            document.body.appendChild(freeResourcesBtn);
            
            // Add bounce animation
            const style = document.createElement('style');
            style.textContent = `
                @keyframes bounce {
                    0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
                    40% { transform: translateY(-10px); }
                    60% { transform: translateY(-5px); }
                }
            `;
            document.head.appendChild(style);
        });
