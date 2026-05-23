import React from 'react';

export const PartnerWithUs = () => {
  return (
    <section className="py-24 bg-cream border-t border-b border-champagne/40">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <span className="font-script text-3xl text-gold block mb-4">Collaborations</span>
        <h2 className="text-3xl md:text-4xl font-serif text-chocolate mb-6">
          Partner With Us
        </h2>
        <p className="text-text font-light mb-10 leading-relaxed">
          Are you a wedding planner, event decorator, caterer, or photographer? We partner with industry professionals to provide premium, white-labeled, or co-branded luxury chocolate gifting for your clients. Enhance your event packages with our bespoke offerings.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-6 mt-8">
          <div className="border border-gold/30 p-6 bg-white shadow-sm flex-1">
            <h3 className="font-serif text-xl text-chocolate mb-2">Event Planners</h3>
            <p className="text-xs text-text/70 font-light uppercase tracking-widest">Exclusive Rates</p>
          </div>
          <div className="border border-gold/30 p-6 bg-white shadow-sm flex-1">
            <h3 className="font-serif text-xl text-chocolate mb-2">Decorators</h3>
            <p className="text-xs text-text/70 font-light uppercase tracking-widest">Theme Matching</p>
          </div>
          <div className="border border-gold/30 p-6 bg-white shadow-sm flex-1">
            <h3 className="font-serif text-xl text-chocolate mb-2">Caterers</h3>
            <p className="text-xs text-text/70 font-light uppercase tracking-widest">Bulk Supply</p>
          </div>
        </div>
        
        <div className="mt-12">
          <button className="btn-outline">Inquire About Partnerships</button>
        </div>
      </div>
    </section>
  );
};
