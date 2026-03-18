import React from "react";
// Section component is used to wrap the content of the page and provide a consistent styling across all pages. It is used in the Mainlayout component to wrap the Outlet component, which renders the content of the current route. The Section component applies padding, background color, text color, text alignment, and horizontal padding to the content it wraps. This ensures that all pages have a consistent look and feel, making the application visually cohesive.
const Section = ({ children }) => {
  // the section class is a utility class from Tailwind CSS that provides padding, background color, text color, text alignment, and horizontal padding to the content it wraps. The py-3 class adds vertical padding of 3 units, bg-[#1d294f] sets the background color to a specific shade of blue, text-white sets the text color to white, text-center centers the text horizontally, and px-10 adds horizontal padding of 10 units.
  return (
    <section className="py-3  text-white text-center px-10">
      {children}
    </section>
  );
};

export default Section;
