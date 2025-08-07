import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Clock, User, TrendingUp, ArrowRight } from 'lucide-react';

interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  publishedAt: string;
  category: string;
  readTime: string;
  trending?: boolean;
}

const mockNews: NewsItem[] = [
  {
    id: '1',
    title: 'NSDL IPO Opens Today: Should You Subscribe? Complete Analysis',
    excerpt: 'National Securities Depository Limited (NSDL) IPO has opened for subscription today. Here\'s our detailed analysis of the company\'s financials and growth prospects.',
    author: 'Rahul Sharma',
    publishedAt: '2 hours ago',
    category: 'IPO Analysis',
    readTime: '5 min read',
    trending: true
  },
  {
    id: '2', 
    title: 'Grey Market Premium Trends: What Investors Should Know',
    excerpt: 'Understanding GMP fluctuations and their impact on IPO listing performance. Key insights from recent market data.',
    author: 'Priya Patel',
    publishedAt: '4 hours ago',
    category: 'Market Trends',
    readTime: '3 min read'
  },
  {
    id: '3',
    title: 'Upcoming IPO Calendar: August 2025 Edition',
    excerpt: 'Complete list of IPOs expected to launch in August 2025, including company details, price bands, and expert ratings.',
    author: 'Amit Kumar',
    publishedAt: '6 hours ago',
    category: 'IPO Calendar',
    readTime: '7 min read'
  },
  {
    id: '4',
    title: 'SME IPO Performance Review: July 2025 Results',
    excerpt: 'Analyzing the performance of SME IPOs that listed in July 2025 and key lessons for future investments.',
    author: 'Sneha Agarwal',
    publishedAt: '1 day ago',
    category: 'SME Analysis',
    readTime: '4 min read'
  }
];

const NewsSection = () => {
  return (
    <section className="py-16">
      <div className="container">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold">Latest IPO News & Analysis</h2>
            <p className="text-muted-foreground mt-2">
              Stay updated with expert insights and market analysis
            </p>
          </div>
          <Button variant="outline">
            View All News
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Featured Article */}
          <Card className="lg:row-span-2 overflow-hidden group hover:shadow-premium transition-all duration-300">
            <div className="relative">
              <div className="h-48 bg-gradient-primary" />
              {mockNews[0].trending && (
                <Badge className="absolute top-4 left-4 bg-warning text-warning-foreground">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  Trending
                </Badge>
              )}
            </div>
            <CardContent className="p-6">
              <Badge variant="secondary" className="mb-3">
                {mockNews[0].category}
              </Badge>
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                {mockNews[0].title}
              </h3>
              <p className="text-muted-foreground mb-4 line-clamp-3">
                {mockNews[0].excerpt}
              </p>
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1">
                    <User className="h-4 w-4" />
                    <span>{mockNews[0].author}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{mockNews[0].readTime}</span>
                  </div>
                </div>
                <span>{mockNews[0].publishedAt}</span>
              </div>
            </CardContent>
          </Card>

          {/* Other Articles */}
          <div className="space-y-6">
            {mockNews.slice(1).map((article) => (
              <Card key={article.id} className="group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-20 h-20 bg-gradient-accent rounded-lg flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <Badge variant="outline" className="mb-2 text-xs">
                        {article.category}
                      </Badge>
                      <h4 className="font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                        {article.title}
                      </h4>
                      <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                        {article.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <div className="flex items-center space-x-3">
                          <span>{article.author}</span>
                          <span>{article.readTime}</span>
                        </div>
                        <span>{article.publishedAt}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
