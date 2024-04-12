import type { NextPage } from "next";
import github from "../assets/github.webp";
import linkedin from "../assets/linkedin.webp";
import instagram from "../assets/instagram.webp";
import gmail from "../assets/gmail.webp";

export const About: NextPage = () => {
  return (
    <>
      <div className="about_left">
        <h1 className="about_left_head">Hi, I&apos;m Bishal Biswas</h1>
        <p className="about_left_text">
          Hi! I am Bishal Biswas from Kolkata, West Bengal. I am Computer Science Graduate with minors in AI Engineer. I
          am passionate about writing clean, efficient and optimized code. I wrote my First Program in python in 2016.
        </p>
        <div className="about_left_socialMedia">
          <img src={github.src} alt="" onClick={() => window.open("https://github.com/bishalbiswas-work", "_blank")} />
          <img
            src={linkedin.src}
            alt=""
            onClick={() => window.open("https://www.linkedin.com/in/bishal-biswas-a2560b246/", "_blank")}
          />
          <img
            src={instagram.src}
            alt=""
            // onClick={() => window.open("https://www.instagram.com/himan_kash/", "_blank")}
          />
          <img src={gmail.src} alt="" onClick={() => window.open("mailto:bishalbiswas.work@gmail.com", "_blank")} />
        </div>
        <div
          className="about_left_starme"
          // onClick={() => window.open("https://github.com/iamhiman/personal-webpage-v2", "_blank")}
        >
          ⭐ Star Me On Github
        </div>
      </div>
      <div className="about_right">
        {/* <div className="about_right_profilePic" /> */}
        <img
          src="https://media.licdn.com/dms/image/D4D03AQHvD8sP9NkSBg/profile-displayphoto-shrink_400_400/0/1698522796011?e=1718236800&v=beta&t=uRo9E7yvL36-Yimphqwvk0oPBuf9KfKz8v_7z6P4snY"
          alt=""
        />
      </div>
    </>
  );
};
