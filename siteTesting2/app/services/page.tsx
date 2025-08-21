import Link from 'next/link'
import { MainLayout } from '@/components/layout/main-layout'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ScrollAnimation, StaggeredAnimation, GradientText, AnimatedCounter } from '@/components/ui/scroll-animations'
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
  PriceTag,
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
  Surprised,
  Wink,
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
  FilePresentation,
  FileDatabase,
  FileJson,
  FileXml,
  FileCss,
  FileHtml,
  FileJs,
  FileTs,
  FileReact,
  FileVue,
  FileAngular,
  FileSvelte,
  FilePhp,
  FilePython,
  FileJava,
  FileCpp,
  FileC,
  FileSwift,
  FileKotlin,
  FileRust,
  FileGo,
  FileRuby,
  FileScala,
  FileR,
  FileMatlab,
  FileDocker,
  FileKubernetes,
  FileTerraform,
  FileAnsible,
  FileJenkins,
  FileGit,
  FileGithub,
  FileGitlab,
  FileBitbucket,
  FileNpm,
  FileYarn,
  FilePnpm,
  FileDocker as DockerIcon,
  FileKubernetes as K8sIcon,
  FileTerraform as TerraformIcon,
  FileAnsible as AnsibleIcon,
  FileJenkins as JenkinsIcon,
  FileGit as GitIcon,
  FileGithub as GithubIcon,
  FileGitlab as GitlabIcon,
  FileBitbucket as BitbucketIcon,
  FileNpm as NpmIcon,
  FileYarn as YarnIcon,
  FilePnpm as PnpmIcon,
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
            <ScrollAnimation animation="fade-in-down" delay={200}>
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-8">
                <Sparkles className="h-4 w-4 mr-2" />
                Choose Your Data Solution
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation animation="fade-in-up" delay={400}>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
                Transform Your
                <GradientText gradient="blue" className="block">Business Data</GradientText>
              </h1>
            </ScrollAnimation>
            
            <ScrollAnimation animation="fade-in-up" delay={600}>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                From foundational database setup to advanced AI automation, we provide comprehensive 
                data solutions that drive growth and efficiency for businesses of all sizes.
              </p>
            </ScrollAnimation>

            {/* Trust indicators */}
            <ScrollAnimation animation="fade-in-up" delay={800}>
              <div className="flex flex-wrap justify-center items-center gap-8 mt-12">
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
                  <span className="text-sm font-medium">
                    <AnimatedCounter end={500} suffix="+ Projects Delivered" />
                  </span>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Services Pricing Grid - SURFE Style */}
      <section className="py-20 bg-white relative">
        {/* Decorative wave */}
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-gray-50 to-transparent"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <ScrollAnimation animation="fade-in-up">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Choose the Perfect
                <GradientText gradient="blue" className="block">Service Tier</GradientText>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Each tier is designed to meet different business needs and growth stages
              </p>
            </div>
          </ScrollAnimation>

          {/* Pricing Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {SERVICE_TIERS.map((tier, index) => {
              const IconComponent = tier.icon
              
              return (
                <ScrollAnimation 
                  key={tier.id} 
                  animation="fade-in-up" 
                  delay={index * 200}
                  className="h-full"
                >
                  <Card 
                    className={`relative group hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 h-full ${
                      tier.popular ? 'ring-2 ring-purple-500 shadow-xl' : ''
                    }`}
                  >
                    {/* Popular Badge */}
                    {tier.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <Badge className="bg-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                          Most Popular
                        </Badge>
                      </div>
                    )}

                    <CardHeader className="text-center pb-6 pt-8">
                      {/* Service Icon */}
                      <div className="flex justify-center mb-6">
                        <div className={`w-20 h-20 bg-gradient-to-r ${tier.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                          <IconComponent className="h-10 w-10 text-white" />
                        </div>
                      </div>
                      
                      {/* Service Title */}
                      <CardTitle className="text-3xl mb-3 text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                        {tier.name}
                      </CardTitle>
                      
                      {/* Service Description */}
                      <CardDescription className="text-gray-600 leading-relaxed text-base">
                        {tier.description}
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent className="space-y-8">
                      {/* Pricing */}
                      <div className="text-center">
                        <div className="flex items-center justify-center space-x-2 mb-2">
                          <span className="text-4xl font-bold text-gray-900">{tier.price}</span>
                          <span className="text-gray-500">USD</span>
                        </div>
                        <p className="text-sm text-gray-500 mb-4">Project-based pricing</p>
                        <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                          <Clock className="h-4 w-4" />
                          <span>{tier.duration} timeline</span>
                        </div>
                      </div>

                      {/* Features List */}
                      <div className="space-y-4">
                        <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                          <Check className="h-5 w-5 text-green-500 mr-2" />
                          What's Included
                        </h4>
                        <div className="space-y-3">
                          {tier.features.map((feature, idx) => (
                            <div key={idx} className="flex items-start space-x-3">
                              <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                              <span className="text-sm text-gray-600 leading-relaxed">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Technologies */}
                      <div className="space-y-4">
                        <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                          <Zap className="h-5 w-5 text-blue-500 mr-2" />
                          Technologies
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {tier.technologies.map((tech, idx) => (
                            <Badge key={idx} className="bg-blue-100 text-blue-700 text-xs px-3 py-1">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Benefits */}
                      <div className="space-y-4">
                        <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                          <Star className="h-5 w-5 text-yellow-500 mr-2" />
                          Key Benefits
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {tier.benefits.map((benefit, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs border-green-200 text-green-700 px-3 py-1">
                              {benefit}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Target Audience */}
                      <div className="pt-4 border-t border-gray-100">
                        <div className="flex items-start space-x-3">
                          <Users className="h-5 w-5 text-purple-500 mt-0.5 flex-shrink-0" />
                          <div>
                            <h5 className="font-medium text-gray-900 text-sm mb-1">Perfect For</h5>
                            <p className="text-xs text-gray-600 leading-relaxed">
                              {tier.targetAudience}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* CTA Button */}
                      <div className="pt-6">
                        <Button 
                          className={`w-full py-4 text-lg font-semibold rounded-xl transition-all duration-300 ${
                            tier.popular 
                              ? 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white shadow-lg hover:shadow-xl' 
                              : 'bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white shadow-lg hover:shadow-xl'
                          }`}
                          asChild
                        >
                          <Link href="/contact">
                            Get Started
                            <ArrowRight className="ml-2 h-5 w-5" />
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </ScrollAnimation>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process Section - Enhanced */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation animation="fade-in-up">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-6">
                <Shield className="h-4 w-4 mr-2" />
                Our Process
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                How We
                <GradientText gradient="blue" className="block">Deliver Results</GradientText>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                We follow a proven, structured approach to ensure your project's success
              </p>
            </div>
          </ScrollAnimation>

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
              <ScrollAnimation key={index} animation="fade-in-up" delay={index * 150}>
                <Card className="card-surfe text-center group hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
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
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation animation="fade-in-up">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Additional
                <GradientText gradient="blue" className="block">Services</GradientText>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Specialized services to complement your data infrastructure
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.slice(0, 6).map((service, index) => {
              const IconComponent = iconMap[service.icon as keyof typeof iconMap] || Database
              
              return (
                <ScrollAnimation key={service.id} animation="fade-in-up" delay={index * 100}>
                  <Card className="card-surfe group hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                    <CardHeader className="text-center pb-6">
                      <div className="flex justify-center mb-6">
                        <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                          <IconComponent className="h-8 w-8 text-white" />
                        </div>
                      </div>
                      
                      <CardTitle className="text-2xl mb-3 text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                        {service.title}
                      </CardTitle>
                      
                      <CardDescription className="text-gray-600 leading-relaxed">
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent className="space-y-6">
                      <div className="space-y-3">
                        <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                          <Check className="h-5 w-5 text-green-500 mr-2" />
                          What's Included
                        </h4>
                        <div className="space-y-2">
                          {service.features.slice(0, 3).map((feature, idx) => (
                            <div key={idx} className="flex items-start space-x-3">
                              <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                              <span className="text-sm text-gray-600">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="pt-4">
                        <Button className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white shadow-lg hover:shadow-xl transition-all duration-300" asChild>
                          <Link href="/contact">
                            Learn More
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </ScrollAnimation>
              )
            })}
          </div>
        </div>
      </section>

      <CtaSection />
    </MainLayout>
  )
} 