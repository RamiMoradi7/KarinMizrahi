export type TCourse = {
  title: string;
  price: number;
  salePrice:number;
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
    price: 4980,
    salePrice:3600,
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
    price: 1600,
    salePrice:1000,
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
  { title: "קיצור זמנים" },
  { title: "הסרה נכונה והכנת לוחית הציפורן" },
  { title: "שיוף צורה וסימטריה" },
  { title: "מניקור משולב בעזרת שני ראשים" },
  { title: "חיתוך העור בעזרת מספריים" },
  {
    title: "בחירת חומרים והתאמתם לסוג ציפורן הלקוחה",
  },
  { title: "תיקון מבנה בטכניקה פשוטה" },
  { title: "מריחה צמודה מתחת לקוטיקולה" },
  { title: "השלמת ציפורן בפוליג'ל" },
  { title: "צילום אינסטגרמי" },
];

export type StarterListItem = {
  text: string;
};

export const STARTER_LIST_ITEMS: StarterListItem[] = [
  {
    text: "חוברת מפורטת עם החומר הנלמד",
  },
  {
    text: "תעודת סיום מוסמכת",
  },
  {
    text: "ליווי אישי גם לאחר הקורס",
  },
  {
    text: "ערכת ציוד ממוקדת",
  },
];

export const STARTER_LIST_BONUSES: StarterListItem[] = [
  { text: "פתיחת עוסק פטור" },
  { text: "שיווק ברשתות חברתיות" },
  { text: "אפליקציות לעריכה בתחום" },
  { text: "תמחור עסקי נכון" },
  { text: "המלצות לקניה חכמה" },
];

export const LEVELUP_LIST_ITEMS: StarterListItem[] = [
  { text: "חוברת עם כל החומר שנלמד בשיעור" },
  { text: "בסיום ההשתלמות תקבלי תעודה מוסמכת" },
  { text: "ליווי אישי לאורך כל הדרך" },
];

export const LEVELUP_LIST_BONUSES: StarterListItem[] = [
  { text: "שיווק ברשתות חברתיות" },
  { text: "אפליקציות לעריכה" },
  { text: "המלצות לקניה חכמה" },
  { text: "תמחור עסקי נכון" },
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
      { text: "תופעות בציפורניים ודרכי התמודדות" },
      { text: "הכרת כלי עבודה" },
      { text: "שיוף צורות" },
      { text: "מניקןר משולב וחיתוך במספריים" },
      { text: "סוגי חומרים והתאמתם" },
      { text: "תיקון מבנה אנטומי" },
      { text: "סטריליזציה- חיטוי ועיקור" },
      { text: "רשימת קניות מפורטת" },
      { text: "מהשיעור הראשון נעבוד על שיוף מגוון צורות, סרטוט פרנץ ומריחה" },
    ],
  },
  {
    title: "שיעור מעשי על מודליסטית",
    lessonNumber: 2,
    lessonContent: [
      { text: "נכיר לעומק את מכונת השיוף" },
      { text: "נלמד לבצע הסרה לק גל בצורה נכונה" },
      { text: "מניקור מכשירי" },
      { text: "שיוף צורה" },
      { text: "גזירה נכונה באמצעות מספריים" },
      { text: "מבנה אנטומי" },
      { text: "צילום מקצועי" },
    ],
  },
  {
    title: "מעשי שני עולים ברמה",
    lessonNumber: 3,
    lessonContent: [
      { text: "נבצע מניקור בעזרת 2 ראשים" },
      { text: " מריחה מדויקת בעזרת מכחול 0" },
    ],
  },
  {
    title: "מעשי אחרון",
    lessonNumber: 4,
    lessonContent: [
      { text: "בשיעור זה נחדד את כל השלבים שעברנו עד כה" },
      {
        text: "מריחה צמודה לקוטיקולה גם ללא מכחול 0",
      },
      {
        text: "אלמד את טכניקת למידת השלמת הציפורן באמצעות טיפסים הפוכים בפוליגל",
      },
    ],
  },
];

export const FORM_SELECT_VALUES: string[] = [
  "קורס מתחילות לק ג'ל",
  "השתלמות מקצועיות",
  "אחר",
];
