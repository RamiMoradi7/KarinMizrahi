import { useEffect, useRef, useState } from "react";

export const useAccessibility = () => {
  const [fontSize, setFontSize] = useState(16);
  const [highContrast, setHighContrast] = useState(false);
  const [screenReaderMode, setScreenReaderMode] = useState(false);
  const [isDyslexiaFont, setIsDyslexiaFont] = useState(false);
  const [isGrayscale, setIsGrayscale] = useState(false);
  const [isWhiteBackground, setIsWhiteBackground] = useState(false);
  const minFontSize = 14;
  const maxFontSize = 24;

  useEffect(() => {
    const bodyFontSize = window.getComputedStyle(document.body).fontSize;
    setFontSize(parseInt(bodyFontSize, 10) || 18);
  }, []);

  const increaseFontSize = () => {
    setFontSize((prevFont) => {
      const newFontSize = prevFont + 2;
      if (newFontSize <= maxFontSize) {
        document.documentElement.style.setProperty(
          "font-size",
          `${newFontSize}px`,
          "important"
        );
        return newFontSize;
      }
      return prevFont;
    });
  };

  const decreaseFontSize = () => {
    setFontSize((prevFont) => {
      const newFontSize = prevFont - 2;
      if (newFontSize >= minFontSize) {
        document.documentElement.style.setProperty(
          "font-size",
          `${newFontSize}px`,
          "important"
        );
        return newFontSize;
      }
      return prevFont;
    });
  };

  const toggleHighContrast = () => {
    setHighContrast((prevContrast) => {
      if (!prevContrast) {
        document.documentElement.classList.add("high-contrast");
      } else {
        document.documentElement.classList.remove("high-contrast");
      }
      return !prevContrast;
    });
  };

  const toggleScreenReaderMode = () => {
    setScreenReaderMode((prevMode) => {
      if (!prevMode) {
        document.documentElement.classList.add("screen-reader-mode");
        document.querySelectorAll(".non-essential").forEach((el) => {
          el.setAttribute("aria-hidden", "true");
        });
      } else {
        document.documentElement.classList.remove("screen-reader-mode");
        document.querySelectorAll(".non-essential").forEach((el) => {
          el.setAttribute("aria-hidden", "false");
        });
      }
      return !prevMode;
    });
  };

  const toggleDyslexiaFont = () => {
    setIsDyslexiaFont((prev) => {
      if (prev) {
        document.documentElement.classList.remove("dyslexia-font");
        document.body.style.fontFamily = "";
      } else {
        document.documentElement.classList.add("dyslexia-font");
        document.body.style.fontFamily = "OpenDyslexic";
      }
      return !prev;
    });
  };

  const toggleGrayscaleMode = () => {
    setIsGrayscale((prevState) => !prevState);
    const isGrayscaleEnabled = !isGrayscale;
    document.documentElement.classList.toggle("grayscale", isGrayscaleEnabled);
    document.documentElement.style.filter = isGrayscaleEnabled
      ? "grayscale(100%)"
      : "";
  };

  const toggleWhiteBackground = () => {
    setIsWhiteBackground((prevState) => !prevState);
    const isWhiteBackgroundEnabled = !isWhiteBackground;

    if (isWhiteBackgroundEnabled) {
      document.documentElement.classList.add("white-background");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      const elementsWithBackground = document.querySelectorAll("*");
      elementsWithBackground.forEach((element) => {
        const htmlElement = element as HTMLElement;
        htmlElement.style.backgroundColor = "white";
        htmlElement.style.color = "black";
      });
    } else {
      document.documentElement.classList.remove("white-background");
      document.body.style.backgroundColor = "";
      document.body.style.color = "";

      const elementsWithBackground = document.querySelectorAll("*");
      elementsWithBackground.forEach((element) => {
        const htmlElement = element as HTMLElement;
        htmlElement.style.backgroundColor = "";
        htmlElement.style.color = "";
      });
    }
  };
  const togglePauseAnimations = () => {
    document.body.classList.toggle("paused-animations");
  };

  const resetSettings = () => {
    setFontSize(16);
    setHighContrast(false);
    setScreenReaderMode(false);
    setIsDyslexiaFont(false);
    setIsWhiteBackground(false);

    document.documentElement.classList.remove("high-contrast");
    document.documentElement.classList.remove("screen-reader-mode");
    document.documentElement.classList.remove("dyslexia-font");
    document.documentElement.classList.remove("white-background");
    document.documentElement.classList.remove("grayscale");
    document.body.classList.remove("paused-animations");
    document.body.style.backgroundColor = "";
    document.body.style.color = "";
    document.body.style.fontFamily = "";
    document.body.style.fontSize = "";

    const elementsWithBackground = document.querySelectorAll("*");
    elementsWithBackground.forEach((element) => {
      const htmlElement = element as HTMLElement;
      htmlElement.style.backgroundColor = "";
      htmlElement.style.color = "";
    });

    document.documentElement.style.setProperty(
      "font-size",
      "16px",
      "important"
    );

    document.documentElement.style.filter = "";

    if (document.documentElement.classList.contains("dyslexia-font")) {
      document.documentElement.classList.remove("dyslexia-font");
      document.body.style.fontFamily = "";
    }
  };

  return {
    fontSize,
    highContrast,
    screenReaderMode,
    isDyslexiaFont,
    isGrayscale,
    isWhiteBackground,
    minFontSize,
    maxFontSize,
    increaseFontSize,
    decreaseFontSize,
    toggleDyslexiaFont,
    toggleGrayscaleMode,
    toggleScreenReaderMode,
    togglePauseAnimations,
    toggleHighContrast,
    toggleWhiteBackground,
    resetSettings,
  };
};

export const useAccessibilityMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return { isOpen, menuRef, toggleMenu };
};
