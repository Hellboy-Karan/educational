export interface SidebarProps {
    toggleSidebar?: () => void; // optional if needed only on mobile
}

export interface TestmionalArr {
    name: string,
    title: string,
    quote: string,
    description: string,
}

export interface TestmionalArr2 extends TestmionalArr {
    role: string,
    image: string
}