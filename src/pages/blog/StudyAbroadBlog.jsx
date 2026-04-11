import React, { useState, useEffect } from "react";
import StudentRegistrationPopup from "../../components/common/StudentRegistrationPopup";

const StudyAbroadBlog = () => {
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Students");
  const [filteredArticles, setFilteredArticles] = useState([]);
  const [visibleCount, setVisibleCount] = useState(6);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);


  const studentsArticles = [
    {
      id: 1,
      category: "Blog",
      date: "Apr 8, 2026",
      title: "5 Things I Wish I Knew Before Studying in Canada",
      excerpt:
        "Essential tips and insights for international students planning to study in Canada, from weather preparation to cultural adaptation.",
      image:
        "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=800&q=80",
      tag: "Canada",
      readTime: "5 min read",
      audience: "Students",
      content: `
        <div class="space-y-6">
          <h3 class="text-2xl font-bold text-gray-900 mb-4">Introduction</h3>
          <p class="text-gray-700 leading-relaxed mb-4">
            Studying in Canada is an incredible opportunity, but there are definitely things I wish someone had told me before I arrived. From the harsh winters to the amazing multicultural environment, here are five crucial insights that would have made my transition smoother.
          </p>
          
          <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">1. Prepare for Extreme Weather</h3>
          <p class="text-gray-700 leading-relaxed mb-4">
            Canadian winters are no joke. Temperatures can drop to -30°C or lower in many parts of the country. Invest in quality winter gear: a good parka, thermal layers, waterproof boots, and don't forget accessories like gloves, scarves, and hats. Your first winter will be challenging, but you'll adapt!
          </p>
          <ul class="list-disc list-inside text-gray-700 space-y-2 mb-4 pl-4">
            <li>Buy a quality winter coat rated for -30°C or lower</li>
            <li>Layer clothing: thermal base + fleece + waterproof outer shell</li>
            <li>Waterproof boots with good traction for ice</li>
            <li>Don't forget accessories: gloves, scarves, hats, and hand warmers</li>
          </ul>
          
          <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">2. Healthcare System Navigation</h3>
          <p class="text-gray-700 leading-relaxed mb-4">
            While Canada has excellent healthcare, the system works differently than many other countries. As an international student, you'll need private health insurance. Make sure you understand what's covered and keep your insurance card with you at all times.
          </p>
          <div class="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg mb-4">
            <p class="text-blue-800 text-sm">
              <strong>Pro Tip:</strong> Many universities offer student health plans. Compare them with private options to find the best coverage for your needs.
            </p>
          </div>
          
          <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">3. Part-Time Work Opportunities</h3>
          <p class="text-gray-700 leading-relaxed mb-4">
            International students can work up to 20 hours per week during study sessions and full-time during scheduled breaks. This is a great way to gain Canadian work experience and supplement your income. Start looking for opportunities early!
          </p>
          
          <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">4. Embrace the Multicultural Environment</h3>
          <p class="text-gray-700 leading-relaxed mb-4">
            Canada is incredibly diverse. You'll meet people from all over the world. This is one of the best aspects of studying here—embrace it! Join cultural clubs, attend international student events, and make connections across different communities.
          </p>
          
          <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">5. Cost of Living Reality</h3>
          <p class="text-gray-700 leading-relaxed mb-4">
            While tuition is already high, don't underestimate living expenses. Major cities like Toronto and Vancouver are particularly expensive. Budget carefully for rent, food, transportation, and unexpected costs. Consider living with roommates to reduce expenses.
          </p>
          
          <div class="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl mt-8">
            <h4 class="font-bold text-gray-900 mb-2">Final Thoughts</h4>
            <p class="text-gray-700">
              Studying abroad is a journey of growth. Be patient with yourself, stay curious, and don't hesitate to ask for help. Canada welcomes international students with open arms—you've got this!
            </p>
          </div>
        </div>
      `,
    },
    {
      id: 2,
      category: "Blog",
      date: "Apr 1, 2026",
      title: "Top UK Scholarships for International Students",
      excerpt:
        "Discover the most prestigious and generous scholarships available for international students pursuing higher education in the United Kingdom.",
      image:
        "https://plus.unsplash.com/premium_photo-1733306644309-90a33768d232?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tag: "UK",
      readTime: "8 min read",
      audience: "Students",
      content: `
        <div class="space-y-6">
          <h3 class="text-2xl font-bold text-gray-900 mb-4">Introduction</h3>
          <p class="text-gray-700 leading-relaxed mb-4">
            The United Kingdom offers world-class education, and while it can be expensive, numerous scholarships can help make your dreams affordable. Here's a comprehensive guide to the top scholarships available for international students.
          </p>
          
          <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">Chevening Scholarships</h3>
          <p class="text-gray-700 leading-relaxed mb-4">
            The UK government's global scholarship program, funded by the Foreign, Commonwealth & Development Office and partner organizations. Chevening offers full funding for a one-year master's degree at any UK university.
          </p>
          <ul class="list-disc list-inside text-gray-700 space-y-2 mb-4 pl-4">
            <li>Covers tuition fees, living expenses, and travel costs</li>
            <li>Open to professionals with leadership potential</li>
            <li>Requires 2+ years of work experience</li>
            <li>Application deadline: Early November</li>
          </ul>
          
          <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">Commonwealth Scholarships</h3>
          <p class="text-gray-700 leading-relaxed mb-4">
            For students from Commonwealth countries, these scholarships cover tuition fees, airfare, and living expenses. They're highly competitive but offer comprehensive support for both master's and PhD programs.
          </p>
          
          <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">Gates Cambridge Scholarships</h3>
          <p class="text-gray-700 leading-relaxed mb-4">
            Established by the Bill and Melinda Gates Foundation, these scholarships fund outstanding applicants from countries outside the UK to pursue a postgraduate degree at the University of Cambridge.
          </p>
          <div class="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg mb-4">
            <p class="text-amber-800 text-sm">
              <strong>Note:</strong> Gates Cambridge is one of the most prestigious scholarships globally, with a selection rate of less than 1%.
            </p>
          </div>
          
          <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">Rhodes Scholarships</h3>
          <p class="text-gray-700 leading-relaxed mb-4">
            The oldest and perhaps most prestigious international scholarship program, enabling outstanding students from around the world to study at the University of Oxford.
          </p>
          
          <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">Application Tips</h3>
          <p class="text-gray-700 leading-relaxed mb-4">
            Start preparing early, craft a compelling personal statement, secure strong references, and demonstrate leadership potential. Each scholarship has specific criteria—read them carefully!
          </p>
        </div>
      `,
    },
    {
      id: 3,
      category: "Blog",
      date: "Mar 31, 2026",
      title: "How to Write a Winning Statement of Purpose",
      excerpt:
        "Master the art of crafting a compelling SOP that stands out to admissions committees and increases your chances of acceptance.",
      image:
        "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=800&q=80",
      tag: "Application",
      readTime: "7 min read",
      audience: "Students",
      content: `
        <div class="space-y-6">
          <h3 class="text-2xl font-bold text-gray-900 mb-4">Understanding the SOP</h3>
          <p class="text-gray-700 leading-relaxed mb-4">
            Your Statement of Purpose is your chance to tell your story beyond grades and test scores. It's where you explain your motivations, goals, and why you're the perfect fit for the program.
          </p>
          
          <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">Structure Your Story</h3>
          <p class="text-gray-700 leading-relaxed mb-4">
            Start with a compelling hook, discuss your academic background, explain your career goals, and connect why this specific program is the bridge between your past and future.
          </p>
          <ul class="list-disc list-inside text-gray-700 space-y-2 mb-4 pl-4">
            <li><strong>Introduction:</strong> Capture attention with a personal anecdote or defining moment</li>
            <li><strong>Academic Background:</strong> Highlight relevant coursework, projects, and achievements</li>
            <li><strong>Professional Experience:</strong> Connect work experience to your academic goals</li>
            <li><strong>Why This Program:</strong> Be specific about courses, faculty, and resources</li>
            <li><strong>Future Goals:</strong> Show how this degree fits into your long-term vision</li>
          </ul>
          
          <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">Common Mistakes to Avoid</h3>
          <p class="text-gray-700 leading-relaxed mb-4">
            Don't repeat your resume, avoid generic statements, don't use overly complex vocabulary, and never submit without proofreading. Authenticity beats perfection.
          </p>
          
          <div class="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg mb-4">
            <p class="text-green-800 text-sm">
              <strong>Key Tip:</strong> Show, don't tell. Instead of saying "I'm passionate," describe a specific experience that demonstrates your passion.
            </p>
          </div>
        </div>
      `,
    },
    {
      id: 4,
      category: "Blog",
      date: "Mar 28, 2026",
      title: "Student Visa Application Guide 2026",
      excerpt:
        "Complete step-by-step guide to applying for your student visa, including document checklist and interview tips.",
      image:
        "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80",
      tag: "Visa",
      readTime: "10 min read",
      audience: "Students",
      content: `
        <div class="space-y-6">
          <h3 class="text-2xl font-bold text-gray-900 mb-4">Visa Application Process</h3>
          <p class="text-gray-700 leading-relaxed mb-4">
            Applying for a student visa can seem daunting, but with proper preparation, it's manageable. Start early, gather all required documents, and be thorough in your application.
          </p>
          
          <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">Required Documents Checklist</h3>
          <ul class="list-disc list-inside text-gray-700 space-y-2 mb-4 pl-4">
            <li>Valid passport (minimum 6 months validity)</li>
            <li>Letter of acceptance from your institution</li>
            <li>Proof of financial support (bank statements, scholarship letters)</li>
            <li>Academic transcripts and certificates</li>
            <li>Language proficiency test scores (IELTS/TOEFL)</li>
            <li>Passport-sized photographs</li>
            <li>Statement of Purpose</li>
            <li>Medical examination results (if required)</li>
          </ul>
          
          <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">Interview Preparation</h3>
          <p class="text-gray-700 leading-relaxed mb-4">
            Be prepared to answer questions about your study plans, financial situation, ties to your home country, and post-graduation intentions. Practice common questions but don't memorize scripted answers.
          </p>
          
          <div class="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg mb-4">
            <p class="text-blue-800 text-sm">
              <strong>Important:</strong> Apply at least 3-4 months before your program starts to account for processing delays.
            </p>
          </div>
        </div>
      `,
    },
    {
      id: 5,
      category: "Blog",
      date: "Mar 23, 2026",
      title: "Budgeting Tips for International Students",
      excerpt:
        "Learn how to manage your finances effectively while studying abroad with these practical budgeting strategies.",
      image:
        "https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&w=800&q=80",
      tag: "Finance",
      readTime: "6 min read",
      audience: "Students",
      content: `
        <div class="space-y-6">
          <h3 class="text-2xl font-bold text-gray-900 mb-4">Smart Budgeting</h3>
          <p class="text-gray-700 leading-relaxed mb-4">
            Living on a student budget requires planning and discipline. Track your expenses, cook at home, use student discounts, and consider part-time work to supplement your income.
          </p>
          
          <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">Monthly Budget Breakdown</h3>
          <ul class="list-disc list-inside text-gray-700 space-y-2 mb-4 pl-4">
            <li><strong>Accommodation:</strong> 40-50% of your budget</li>
            <li><strong>Food & Groceries:</strong> 20-25%</li>
            <li><strong>Transportation:</strong> 10-15%</li>
            <li><strong>Utilities & Phone:</strong> 5-10%</li>
            <li><strong>Entertainment:</strong> 5-10%</li>
            <li><strong>Emergency Fund:</strong> 5%</li>
          </ul>
          
          <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">Money-Saving Tips</h3>
          <p class="text-gray-700 leading-relaxed mb-4">
            Cook in batches, use student discount cards, buy second-hand textbooks, share accommodation, use public transport, and take advantage of free campus events and resources.
          </p>
          
          <div class="bg-purple-50 border-l-4 border-purple-500 p-4 rounded-r-lg mb-4">
            <p class="text-purple-800 text-sm">
              <strong>Pro Tip:</strong> Open a local bank account to avoid international transaction fees and build credit history.
            </p>
          </div>
        </div>
      `,
    },
    {
      id: 6,
      category: "Blog",
      date: "Mar 18, 2026",
      title: "Making Friends as an International Student",
      excerpt:
        "Overcome loneliness and build meaningful connections with these proven strategies for making friends abroad.",
      image:
        "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80",
      tag: "Social Life",
      readTime: "5 min read",
      audience: "Students",
      content: `
        <div class="space-y-6">
          <h3 class="text-2xl font-bold text-gray-900 mb-4">Building Your Network</h3>
          <p class="text-gray-700 leading-relaxed mb-4">
            Moving to a new country can be lonely, but there are many ways to meet people. Join clubs, attend orientation events, participate in class discussions, and don't be afraid to initiate conversations.
          </p>
          
          <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">Where to Meet People</h3>
          <ul class="list-disc list-inside text-gray-700 space-y-2 mb-4 pl-4">
            <li>University clubs and societies</li>
            <li>International student orientation programs</li>
            <li>Study groups and library sessions</li>
            <li>Sports teams and fitness classes</li>
            <li>Volunteer opportunities</li>
            <li>Part-time workplaces</li>
            <li>Language exchange programs</li>
          </ul>
          
          <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">Overcoming Cultural Barriers</h3>
          <p class="text-gray-700 leading-relaxed mb-4">
            Be open-minded, ask questions about local customs, share your own culture, practice active listening, and remember that everyone is navigating social situations differently.
          </p>
          
          <div class="bg-pink-50 border-l-4 border-pink-500 p-4 rounded-r-lg mb-4">
            <p class="text-pink-800 text-sm">
              <strong>Remember:</strong> Quality over quantity. A few close friendships are more valuable than many superficial connections.
            </p>
          </div>
        </div>
      `,
    },
    {
      id: 7,
      category: "Blog",
      date: "Mar 15, 2026",
      title: "Accommodation Guide for International Students",
      excerpt:
        "Everything you need to know about finding the perfect place to live while studying abroad.",
      image:
        "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80",
      tag: "Housing",
      readTime: "8 min read",
      audience: "Students",
      content: `
        <div class="space-y-6">
          <h3 class="text-2xl font-bold text-gray-900 mb-4">Finding Housing</h3>
          <p class="text-gray-700 leading-relaxed mb-4">
            Choosing the right accommodation is crucial for your study abroad experience. Consider location, cost, amenities, and your lifestyle preferences when making this important decision.
          </p>
          
          <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">Types of Accommodation</h3>
          <ul class="list-disc list-inside text-gray-700 space-y-2 mb-4 pl-4">
            <li><strong>On-Campus Housing:</strong> Convenient, social, but often expensive</li>
            <li><strong>Off-Campus Apartments:</strong> More independence, potentially cheaper</li>
            <li><strong>Homestay:</strong> Cultural immersion, includes meals</li>
            <li><strong>Shared Housing:</strong> Cost-effective, built-in social network</li>
            <li><strong>Student Residences:</strong> Purpose-built for students</li>
          </ul>
          
          <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">What to Check Before Signing</h3>
          <p class="text-gray-700 leading-relaxed mb-4">
            Read the lease carefully, check for hidden fees, understand utility costs, verify internet availability, inspect the property in person or via video, and confirm proximity to campus and public transport.
          </p>
          
          <div class="bg-orange-50 border-l-4 border-orange-500 p-4 rounded-r-lg mb-4">
            <p class="text-orange-800 text-sm">
              <strong>Warning:</strong> Never send money without viewing the property or having a trusted person verify it. Beware of rental scams!
            </p>
          </div>
        </div>
      `,
    },
    {
      id: 8,
      category: "Blog",
      date: "Mar 10, 2026",
      title: "Cultural Adjustment: What to Expect",
      excerpt:
        "Navigate culture shock and adapt to your new environment with these expert tips.",
      image:
        "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=800&q=80",
      tag: "Culture",
      readTime: "6 min read",
      audience: "Students",
      content: `
        <div class="space-y-6">
          <h3 class="text-2xl font-bold text-gray-900 mb-4">Understanding Culture Shock</h3>
          <p class="text-gray-700 leading-relaxed mb-4">
            Cultural adjustment is a normal part of the study abroad experience. You'll likely go through stages: honeymoon, frustration, adjustment, and acceptance. Understanding this process helps you cope.
          </p>
          
          <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">The Four Stages</h3>
          <ul class="list-disc list-inside text-gray-700 space-y-2 mb-4 pl-4">
            <li><strong>Honeymoon (Weeks 1-4):</strong> Everything is exciting and new</li>
            <li><strong>Frustration (Months 2-3):</strong> Challenges become apparent, homesickness peaks</li>
            <li><strong>Adjustment (Months 4-6):</strong> You develop coping strategies and routines</li>
            <li><strong>Acceptance (6+ months):</strong> You feel comfortable and bicultural</li>
          </ul>
          
          <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">Coping Strategies</h3>
          <p class="text-gray-700 leading-relaxed mb-4">
            Stay connected with home but don't isolate yourself, learn the local language, participate in cultural activities, maintain a healthy lifestyle, seek support from international student services, and be patient with yourself.
          </p>
          
          <div class="bg-teal-50 border-l-4 border-teal-500 p-4 rounded-r-lg mb-4">
            <p class="text-teal-800 text-sm">
              <strong>Remember:</strong> Culture shock is temporary. Every challenge is an opportunity for growth and learning.
            </p>
          </div>
        </div>
      `,
    },
    {
      id: 9,
      category: "Blog",
      date: "Mar 5, 2026",
      title: "Part-Time Work Opportunities for Students",
      excerpt:
        "Discover how to balance work and study while gaining valuable international work experience.",
      image:
        "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80",
      tag: "Work",
      readTime: "7 min read",
      audience: "Students",
      content: `
        <div class="space-y-6">
          <h3 class="text-2xl font-bold text-gray-900 mb-4">Working While Studying</h3>
          <p class="text-gray-700 leading-relaxed mb-4">
            Many countries allow international students to work part-time during their studies. This provides income, work experience, and networking opportunities while helping you understand the local work culture.
          </p>
          
          <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">Popular Student Jobs</h3>
          <ul class="list-disc list-inside text-gray-700 space-y-2 mb-4 pl-4">
            <li>On-campus positions (library, cafeteria, administrative support)</li>
            <li>Retail and hospitality (cafes, restaurants, shops)</li>
            <li>Tutoring and teaching assistance</li>
            <li>Customer service roles</li>
            <li>Internships related to your field</li>
            <li>Freelance work (writing, design, programming)</li>
          </ul>
          
          <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">Balancing Work and Study</h3>
          <p class="text-gray-700 leading-relaxed mb-4">
            Don't exceed recommended hours, prioritize your studies, choose flexible employers, plan your schedule carefully, and remember that your primary purpose is education.
          </p>
          
          <div class="bg-indigo-50 border-l-4 border-indigo-500 p-4 rounded-r-lg mb-4">
            <p class="text-indigo-800 text-sm">
              <strong>Important:</strong> Check your visa restrictions carefully. Working illegally can result in deportation and future visa bans.
            </p>
          </div>
        </div>
      `,
    },
  ];

  const partnersArticles = [
    {
      id: 10,
      category: "Partners",
      date: "Apr 5, 2026",
      title: "Maximizing Your Commission as a Recruitment Partner",
      excerpt:
        "Strategies to increase your earnings and build sustainable partnerships with educational institutions worldwide.",
      image:
        "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80",
      tag: "Revenue",
      readTime: "8 min read",
      audience: "Recruitment Partners",
      content: `
        <div class="space-y-6">
          <h3 class="text-2xl font-bold text-gray-900 mb-4">Commission Optimization</h3>
          <p class="text-gray-700 leading-relaxed mb-4">
            As a recruitment partner, maximizing your commission requires understanding commission structures, focusing on high-value programs, and maintaining strong relationships with both students and institutions.
          </p>
          
          <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">Key Strategies</h3>
          <ul class="list-disc list-inside text-gray-700 space-y-2 mb-4 pl-4">
            <li>Focus on high-commission programs and institutions</li>
            <li>Build a strong pipeline of qualified students</li>
            <li>Maintain high conversion rates through quality counseling</li>
            <li>Negotiate better rates as your volume increases</li>
            <li>Diversify across multiple institutions and countries</li>
            <li>Provide exceptional post-placement support</li>
          </ul>
          
          <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">Understanding Commission Tiers</h3>
          <p class="text-gray-700 leading-relaxed mb-4">
            Many institutions offer tiered commission structures based on enrollment numbers. Reach higher tiers by consistently placing quality students, and you'll earn significantly more per placement.
          </p>
          
          <div class="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg mb-4">
            <p class="text-green-800 text-sm">
              <strong>Pro Tip:</strong> Track your performance metrics religiously. Data-driven decisions lead to higher earnings.
            </p>
          </div>
        </div>
      `,
    },
    {
      id: 11,
      category: "Partners",
      date: "Apr 2, 2026",
      title: "Building Your Student Recruitment Network",
      excerpt:
        "Proven methods to expand your reach and connect with more qualified students in your region.",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
      tag: "Networking",
      readTime: "7 min read",
      audience: "Recruitment Partners",
      content: `
        <div class="space-y-6">
          <h3 class="text-2xl font-bold text-gray-900 mb-4">Network Expansion</h3>
          <p class="text-gray-700 leading-relaxed mb-4">
            Building a strong network is crucial for recruitment success. Attend education fairs, collaborate with schools, leverage social media, and provide exceptional service to generate referrals.
          </p>
          
          <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">Effective Networking Channels</h3>
          <ul class="list-disc list-inside text-gray-700 space-y-2 mb-4 pl-4">
            <li>High school and college partnerships</li>
            <li>Education fairs and exhibitions</li>
            <li>Social media marketing (LinkedIn, Instagram, Facebook)</li>
            <li>Alumni networks and success stories</li>
            <li>Referral programs for past students</li>
            <li>Local education consultants and counselors</li>
          </ul>
          
          <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">Digital Marketing Strategies</h3>
          <p class="text-gray-700 leading-relaxed mb-4">
            Create valuable content, optimize for local search engines, run targeted ads, engage with your audience regularly, and showcase student success stories to build credibility and attract inquiries.
          </p>
          
          <div class="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg mb-4">
            <p class="text-blue-800 text-sm">
              <strong>Key Insight:</strong> Your network is your net worth. Invest time in building genuine relationships, not just transactions.
            </p>
          </div>
        </div>
      `,
    },
    {
      id: 12,
      category: "Partners",
      date: "Mar 30, 2026",
      title: "Understanding Commission Structures in 2026",
      excerpt:
        "A comprehensive breakdown of how commission models work and how to maximize your earnings.",
      image:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80",
      tag: "Commission",
      readTime: "9 min read",
      audience: "Recruitment Partners",
      content: `
        <div class="space-y-6">
          <h3 class="text-2xl font-bold text-gray-900 mb-4">Commission Models</h3>
          <p class="text-gray-700 leading-relaxed mb-4">
            Understanding different commission structures helps you make strategic decisions about which programs to promote and how to structure your business for maximum profitability.
          </p>
          
          <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">Common Commission Types</h3>
          <ul class="list-disc list-inside text-gray-700 space-y-2 mb-4 pl-4">
            <li><strong>Percentage-based:</strong> 10-20% of first-year tuition</li>
            <li><strong>Flat fee:</strong> Fixed amount per enrollment</li>
            <li><strong>Tiered structure:</strong> Higher rates for more placements</li>
            <li><strong>Bonus incentives:</strong> Extra rewards for targets</li>
            <li><strong>Renewal commissions:</strong> Ongoing payments for retained students</li>
          </ul>
          
          <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">Negotiation Tips</h3>
          <p class="text-gray-700 leading-relaxed mb-4">
            Demonstrate your value through quality placements, show consistent performance data, build long-term relationships, and don't be afraid to negotiate better terms as your track record grows.
          </p>
          
          <div class="bg-purple-50 border-l-4 border-purple-500 p-4 rounded-r-lg mb-4">
            <p class="text-purple-800 text-sm">
              <strong>Remember:</strong> The best commission structure aligns your success with student success. Avoid partners who pressure you into unethical practices.
            </p>
          </div>
        </div>
      `,
    },
    {
      id: 13,
      category: "Partners",
      date: "Mar 25, 2026",
      title: "CRM Tools for Education Consultants",
      excerpt:
        "Discover the best customer relationship management tools to streamline your recruitment workflow.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      tag: "Technology",
      readTime: "6 min read",
      audience: "Recruitment Partners",
      content: `
        <div class="space-y-6">
          <h3 class="text-2xl font-bold text-gray-900 mb-4">CRM Solutions</h3>
          <p class="text-gray-700 leading-relaxed mb-4">
            Using the right CRM can transform your business. Track student interactions, manage applications, set reminders, and analyze your performance metrics all in one place.
          </p>
          
          <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">Essential CRM Features</h3>
          <ul class="list-disc list-inside text-gray-700 space-y-2 mb-4 pl-4">
            <li>Student database and profile management</li>
            <li>Application tracking and status updates</li>
            <li>Automated email campaigns and follow-ups</li>
            <li>Document management and storage</li>
            <li>Performance analytics and reporting</li>
            <li>Calendar integration and task management</li>
            <li>Mobile accessibility</li>
          </ul>
          
          <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">Top CRM Platforms</h3>
          <p class="text-gray-700 leading-relaxed mb-4">
            Consider Salesforce, HubSpot, Zoho CRM, or education-specific platforms like AdmissionOnBoard's partner portal. Choose based on your budget, team size, and specific needs.
          </p>
          
          <div class="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg mb-4">
            <p class="text-amber-800 text-sm">
              <strong>Implementation Tip:</strong> Start simple, train your team thoroughly, and gradually add advanced features as you become comfortable with the system.
            </p>
          </div>
        </div>
      `,
    },
    {
      id: 14,
      category: "Partners",
      date: "Mar 20, 2026",
      title: "Marketing Strategies for Education Consultants",
      excerpt:
        "Digital and traditional marketing tactics to attract more students and grow your consultancy business.",
      image:
        "https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&w=800&q=80",
      tag: "Marketing",
      readTime: "8 min read",
      audience: "Recruitment Partners",
      content: `
        <div class="space-y-6">
          <h3 class="text-2xl font-bold text-gray-900 mb-4">Effective Marketing</h3>
          <p class="text-gray-700 leading-relaxed mb-4">
            Combine digital marketing (SEO, social media, content marketing) with traditional methods (seminars, school visits) to reach your target audience effectively.
          </p>
          
          <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">Digital Marketing Tactics</h3>
          <ul class="list-disc list-inside text-gray-700 space-y-2 mb-4 pl-4">
            <li>Search Engine Optimization (SEO) for local visibility</li>
            <li>Content marketing through blogs and guides</li>
            <li>Social media advertising on platforms students use</li>
            <li>Email marketing campaigns with valuable content</li>
            <li>Video testimonials and success stories</li>
            <li>Webinars and virtual information sessions</li>
          </ul>
          
          <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">Traditional Marketing</h3>
          <p class="text-gray-700 leading-relaxed mb-4">
            Don't underestimate face-to-face interactions. Attend education fairs, conduct school presentations, host information sessions, and build relationships with school counselors and teachers.
          </p>
          
          <div class="bg-pink-50 border-l-4 border-pink-500 p-4 rounded-r-lg mb-4">
            <p class="text-pink-800 text-sm">
              <strong>Marketing Mix:</strong> Allocate 70% of your budget to proven channels, 20% to testing new approaches, and 10% to experimental strategies.
            </p>
          </div>
        </div>
      `,
    },
    {
      id: 15,
      category: "Partners",
      date: "Mar 15, 2026",
      title: "Compliance and Ethics in Student Recruitment",
      excerpt:
        "Essential guidelines to ensure ethical practices and maintain your credibility in the industry.",
      image:
        "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80",
      tag: "Compliance",
      readTime: "7 min read",
      audience: "Recruitment Partners",
      content: `
        <div class="space-y-6">
          <h3 class="text-2xl font-bold text-gray-900 mb-4">Ethical Recruitment</h3>
          <p class="text-gray-700 leading-relaxed mb-4">
            Maintaining ethical standards is crucial for long-term success. Be transparent about costs, provide accurate information, and always act in the student's best interest.
          </p>
          
          <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">Key Ethical Principles</h3>
          <ul class="list-disc list-inside text-gray-700 space-y-2 mb-4 pl-4">
            <li>Provide honest information about programs and outcomes</li>
            <li>Disclose all fees and charges upfront</li>
            <li>Never guarantee admission or visas</li>
            <li>Respect student privacy and data protection</li>
            <li>Avoid conflicts of interest</li>
            <li>Stay updated on immigration and education policies</li>
          </ul>
          
          <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">Compliance Requirements</h3>
          <p class="text-gray-700 leading-relaxed mb-4">
            Understand and follow regulations in your country and destination countries. Maintain proper licenses, keep accurate records, and participate in ongoing professional development.
          </p>
          
          <div class="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg mb-4">
            <p class="text-red-800 text-sm">
              <strong>Warning:</strong> Unethical practices can destroy your reputation, result in legal consequences, and harm students. Always prioritize integrity over short-term gains.
            </p>
          </div>
        </div>
      `,
    },
    {
      id: 16,
      category: "Partners",
      date: "Mar 10, 2026",
      title: "Student Retention Strategies",
      excerpt:
        "How to ensure your referred students succeed and continue their education journey.",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
      tag: "Retention",
      readTime: "6 min read",
      audience: "Recruitment Partners",
      content: `
        <div class="space-y-6">
          <h3 class="text-2xl font-bold text-gray-900 mb-4">Keeping Students Engaged</h3>
          <p class="text-gray-700 leading-relaxed mb-4">
            Student success is key to sustainable recruitment business. Provide ongoing support, check in regularly, and help students navigate challenges throughout their study journey.
          </p>
          
          <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">Retention Strategies</h3>
          <ul class="list-disc list-inside text-gray-700 space-y-2 mb-4 pl-4">
            <li>Pre-departure orientation and preparation</li>
            <li>Regular check-ins during first semester</li>
            <li>24/7 emergency support availability</li>
            <li>Academic progress monitoring</li>
            <li>Cultural adjustment assistance</li>
            <li>Career counseling and internship support</li>
          </ul>
          
          <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">Benefits of High Retention</h3>
          <p class="text-gray-700 leading-relaxed mb-4">
            Successful students become your best marketers through referrals, positive reviews, and testimonials. They're also more likely to pursue further education, creating repeat business opportunities.
          </p>
          
          <div class="bg-teal-50 border-l-4 border-teal-500 p-4 rounded-r-lg mb-4">
            <p class="text-teal-800 text-sm">
              <strong>Success Metric:</strong> Aim for 90%+ retention rate. Track reasons for dropouts and continuously improve your support systems.
            </p>
          </div>
        </div>
      `,
    },
  ];

  const institutionsArticles = [
    {
      id: 17,
      category: "Institutions",
      date: "Apr 6, 2026",
      title: "Attracting Top International Talent to Your Institution",
      excerpt:
        "Strategies for universities and colleges to enhance their global recruitment and diversify their student body.",
      image:
        "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80",
      tag: "Recruitment",
      readTime: "9 min read",
      audience: "Institutions",
      content: `
        <div class="space-y-6">
          <h3 class="text-2xl font-bold text-gray-900 mb-4">Global Recruitment Strategies</h3>
          <p class="text-gray-700 leading-relaxed mb-4">
            Attracting international students requires a multi-faceted approach: strong online presence, partnerships with recruitment agencies, participation in education fairs, and showcasing your unique value proposition.
          </p>
          
          <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">Key Attraction Factors</h3>
          <ul class="list-disc list-inside text-gray-700 space-y-2 mb-4 pl-4">
            <li>Academic reputation and program quality</li>
            <li>Competitive tuition and scholarship opportunities</li>
            <li>Post-graduation work opportunities</li>
            <li>Campus facilities and student support services</li>
            <li>Location and quality of life</li>
            <li>Diversity and inclusion initiatives</li>
          </ul>
          
          <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">Digital Presence</h3>
          <p class="text-gray-700 leading-relaxed mb-4">
            Optimize your website for international audiences, create region-specific content, leverage social media platforms popular in target markets, and ensure your application process is user-friendly for international applicants.
          </p>
          
          <div class="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg mb-4">
            <p class="text-blue-800 text-sm">
              <strong>Strategic Insight:</strong> International students choose institutions based on reputation, outcomes, and support. Invest in all three areas for sustainable growth.
            </p>
          </div>
        </div>
      `,
    },
    {
      id: 18,
      category: "Institutions",
      date: "Apr 3, 2026",
      title: "Supporting International Student Success",
      excerpt:
        "Best practices for providing comprehensive support services to help international students thrive academically and socially.",
      image:
        "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80",
      tag: "Student Support",
      readTime: "8 min read",
      audience: "Institutions",
      content: `
        <div class="space-y-6">
          <h3 class="text-2xl font-bold text-gray-900 mb-4">Comprehensive Support</h3>
          <p class="text-gray-700 leading-relaxed mb-4">
            International students need specialized support: orientation programs, academic advising, language support, mental health services, and cultural integration activities to ensure their success.
          </p>
          
          <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">Essential Support Services</h3>
          <ul class="list-disc list-inside text-gray-700 space-y-2 mb-4 pl-4">
            <li>Comprehensive orientation and onboarding</li>
            <li>Dedicated international student advisors</li>
            <li>English language support and writing centers</li>
            <li>Cultural adjustment counseling</li>
            <li>Immigration and visa assistance</li>
            <li>Career services tailored for international students</li>
            <li>Peer mentoring programs</li>
          </ul>
          
          <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">Measuring Success</h3>
          <p class="text-gray-700 leading-relaxed mb-4">
            Track retention rates, graduation rates, student satisfaction scores, and post-graduation outcomes. Use this data to continuously improve your support services and demonstrate value to prospective students.
          </p>
          
          <div class="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg mb-4">
            <p class="text-green-800 text-sm">
              <strong>Best Practice:</strong> Successful international students become your ambassadors. Invest in their success, and they'll amplify your recruitment efforts organically.
            </p>
          </div>
        </div>
      `,
    },
    {
      id: 19,
      category: "Institutions",
      date: "Mar 29, 2026",
      title: "Digital Transformation in Higher Education",
      excerpt:
        "How institutions are leveraging technology to improve recruitment, enrollment, and student experience.",
      image:
        "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=800&q=80",
      tag: "Technology",
      readTime: "10 min read",
      audience: "Institutions",
      content: `
        <div class="space-y-6">
          <h3 class="text-2xl font-bold text-gray-900 mb-4">Embracing Technology</h3>
          <p class="text-gray-700 leading-relaxed mb-4">
            Digital transformation includes virtual campus tours, AI-powered chatbots for inquiries, streamlined application processes, and data analytics to improve decision-making.
          </p>
          
          <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">Key Technologies</h3>
          <ul class="list-disc list-inside text-gray-700 space-y-2 mb-4 pl-4">
            <li>Customer Relationship Management (CRM) systems</li>
            <li>Virtual and augmented reality campus tours</li>
            <li>AI-powered application processing</li>
            <li>Learning management systems (LMS)</li>
            <li>Student information systems (SIS)</li>
            <li>Data analytics and business intelligence tools</li>
            <li>Mobile apps for student engagement</li>
          </ul>
          
          <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">Implementation Strategy</h3>
          <p class="text-gray-700 leading-relaxed mb-4">
            Start with a clear digital strategy, involve stakeholders across departments, prioritize user experience, ensure data security, and provide adequate training for staff and students.
          </p>
          
          <div class="bg-purple-50 border-l-4 border-purple-500 p-4 rounded-r-lg mb-4">
            <p class="text-purple-800 text-sm">
              <strong>Digital First:</strong> Today's students are digital natives. Your technology infrastructure should meet their expectations for speed, convenience, and accessibility.
            </p>
          </div>
        </div>
      `,
    },
    {
      id: 20,
      category: "Institutions",
      date: "Mar 24, 2026",
      title: "Building Effective Partnership Networks",
      excerpt:
        "Guide to establishing and maintaining productive relationships with recruitment partners and agents worldwide.",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
      tag: "Partnerships",
      readTime: "7 min read",
      audience: "Institutions",
      content: `
        <div class="space-y-6">
          <h3 class="text-2xl font-bold text-gray-900 mb-4">Strategic Partnerships</h3>
          <p class="text-gray-700 leading-relaxed mb-4">
            Successful partnerships require clear communication, fair commission structures, regular training, performance monitoring, and mutual respect between institutions and agents.
          </p>
          
          <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">Partnership Best Practices</h3>
          <ul class="list-disc list-inside text-gray-700 space-y-2 mb-4 pl-4">
            <li>Clear partnership agreements and expectations</li>
            <li>Regular training and updates on programs</li>
            <li>Transparent commission structures and payment terms</li>
            <li>Performance metrics and quality standards</li>
            <li>Regular communication and feedback loops</li>
            <li>Recognition and rewards for top performers</li>
          </ul>
          
          <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">Managing Partner Relationships</h3>
          <p class="text-gray-700 leading-relaxed mb-4">
            Treat partners as extensions of your recruitment team. Provide marketing materials, facilitate campus visits, offer competitive commissions, and maintain open lines of communication.
          </p>
          
          <div class="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg mb-4">
            <p class="text-amber-800 text-sm">
              <strong>Partnership Principle:</strong> Strong partnerships are built on trust, transparency, and mutual benefit. Invest in relationships, not just transactions.
            </p>
          </div>
        </div>
      `,
    },
    {
      id: 21,
      category: "Institutions",
      date: "Mar 19, 2026",
      title: "Measuring ROI on International Recruitment",
      excerpt:
        "Key metrics and analytics to evaluate the effectiveness of your international student recruitment efforts.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      tag: "Analytics",
      readTime: "8 min read",
      audience: "Institutions",
      content: `
        <div class="space-y-6">
          <h3 class="text-2xl font-bold text-gray-900 mb-4">Tracking Success</h3>
          <p class="text-gray-700 leading-relaxed mb-4">
            Important metrics include cost per enrollment, conversion rates, student retention rates, lifetime value, and satisfaction scores to assess recruitment effectiveness.
          </p>
          
          <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">Key Performance Indicators</h3>
          <ul class="list-disc list-inside text-gray-700 space-y-2 mb-4 pl-4">
            <li>Cost per inquiry (CPI)</li>
            <li>Cost per enrollment (CPE)</li>
            <li>Application-to-enrollment conversion rate</li>
            <li>Student retention and graduation rates</li>
            <li>Revenue per student (tuition + fees)</li>
            <li>Partner performance metrics</li>
            <li>Student satisfaction and NPS scores</li>
          </ul>
          
          <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">Data-Driven Decisions</h3>
          <p class="text-gray-700 leading-relaxed mb-4">
            Use analytics to identify high-performing markets, optimize marketing spend, improve conversion rates, and allocate resources effectively. Regular reporting enables continuous improvement.
          </p>
          
          <div class="bg-indigo-50 border-l-4 border-indigo-500 p-4 rounded-r-lg mb-4">
            <p class="text-indigo-800 text-sm">
              <strong>Analytics Advantage:</strong> What gets measured gets managed. Establish baseline metrics and track progress consistently to demonstrate ROI to stakeholders.
            </p>
          </div>
        </div>
      `,
    },
    {
      id: 22,
      category: "Institutions",
      date: "Mar 14, 2026",
      title: "Creating Inclusive Campus Environments",
      excerpt:
        "How to foster diversity, equity, and inclusion to support a thriving international student community.",
      image:
        "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80",
      tag: "Diversity",
      readTime: "6 min read",
      audience: "Institutions",
      content: `
        <div class="space-y-6">
          <h3 class="text-2xl font-bold text-gray-900 mb-4">Inclusive Excellence</h3>
          <p class="text-gray-700 leading-relaxed mb-4">
            Creating an inclusive environment involves cultural competency training, diverse representation, inclusive policies, safe spaces, and celebrating cultural diversity on campus.
          </p>
          
          <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">Inclusion Strategies</h3>
          <ul class="list-disc list-inside text-gray-700 space-y-2 mb-4 pl-4">
            <li>Cultural competency training for staff and faculty</li>
            <li>Diverse hiring practices and representation</li>
            <li>Inclusive curriculum and teaching methods</li>
            <li>Multicultural centers and student organizations</li>
            <li>Religious and dietary accommodation</li>
            <li>Anti-discrimination policies and reporting mechanisms</li>
            <li>Celebration of international holidays and events</li>
          </ul>
          
          <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">Benefits of Inclusion</h3>
          <p class="text-gray-700 leading-relaxed mb-4">
            Inclusive campuses attract diverse talent, improve student outcomes, enhance institutional reputation, foster innovation through diverse perspectives, and prepare all students for global citizenship.
          </p>
          
          <div class="bg-pink-50 border-l-4 border-pink-500 p-4 rounded-r-lg mb-4">
            <p class="text-pink-800 text-sm">
              <strong>Inclusion Imperative:</strong> Diversity without inclusion is incomplete. Create an environment where every student feels valued, respected, and empowered to succeed.
            </p>
          </div>
        </div>
      `,
    },
    {
      id: 23,
      category: "Institutions",
      date: "Mar 9, 2026",
      title: "International Student Orientation Programs",
      excerpt:
        "Designing effective orientation programs that help international students transition smoothly.",
      image:
        "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80",
      tag: "Orientation",
      readTime: "7 min read",
      audience: "Institutions",
      content: `
        <div class="space-y-6">
          <h3 class="text-2xl font-bold text-gray-900 mb-4">Welcome Programs</h3>
          <p class="text-gray-700 leading-relaxed mb-4">
            A strong orientation sets the foundation for student success. Cover essential topics like immigration compliance, academic expectations, campus resources, cultural adjustment, and social integration.
          </p>
          
          <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">Orientation Components</h3>
          <ul class="list-disc list-inside text-gray-700 space-y-2 mb-4 pl-4">
            <li>Immigration and visa compliance workshops</li>
            <li>Academic integrity and expectations</li>
            <li>Campus tour and resource introductions</li>
            <li>Health and wellness services overview</li>
            <li>Cultural adjustment sessions</li>
            <li>Social events and networking opportunities</li>
            <li>Peer mentoring program introductions</li>
          </ul>
          
          <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">Best Practices</h3>
          <p class="text-gray-700 leading-relaxed mb-4">
            Start orientation before arrival with pre-departure webinars, extend support through the first semester, involve current international students as mentors, and gather feedback for continuous improvement.
          </p>
          
          <div class="bg-teal-50 border-l-4 border-teal-500 p-4 rounded-r-lg mb-4">
            <p class="text-teal-800 text-sm">
              <strong>First Impressions:</strong> Orientation is often students' first real experience with your institution. Make it welcoming, informative, and memorable.
            </p>
          </div>
        </div>
      `,
    },
    {
      id: 24,
      category: "Institutions",
      date: "Mar 4, 2026",
      title: "Crisis Management for International Students",
      excerpt:
        "Preparing your institution to support international students during emergencies and crises.",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
      tag: "Safety",
      readTime: "9 min read",
      audience: "Institutions",
      content: `
        <div class="space-y-6">
          <h3 class="text-2xl font-bold text-gray-900 mb-4">Emergency Preparedness</h3>
          <p class="text-gray-700 leading-relaxed mb-4">
            Having robust crisis management protocols is essential. International students face unique challenges during emergencies, including language barriers, distance from family, and visa concerns.
          </p>
          
          <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">Crisis Management Plan</h3>
          <ul class="list-disc list-inside text-gray-700 space-y-2 mb-4 pl-4">
            <li>24/7 emergency contact system</li>
            <li>Clear communication protocols in multiple languages</li>
            <li>Coordination with local authorities and embassies</li>
            <li>Mental health and counseling support</li>
            <li>Emergency housing and financial assistance</li>
            <li>Immigration advice and visa support</li>
            <li>Family communication assistance</li>
          </ul>
          
          <h3 class="text-2xl font-bold text-gray-900 mb-4 mt-8">Common Crisis Scenarios</h3>
          <p class="text-gray-700 leading-relaxed mb-4">
            Prepare for health emergencies, natural disasters, political unrest in home countries, personal safety incidents, mental health crises, and academic emergencies. Regular training and drills ensure readiness.
          </p>
          
          <div class="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg mb-4">
            <p class="text-red-800 text-sm">
              <strong>Safety First:</strong> International students are particularly vulnerable during crises. Your preparedness and response can make the difference between recovery and catastrophe.
            </p>
          </div>
        </div>
      `,
    },
  ];

