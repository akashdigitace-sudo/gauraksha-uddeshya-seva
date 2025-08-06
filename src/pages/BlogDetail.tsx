import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import PageBanner from '@/components/layout/PageBanner';
import { Calendar, User, Clock, ArrowLeft, Share2, Facebook, Twitter, Linkedin, Bookmark, Heart, MessageCircle, Eye, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import rescuedCowImage from '@/assets/rescued-cow.jpg';
import gaushalaImage from '@/assets/gaushala.jpg';
import volunteerImage from '@/assets/caring-volunteer.jpg';
import blogHeaderImage from '@/assets/blog-header.jpg';

// Mock blog data - in real app this would come from API
const blogPosts = {
  1: {
    id: 1,
    title: "Winter Care: Preparing Our Cows for the Cold Season",
    content: `
      <p class="lead">As the winter months approach, our team at Gau Seva Trust begins intensive preparations to ensure all our rescued cows remain healthy, comfortable, and safe during the colder season. Winter care for cows requires special attention to shelter, nutrition, and health monitoring.</p>
      
      <h2>The Challenge of Winter</h2>
      <p>Winter brings unique challenges for cow welfare. Unlike their wild counterparts, rescued cows often come to us weakened from their previous conditions, making them more vulnerable to cold stress. The key is proactive preparation and continuous monitoring.</p>
      
      <h2>Shelter Preparations</h2>
      <p>Our primary focus is ensuring adequate shelter for all our cows. We've installed additional windbreaks and improved insulation in our existing structures. Each shelter is designed to protect from cold winds while maintaining proper ventilation to prevent respiratory issues.</p>
      
      <blockquote>
        <p>"A warm cow is a healthy cow. Our shelter improvements have reduced winter-related health issues by 60% compared to last year." - Dr. Raghav Gupta, Founder</p>
      </blockquote>
      
      <h2>Nutritional Adjustments</h2>
      <p>During winter, cows require additional calories to maintain their body temperature. We increase the quantity of high-energy feeds including:</p>
      <ul>
        <li><strong>Additional hay and silage</strong> for fiber and warmth generation</li>
        <li><strong>Increased grain portions</strong> for energy density</li>
        <li><strong>Warm water systems</strong> to encourage drinking and prevent dehydration</li>
        <li><strong>Vitamin supplements</strong> to boost immunity during harsh weather</li>
      </ul>
      
      <h2>Health Monitoring Protocol</h2>
      <p>Our veterinary team increases health checks during winter months. We monitor for signs of cold stress, respiratory issues, and maintain vaccination schedules. Each cow receives individual attention based on their age, health status, and specific needs.</p>
      
      <h2>Community Support</h2>
      <p>Winter preparations are only possible through the generous support of our community. From providing warm bedding materials to funding additional feed, every contribution makes a difference. This year, we've received:</p>
      <ul>
        <li>500 blankets from local textile manufacturers</li>
        <li>20 tons of additional hay from farmer cooperatives</li>
        <li>₹2.5 lakhs in donations specifically for winter care</li>
      </ul>
      
      <h2>Looking Ahead</h2>
      <p>Thanks to the generosity of our donors and the dedication of our team, we're confident that all our rescued cows will not just survive but thrive through the winter months. Every contribution, no matter how small, helps us maintain the highest standards of animal welfare throughout the challenging winter season.</p>
      
      <p>If you'd like to support our winter care efforts, consider making a donation or volunteering with our winter preparation activities. Together, we can ensure every cow in our care stays warm, healthy, and loved.</p>
    `,
    image: gaushalaImage,
    author: "Dr. Raghav Gupta",
    date: "2024-01-15",
    readTime: "5 min read",
    category: "Care Guide",
    views: 1250,
    likes: 89,
    comments: 23
  },
  2: {
    id: 2,
    title: "Rescue Story: Mira's Journey from Streets to Sanctuary",
    content: `
      <p class="lead">Mira's story begins on a cold December morning when our emergency rescue team received a call about an injured cow lying on the roadside in East Delhi. What we found was a gentle soul in desperate need of help, and what followed was a remarkable journey of healing and hope.</p>
      
      <h2>The Emergency Call</h2>
      <p>At 6:30 AM on December 12th, our emergency hotline received a call from Rajesh, a local shopkeeper who had noticed a cow lying motionless near his store. "She hadn't moved for hours," he told our operator. "I knew something was seriously wrong."</p>
      
      <p>Our rapid response team, led by rescue coordinator Amit Kumar, was dispatched immediately. Within 25 minutes, they arrived at the scene with our mobile veterinary unit.</p>
      
      <h2>The Rescue</h2>
      <p>When we arrived, Mira was weak, severely malnourished, and had a large, infected wound on her left hind leg. She was also suffering from dehydration and showed signs of having been without proper food for weeks.</p>
      
      <blockquote>
        <p>"The moment I saw her eyes, I knew we had to do everything possible to save her. There was still fight left in her spirit." - Amit Kumar, Rescue Coordinator</p>
      </blockquote>
      
      <p>Our team carefully examined her condition on-site before safely loading her into our specially equipped ambulance. The journey back to our medical facility was critical – every moment counted.</p>
      
      <h2>Critical Care Phase</h2>
      <p>At our medical center, Dr. Meera Patel immediately began emergency treatment. Mira's condition was more serious than initially assessed:</p>
      <ul>
        <li><strong>Severe malnutrition:</strong> She was 40% below healthy weight</li>
        <li><strong>Infected leg wound:</strong> Required immediate surgical intervention</li>
        <li><strong>Dehydration:</strong> Needed IV fluid therapy</li>
        <li><strong>Parasite infestation:</strong> Multiple types affecting her digestive system</li>
      </ul>
      
      <h2>The Road to Recovery</h2>
      <p>Mira's recovery took several months and required a comprehensive approach:</p>
      
      <h3>Medical Treatment</h3>
      <ul>
        <li>Daily wound cleaning and antibiotic therapy</li>
        <li>Surgical repair of damaged tissue</li>
        <li>Comprehensive deworming program</li>
        <li>Regular blood tests to monitor progress</li>
      </ul>
      
      <h3>Nutritional Rehabilitation</h3>
      <p>Our nutrition team developed a specialized feeding program to help Mira regain her strength gradually. She started with small, frequent meals of easily digestible foods, slowly building up to a full diet of high-quality hay, grains, and supplements.</p>
      
      <h3>Physical Therapy</h3>
      <p>To restore mobility in her injured leg, our volunteers worked with Mira daily on gentle exercises. Swimming sessions in our rehabilitation pool helped build muscle strength without putting stress on her healing wound.</p>
      
      <h2>Emotional Healing</h2>
      <p>Perhaps most importantly, Mira needed to learn to trust humans again. Our volunteers spent countless hours simply sitting with her, talking gently, and offering treats. Slowly, her natural gentle nature began to shine through.</p>
      
      <h2>A New Life</h2>
      <p>Today, six months after her rescue, Mira is thriving in our sanctuary. She has gained back all her weight and more, her wound has completely healed, and she moves freely around her paddock. She has become best friends with Kamala, another rescued cow, and they can often be seen grazing together in the morning sun.</p>
      
      <p>Mira's transformation is a testament to what's possible when compassion meets action. Her rescue operation cost approximately ₹45,000, funded entirely by donations from caring individuals who believe, like us, that every life matters.</p>
      
      <blockquote>
        <p>"Mira taught us that with enough love, patience, and proper care, even the most broken spirits can heal and find joy again." - Dr. Meera Patel, Chief Veterinarian</p>
      </blockquote>
      
      <h2>How You Can Help</h2>
      <p>Stories like Mira's are only possible because of supporters like you. Every rescue operation depends on donations, and every cow we save is a testament to our community's compassion. If you'd like to sponsor a rescue or support our emergency response fund, your contribution can help us save more lives like Mira's.</p>
    `,
    image: rescuedCowImage,
    author: "Priya Sharma",
    date: "2024-01-10",
    readTime: "7 min read",
    category: "Rescue Stories",
    views: 2100,
    likes: 156,
    comments: 45
  }
};

const relatedPosts = [
  {
    id: 3,
    title: "Building Community: How You Can Help Beyond Donations",
    image: volunteerImage,
    excerpt: "Discover various ways to support our mission beyond financial contributions.",
    author: "Amit Kumar",
    date: "2024-01-05",
    category: "Community"
  },
  {
    id: 4,
    title: "Nutrition Guidelines: What Makes a Healthy Cow Diet",
    image: gaushalaImage,
    excerpt: "Understanding proper nutrition is crucial for cow welfare and health.",
    author: "Dr. Meera Patel",
    date: "2024-01-01",
    category: "Health"
  },
  {
    id: 5,
    title: "Emergency Response: 24/7 Cow Ambulance Service",
    image: volunteerImage,
    excerpt: "Learn about our emergency response system and rapid intervention protocols.",
    author: "Amit Kumar",
    date: "2023-12-28",
    category: "Emergency Care"
  }
];

const BlogDetail = () => {
  const { id } = useParams<{ id: string }>();
  const blogId = parseInt(id || '1');
  const blog = blogPosts[blogId as keyof typeof blogPosts] || blogPosts[1];

  const [comment, setComment] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [name, setName] = React.useState('');

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

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle comment submission
    console.log('Comment submitted:', { name, email, comment });
    setComment('');
    setName('');
    setEmail('');
  };

  return (
    <Layout>
      <PageBanner
        title={blog.title}
        subtitle={`${blog.category} • ${blog.readTime} • ${formatDate(blog.date)}`}
        backgroundImage={blogHeaderImage}
      />

      <article className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Back Button */}
            <Link to="/blogs" className="inline-flex items-center text-primary hover:text-primary-glow mb-8 transition-colors">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to All Articles
            </Link>

            {/* Article Header */}
            <header className="mb-12">
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <span className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium">
                  {blog.category}
                </span>
                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <Eye className="h-4 w-4" />
                    <span>{blog.views} views</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Heart className="h-4 w-4" />
                    <span>{blog.likes} likes</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MessageCircle className="h-4 w-4" />
                    <span>{blog.comments} comments</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-6 text-muted-foreground mb-8">
                <div className="flex items-center space-x-6">
                  <div className="flex items-center space-x-2">
                    <User className="h-5 w-5" />
                    <span className="font-medium">{blog.author}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-5 w-5" />
                    <span>{formatDate(blog.date)}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-5 w-5" />
                    <span>{blog.readTime}</span>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <Button variant="ghost" size="sm">
                    <Bookmark className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Heart className="h-4 w-4" />
                  </Button>
                  <div className="flex items-center space-x-1">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleShare('facebook')}
                    >
                      <Facebook className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleShare('twitter')}
                    >
                      <Twitter className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleShare('linkedin')}
                    >
                      <Linkedin className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </header>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none mb-12">
              <div 
                className="text-muted-foreground leading-relaxed blog-content"
                dangerouslySetInnerHTML={{ __html: blog.content }}
                style={{
                  fontSize: '1.125rem',
                  lineHeight: '1.75'
                }}
              />
            </div>

            {/* Tags & Share */}
            <div className="border-t border-border pt-8 mb-12">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {['cow rescue', 'animal welfare', 'winter care', 'veterinary care', 'sanctuary'].map((tag) => (
                      <span key={tag} className="bg-accent/20 text-accent px-3 py-1 rounded-full text-sm">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Share Article</h3>
                  <div className="flex items-center space-x-3">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleShare('facebook')}
                      className="border"
                    >
                      <Facebook className="h-4 w-4 mr-2" />
                      Facebook
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleShare('twitter')}
                      className="border"
                    >
                      <Twitter className="h-4 w-4 mr-2" />
                      Twitter
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleShare('linkedin')}
                      className="border"
                    >
                      <Linkedin className="h-4 w-4 mr-2" />
                      LinkedIn
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Author Bio */}
            <div className="bg-card rounded-2xl p-8 shadow-card mb-12">
              <div className="flex items-start space-x-6">
                <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground text-2xl font-bold">
                  {blog.author.charAt(0)}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground mb-2">{blog.author}</h3>
                  <p className="text-muted-foreground mb-4">
                    {blog.author === "Dr. Raghav Gupta" 
                      ? "Founder & Director with 15+ years of experience in veterinary medicine and animal welfare. Passionate about creating sustainable solutions for cow protection across India."
                      : blog.author === "Priya Sharma"
                      ? "Operations Manager and former corporate professional who dedicated her life to animal welfare. Specializes in rescue operations and community outreach programs."
                      : "Rescue Coordinator with expertise in emergency response and field operations. Available 24/7 for emergency cow rescue situations across Delhi NCR."
                    }
                  </p>
                  <div className="flex items-center space-x-4">
                    <Button variant="warm" size="sm">
                      View Profile
                    </Button>
                    <Button variant="ghost" size="sm">
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Contact
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Comments Section */}
            <div className="bg-card rounded-2xl p-8 shadow-card mb-12">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Comments ({blog.comments})
              </h3>
              
              <form onSubmit={handleCommentSubmit} className="mb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <Input
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                  <Input
                    type="email"
                    placeholder="Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <Textarea
                  placeholder="Share your thoughts..."
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  className="mb-4"
                  required
                />
                <Button type="submit" variant="donate">
                  Post Comment
                </Button>
              </form>

              {/* Sample Comments */}
              <div className="space-y-6">
                <div className="border-b border-border pb-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">
                      R
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="font-semibold text-foreground">Rajesh Kumar</span>
                        <span className="text-sm text-muted-foreground">2 hours ago</span>
                      </div>
                      <p className="text-muted-foreground">
                        Thank you for sharing Mira's story. It brought tears to my eyes. 
                        I've been donating for 6 months now and it's amazing to see the actual impact.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="border-b border-border pb-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-success/10 rounded-full flex items-center justify-center text-success font-bold">
                      A
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="font-semibold text-foreground">Anita Singh</span>
                        <span className="text-sm text-muted-foreground">1 day ago</span>
                      </div>
                      <p className="text-muted-foreground">
                        This is exactly why I chose to become a monthly donor. 
                        The transparency and detailed updates make me confident my money is well used.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      <section className="py-16 bg-gradient-earth">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Related Articles
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((post) => (
                <Link
                  key={post.id}
                  to={`/blog/${post.id}`}
                  className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-warm transition-all duration-300 hover:scale-105 group"
                >
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs font-medium">
                        {post.category}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {new Date(post.date).toLocaleDateString()}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">
                        By {post.author}
                      </span>
                      <ArrowRight className="h-4 w-4 text-primary" />
                    </div>
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