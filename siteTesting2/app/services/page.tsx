import Link from 'next/link'
import { MainLayout } from '@/components/layout/main-layout'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { 
  Database, 
  TrendingUp, 
  Bot, 
  BarChart3, 
  Globe, 
  Megaphone, 
  Workflow, 
  BarChart,
  ArrowRight,
  Check,
  Users,
  Target,
  Sparkles,
  Clock,
  Star,
  Zap,
  Shield,
  BarChart3 as Analytics,
  ChevronRight,
  Play,
  Award,
  Lightbulb,
  Rocket,
  Settings,
  Cpu,
  Cloud,
  Lock,
  Eye,
  BarChart4,
  PieChart,
  Activity,
  GitBranch,
  Code,
  Palette,
  Smartphone,
  Monitor,
  Server,
  Wifi,
  Database as DatabaseIcon,
  Brain,
  Network,
  FileText,
  Calendar,
  MessageSquare,
  Phone,
  Mail,
  MapPin,
  Globe2,
  Shield as SecurityIcon,
  Zap as LightningIcon,
  RefreshCw,
  Layers,
  Compass,
  Target as TargetIcon,
  TrendingUp as GrowthIcon,
  Users as TeamIcon,
  Building,
  Briefcase,
  GraduationCap,
  Heart,
  ThumbsUp,
  Award as QualityIcon,
  Clock as TimeIcon,
  DollarSign,
  Percent,
  ArrowUpRight,
  CheckCircle,
  AlertCircle,
  Info,
  HelpCircle,
  ExternalLink,
  Download,
  Upload,
  Share2,
  Copy,
  Edit,
  Trash2,
  Plus,
  Minus,
  X,
  Search,
  Filter,
  SortAsc,
  SortDesc,
  MoreHorizontal,
  MoreVertical,
  Grid,
  List,
  Maximize,
  Minimize,
  RotateCcw,
  RotateCw,
  ZoomIn,
  ZoomOut,
  Move,
  Crop,
  Type,
  Image,
  Video,
  Music,
  File,
  Folder,
  FolderOpen,
  Save,
  Printer,
  Camera,
  Mic,
  Headphones,
  Volume2,
  VolumeX,
  Volume1,
  Bell,
  BellOff,
  Settings as SettingsIcon,
  User,
  UserPlus,
  UserMinus,
  UserCheck,
  UserX,
  Users as UsersIcon,
  UserCog,
  UserCheck as UserVerified,
  UserX as UserBlocked,
  Mail as EmailIcon,
  MailOpen,
  MailCheck,
  MailWarning,
  MailX,
  Inbox,
  Send,
  Archive,
  ArchiveRestore,
  Trash,
  Trash2 as DeleteIcon,
  Home,
  Home as HouseIcon,
  Building2,
  Store,
  ShoppingCart,
  ShoppingBag,
  CreditCard,
  Wallet,
  Receipt,
  Tag,
  Tags,
  Gift,
  Package,
  Truck,
  Car,
  Bike,
  Plane,
  Train,
  Bus,
  Ship,
  Navigation,
  Map,
  MapPin as LocationIcon,
  Navigation2,
  Compass as CompassIcon,
  Globe as WorldIcon,
  Flag,
  Award as TrophyIcon,
  Medal,
  Crown,
  Star as StarIcon,
  Heart as HeartIcon,
  ThumbsUp as LikeIcon,
  ThumbsDown,
  Smile,
  Frown,
  Meh,
  Laugh,
  Angry,
  Eye as ViewIcon,
  EyeOff,
  Lock as LockIcon,
  Unlock,
  Key,
  Shield as ProtectionIcon,
  AlertTriangle,
  AlertCircle as WarningIcon,
  Info as InfoIcon,
  HelpCircle as HelpIcon,
  CheckCircle as SuccessIcon,
  XCircle,
  MinusCircle,
  PlusCircle,
  Circle,
  Square,
  Triangle,
  Hexagon,
  Octagon,
  Diamond,
  Heart as LoveIcon,
  Star as FavoriteIcon,
  Bookmark,
  BookmarkPlus,
  BookmarkMinus,
  BookOpen,
  Book,
  FileText as DocumentIcon,
  File as FileIcon,
  FilePlus,
  FileMinus,
  FileX,
  FileCheck,
  FileEdit,
  FileSearch,
  FileCode,
  FileImage,
  FileVideo,
  FileAudio,
  FileArchive,
  FileSpreadsheet,
  FileJson,
} from 'lucide-react'
import { SERVICES } from '@/data/constants'
import { CtaSection } from '@/components/sections/cta-section'
import { Metadata } from 'next'

const iconMap = {
  database: Database,
  'trending-up': TrendingUp,
  bot: Bot,
  'bar-chart': BarChart3,
  globe: Globe,
  megaphone: Megaphone,
  workflow: Workflow,
  analytics: BarChart,
}