const [popupOpen, setPopupOpen] = useState(false);
  useEffect(() => {
    setVisibleCount(6);
    setIsLoading(true);

    setTimeout(() => {
      if (activeTab === "Students") {
        setFilteredArticles(studentsArticles);
      } else if (activeTab === "Recruitment Partners") {
        setFilteredArticles(partnersArticles);
      } else if (activeTab === "Institutions") {
        setFilteredArticles(institutionsArticles);
      }
      setHasMore(true);
      setIsLoading(false);
    }, 300);
  }, [activeTab]);

  const openModal = (article) => {
    setSelectedArticle(article);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedArticle(null), 300);
    document.body.style.overflow = "unset";
  };

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && isModalOpen) {
        closeModal();
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isModalOpen]);

  const handleLoadMore = () => {
    setIsLoading(true);

    setTimeout(() => {
      setVisibleCount((prev) => prev + 3);
      setIsLoading(false);

      if (visibleCount + 3 >= filteredArticles.length) {
        setHasMore(false);
      }
    }, 800);
  };

  const tags = [
    "Popular tags",
    "Application",
    "Australia",
    "Canada",
    "Careers",
    "Germany",
    "Ireland",
    "Post-Study Work Visa",
    "Study Visa",
    "United States",
    "United Kingdom",
  ];

  const visibleArticles = filteredArticles.slice(0, visibleCount);

  return (
    <div className="">
      <div className="mt-10">
        <div className="max-w-6xl mx-auto text-center bg-blue-50 py-16 px-4 sm:px-6 lg:px-8 rounded-4xl">
          <h1 className="text-3xl sm:text-4xl font-montserrat leading-tight font-bold text-gray-800 mb-4">
            Learn More about Studying Abroad
          </h1>
          <p className="text-gray-600 font-sans text-base md:text-lg leading-relaxed mb-8 max-w-md mx-auto">
            Tips, advice, and updates to help you across every step of the study
            abroad journey.
          </p>

          <div className="inline-flex bg-white rounded-full p-1 shadow-md">
            {["Students", "Recruitment Partners", "Institutions"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded-full text-sm font-montserrat font-medium transition-all duration-300 ${
                  activeTab === tab
                    ? "bg-blue-600 text-white shadow-md"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-4 mb-10 items-start justify-between">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-montserrat font-medium transition-all duration-200 ${
                  index === 0
                    ? "text-gray-500 cursor-default"
                    : "bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600 shadow-sm border border-gray-200"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>

          <div className="relative w-full lg:w-auto">
            <input
              type="text"
              placeholder="Search the blog..."
              className="w-full lg:w-64 px-4 py-2 pl-10 pr-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <svg
              className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2 font-montserrat leading-tight">
            {activeTab === "Students" && "Resources for Students"}
            {activeTab === "Recruitment Partners" &&
              "Resources for Recruitment Partners"}
            {activeTab === "Institutions" && "Resources for Institutions"}
          </h2>
          <p className="text-gray-600 font-sans text-sm">
            Showing {visibleArticles.length} of {filteredArticles.length}{" "}
            articles
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleArticles.map((article, index) => (
            <article
              key={article.id}
              onClick={() => openModal(article)}
              className={`bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer group transform hover:-translate-y-1 animate-fadeIn`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-gray-700 font-montserrat">
                    {article.tag}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 text-xs font-montserrat text-gray-500 mb-3">
                  <span className="font-medium text-blue-600">
                    {article.category}
                  </span>
                  <span>•</span>
                  <span>{article.date}</span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors font-montserrat leading-tight">
                  {article.title}
                </h3>

                <p className="text-gray-600 text-sm mb-4 line-clamp-2 font-sans">
                  {article.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <button className="inline-flex items-center text-blue-600 font-semibold text-sm hover:text-blue-700 transition-colors group/btn font-montserrat leading-relaxed">
                    Read More
                    <svg
                      className="w-4 h-4 ml-1 transform group-hover/btn:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                  <span className="text-xs text-gray-400">
                    {article.readTime}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {hasMore && (
          <div className="text-center mt-12">
            <button
              onClick={handleLoadMore}
              disabled={isLoading}
              className={`
                relative inline-flex items-center justify-center px-8 py-4 
                bg-gradient-to-r from-blue-600 to-blue-700 
                text-white font-semibold rounded-xl 
                shadow-lg hover:shadow-2xl 
                transform hover:-translate-y-0.5 
                transition-all duration-300
                disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none
                overflow-hidden group
              `}
            >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {isLoading ? (
                <div className="flex items-center gap-3">
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  <span className="font-montserrat text-base leading-relaxed">
                    Loading Articles...
                  </span>
                </div>
              ) : (
                <div className="flex items-center gap-3 relative z-10">
                  <span className="font-montserrat text-base leading-relaxed">
                    Load More Articles
                  </span>
                  <svg
                    className="w-5 h-5 transform group-hover:translate-y-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                  </svg>
                </div>
              )}
            </button>

            <p className="mt-4 text-sm text-gray-500 font-sans">
              {isLoading
                ? "Fetching more content..."
                : `Showing ${visibleArticles.length} of ${filteredArticles.length} articles`}
            </p>
          </div>
        )}

        {!hasMore && filteredArticles.length > 0 && (
          <div className="text-center mt-12 animate-fadeIn">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-green-50 text-green-700 rounded-full font-medium">
              <svg
                className="w-5 h-5"
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
              <span>You've seen all articles! Check back soon for more.</span>
            </div>
          </div>
        )}
      </div>

      {isModalOpen && selectedArticle && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-300 ${
            isModalOpen ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={closeModal}
          ></div>

          <div
            className={`relative bg-white rounded-3xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto transform transition-all duration-300 ${
              isModalOpen ? "scale-100 translate-y-0" : "scale-95 translate-y-4"
            }`}
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-gray-100 transition-colors"
            >
              <svg
                className="w-5 h-5 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div className="relative h-64 sm:h-80">
              <img
                src={selectedArticle.image}
                alt={selectedArticle.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 text-white">
                <div className="flex items-center gap-3 mb-3">
                  <span className="bg-blue-600 px-3 py-1 rounded-full text-xs font-semibold">
                    {selectedArticle.tag}
                  </span>
                  <span className="text-sm opacity-90">
                    {selectedArticle.readTime}
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold">
                  {selectedArticle.title}
                </h2>
              </div>
            </div>

            <div className="p-6 sm:p-8">
              <div className="flex items-center justify-between mb-6 pb-6 border-b border-gray-200">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {selectedArticle.title.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">
                      AdmissionOnBoard Editorial
                    </p>
                    <p className="text-sm text-gray-500">
                      {selectedArticle.date}
                    </p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-blue-100 hover:text-blue-600 transition-colors">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </button>
                  <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-blue-100 hover:text-blue-600 transition-colors">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </button>
                </div>
              </div>

              <div
                className="prose prose-lg max-w-none
                           prose-headings:font-bold prose-headings:text-gray-900
                           prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-4
                           prose-ul:list-disc prose-ul:pl-6 prose-li:text-gray-700
                           prose-strong:text-gray-900"
                dangerouslySetInnerHTML={{ __html: selectedArticle.content }}
              />

              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="flex flex-wrap gap-2">
                  {[
                    "Study Abroad",
                    selectedArticle.tag,
                    "International Students",
                    "Tips",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-blue-100 hover:text-blue-700 cursor-pointer transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 p-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl text-white text-center">
                <h3 className="text-xl font-bold mb-2">
                  Ready to Start Your Journey?
                </h3>
                <p className="mb-4 opacity-90">
                  Connect with our experts and take the first step toward
                  studying abroad.
                </p>
                <button
                  onClick={() => setPopupOpen(true)}
                  className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Get Started Today
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <StudentRegistrationPopup
        isOpen={popupOpen}
        onClose={() => setPopupOpen(false)}
      />
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
};

export default StudyAbroadBlog;
