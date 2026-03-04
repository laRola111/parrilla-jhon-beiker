"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { dictionaries } from "./dictionaries";

export type Language = "es" | "en";

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: typeof dictionaries["es"];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [language, setLanguageState] = useState<Language>("es");
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        const savedLang = localStorage.getItem("language") as Language;
        if (savedLang === "es" || savedLang === "en") {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setLanguageState(savedLang);
        } else {
            // Auto-detect based on browser language
            const userLang = navigator.language.toLowerCase();
            if (userLang.startsWith("en")) {
                setLanguageState("en");
            }
        }
        setMounted(true);
    }, []);

    const setLanguage = (lang: Language) => {
        setLanguageState(lang);
        localStorage.setItem("language", lang);
    };

    // Prevent layout shift/hydration mismatch during SSR by rendering children directly with default ES, 
    // then updating client-side. Or we can just let it render ES initially and change fast.

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t: dictionaries[language] }}>
            <div className={mounted ? "loaded" : ""}>
                {children}
            </div>
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
}
