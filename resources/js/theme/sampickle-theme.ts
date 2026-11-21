
import type { ThemeConfig } from "antd";

export const sampickleTheme: ThemeConfig = {
    token: {
        colorPrimary: "#064E2B",
        colorPrimaryHover: "#075F35",
        colorPrimaryActive: "#043D22",

        colorError: "#DC2626",

        borderRadius: 8,
        fontFamily: "Inter, sans-serif",
    },

    components: {
        Button: {
            controlHeight: 40,
            controlHeightSM: 32,
            controlHeightLG: 48,

            borderRadius: 8,

            contentFontSize: 14,
            contentFontSizeSM: 13,
            contentFontSizeLG: 15,

            fontWeight: 600,

            paddingInline: 18,
            paddingInlineSM: 12,
            paddingInlineLG: 24,

            iconGap: 8,

            // Primary button
            primaryColor: "#FFFFFF",
            primaryShadow: "none",

            // Default button
            defaultBg: "#FFFFFF",
            defaultColor: "#064E2B",
            defaultBorderColor: "#D1D5DB",
            defaultShadow: "none",

            defaultHoverBg: "#F0FDF4",
            defaultHoverColor: "#064E2B",
            defaultHoverBorderColor: "#86EFAC",

            // Text button
            textHoverBg: "#F0FDF4",
        },

        Select: {
            // Dropdown option states
            optionActiveBg: "#F0FDF4",
            optionSelectedBg: "#F0FDF4", //the color change when hovering to other options
            optionSelectedColor: "white",
            optionSelectedFontWeight: 600,

            // Select input states
            activeBorderColor: "#064E2B",
            activeOutlineColor: "rgba(6, 78, 43, 0.12)",
            hoverBorderColor: "#16A34A",

        },

        Layout: {
            headerBg: "#FFFFFF",
            headerColor: "#0F172A",
            headerPadding: "0 24px",
            headerHeight: 68,
            bodyBg: "#F8FAFC",
        },
    },
};
