import React from "react";

class Footer extends React.Component {
  state = {

  }

  render() {
    return (
      <div className="px-5 lg:px-0 bg-gray-50 dark:bg-gray-1000 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-5xl mx-auto md:flex md:justify-between w-full py-5">
          <a target="_blank" className="text-sm text-gray-950 dark:text-gray-100" href="https://www.linkedin.com/in/gedrichmohseni/">ⓒ 2023 Gedrich Mohseni — Created with creativity sparked by the world around.</a>
          <a target="_blank" className="text-sm text-gray-950 dark:text-gray-100" href="mailto:gedrichmohseni@gmail.com">gedrichmohseni@gmail.com</a>
        </div>  
      </div>
    );
  }
}

export default Footer;
