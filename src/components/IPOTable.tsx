import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { TrendingUp, TrendingDown, Calendar, ExternalLink } from 'lucide-react';

interface IPOData {
  id: string;
  company: string;
  openDate: string;
  closeDate: string;
  price: string;
  gmp: number;
  gmpPercentage: number;
  status: 'open' | 'upcoming' | 'closed';
  category: 'mainboard' | 'sme';
}

const mockIPOData: IPOData[] = [
  {
    id: '1',
    company: 'Knowledge Realty Trust',
    openDate: '05-Aug-2025',
    closeDate: '07-Aug-2025',
    price: '₹100',
    gmp: 15,
    gmpPercentage: 15.0,
    status: 'upcoming',
    category: 'mainboard'
  },
  {
    id: '2',
    company: 'Highway Infrastructure',
    openDate: '05-Aug-2025',
    closeDate: '07-Aug-2025',
    price: '₹70',
    gmp: 8,
    gmpPercentage: 11.4,
    status: 'upcoming',
    category: 'mainboard'
  },
  {
    id: '3',
    company: 'NSDL',
    openDate: '30-July-2025',
    closeDate: '01-Aug-2025',
    price: '₹800',
    gmp: 120,
    gmpPercentage: 15.0,
    status: 'open',
    category: 'mainboard'
  },
  {
    id: '4',
    company: 'M&B Engineering',
    openDate: '30-July-2025',
    closeDate: '01-Aug-2025',
    price: '₹385',
    gmp: -10,
    gmpPercentage: -2.6,
    status: 'open',
    category: 'mainboard'
  }
];

const getStatusBadge = (status: string) => {
  switch (status) {
    case 'open':
      return <Badge className="bg-success text-success-foreground">Open</Badge>;
    case 'upcoming':
      return <Badge variant="secondary">Upcoming</Badge>;
    case 'closed':
      return <Badge variant="outline">Closed</Badge>;
    default:
      return <Badge variant="outline">{status}</Badge>;
  }
};

const getGMPDisplay = (gmp: number, percentage: number) => {
  const isPositive = gmp >= 0;
  const Icon = isPositive ? TrendingUp : TrendingDown;
  const colorClass = isPositive ? 'text-success' : 'text-destructive';
  
  return (
    <div className={`flex items-center space-x-1 ${colorClass}`}>
      <Icon className="h-4 w-4" />
      <span className="font-medium">₹{Math.abs(gmp)}</span>
      <span className="text-sm">({percentage > 0 ? '+' : ''}{percentage}%)</span>
    </div>
  );
};

interface IPOTableProps {
  title: string;
  category?: 'mainboard' | 'sme';
}

const IPOTable = ({ title, category }: IPOTableProps) => {
  const filteredData = category 
    ? mockIPOData.filter(ipo => ipo.category === category)
    : mockIPOData;

  return (
    <Card className="overflow-hidden">
      <CardHeader className="bg-gradient-card">
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center space-x-2">
            <Calendar className="h-5 w-5 text-primary" />
            <span>{title}</span>
          </CardTitle>
          <Button variant="outline" size="sm">
            View All
            <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Company</TableHead>
                <TableHead>Open Date</TableHead>
                <TableHead>Close Date</TableHead>
                <TableHead>Price Range</TableHead>
                <TableHead>GMP</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredData.map((ipo) => (
                <TableRow key={ipo.id} className="hover:bg-muted/50 transition-colors">
                  <TableCell className="font-medium">
                    <div>
                      <div className="font-semibold">{ipo.company}</div>
                      <div className="text-sm text-muted-foreground capitalize">
                        {ipo.category} IPO
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>{ipo.openDate}</TableCell>
                  <TableCell>{ipo.closeDate}</TableCell>
                  <TableCell className="font-medium">{ipo.price}</TableCell>
                  <TableCell>
                    {getGMPDisplay(ipo.gmp, ipo.gmpPercentage)}
                  </TableCell>
                  <TableCell>
                    {getStatusBadge(ipo.status)}
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm">
                      View Details
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
};

export default IPOTable;