import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import IPOTable from '@/components/IPOTable';
import GMPTracker from '@/components/GMPTracker';
import NewsSection from '@/components/NewsSection';
import NewsletterSection from '@/components/NewsletterSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        
        {/* IPO Tables Section */}
        <section className="py-16">
          <div className="container space-y-12">
            <IPOTable title="Upcoming Mainboard IPOs" category="mainboard" />
            <IPOTable title="Active SME IPOs" category="sme" />
          </div>
        </section>

        <GMPTracker />
        <NewsSection />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
