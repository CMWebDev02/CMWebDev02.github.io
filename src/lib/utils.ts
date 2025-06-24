import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import monthly_template_generator_icon from '../../public/assets/project-icons/monthly-template-generator-icon.svg';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function projectIcons() {
  return {
    monthly_template_generator_icon,
    
  }
}