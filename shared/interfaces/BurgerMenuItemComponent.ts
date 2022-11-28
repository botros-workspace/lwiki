import { IconType } from 'react-icons';

export interface BurgerMenuItemComponent {
    route: string;
    icon: IconType;
    text: string;
    show: boolean;
    changeRoute: (route: string) => void;
    iconColor?: string;
    isActive: boolean;
}
