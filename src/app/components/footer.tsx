import Socials from "./Socials";

const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-100 text-black py-8">
      <div className="text-center">
        <p className="text-lg mb-4">אל תשכחו לעקוב גם ברשתות החברתיות</p>
        <div className="flex justify-center space-x-6">
          <Socials />
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          &copy; {new Date().getFullYear()} קארין מזרחי 
        </p>
      </div>
    </footer>
  );
};

export default Footer;
