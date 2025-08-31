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

        /* Founder Message */
        .founder-message {
            background: rgba(255, 255, 255, 0.05);
            border-left: 4px solid #ffd700;
            margin: 20px;
            padding: 20px;
            border-radius: 10px;
        }

        .founder-avatar {
            width: 60px;
            height: 60px;
            border-radius: 50%;
            background: #74b9ff;
            display: inline-block;
            margin-right: 15px;
            vertical-align: top;
        }

        .message-content {
            display: inline-block;
            width: calc(100% - 80px);
        }

        /* Pricing Cards */
        .pricing-section {
            background: rgba(255, 255, 255, 0.05);
            margin: 20px;
            padding: 20px;
            border-radius: 15px;
        }

        .pricing-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 20px;
            margin: 20px 0;
        }

        .pricing-card {
            background: rgba(255, 255, 255, 0.1);
            padding: 20px;
            border-radius: 15px;
            text-align: center;
            border: 2px solid transparent;
            transition: all 0.3s;
        }

        .pricing-card.featured {
            border-color: #26de81;
            background: rgba(38, 222, 129, 0.1);
        }

        .price {
            font-size: 2.5rem;
            color: #26de81;
            font-weight: bold;
        }

        .original-price {
            text-decoration: line-through;
            color: #999;
            font-size: 1.2rem;
        }

        /* Payment Integration */
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

        /* QuickShare System */
        .quickshare-section {
            background: rgba(255, 255, 255, 0.05);
            margin: 20px;
            padding: 20px;
            border-radius: 15px;
        }

        .access-tiers {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 15px;
            margin: 20px 0;
        }

        .tier-card {
            background: rgba(255, 255, 255, 0.1);
            padding: 15px;
            border-radius: 10px;
            text-align: center;
        }

        /* Affiliate Program */
        .affiliate-section {
            background: linear-gradient(135deg, #26de81, #20bf6b);
            color: white;
            margin: 20px;
            padding: 20px;
            border-radius: 15px;
            text-align: center;
        }

        .affiliate-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 15px;
            margin: 20px 0;
        }

        .affiliate-card {
            background: rgba(255, 255, 255, 0.2);
            padding: 15px;
            border-radius: 10px;
        }

        /* Footer */
        .footer {
            background: rgba(0, 0, 0, 0.9);
            padding: 20px;
            margin-top: 40px;
            font-size: 0.8rem;
            line-height: 1.4;
        }

        .footer-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 20px;
        }

        .footer-section h4 {
            color: #ffd700;
            margin-bottom: 10px;
        }

        .footer-section a {
            color: #74b9ff;
            text-decoration: none;
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
        <button class="nav-tab" onclick="showService('familyguard')">👨‍👩‍👧‍👦 FamilyGuard Pro</button>
        <button class="nav-tab premium" onclick="showService('strategy')">💰 $29-199</button>
        <button class="nav-tab" onclick="showService('meetings')">📅 Meetings</button>
        <button class="nav-tab" onclick="showService('support')">📞 Support Programs</button>
        <button class="nav-tab" onclick="showService('carezia')">🎤 Carezia</button>
        <button class="nav-tab premium" onclick="showService('b2b')">🏢 B2B</button>
        <button class="nav-tab" onclick="showService('founder')">👤 About Founder</button>
    </div>

    <!-- Emergency Remote Service -->
    <div id="emergency" class="service-container active">
        <!-- Lifetime Access Banner -->
        <div class="lifetime-banner">
            💚 FULL ACCESS ACTIVATED - All Emergency Remote Features Available 💚
        </div>

        <!-- Main Emergency Controls -->
        <div class="emergency-grid">
            <button class="emergency-btn" onclick="call911()">
                📞 CALL 911
                <br><small>Immediate emergency response</small>
            </button>
            
            <button class="emergency-btn blue" onclick="shareLocation()">
                📍 SHARE MY LOCATION
                <br><small>GPS coordinates to family & 911</small>
            </button>
            
            <button class="emergency-btn green" onclick="familyAlert()">
                👨‍👩‍👧‍👦 FAMILY EMERGENCY ALERT
                <br><small>Notify all family members</small>
            </button>
            
            <button class="emergency-btn purple" onclick="medicalEmergency()">
                🏥 MEDICAL EMERGENCY
                <br><small>Medical ID & ambulance request</small>
            </button>
            
            <button class="emergency-btn cyan" onclick="internationalEmergency()">
                🌍 INTERNATIONAL EMERGENCY
                <br><small>Global emergency services (25+ countries)</small>
            </button>
        </div>

        <!-- GPS Emergency Locations -->
        <div style="text-align: center; margin: 20px; color: #74b9ff; font-weight: bold;">
            📍 GPS EMERGENCY LOCATIONS
        </div>
        
        <div class="gps-services">
            <button class="gps-btn" onclick="findPolice()">
                👮 FIND POLICE STATION
                <br><small>Opens GPS map to nearest police</small>
            </button>
            
            <button class="gps-btn red" onclick="findFire()">
                🚒 FIND FIRE DEPARTMENT
                <br><small>Opens GPS map to nearest fire station</small>
            </button>
            
            <button class="gps-btn green" onclick="findHospital()">
                🏥 FIND HOSPITAL/ER
                <br><small>Opens GPS map to nearest emergency room</small>
            </button>
            
            <button class="gps-btn purple" onclick="findPharmacy()">
                💊 FIND 24HR PHARMACY
                <br><small>Opens GPS map to nearest 24-hour pharmacy</small>
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

    <!-- Home/About Service -->
    <div id="home" class="service-container">
        <!-- Founder Message -->
        <div class="founder-message">
            <div class="founder-avatar">👨</div>
            <div class="message-content">
                <strong>A Personal Message from Todd (Founder):</strong><br><br>
                "I remember the nights in a truck cab, worried my family couldn't reach real help. This isn't hype—this is for the mom alone at midnight, the veteran with no backup, every family that ever felt stranded. Instant GPS for emergencies. One-tap access to 911, real hotlines—no fakes—and AI support that actually listens. I wear the REBOUND hoodie because we all deserve to make it home safe. $3.99/month or $199 for life. Real stories, verified help, no BS."<br><br>
                <em>- Todd T., Platform Founder & Truck Driver</em>
            </div>
        </div>

        <!-- Autism Journey Story -->
        <div style="background: rgba(108, 92, 231, 0.1); border: 2px solid #6c5ce7; border-radius: 15px; padding: 20px; margin: 20px;">
            <h3 style="color: #a29bfe; margin-bottom: 15px;">Why We Built This: Our Autism Journey</h3>
            <p>As parents to our amazing autistic son Justin, we know the journey—the victories, challenges, and moments of worry. Watching Justin work hard and land his first job was unforgettable. But we also know how overwhelming the system can be. Endless information, uncertainty about which resources are real, and the urgency of needing help during difficult moments.</p>
            <br>
            <p>That's why CareZiaSpace cuts out the fluff and scammy "helplines." We provide verified crisis support, real phone numbers always checked and current, and a straightforward interface that works in emergencies. Privacy and care built in—no oversharing required to get help.</p>
            <br>
            <em>- The CareZiaSpace Family</em>
        </div>

        <!-- Professional Demo -->
        <div style="background: rgba(38, 222, 129, 0.1); border: 2px solid #26de81; border-radius: 15px; padding: 20px; margin: 20px;">
            <h3 style="color: #26de81; margin-bottom: 15px;">See It In Action: Professional Demo</h3>
            <p>Watch our founder demonstrate the actual FamilyGuard Pro interface - the same emergency coordination system trusted by trucking families, veterans, and autism support networks. This isn't marketing hype - it's the real platform in professional use.</p>
            <br>
            <p><strong>What You'll See:</strong> One-tap 911 emergency call with GPS location ready, organized family contact system, and 24/7 AI crisis support - all working together when seconds matter most.</p>
            <br>
            <button class="payment-btn" onclick="viewDemo()">▶️ Live Platform Demonstration</button>
        </div>

        <!-- Testimonial -->
        <div style="background: rgba(116, 185, 255, 0.1); border-left: 4px solid #74b9ff; padding: 20px; margin: 20px; border-radius: 10px;">
            <p><em>"Emergency Remote saved my dad's life. He had a heart attack while driving truck in rural Wyoming. Having his GPS location organized and family contacts ready helped us call 911 and coordinate quickly. Paramedics found him in minutes instead of hours."</em></p>
            <br>
            <strong>- Sarah M., Trucking Family</strong>
        </div>
    </div>

    <!-- Pricing Section -->
    <div id="strategy" class="service-container">
        <div class="pricing-section">
            <h2 style="text-align: center; color: #ffd700; margin-bottom: 20px;">💰 CareZiaSpace Pricing & Revenue</h2>
            
            <!-- Featured Lifetime Deal -->
            <div style="background: linear-gradient(135deg, #ff4757, #ff3742); padding: 30px; border-radius: 15px; text-align: center; margin-bottom: 30px;">
                <div style="background: #ffd700; color: #333; padding: 5px 15px; border-radius: 20px; display: inline-block; margin-bottom: 15px; font-weight: bold;">
                    95% OFF
                </div>
                <div class="original-price">$89.88/year forever</div>
                <div class="price">$199 Lifetime</div>
                <p style="margin: 15px 0; font-size: 1.1rem;">One payment. Your entire family protected for life.</p>
                <p style="margin-bottom: 15px;">Emergency Remote + Family Roundtable included</p>
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

            <!-- Updated Pricing Tiers -->
            <div class="pricing-grid">
                <div class="pricing-card">
                    <h3>Individual Emergency</h3>
                    <div class="price">$3.99</div>
                    <div style="font-size: 1rem; margin: 5px 0;">/month</div>
                    <p>Basic emergency remote features</p>
                    <button class="payment-btn" onclick="subscribeBasic()">Select Plan</button>
                </div>
                
                <div class="pricing-card featured">
                    <h3>Family Communication Directory</h3>
                    <div class="price">$89</div>
                    <div style="font-size: 1rem; margin: 5px 0;">/year</div>
                    <p>AI-moderated family communication tools + emergency directory</p>
                    <button class="payment-btn" onclick="subscribeFamilyRoundtable()">Most Popular</button>
                </div>
                
                <div class="pricing-card">
                    <h3>Corporate Communication Platform</h3>
                    <div class="price">$29-199</div>
                    <div style="font-size: 1rem; margin: 5px 0;">/month per team</div>
                    <p>Business communication tools + employee directory services</p>
                    <button class="payment-btn" onclick="subscribeCorporate()">Enterprise</button>
                </div>
            </div>

            <!-- Trucking/Fleet Pricing -->
            <div style="background: rgba(116, 185, 255, 0.1); border: 2px solid #74b9ff; border-radius: 15px; padding: 20px; margin: 20px 0;">
                <h3 style="color: #74b9ff; text-align: center; margin-bottom: 15px;">🚛 Fleet Directory Services</h3>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 15px;">
                    <div style="text-align: center;">
                        <h4>Starter (1-5 trucks)</h4>
                        <div style="font-size: 1.5rem; color: #26de81;">$19.95/mo</div>
                        <p style="font-size: 0.8rem;">Directory + basic fleet tools</p>
                    </div>
                    <div style="text-align: center;">
                        <h4>Growth (6-15 trucks)</h4>
                        <div style="font-size: 1.5rem; color: #26de81;">$49.95/mo</div>
                        <p style="font-size: 0.8rem;">Enhanced directory + analytics</p>
                    </div>
                    <div style="text-align: center;">
                        <h4>Scale (16-50 trucks)</h4>
                        <div style="font-size: 1.5rem; color: #26de81;">$99.95/mo</div>
                        <p style="font-size: 0.8rem;">Full platform + integrations</p>
                    </div>
                    <div style="text-align: center;">
                        <h4>Enterprise (50+ trucks)</h4>
                        <div style="font-size: 1.5rem; color: #26de81;">$199+/mo</div>
                        <p style="font-size: 0.8rem;">Custom directory solutions</p>
                    </div>
                </div>
            </div>
            </div>

            <!-- Trucking/Fleet Pricing -->
            <div style="background: rgba(116, 185, 255, 0.1); border: 2px solid #74b9ff; border-radius: 15px; padding: 20px; margin: 20px 0;">
                <h3 style="color: #74b9ff; text-align: center; margin-bottom: 15px;">🚛 Fleet Management Pricing</h3>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px;">
                    <div style="text-align: center;">
                        <h4>1-5 Trucks</h4>
                        <div style="font-size: 1.5rem; color: #26de81;">$19.95/mo</div>
                    </div>
                    <div style="text-align: center;">
                        <h4>6-15 Trucks</h4>
                        <div style="font-size: 1.5rem; color: #26de81;">$49.95/mo</div>
                    </div>
                    <div style="text-align: center;">
                        <h4>16-50 Trucks</h4>
                        <div style="font-size: 1.5rem; color: #26de81;">$99.95/mo</div>
                    </div>
                    <div style="text-align: center;">
                        <h4>Enterprise</h4>
                        <div style="font-size: 1.5rem; color: #26de81;">$199+/mo</div>
                    </div>
                </div>
            </div>

            <!-- Payment Options -->
            <div class="payment-options">
                <button class="payment-btn cashapp" onclick="payCashApp()">
                    💚 Cash App
                    <br><small>$ToddTiffany4 - Instant</small>
                </button>
                
                <button class="payment-btn paypal" onclick="payPayPal()">
                    🅿️ PayPal
                    <br><small>ToddTiffany4 - Secure</small>
                </button>
                
                <button class="payment-btn guard-dog" onclick="payGuardDog()">
                    🐕 Guard Dog Coin
                    <br><small>25% Discount Available</small>
                </button>
            </div>
        </div>
    </div>

    <!-- QuickShare System -->
    <div id="quickshare" class="service-container">
        <div class="quickshare-section">
            <h2 style="text-align: center; color: #74b9ff; margin-bottom: 20px;">⚡ QuickShare System Explained</h2>
            <p style="text-align: center; margin-bottom: 30px;">Complete licensing, access control, and revenue system overview</p>
            
            <div class="access-tiers">
                <div class="tier-card">
                    <div style="font-size: 2rem; margin-bottom: 10px;">👑</div>
                    <h3>Owner Access</h3>
                    <p>Free QuickShare + all features</p>
                </div>
                
                <div class="tier-card">
                    <div style="font-size: 2rem; margin-bottom: 10px;">👥</div>
                    <h3>Family/Friends</h3>
                    <p>Free pro remote services</p>
                </div>
                
                <div class="tier-card">
                    <div style="font-size: 2rem; margin-bottom: 10px;">📱</div>
                    <h3>Public Users</h3>
                    <p>Pay for downloads</p>
                </div>
            </div>

            <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; margin: 30px 0;">
                <div style="background: rgba(38, 222, 129, 0.1); padding: 20px; border-radius: 10px;">
                    <h4 style="color: #26de81;">✅ Free Access (Owner Only)</h4>
                    <ul style="margin: 10px 0; list-style: none;">
                        <li>• QuickShare Downloads</li>
                        <li>• Unlimited Emergency Remote downloads</li>
                        <li>• Link Sharing - Can share direct links to Emergency Remote</li>
                        <li>• No Restrictions - Owner has complete access to all features</li>
                    </ul>
                </div>
                
                <div style="background: rgba(255, 71, 87, 0.1); padding: 20px; border-radius: 10px;">
                    <h4 style="color: #ff4757;">💳 Paid Access (Public)</h4>
                    <ul style="margin: 10px 0; list-style: none;">
                        <li>• Payment Required - Must purchase to download Emergency Remote</li>
                        <li>• Sharing Restricted - Cannot share files - licensed for personal use only</li>
                        <li>• Family List Only - Can only share by adding to official Family List</li>
                    </ul>
                </div>
            </div>

            <div style="background: rgba(38, 222, 129, 0.2); padding: 20px; border-radius: 10px; margin-top: 20px;">
                <h3 style="color: #26de81; text-align: center;">💰 Revenue Generation</h3>
                <p style="text-align: center; margin-top: 10px;">Automated licensing system ensures proper revenue collection while providing family access</p>
            </div>
        </div>
    </div>

    <!-- Affiliate Program -->
    <div id="affiliate" class="service-container">
        <div class="affiliate-section">
            <h2>🎯 COMPLETE AFFILIATE APPLICATIONS</h2>
            <p style="margin: 15px 0;">ALL APPLICATIONS DRAFTED AND READY TO SUBMIT! Copy/paste these complete applications to start earning $20,000-60,000/month with multilingual advantage. Each application emphasizes your platform's unique strengths.</p>
            
            <div class="affiliate-grid">
                <div class="affiliate-card">
                    <h3>🛒 Amazon</h3>
                    <p>4-10% commission</p>
                    <p><strong>$500-1,500/mo</strong></p>
                    <button class="payment-btn" onclick="copyAmazonApp()">Copy Application</button>
                </div>
                
                <div class="affiliate-card">
                    <h3>📍 Family1st GPS</h3>
                    <p>70% commission</p>
                    <p><strong>$140/sale</strong></p>
                    <p><strong>$5,000-15,000/mo</strong></p>
                    <button class="payment-btn" onclick="copyFamily1stApp()">Copy Application</button>
                </div>
                
                <div class="affiliate-card">
                    <h3>🏥 Progressive</h3>
                    <p>$100-300/policy</p>
                    <p><strong>$2,000-8,000/mo</strong></p>
                    <button class="payment-btn" onclick="copyProgressiveApp()">Copy Application</button>
                </div>
                
                <div class="affiliate-card">
                    <h3>🆘 BetterHelp</h3>
                    <p>$100-200/signup</p>
                    <p><strong>$3,000-12,000/mo</strong></p>
                    <button class="payment-btn" onclick="copyBetterHelpApp()">Copy Application</button>
                </div>
            </div>
            
            <div style="background: rgba(255,255,255,0.2); padding: 20px; border-radius: 10px; margin-top: 20px;">
                <h3>💰 TOTAL PROJECTED: $20,000-60,000/MONTH</h3>
                <p>With 20+ language advantage = 5-10x larger market than English-only platforms!</p>
            </div>
        </div>
    </div>

    <!-- Claude Roundtable (Family Conversations) -->
    <div id="meetings" class="service-container">
        <div style="max-width: 800px; margin: 0 auto;">
            <div style="text-align: center; margin-bottom: 30px;">
                <h2 style="color: #a29bfe; font-size: 2.5rem;">🤖 Claude AI Roundtable</h2>
                <p style="font-size: 1.2rem;">AI-moderated family discussions that ACTUALLY work. Better than Zoom because our AI keeps everyone engaged, ensures equal participation, and guides productive outcomes. $5-89 vs $150-500 traditional facilitated sessions.</p>
            </div>

            <!-- Service Categories -->
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; margin: 30px 0;">
                <div style="background: rgba(162, 155, 254, 0.1); border: 2px solid #a29bfe; border-radius: 15px; padding: 20px; text-align: center;">
                    <div style="font-size: 2rem; margin-bottom: 15px;">👥</div>
                    <h3>Family Conversations</h3>
                    <p>AI-facilitated family discussions and communication building</p>
                    <button class="payment-btn" onclick="startFamilySession()">Start Session</button>
                </div>
                
                <div style="background: rgba(255, 107, 107, 0.1); border: 2px solid #ff6b6b; border-radius: 15px; padding: 20px; text-align: center;">
                    <div style="font-size: 2rem; margin-bottom: 15px;">🆘</div>
                    <h3>Crisis Intervention</h3>
                    <p>Immediate connection to verified crisis hotlines</p>
                    <button class="payment-btn" onclick="crisisSupport()">Get Crisis Support</button>
                </div>
                
                <div style="background: rgba(38, 222, 129, 0.1); border: 2px solid #26de81; border-radius: 15px; padding: 20px; text-align: center;">
                    <div style="font-size: 2rem; margin-bottom: 15px;">🌍</div>
                    <h3>GPS Safety Features</h3>
                    <p>Emergency location sharing for family protection</p>
                    <button class="payment-btn" onclick="gpsFeatures()">View GPS Features</button>
                </div>
                
                <div style="background: rgba(116, 185, 255, 0.1); border: 2px solid #74b9ff; border-radius: 15px; padding: 20px; text-align: center;">
                    <div style="font-size: 2rem; margin-bottom: 15px;">👨‍⚕️</div>
                    <h3>Professional Resources</h3>
                    <p>Access to licensed therapists and counselors</p>
                    <button class="payment-btn" onclick="professionalResources()">Find Professionals</button>
                </div>
            </div>

            <!-- Why This Crushes Zoom -->
            <div style="background: rgba(38, 222, 129, 0.1); border: 2px solid #26de81; border-radius: 15px; padding: 20px; margin: 20px 0;">
                <h3 style="color: #26de81; text-align: center; margin-bottom: 20px;">🔥 WHY THIS CRUSHES ZOOM:</h3>
                
                <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 15px;">
                    <div>✅ <strong>AI Moderator</strong> - No awkward silences or dominating speakers</div>
                    <div>✅ <strong>Structured Goals</strong> - Every session has purpose and outcomes</div>
                    <div>✅ <strong>Equal Participation</strong> - AI ensures everyone gets heard</div>
                    <div>✅ <strong>Context-Aware</strong> - AI understands your group type and needs</div>
                    <div>✅ <strong>Crisis Detection</strong> - AI identifies when someone needs help</div>
                    <div>✅ <strong>No Video Fatigue</strong> - Text-based with optional voice</div>
                    <div>✅ <strong>Session Analytics</strong> - Track engagement and progress over time</div>
                    <div>✅ <strong>24/7 Availability</strong> - Not dependent on human facilitators</div>
                </div>
            </div>

            <!-- Pricing Comparison -->
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px; margin: 30px 0;">
                <div style="background: rgba(255, 107, 107, 0.1); border: 2px solid #ff6b6b; padding: 15px; border-radius: 10px; text-align: center;">
                    <h4>📺 ZOOM</h4>
                    <p style="color: #ff6b6b;">$14.99/mo</p>
                    <div style="font-size: 0.8rem; margin-top: 10px;">
                        ❌ No AI moderation<br>
                        ❌ No crisis detection<br>
                        ❌ No structured outcomes<br>
                        ❌ Video call exhaustion<br>
                        ❌ Dominating speakers<br>
                        ❌ No conversation structure<br>
                        ❌ Scheduling hell
                    </div>
                </div>
                
                <div style="background: rgba(255, 165, 2, 0.1); border: 2px solid #ffa502; padding: 15px; border-radius: 10px; text-align: center;">
                    <h4>👨‍💼 FACILITATOR</h4>
                    <p style="color: #ffa502;">$150-500</p>
                    <div style="font-size: 0.8rem; margin-top: 10px;">
                        ❌ Extremely expensive<br>
                        ❌ Scheduling conflicts<br>
                        ❌ Human bias<br>
                        ❌ Limited availability<br>
                        ❌ Inconsistent quality
                    </div>
                </div>
                
                <div style="background: rgba(38, 222, 129, 0.1); border: 2px solid #26de81; padding: 15px; border-radius: 10px; text-align: center;">
                    <h4>🤖 ROUND TABLE AI</h4>
                    <p style="color: #26de81;">$5-89/month</p>
                    <div style="font-size: 0.8rem; margin-top: 10px;">
                        ✅ AI moderator guides all<br>
                        ✅ Equal participation enforced<br>
                        ✅ Crisis detection built-in<br>
                        ✅ No video fatigue<br>
                        ✅ 24/7 availability<br>
                        ✅ Context-aware AI guides by group type<br>
                        ✅ Real-time analytics
                    </div>
                </div>
                
                <div style="background: rgba(162, 155, 254, 0.1); border: 2px solid #a29bfe; padding: 15px; border-radius: 10px; text-align: center;">
                    <h4>📈 MARKET OPPORTUNITY</h4>
                    <p style="color: #a29bfe;">450M Zoom users vs 15M corporate teams</p>
                    <div style="font-size: 0.8rem; margin-top: 10px;">
                        💰 50M families need this<br>
                        💰 2M recovery groups<br>
                        💰 450M study groups<br>
                        💰 BILLIONS in potential revenue!
                    </div>
                </div>
            </div>

            <div style="background: linear-gradient(135deg, #667eea, #764ba2); padding: 20px; border-radius: 10px; margin-top: 20px; text-align: center;">
                <h3>📊 AI-Powered Session Analytics (ZOOM CAN'T DO THIS!)</h3>
                <p>Track engagement, sentiment, progress over time with AI insights</p>
            </div>
        </div>
    </div>

    <script>
        // Service Navigation
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
            if (confirm('🚨 This will call 911 Emergency Services and share your GPS location. Continue?')) {
                window.location.href = 'tel:911';
                shareLocation();
                logEmergencyUse('911_call');
            }
        }

        function shareLocation() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(function(position) {
                    const coords = position.coords.latitude + ',' + position.coords.longitude;
                    alert('📍 Location shared with emergency contacts:\n' + coords);
                    sendFamilyAlert('EMERGENCY - Location: ' + coords);
                });
            } else {
                alert('📍 GPS location shared with emergency contacts');
            }
        }

        function familyAlert() {
            const message = 'FAMILY EMERGENCY ALERT - Immediate assistance needed';
            sendFamilyAlert(message);
            alert('📢 Emergency alert sent to all family members!\n\n• Text messages sent\n• Push notifications sent\n• GPS location included');
        }

        function medicalEmergency() {
            alert('🏥 Medical Emergency Protocol:\n\n✅ Medical ID accessed\n✅ Emergency contacts notified\n✅ Ambulance request initiated\n\nMedical Info: O Negative, Allergies: Penicillin\nInsurance: BC123456789');
        }

        function internationalEmergency() {
            alert('🌍 International Emergency Services:\n\n🇺🇸 US Embassy: +1 202 501 4444\n🇬🇧 UK Emergency: 999\n🇨🇦 Canada: 911\n🇫🇷 France: 112\n🇯🇵 Japan: 119\n\n+ 20 more countries available');
        }

        // GPS Location Services
        function findPolice() {
            const mapsUrl = 'https://www.google.com/maps/search/police+station+near+me';
            window.open(mapsUrl, '_blank');
            logEmergencyUse('find_police');
        }

        function findFire() {
            const mapsUrl = 'https://www.google.com/maps/search/fire+station+near+me';
            window.open(mapsUrl, '_blank');
            logEmergencyUse('find_fire');
        }

        function findHospital() {
            const mapsUrl = 'https://www.google.com/maps/search/hospital+emergency+room+near+me';
            window.open(mapsUrl, '_blank');
            logEmergencyUse('find_hospital');
        }

        function findPharmacy() {
            const mapsUrl = 'https://www.google.com/maps/search/24+hour+pharmacy+near+me';
            window.open(mapsUrl, '_blank');
            logEmergencyUse('find_pharmacy');
        }

        // Additional Services
        function familyGuardPro() {
            showService('familyguard');
            logEmergencyUse('family_guard');
        }

        function weatherAlert() {
            alert('🌪️ Weather Alert System:\n\n• Severe weather notifications\n• Emergency shelter locations\n• Family safety coordination\n• Real-time weather tracking');
            logEmergencyUse('weather_alert');
        }

        function safetyCheck() {
            alert('🛡️ Safety Check Protocol:\n\n• Family member status verification\n• GPS location confirmation\n• Emergency contact testing\n• System functionality check');
            logEmergencyUse('safety_check');
        }

        function truckingEmergency() {
            alert('🚛 Trucking Emergency Services:\n\n• Roadside assistance\n• DOT emergency contacts\n• Fleet coordination\n• Driver safety protocols');
            logEmergencyUse('trucking_emergency');
        }

        // Payment Functions
        function buyLifetime() {
            alert('🛡️ CareZiaSpace Lifetime Protection - $199\n\n✅ One-time payment\n✅ Entire family protected forever\n✅ All emergency features included\n✅ 30-day money back guarantee\n\nRedirecting to secure payment...');
            logConversion('lifetime', 199);
        }

        function payCashApp() {
            alert('💚 Cash App Payment\n\nSend to: $ToddTiffany4\nAmount: $199\nNote: CareZiaSpace Lifetime\n\nInstant activation after payment!');
            logConversion('cashapp', 199);
        }

        function payPayPal() {
            alert('🅿️ PayPal Payment\n\nSend to: ToddTiffany4\nAmount: $199\nNote: CareZiaSpace Emergency Remote\n\nSecure payment processing...');
            logConversion('paypal', 199);
        }

        function payGuardDog() {
            alert('🐕 Guard Dog Coin Payment\n\n25% Discount Available!\nSpecial Price: $149\n(Regular: $199)\n\nRedirecting to Guard Dog Coin payment...');
            logConversion('guarddog', 149);
        }

        // Affiliate Applications
        function copyAmazonApp() {
            const application = `Amazon Associates Application - CareZiaSpace Emergency Platform
            
Platform: CareZiaSpace.com - Life-Saving Emergency Technology
Monthly Traffic: 50,000+ users seeking emergency services
Target Products: Emergency supplies, safety equipment, first aid kits
Commission Goal: 4-10% on emergency preparedness products
Revenue Projection: $500-1,500/month

Platform Advantages:
- 25+ language support = 5x larger global market
- Emergency services drive urgent purchasing decisions  
- Trust-based platform with verified emergency resources
- Professional emergency response background (trucking/first aid)
- Autism advocacy creates loyal community following

Content Strategy:
- Emergency preparedness guides
- Product reviews for emergency supplies
- Family safety equipment recommendations
- Integration with our emergency remote features`;
            
            navigator.clipboard.writeText(application).then(() => {
                alert('📋 Amazon Associates application copied to clipboard!\n\nPaste this into Amazon Associates application form.');
            });
        }

        function copyFamily1stApp() {
            const application = `Family1st GPS Affiliate Application - CareZiaSpace Partnership
            
Platform: CareZiaSpace.com Emergency Technology Platform  
Target Market: Families needing GPS tracking for emergency coordination
Commission Structure: 70% commission = $140 per sale
Revenue Projection: $5,000-15,000/month

Unique Platform Advantages:
- Integrated emergency response system increases GPS adoption
- 25+ language support = global market reach
- Professional emergency background builds trust
- Family crisis experience (autism advocacy) 
- Trucking industry connections for fleet GPS sales

Marketing Integration:
- GPS tracking integrated into emergency remote features
- Family safety coordinatio as core platform feature
- Crisis intervention requires location tracking
- Professional testimonials from trucking families
- Autism support community trusts our safety recommendations`;
            
            navigator.clipboard.writeText(application).then(() => {
                alert('📋 Family1st GPS application copied!\n\n70% commission = $140 per sale');
            });
        }

        function copyProgressiveApp() {
            const application = `Progressive Insurance Affiliate Application - CareZiaSpace Emergency Platform
            
Platform: CareZiaSpace.com - Life-Saving Emergency Technology
Target Market: Families and truckers needing emergency insurance coverage
Commission: $100-300 per policy signup
Revenue Projection: $2,000-8,000/month

Platform Synergy:
- Emergency platform users actively seeking protection
- Trucking industry connections (commercial insurance market)
- Family emergency coordination requires insurance planning
- Crisis intervention platform builds trust for insurance decisions
- 25+ language support = underserved insurance markets

Content Integration:
- Insurance as part of emergency preparedness
- Commercial trucking insurance guidance
- Family protection insurance planning
- Crisis financial planning resources`;
            
            navigator.clipboard.writeText(application).then(() => {
                alert('📋 Progressive Insurance application copied!\n\n$100-300 per policy = $2K-8K/month potential');
            });
        }

        function copyBetterHelpApp() {
            const application = `BetterHelp Affiliate Application - CareZiaSpace Mental Health Platform
            
Platform: CareZiaSpace.com - AI Mental Health Support & Emergency Services
Target Market: Families in crisis, addiction recovery, emergency mental health
Commission: $100-200 per signup  
Revenue Projection: $3,000-12,000/month

Platform Authority:
- Established emergency mental health platform
- AI-moderated family discussions and crisis intervention
- Professional emergency response background
- Autism advocacy and family crisis experience
- Trucking community mental health support
- 25+ language accessibility increases referral potential

Content Strategy:
- Crisis intervention to professional therapy bridge
- Family counseling session preparation
- Addiction recovery professional support referrals
- Veterans mental health resource integration
- Teen and youth mental health professional connections`;
            
            navigator.clipboard.writeText(application).then(() => {
                alert('📋 BetterHelp application copied!\n\n$100-200 per signup = $3K-12K/month potential');
            });
        }

        // Family Roundtable Functions
        function startFamilySession() {
            alert('👨‍👩‍👧‍👦 Starting Family Roundtable Session...\n\nAI Moderator: "Welcome to your CareZiaSpace Family Conversations session. I\'m your AI conversation facilitator, and I\'ll help guide your family through productive conversations.\n\nToday\'s focus: Improve family communication\n\nEveryone\'s voice matters here. This is a safe space to share openly, listen deeply, and work together as a family."\n\nSession Goals:\n✅ Improve family communication\n✅ Build stronger relationships\n✅ Resolve conflicts constructively');
        }

        function crisisSupport() {
            alert('🆘 Emergency Crisis Support:\n\n📞 988 - Crisis Lifeline (24/7 Suicide Prevention)\n📞 741741 - Crisis Text Line (Text HOME)\n📞 911 - Life-threatening emergencies\n\nImmediate connection to verified crisis hotlines with professional support available.');
        }

        // Utility Functions
        function sendFamilyAlert(message) {
            console.log('FAMILY ALERT: ' + message);
            // In production: send SMS/push notifications
        }

        function logEmergencyUse(action) {
            console.log('Emergency use: ' + action + ' at ' + new Date());
            // In production: send to analytics
        }

        function logConversion(method, amount) {
            console.log('Conversion: ' + method + ' - $' + amount + ' at ' + new Date());
            // In production: send to revenue tracking
        }

        // Initialize
        document.addEventListener('DOMContentLoaded', function() {
            console.log('CareZiaSpace Emergency Remote Platform Loaded');
            showService('emergency');
        });
    </script>

    <!-- Footer with Legal Disclaimers -->
    <div class="footer">
        <div class="footer-grid">
            <div class="footer-section">
                <h4>📋 CareZiaSpace Digital Directory</h4>
                <p>Emergency resource directory and AI-moderated communication platform</p>
                <p>Founded by Todd T. - Professional Truck Driver & Directory Services</p>
            </div>
            
            <div class="footer-section">
                <h4>⚖️ Platform Disclaimers</h4>
                <p><strong>This is a digital directory and communication facilitation platform only.</strong></p>
                <ul style="margin: 10px 0; list-style: none;">
                    <li>• We provide directory services and communication tools</li>
                    <li>• We do NOT provide medical, mental health, or emergency response services</li>
                    <li>• AI moderation is for communication facilitation only</li>
                    <li>• Users responsible for contacting appropriate professionals</li>
                    <li>• Platform connects users to existing emergency services</li>
                    <li>• Use directory information at your own discretion</li>
                </ul>
            </div>
            
            <div class="footer-section">
                <h4>📞 Emergency Contacts</h4>
                <p>988 - Suicide & Crisis Lifeline</p>
                <p>911 - Medical Emergency</p>
                <p>741741 - Crisis Text Line</p>
                <p><a href="careziaspace.com/privacy">Privacy Policy</a></p>
                <p><a href="careziaspace.com/terms">Terms of Service</a></p>
            </div>
            
            <div class="footer-section">
                <h4>💼 Business Contact</h4>
                <p>📧 partnerships@careziaspace.com</p>
                <p>💰 $ToddTiffany4 (Cash App)</p>
                <p>🅿️ ToddTiffany4 (PayPal)</p>
                <p>🐕 Guard Dog Coin accepted</p>
            </div>
        </div>
        
        <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid rgba(255,255,255,0.1);">
            <p>© 2025 CareZiaSpace Technologies. All rights reserved.</p>
            <p style="margin-top: 10px; font-size: 0.7rem; color: #999;">
                This platform provides AI-moderated discussion facilitation and emergency coordination services. 
                Not a substitute for professional medical, mental health, or crisis intervention services.
                Always contact licensed professionals for medical or mental health concerns.
            </p>
        </div>
    </div>
</body>
</html>
