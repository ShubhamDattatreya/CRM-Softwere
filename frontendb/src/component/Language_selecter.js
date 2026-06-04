
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

const languages = [
  { code: "en", lang: "English" },
  { code: "fr", lang: "français" },
  { code: "hi", lang: "हिन्दी" },
  // { code: "ar", lang: "Arabic" },
];

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    document.body.dir = i18n.dir();
  }, [i18n, i18n.language]);

  return (
    <div >
      <select
        value={i18n.resolvedLanguage}
        onChange={(e) => i18n.changeLanguage(e.target.value)}
        className="bg-transparent border border-gray-400 rounded-md px-3 py-1.5 text-sm cursor-pointer outline-none hover:border-gray-600 focus:border-gray-700 transition"
      >
        {languages.map((lng) => (
          <option key={lng.code} value={lng.code}>
            {lng.lang}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSelector;