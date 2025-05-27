
import React from "react";

const SpecsSection = () => {
  return (
    <section className="w-full py-6 sm:py-10 bg-white" id="how-it-works">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        {/* Header with badge and line */}
        <div className="flex items-center gap-4 mb-8 sm:mb-16">
          <div className="flex items-center gap-4">
            <div className="solvearn-chip">
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-purple-600 text-white mr-2">💡</span>
              <span>How It Works</span>
            </div>
          </div>
          <div className="flex-1 h-[1px] bg-gray-300"></div>
        </div>
        
        {/* Two paths section */}
        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 max-w-6xl mx-auto">
          {/* I have an idea path */}
          <div className="bg-gradient-to-br from-purple-50 to-orange-50 p-6 sm:p-8 rounded-2xl">
            <div className="mb-6">
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-purple-800 mb-4">
                I have an idea
              </h3>
              <p className="text-gray-700 mb-6">
                Transform your vision into a funded startup with the right team
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-sm">1</div>
                <div>
                  <h4 className="font-semibold text-gray-900">Create a project card</h4>
                  <p className="text-gray-600 text-sm">Share your startup idea and vision</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-sm">2</div>
                <div>
                  <h4 className="font-semibold text-gray-900">Select team members with roles</h4>
                  <p className="text-gray-600 text-sm">Find the perfect co-founders and team</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-sm">3</div>
                <div>
                  <h4 className="font-semibold text-gray-900">Turn vision into a funded startup together</h4>
                  <p className="text-gray-600 text-sm">Build, launch, and scale your startup</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* I want to join path */}
          <div className="bg-gradient-to-br from-orange-50 to-purple-50 p-6 sm:p-8 rounded-2xl">
            <div className="mb-6">
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-orange-600 mb-4">
                I want to join a project
              </h3>
              <p className="text-gray-700 mb-6">
                Join exciting startups and make your mark from day one
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-sm">1</div>
                <div>
                  <h4 className="font-semibold text-gray-900">Browse interesting projects</h4>
                  <p className="text-gray-600 text-sm">Discover startups that match your interests</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-sm">2</div>
                <div>
                  <h4 className="font-semibold text-gray-900">Apply to your favorite team with skills</h4>
                  <p className="text-gray-600 text-sm">Showcase your abilities and expertise</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-sm">3</div>
                <div>
                  <h4 className="font-semibold text-gray-900">Make a difference in new team from day one</h4>
                  <p className="text-gray-600 text-sm">Start contributing immediately to meaningful projects</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom message */}
        <div className="text-center mt-12">
          <h4 className="text-xl sm:text-2xl font-display font-bold text-gray-900 mb-4">
            No more back-and-forth DM's to team up!
          </h4>
          <p className="text-gray-600 max-w-2xl mx-auto">
            You don't need any prior connections, the journey starts from here!
          </p>
        </div>
      </div>
    </section>
  );
};

export default SpecsSection;
