export default function About() {
    return (
      <main className="min-h-screen bg-gradient-to-r from-green-400 to-blue-500 flex items-center justify-center">
        <div className="text-center bg-white p-8 rounded-lg shadow-2xl transform hover:scale-105 transition-transform">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">
            About Us
          </h1>
          <p className="text-gray-600 mb-8">
            We are a team of developers passionate about building amazing web applications with Next.js and Tailwind CSS.
          </p>
          <a
            href="/"
            className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-full font-semibold hover:from-purple-600 hover:to-pink-700 transition-all"
          >
            Go Back Home
          </a>
        </div>
      </main>
    );
  }