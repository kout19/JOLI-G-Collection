const About = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1920&h=1080&fit=crop"
            alt="About Us"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Our Story
          </h1>
          <p className="text-xl md:text-2xl text-white/90">
            Crafting premium fashion and lifestyle experiences
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Brand Story */}
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
              Welcome to Joli G Collection
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                Founded with a passion for elegance and quality, Joli G
                Collection represents the perfect fusion of timeless style and
                modern sophistication. We believe that fashion is not just about
                clothing—it's about expressing your unique identity and
                embracing a lifestyle of refinement.
              </p>
              <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                Our journey began with a simple vision: to curate a collection
                of premium fashion and lifestyle products that combine
                exceptional craftsmanship with contemporary design. Every piece
                in our collection is carefully selected to ensure it meets our
                high standards of quality, style, and value.
              </p>
            </div>
          </div>

          {/* Image Section */}
          <div className="mb-16">
            <img
              src="https://images.unsplash.com/photo-1445205170230-053b83016050?w=1200&h=600&fit=crop"
              alt="Our Collection"
              className="w-full h-auto rounded-2xl shadow-xl"
            />
          </div>

          {/* Values */}
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-12 text-center">
              Our Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#D4AF37] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                  Quality First
                </h3>
                <p className="text-neutral-600">
                  We never compromise on quality. Every product is selected for
                  its superior craftsmanship and materials.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#D4AF37] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                  Customer Focus
                </h3>
                <p className="text-neutral-600">
                  Your satisfaction is our priority. We're committed to
                  providing exceptional service and support.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#D4AF37] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                  Style & Innovation
                </h3>
                <p className="text-neutral-600">
                  We stay ahead of trends while honoring timeless elegance,
                  bringing you the best of both worlds.
                </p>
              </div>
            </div>
          </div>

          {/* Mission */}
          <div className="bg-neutral-50 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
              Our Mission
            </h2>
            <p className="text-lg text-neutral-700 leading-relaxed">
              To empower individuals to express their unique style through
              premium fashion and lifestyle products. We strive to make luxury
              accessible while maintaining the highest standards of quality and
              design. At Joli G Collection, we're not just selling products—we're
              curating experiences that enhance your everyday life.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

