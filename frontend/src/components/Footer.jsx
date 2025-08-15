// import React from "react";
// import { FaInstagram, FaXTwitter, FaLinkedin } from "react-icons/fa6";

// const Footer = () => {
//   return (
//     <footer className="w-full py-4 bg-black-100/55 text-white flex justify-center gap-6">
//       <a
//         href="https://www.instagram.com/s_r_p_mh26/?igsh=Z2hzYmxyMHF6bDJq#"
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         <FaInstagram size={24} />
//       </a>
//       <a href="https://x.com/srp_mh26?t=wox2JwGFQQg1Fz1PYNO3Dg&s=09" target="_blank" rel="noopener noreferrer">
//         <FaXTwitter size={24} />
//       </a>
//       <a
//         href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQHVWztK30ip7AAAAZgH0ekwirlQsJziqGolmM5yrmipCrJFurdTmmJOFIe3SLXTw1jyHJb37M_mMlub8ANOEQqPh7Ff6JlclaEYZKbzKtzDpa8CS9vIT2oMOpyzV3GYIPDCcVE=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fshriyash-pachpande-4160b0259%3Futm_source%3Dshare%26utm_campaign%3Dshare_via%26utm_content%3Dprofile%26utm_medium%3Dandroid_app"
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         <FaLinkedin size={24} />
//       </a>
//     </footer>
//   );
// };

// export default Footer;



import React from "react";
import { FaInstagram, FaXTwitter, FaLinkedin } from "react-icons/fa6";

const socialLinks = [
  {
    href: "https://www.instagram.com/s_r_p_mh26/?igsh=Z2hzYmxyMHF6bDJq#",
    icon: <FaInstagram size={24} />,
  },
  {
    href: "https://x.com/srp_mh26?t=wox2JwGFQQg1Fz1PYNO3Dg&s=09",
    icon: <FaXTwitter size={24} />,
  },
  {
    href: "https://www.linkedin.com/in/shriyash-pachpande-4160b0259",
    icon: <FaLinkedin size={24} />,
  },
];

const Footer = () => {
  return (
    <footer className="w-full py-6 bg-black/60 text-white flex justify-center gap-6 overflow-hidden">
      {socialLinks.map((item, index) => (
        <a
          key={index}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative animate-slide-in"
          style={{
            animationDelay: `${index * 0.3}s`,
            animationFillMode: "both",
          }}
        >
          <div className="p-[2px] rounded-full bg-gradient-to-r from-pink-500 via-yellow-500 to-cyan-500 animate-border">
            <div className="bg-black rounded-full p-2 text-white">
              {item.icon}
            </div>
          </div>
        </a>
      ))}
    </footer>
  );
};

export default Footer;

