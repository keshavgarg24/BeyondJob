import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-light-gray bg-dark-gray text-light-gray">
      <div className="mx-auto max-w-6xl px-6 py-8 space-y-6">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div className="space-y-2">
            <h3 className="text-3xl font-bold text-electric-cyan">
              BeyondJob
            </h3>
            <p className="text-sm text-electric-blue">
              Connecting talents with opportunities
            </p>
          </div>
          <div className="flex flex-wrap gap-6 text-sm">
            <Link href="/about" className="text-electric-green hover:text-electric-green-light transition-colors duration-300">
              About Us
            </Link>
            <Link href="/contact" className="text-electric-green hover:text-electric-green-light transition-colors duration-300">
              Contact
            </Link>
            <Link href="/terms" className="text-electric-green hover:text-electric-green-light transition-colors duration-300">
              Terms of Service
            </Link>
            <Link href="/privacy" className="text-electric-green hover:text-electric-green-light transition-colors duration-300">
              Privacy Policy
            </Link>
          </div>
        </div>
        <div className="text-center text-sm text-light-gray">
          © {new Date().getFullYear()} BeyondJob, Inc. All rights reserved.
        </div>
        <div className="text-center text-sm text-light-gray">
          Designed by <Link href="https://www.linkedin.com/in/keshavgarg24" className="text-electric-cyan hover:underline" target="_blank" rel="noopener noreferrer">Keshav</Link>
        </div>
      </div>
    </footer>
  );
}
