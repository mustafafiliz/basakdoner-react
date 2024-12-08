export const navLinkStyles = (isActive: boolean) => {
  return `relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] 
      before:bottom-[-4px] before:left-0 before:bg-red-800 
      before:scale-x-0 before:transition-transform before:duration-300
      hover:before:scale-x-100 ${
        isActive ? "text-red-800" : "hover:text-red-800"
      }`;
};
