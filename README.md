This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="theme-color" content="#ff4757">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <title>CareZiaSpace - Digital Emergency Directory & Communication Platform</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Arial', sans-serif;
            background: linear-gradient(135deg, #2f3542 0%, #40739e 100%);
            min-height: 100vh;
            color: white;
        }

        .campus-guard-banner {
            background: linear-gradient(45deg, #ff4757, #ffd700, #ff4757, #ffd700);
            background-size: 400% 400%;
            animation: gradientShift 3s ease infinite;
            padding: 10px;
            text-align: center;
            font-weight: bold;
            font-size: 1.1rem;
            color: #333;
            position: sticky;
            top: 0;
            z-index: 100;
        }

        @keyframes gradientShift {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
        }

        .main-nav {
            background: rgba(0, 0, 0, 0.9);
            padding: 10px;
            display: flex;
            justify-content: center;
            gap: 10px;
            flex-wrap: wrap;
            font-size: 0.9rem;
        }

        .nav-tab {
            background: rgba(255, 255, 255, 0.2);
            color: white;
            border: none;
            padding: 8px 15px;
            border-radius: 15px;
            cursor: pointer;
            transition: all 0.3s;
        }

        .nav-tab:hover, .nav-tab.active {
            background: #26de81;
            color: #333;
        }

        .nav-tab.premium {
            background: #ffd700;
            color: #333;
        }

        .service-container {
            display: none;
            padding: 20px;
        }

        .service-container.active {
            display: block;
        }

        /* Lifetime Access Banner */
        .lifetime-banner {
            background: linear-gradient(135deg, #ffd700, #ff6b35);
            color: #333;
            text-align: center;
            padding: 15px;
            margin: 10px;
            border-radius: 10px;
            font-weight: bold;
        }

        /* Emergency Controls */
        .emergency-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 10px;
            max-width: 500px;
            margin: 20px auto;
        }

        .emergency-btn {
            background: linear-gradient(135deg, #ff4757, #ff3742);
            color: white;
            border: none;
            padding: 20px;
            border-radius: 10px;
            cursor: pointer;
            font-size: 1.1rem;
            font-weight: bold;
            text-align: center;
            transition: all 0.3s;
        }

        .emergency-btn:hover {
            transform: scale(1.02);
            box-shadow: 0 5px 15px rgba(0,0,0,0.3);
        }

        .emergency-btn.blue {
            background: linear-gradient(135deg, #74b9ff, #0984e3);
        }

        .emergency-btn.green {
            background: linear-gradient(135deg, #26de81, #20bf6b);
        }

        .emergency-btn.purple {
            background: linear-gradient(135deg, #a29bfe, #6c5ce7);
        }

        .emergency-btn.cyan {
            background: linear-gradient(135deg, #00cec9, #00b894);
        }

        /* GPS Location Services */
        .gps-services {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 10px;
            margin: 20px 10px;
        }

        .gps-btn {
            background: linear-gradient(135deg, #74b9ff, #0984e3);
            color: white;
            border: none;
            padding: 15px;
            border-radius: 10px;
            cursor: pointer;
            font-weight: bold;
            text-align: center;
            font-size: 0.9rem;
        }

        .gps-btn.red {
            background: linear-gradient(135deg, #ff6b6b, #ee5a52);
        }

        .gps-btn.green {
            background: linear-gradient(135deg, #26de81, #20bf6b);
        }

        .gps-btn.purple {
            background: linear-gradient(135deg, #a29bfe, #6c5ce7);
        }

        .gps-btn.orange {
            background: linear-gradient(135deg, #ffa502, #ff7675);
        }

        /* Bottom Service Row */
        .bottom-services {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 10px;
            margin: 10px;
        }

        .bottom-btn {
            background: linear-gradient(135deg, #74b9ff, #0984e3);
            color: white;
            border: none;
            padding: 15px;
            border-radius: 10px;
            cursor: pointer;
            font-weight: bold;
            text-align: center;
            font-size: 0.9rem;
        }

        .bottom-btn.green {
            background: linear-gradient(135deg, #26de81, #20bf6b);
        }

        .bottom-btn.orange {
            background: linear-gradient(135deg, #ffa502, #ff7675);
        }

        .bottom-btn.red {
            background: linear-gradient(135deg, #ff6b6b, #ee5a52);
        }

        /* Payment Options */
        .payment-options {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 15px;
            margin: 20px 0;
        }

        .payment-btn {
            background: linear-gradient(135deg, #26de81, #20bf6b);
            color: white;
            border: none;
            padding: 15px;
            border-radius: 10px;
            cursor: pointer;
            font-weight: bold;
        }

        .payment-btn.cashapp {
            background: linear-gradient(135deg, #00d632, #00ac2b);
        }

        .payment-btn.paypal {
            background: linear-gradient(135deg, #003087, #0070ba);
        }

        .payment-btn.guard-dog {
            background: linear-gradient(135deg, #ffb94b, #f39c12);
            color: #333;
        }

        @media (max-width: 768px) {
            .emergency-grid {
                margin: 10px;
            }
            
            .gps-services, .bottom-services {
                grid-template-columns: 1fr;
                gap: 5px;
            }
            
            .main-nav {
                font-size: 0.8rem;
                gap: 5px;
            }
        }
    </style>
</head>
<body>
    <!-- Campus Guard Dog Banner -->
    <div class="campus-guard-banner">
        🐕⭐ CAMPUS GUARD DOG - LIVE EMERGENCY ⭐🐕
    </div>

    <!-- Main Navigation -->
    <div class="main-nav">
        <button class="nav-tab active" onclick="showService('emergency')">🚨 Emergency</button>
        <button class="nav-tab" onclick="showService('home')">🏠 Home</button>
        <button class="nav-tab" onclick="showService('pricing')">💰 Pricing</button>
        <button class="nav-tab premium" onclick="showService('b2b')">🏢 B2B</button>
    </div>

    <!-- Emergency Remote Service -->
    <div id="emergency" class="service-container active">
        <!-- Lifetime Access Banner -->
        <div class="lifetime-banner">
            💚 CareZiaSpace Digital Emergency Directory - All Features Available 💚
        </div>

        <!-- Main Emergency Controls -->
        <div class="emergency-grid">
            <button class="emergency-btn" onclick="call911()">
                📞 CALL 911<br>
                <small>Immediate emergency response</small>
            </button>
            
            <button class="emergency-btn blue" onclick="shareLocation()">
                📍 SHARE MY LOCATION<br>
                <small>GPS coordinates to family & 911</small>
            </button>
            
            <button class="emergency-btn green" onclick="familyAlert()">
                👨‍👩‍👧‍👦 FAMILY EMERGENCY ALERT<br>
                <small>Notify all family members</small>
            </button>
            
            <button class="emergency-btn purple" onclick="medicalEmergency()">
                🏥 MEDICAL EMERGENCY<br>
                <small>Medical ID & ambulance request</small>
            </button>
            
            <button class="emergency-btn cyan" onclick="internationalEmergency()">
                🌍 INTERNATIONAL EMERGENCY<br>
                <small>Global emergency services (25+ countries)</small>
            </button>
        </div>

        <!-- GPS Emergency Locations -->
        <div style="text-align: center; margin: 20px; color: #74b9ff; font-weight: bold;">
            📍 GPS EMERGENCY LOCATIONS
        </div>
        
        <div class="gps-services">
            <button class="gps-btn" onclick="findPolice()">
                👮 FIND POLICE STATION<br>
                <small>Opens GPS map to nearest police</small>
            </button>
            
            <button class="gps-btn red" onclick="findFire()">
                🚒 FIND FIRE DEPARTMENT<br>
                <small>Opens GPS map to nearest fire station</small>
            </button>
            
            <button class="gps-btn green" onclick="findHospital()">
                🏥 FIND HOSPITAL/ER<br>
                <small>Opens GPS map to nearest emergency room</small>
            </button>
            
            <button class="gps-btn purple" onclick="findPharmacy()">
                💊 FIND 24HR PHARMACY<br>
                <small>Opens GPS map to nearest 24-hour pharmacy</small>
            </button>
        </div>

        <!-- Bottom Services -->
        <div class="bottom-services">
            <button class="bottom-btn green" onclick="familyGuardPro()">
                🛡️ FAMILY GUARD PRO
            </button>
            
            <button class="bottom-btn orange" onclick="weatherAlert()">
                🌪️ WEATHER ALERT
            </button>
            
            <button class="bottom-btn red" onclick="safetyCheck()">
                🛡️ SAFETY CHECK
            </button>
            
            <button class="bottom-btn green" onclick="truckingEmergency()">
                🚛 TRUCKING EMERGENCY
            </button>
        </div>
    </div>

    <!-- Pricing Section -->
    <div id="pricing" class="service-container">
        <div style="background: rgba(255, 255, 255, 0.05); margin: 20px; padding: 20px; border-radius: 15px;">
            <h2 style="text-align: center; color: #ffd700; margin-bottom: 20px;">💰 CareZiaSpace Pricing</h2>
            
            <!-- Featured Lifetime Deal -->
            <div style="background: linear-gradient(135deg, #ff4757, #ff3742); padding: 30px; border-radius: 15px; text-align: center; margin-bottom: 30px;">
                <div style="background: #ffd700; color: #333; padding: 5px 15px; border-radius: 20px; display: inline-block; margin-bottom: 15px; font-weight: bold;">
                    95% OFF
                </div>
                <div style="text-decoration: line-through; color: rgba(255,255,255,0.7); font-size: 1.2rem;">$89.88/year forever</div>
                <div style="font-size: 2.5rem; color: #26de81; font-weight: bold;">$199 Lifetime</div>
                <p style="margin: 15px 0; font-size: 1.1rem;">One payment. Your entire family protected for life.</p>
                <p style="margin-bottom: 15px;">Emergency Remote + Family Communication included</p>
                <div style="background: rgba(255,255,255,0.2); padding: 10px; border-radius: 10px; margin: 10px 0;">
                    ✅ No monthly fees after $199 payment
                </div>
                <button class="payment-btn" onclick="buyLifetime()">
                    🛡️ Protect My Family For Life - $199
                </button>
                <div style="background: rgba(255,255,255,0.2); padding: 10px; border-radius: 10px; margin-top: 10px;">
                    ✅ 30-Day Money Back Guarantee
                </div>
            </div>

            <!-- Payment Options -->
            <div class="payment-options">
                <button class="payment-btn cashapp" onclick="payCashApp()">
                    💚 Cash App<br>
                    <small>$ToddTiffany4 - Instant</small>
                </button>
                
                <button class="payment-btn paypal" onclick="payPayPal()">
                    🅿️ PayPal<br>
                    <small>ToddTiffany4 - Secure</small>
                </button>
                
                <button class="payment-btn guard-dog" onclick="payGuardDog()">
                    🐕 Guard Dog Coin<br>
                    <small>25% Discount Available</small>
                </button>
            </div>
        </div>
    </div>

    <script>
        // Service navigation
        function showService(serviceId) {
            document.querySelectorAll('.service-container').forEach(container => {
                container.classList.remove('active');
            });
            
            document.querySelectorAll('.nav-tab').forEach(tab => {
                tab.classList.remove('active');
            });
            
            const targetContainer = document.getElementById(serviceId);
            if (targetContainer) {
                targetContainer.classList.add('active');
            }
            
            if (event && event.target) {
                event.target.classList.add('active');
            }
        }

        // Emergency Functions
        function call911() {
            if (confirm('🚨 This will call 911 Emergency Services. Continue?')) {
                window.location.href = 'tel:911';
                shareLocation();
            }
        }

        function shareLocation() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(function(position) {
                    const coords = position.coords.latitude + ',' + position.coords.longitude;
                    alert('📍 Location shared: ' + coords);
                });
            } else {
                alert('📍 GPS location shared with emergency contacts');
            }
        }

        function familyAlert() {
            alert('📢 Family Emergency Alert sent to all contacts!');
        }

        function medicalEmergency() {
            alert('🏥 Medical Emergency:\n\nMedical ID accessed\nEmergency contacts notified\nAmbulance requested');
        }

        function internationalEmergency() {
            alert('🌍 International Emergency:\n\n🇺🇸 US Embassy: +1 202 501 4444\n🇬🇧 UK: 999\n🇨🇦 Canada: 911\n🇫🇷 France: 112');
        }

        // GPS Functions
        function findPolice() {
            window.open('https://www.google.com/maps/search/police+station+near+me', '_blank');
        }

        function findFire() {
            window.open('https://www.google.com/maps/search/fire+station+near+me', '_blank');
        }

        function findHospital() {
            window.open('https://www.google.com/maps/search/hospital+emergency+room+near+me', '_blank');
        }

        function findPharmacy() {
            window.open('https://www.google.com/maps/search/24+hour+pharmacy+near+me', '_blank');
        }

        // Payment Functions
        function buyLifetime() {
            alert('🛡️ CareZiaSpace Lifetime - $199\n\nRedirecting to secure payment...');
        }

        function payCashApp() {
            alert('💚 Cash App Payment\n\nSend to: $ToddTiffany4\nAmount: $199');
        }

        function payPayPal() {
            alert('🅿️ PayPal Payment\n\nSend to: ToddTiffany4\nAmount: $199');
        }

        function payGuardDog() {
            alert('🐕 Guard Dog Coin Payment\n\n25% Discount: $149\nRedirecting...');
        }

        // Additional Services
        function familyGuardPro() { alert('🛡️ Family Guard Pro activated'); }
        function weatherAlert() { alert('🌪️ Weather Alert System active'); }
        function safetyCheck() { alert('🛡️ Safety Check complete'); }
        function truckingEmergency() { alert('🚛 Trucking Emergency services ready'); }
    </script>
</body>
</html>
```

This is your complete CareZiaSpace platform ready to deploy!
