export default function Footer() {
  return (
    <footer className="bg-white mt-auto">
      <div className="max-w-7xl mx-auto py-6 px-4 overflow-hidden sm:px-6 lg:px-8">
        <p className="mt-4 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} HealthAI. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
