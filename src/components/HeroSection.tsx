import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, Calendar, DollarSign, Users } from 'lucide-react';
import heroImage from '@/assets/ipo-hero-bg.jpg';

const HeroSection = () => {
  const stats = [
    { icon: Calendar, label: 'Active IPOs', value: '12' },
    { icon: DollarSign, label: 'Total Value', value: '₹8,400 Cr' },
    { icon: TrendingUp, label: 'Success Rate', value: '78%' },
    { icon: Users, label: 'Subscribers', value: '50K+' }
  ];

  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="IPO Hero Background" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Content */}
      <div className="relative container py-20 lg:py-28">
        <div className="max-w-3xl">
          <Badge variant="secondary" className="mb-6">
            🚀 Live IPO Updates & GMP Tracking
          </Badge>
          
          <h1 className="text-4xl font-bold tracking-tight lg:text-6xl mb-6">
            Your Complete{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              IPO Intelligence
            </span>{' '}
            Hub
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
            Stay ahead with real-time IPO updates, grey market prices, expert analysis, 
            and comprehensive company insights. Never miss an investment opportunity again.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button size="lg" className="text-lg px-8">
              Explore Live IPOs
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8">
              View GMP Tracker
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-center space-x-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="text-lg font-semibold">{value}</div>
                  <div className="text-sm text-muted-foreground">{label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;