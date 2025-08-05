import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import Breadcrumb from '@/components/layout/Breadcrumb';
import { Calendar, User, Clock, ArrowLeft, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import rescuedCowImage from '@/assets/rescued-cow.jpg';
import gaushalaImage from '@/assets/gaushala.jpg';
import volunteerImage from '@/assets/caring-volunteer.jpg';

// Mock blog data - in real app this would come from API
const blogPosts = {
  1: {
    id: 1,
    title: "Winter Care: Preparing Our Cows for the Cold Season",
    content: `
      <p>As the winter months approach, our team at Gau Seva Trust begins intensive preparations to ensure all our rescued cows remain healthy, comfortable, and safe during the colder season. Winter care for cows requires special attention to shelter, nutrition, and health monitoring.</p>
      
      <h2>Shelter Preparations</h2>
      <p>Our primary focus is ensuring adequate shelter for all our cows. We've installed additional windbreaks and improved insulation in our existing structures. Each shelter is designed to protect from cold winds while maintaining proper ventilation to prevent respiratory issues.</p>
      
      <h2>Nutritional Adjustments</h2>
      <p>During winter, cows require additional calories to maintain their body temperature. We increase the quantity of high-energy feeds including:</p>
      <ul>
        <li>Additional hay and silage for fiber</li>
        <li>Increased grain portions for energy</li>
        <li>Warm water to encourage drinking</li>
        <li>Vitamin supplements to boost immunity</li>
      </ul>
      
      <h2>Health Monitoring</h2>
      <p>Our veterinary team increases health checks during winter months. We monitor for signs of cold stress, respiratory issues, and maintain vaccination schedules. Each cow receives individual attention based on their age, health status, and specific needs.</p>
      
      <p>Thanks to the generosity of our donors, we're able to provide this comprehensive winter care. Every contribution helps us maintain the highest standards of animal welfare throughout the challenging winter months.</p>
    `,
    image: gaushalaImage,
    author: "Dr. Raghav Gupta",
    date: "2024-01-15",
    readTime: "5 min read",
    category: "Care Guide"
  },
  2: {
    id: 2,
    title: "Rescue Story: Mira's Journey from Streets to Sanctuary",
    content: `
      <p>Mira's story begins on a cold December morning when our emergency rescue team received a call about an injured cow lying on the roadside in East Delhi. What we found was a gentle soul in desperate need of help.</p>
      
      <h2>The Rescue</h2>
      <p>When we arrived, Mira was weak, malnourished, and had a severe leg injury that had become infected. Our team carefully transported her to our medical facility where Dr. Meera Patel immediately began treatment.</p>
      
      <h2>Recovery Process</h2>
      <p>Mira's recovery took several months and required:</p>
      <ul>
        <li>Daily wound care and antibiotic treatment</li>
        <li>Specialized nutrition to help her regain weight</li>
        <li>Physical therapy to restore mobility</li>
        <li>Lots of love and patience from our volunteers</li>
      </ul>
      
      <h2>New Life at the Sanctuary</h2>
      <p>Today, Mira is thriving in our sanctuary. She has made friends with other rescued cows and enjoys spending her days grazing in our protected meadows. Her gentle nature has made her a favorite among volunteers and visitors alike.</p>
      
      <p>Mira's transformation is a testament to what's possible when compassion meets action. Every rescue operation is funded by donations from caring individuals who believe, like us, that every life matters.</p>
    `,
    image: rescuedCowImage,
    author: "Priya Sharma",
    date: "2024-01-10",
    readTime: "7 min read",
    category: "Rescue Stories"
  }
};

const relatedPosts = [
  {
    id: 3,
    title: "Building Community: How You Can Help Beyond Donations",
    image: volunteerImage,
    excerpt: "Discover various ways to support our mission beyond financial contributions."
  },
  {
    id: 4,
    title: "Nutrition Guidelines: What Makes a Healthy Cow Diet",
    image: gaushalaImage,
    excerpt: "Understanding proper nutrition is crucial for cow welfare and health."
  }
];

const BlogDetail = () => {
  const { id } = useParams<{ id: string }>();
  const blogId = parseInt(id || '1');
  const blog = blogPosts[blogId as keyof typeof blogPosts] || blogPosts[1];

  const breadcrumbItems = [
    { label: 'Blogs', href: '/blogs' },
    { label: blog.title }
  ];

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const shareUrl = window.location.href;
  const shareTitle = blog.title;

  const handleShare = (platform: string) => {
    let url = '';
    switch (platform) {
      case 'facebook':
        url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
        break;
      case 'twitter':
        url = `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`;
        break;
      case 'linkedin':
        url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`;
        break;
    }
    if (url) {
      window.open(url, '_blank', 'width=600,height=400');
    }
  };

  return (
    <Layout>
      <div className="bg-gradient-earth py-8">
        <div className="container mx-auto px-4">
          <Breadcrumb items={breadcrumbItems} />
        </div>
      </div>

      <article className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Back Button */}
            <Link to="/blogs" className="inline-flex items-center text-primary hover:text-primary-glow mb-8 transition-colors">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Blogs
            </Link>

            {/* Article Header */}
            <header className="mb-8">
              <div className="mb-4">
                <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                  {blog.category}
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                {blog.title}
              </h1>

              <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-8">
                <div className="flex items-center space-x-2">
                  <User className="h-4 w-4" />
                  <span>{blog.author}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4" />
                  <span>{formatDate(blog.date)}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4" />
                  <span>{blog.readTime}</span>
                </div>
              </div>

              {/* Featured Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-8">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </header>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              <div 
                className="text-muted-foreground leading-relaxed"
                dangerouslySetInnerHTML={{ __html: blog.content }}
              />
            </div>

            {/* Share Section */}
            <div className="mt-12 pt-8 border-t border-border">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-foreground">Share this article</h3>
                <div className="flex items-center space-x-4">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleShare('facebook')}
                    className="text-primary hover:text-primary-glow"
                  >
                    <Facebook className="h-5 w-5" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleShare('twitter')}
                    className="text-primary hover:text-primary-glow"
                  >
                    <Twitter className="h-5 w-5" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleShare('linkedin')}
                    className="text-primary hover:text-primary-glow"
                  >
                    <Linkedin className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      <section className="py-16 bg-gradient-earth">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Related Articles
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedPosts.map((post) => (
                <Link
                  key={post.id}
                  to={`/blog/${post.id}`}
                  className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-warm transition-all duration-300 hover:scale-105"
                >
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {post.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BlogDetail;