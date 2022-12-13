import React from "react";
const About = () => {
  return (
    <div className="my-5 px-10 text-sm sm:text-base  to-blue-200">
      This website contains mornig and evening authentic duas/supplications from
      the popular book of authentic supplications, "Hisnul- Muslim"
      (Fortification of the Muslim). Please Note, transliteration has been
      added, just for assistance to Muslims who are still learning Arabic. One
      must not depend on transliteration, and strive to learn arabic. The audio
      feature has been provided for convenience in the recitation by the user,
      if needed.
      <p>
        The site devoloped not for commercial use ,intent of this site spread
        the awareness of benefits morning and evening azkar.
      </p>
      <p>
        If any query or feedback send us email at :{" "}
        <a
          target="_blank"
          rel="noreferrer"
          className="underline text-blue-300"
          href="https://accounts.google.com/b/0/AddMailService"
        >
          zakirhusensayed@gmail.com
        </a>
      </p>
      <p></p>
      {/* https://api3.islamhouse.com/v3/pav29h2gm56kvlpy/main/get-item/2807299/en/json
      {/* https://d1.islamhouse.com/data/kn/ih_books/single/kn_hisnul_muslim.pdf */}
      {/* ಅಲ್ ಉಸೂಲು ಸ್ಸಲಾಸ (ಮೂರು ಮೂಲಭೂತ ನಿಯಮಗಳು)", */}
      {/* "url": "https://d1.islamhouse.com/data/kn/ih_books/single/kn_usool_thalatha.pdf" */}
    </div>
  );
};

export default About;
