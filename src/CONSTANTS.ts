// backend
export const API_URL =
    process.env.NODE_ENV !== "production"
        ? `http://localhost:1337`
        : `https://learnersbay-api.herokuapp.com`;
export const USER_ROLE_ID = 1;
export const INSTRUCTOR_ROLE_ID = 3;
export const ORGANIZATION_ROLE_ID = 4;

// colors
export const GRAY_TEXT = "#4F547B";
export const DANGER = "#fd4747";
export const THEME = "#6440FB";
export const THEME_LIGHT = "#F4F1FE";
export const THEME_DARK = "#140342";
export const THEME_DARK_TRANSPARENT = "#14034299";
export const THEME_LIGHT_TRANSPARENT = "#dcd5f3a1";

export const is_mobile = window.innerWidth < 600;
export const TABLET_BREAK_POINT = '900';
export const CHAKRA_TABLET_BREAK_POINT = `(max-width: ${TABLET_BREAK_POINT}px)`;
export const TABLET_WIDTH = 1000;



// class thumbnail
export const LG_THUMBNAIL_WIDTH = 600;
export const LG_THUMBNAIL_HEIGHT = 600;
export const SM_THUMBNAIL_WIDTH = 500;
export const SM_THUMBNAIL_HEIGHT = 300;

// options
export const class_difficulty = [
    {
        label: "Beginners",
        value: "beginner",
    },
    {
        label: "Intermediate",
        value: "intermediate",
    },
    {
        label: "Advanced",
        value: "advanced",
    },
];