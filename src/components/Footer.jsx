import React from 'react';

export const Footer = () => {
  return (
    <footer className="bg-chocolate text-cream py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <img src="/3N/whitelogo.png" alt="3NDIARIES Logo" className="h-16 mb-4" />
            <p className="font-light text-cream/70 max-w-sm mb-6">
              Personalized luxury chocolates crafted for your sweetest moments. Based in Kerala, shipping nationwide.
            </p>
            <div className="font-script text-2xl text-gold">Make it memorable</div>
          </div>
          
          <div>
            <h3 className="font-serif text-xl mb-6 text-gold">Explore</h3>
            <ul className="space-y-3 font-light text-sm tracking-wider uppercase text-cream/80">
              <li><a href="#collections" className="hover:text-gold transition-colors">Collections</a></li>
              <li><a href="#customization" className="hover:text-gold transition-colors">Customization</a></li>
              <li><a href="#gallery" className="hover:text-gold transition-colors">Gallery</a></li>
              <li><a href="#contact" className="hover:text-gold transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-serif text-xl mb-6 text-gold">Connect</h3>
            <ul className="space-y-3 font-light text-sm text-cream/80">
              <li>hello@3ndiaries.com</li>
              <li>+91 75618 49356</li>
              <li className="pt-4">
                <a href="#" className="hover:text-gold transition-colors mr-4">Instagram</a>
                <a href="#" className="hover:text-gold transition-colors">Facebook</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-cream/20 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-xs font-light text-cream/60 tracking-wider">
          <p>&copy; {new Date().getFullYear()} 3NDIARIES Chocolates. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Crafted with elegance</p>
        </div>
      </div>
    </footer>
  );
};