// Service tiers with pricing-style layout
const SERVICE_TIERS = [
  {
    id: 'starter',
    name: 'Starter',
    description: 'Perfect for small businesses getting started with data',
    price: '$2,999',
    duration: '4-6 weeks',
    popular: false,
    features: [
      'Database setup & optimization',
      'Basic analytics dashboard',
      'Data migration support',
      '2 weeks of post-launch support',
      'Documentation & training',
      'Performance monitoring setup',
      'Security best practices',
      'Backup & recovery plan'
    ],
    technologies: ['PostgreSQL', 'Redis', 'Basic Analytics'],
    benefits: ['Fast Setup', 'Cost Effective', 'Scalable'],
    targetAudience: 'Small businesses and startups',
    icon: Database,
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200'
  },
  {
    id: 'professional',
    name: 'Professional',
    description: 'Comprehensive data solutions for growing companies',
    price: '$7,999',
    duration: '8-12 weeks',
    popular: true,
    features: [
      'Advanced database architecture',
      'Real-time analytics platform',
      'AI/ML model integration',
      'Custom dashboard development',
      'API development & integration',
      'Data pipeline automation',
      'Advanced security implementation',
      '4 weeks of post-launch support',
      'Performance optimization',
      'Team training & workshops',
      'Ongoing maintenance plan',
      '24/7 monitoring setup'
    ],
    technologies: ['PostgreSQL', 'Redis', 'MongoDB', 'Kafka', 'TensorFlow', 'React'],
    benefits: ['Advanced Features', 'AI Integration', 'Full Support'],
    targetAudience: 'Growing companies and mid-size businesses',
    icon: Brain,
    color: 'from-purple-500 to-pink-500',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-200'
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    description: 'Enterprise-grade data infrastructure and AI solutions',
    price: '$19,999',
    duration: '12-16 weeks',
    popular: false,
    features: [
      'Enterprise data architecture',
      'Multi-cloud infrastructure',
      'Advanced AI/ML models',
      'Custom analytics platform',
      'Real-time data processing',
      'Advanced security & compliance',
      'Scalable microservices',
      'Custom integrations',
      'Advanced monitoring & alerting',
      'Disaster recovery setup',
      '8 weeks of post-launch support',
      'Dedicated support team',
      'Custom training programs',
      'Performance optimization',
      'Security audits',
      'Compliance documentation'
    ],
    technologies: ['PostgreSQL', 'Redis', 'MongoDB', 'Kafka', 'Kubernetes', 'TensorFlow', 'React', 'Node.js'],
    benefits: ['Enterprise Grade', 'Full Customization', 'Dedicated Support'],
    targetAudience: 'Large enterprises and corporations',
    icon: Rocket,
    color: 'from-orange-500 to-red-500',
    bgColor: 'bg-orange-50',
    borderColor: 'border-orange-200'
  }
]

export const metadata: Metadata = {
  title: 'Our Services - Data Consulting Agency',
  description: 'Comprehensive data consulting services from database setup to AI automation. Transform your business with our expert data solutions and unlock your data\'s full potential.',
  openGraph: {
    title: 'Our Services - Data Consulting Agency',
    description: 'Comprehensive data consulting services from database setup to AI automation.',
  },
}

