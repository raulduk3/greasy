"use client"
import { ThemeProvider } from "styled-components";
import { mainTheme } from "@/styles/ThemeConfig";

export default function ThemeClient({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <ThemeProvider theme={mainTheme}>
            {children}
        </ThemeProvider>
    )
} 