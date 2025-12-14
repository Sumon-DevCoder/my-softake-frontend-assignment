import Link from "next/link";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 flex items-center justify-center px-4 py-12">
      <div className="max-w-3xl w-full text-center">
        {/* 404 Number with Animation */}
        <div className="mb-8 animate-pulse">
          <h1 className="text-9xl md:text-[12rem] font-bold text-[#59344F] opacity-10 leading-none select-none">
            404
          </h1>
        </div>

        {/* Main Content */}
        <div className="mb-10">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Page Not Found
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-2 max-w-2xl mx-auto">
            Oops! The page you&apos;re looking for doesn&apos;t exist or has
            been moved.
          </p>
          <p className="text-base text-gray-500 mt-2">
            Don&apos;t worry, we&apos;re here to help you find what you need.
          </p>
        </div>

        {/* Illustration or Icon */}
        <div className="mb-10 flex justify-center">
          <div className="w-72 h-72 md:w-80 md:h-80 relative">
            <svg
              className="w-full h-full text-[#59344F] opacity-20 animate-bounce"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Link
            href="/"
            className="bg-[#59344F] text-white px-10 py-4 rounded-lg hover:bg-[#4a2a3f] transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 w-full sm:w-auto"
          >
            Go Back Home
          </Link>
          <Link
            href="/contact"
            className="border-2 border-[#59344F] text-[#59344F] px-10 py-4 rounded-lg hover:bg-[#59344F] hover:text-white transition-all duration-300 font-semibold text-lg w-full sm:w-auto"
          >
            Contact Us
          </Link>
        </div>

        {/* Helpful Links */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm font-semibold text-gray-700 mb-6 uppercase tracking-wide">
            Quick Links
          </p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm">
            <Link
              href="/"
              className="text-[#59344F] hover:text-[#4a2a3f] hover:underline transition-colors font-medium px-3 py-1 rounded hover:bg-[#59344F]/5"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-[#59344F] hover:text-[#4a2a3f] hover:underline transition-colors font-medium px-3 py-1 rounded hover:bg-[#59344F]/5"
            >
              About Us
            </Link>
            <Link
              href="/services"
              className="text-[#59344F] hover:text-[#4a2a3f] hover:underline transition-colors font-medium px-3 py-1 rounded hover:bg-[#59344F]/5"
            >
              Services
            </Link>
            <Link
              href="/contact"
              className="text-[#59344F] hover:text-[#4a2a3f] hover:underline transition-colors font-medium px-3 py-1 rounded hover:bg-[#59344F]/5"
            >
              Contact
            </Link>
            <Link
              href="/blog"
              className="text-[#59344F] hover:text-[#4a2a3f] hover:underline transition-colors font-medium px-3 py-1 rounded hover:bg-[#59344F]/5"
            >
              Blog
            </Link>
            <Link
              href="/portfolio"
              className="text-[#59344F] hover:text-[#4a2a3f] hover:underline transition-colors font-medium px-3 py-1 rounded hover:bg-[#59344F]/5"
            >
              Portfolio
            </Link>
          </div>
        </div>

        {/* Additional Help Text */}
        <div className="mt-8 pt-6 border-t border-gray-100">
          <p className="text-xs text-gray-400">
            If you believe this is an error, please{" "}
            <Link
              href="/contact"
              className="text-[#59344F] hover:underline font-medium"
            >
              contact our support team
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
