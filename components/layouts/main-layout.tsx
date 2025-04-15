import type React from "react"
import Navbar from "@/components/navbar"

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
                <li>
                  <a href="/" className="text-gray-400 hover:text-white">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/search" className="text-gray-400 hover:text-white">
                    Search Donor
                  </a>
                </li>
                <li>
                  <a href="/health-tips" className="text-gray-400 hover:text-white">
                    Health Tips
                  </a>
                </li>
                <li>
                  <a href="/emergency" className="text-gray-400 hover:text-white">
                    Emergency Services
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <a href="/privacy" className="text-gray-400 hover:text-white">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="/terms" className="text-gray-400 hover:text-white">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="/cookies" className="text-gray-400 hover:text-white">
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <address className="not-italic text-gray-400">
                123 Blood Donor Street
                <br />
                Mirpur-10, Dhaka-1216
                <br />
                Bangladesh
                <br />
                <a href="mailto:info@rokthersondhane.org" className="hover:text-white">
                  info@rokthersondhane.org
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
