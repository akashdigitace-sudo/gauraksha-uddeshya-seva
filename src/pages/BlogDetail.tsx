import React, {useState, useEffect} from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import PageBanner from '@/components/layout/PageBanner';
import { Calendar, User, Clock, ArrowLeft, Share2, Facebook,  Linkedin, Bookmark, Heart, MessageCircle, Eye, ArrowRight } from 'lucide-react';
import {FaXTwitter} from "react-icons/fa6"
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import rescuedCowImage from '@/assets/rescued-cow.jpg';
import gaushalaImage from '@/assets/gaushala.jpg';
import volunteerImage from '@/assets/caring-volunteer.jpg';
import blogHeaderImage from '@/assets/blog-header.jpg';
import axios from "axios";
import {toast} from "sonner";
import {formatDistanceToNow, parseISO} from "date-fns";

interface BlogCategory {
  id: number;
  name: string;
  slug: string;
  created_at: string;
  updated_at: string;
}

interface BlogComments {
  id: number;
  blog_id: number;
  commenter_name: string;
  commenter_email: string;
  comment_text: string;
  approved: number;
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
  comments: BlogComments; // Replace `any` with a specific interface if you define the structure of a comment
}

// Related posts data (keep as static for now or fetch separately)
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
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const [relatedPosts, setRelatedPosts] = useState<Blog[] | null>(null)

  const { id } = useParams<{ id: string }>();
  const blogId = parseInt(id || '1');

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await axios.get(`https://api.cybals.com/api/blogs/${blogId}`);

        setBlog(response.data);
      } catch (err) {

        setError(err.message || 'Failed to fetch blog');
      } finally {
        setLoading(false);
      }
    }

    if (blogId) {
      fetchBlog();
    }
  }, [blogId]);

  useEffect(() => {
    const fetchRelatedBlogs = async () => {
      try {
        const response = await axios.get('https://api.cybals.com/api/blogs');
        // Filter out current blog and take first 3
        const filteredBlogs = response.data
            .filter((b: Blog) => b.id !== blogId)
            .slice(0, 3);
        setRelatedPosts(filteredBlogs);
      } catch (err) {
        console.log('Failed to fetch related blogs:', err);
      }
    };

    fetchRelatedBlogs();
  }, [blogId]);

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

  const calculateReadTime = (content: string) => {
    const wordsPerMinute = 200;
    const words = content.replace(/<[^>]*>/g, '').split(/\s+/).length;
    const minutes = Math.ceil(words / wordsPerMinute);
    return `${minutes} min read`;
  };

  const shareUrl = window.location.href;
  const shareTitle = blog?.title || '';

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

  const handleCommentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Prepare payload matching the BlogComments structure (except auto-generated fields)
    const payload: Omit<BlogComments, 'id' | 'approved' | 'created_at' | 'updated_at'> = {
      blog_id: blog.id, // from your blog state
      commenter_name: name,
      commenter_email: email,
      comment_text: comment
    };

    try {
      const response = await axios.post('https://api.cybals.com/api/blog-comments', payload);

      if (response.status === 201 || response.status === 200) {
        toast.success("Comment submitted successfully!");

        // Clear form
        setComment('');
        setName('');
        setEmail('');

        // Optional: refresh comments list if you're showing them
      } else {
        toast.error("Failed to submit comment.");
      }
    } catch (error) {
      console.error("Comment submission error:", error);
      toast.error("Something went wrong while submitting your comment.");
    }
  };


  // Loading state
  if (loading) {
    return (
        <Layout>
          <div className="min-h-screen flex items-center justify-center">
            <div className="text-center">
              <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary mx-auto mb-4"></div>
              <p className="text-lg text-muted-foreground">Loading blog post...</p>
            </div>
          </div>
        </Layout>
    );
  }

  // Error state
  if (error || !blog) {
    return (
        <Layout>
          <div className="min-h-screen flex items-center justify-center">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-foreground mb-4">Blog Not Found</h2>
              <p className="text-muted-foreground mb-6">
                {error || 'The blog post you are looking for does not exist.'}
              </p>
              <Link to="/blogs" className="inline-flex items-center text-primary hover:text-primary-glow transition-colors">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to All Articles
              </Link>
            </div>
          </div>
        </Layout>
    );
  }

  return (
      <Layout>
        <PageBanner
            title={blog.title}
            subtitle={`${blog.category.name} • ${formatDistanceToNow(parseISO(blog.created_at), {addSuffix: true})} `}
            backgroundImage={blog.featured_image || blogHeaderImage}
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
                  {blog.category.name}
                </span>
                  {/*<div className="flex items-center space-x-4 text-sm text-muted-foreground">*/}
                  {/*  /!*<div className="flex items-center space-x-1">*!/*/}
                  {/*  /!*  <Eye className="h-4 w-4" />*!/*/}
                  {/*  /!*  <span>{blog.views || 0} views</span>*!/*/}
                  {/*  /!*</div>*!/*/}
                  {/*  /!*<div className="flex items-center space-x-1">*!/*/}
                  {/*  /!*  <Heart className="h-4 w-4" />*!/*/}
                  {/*  /!*  <span>{blog.likes || 0} likes</span>*!/*/}
                  {/*  /!*</div>*!/*/}
                  {/*  <div className="flex items-center space-x-1">*/}
                  {/*    <MessageCircle className="h-4 w-4" />*/}
                  {/*    <span>{blog.comments || 0} comments</span>*/}
                  {/*  </div>*/}
                  {/*</div>*/}
                </div>

                <div className="flex flex-wrap items-center justify-between gap-6 text-muted-foreground mb-8">
                  <div className="flex items-center space-x-6">
                    <div className="flex items-center space-x-2">
                      <User className="h-5 w-5" />
                      <span className="font-medium">{blog.author_name}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-5 w-5" />
                      <span>{formatDate(blog.created_at)}</span>
                    </div>
                    {/*<div className="flex items-center space-x-2">*/}
                    {/*  <Clock className="h-5 w-5" />*/}
                    {/*  <span></span>*/}
                    {/*</div>*/}
                  </div>

                  <div className="flex items-center space-x-2">
                    {/*<Button variant="ghost" size="sm">*/}
                    {/*  <Bookmark className="h-4 w-4" />*/}
                    {/*</Button>*/}
                    {/*<Button variant="ghost" size="sm">*/}
                    {/*  <Heart className="h-4 w-4" />*/}
                    {/*</Button>*/}
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
                        <FaXTwitter className="h-4 w-4" />
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

              {/* Article Image */}
              {blog.featured_image && (
                  <div className="mb-8">
                    <img
                        src={`https://api.cybals.com/storage/${blog.featured_image}`}
                        alt={blog.title}
                        className="w-full h-96 object-cover rounded-2xl"
                    />
                  </div>
              )}

              {/* Article Content */}
              <div className="prose prose-lg max-w-none mb-12">
                <div className="text-muted-foreground leading-relaxed mb-6">
                  <p className="text-xl font-medium">{blog.short_description}</p>
                </div>
                <div
                    className="text-muted-foreground leading-relaxed blog-content"
                    dangerouslySetInnerHTML={{ __html: blog.long_description }}
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
                      {blog.tags?.map((tag) => (
                          <span key={tag} className="bg-blue-100 text-dark font-bold px-3 py-1 rounded-full text-sm">
                        #{tag}
                      </span>
                      )) || (
                          <span className="bg-accent/20 text-accent px-3 py-1 rounded-full text-sm">
                        #{blog.category.slug}
                      </span>
                      )}
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
                        <Facebook className="h-4 w-4" />

                      </Button>
                      <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleShare('X')}
                          className="border"
                      >
                        <FaXTwitter className="h-4 w-4 " />

                      </Button>
                      <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleShare('linkedin')}
                          className="border"
                      >
                        <Linkedin className="h-4 w-4 " />

                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Author Bio */}
              {/*<div className="bg-card rounded-2xl p-8 shadow-card mb-12">*/}
              {/*  <div className="flex items-start space-x-6">*/}
              {/*    <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground text-2xl font-bold">*/}
              {/*      {blog.author_name.charAt(0)}*/}
              {/*    </div>*/}
              {/*    <div className="flex-1">*/}
              {/*      <h3 className="text-xl font-bold text-foreground mb-2">{blog.author_name}</h3>*/}
              {/*      <p className="text-muted-foreground mb-4">*/}
              {/*        {blog.author_name === "Dr. Raghav Gupta"*/}
              {/*            ? "Founder & Director with 15+ years of experience in veterinary medicine and animal welfare. Passionate about creating sustainable solutions for cow protection across India."*/}
              {/*            : blog.author_name === "Priya Sharma"*/}
              {/*                ? "Operations Manager and former corporate professional who dedicated her life to animal welfare. Specializes in rescue operations and community outreach programs."*/}
              {/*                : "Dedicated team member specializing in animal welfare and rescue operations. Committed to providing the best care for all animals in our sanctuary."*/}
              {/*        }*/}
              {/*      </p>*/}
              {/*      <div className="flex items-center space-x-4">*/}
              {/*        <Button variant="warm" size="sm">*/}
              {/*          View Profile*/}
              {/*        </Button>*/}
              {/*        <Button variant="ghost" size="sm">*/}
              {/*          <MessageCircle className="h-4 w-4 mr-2" />*/}
              {/*          Contact*/}
              {/*        </Button>*/}
              {/*      </div>*/}
              {/*    </div>*/}
              {/*  </div>*/}
              {/*</div>*/}

              {/* Comments Section */}
              <div className="bg-card rounded-2xl p-8 shadow-card mb-12">
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Comments ({blog.comments?.length || 0})
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

                {/* Display actual comments if available */}
                {blog.comments && blog.comments.length > 0 ? (
                    <div className="space-y-6">
                      {blog.comments.map((comment: BlogComments, index: number) => (
                          <div key={index} className="border-b border-border pb-6">
                            <div className="flex items-start space-x-4">
                              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">
                                {comment.commenter_name?.charAt(0) || 'U'}
                              </div>
                              <div className="flex-1">
                                <div className="flex items-center space-x-2 mb-2">
                            <span className="font-semibold text-foreground">
                              {comment.commenter_name || 'Anonymous'}
                            </span>
                                  <span className="text-sm text-muted-foreground">
                              {comment.created_at ? formatDate(comment.created_at) : 'Recently'}
                            </span>
                                </div>
                                <p className="text-muted-foreground">
                                  {comment.comment_text || 'No content available'}
                                </p>
                              </div>
                            </div>
                          </div>
                      ))}
                    </div>
                ) : (
                    <div className="text-center py-8">
                      <MessageCircle className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                      <p className="text-muted-foreground">No comments yet. Be the first to share your thoughts!</p>
                    </div>
                )}
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
                {relatedPosts && relatedPosts.length > 0 ? (
                    relatedPosts.map((post) => (
                        <Link
                            key={post.id}
                            to={`/blog/${post.id}`}
                            className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-warm transition-all duration-300 hover:scale-105 group"
                        >
                          <img
                              src={post.featured_image || gaushalaImage}
                              alt={post.title}
                              className="w-full h-48 object-cover"
                          />
                          <div className="p-6">
                            <div className="flex items-center justify-between mb-3">
                  <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs font-medium">
                    {post.category?.name}
                  </span>
                              <span className="text-xs text-muted-foreground">
                    {formatDate(post.published_at)}
                  </span>
                            </div>
                            <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                              {post.title}
                            </h3>
                            <p className="text-muted-foreground text-sm mb-4">
                              {post.short_description}
                            </p>
                            <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">
                    By {post.author_name}
                  </span>
                              <ArrowRight className="h-4 w-4 text-primary" />
                            </div>
                          </div>
                        </Link>
                    ))
                ) : (
                    <p className="text-center col-span-3 text-muted-foreground">
                      No related articles found.
                    </p>
                )}
              </div>
            </div>
          </div>
        </section>

      </Layout>
  );
};

export default BlogDetail;