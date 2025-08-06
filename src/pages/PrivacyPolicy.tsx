import React from 'react';
import Layout from '@/components/layout/Layout';
import PageBanner from '@/components/layout/PageBanner';
import Breadcrumb from '@/components/layout/Breadcrumb';
import { Shield, Lock, Eye, Mail, Phone } from 'lucide-react';

const PrivacyPolicy = () => {
  const breadcrumbItems = [
    { label: 'Privacy Policy' }
  ];

  return (
    <Layout>
      <PageBanner
        title="Privacy Policy"
        subtitle="Your privacy and data protection are our top priorities"
        backgroundImage="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1920&h=400&fit=crop"
      />

      <div className="bg-gradient-earth py-8">
        <div className="container mx-auto px-4">
          <Breadcrumb items={breadcrumbItems} />
        </div>
      </div>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            
            {/* Key Points */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-card rounded-xl p-6 text-center shadow-card">
                <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">Data Protection</h3>
                <p className="text-sm text-muted-foreground">Your information is encrypted and stored securely</p>
              </div>
              <div className="bg-card rounded-xl p-6 text-center shadow-card">
                <Lock className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">No Sharing</h3>
                <p className="text-sm text-muted-foreground">We never sell or share your data with third parties</p>
              </div>
              <div className="bg-card rounded-xl p-6 text-center shadow-card">
                <Eye className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">Transparency</h3>
                <p className="text-sm text-muted-foreground">Clear policies on how we use your information</p>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <div className="bg-primary/5 border border-primary/10 rounded-xl p-6 mb-8">
                <p className="text-sm text-muted-foreground mb-0">
                  <strong>Last Updated:</strong> January 15, 2024<br />
                  <strong>Effective Date:</strong> January 15, 2024
                </p>
              </div>

              <h2>1. Information We Collect</h2>
              <p>We collect information you provide directly to us, such as when you:</p>
              <ul>
                <li>Make a donation through our website</li>
                <li>Create an account or register for our newsletter</li>
                <li>Contact us with questions or feedback</li>
                <li>Participate in surveys or events</li>
                <li>Apply to volunteer with us</li>
              </ul>

              <h3>Personal Information</h3>
              <p>This may include:</p>
              <ul>
                <li>Name and contact information (email, phone, address)</li>
                <li>Payment information (processed securely through our payment partners)</li>
                <li>Donation history and preferences</li>
                <li>Communication preferences</li>
              </ul>

              <h2>2. How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul>
                <li><strong>Process donations:</strong> To complete transactions and provide receipts</li>
                <li><strong>Communication:</strong> To send updates about our work and impact</li>
                <li><strong>Improve services:</strong> To enhance our website and programs</li>
                <li><strong>Legal compliance:</strong> To meet regulatory requirements</li>
                <li><strong>Fraud prevention:</strong> To protect against fraudulent activities</li>
              </ul>

              <h2>3. Information Sharing</h2>
              <p>We do not sell, trade, or rent your personal information to third parties. We may share information only in these limited circumstances:</p>
              <ul>
                <li><strong>Service providers:</strong> With trusted partners who help us operate our website and services</li>
                <li><strong>Legal requirements:</strong> When required by law or to protect our rights</li>
                <li><strong>With your consent:</strong> When you explicitly agree to sharing</li>
              </ul>

              <h2>4. Data Security</h2>
              <p>We implement appropriate security measures to protect your personal information:</p>
              <ul>
                <li>SSL encryption for all data transmissions</li>
                <li>Secure servers with regular security updates</li>
                <li>Limited access to personal information</li>
                <li>Regular security audits and assessments</li>
              </ul>

              <h2>5. Your Rights</h2>
              <p>You have the right to:</p>
              <ul>
                <li><strong>Access:</strong> Request a copy of your personal information</li>
                <li><strong>Correction:</strong> Update or correct your information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                <li><strong>Opt-out:</strong> Unsubscribe from communications at any time</li>
                <li><strong>Portability:</strong> Request your data in a portable format</li>
              </ul>

              <h2>6. Cookies and Tracking</h2>
              <p>We use cookies and similar technologies to:</p>
              <ul>
                <li>Remember your preferences and settings</li>
                <li>Analyze website traffic and usage patterns</li>
                <li>Improve our website performance</li>
                <li>Provide personalized content</li>
              </ul>
              <p>You can control cookies through your browser settings.</p>

              <h2>7. Third-Party Services</h2>
              <p>Our website may contain links to third-party websites or services. This privacy policy does not apply to those external sites. We encourage you to review their privacy policies.</p>

              <h2>8. Children's Privacy</h2>
              <p>Our services are not directed to children under 13. We do not knowingly collect personal information from children under 13. If we learn we have collected such information, we will delete it promptly.</p>

              <h2>9. International Data Transfers</h2>
              <p>Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your information.</p>

              <h2>10. Changes to This Policy</h2>
              <p>We may update this privacy policy from time to time. We will notify you of any material changes by posting the new policy on our website and updating the "Last Updated" date.</p>

              <h2>11. Contact Us</h2>
              <p>If you have questions about this privacy policy or our data practices, please contact us:</p>
              
              <div className="bg-card rounded-xl p-6 mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <div>
                      <div className="font-medium text-foreground">Email</div>
                      <div className="text-sm text-muted-foreground">privacy@gauseva.org</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <div>
                      <div className="font-medium text-foreground">Phone</div>
                      <div className="text-sm text-muted-foreground">+91 98765 43210</div>
                    </div>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-border">
                  <div className="text-sm text-muted-foreground">
                    <strong>Postal Address:</strong><br />
                    Gau Seva Trust<br />
                    123 Service Road, Sector 15<br />
                    Delhi NCR, India - 110001
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PrivacyPolicy;