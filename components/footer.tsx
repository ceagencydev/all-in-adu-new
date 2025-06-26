import { Phone, Mail, MapPin } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <Image src="/images/logo.svg" alt="All-In ADU Logo" width={40} height={40} className="w-10 h-10" />
              <span className="text-xl font-semibold">All-In ADU</span>
            </div>
            <p className="text-gray-400 text-sm">
              Southern California's trusted ADU construction partner. Licensed, bonded, and insured.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-blue-400" />
                <a href="tel:9496494751" className="hover:text-blue-300 transition-colors">
                  (949) 649-4751
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-blue-400" />
                <span>info@allinclusiveadu.com</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <div>4041 MacArthur Blvd. #290</div>
                  <div>Newport Beach, California 92660</div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">License Information</h3>
            <div className="space-y-2 text-sm text-gray-400">
              <div>Contractor License #1129298</div>
              <div>Fully Bonded and Insured</div>
              <div className="mt-4 text-xs">Serving Orange, Riverside, Los Angeles & San Diego Counties</div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2024 All-In ADU. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
