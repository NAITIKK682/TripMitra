export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 md:gap-0">
          
          {/* Brand Section */}
          <div className="flex flex-col">
            <h3 className="text-3xl font-bold text-blue-400">TripMitra</h3>
            <p className="mt-2 text-gray-400 max-w-xs">
              Your trusted travel companion in India. Explore, discover, and enjoy amazing journeys.
            </p>
          </div>
          
          

          {/* Newsletter Subscription */}
          <div className="flex flex-col items-start md:items-end">
            <p className="mb-2 text-gray-400">Subscribe to our newsletter</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 rounded-l-md border border-gray-700 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400"
              />
              <button className="px-4 py-2 bg-blue-400 text-white font-semibold rounded-r-md hover:bg-blue-500 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 mt-8 pt-6 text-center md:text-right">
          <p>Designed & Developed by Naitik Kushwaha</p>
          <p className="text-gray-500 text-sm mt-1">© {new Date().getFullYear()} TripMitra. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
