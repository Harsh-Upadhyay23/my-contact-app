import React from "react";

export default function App() {
  const phone = "+919284534975"; // include country code
  const whatsappText = encodeURIComponent(
    "Hello, I saw your message. I can help with AB (-ve) blood."
  );
  const whatsappLink = `https://wa.me/${phone.replace(/[^0-9]/g, "")}?text=${whatsappText}`;
  const telLink = `tel:${phone}`;

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl p-8 sm:p-10">
        
        {/* Urgent Banner */}
        <div className="bg-red-600 text-white text-center py-2 px-4 rounded-lg mb-6 animate-pulse">
          <h1 className="text-xl font-bold">🚨 Urgent Request: AB (-ve) Blood Needed</h1>
        </div>

        {/* Person Info */}
        <div className="flex items-center gap-4 mb-6">
          <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-tr from-red-500 to-pink-500 flex items-center justify-center text-white font-bold text-xl shadow-md">
            HU
          </div>
          <div>
            <h2 className="text-lg font-semibold">Harsh Upadhyay</h2>
            <p className="text-sm text-gray-600">
              Kindly requesting your help 🙏 — a patient is in urgent need of AB (-ve) blood.
            </p>
          </div>
        </div>

        {/* Contact Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          <a
            href={telLink}
            className="block text-center py-3 rounded-xl border border-gray-200 hover:shadow-md transition bg-white"
          >
            <div className="text-sm font-medium">📞 Call</div>
            <div className="mt-1 text-sm text-gray-600">{phone}</div>
          </a>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="block text-center py-3 rounded-xl bg-green-600 text-white hover:opacity-90 transition"
          >
            <div className="text-sm font-medium">💬 WhatsApp</div>
            <div className="mt-1 text-sm">Message</div>
          </a>

          <button
            onClick={() =>
              window.navigator.share &&
              window.navigator.share({
                title: "Urgent: AB (-ve) blood required",
                text: `Urgent AB (-ve) blood required. Please contact: ${phone}`,
              })
            }
            className="block text-center py-3 rounded-xl border border-gray-200 hover:shadow-md transition bg-white"
          >
            <div className="text-sm font-medium">🔗 Share</div>
            <div className="mt-1 text-sm text-gray-600">Forward</div>
          </button>
        </div>

        {/* Genuine Note */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-sm text-gray-700 leading-relaxed">
          <p>
            This is a genuine request for <span className="font-semibold">AB (-ve)</span> blood. 
            If you or anyone you know can help, it would mean the world and could save a life. 
            Please consider reaching out through call or WhatsApp.
          </p>
        </div>

        {/* Footer */}
        <footer className="mt-6 text-center text-xs text-gray-400">
          Thank you for your kindness and support. ❤️
        </footer>
      </div>
    </div>
  );
}
