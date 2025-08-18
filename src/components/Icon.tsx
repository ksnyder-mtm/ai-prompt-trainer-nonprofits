import React from 'react';
import {
  ClipboardIcon,
  HeartIcon,
  UsersIcon,
  BookOpenIcon,
  TargetIcon,
  LightbulbIcon,
  ZapIcon,
  BarChartIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  ClockIcon,
  FileTextIcon,
  MessageCircleIcon,
  SettingsIcon,
  TrendingUpIcon,
  PlusCircleIcon,
  UserIcon,
  MailIcon,
  BellIcon,
  EyeIcon,
  SendIcon,
  EditIcon,
  RefreshCwIcon,
  CpuIcon,
  ChevronUpIcon,
  ChevronDownIcon,
  ArrowLeftIcon,
  InfoIcon,
  GitBranchIcon,
  CodeIcon,
  LayersIcon,
  CheckSquareIcon,
  BriefcaseIcon,
  StarIcon
} from './Icons';

interface IconProps {
  name: string;
  size?: number;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const iconMap = {
  'clipboard': ClipboardIcon,
  'heart': HeartIcon,
  'users': UsersIcon,
  'book-open': BookOpenIcon,
  'target': TargetIcon,
  'lightbulb': LightbulbIcon,
  'zap': ZapIcon,
  'bar-chart': BarChartIcon,
  'check-circle': CheckCircleIcon,
  'arrow-right': ArrowRightIcon,
  'arrow-left': ArrowLeftIcon,
  'clock': ClockIcon,
  'file-text': FileTextIcon,
  'message-circle': MessageCircleIcon,
  'settings': SettingsIcon,
  'trending-up': TrendingUpIcon,
  'plus-circle': PlusCircleIcon,
  'user': UserIcon,
  'mail': MailIcon,
  'bell': BellIcon,
  'eye': EyeIcon,
  'send': SendIcon,
  'edit': EditIcon,
  'refresh-cw': RefreshCwIcon,
  'cpu': CpuIcon,
  'chevron-up': ChevronUpIcon,
  'chevron-down': ChevronDownIcon,
  'info': InfoIcon,
  'git-branch': GitBranchIcon,
  'code': CodeIcon,
  'layers': LayersIcon,
  'check-square': CheckSquareIcon,
  'briefcase': BriefcaseIcon,
  'star': StarIcon
};

const Icon: React.FC<IconProps> = ({ name, size = 24, color = 'currentColor', className = '', style }) => {
  const IconComponent = iconMap[name as keyof typeof iconMap];
  
  if (!IconComponent) {
    return <span className={className} style={style}>?</span>;
  }
  
  return <div style={style} className={className}><IconComponent size={size} color={color} /></div>;
};

export default Icon;