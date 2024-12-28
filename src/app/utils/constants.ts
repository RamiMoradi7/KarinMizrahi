export type TCourse = {
  title: string;
  price: number;
  including: string[];
  key: string;
};

export const COURSES: TCourse[] = [
  {
    title: "קורס מתחילות לק ג'ל",
    including: [
      " מפגשים שאורכים 4-5 שעות לימודיות למפגש",
      "המפגשים הם אישים 1:1 על מנת לתת יחס אישי ותשומת לב לכל פרט",
      "בקורס אלמד אותך את שיטת העבודה שלי מההתחלה ועד הסוף!",
      "מתאים לבנות ללא ידע קודם",
    ],
    price: 4890,
    key: "starters",
  },
  {
    title: "השתלמות Level up",
    including: [
      "מיועדת לכל מי ששואפת לתוצאה טובה יותר שנמצאת בתחום!",
      "מפגש 1:1 שאורך בין 5-6 שעות",
      "נתמקד בכל השלבים שאת מרגישה שצריך לשפר",
      "עבודה מעשית ועיונית על החוברת המפורטת",
      "בחוברת תקבלו מידע עבור כל הנושאים הקשורים לתחום הציפורניים",
    ],
    price: 1500,
    key: "level-up",
  },
];

export type TMenuItem = {
  link: string;
  label: string;
  href: string;
};

export const MENU_ITEMS: TMenuItem[] = [
  { link: "/", href: "hero", label: "דף הבית" },
  { link: "/", href: "about", label: "קצת עליי" },
  { link: "/", href: "courses", label: "קורסים" },
  { link: "/", href: "works", label: "עבודות" },
  {
    link: "/",
    href: "contact",
    label: "צרי קשר",
  },
];

type LEARNING = {
  title: string;
};

export const LEARNINGS: LEARNING[] = [
  { title: "קיצור זמנים." },
  { title: "הסרה מדוייקת והחלקת החומר לצורך הכנת לוחית הציפורן." },
  { title: "שיוף צורה סימטרית, והסבר על פרופורציות נכונות בציפורניים." },
  { title: "מניקור משולב בעזרת ראשי מניקור." },
  { title: "חיתוך העור בעזרת מספריים." },
  {
    title: "בחירת חומרים והתאמתם- ראבר בייס, פוליגל, גל בנייה, הארד בייס וכו׳.",
  },
  { title: "תיקון מבנה בטכניקה פשוטה." },
  { title: "מריחה צמודה בעזרת מכחול 0 ובלעדיו מתחת לקוטיקולה." },
  { title: "השלמת ציפורן באמצעות טיפסים הפוכים בפוליגל." },
  { title: "צילום אינסטגרמי מושך." },
];

export type StarterListItem = {
  text: string;
};

export const STARTER_LIST_ITEMS: StarterListItem[] = [
  {
    text: "חוברת מפורטת.",
  },
  {
    text: "תעודת סיום מוסמכת מקצועית.",
  },
  {
    text: "ליווי אישי גם לאחר הקורס.",
  },
  {
    text: "ערכת ציוד ממוקדת.",
  },
];

export const STARTER_LIST_BONUSES: StarterListItem[] = [
  { text: "פתיחת עוסק פטור." },
  { text: "צילום אינסטגרמי- תלמדי איך לצלם נכון עבודת קטלוג." },
  { text: "שיווק ברשתות חברתיות." },
  { text: "אפליקציות לעריכה בתחום." },
  { text: "עזרה בתמחור." },
  { text: "המלצות שוות לקניה." },
];

export const LEVELUP_LIST_ITEMS: StarterListItem[] = [
  { text: "חוברת עם כל החומר שנלמד בשיעור." },
  { text: "בסיום ההשתלמות תקבלי תעודה." },
  { text: "ליווי אישי גם לאורך כל הדרך." },
];

export const LEVELUP_LIST_BONUSES: StarterListItem[] = [
  { text: "שיווק ברשתות חברתיות." },
  { text: "אפליקציות ועריכה." },
  { text: "המלצות לקניות שוות." },
  { text: "עזרה בתמחור." },
];

export type Lesson = {
  title: string;
  lessonNumber: number;
  lessonContent: { text: string }[];
};
export const LESSONS: Lesson[] = [
  {
    title: "למידה עיונית",
    lessonNumber: 1,
    lessonContent: [
      { text: "חוברת מפורטת תאוריה ומבנה והציפורן." },
      { text: "תופעות בציפורניים ודרכי התמודדות." },
      { text: "הכרת כלי עבודה." },
      { text: "שיוף צורות." },
      { text: "מניקור משולב בעזרת ראשי מניקור." },
      { text: "חיתוך העור בעזרת מספריים." },
      { text: "סוגי חומרים והתאמתם." },
      { text: "תיקון מבנה אנטומי." },
      { text: "סטריליזציה- חיטוי ועיקור." },
      { text: "רשימת קניות מפורטת." },
      { text: "מהשיעור הראשון נעבוד על שיוף מגוון צורות, סרטוט פרנץ ומריחה." },
    ],
  },
  {
    title: "שיעור מעשי על מודליסטית",
    lessonNumber: 2,
    lessonContent: [
      { text: "נכיר לעומק את מכונת השיוף." },
      { text: "נלמד לבצע הסרה לק גל בצורה נכונה." },
      { text: "מניקור מכשירי." },
      { text: "שיוף צורה." },
      { text: "גזירה נכונה באמצעות מספריים." },
      { text: "מבנה אנטומי." },
      { text: "צילום מקצועי." },
    ],
  },
  {
    title: "מעשי שני עולים ברמה",
    lessonNumber: 3,
    lessonContent: [
      { text: "נבצע מניקור בעזרת 2 ראשים." },
      { text: " מריחה מדויקת בעזרת מכחול 0." },
    ],
  },
  {
    title: "מעשי אחרון",
    lessonNumber: 4,
    lessonContent: [
      { text: "בשיעור זה נחדד את כל השלבים שעברנו עד כה," },
      {
        text: "מריחה צמודה לקוטיקולה גם ללא מכחול 0.",
      },
      {
        text: "אלמד את טכניקת למידת השלמת הציפורן באמצעות טיפסים הפוכים בפוליגל.",
      },
    ],
  },
];
