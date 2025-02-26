

// footer


function Footer() {
    return (
      <footer className="bg-gray-900 text-white py-8 fixed bottom-0 left-0 right-0">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center space-y-4 md:space-y-0 md:flex-row md:justify-between">
            {/* Left Section */}
            <div className="text-center md:text-left">
              <p className="text-sm font-medium text-gray-400">
                &copy; 2023 My Website. All rights reserved.
              </p>
            </div>
  
            {/* Right Section */}
            <div className="flex flex-col items-center space-y-2 md:flex-row md:space-y-0 md:space-x-4">
              <p className="text-sm text-gray-400">Created by</p>
              <a
                href="https://example.com/about/"
                className="text-sm font-semibold text-blue-400 hover:text-blue-300 transition duration-300 ease-in-out"
              >
                John Doe
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
  }

export default Footer