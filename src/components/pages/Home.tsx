import { Link } from "@/lib/router";
import { ArrowRight, Cloud, Shield, Zap, Users, Database, Lock, Headset, Server, BarChart3, type LucideIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import WorldMap, { locationData } from "@/components/WorldMap";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext, type CarouselApi } from "@/components/ui/carousel";
import AIReadinessAssessment from "@/components/AIReadinessAssessment";
import { getImageSrc } from "@/lib/utils";
import heroImage from "@/assets/hero-infrastructure-beach.jpg";

// Service Card Component
const ServiceCard = ({
  title,
  description,
  image,
  icon: Icon,
  specs,
  link,
  animationDelay,
  position
}: {
  title: string;
  description: string;
  image: string;
  icon: LucideIcon;
  specs: {
    label: string;
    value: string;
  }[];
  link: string;
  animationDelay: string;
  position: 'left' | 'center' | 'right';
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    }, {
      threshold: 0.2
    });
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    return () => observer.disconnect();
  }, []);
  const positionClasses = {
    left: 'md:translate-x-0 md:translate-y-0',
    center: 'md:translate-x-0 md:translate-y-8',
    right: 'md:translate-x-0 md:translate-y-16'
  };
  const animationClasses = {
    left: 'md:animate-slide-in-left',
    center: 'md:animate-fade-in',
    right: 'md:animate-slide-in-right'
  };
  return <div ref={cardRef} className={`relative mb-12 md:mb-24 last:mb-0 transition-all duration-500 ${positionClasses[position]} ${isVisible ? animationClasses[position] : 'opacity-0'}`} style={{
    animationDelay
  }} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <div className={`relative group cursor-pointer transition-all duration-500 ${isHovered ? 'scale-[1.02] -translate-y-2' : ''}`}>
        {/* Animated gradient border */}
        <div className="absolute -inset-1 bg-gradient-to-r from-accent via-secondary to-desert-orange rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500" />
        
        {/* Card container */}
        <div className="relative bg-card rounded-2xl overflow-hidden shadow-sunset border border-border/50">
          {/* Image with gradient overlay */}
          <div className="relative h-64 md:h-80 overflow-hidden">
            <img src={image} alt={title} loading="lazy" width={800} height={480} className={`w-full h-full object-cover transition-transform duration-700 ${isHovered ? 'scale-110' : 'scale-100'}`} />
            <div className="absolute inset-0 bg-gradient-to-t from-card via-card/60 to-transparent" />
            
            {/* Floating icon */}
            <div className={`absolute top-6 right-6 p-4 rounded-full bg-accent/90 backdrop-blur-sm transition-all duration-500 ${isHovered ? 'animate-float scale-110' : ''}`}>
              <Icon className="w-8 h-8 text-accent-foreground" />
            </div>

            {/* Tech specs panel - slides up on hover */}
            <div className={`absolute bottom-0 left-0 right-0 bg-primary/95 backdrop-blur-md border-t border-accent/20 transition-all duration-500 ${isHovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
              <div className="grid grid-cols-3 gap-4 p-6">
                {specs.map((spec, idx) => <div key={idx} className="text-center">
                    <div className="text-2xl font-heading text-secondary mb-1">{spec.value}</div>
                    <div className="text-xs text-background/80">{spec.label}</div>
                  </div>)}
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-8">
            <h3 className="text-3xl md:text-4xl font-heading mb-4 group-hover:text-accent transition-colors">
              {title}
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              {description}
            </p>
            <Button variant="default" asChild className={`transition-all duration-300 ${isHovered ? 'shadow-glow' : ''}`}>
              <Link to={link}>
                Learn More
                <ArrowRight className={`ml-2 w-4 h-4 transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`} />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>;
};
const caseStudies = [{
  headline: "Global Satellite Operator Standardizes 30+ Edge Sites",
  clientType: "Global satellite communications provider",
  challenge: "Managing and standardizing infrastructure across dozens of geographically distributed uplink sites.",
  solution: "Designed and deployed a Broadcom VCF-based platform with centralized automation and observability.",
  results: ["Standardized operations across 30+ edge locations", "Reduced operational overhead for upgrades and patching", "Improved visibility across the global environment"]
}, {
  headline: "Proposal Automation Delivers ~$300K Annual ROI",
  clientType: "Global IT services provider",
  challenge: "Manual proposal creation slowed response times and consumed thousands of hours annually.",
  solution: "Implemented an AI-driven proposal automation proof of concept integrated into existing workflows.",
  results: ["~4,000 hours saved per year", "~$300K in annual cost savings", "Repeatable automation model for future expansion"]
}, {
  headline: "School District Modernizes UPS Infrastructure Across 300+ Data Closets",
  clientType: "K-12 school district",
  challenge: "Aging UPS infrastructure across 300+ data closets introduced risk to critical security systems during power disruptions.",
  solution: "Designed and deployed APC lithium-ion UPS systems with centralized monitoring across 37 campuses.",
  results: ["Standardized power infrastructure across 300+ data closets", "Centralized visibility into power health across 37 campuses", "Reduced maintenance with longer lifecycle lithium-ion technology"]
}, {
  headline: "Training Center Launches Day-One Ready with Zero On-Site IT",
  clientType: "Corporate training facility",
  challenge: "New facility needed full technology infrastructure with no local IT staff and a tight timeline.",
  solution: "Delivered turnkey technology deployment including networking, compute, wireless, AV, and security systems.",
  results: ["End-to-end design, install, and support handled remotely", "Complete technology stack deployed (compute, network, AV, security)", "Facility fully operational from day one"]
}];
const Home = () => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slideCount, setSlideCount] = useState(0);
  useEffect(() => {
    if (!carouselApi) return;
    setSlideCount(carouselApi.scrollSnapList().length);
    setCurrentSlide(carouselApi.selectedScrollSnap());
    carouselApi.on("select", () => {
      setCurrentSlide(carouselApi.selectedScrollSnap());
    });
  }, [carouselApi]);
  const features = [{
    icon: BarChart3,
    title: "AI Readiness & Data",
    description: "Assess your AI maturity, secure your data, and prepare for scalable automation and intelligence."
  }, {
    icon: Cloud,
    title: "Cloud Engineering",
    description: "Build and operate cloud environments that are clear, secure, and easy to manage."
  }, {
    icon: Shield,
    title: "Cybersecurity",
    description: "Enterprise-level security solutions that reduce risk without slowing people down."
  }, {
    icon: Server,
    title: "The Stack",
    description: "The core infrastructure that keeps organizations running."
  }, {
    icon: Headset,
    title: "Managed Services",
    description: "From planning to operations, our teams remain engaged and accountable every step of the way."
  }];
  const keyPoints = [{
    header: "We Get To Know You",
    text: "One partner that gets to know your business"
  }, {
    header: "We Talk Like Humans",
    text: "Clear language and honest guidance"
  }, {
    header: "We've Done This Before",
    text: "Senior experience involved from day one"
  }, {
    header: "We Make It Simple",
    text: "Technology that works together and simplifies"
  }];
  const proofPoints = ["Outperformed much larger competitors by staying close and moving faster", "Trusted by enterprise, SLED, healthcare, telecom, and global organizations", "Reduced complex workflows from days to minutes", "Known for reliability, transparency, and follow-through"];
  return <div className="min-h-screen">

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0" style={{
        backgroundImage: `url(${getImageSrc(heroImage)})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
          <div className="absolute inset-0 bg-gradient-to-b from-primary/90 via-primary/80 to-primary/90" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 pt-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="animate-fade-up">
              <h1 className="text-5xl md:text-6xl lg:text-8xl font-heading mb-6 leading-tight text-background">Peace of Mind.    <br />
                <span className="text-secondary">Powered By Technology.    </span>
              </h1>
              <p className="text-xl md:text-2xl lg:text-3xl mb-8 text-background/90 font-light">
                Zinfinity delivers integrated technology solutions for complex, modern environments.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button size="lg" variant="secondary" asChild className="text-lg px-8 py-6">
                  <Link to="/contact">
                    Talk to Us
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="text-lg px-8 py-6 bg-transparent border-2 border-background text-background hover:bg-background hover:text-primary">
                  <Link to="/solutions">
                    How We Help
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* What We Do Section */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-heading mb-6">
              What We Do
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">Zinfinity simplifies what others overcomplicate. Our services include:</p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8">
              {features.map((feature, index) => <Card key={index} className={`hover-lift shadow-card text-center lg:col-span-2 bg-primary text-primary-foreground border-white/30 ${index === 4 ? 'sm:col-span-2 sm:max-w-sm sm:mx-auto lg:max-w-none' : ''} ${index === 3 ? 'lg:col-start-2' : ''} ${index === 4 ? 'lg:col-start-4' : ''}`} style={{
              animationDelay: `${index * 100}ms`
            }}>
                  <CardHeader>
                    <div className="mx-auto mb-4 p-4 rounded-full bg-secondary/20 w-fit">
                      <feature.icon className="w-8 h-8 text-secondary" />
                    </div>
                    <CardTitle className="text-2xl tracking-widest uppercase text-primary-foreground">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base text-primary-foreground/80">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>)}
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-up mb-12">
          <h2 className="text-4xl md:text-5xl font-heading mb-6 text-background">
              What Makes Us Different
            </h2>
            <p className="text-xl text-background/80 leading-relaxed max-w-3xl mx-auto">
              Zinfinity was built as a response to how complicated and impersonal technology partnerships have become. Customers deserve clarity, honesty, and a partner who learns their business and stays involved.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-5 px-4 sm:px-0">
            {keyPoints.map((point, index) => <div key={index} className="flex flex-col items-center justify-start p-8 sm:p-6 rounded-xl bg-background text-foreground hover:bg-background/90 transition-colors text-center w-full sm:w-72 md:w-56 lg:w-52 border border-border/50">
                <span className="text-xl sm:text-base tracking-widest uppercase font-heading mb-4 sm:mb-3 text-accent">{point.header}</span>
                <span className="text-lg sm:text-sm">{point.text}</span>
              </div>)}
          </div>
        </div>
      </section>

      {/* Who We Work With Section */}
      <section className="py-32 bg-gradient-to-b from-muted/30 via-background to-muted/20 overflow-hidden relative">
        {/* Background tech grid */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: 'linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }} />
        
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading mb-6">
              Who We Work With
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-4">Zinfinity works with companies that operate at scale, manage complexity, and need a technology partner who understands real-world environments.</p>
            
          </div>

          <div className="max-w-6xl mx-auto">
            {/* Row 1: Two cards side by side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
              {/* Card 1: Enterprise Businesses */}
              <div className="p-8 rounded-xl bg-card border border-border/50 shadow-card h-full">
                <h3 className="text-2xl font-heading mb-2 tracking-widest uppercase">
                  Enterprise Businesses
                </h3>
                <p className="text-muted-foreground mb-4">
                  Support for mid-market to large enterprises
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" />
                    <span>Large, complex environments</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" />
                    <span>Personal touch at scale</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" />
                    <span>Enterprise-level security and operational expectations</span>
                  </li>
                </ul>
              </div>

              {/* Card 2: Industry Experience */}
              <div className="p-8 rounded-xl bg-card border border-border/50 shadow-card h-full">
                <h3 className="text-2xl font-heading mb-2 tracking-widest uppercase">
                  Industry Experience
                </h3>
                <p className="text-muted-foreground mb-4">
                  Experience across regulated and operationally complex industries
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" />
                    <span>Banking and Financial Services</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" />
                    <span>Healthcare</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" />
                    <span>Energy and Utilities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" />
                    <span>Transportation and Logistics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" />
                    <span>Manufacturing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" />
                    <span>Education</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Row 2: Full-width Global Organizations Map Block */}
            <div className="p-8 rounded-xl bg-card border border-border/50 shadow-card">
              {/* Header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-heading mb-2 tracking-widest uppercase">
                  Global Organizations
                </h3>
                <p className="text-muted-foreground">
                  Support across the globe with in-region presence and partner-enabled delivery
                </p>
              </div>

              {/* World Map SVG */}
              <div className="w-full max-w-4xl mx-auto mb-8">
                <WorldMap />
              </div>

              {/* Location chips */}
              <div className="flex flex-wrap justify-center gap-3">
                {locationData.map(loc => (
                  <div key={loc.country} className="group relative">
                    <span className="px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-semibold text-foreground cursor-default">
                      {loc.name}
                    </span>
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block z-20">
                      <div className="bg-card text-card-foreground px-4 py-2 rounded-lg shadow-xl border border-border whitespace-nowrap text-xs">
                        <div className="font-semibold text-foreground mb-0.5">{loc.name}</div>
                        <div className="text-muted-foreground">{loc.address}</div>
                      </div>
                      <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1">
                        <div className="border-6 border-transparent border-t-card" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Proven in the Real World Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-heading mb-6">
              Proven in the Real World
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              See how Zinfinity helps organizations simplify complex environments and deliver real, measurable results.
            </p>
          </div>

          {/* Carousel */}
          <div className="relative max-w-5xl mx-auto px-12">
            <Carousel opts={{
            align: "start",
            loop: false
          }} setApi={setCarouselApi} className="w-full">
              <CarouselContent className="-ml-4">
                {caseStudies.map((study, index) => <CarouselItem key={index} className="pl-4 md:basis-1/2">
                    {/* Case Study Card */}
                    <div className="h-full p-6 rounded-xl bg-card border border-border/50 shadow-card flex flex-col">
                      {/* Headline */}
                      <h3 className="text-xl font-heading mb-4">{study.headline}</h3>
                      
                      {/* Challenge */}
                      <div className="mb-3">
                        <span className="text-sm font-medium text-foreground">Challenge:</span>
                        <p className="text-sm text-muted-foreground">{study.challenge}</p>
                      </div>
                      
                      {/* Solution */}
                      <div className="mb-4">
                        <span className="text-sm font-medium text-foreground">What Zinfinity Did:</span>
                        <p className="text-sm text-muted-foreground">{study.solution}</p>
                      </div>
                      
                      {/* Results */}
                      <div className="mb-4 flex-1">
                        <span className="text-sm font-medium text-foreground">Results:</span>
                        <ul className="mt-2 space-y-1">
                          {study.results.map((result, idx) => <li key={idx} className="flex items-start gap-2 text-sm">
                              <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-1.5 flex-shrink-0" />
                              <span className="text-foreground">{result}</span>
                            </li>)}
                        </ul>
                      </div>
                    </div>
                  </CarouselItem>)}
              </CarouselContent>
              <CarouselPrevious className="left-0 -translate-x-full" />
              <CarouselNext className="right-0 translate-x-full" />
            </Carousel>

            {/* Progress Indicator */}
            <div className="flex justify-center gap-2 mt-6">
              {Array.from({
              length: slideCount
            }).map((_, index) => <button key={index} onClick={() => carouselApi?.scrollTo(index)} className={`w-2 h-2 rounded-full transition-colors ${index === currentSlide ? 'bg-accent' : 'bg-muted-foreground/30'}`} aria-label={`Go to slide ${index + 1}`} />)}
            </div>
          </div>

          {/* View All Link */}
          <div className="text-center mt-8">
            <Link to="/resources" className="text-accent hover:text-accent/80 font-medium inline-flex items-center gap-2">
              View all case studies
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden" style={{
      background: 'linear-gradient(to right, hsl(var(--accent)), hsl(var(--desert-orange)), hsl(var(--secondary)))'
    }}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 50px, rgba(255,255,255,.05) 50px, rgba(255,255,255,.05) 51px)'
        }} />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading text-accent-foreground mb-6">
            Ready for peace of mind?  
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild className="text-lg px-8 py-6">
              <Link to="/contact" className="bg-primary-foreground">
                Talk To Us
                
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="text-lg px-8 py-6 bg-transparent border-accent-foreground text-accent-foreground hover:bg-accent-foreground hover:text-primary">
              <Link to="/solutions">
                How We Help
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <AIReadinessAssessment />
    </div>;
};
export default Home;