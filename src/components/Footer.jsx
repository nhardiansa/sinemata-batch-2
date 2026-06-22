import { cn } from "@sglara/cn";

function Footer() {
  return (
    <div
      className={cn(
        // styling display
        "border-t border-[#2A2F37]",
        // layout setting
        "pt-4.5 pb-12 mt-20",
      )}
    >
      <div className="wrapper-footer max-w-7xl mx-auto flex justify-between items-center text-[#6B7280]">
        <span>Sinemata · Final Project Bootcamp React JS</span>
        <span>Powered by TMDB API · Data fiktif untuk preview</span>
      </div>
    </div>
  );
}

export default Footer;
