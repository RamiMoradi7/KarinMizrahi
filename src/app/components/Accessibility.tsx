import { useAccessibility } from "../hooks/useAccessibility";

const Accessibility = ({ isOpen }: { isOpen: boolean }) => {
  const {
    fontSize,
    minFontSize,
    maxFontSize,
    highContrast,
    screenReaderMode,
    isDyslexiaFont,
    isGrayscale,
    isWhiteBackground,
    increaseFontSize,
    decreaseFontSize,
    toggleDyslexiaFont,
    toggleGrayscaleMode,
    toggleScreenReaderMode,
    toggleHighContrast,
    toggleWhiteBackground,
    resetSettings,
  } = useAccessibility();

  return (
    <>
      {isOpen && (
        <div
          className={`fixed bottom-16 left-5 md:left-16 w-72 md:w-80 lg:w-96 h-[600px] bg-white rounded-xl shadow-lg transform transition-all duration-700 ease-out ${
            isOpen
              ? "translate-x-0 opacity-100 scale-100"
              : "-translate-x-full opacity-0 scale-95"
          }`}
        >
          <div className="p-6 overflow-y-auto space-y-6 animate-slide-fade max-h-full">
            <div className="flex justify-between">
              <h3 className="font-bold text-lg text-zinc-800">תפריט נגישות</h3>
              <button
                onClick={resetSettings}
                className={`px-4 py-2 text-white bg-zinc-900 hover:bg-zinc-500 rounded-lg text-sm  font-semibold`}
              >
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  viewBox="0 0 448 448"
                >
                  <path
                    fill="currentColor"
                    d="M384 224c0 105.75-86.25 192-192 192-57.25 0-111.25-25.25-147.75-69.25-2.5-3.25-2.25-8 0.5-10.75l34.25-34.5c1.75-1.5 4-2.25 6.25-2.25 2.25 0.25 4.5 1.25 5.75 3 24.5 31.75 61.25 49.75 101 49.75 70.5 0 128-57.5 128-128s-57.5-128-128-128c-32.75 0-63.75 12.5-87 34.25l34.25 34.5c4.75 4.5 6 11.5 3.5 17.25-2.5 6-8.25 10-14.75 10h-112c-8.75 0-16-7.25-16-16v-112c0-6.5 4-12.25 10-14.75 5.75-2.5 12.75-1.25 17.25 3.5l32.5 32.25c35.25-33.25 83-53 132.25-53 105.75 0 192 86.25 192 192z"
                  ></path>
                </svg>
              </button>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex space-x-2 gap-4 items-center">
                <button
                  onClick={decreaseFontSize}
                  disabled={fontSize === minFontSize}
                  className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg text-sm md:text-base font-semibold"
                >
                  <svg
                    className="h-10 w-10 text-zinc-900"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle
                      cx="11"
                      cy="11"
                      r="8"
                    />
                    <line
                      x1="21"
                      y1="21"
                      x2="16.65"
                      y2="16.65"
                    />
                    <line
                      x1="8"
                      y1="11"
                      x2="14"
                      y2="11"
                    />
                  </svg>
                  הקטן טקסט
                </button>
                <button
                  onClick={increaseFontSize}
                  disabled={fontSize === maxFontSize}
                  className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg text-sm md:text-base font-semibold"
                >
                  <svg
                    className="h-10 w-10 text-zinc-900"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path
                      stroke="none"
                      d="M0 0h24v24H0z"
                    />
                    <circle
                      cx="10"
                      cy="10"
                      r="7"
                    />
                    <line
                      x1="7"
                      y1="10"
                      x2="13"
                      y2="10"
                    />
                    <line
                      x1="10"
                      y1="7"
                      x2="10"
                      y2="13"
                    />
                    <line
                      x1="21"
                      y1="21"
                      x2="15"
                      y2="15"
                    />
                  </svg>
                  הגדל טקסט
                </button>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-700 text-base md:text-lg">
                ניגודיות גבוהה:
              </span>
              <button
                onClick={toggleHighContrast}
                className={`px-4 py-2 rounded-lg text-sm md:text-base font-semibold ${
                  highContrast
                    ? "bg-green-500 text-white"
                    : "bg-gray-200 hover:bg-gray-300"
                }`}
              >
                {highContrast ? "דולק" : "כבוי"}
              </button>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-700 text-base md:text-lg">
                הדגשת קישורים
              </span>
              <button
                onClick={toggleScreenReaderMode}
                className={`px-4 py-2 rounded-lg text-sm md:text-base font-semibold ${
                  screenReaderMode
                    ? "bg-green-500 text-white"
                    : "bg-gray-200 hover:bg-gray-300"
                }`}
              >
                {screenReaderMode ? "דולק" : "כבוי"}
              </button>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-700 text-base md:text-lg">
                גווני אפור
              </span>
              <button
                onClick={toggleGrayscaleMode}
                className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg text-sm md:text-base font-semibold"
              >
                {isGrayscale ? "דולק" : "כבוי"}
              </button>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-700 text-base md:text-lg">
                רקע בהיר
              </span>
              <button
                onClick={toggleWhiteBackground}
                className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg text-sm md:text-base font-semibold"
              >
                {isWhiteBackground ? "דולק" : "כבוי"}
              </button>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-700 text-base md:text-lg">
                גופן ידידותי לדיסלקסיה:
              </span>
              <button
                onClick={toggleDyslexiaFont}
                className={`px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg text-sm md:text-base font-semibold ${
                  isDyslexiaFont ? "bg-green-300 text-white" : ""
                }`}
              >
                {isDyslexiaFont ? "דולק" : "כבוי"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Accessibility;
