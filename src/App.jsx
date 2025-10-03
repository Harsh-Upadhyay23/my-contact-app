import React, { useState } from "react";

export default function App() {
  const [copied, setCopied] = useState(false);
  
  const phone = "+919284534975";
  const whatsappText = encodeURIComponent(
    "Hello, I saw your message. I can help with AB (-ve) blood."
  );
  const whatsappLink = `https://wa.me/${phone.replace(/[^0-9]/g, "")}?text=${whatsappText}`;
  const telLink = `tel:${phone}`;

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(phone);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "🚨 Urgent: AB (-ve) Blood Required",
          text: `URGENT REQUEST\n\nAB (-ve) blood needed immediately!\n\nIf you or anyone you know can help, please contact:\n${phone}\n\nEvery second counts. Your help can save a life! 🙏`,
        });
      } catch (err) {
        console.log("Share cancelled");
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-pink-50 flex items-center justify-center p-4 sm:p-6">
      <div className="w-full max-w-2xl">
        {/* Urgent Pulse Banner */}
        <div className="relative overflow-hidden bg-gradient-to-r from-red-600 via-red-500 to-pink-600 text-white rounded-2xl mb-6 shadow-2xl">
          <div className="absolute inset-0 bg-black opacity-10"></div>
          <div className="relative px-6 py-5 text-center">
            <div className="flex items-center justify-center gap-3 mb-2">
              <span className="text-3xl animate-pulse">🚨</span>
              <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">
                URGENT BLOOD NEEDED
              </h1>
              <span className="text-3xl animate-pulse">🚨</span>
            </div>
            <div className="inline-block bg-white bg-opacity-20 backdrop-blur-sm px-4 py-2 rounded-full">
              <p className="text-lg sm:text-xl font-semibold">
                Blood Group: <span className="font-bold text-yellow-300">AB (-ve)</span>
              </p>
            </div>
          </div>
          {/* Animated border effect */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 via-red-400 to-yellow-400 animate-pulse"></div>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          {/* Requester Info Section */}
          <div className="bg-gradient-to-br from-gray-50 to-white p-6 sm:p-8 border-b border-gray-100">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-red-500 via-red-600 to-pink-600 flex items-center justify-center text-white font-bold text-2xl shadow-lg ring-4 ring-red-100">
                  HU
                </div>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Harsh Upadhyay</h2>
                <p className="text-gray-700 leading-relaxed">
                  A patient is in critical need of AB (-ve) blood. Your immediate response could save a life. Please help if you can. 🙏
                </p>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="p-6 sm:p-8">
            {/* Phone Number Display */}
            <div className="bg-gray-50 rounded-xl p-4 mb-6 border-2 border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1 font-medium">Contact Number</p>
                  <p className="text-xl sm:text-2xl font-bold text-gray-900">{phone}</p>
                </div>
                <button
                  onClick={handleCopyPhone}
                  className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg transition text-sm font-medium"
                >
                  {copied ? "✓ Copied" : "📋 Copy"}
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              <a
                href={telLink}
                className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 p-4 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="relative z-10 text-center">
                  <div className="text-3xl mb-2">📞</div>
                  <div className="font-bold text-lg">Call Now</div>
                  <div className="text-sm opacity-90">Tap to dial</div>
                </div>
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity"></div>
              </a>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-green-500 to-green-600 p-4 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="relative z-10 text-center">
                  <div className="text-3xl mb-2">💬</div>
                  <div className="font-bold text-lg">WhatsApp</div>
                  <div className="text-sm opacity-90">Send message</div>
                </div>
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity"></div>
              </a>

              <button
                onClick={handleShare}
                className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 p-4 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="relative z-10 text-center">
                  <div className="text-3xl mb-2">📤</div>
                  <div className="font-bold text-lg">Share</div>
                  <div className="text-sm opacity-90">Spread the word</div>
                </div>
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity"></div>
              </button>
            </div>

            {/* Information Box */}
            <div className="bg-gradient-to-br from-red-50 to-pink-50 border-2 border-red-200 rounded-xl p-5 mb-6">
              <h3 className="font-bold text-lg text-red-900 mb-3 flex items-center gap-2">
                <span className="text-xl">ℹ️</span>
                Why This Matters
              </h3>
              <p className="text-gray-800 leading-relaxed mb-3">
                <span className="font-bold text-red-700">AB (-ve)</span> is one of the rarest blood types, found in less than 1% of the population. Your donation could be the difference between life and death.
              </p>
              <p className="text-gray-700 text-sm">
                This is a <span className="font-semibold">genuine, time-sensitive request</span>. Every minute counts. If you can help, please reach out immediately.
              </p>
            </div>

            {/* Quick Facts */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="bg-white border-2 border-gray-200 rounded-lg p-4 hover:border-red-300 transition">
                <div className="text-2xl mb-2">⏱️</div>
                <h4 className="font-bold text-gray-900 mb-1">Time Critical</h4>
                <p className="text-sm text-gray-600">Immediate response needed</p>
              </div>
              <div className="bg-white border-2 border-gray-200 rounded-lg p-4 hover:border-red-300 transition">
                <div className="text-2xl mb-2">🩸</div>
                <h4 className="font-bold text-gray-900 mb-1">Rare Blood Type</h4>
                <p className="text-sm text-gray-600">AB (-ve) — less than 1%</p>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-red-600 to-pink-600 text-white rounded-xl p-5 text-center">
              <p className="text-lg font-semibold mb-2">
                Can you help or know someone who can?
              </p>
              <p className="text-sm opacity-90">
                Please share this message widely. Your network might include a life-saving match.
              </p>
            </div>
          </div>

          {/* Footer */}
          <div className="bg-gray-50 px-6 py-4 text-center border-t border-gray-100">
            <p className="text-sm text-gray-600">
              Thank you for your compassion and willingness to help. ❤️
            </p>
            <p className="text-xs text-gray-500 mt-2">
              Together, we can make a difference and save lives.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}