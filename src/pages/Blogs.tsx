import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import Breadcrumb from '@/components/layout/Breadcrumb';
import { Calendar, User, ArrowRight, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import gaushalaImage from '@/assets/gaushala.jpg';
import volunteerImage from '@/assets/caring-volunteer.jpg';
import rescuedCowImage from '@/assets/rescued-cow.jpg';

const blogs = [
  {
    id: 1,
    title: "Winter Care: Preparing Our Cows for the Cold Season",
    excerpt: "As temperatures drop, special care is needed to ensure our cows stay healthy and comfortable. Learn about our winter preparation strategies.",
    image: gaushalaImage,
    author: "Dr. Raghav Gupta",
    date: "2024-01-15",
    readTime: "5 min read",
    category: "Care Guide"
  },
  {
    id: 2,
    title: "Rescue Story: Mira's Journey from Streets to Sanctuary",
    excerpt: "Follow the heartwarming story of Mira, a cow we rescued from Delhi streets, and her remarkable recovery in our sanctuary.",
    image: rescuedCowImage,
    author: "Priya Sharma",
    date: "2024-01-10",
    readTime: "7 min read",
    category: "Rescue Stories"
  },
  {
    id: 3,
    title: "Building Community: How You Can Help Beyond Donations",
    excerpt: "Discover various ways to support our mission - from volunteering to spreading awareness in your community.",
    image: volunteerImage,
    author: "Amit Kumar",
    date: "2024-01-05",
    readTime: "4 min read",
    category: "Community"
  },
  {
    id: 4,
    title: "Nutrition Guidelines: What Makes a Healthy Cow Diet",
    excerpt: "Understanding proper nutrition is crucial for cow welfare. Our veterinarians share essential dietary guidelines.",
    image: gaushalaImage,
    author: "Dr. Meera Patel",
    date: "2024-01-01",
    readTime: "6 min read",
    category: "Health"
  },
  {
    id: 5,
    title: "Emergency Response: 24/7 Cow Ambulance Service",
    excerpt: "Learn about our emergency response system and how we provide immediate medical care to cows in crisis.",
    image: volunteerImage,
    author: "Amit Kumar",
    date: "2023-12-28",
    readTime: "5 min read",
    category: "Emergency Care"
  },
  {
    id: 6,
    title: "Gaushala Expansion: New Facilities Coming Soon",
    excerpt: "Exciting news about our upcoming facility expansion that will allow us to house and care for more rescued cows.",
    image: rescuedCowImage,
    author: "Dr. Raghav Gupta",
    date: "2023-12-25",
    readTime: "3 min read",
    category: "Updates"
  }
];

const categories = ["All", "Rescue Stories", "Care Guide", "Community", "Health", "Emergency Care", "Updates"];

const Blogs = () => {
  const [selectedCategory, setSelectedCategory] = React.useState("All");
  
  const breadcrumbItems = [
    { label: 'Blogs' }
  ];

  const filteredBlogs = selectedCategory === "All" 
    ? blogs 
    : blogs.filter(blog => blog.category === selectedCategory);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <Layout>
      <div className="bg-gradient-earth py-8">
        <div className="container mx-auto px-4">
          <Breadcrumb items={breadcrumbItems} />
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Blog
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Stay updated with stories of rescue, recovery, and hope. Learn about cow care, 
              our initiatives, and how our community is making a difference every day.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-gradient-earth">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "warm"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className="min-w-[100px]"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBlogs.map((blog, index) => (
              <article
                key={blog.id}
                className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-warm transition-all duration-300 animate-fade-in hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                      {blog.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h2 className="text-xl font-bold text-foreground mb-3 line-clamp-2">
                    {blog.title}
                  </h2>
                  
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {blog.excerpt}
                  </p>

                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center space-x-2">
                      <User className="h-4 w-4" />
                      <span>{blog.author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4" />
                      <span>{blog.readTime}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{formatDate(blog.date)}</span>
                    </div>
                    
                    <Link to={`/blog/${blog.id}`}>
                      <Button variant="ghost" size="sm" className="text-primary hover:text-primary-glow">
                        Read More
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filteredBlogs.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground">
                No blog posts found in the "{selectedCategory}" category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gradient-earth">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Stay Updated
            </h2>
            <p className="text-muted-foreground mb-8">
              Subscribe to our newsletter to receive the latest stories, updates, 
              and insights from our cow protection mission.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button variant="donate" size="lg">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blogs;