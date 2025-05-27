
import React from "react";

const ImageShowcaseSection = () => {
  return (
    <section className="w-full pt-0 pb-8 sm:pb-12 bg-gray-50" id="features">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-12 animate-on-scroll">
          <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-tight text-gray-900 mb-3 sm:mb-4">
            What you get access to when you join Solvearn
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            Build or join teams, transform ideas into reality, and achieve success with like-minded action-takers!
          </p>
        </div>
        
        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Feature 1 */}
          <div className="bg-white p-6 rounded-2xl shadow-elegant hover:shadow-elegant-hover transition-all duration-300 text-center animate-on-scroll">
            <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🚀</span>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Be Part of Meaningful Startups</h3>
            <p className="text-gray-600 text-sm">
              Build or join teams, transform ideas into reality, and achieve success with like-minded action-takers!
            </p>
          </div>
          
          {/* Feature 2 */}
          <div className="bg-white p-6 rounded-2xl shadow-elegant hover:shadow-elegant-hover transition-all duration-300 text-center animate-on-scroll">
            <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🏆</span>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Monthly Hackathons</h3>
            <p className="text-gray-600 text-sm">
              Compete against other teams, secure top spots on the leaderboard, and win prizes together!
            </p>
          </div>
          
          {/* Feature 3 */}
          <div className="bg-white p-6 rounded-2xl shadow-elegant hover:shadow-elegant-hover transition-all duration-300 text-center animate-on-scroll">
            <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">💡</span>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Startup Spotlight</h3>
            <p className="text-gray-600 text-sm">
              Top teams each quarter get a chance to pitch to investors and receive valuable feedback!
            </p>
          </div>
          
          {/* Feature 4 */}
          <div className="bg-white p-6 rounded-2xl shadow-elegant hover:shadow-elegant-hover transition-all duration-300 text-center animate-on-scroll">
            <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🤝</span>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Get Help Throughout</h3>
            <p className="text-gray-600 text-sm">
              Coaches assist your team with getting started, completing the project, and bringing your startup to market!
            </p>
          </div>
        </div>
        
        {/* Main showcase image */}
        <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-elegant mx-auto max-w-4xl animate-on-scroll">
          <div className="w-full">
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
              alt="Team collaboration and startup development workspace" 
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="bg-white p-4 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-display font-semibold mb-3 sm:mb-4 text-purple-800">
              Transform Ideas into Funded Startups
            </h3>
            <p className="text-gray-700 text-sm sm:text-base">
              Join thousands of entrepreneurs who are building the next generation of successful startups. 
              Our platform connects visionaries with talented team members, providing the tools and 
              support needed to turn great ideas into thriving businesses.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageShowcaseSection;
