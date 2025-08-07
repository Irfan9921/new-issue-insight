import { TrendingUp, Mail, Twitter, Linkedin, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'IPO Resources',
      links: [
        { label: 'Upcoming IPOs', href: '/upcoming' },
        { label: 'GMP Tracker', href: '/gmp' },
        { label: 'IPO Calendar', href: '/calendar' },
        { label: 'SME IPOs', href: '/sme' },
        { label: 'Post Listing Performance', href: '/post-listing' }
      ]
    },
    {
      title: 'Analysis & News',
      links: [
        { label: 'Market Analysis', href: '/analysis' },
        { label: 'IPO Reviews', href: '/reviews' },
        { label: 'Expert Opinions', href: '/opinions' },
        { label: 'Market News', href: '/news' },
        { label: 'Investment Guides', href: '/guides' }
      ]
    },
    {
      title: 'Tools & Services',
      links: [
        { label: 'IPO Alerts', href: '/alerts' },
        { label: 'Portfolio Tracker', href: '/portfolio' },
        { label: 'Subscription Status', href: '/subscription' },
        { label: 'Allotment Status', href: '/allotment' },
        { label: 'Forms & Documents', href: '/forms' }
      ]
    },
    {
      title: 'Company',
      links: [
        { label: 'About Us', href: '/about' },
        { label: 'Contact', href: '/contact' },
        { label: 'Privacy Policy', href: '/privacy' },
        { label: 'Terms of Service', href: '/terms' },
        { label: 'Disclaimer', href: '/disclaimer' }
      ]
    }
  ];

  return (
    <footer className="border-t bg-background">
      <div className="container py-12">
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded bg-gradient-primary">
                <TrendingUp className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                IPOTracker
              </span>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Your trusted source for IPO intelligence, market analysis, and investment insights.
            </p>
            <div className="flex space-x-2">
              <Button variant="ghost" size="icon">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Mail className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} IPOTracker. All rights reserved.
          </p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <span className="text-sm text-muted-foreground">
              Market data powered by NSE & BSE
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;