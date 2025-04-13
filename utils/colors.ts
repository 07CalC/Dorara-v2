type ColorScheme = 'light' | 'dark' | undefined

export const getDrawerColors = (colorScheme: ColorScheme) => ({
    bg: colorScheme === 'light' ? "#F5F5F5" : "#171717",
    inactiveTint: colorScheme === 'light' ? "#383b39" : "#ffffff",
    activeTint: colorScheme === "light" ? "#ba4c48": "#f3a49d",
});


export const getCustomHeaderColors = (colorScheme: ColorScheme) => ({
    bg: colorScheme === 'light' ? "#F5F5F5" : "#212121",
    text: colorScheme === 'light' ? "#383b39" : "#fff",
    icon: colorScheme === 'light' ? "#383b39" : "#fff",
    searchBg: colorScheme === 'light' ? "#ffffff" : "#333634",
})

export const getTodoScreenColors = (colorScheme: ColorScheme) => ({
    bg: colorScheme === 'light' ? "#F5F5F5" : "#171717",
    text: colorScheme === 'light' ? "#383b39" : "#ffffff",
    icon: colorScheme === 'light' ? "#383b39" : "#ffffff",
})