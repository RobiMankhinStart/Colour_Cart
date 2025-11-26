import React from "react";

const Footer = () => {
  return (
    <div className="border-t border-[#E8EDF2] py-7 text-[#9A9AAF] flex items-center justify-center">
      <div className="flex items-center gap-2">
        <p>
          © 2022 - <span className="text-[#7364DB]">Frox</span> Dashboard
        </p>
        <p className="flex items-center">
          <span className="size-1 mr-2 bg-[#7364DB] rounded-full"></span> Made
          by AliThemes
        </p>
      </div>
    </div>
  );
};

export default Footer;
