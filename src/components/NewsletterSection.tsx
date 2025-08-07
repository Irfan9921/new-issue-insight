import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Mail, Check, Bell, TrendingUp } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const { toast } = useToast();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    // Simulate subscription
    setIsSubscribed(true);
    setEmail('');
    
    toast({
      title: "Successfully subscribed!",
      description: "You'll receive IPO alerts and market updates in your inbox.",
    });

    // Reset after 3 seconds for demo
    setTimeout(() => setIsSubscribed(false), 3000);
  };

  const features = [
    {
      icon: Bell,
      title: 'IPO Alerts',
      description: 'Get notified about new IPO launches and important dates'
    },
    {
      icon: TrendingUp,
      title: 'GMP Updates',
      description: 'Daily grey market premium changes and analysis'
    },
    {
      icon: Mail,
      title: 'Expert Analysis',
      description: 'Weekly market insights and investment recommendations'
    }
  ];

  return (
    <section className="py-16 bg-gradient-hero">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <Card className="overflow-hidden shadow-premium">
            <CardContent className="p-8 lg:p-12">
              <div className="text-center mb-8">
                <Badge variant="secondary" className="mb-4">
                  📧 Stay Updated
                </Badge>
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                  Never Miss an{' '}
                  <span className="bg-gradient-primary bg-clip-text text-transparent">
                    IPO Opportunity
                  </span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Join 50,000+ investors who rely on our newsletter for timely IPO updates, 
                  GMP tracking, and expert market analysis.
                </p>
              </div>

              {/* Features */}
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                {features.map(({ icon: Icon, title, description }) => (
                  <div key={title} className="text-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mx-auto mb-3">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">{title}</h3>
                    <p className="text-sm text-muted-foreground">{description}</p>
                  </div>
                ))}
              </div>

              {/* Subscription Form */}
              <div className="max-w-md mx-auto">
                {!isSubscribed ? (
                  <form onSubmit={handleSubscribe} className="flex gap-3">
                    <Input
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="flex-1"
                      required
                    />
                    <Button type="submit" size="lg">
                      Subscribe
                    </Button>
                  </form>
                ) : (
                  <div className="flex items-center justify-center space-x-2 text-success">
                    <Check className="h-5 w-5" />
                    <span className="font-medium">Successfully subscribed!</span>
                  </div>
                )}
                
                <p className="text-xs text-muted-foreground text-center mt-3">
                  Free newsletter • No spam • Unsubscribe anytime
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;