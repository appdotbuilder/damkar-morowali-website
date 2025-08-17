import { cn } from '@/lib/utils';
import { type LucideProps } from 'lucide-react';
import { 
    HelpCircle, LayoutGrid, Folder, BookOpen, Phone, Mail, MessageCircle, 
    Eye, Target, Check, Flame, Users, GraduationCap, ShieldCheck, 
    FileText, Lightbulb, Camera, MapPin, Building, Map, Calendar, 
    PhoneCall, Share2, Clock, Info, Send, Loader, Zap, Award, Heart, 
    Shield, Image, Video, ZoomIn, Play, AlertTriangle, User, Search,
    Menu, Settings, LogOut
} from 'lucide-react';

interface IconProps extends Omit<LucideProps, 'ref'> {
    name: string;
}

const iconMap: Record<string, React.ComponentType<LucideProps>> = {
    'help-circle': HelpCircle,
    'layout-grid': LayoutGrid,
    'folder': Folder,
    'book-open': BookOpen,
    'phone': Phone,
    'mail': Mail,
    'message-circle': MessageCircle,
    'eye': Eye,
    'target': Target,
    'check': Check,
    'flame': Flame,
    'users': Users,
    'graduation-cap': GraduationCap,
    'shield-check': ShieldCheck,
    'file-text': FileText,
    'lightbulb': Lightbulb,
    'camera': Camera,
    'map-pin': MapPin,
    'building': Building,
    'map': Map,
    'calendar': Calendar,
    'phone-call': PhoneCall,
    'share-2': Share2,
    'clock': Clock,
    'info': Info,
    'send': Send,
    'loader': Loader,
    'zap': Zap,
    'award': Award,
    'heart': Heart,
    'shield': Shield,
    'image': Image,
    'video': Video,
    'zoom-in': ZoomIn,
    'play': Play,
    'alert-triangle': AlertTriangle,
    'user': User,
    'search': Search,
    'menu': Menu,
    'settings': Settings,
    'log-out': LogOut,
};

export function Icon({ name, className, ...props }: IconProps) {
    const IconComponent = iconMap[name] || HelpCircle;
    
    return <IconComponent className={cn('h-4 w-4', className)} {...props} />;
}