import React from "react"; // Changed from type-only import
import Navbar from "@/components/navbar";

interface FooterLink {
  href: string;
  text: string;
}

interface ContactInfo {
  addressLines: string[];
  email: string;
}

const quickLinksData: FooterLink[] = [
  { href: "/", text: "Home" },
  { href: "/search", text: "Search Donor" },
  { href: "/health-tips", text: "Health Tips" },
  { href: "/emergency", text: "Emergency Services" },
];

const legalLinksData: FooterLink[] = [
  { href: "/privacy", text: "Privacy Policy" },
  { href: "/terms", text: "Terms of Service" },
  { href: "/cookies", text: "Cookie Policy" },
];

const contactInfoData: ContactInfo = {
  addressLines: [
    "Khilkhet, Dhaka-1229",
    "Bangladesh",
  ],
  email: "boloddonorbd.island@gmail.com",
};

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Rokther Sondhane</h3>
              <p className="text-gray-400">Connecting blood donors with those in need since 2023.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinksData.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="text-gray-400 hover:text-white">
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                {legalLinksData.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="text-gray-400 hover:text-white">
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <address className="not-italic text-gray-400">
                {contactInfoData.addressLines.map((line, index) => (
                  <React.Fragment key={index}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
                <a href={`mailto:${contactInfoData.email}`} className="hover:text-white">
                  {contactInfoData.email}
                </a>
              </address>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Rokther Sondhane. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
