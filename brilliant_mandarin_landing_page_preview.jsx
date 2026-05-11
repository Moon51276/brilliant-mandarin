export default function BrilliantMandarinLandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-red-50 overflow-hidden relative font-sans">
      {/* Background Chinese Characters */}
      <div className="absolute inset-0 opacity-10 text-6xl md:text-8xl font-bold text-pink-400 pointer-events-none select-none">
        <div className="absolute top-10 left-10">学</div>
        <div className="absolute top-40 right-20">爱</div>
        <div className="absolute bottom-32 left-24">福</div>
        <div className="absolute bottom-16 right-10">乐</div>
        <div className="absolute top-1/2 left-1/2">中</div>
      </div>

      {/* Navbar */}
      <header className="flex items-center justify-between px-8 py-6 relative z-10">
        <div>
          <h1 className="text-3xl font-extrabold text-red-500">Brilliant Mandarin</h1>
          <p className="text-sm text-gray-500">Fun • Friendly • Stress-Free Chinese Learning</p>
        </div>

        <nav className="hidden md:flex gap-8 text-gray-700 font-medium">
          <a href="#about" className="hover:text-red-500">About</a>
          <a href="#courses" className="hover:text-red-500">Courses</a>
          <a href="#tutors" className="hover:text-red-500">Tutors</a>
          <a href="#reviews" className="hover:text-red-500">Reviews</a>
        </nav>

        <a
          href="mailto:mkbrilliantmandarin@gmail.com"
          className="bg-gradient-to-r from-pink-500 to-red-500 text-white px-5 py-2 rounded-full shadow-lg hover:scale-105 transition"
        >
          Contact Us
        </a>
      </header>

      {/* Hero Section */}
      <section className="grid md:grid-cols-2 gap-10 items-center px-8 md:px-16 py-10 relative z-10">
        <div>
          <div className="inline-block bg-pink-100 text-red-500 px-4 py-1 rounded-full text-sm font-semibold mb-5">
            Learn Chinese The Fun Way ✨
          </div>

          <h2 className="text-5xl md:text-6xl font-extrabold leading-tight text-gray-900 mb-6">
            Speak Mandarin <br />
            With Confidence
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            Interactive and stress-free Chinese lessons for kids and adults. 
            Learn speaking, listening, reading and writing through fun cultural activities, engaging conversations and personalised teaching.
          </p>

          <div className="flex flex-wrap gap-4 mb-8">
            <a
              href="mailto:mkbrilliantmandarin@gmail.com"
              className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-6 py-3 rounded-full shadow-xl hover:scale-105 transition"
            >
              Email Us
            </a>

            <a
              href="https://wa.me/447825253878"
              className="bg-white border-2 border-pink-300 text-pink-600 px-6 py-3 rounded-full shadow hover:bg-pink-50 transition"
            >
              WhatsApp Now
            </a>
          </div>

          <div className="grid grid-cols-3 gap-4 max-w-lg">
            <div className="bg-white rounded-2xl shadow-md p-4 text-center">
              <div className="text-3xl font-bold text-red-500">5★</div>
              <p className="text-gray-500 text-sm">Student Rating</p>
            </div>

            <div className="bg-white rounded-2xl shadow-md p-4 text-center">
              <div className="text-3xl font-bold text-red-500">1:1</div>
              <p className="text-gray-500 text-sm">Personalised Lessons</p>
            </div>

            <div className="bg-white rounded-2xl shadow-md p-4 text-center">
              <div className="text-3xl font-bold text-red-500">Fun</div>
              <p className="text-gray-500 text-sm">No Pressure Learning</p>
            </div>
          </div>
        </div>

        {/* Right Visual */}
        <div className="relative flex justify-center">
          <div className="absolute w-80 h-80 bg-pink-200 rounded-full blur-3xl opacity-40"></div>

          <div className="relative z-10">
            <div className="bg-white rounded-[40px] shadow-2xl p-6 border border-pink-100">
              <img
                src="https://i.postimg.cc/2VYc4R8r/moon.jpg"
                alt="Main Tutor Moon"
                className="w-[330px] h-[420px] object-cover rounded-[30px]"
              />

              <div className="mt-5 text-center">
                <h3 className="text-2xl font-bold text-gray-900">Moon</h3>
                <p className="text-pink-500 font-medium">Main Mandarin Tutor</p>
              </div>
            </div>

            <div className="absolute -left-8 top-10 bg-white px-5 py-3 rounded-2xl shadow-lg">
              <div className="text-red-500 font-bold text-2xl">★ 5.0</div>
              <p className="text-sm text-gray-500">Happy Students</p>
            </div>

            <div className="absolute -right-8 bottom-10 bg-white px-5 py-3 rounded-2xl shadow-lg">
              <div className="text-red-500 font-bold text-xl">Fun Learning</div>
              <p className="text-sm text-gray-500">Games • Culture • Speaking</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Learn Chinese */}
      <section id="about" className="px-8 md:px-16 py-16 relative z-10">
        <div className="bg-white rounded-[40px] shadow-xl p-10 border border-pink-100">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-4xl font-extrabold text-gray-900 mb-6">
                Why Learn Chinese?
              </h3>

              <div className="space-y-5 text-gray-600 text-lg leading-relaxed">
                <div className="flex gap-4">
                  <div className="text-2xl">🌏</div>
                  <p>Chinese is one of the most spoken languages in the world and opens doors to global opportunities.</p>
                </div>

                <div className="flex gap-4">
                  <div className="text-2xl">💼</div>
                  <p>Learning Mandarin helps with future careers, business and international communication.</p>
                </div>

                <div className="flex gap-4">
                  <div className="text-2xl">🎎</div>
                  <p>Discover exciting traditions, fun activities and engaging learning experiences.</p>
                </div>

                <div className="flex gap-4">
                  <div className="text-2xl">🎉</div>
                  <p>Our lessons are interactive and pressure-free, making learning enjoyable for every age.</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://i.postimg.cc/s17HQDys/culture.jpg"
                alt="What You Will Learn"
                className="rounded-[30px] shadow-xl w-full object-cover"
              />

              
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="courses" className="px-8 md:px-16 py-8 relative z-10">
        <h3 className="text-4xl font-extrabold text-center text-gray-900 mb-12">
          Lesson Pricing
        </h3>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-white rounded-[35px] shadow-xl p-8 border border-pink-100 hover:scale-[1.02] transition">
            <div className="text-5xl mb-4">📚</div>
            <h4 className="text-2xl font-bold mb-3">1-to-1 Private Lesson</h4>
            <div className="text-4xl font-extrabold text-red-500 mb-4">£20/hour</div>
            <p className="text-gray-600 leading-relaxed">
              Personalised Mandarin learning with fun and engaging teaching methods.
            </p>
          </div>

          <div className="bg-gradient-to-br from-red-500 to-pink-500 text-white rounded-[35px] shadow-2xl p-8 hover:scale-[1.02] transition">
            <div className="text-5xl mb-4">🚗</div>
            <h4 className="text-2xl font-bold mb-3">Home Visit Private Lessons</h4>
            <div className="text-4xl font-extrabold mb-4">£25-30/hour</div>
            <p className="leading-relaxed text-pink-50">
              Personalised Mandarin teaching at your home. Pricing depends on travelling distance.
            </p>
          </div>
        </div>
      </section>

      {/* Tutors */}
      <section id="tutors" className="px-8 md:px-16 py-16 relative z-10">
        <h3 className="text-4xl font-extrabold text-center text-gray-900 mb-12">
          Meet Our Tutors
        </h3>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white rounded-[30px] shadow-xl overflow-hidden border border-pink-100">
            <img
              src="https://i.postimg.cc/2VYc4R8r/moon.jpg"
              alt="Moon"
              className="h-80 w-full object-cover"
            />
            <div className="p-6 text-center">
              <h4 className="text-2xl font-bold">Moon</h4>
              <p className="text-pink-500 font-medium">Main Tutor</p>
            </div>
          </div>

          <div className="bg-white rounded-[30px] shadow-xl overflow-hidden border border-pink-100">
            <img
              src="https://i.postimg.cc/yWcpgYKp/benjamin.jpg"
              alt="Benjamin"
              className="h-80 w-full object-cover"
            />
            <div className="p-6 text-center">
              <h4 className="text-2xl font-bold">Benjamin</h4>
              <p className="text-pink-500 font-medium">Mandarin Tutor</p>
            </div>
          </div>

          <div className="bg-white rounded-[30px] shadow-xl overflow-hidden border border-pink-100">
            <img
              src="https://i.postimg.cc/QV1Y9xD2/jefferson.jpg"
              alt="Jefferson"
              className="h-80 w-full object-cover"
            />
            <div className="p-6 text-center">
              <h4 className="text-2xl font-bold">Jefferson</h4>
              <p className="text-pink-500 font-medium">Mandarin Tutor</p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="px-8 md:px-16 py-12 relative z-10">
        <h3 className="text-4xl font-extrabold text-center text-gray-900 mb-12">
          Student Reviews
        </h3>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white rounded-[30px] shadow-lg p-8 border border-pink-100">
            <div className="text-yellow-400 text-2xl mb-4">★★★★★</div>
            <p className="text-gray-600 leading-relaxed mb-4">
              “My child enjoys every lesson and is becoming more confident speaking Mandarin!”
            </p>
            <h5 className="font-bold text-gray-800">— Parent Review</h5>
          </div>

          <div className="bg-white rounded-[30px] shadow-lg p-8 border border-pink-100">
            <div className="text-yellow-400 text-2xl mb-4">★★★★★</div>
            <p className="text-gray-600 leading-relaxed mb-4">
              “Very friendly and patient tutor. Learning Chinese is much easier and more fun now.”
            </p>
            <h5 className="font-bold text-gray-800">— Adult Student</h5>
          </div>

          <div className="bg-white rounded-[30px] shadow-lg p-8 border border-pink-100">
            <div className="text-yellow-400 text-2xl mb-4">★★★★★</div>
            <p className="text-gray-600 leading-relaxed mb-4">
              “The cultural activities and interactive lessons make every class exciting!”
            </p>
            <h5 className="font-bold text-gray-800">— Happy Learner</h5>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-8 md:px-16 py-20 relative z-10">
        <div className="bg-gradient-to-r from-red-500 to-pink-500 rounded-[40px] p-12 text-center text-white shadow-2xl max-w-6xl mx-auto">
          <h3 className="text-5xl font-extrabold mb-6">
            Start Your Mandarin Journey Today!
          </h3>

          <p className="text-xl text-pink-50 mb-8 max-w-3xl mx-auto">
            Fun lessons, supportive tutors and personalised teaching for every student.
          </p>

          <div className="flex flex-wrap justify-center gap-5">
            <a
              href="mailto:mkbrilliantmandarin@gmail.com"
              className="bg-white text-red-500 px-8 py-4 rounded-full font-bold shadow-lg hover:scale-105 transition"
            >
              Email: mkbrilliantmandarin@gmail.com
            </a>

            <a
              href="https://wa.me/447825253878"
              className="bg-pink-100 text-red-500 px-8 py-4 rounded-full font-bold shadow-lg hover:scale-105 transition"
            >
              WhatsApp: +44 7825 253878
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
