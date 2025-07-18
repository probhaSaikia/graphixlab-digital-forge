
import React from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Phone, Users, Briefcase, Sparkles, Target, TrendingUp, Clock, Mail, ExternalLink } from 'lucide-react';

const Careers = () => {
  const joinTeamWhatsAppLink = `https://wa.me/7002642149?text=${encodeURIComponent("Hello! I would like to join your team. Please let me know about available opportunities.")}`;
  
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-black py-20 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white animate-fade-in">
              Join Our Vision. <span className="text-electric-blue">Build Your Future.</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
              At GraphiXlab, we're not just building websites and software; we're crafting the future of digital experiences. 
              If you're a driven individual with a passion for innovation and a desire to make a real impact, you belong with us. 
              We're a dynamic team committed to pushing creative boundaries and delivering exceptional results for our clients.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose GraphiXlab Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
              Why Choose <span className="text-neon-pink">GraphiXlab</span>?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-black/60 border border-electric-blue/20 rounded-xl p-6 hover:transform hover:-translate-y-2 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-electric-blue/10 flex items-center justify-center flex-shrink-0">
                    <Sparkles className="text-electric-blue" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">Unleash Your Creativity</h3>
                    <p className="text-gray-400">
                      We champion creative freedom, empowering you to express bold ideas and shape innovative projects from concept to completion.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-black/60 border border-electric-blue/20 rounded-xl p-6 hover:transform hover:-translate-y-2 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-electric-blue/10 flex items-center justify-center flex-shrink-0">
                    <Target className="text-electric-blue" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">Impactful Work</h3>
                    <p className="text-gray-400">
                      Contribute to diverse, cutting-edge projects that transform businesses and redefine digital presence.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-black/60 border border-electric-blue/20 rounded-xl p-6 hover:transform hover:-translate-y-2 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-electric-blue/10 flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="text-electric-blue" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">Growth & Development</h3>
                    <p className="text-gray-400">
                      Grow your skills in a collaborative environment with opportunities for continuous learning and professional advancement.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-black/60 border border-electric-blue/20 rounded-xl p-6 hover:transform hover:-translate-y-2 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-electric-blue/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="text-electric-blue" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">Flexible Environment</h3>
                    <p className="text-gray-400">
                      Enjoy the autonomy of remote positions, allowing for a better work-life balance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Current Opportunities Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
              Current <span className="text-electric-blue">Opportunities</span>
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              {/* Telecaller Position */}
              <div className="bg-gradient-to-br from-electric-blue/5 to-neon-pink/5 border border-electric-blue/20 rounded-xl p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-electric-blue/10 flex items-center justify-center">
                    <Phone className="text-electric-blue" size={28} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Telecaller</h3>
                    <p className="text-electric-blue font-medium">Remote Position</p>
                  </div>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-3">
                    <span className="text-gray-400 font-medium">Location:</span>
                    <span className="text-white">Remote position</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-gray-400 font-medium">Compensation:</span>
                    <span className="text-neon-pink font-bold">Earn up to ₹30,000/month</span>
                  </div>
                  <div>
                    <span className="text-gray-400 font-medium">Role:</span>
                    <p className="text-white mt-2">
                      Engage with potential clients, introduce GraphiXlab's services, and generate qualified leads. 
                      Strong communication skills and a persuasive approach are key.
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media Influencer Position */}
              <div className="bg-gradient-to-br from-neon-pink/5 to-electric-blue/5 border border-neon-pink/20 rounded-xl p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-neon-pink/10 flex items-center justify-center">
                    <Users className="text-neon-pink" size={28} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Social Media Influencer</h3>
                    <p className="text-neon-pink font-medium">Marketing Specialist</p>
                  </div>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-3">
                    <span className="text-gray-400 font-medium">Location:</span>
                    <span className="text-white">Remote position</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-gray-400 font-medium">Compensation:</span>
                    <span className="text-electric-blue font-bold">Earn up to ₹30,000/month</span>
                  </div>
                  <div>
                    <span className="text-gray-400 font-medium">Role:</span>
                    <p className="text-white mt-2">
                      Develop and execute engaging social media strategies, create compelling content, and grow our online presence. 
                      A strong understanding of digital trends is essential.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Don't See Your Role Section */}
            <div className="bg-black/60 border border-electric-blue/20 rounded-xl p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-electric-blue/10 flex items-center justify-center mx-auto mb-6">
                <Briefcase className="text-electric-blue" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Don't See Your Role?</h3>
              <p className="text-gray-300 text-lg">
                We're always on the lookout for talented designers, developers, digital marketers, and other innovators. 
                If you're passionate about what we do, we'd still love to hear from you!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Ready to <span className="text-electric-blue">Innovate</span> With Us?
            </h2>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
              <Button 
                asChild 
                className="bg-gradient-to-r from-electric-blue to-neon-pink hover:from-electric-blue/80 hover:to-neon-pink/80 text-white font-bold px-8 py-4 text-lg rounded-lg hover:shadow-lg hover:shadow-electric-blue/25 transition-all duration-300 group"
              >
                <a href={joinTeamWhatsAppLink} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 transition-transform duration-300 group-hover:scale-110" size={20} />
                  Apply Now!
                </a>
              </Button>
            </div>

            <div className="text-gray-300">
              <p className="mb-4">Or, send your resume and a brief cover letter to:</p>
              <a 
                href="mailto:graphixlab.in@gmail.com?subject=Career Opportunity - GraphiXlab" 
                className="inline-flex items-center gap-2 text-electric-blue hover:text-electric-blue/80 transition-colors duration-300 font-medium text-lg"
              >
                <Mail size={20} />
                graphixlab.in@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Careers;
