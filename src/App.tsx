import React, { useState } from 'react';
import { Play, BookOpen, TrendingUp, Cpu, Star, Youtube, Instagram, Mail, Phone, Facebook, Twitter, Linkedin, Music } from 'lucide-react';

function App() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-amber-50 to-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          {/* Logo */}
          <div className="mb-12">
            <img 
              src="/public/MasterLogo.png" 
              alt="Prosperity Path AI" 
              className="h-24 mx-auto mb-4"
              onError={(e) => {
                const img = e.currentTarget as HTMLImageElement;
                img.style.display = 'none';
                const next = img.nextElementSibling as HTMLDivElement | null;
                if (next) next.style.display = 'flex';
              }}
            />
            <div className="hidden items-center justify-center w-24 h-24 mx-auto bg-gradient-to-br from-amber-400 to-amber-600 rounded-full">
              <Star className="w-12 h-12 text-white" />
            </div>
          </div>

          {/* Headlines */}
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Unlock Kingdom Wealth & 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-700"> Wisdom</span>
            <br />with AI + Scripture
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-700 mb-12 max-w-4xl mx-auto leading-relaxed">
            Learn to repair your credit, access funding, and walk in your divine inheritance—through faith and the Word.
          </p>

          {/* Primary CTA */}
          <button 
            onClick={() => setShowForm(true)}
            className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white text-xl font-bold py-6 px-12 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 hover:shadow-amber-500/25"
          >
            Download the Free Guide
          </button>
        </div>
      </section>

      {/* Video/Intro Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-black rounded-2xl shadow-2xl overflow-hidden mb-8">
            <div className="aspect-video">
              <iframe
                src="https://www.youtube.com/embed/-grZ-uQ2U7w?autoplay=1&mute=1&loop=1&playlist=-grZ-uQ2U7w"
                title="AI Bible Gospel Channel Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full rounded-2xl"
              />
            </div>
          </div>
          <p className="text-2xl text-gray-800 font-serif italic">
            "This is about restoration—of minds, wallets, and the covenant."
          </p>
        </div>
      </section>

      {/* Three Pillars Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
            Three Pillars of Kingdom Prosperity
          </h2>
          
          <div className="grid md:grid-cols-3 gap-12">
            {/* Pillar 1 */}
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <BookOpen className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Wisdom from the Word</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                Teachings rooted in the KJV 1611 Bible, revealing God's financial principles for His people.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <TrendingUp className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Credit & Capital Access</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                Tools to help fix credit and fund righteous business ventures according to divine purpose.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-gray-700 to-black rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Cpu className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">AI Tools for the Body</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                Spiritual & financial technology designed for awakened communities walking in truth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Scripture Encouragement Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-amber-50 to-red-50">
        <div className="max-w-4xl mx-auto text-center">
          <blockquote className="text-3xl md:text-4xl font-serif text-gray-900 mb-8 leading-relaxed">
            "The Lord shall open unto thee His good treasure, the heaven to give the rain unto thy land in his season, and to bless all the work of thine hand..."
          </blockquote>
          <cite className="text-xl text-gray-700 font-semibold">— Deuteronomy 28:12 (KJV 1611)</cite>
          
          <div className="mt-12 p-8 bg-white rounded-2xl shadow-lg">
            <p className="text-2xl text-gray-800 font-medium">
              You weren't made to borrow forever. It's time to position for abundance.
            </p>
          </div>
        </div>
      </section>

      {/* Lead Magnet & Form Section */}
      <section className="py-20 px-4 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Get Your <span className="text-amber-400">FREE Guide</span>: Unlocking Kingdom Credit
          </h2>
          
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Download this free PDF to learn how to fix your credit, build funding, and prepare for generational wealth through biblical principles.
          </p>

          {/* Form Container */}
          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            <iframe
              src="https://api.leadconnectorhq.com/widget/form/YZlRA92zvyZuAKBLCaX3"
              style={{width:'100%', height:'600px', border:'none', borderRadius:'12px'}}
              id="inline-YZlRA92zvyZuAKBLCaX3" 
              data-layout="{'id':'INLINE'}"
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name="PPLLC"
              data-height="1074"
              data-layout-iframe-id="inline-YZlRA92zvyZuAKBLCaX3"
              data-form-id="YZlRA92zvyZuAKBLCaX3"
              title="PPLLC"
            />
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 px-4 bg-amber-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white p-12 rounded-2xl shadow-lg">
            <blockquote className="text-2xl md:text-3xl text-gray-800 font-serif italic mb-6">
              "I never saw credit as spiritual until I understood stewardship through the Word."
            </blockquote>
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-amber-400 fill-current" />
              ))}
            </div>
            <p className="text-gray-600 font-medium">— Kingdom Testimony</p>
          </div>
          
          <div className="mt-12 p-8 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-2xl">
            <p className="text-2xl font-bold">
              "Anything broken can be restored. That includes your credit."
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* Contact Info */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-amber-400">Contact Us</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="w-5 h-5 mr-3 text-amber-400" />
                  <span>info@theprosperitypathai.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 mr-3 text-amber-400" />
                  <span>3023995038</span>
                </div>
              </div>
            </div>

            {/* YouTube Channel */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-amber-400">Follow Our Journey</h3>
              <a 
                href="https://www.youtube.com/@AIBIBLEGOSPELS"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-red-600 hover:bg-red-700 px-6 py-3 rounded-full transition-colors duration-300"
              >
                <Youtube className="w-5 h-5 mr-2" />
                AI Bible Gospel Channel
              </a>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-amber-400">Connect With Us</h3>
              <div className="flex space-x-4">
                <a href="https://www.youtube.com/@AIBIBLEGOSPELS" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center transition-colors duration-300">
                  <Youtube className="w-6 h-6" />
                </a>
                <a href="https://www.facebook.com/aibiblegospels" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors duration-300">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="https://www.instagram.com/aibiblegospels/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 rounded-full flex items-center justify-center transition-colors duration-300">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="https://x.com/aibiblegospels" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-black hover:bg-gray-800 rounded-full flex items-center justify-center transition-colors duration-300">
                  <Twitter className="w-6 h-6" />
                </a>
                <a href="https://www.linkedin.com/in/ai-bible-gospels-049005353/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-blue-800 hover:bg-blue-900 rounded-full flex items-center justify-center transition-colors duration-300">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="https://www.tiktok.com/@aibiblegospels" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-black hover:bg-gray-800 rounded-full flex items-center justify-center transition-colors duration-300">
                  <Music className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400 text-sm max-w-4xl mx-auto">
              <strong>Disclaimer:</strong> This is not financial advice. This is spirit-led guidance rooted in scripture. 
              All financial decisions should be made with prayer, wisdom, and proper counsel. 
              Results may vary based on individual circumstances and faithfulness to biblical principles.
            </p>
          </div>
        </div>
      </footer>

      {/* Form Modal Overlay */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900">Get Your Free Guide</h3>
              <button 
                onClick={() => setShowForm(false)}
                className="text-gray-500 hover:text-gray-700 text-2xl"
              >
                ×
              </button>
            </div>
            <iframe
              src="https://api.leadconnectorhq.com/widget/form/YZlRA92zvyZuAKBLCaX3"
              style={{width:'100%', height:'500px', border:'none', borderRadius:'8px'}}
              id="modal-form"
              title="Lead Capture Form"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;