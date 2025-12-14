"use client";

import Link from "next/link";
import { useEffect } from "react";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

const Error = ({ error, reset }: ErrorProps) => {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Application Error:", error);
  }, [error]);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        {/* Error Number */}
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-red-500 opacity-20 leading-none">
            500
          </h1>
        </div>

        {/* Main Content */}
        <div className="mb-8">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Something went wrong!
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            We encountered an unexpected error. Please try again or contact
            support if the problem persists.
          </p>
          {process.env.NODE_ENV === "development" && (
            <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg text-left">
              <p className="text-sm font-semibold text-red-800 mb-2">
                Error Details (Development Only):
              </p>
              <p className="text-xs text-red-700 font-mono break-all">
                {error.message}
              </p>
              {error.digest && (
                <p className="text-xs text-red-600 mt-2">
                  Error ID: {error.digest}
                </p>
              )}
            </div>
          )}
        </div>

        {/* Illustration or Icon */}
        <div className="mb-8 flex justify-center">
          <div className="w-64 h-64 relative">
            <svg
              className="w-full h-full text-red-500 opacity-30"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={reset}
            className="bg-[#59344F] text-white px-8 py-3 rounded-lg hover:bg-[#4a2a3f] transition-colors font-medium text-lg shadow-md hover:shadow-lg"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="border-2 border-[#59344F] text-[#59344F] px-8 py-3 rounded-lg hover:bg-[#59344F] hover:text-white transition-colors font-medium text-lg"
          >
            Go Back Home
          </Link>
        </div>

        {/* Helpful Links */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500 mb-4">
            Need help? Contact our support team:
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link
              href="/contact"
              className="text-[#59344F] hover:text-[#4a2a3f] hover:underline transition-colors"
            >
              Contact Us
            </Link>
            <Link
              href="/"
              className="text-[#59344F] hover:text-[#4a2a3f] hover:underline transition-colors"
            >
              Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error;