export default function ServicesPage() {
  return (
    <MainLayout>


      {/* Hero Section - SURFE Style */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-300/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-300/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-300/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-8 opacity-0 animate-fade-in-up" style={{ animationFillMode: 'forwards' }}>
              <Sparkles className="h-4 w-4 mr-2" />
              Choose Your Data Solution
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
              Transform Your
              <span className="block bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Business Data</span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed opacity-0 animate-fade-in-up" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
              From foundational database setup to advanced AI automation, we provide comprehensive 
              data solutions that drive growth and efficiency for businesses of all sizes.
            </p>

            {/* Trust indicators */}
            <div className="flex flex-wrap justify-center items-center gap-8 mt-12 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
              <div className="flex items-center space-x-2 text-gray-600">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-sm font-medium">ISO 27001 Certified</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <Shield className="h-5 w-5 text-blue-500" />
                <span className="text-sm font-medium">GDPR Compliant</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <Users className="h-5 w-5 text-purple-500" />
                <span className="text-sm font-medium">500+ Projects Delivered</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid - All 8 Services with Compact Cards */}
      <section className="py-20 bg-white relative">
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-gray-50 to-transparent"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our
              <span className="block bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive solutions tailored to your business needs
            </p>
          </div>

          {/* All 8 Services in Compact Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {SERVICES.map((service, index) => {
              const IconComponent = iconMap[service.icon as keyof typeof iconMap] || Database
              const colors = [
                'from-blue-500 to-cyan-500',
                'from-purple-500 to-pink-500',
                'from-orange-500 to-red-500',
                'from-green-500 to-emerald-500',
                'from-indigo-500 to-blue-500',
                'from-pink-500 to-rose-500',
                'from-yellow-500 to-orange-500',
                'from-teal-500 to-cyan-500'
              ]

              return (
                <Card key={service.id} className="relative group bg-white rounded-2xl border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full" style={{ animationDelay: `${index * 100}ms` }}>
                  <CardHeader className="text-center pb-4 pt-6">
                    <div className="flex justify-center mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${colors[index % colors.length]} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md`}>
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <CardTitle className="text-lg font-semibold mb-2 text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-sm text-gray-600 leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="flex-1 flex flex-col justify-end">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button 
                          variant="outline"
                          className="w-full border-black text-black hover:bg-gray-50 hover:text-black rounded-lg transition-all duration-300"
                        >
                          Learn More
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                        <DialogHeader>
                          <div className="flex items-center space-x-3 mb-4">
                            <div className={`w-12 h-12 bg-gradient-to-r ${colors[index % colors.length]} rounded-xl flex items-center justify-center`}>
                              <IconComponent className="h-6 w-6 text-white" />
                            </div>
                            <div>
                              <DialogTitle className="text-2xl text-left">{service.title}</DialogTitle>
                              <DialogDescription className="text-lg text-left">
                                {service.description}
                              </DialogDescription>
                            </div>
                          </div>
                        </DialogHeader>
                        
                        <div className="space-y-6 mt-6">
                          {/* Full Description */}
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2 text-lg">Overview</h4>
                            <p className="text-gray-700 leading-relaxed">{service.fullDescription}</p>
                          </div>

                          {/* Features */}
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-3 text-lg flex items-center">
                              <Check className="h-5 w-5 text-green-500 mr-2" />
                              What's Included
                            </h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                              {service.features.map((feature: string, idx: number) => (
                                <div key={idx} className="flex items-start space-x-3">
                                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                                  <span className="text-sm text-gray-700 leading-relaxed">{feature}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Target Audience */}
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2 text-lg flex items-center">
                              <Target className="h-5 w-5 text-blue-500 mr-2" />
                              Target Audience
                            </h4>
                            <p className="text-gray-700 leading-relaxed">{service.targetAudience}</p>
                          </div>

                          {/* Key Benefits */}
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-3 text-lg flex items-center">
                              <Star className="h-5 w-5 text-yellow-500 mr-2" />
                              Key Benefits
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {service.benefits.map((benefit: string, idx: number) => (
                                <Badge key={idx} variant="outline" className="text-sm border-green-200 text-green-700 px-3 py-1">
                                  {benefit}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          {/* Technologies */}
                          {service.technologies && service.technologies.length > 0 && (
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-3 text-lg flex items-center">
                                <Zap className="h-5 w-5 text-blue-500 mr-2" />
                                Technologies & Tools
                              </h4>
                              <div className="flex flex-wrap gap-2">
                                {service.technologies.map((tech: string, idx: number) => (
                                  <Badge key={idx} className="bg-blue-100 text-blue-700 text-sm px-3 py-1">
                                    {tech}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* CTA */}
                          <div className="pt-4 border-t border-gray-200">
                            <Button className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white shadow-lg hover:shadow-xl transition-all duration-300" asChild>
                              <Link href="/contact">
                                Get Started with {service.title}
                                <ArrowRight className="ml-2 h-4 w-4" />
                              </Link>
                            </Button>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process Section - Enhanced */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-6">
              <Shield className="h-4 w-4 mr-2" />
              Our Process
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              How We
              <span className="block bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Deliver Results</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We follow a proven, structured approach to ensure your project's success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Discovery',
                description: 'We assess your current setup and understand your goals',
                icon: Analytics,
                color: 'from-blue-500 to-cyan-500'
              },
              {
                step: '02',
                title: 'Strategy',
                description: 'We create a tailored plan and roadmap for your project',
                icon: Target,
                color: 'from-purple-500 to-pink-500'
              },
              {
                step: '03',
                title: 'Implementation',
                description: 'We execute the solution with regular updates and feedback',
                icon: Zap,
                color: 'from-orange-500 to-red-500'
              },
              {
                step: '04',
                title: 'Optimization',
                description: 'We monitor, refine, and provide ongoing support',
                icon: TrendingUp,
                color: 'from-green-500 to-emerald-500'
              }
            ].map((phase, index) => (
              <Card key={index} className="card-surfe text-center group hover:shadow-2xl hover:-translate-y-2 transition-all duration-500" style={{ animationDelay: `${index * 150}ms` }}>
                <CardContent className="p-8">
                  <div className={`w-16 h-16 bg-gradient-to-r ${phase.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <phase.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-blue-600 mb-4">{phase.step}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {phase.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {phase.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </MainLayout>
  )
} 