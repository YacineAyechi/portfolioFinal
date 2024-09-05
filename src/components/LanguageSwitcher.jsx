"use client";

import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();

  const handleLocaleChange = (e) => {
    const selectedLocale = e.target.value;

    const segments = pathname
      .split("/")
      .filter((segment) => segment !== "en" && segment !== "fr");

    const newPathname = `/${selectedLocale}${segments.join("/")}`;

    router.push(newPathname);
  };

  const currentLocale = pathname.startsWith("/fr") ? "fr" : "en";

  return (
    <select
      onChange={handleLocaleChange}
      className="bg-gray-700 text-white px-2 py-2 rounded"
      value={currentLocale}
    >
      <option value="en">EN</option>
      <option value="fr">FR</option>
    </select>
  );
}
