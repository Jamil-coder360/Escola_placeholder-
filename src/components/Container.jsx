import React from "react";
// container component is used to wrap the content of the page and provide a consistent layout. It is used in the Mainlayout component to wrap the Outlet component, which renders the content of the page based on the route.
const Container = ({ children }) => {
  return (
    // the container class is a utility class from Tailwind CSS that provides a max-width and centers the content horizontally. The mx-auto class centers the it remains responsive and adjusts the max-width based on the screen size.
    <div className="container mx-auto">{children}</div>
  );
};

export default Container;
