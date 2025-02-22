import Image from "next/image";
const Footer = () => {
  return (
    <footer className=" text-gray-800 dark:text-gray-100 border-t border-gray-200 dark:border-gray-800 py-4">
      <div className="container mx-auto flex flex-col items-center justify-between px-4 md:flex-row">
        <div className="text-center md:text-left">
          <Image src="/logo.png" alt="Logo" className="w-10 h-10" width={10} height={10} />
          <h2 className="text-lg font-bold">Vras AI</h2>
          <p className="text-sm">Your go-to solution for AI-generated images.</p>
        </div>
        <div className="mt-2 md:mt-0">
          <a
            href="https://github.com/your-repo" // Replace with your GitHub repo link
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm hover:underline"
          >
            <Image src="/github.svg" alt="GitHub" className="w-6 h-6" width={10} height={10} />
          </a>
        </div>
      </div>
      <div className="flex justify-center mt-4 space-x-4">
        <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">
          <Image src="/twitter.svg" alt="Twitter" className="w-6 h-6" width={10} height={10} />
        </a>
        <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
          <Image src="/linkedin.svg" alt="LinkedIn" className="w-6 h-6" width={10} height={10} />
        </a>
      </div>
      <div className="text-center mt-4">
        <p className="text-xs">© {new Date().getFullYear()} Vras AI. All rights reserved.</p>
        <p className="text-xs">
          <a href="/privacy-policy" className="hover:underline">Privacy Policy</a>
          <span className="mx-2">|</span>
          <a href="/terms-of-service" className="hover:underline">Terms of Service</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer; 