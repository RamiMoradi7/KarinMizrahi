const About: React.FC = () => {
  return (
    <>
      <section
        id="about"
        className=" mt-[20vh] relative py-20 bg-pink-100 overflow-hidden shadow-2xl"
      >
        <div
          className="absolute inset-0  bg-[center_25%] "
          style={{ backgroundImage: "url(/Karin3.jpg)" }}
        ></div>

        <div className="absolute inset-0 bg-black bg-opacity-40"></div>

        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 md:px-8">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            קצת עליי
          </h2>

          <p className="text-lg lg:text-xl text-white mb-3">
            ברוכה הבאה, אני קארין מזרחי עם 8 שנות ניסיון בתחום הציפורניים
          </p>
          <p className="text-lg lg:text-xl text-white mb-3">
            אצלי תוכלי לרכוש ליווי ומענה מיידי, הסברים ברורים וממוקדים
          </p>
          <p className="text-lg lg:text-xl text-white mb-3">
            שישפרו את רמת העבודה שלך, כולל הסבר על כימיה של הציפורניים.
          </p>
          <p className="text-lg lg:text-xl text-white mb-3">
            זכיתי בתחרות הרמת ריסים בינלאומית WBC בשתי קטגוריות מקום שני ושלישי.
          </p>
          <p className="text-xl lg:text-2xl text-green-300 mb-3">
            בעזרת הליווי שלי תוכלי לצאת לדרך עצמאית, זה הזמן שלך לבחור בעצמך !
          </p>
        </div>
      </section>
      <h2
        className={`text-4xl lg:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-zinc-800 tracking-wide uppercase 
    transform transition-all duration-300  hover:shadow-lg`}
      >
        DO IT RIGHT
      </h2>
    </>
  );
};

export default About;
