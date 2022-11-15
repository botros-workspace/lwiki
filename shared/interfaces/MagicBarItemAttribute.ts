import { IconType } from 'react-icons';

export interface MagicBarItemAttribute {
    icon: IconType;
    tooltipLabel: string;
    show: boolean;
    selected: boolean;
    onClick: () => void;
}
