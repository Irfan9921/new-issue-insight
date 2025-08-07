import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { TrendingUp, TrendingDown, Activity, RefreshCw } from 'lucide-react';

interface GMPData {
  id: string;
  company: string;
  currentGMP: number;
  gmpChange: number;
  issuePrice: number;
  expectedListing: number;
  lastUpdated: string;
  volume: string;
}

const mockGMPData: GMPData[] = [
  {
    id: '1',
    company: 'NSDL',
    currentGMP: 120,
    gmpChange: 5,
    issuePrice: 800,
    expectedListing: 920,
    lastUpdated: '2 min ago',
    volume: 'High'
  },
  {
    id: '2',
    company: 'Knowledge Realty Trust',
    currentGMP: 15,
    gmpChange: -2,
    issuePrice: 100,
    expectedListing: 115,
    lastUpdated: '5 min ago',
    volume: 'Medium'
  },
  {
    id: '3',
    company: 'Highway Infrastructure',
    currentGMP: 8,
    gmpChange: 3,
    issuePrice: 70,
    expectedListing: 78,
    lastUpdated: '8 min ago',
    volume: 'Low'
  }
];

const GMPTracker = () => {
  const getChangeIndicator = (change: number) => {
    if (change > 0) {
      return (
        <div className="flex items-center text-success">
          <TrendingUp className="h-4 w-4 mr-1" />
          <span>+₹{change}</span>
        </div>
      );
    } else if (change < 0) {
      return (
        <div className="flex items-center text-destructive">
          <TrendingDown className="h-4 w-4 mr-1" />
          <span>-₹{Math.abs(change)}</span>
        </div>
      );
    } else {
      return (
        <div className="flex items-center text-muted-foreground">
          <Activity className="h-4 w-4 mr-1" />
          <span>₹0</span>
        </div>
      );
    }
  };

  const getVolumeColor = (volume: string) => {
    switch (volume.toLowerCase()) {
      case 'high':
        return 'bg-success text-success-foreground';
      case 'medium':
        return 'bg-warning text-warning-foreground';
      case 'low':
        return 'bg-muted text-muted-foreground';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <section className="py-16 bg-muted/30">
      <div className="container">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold">Grey Market Premium (GMP) Live</h2>
            <p className="text-muted-foreground mt-2">
              Real-time grey market prices for upcoming IPOs
            </p>
          </div>
          <Button variant="outline" size="sm">
            <RefreshCw className="h-4 w-4 mr-2" />
            Refresh
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {mockGMPData.map((stock) => (
            <Card key={stock.id} className="group hover:shadow-premium transition-all duration-300">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">{stock.company}</CardTitle>
                  <Badge className={getVolumeColor(stock.volume)}>
                    {stock.volume}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* Current GMP */}
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Current GMP</span>
                    <div className="text-right">
                      <div className="text-lg font-bold">₹{stock.currentGMP}</div>
                      {getChangeIndicator(stock.gmpChange)}
                    </div>
                  </div>

                  {/* Issue Price */}
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Issue Price</span>
                    <span className="font-medium">₹{stock.issuePrice}</span>
                  </div>

                  {/* Expected Listing */}
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Expected Listing</span>
                    <span className="font-medium text-primary">₹{stock.expectedListing}</span>
                  </div>

                  {/* Expected Gain */}
                  <div className="flex items-center justify-between p-3 bg-gradient-card rounded-lg">
                    <span className="text-sm font-medium">Expected Gain</span>
                    <div className="text-right">
                      <div className="font-bold text-success">
                        {((stock.expectedListing - stock.issuePrice) / stock.issuePrice * 100).toFixed(1)}%
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Updated {stock.lastUpdated}
                      </div>
                    </div>
                  </div>
                </div>

                <Button variant="outline" className="w-full mt-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  View Details
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Button size="lg">
            View Complete GMP List
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GMPTracker;