import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import PageBanner from '@/components/layout/PageBanner';
import { Calendar, User, ArrowRight, Clock, Bookmark, Share2, Search, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import gaushalaImage from '@/assets/gaushala.jpg';
import volunteerImage from '@/assets/caring-volunteer.jpg';
import rescuedCowImage from '@/assets/rescued-cow.jpg';
import {formatDistanceToNow, parseISO} from "date-fns";
import axios from 'axios';

// const blogs = [
//   {
//     id: 1,
//     title: "Winter Care: Preparing Our Cows for the Cold Season",
//     excerpt: "As temperatures drop, special care is needed to ensure our cows stay healthy and comfortable. Learn about our winter preparation strategies and how you can help.",
//     image: gaushalaImage,
//     author: "Dr. Raghav Gupta",
//     date: "2024-01-15",
//     readTime: "5 min read",
//     category: "Care Guide",
//     featured: true,
//     views: 1250,
//     likes: 89
//   },
//   {
//     id: 2,
//     title: "Rescue Story: Mira's Journey from Streets to Sanctuary",
//     excerpt: "Follow the heartwarming story of Mira, a cow we rescued from Delhi streets, and her remarkable recovery in our sanctuary. A testament to the power of compassion.",
//     image: rescuedCowImage,
//     author: "Priya Sharma",
//     date: "2024-01-10",
//     readTime: "7 min read",
//     category: "Rescue Stories",
//     featured: true,
//     views: 2100,
//     likes: 156
//   },
//   {
//     id: 3,
//     title: "Building Community: How You Can Help Beyond Donations",
//     excerpt: "Discover various ways to support our mission - from volunteering to spreading awareness in your community. Every action counts in our mission.",
//     image: volunteerImage,
//     author: "Amit Kumar",
//     date: "2024-01-05",
//     readTime: "4 min read",
//     category: "Community",
//     featured: false,
//     views: 890,
//     likes: 67
//   },
//   {
//     id: 4,
//     title: "Nutrition Guidelines: What Makes a Healthy Cow Diet",
//     excerpt: "Understanding proper nutrition is crucial for cow welfare. Our veterinarians share essential dietary guidelines and seasonal feeding tips.",
//     image: gaushalaImage,
//     author: "Dr. Meera Patel",
//     date: "2024-01-01",
//     readTime: "6 min read",
//     category: "Health",
//     featured: false,
//     views: 1450,
//     likes: 98
//   },
//   {
//     id: 5,
//     title: "Emergency Response: 24/7 Cow Ambulance Service",
//     excerpt: "Learn about our emergency response system and how we provide immediate medical care to cows in crisis. Behind the scenes of our rescue operations.",
//     image: volunteerImage,
//     author: "Amit Kumar",
//     date: "2023-12-28",
//     readTime: "5 min read",
//     category: "Emergency Care",
//     featured: false,
//     views: 1780,
//     likes: 134
//   },
//   {
//     id: 6,
//     title: "Gaushala Expansion: New Facilities Coming Soon",
//     excerpt: "Exciting news about our upcoming facility expansion that will allow us to house and care for more rescued cows. See our development plans.",
//     image: rescuedCowImage,
//     author: "Dr. Raghav Gupta",
//     date: "2023-12-25",
//     readTime: "3 min read",
//     category: "Updates",
//     featured: false,
//     views: 920,
//     likes: 76
//   },
//   {
//     id: 7,
//     title: "Volunteer Spotlight: Meet Our Dedicated Team Members",
//     excerpt: "Get to know the amazing volunteers who dedicate their time and energy to caring for our rescued cows. Their stories will inspire you.",
//     image: volunteerImage,
//     author: "Priya Sharma",
//     date: "2023-12-20",
//     readTime: "6 min read",
//     category: "Community",
//     featured: false,
//     views: 1100,
//     likes: 87
//   },
//   {
//     id: 8,
//     title: "Medical Breakthroughs in Cow Care",
//     excerpt: "Discover the latest medical treatments and technologies we're using to provide the best possible care for our rescued cows.",
//     image: gaushalaImage,
//     author: "Dr. Meera Patel",
//     date: "2023-12-15",
//     readTime: "8 min read",
//     category: "Health",
//     featured: false,
//     views: 1650,
//     likes: 112
//   }
// ];

// const categories = ["All", "Rescue Stories", "Care Guide", "Community", "Health", "Emergency Care", "Updates"];

interface BlogCategory {
  id: number;
  name: string;
  slug: string;
  created_at: string;
  updated_at: string;
}

interface Blog {
  id: number;
  blog_category_id: number;
  title: string;
  slug: string;
  author_name: string;
  featured_image: string | null;
  short_description: string;
  long_description: string;
  tags: string[];
  published_at: string;
  created_at: string;
  updated_at: string;
  category: BlogCategory;
  comments: any[]; // Replace `any` with a specific interface if you define the structure of a comment
}



const Blogs = () => {
  // const [selectedCategory, setSelectedCategory] = React.useState("All");
  // const [searchTerm, setSearchTerm] = React.useState("");
  
  // const filteredBlogs = blogs.filter(blog => {
  //   const matchesCategory = selectedCategory === "All" || blog.category === selectedCategory;
  //   const matchesSearch = blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
  //                        blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
  //   return matchesCategory && matchesSearch;
  // });
  //
  // const featuredBlogs = blogs.filter(blog => blog.featured);
  // const regularBlogs = filteredBlogs.filter(blog => !blog.featured);

  // const formatDate = (dateString: string) => {
  //   return new Date(dateString).toLocaleDateString('en-IN', {
  //     year: 'numeric',
  //     month: 'long',
  //     day: 'numeric'
  //   });
  // };

  // const totalViews = blogs.reduce((sum, blog) => sum + blog.views, 0);
  // const totalArticles = blogs.length;

  const [blogs, setBlogs] = useState<Blog[]>([]);
  // const [blogsCategory, setBlogsCategory] = useState<BlogCategory[]>([]);
  const [comments, setComments] = useState<Blog[]>([]);

  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchBlogs = async () => {
      try{
        const response = await axios.get('https://api.cybals.com/api/blogs');
        console.log(response.data);
        setBlogs(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(true);
        setError(error.message);
      }
    }

    fetchBlogs();
  }, []);

  return (
    <Layout>
      <PageBanner
        title="Our Blog"
        subtitle="Stories of rescue, recovery, and hope from our cow protection mission"
        backgroundImage={gaushalaImage}
      />

      {/* Blog Stats */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
            <div className="text-center bg-card rounded-xl p-6 shadow-card">
              {/*<div className="text-2xl font-bold text-primary mb-2">{totalArticles}</div>*/}
              <div className="text-sm text-muted-foreground">Total Articles</div>
            </div>
            <div className="text-center bg-card rounded-xl p-6 shadow-card">
              {/*<div className="text-2xl font-bold text-success mb-2">{totalViews.toLocaleString()}</div>*/}
              <div className="text-sm text-muted-foreground">Total Reads</div>
            </div>
            <div className="text-center bg-card rounded-xl p-6 shadow-card">
              <div className="text-2xl font-bold text-warning mb-2">6</div>
              <div className="text-sm text-muted-foreground">Categories</div>
            </div>
            <div className="text-center bg-card rounded-xl p-6 shadow-card">
              <div className="text-2xl font-bold text-accent mb-2">Weekly</div>
              <div className="text-sm text-muted-foreground">New Posts</div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-gradient-earth">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              {/*<div className="flex-1 relative">*/}
              {/*  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />*/}
              {/*  <Input*/}
              {/*    type="text"*/}
              {/*    placeholder="Search articles..."*/}
              {/*    value={searchTerm}*/}
              {/*    onChange={(e) => setSearchTerm(e.target.value)}*/}
              {/*    className="pl-10"*/}
              {/*  />*/}
              {/*</div>*/}
              <div className="flex items-center space-x-2">
                <Filter className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">Filter:</span>
              </div>
            </div>
            
            {/*<div className="flex flex-wrap justify-center gap-3">*/}
            {/*  {categories.map((category) => (*/}
            {/*    <Button*/}
            {/*      key={category}*/}
            {/*      variant={selectedCategory === category ? "default" : "warm"}*/}
            {/*      size="sm"*/}
            {/*      onClick={() => setSelectedCategory(category)}*/}
            {/*      className="min-w-[100px]"*/}
            {/*    >*/}
            {/*      {category}*/}
            {/*    </Button>*/}
            {/*  ))}*/}
            {/*</div>*/}
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      {/*{selectedCategory === "All" && (*/}
      {/*  <section className="py-16 bg-background">*/}
      {/*    <div className="container mx-auto px-4">*/}
      {/*      <div className="text-center mb-12">*/}
      {/*        <h2 className="text-3xl font-bold text-foreground mb-4">*/}
      {/*          Featured Articles*/}
      {/*        </h2>*/}
      {/*        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">*/}
      {/*          Our most impactful stories and important updates from the field.*/}
      {/*        </p>*/}
      {/*      </div>*/}

      {/*      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">*/}
      {/*        {featuredBlogs.map((blog, index) => (*/}
      {/*          <article*/}
      {/*            key={blog.id}*/}
      {/*            className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-warm transition-all duration-300 animate-fade-in group"*/}
      {/*            style={{ animationDelay: `${index * 0.1}s` }}*/}
      {/*          >*/}
      {/*            <div className="relative">*/}
      {/*              <img*/}
      {/*                src={blog.image}*/}
      {/*                alt={blog.title}*/}
      {/*                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"*/}
      {/*              />*/}
      {/*              <div className="absolute top-4 left-4 flex items-center space-x-2">*/}
      {/*                <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">*/}
      {/*                  Featured*/}
      {/*                </span>*/}
      {/*                <span className="bg-white/90 text-foreground px-3 py-1 rounded-full text-xs font-medium">*/}
      {/*                  {blog.category}*/}
      {/*                </span>*/}
      {/*              </div>*/}
      {/*              <div className="absolute top-4 right-4">*/}
      {/*                <Button variant="ghost" size="sm" className="bg-white/90 hover:bg-white">*/}
      {/*                  <Bookmark className="h-4 w-4" />*/}
      {/*                </Button>*/}
      {/*              </div>*/}
      {/*            </div>*/}

      {/*            <div className="p-8">*/}
      {/*              <h2 className="text-2xl font-bold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">*/}
      {/*                {blog.title}*/}
      {/*              </h2>*/}
      {/*              */}
      {/*              <p className="text-muted-foreground mb-6 line-clamp-3 leading-relaxed">*/}
      {/*                {blog.excerpt}*/}
      {/*              </p>*/}

      {/*              <div className="flex items-center justify-between text-sm text-muted-foreground mb-6">*/}
      {/*                <div className="flex items-center space-x-4">*/}
      {/*                  <div className="flex items-center space-x-2">*/}
      {/*                    <User className="h-4 w-4" />*/}
      {/*                    <span>{blog.author}</span>*/}
      {/*                  </div>*/}
      {/*                  <div className="flex items-center space-x-2">*/}
      {/*                    <Clock className="h-4 w-4" />*/}
      {/*                    <span>{blog.readTime}</span>*/}
      {/*                  </div>*/}
      {/*                </div>*/}
      {/*                <div className="text-xs">*/}
      {/*                  {blog.views} views • {blog.likes} likes*/}
      {/*                </div>*/}
      {/*              </div>*/}

      {/*              <div className="flex items-center justify-between">*/}
      {/*                <div className="flex items-center space-x-2 text-sm text-muted-foreground">*/}
      {/*                  <Calendar className="h-4 w-4" />*/}
      {/*                  <span>{formatDate(blog.date)}</span>*/}
      {/*                </div>*/}
      {/*                */}
      {/*                <div className="flex items-center space-x-2">*/}
      {/*                  <Button variant="ghost" size="sm">*/}
      {/*                    <Share2 className="h-4 w-4" />*/}
      {/*                  </Button>*/}
      {/*                  <Link to={`/blog/${blog.id}`}>*/}
      {/*                    <Button variant="warm" size="sm">*/}
      {/*                      Read More*/}
      {/*                      <ArrowRight className="h-4 w-4 ml-2" />*/}
      {/*                    </Button>*/}
      {/*                  </Link>*/}
      {/*                </div>*/}
      {/*              </div>*/}
      {/*            </div>*/}
      {/*          </article>*/}
      {/*        ))}*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  </section>*/}
      {/*)}*/}

      {/* All Articles Grid */}
      <section className="py-16 bg-gradient-earth">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            {/*<h2 className="text-3xl font-bold text-foreground mb-4">*/}
            {/*  {selectedCategory === "All" ? "All Articles" : `${selectedCategory} Articles`}*/}
            {/*</h2>*/}
            {/*<p className="text-lg text-muted-foreground max-w-2xl mx-auto">*/}
            {/*  {filteredBlogs.length} article{filteredBlogs.length !== 1 ? 's' : ''} found*/}
            {/*</p>*/}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/*{(selectedCategory === "All" ? regularBlogs : filteredBlogs).map((blog, index) => (*/}
            {blogs.map((blog: Blog, index: number) => {
              return (
                  <article
                      key={blog.id}
                      className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-warm transition-all duration-300 animate-fade-in hover:scale-105 group"
                      style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="relative">
                      <img
                          src={`https://api.cybals.com/storage/${blog.featured_image}`}
                          alt={blog.title}
                          className="w-full h-48 object-cover"
                      />
                      <div className="absolute top-4 left-4">
          <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
            {blog.category.name}
          </span>
                      </div>
                      <div className="absolute top-4 right-4">
                        <Button
                            variant="ghost"
                            size="sm"
                            className="bg-white/90 hover:bg-white opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <Share2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>

                    <div className="p-6">
                                  <h2 className="text-xl font-bold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                                    {blog.title}
                                  </h2>

                                  <p className="text-muted-foreground mb-4 line-clamp-3 text-sm leading-relaxed">
                                    {blog.short_description}
                                  </p>

                                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                                    <div className="flex items-center space-x-3">
                                      <div className="flex items-center space-x-1">
                                        <User className="h-3 w-3" />
                                        <span>{blog.author_name}</span>
                                      </div>
                                      <div className="flex items-center space-x-1">
                                        <Clock className="h-3 w-3" />
                                        <span>{formatDistanceToNow(parseISO(blog.created_at), {addSuffix: true})}</span>
                                      </div>
                                    </div>
                                    {/*<div>*/}
                                    {/*  {blog.views} views*/}
                                    {/*</div>*/}
                                  </div>

                                  <div className="flex items-center justify-between">
                                    {/*<div className="flex items-center space-x-2 text-xs text-muted-foreground">*/}
                                    {/*  <Calendar className="h-3 w-3" />*/}
                                    {/*  <span>{formatDate(blog.date)}</span>*/}
                                    {/*</div>*/}

                                    <Link to={`/blog/${blog.id}`}>
                                      <Button variant="ghost" size="sm" className="text-primary hover:text-primary-glow">
                                        Read More
                                        <ArrowRight className="h-3 w-3 ml-1" />
                                      </Button>
                                    </Link>
                                  </div>
                                </div>
                  </article>
              );
            })}

          </div>
        </div>
        </section>
            {/*<article*/}
              {/*  key={blog.id}*/}
              {/*  className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-warm transition-all duration-300 animate-fade-in hover:scale-105 group"*/}
              {/*  style={{ animationDelay: `${index * 0.1}s` }}*/}
              {/*>*/}
              {/*  <div className="relative">*/}
              {/*    <img*/}
              {/*      src={blog.image}*/}
              {/*      alt={blog.title}*/}
              {/*      className="w-full h-48 object-cover"*/}
              {/*    />*/}
              {/*    <div className="absolute top-4 left-4">*/}
              {/*      <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">*/}
              {/*        {blog.category}*/}
              {/*      </span>*/}
              {/*    </div>*/}
              {/*    <div className="absolute top-4 right-4">*/}
              {/*      <Button variant="ghost" size="sm" className="bg-white/90 hover:bg-white opacity-0 group-hover:opacity-100 transition-opacity">*/}
              {/*        <Share2 className="h-4 w-4" />*/}
              {/*      </Button>*/}
              {/*    </div>*/}
              {/*  </div>*/}

      {/*
      {/*        </article>*/}
      {/*      ))}*/}
      {/*    </div>*/}

      {/*    {filteredBlogs.length === 0 && (*/}
      {/*      <div className="text-center py-12">*/}
      {/*        <p className="text-lg text-muted-foreground">*/}
      {/*          No articles found matching your search criteria.*/}
      {/*        </p>*/}
      {/*        <Button */}
      {/*          variant="warm" */}
      {/*          className="mt-4"*/}
      {/*          onClick={() => {*/}
      {/*            setSelectedCategory("All");*/}
      {/*            setSearchTerm("");*/}
      {/*          }}*/}
      {/*        >*/}
      {/*          Clear Filters*/}
      {/*        </Button>*/}
      {/*      </div>*/}
      {/*    )}*/}
      {/*  </div>*/}
      {/*</section>*/}

      {/* Newsletter Signup */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center bg-card rounded-2xl p-8 shadow-card">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Stay Updated
            </h2>
            <p className="text-muted-foreground mb-8">
              Subscribe to our newsletter to receive the latest stories, updates, 
              and insights from our cow protection mission. Join our community of supporters.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button variant="donate" size="lg">
                Subscribe
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blogs;