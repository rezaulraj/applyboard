import React, { useState } from "react";
import ReactCountryFlag from "react-country-flag";
import StudentRegistrationPopup from "../../components/common/StudentRegistrationPopup";

const countries = [
  { id: "australia", label: "Australia", code: "AU", link: "/australia" },
  { id: "canada", label: "Canada", code: "CA", link: "/canada" },
  { id: "germany", label: "Germany", code: "DE", link: "/germany" },
  { id: "ireland", label: "Ireland", code: "IE", link: "/ireland" },
  { id: "usa", label: "United States", code: "US", link: "/usa" },
  { id: "uk", label: "United Kingdom", code: "GB", link: "/uk" },
];

const universities = {
  australia: [
    {
      id: 1,
      name: "Griffith University",
      location: "Southport, Queensland, AU",
      logo: "https://ui-avatars.com/api/?name=GU&background=c0392b&color=fff&bold=true&size=64",
      image:
        "https://images.unsplash.com/photo-1562774053-701939374585?w=600&q=80&auto=format&fit=crop",
      short:
        "Founded in 1971, Griffith University has become a highly-ranked university with an international outlook. Their teaching and research spans six campuses in South East Queensland and all disciplines...",
      detail:
        "Griffith University was founded in 1971 and is located across six campuses in South East Queensland and Northern New South Wales. It is a public research university known for its innovative programs in arts, business, education, engineering, health, law, and sciences. The university has over 50,000 students from more than 140 countries and is consistently ranked among the top 3% of universities worldwide. It maintains strong industry partnerships and is a leader in sustainable futures research.",
      founded: "1971",
      students: "50,000+",
      ranking: "Top 3% Worldwide",
      link: "/australia",
    },
    {
      id: 2,
      name: "Federation University",
      location: "Berwick, Victoria, AU",
      logo: "https://ui-avatars.com/api/?name=FU&background=1a56db&color=fff&bold=true&size=64",
      image:
        "https://www.federation.edu.au/globalassets/ballaratbuilding.jpg?width=600&height=396&rxy=0.51%2C0.46&quality=85&version=19&format=webp&hmac=a864376ad10a32b5ac1e6874ecafc213eebc48069824a0f7f1662c16c7523132",
      short:
        "Federation University is one of Australia's oldest universities. The University is known today for its modern approach to teaching and learning.",
      detail:
        "Federation University Australia is a multi-sector university with campuses across Victoria and online. It traces its origins to the Ballarat School of Mines, established in 1870, making it one of Australia's oldest universities. FedUni is known for its focus on regional communities, industry engagement, and student support. The university offers undergraduate, postgraduate, and research programs across a wide range of disciplines and is committed to widening access to higher education.",
      founded: "1870",
      students: "22,000+",
      ranking: "Top Regional University AU",
      link: "/australia",
    },
    {
      id: 3,
      name: "Deakin University",
      location: "Geelong, Victoria, AU",
      logo: "https://ui-avatars.com/api/?name=DU&background=2c3e50&color=fff&bold=true&size=64",
      image:
        "https://universitiesaustralia.edu.au/wp-content/uploads/2018/10/Deakin-4-web-1400x933.jpg",
      short:
        "Deakin University, founded in 1974, is ranked in the top 1% of universities worldwide (ARWU Rankings, 2020) and is one of the top 50 young universities (QS World University Rankings Top 50...",
      detail:
        "Deakin University is a public research university based in Victoria, Australia, founded in 1974. It is ranked in the top 1% of universities worldwide and is consistently listed among the top 50 young universities globally. With campuses in Geelong, Melbourne, and Warrnambool, Deakin offers more than 300 courses across arts, built environment, business, education, engineering, health, IT, law and science. The university places a strong emphasis on innovation, industry partnerships, and cloud-based education.",
      founded: "1974",
      students: "61,000+",
      ranking: "Top 1% Worldwide",
      link: "/australia",
    },
  ],
  canada: [
    {
      id: 4,
      name: "University of Toronto",
      location: "Toronto, Ontario, CA",
      logo: "https://ui-avatars.com/api/?name=UT&background=002a5c&color=fff&bold=true&size=64",
      image:
        "https://cdn.prod.website-files.com/67b4dc673e2f2f31df52d3db/685af1a5936ab16b5b2b769c_664f5b920e69b8f7e88ee60d_university-of-toronto.webp",
      short:
        "The University of Toronto is a globally top-ranked public research university in the heart of Canada's largest city, committed to excellence in teaching and research.",
      detail:
        "The University of Toronto is Canada's leading institution of higher learning and one of the top research universities in the world. Founded in 1827, it spans three campuses — St. George, Mississauga, and Scarborough. U of T is known for pioneering discoveries including insulin, the electron microscope, and multi-touch technology. It enrolls over 97,000 students and employs thousands of world-class faculty, producing life-changing breakthroughs in science, technology, humanities, and the arts.",
      founded: "1827",
      students: "97,000+",
      ranking: "#1 in Canada",
      link: "/canada",
    },
    {
      id: 5,
      name: "McGill University",
      location: "Montreal, Quebec, CA",
      logo: "https://ui-avatars.com/api/?name=MG&background=ed1b2f&color=fff&bold=true&size=64",
      image:
        "https://stubard.com/wp-content/uploads/2025/02/McGill-University-1.jpg",
      short:
        "McGill University is one of Canada's best-known institutions of higher learning and one of the leading universities in the world, attracting students from over 150 countries.",
      detail:
        "Founded in 1821, McGill University is a public research university located in Montreal, Quebec. It is consistently ranked among the top universities in the world and draws students from over 150 countries. McGill is particularly renowned for its faculties of medicine, law, engineering, and management. The university has produced over 12 Nobel Prize winners among its alumni and faculty, and is a major contributor to Canadian and global research output.",
      founded: "1821",
      students: "40,000+",
      ranking: "Top 30 Worldwide",
      link: "/canada",
    },
    {
      id: 6,
      name: "UBC Vancouver",
      location: "Vancouver, British Columbia, CA",
      logo: "https://ui-avatars.com/api/?name=UBC&background=002145&color=fff&bold=true&size=64",
      image:
        "https://visit.ubc.ca/wp-content/uploads/2019/04/plantrip_header-2800x1000_2x.jpg",
      short:
        "The University of British Columbia is a global centre for research and teaching, consistently ranked among the top 40 universities in the world.",
      detail:
        "The University of British Columbia (UBC) is a public research university with campuses in Vancouver and Kelowna, British Columbia. Founded in 1908, UBC is consistently ranked among the top 40 universities in the world. It is recognized for outstanding research in areas including life sciences, sustainability, and technology. UBC has produced 8 Nobel laureates and hosts over 65,000 students. The Vancouver campus is situated on a stunning peninsula beside the Pacific Ocean.",
      founded: "1908",
      students: "65,000+",
      ranking: "Top 40 Worldwide",
      link: "/canada",
    },
  ],
  germany: [
    {
      id: 7,
      name: "Technical University of Munich",
      location: "Munich, Bavaria, DE",
      logo: "https://ui-avatars.com/api/?name=TUM&background=3070b3&color=fff&bold=true&size=64",
      image:
        "https://images.shiksha.com/mediadata/images/1533559593php2FZ2Bt.jpeg",
      short:
        "TUM is one of Europe's top technical universities and consistently ranks among the best in the world for engineering, technology, and the natural sciences.",
      detail:
        "The Technical University of Munich (TUM) is a research university in Germany with campuses in Munich, Garching, Freising-Weihenstephan, and other locations. Founded in 1868, it is one of Germany's most prestigious universities and a member of the TU9 group of leading German technical universities. TUM has produced 18 Nobel Prize laureates and is renowned for engineering, computer science, life sciences, and management. It attracts over 50,000 students and thousands of researchers from around the globe.",
      founded: "1868",
      students: "50,000+",
      ranking: "#1 in Germany (Engineering)",
      link: "/germany",
    },
    {
      id: 8,
      name: "Heidelberg University",
      location: "Heidelberg, Baden-Württemberg, DE",
      logo: "https://ui-avatars.com/api/?name=HU&background=c0392b&color=fff&bold=true&size=64",
      image:
        "https://framerusercontent.com/images/VQNVPiVm1HMlIaTvDShDzK7i4.jpg",
      short:
        "Heidelberg University is Germany's oldest university, founded in 1386, and is internationally recognized for its excellence in the natural sciences and humanities.",
      detail:
        "Ruprecht Karl University of Heidelberg is the oldest university in Germany, established in 1386. It is one of the most prestigious research universities in Europe and has produced 56 Nobel Prize winners. Heidelberg is particularly renowned for its faculties of natural sciences, medicine, and humanities. The university attracts approximately 30,000 students and maintains strong international partnerships through its 12 faculties and numerous research centers.",
      founded: "1386",
      students: "30,000+",
      ranking: "Top 100 Worldwide",
      link: "/germany",
    },
    {
      id: 9,
      name: "RWTH Aachen University",
      location: "Aachen, North Rhine-Westphalia, DE",
      logo: "https://ui-avatars.com/api/?name=RWTH&background=00549f&color=fff&bold=true&size=64",
      image:
        "https://stubard.com/wp-content/uploads/2025/04/RWTH-Aachen-University.jpg",
      short:
        "RWTH Aachen is one of Europe's leading science and research institutions and is Germany's largest technical university, renowned for engineering excellence.",
      detail:
        "RWTH Aachen University is a public research university located in Aachen, North Rhine-Westphalia, Germany. Founded in 1870, it is Germany's largest technical university with over 45,000 students. RWTH Aachen is particularly renowned for its engineering, natural sciences, and technology programs, and maintains close ties with industry partners worldwide. It is a member of IDEA League and TIME network, fostering global academic collaboration.",
      founded: "1870",
      students: "45,000+",
      ranking: "Top Technical University EU",
      link: "/germany",
    },
  ],
  ireland: [
    {
      id: 10,
      name: "Trinity College Dublin",
      location: "Dublin, Leinster, IE",
      logo: "https://ui-avatars.com/api/?name=TCD&background=004d25&color=fff&bold=true&size=64",
      image: "https://hea.ie/assets/uploads/2017/04/TCD-1000x500.jpg",
      short:
        "Trinity College Dublin is Ireland's oldest and most prestigious university, founded in 1592, and is consistently ranked among the top universities in the world.",
      detail:
        "Trinity College Dublin (TCD) is the sole constituent college of the University of Dublin, the oldest university in Ireland, founded in 1592. It is one of the seven ancient universities of Britain and Ireland and is consistently ranked in the top 100 universities globally. Trinity is located in the heart of Dublin and is renowned for its beautiful campus, world-class research, and distinguished alumni including Samuel Beckett, Oscar Wilde, and Jonathan Swift.",
      founded: "1592",
      students: "17,000+",
      ranking: "Top 100 Worldwide",
      link: "/ireland",
    },
    {
      id: 11,
      name: "University College Dublin",
      location: "Dublin, Leinster, IE",
      logo: "https://ui-avatars.com/api/?name=UCD&background=1a3a6b&color=fff&bold=true&size=64",
      image:
        "https://dublin.ie/wp-content/uploads/4.2.1-Trinity-college-dublin_664x400.jpg",
      short:
        "University College Dublin is Ireland's largest university and a leading European research university, with strong international connections and over 35,000 students.",
      detail:
        "University College Dublin (UCD) is a research-intensive university founded in 1854. It is Ireland's largest university with over 35,000 students, of whom approximately 30% are international. UCD is recognized as one of Europe's leading research universities and is a member of prestigious networks including Universitas 21 and the League of European Research Universities (LERU). It offers more than 300 graduate programs across a wide range of disciplines.",
      founded: "1854",
      students: "35,000+",
      ranking: "Top 200 Worldwide",
      link: "/ireland",
    },
    {
      id: 12,
      name: "University of Galway",
      location: "Galway, Connacht, IE",
      logo: "https://ui-avatars.com/api/?name=UG&background=8b0000&color=fff&bold=true&size=64",
      image:
        "https://student-public.s3.ap-southeast-1.amazonaws.com/prod/blogs/U3AgUOTOTHt9KIDkgZLtQhrhhm1VGUBOD2ZjjLVE.jpg",
      short:
        "University of Galway is a leading university on Ireland's west coast, known for its research excellence, vibrant student life, and rich Irish cultural heritage.",
      detail:
        "University of Galway, formerly known as NUI Galway, was established in 1845 and is located in the heart of Galway city on the west coast of Ireland. It is widely regarded as one of Ireland's most student-friendly universities and is known for its research strengths in areas including marine science, medical devices, and Irish language studies. The university has approximately 18,000 students and is situated in one of Europe's fastest-growing cities.",
      founded: "1845",
      students: "18,000+",
      ranking: "Top Research University IE",
      link: "/ireland",
    },
  ],
  usa: [
    {
      id: 13,
      name: "Harvard University",
      location: "Cambridge, Massachusetts, US",
      logo: "https://ui-avatars.com/api/?name=HV&background=a51c30&color=fff&bold=true&size=64",
      image:
        "https://image-static.collegedunia.com/public/college_data/images/studyabroad/appImage/college_1090_29-15:00_o-HARVARD-UNIVERSITY-BUILDING-facebook.jpeg",
      short:
        "Harvard University is the oldest institution of higher education in the United States, established in 1636, and is consistently ranked as one of the world's top universities.",
      detail:
        "Harvard University, founded in 1636, is the oldest institution of higher education in the United States. Located in Cambridge, Massachusetts, it is a private Ivy League research university with an endowment of over $50 billion — the largest of any academic institution in the world. Harvard has produced over 160 Nobel laureates, 49 Pulitzer Prize winners, and 32 heads of state. Its libraries, museums, and research centers are among the finest in the world.",
      founded: "1636",
      students: "23,000+",
      ranking: "#1 Worldwide (multiple rankings)",
      link: "/usa",
    },
    {
      id: 14,
      name: "MIT",
      location: "Cambridge, Massachusetts, US",
      logo: "https://ui-avatars.com/api/?name=MIT&background=a31f34&color=fff&bold=true&size=64",
      image:
        "https://cdn.amazon.science/a8/54/7c5f06444330a846b68cce8792cb/mit-campus.jpg",
      short:
        "MIT is a world-leading institution focused on science, technology, engineering, and mathematics, consistently ranked among the best universities on the planet.",
      detail:
        "The Massachusetts Institute of Technology (MIT) is a private research university in Cambridge, Massachusetts, founded in 1861. It is world-renowned for its programs in engineering, computer science, mathematics, and the physical sciences. MIT faculty and alumni have won 97 Nobel Prizes, 26 Turing Awards, and 8 Fields Medals. The university has a strong entrepreneurial culture — companies founded by MIT alumni generate revenues equivalent to the world's 10th-largest economy.",
      founded: "1861",
      students: "11,000+",
      ranking: "#1 for Engineering & Technology",
      link: "/usa",
    },
    {
      id: 15,
      name: "Stanford University",
      location: "Stanford, California, US",
      logo: "https://ui-avatars.com/api/?name=SU&background=8c1515&color=fff&bold=true&size=64",
      image:
        "https://images.shiksha.com/mediadata/images/1533535408phpRuopAS.jpeg",
      short:
        "Stanford University is one of the world's leading research and teaching institutions, located in the heart of Silicon Valley and known for its entrepreneurial culture.",
      detail:
        "Stanford University is a private research university located in Stanford, California, in the heart of Silicon Valley. Founded in 1885, it is one of the most prestigious universities in the world and is consistently ranked in the top 5 globally. Stanford is particularly renowned for its schools of engineering, business, and law, and its proximity to the tech industry has made it a hub for innovation and entrepreneurship. Alumni include co-founders of Google, HP, Nike, Netflix, and many other companies.",
      founded: "1885",
      students: "17,000+",
      ranking: "Top 5 Worldwide",
      link: "/usa",
    },
  ],
  uk: [
    {
      id: 16,
      name: "University of Oxford",
      location: "Oxford, England, UK",
      logo: "https://ui-avatars.com/api/?name=OX&background=002147&color=fff&bold=true&size=64",
      image:
        "https://c.files.bbci.co.uk/2c03/live/64d39070-8596-11ef-addc-5556603eb4c1.jpg",
      short:
        "The University of Oxford is the oldest English-speaking university in the world and consistently ranks as one of the best universities globally for research and teaching.",
      detail:
        "The University of Oxford is a collegiate research university in Oxford, England. It has the longest history of any university in the English-speaking world, with teaching dating back to 1096. Oxford is consistently ranked among the world's top 5 universities and has produced over 70 Nobel Prize winners and more than 30 world leaders including 28 UK Prime Ministers. The university comprises 39 independent colleges and six permanent private halls.",
      founded: "1096",
      students: "24,000+",
      ranking: "#1 in the UK",
      link: "/uk",
    },
    {
      id: 17,
      name: "University of Cambridge",
      location: "Cambridge, England, UK",
      logo: "https://ui-avatars.com/api/?name=CAM&background=a3c1ad&color=1a1a1a&bold=true&size=64",
      image:
        "https://www.cam.ac.uk/sites/default/files/styles/content-885x432/public/about-the-university/kings-8489564479-o.jpg?itok=0MziluRV",
      short:
        "The University of Cambridge is a world-renowned research university, the second oldest in the English-speaking world, and home to over 100 Nobel Prize winners.",
      detail:
        "The University of Cambridge is a collegiate research university in Cambridge, England. Founded in 1209, it is the second-oldest university in the English-speaking world. Cambridge has consistently ranked among the world's top universities and boasts over 120 Nobel laureates among its alumni and academics. Its 31 colleges and 150 departments, faculties, and schools offer courses across all major disciplines. Cambridge alumni include Stephen Hawking, Charles Darwin, Alan Turing, and Isaac Newton.",
      founded: "1209",
      students: "24,000+",
      ranking: "Top 5 Worldwide",
      link: "/uk",
    },
    {
      id: 18,
      name: "Imperial College London",
      location: "London, England, UK",
      logo: "https://ui-avatars.com/api/?name=IC&background=003e74&color=fff&bold=true&size=64",
      image:
        "https://media.studentcrowd.net/w1200/index-data/20240110143013-campus-hammersmith-1-tojpeg-1417716218508-x4.jpg",
      short:
        "Imperial College London is a world-class university focused on science, engineering, medicine, and business, consistently ranked among the top 10 universities globally.",
      detail:
        "Imperial College London is a public research university located in London, United Kingdom. Founded in 1907, it is focused exclusively on science, engineering, medicine, and business, and is consistently ranked among the top 10 universities in the world. Imperial has strong ties to industry and government and is particularly renowned for its work in engineering, medicine, and climate science. The college has produced 15 Nobel Prize laureates and a wide array of industry-leading researchers and innovators.",
      founded: "1907",
      students: "19,000+",
      ranking: "Top 10 Worldwide",
      link: "/uk",
    },
  ],
};

const Modal = ({ uni, onClose }) => {
  if (!uni) return null;
  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 1000,
        background: "rgba(15,31,69,0.55)",
        backdropFilter: "blur(6px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
        animation: "fadeInOverlay 0.22s ease",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "#fff",
          borderRadius: "20px",
          maxWidth: "560px",
          width: "100%",
          overflow: "hidden",
          boxShadow: "0 24px 80px rgba(15,31,69,0.22)",
          animation: "popIn 0.28s cubic-bezier(.22,1,.36,1)",
        }}
      >
        <div style={{ position: "relative", height: "220px" }}>
          <img
            src={uni.image}
            alt={uni.name}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to top, rgba(15,31,69,0.7) 0%, transparent 60%)",
            }}
          />
          <button
            onClick={onClose}
            style={{
              position: "absolute",
              top: 14,
              right: 14,
              background: "rgba(255,255,255,0.9)",
              border: "none",
              borderRadius: "50%",
              width: 34,
              height: 34,
              cursor: "pointer",
              fontSize: 18,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#0f1f45",
              fontWeight: 700,
              boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
            }}
          >
            ×
          </button>
          <span
            style={{
              position: "absolute",
              bottom: 14,
              left: 16,
              background: "#4F8EF7",
              color: "#fff",
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.1em",
              padding: "4px 10px",
              borderRadius: "20px",
              fontFamily: "'Open Sans', sans-serif",
            }}
          >
            ● Featured
          </span>
        </div>
        <div style={{ padding: "24px 28px 28px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              marginBottom: 14,
            }}
          >
            <img
              src={uni.logo}
              alt=""
              style={{
                width: 52,
                height: 52,
                borderRadius: "50%",
                border: "2px solid #e8f0fe",
              }}
            />
            <div>
              <div
                style={{
                  fontFamily: "'Open Sans', sans-serif",
                  fontWeight: 900,
                  fontSize: 20,
                  color: "#0f1f45",
                }}
              >
                {uni.name}
              </div>
              <div style={{ fontSize: 13, color: "#6b7fa3", marginTop: 2 }}>
                {uni.location}
              </div>
            </div>
          </div>
          <p
            style={{
              fontSize: 14,
              color: "#3a4a6b",
              lineHeight: 1.75,
              marginBottom: 20,
            }}
          >
            {uni.detail}
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            {[
              { label: "Founded", value: uni.founded },
              { label: "Students", value: uni.students },
              { label: "Ranking", value: uni.ranking },
            ].map((s) => (
              <div
                key={s.label}
                style={{
                  flex: 1,
                  minWidth: 110,
                  background: "#f0f6ff",
                  borderRadius: 12,
                  padding: "12px 14px",
                }}
              >
                <div
                  style={{
                    fontSize: 11,
                    color: "#4F8EF7",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    marginBottom: 4,
                  }}
                >
                  {s.label}
                </div>
                <div
                  style={{
                    fontSize: 14,
                    color: "#0f1f45",
                    fontWeight: 800,
                    fontFamily: "'Open Sans', sans-serif",
                  }}
                >
                  {s.value}
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={() => setPopupOpen(true)}
            style={{
              marginTop: 22,
              width: "100%",
              background: "linear-gradient(90deg, #4F8EF7, #2563eb)",
              color: "#fff",
              border: "none",
              borderRadius: "50px",
              padding: "13px",
              fontFamily: "'Open Sans', sans-serif",
              fontWeight: 800,
              fontSize: 15,
              cursor: "pointer",
              boxShadow: "0 4px 16px #4F8EF744",
              transition: "opacity 0.2s",
            }}
          >
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

const UniversityCard = ({ uni, onClick }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onClick={() => onClick(uni)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "#fff",
        borderRadius: "16px",
        overflow: "hidden",
        boxShadow: hovered
          ? "0 12px 40px rgba(79,142,247,0.18)"
          : "0 2px 16px rgba(15,31,69,0.08)",
        cursor: "pointer",
        transition: "box-shadow 0.25s, transform 0.25s",
        transform: hovered ? "translateY(-5px)" : "translateY(0)",
        flex: "1 1 280px",
        maxWidth: "360px",
        minWidth: "260px",
      }}
    >
      <div style={{ position: "relative", height: 190, overflow: "hidden" }}>
        <img
          src={uni.image}
          alt={uni.name}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "transform 0.4s",
            transform: hovered ? "scale(1.06)" : "scale(1)",
          }}
        />
        <span
          style={{
            position: "absolute",
            top: 12,
            left: 12,
            background: "rgba(255,255,255,0.92)",
            backdropFilter: "blur(4px)",
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: "0.06em",
            padding: "5px 12px",
            borderRadius: "20px",
            color: "#4F8EF7",
            display: "flex",
            alignItems: "center",
            gap: 5,
            fontFamily: "'Open Sans', sans-serif",
          }}
        >
          <span
            style={{
              width: 7,
              height: 7,
              borderRadius: "50%",
              background: "#4F8EF7",
              display: "inline-block",
            }}
          />
          Featured
        </span>
      </div>
      <div style={{ padding: "18px 20px 22px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            marginBottom: 10,
          }}
        >
          <img
            src={uni.logo}
            alt=""
            style={{
              width: 44,
              height: 44,
              borderRadius: "50%",
              border: "2px solid #e8f0fe",
              flexShrink: 0,
            }}
          />
          <div>
            <div
              style={{
                fontFamily: "'Open Sans', sans-serif",
                fontWeight: 800,
                fontSize: 16,
                color: "#0f1f45",
                transition: "color 0.2s",
                ...(hovered ? { color: "#2563eb" } : {}),
              }}
            >
              {uni.name}
            </div>
            <div style={{ fontSize: 12, color: "#94a3b8", marginTop: 2 }}>
              {uni.location}
            </div>
          </div>
        </div>
        <p
          style={{ fontSize: 13, color: "#6b7fa3", lineHeight: 1.7, margin: 0 }}
        >
          {uni.short}
        </p>
      </div>
    </div>
  );
};

const TrustedPartners = () => {
  const [activeTab, setActiveTab] = useState("australia");
  const [selectedUni, setSelectedUni] = useState(null);
  const [animating, setAnimating] = useState(false);
  const [popupOpen, setPopupOpen] = useState(false);
  const handleTabChange = (id) => {
    if (id === activeTab) return;
    setAnimating(true);
    setTimeout(() => {
      setActiveTab(id);
      setAnimating(false);
    }, 220);
  };

  const activeCountry = countries.find((c) => c.id === activeTab);

  return (
    <>
      <style>{`
        @keyframes fadeInOverlay { 
          from { opacity: 0 } 
          to { opacity: 1 } 
        }
        @keyframes popIn {
          from { opacity: 0; transform: scale(0.9) translateY(24px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes slideIn {
          from { opacity: 0; transform: translateY(18px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .cards-anim { 
          animation: slideIn 0.35s cubic-bezier(.22,1,.36,1) both; 
        }
        .cards-fade { 
          opacity: 0; 
          transform: translateY(10px); 
          transition: opacity 0.22s, transform 0.22s; 
        }
        .tp-tab {
          display: flex; 
          align-items: center; 
          gap: 10px;
          padding: 10px 24px; 
          border-radius: 50px;
          border: 1.5px solid #e2e8f0;
          background: #fff; 
          cursor: pointer;
          font-family: 'Open Sans', sans-serif; 
          font-weight: 600; 
          font-size: 16px;
          color: #3a4a6b;
          transition: all 0.22s; 
          white-space: nowrap;
        }
        .tp-tab:hover { 
          border-color: #4F8EF7; 
          color: #2563eb; 
          background: #f0f6ff; 
          transform: translateY(-2px);
        }
        .tp-tab.active {
          background: #2563eb; 
          color: #fff; 
          border-color: #2563eb;
          box-shadow: 0 4px 16px rgba(37,99,235,0.3);
        }
        .tp-explore-btn {
          display: inline-flex; 
          align-items: center; 
          gap: 8px;
          background: linear-gradient(90deg, #2563eb, #2563eb);
          color: #fff; 
          border: none; 
          border-radius: 50px;
          padding: 14px 36px;
          font-family: 'Open Sans', sans-serif; 
          font-weight: 600; 
          font-size: 18px;
          cursor: pointer; 
          box-shadow: 0 4px 24px rgba(79,142,247,0.3);
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .tp-explore-btn:hover { 
          // transform: translateY(-2px) scale(1.02); 
          box-shadow: 0 8px 32px rgba(37,99,235,0.4); 
        }
        .tp-section {
          background: #fff;
          // min-height: 100vh;
          padding: 72px 20px 60px;
          font-family: 'Open Sans', sans-serif;
        }
        .tp-inner { 
          max-width: 1100px; 
          margin: 0 auto; 
        }
        .tp-tabs-wrap {
          display: flex; 
          flex-wrap: wrap; 
          gap: 12px;
          justify-content: center; 
          margin-bottom: 48px;
        }
        .tp-cards-wrap {
          display: flex; 
          flex-wrap: wrap; 
          gap: 28px;
          justify-content: center;
          margin-bottom: 48px;
        }
        .flag-icon {
          font-size: 24px;
          line-height: 1;
          display: inline-flex;
          align-items: center;
        }
        @media (max-width: 640px) {
          .tp-tab { padding: 8px 16px; font-size: 14px; gap: 6px; }
          .flag-icon { font-size: 20px; }
        }
      `}</style>

      {selectedUni && (
        <Modal uni={selectedUni} onClose={() => setSelectedUni(null)} />
      )}

      <section className="tp-section">
        <div className="tp-inner">
          <div
            style={{
              textAlign: "center",
              marginBottom: 14,
              fontFamily: "'Montserrat', sans-serif",
              fontSize: 16,
              fontWeight: 600,
              letterSpacing: "0.16em",
              color: "#4F8EF7",
              textTransform: "uppercase",
            }}
          >
            Trusted Partners
          </div>

          <h2
            style={{
              textAlign: "center",
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(24px, 4vw, 38px)",
              color: "#0f1f45",
              lineHeight: 1.25,
              marginBottom: 48,
              maxWidth: 760,
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            Trusted by 1,500+ Universities, Colleges, and Schools Worldwide
          </h2>

          <div className="tp-tabs-wrap">
            {countries.map((c) => (
              <button
                key={c.id}
                className={`tp-tab${activeTab === c.id ? " active" : ""}`}
                onClick={() => handleTabChange(c.id)}
              >
                <ReactCountryFlag
                  countryCode={c.code}
                  svg
                  style={{
                    width: "1.5em",
                    height: "1.5em",
                    borderRadius: "2px",
                  }}
                  title={c.label}
                />
                <span>{c.label}</span>
              </button>
            ))}
          </div>

          <div
            className={`tp-cards-wrap ${animating ? "cards-fade" : "cards-anim"}`}
          >
            {(universities[activeTab] || []).map((uni) => (
              <UniversityCard key={uni.id} uni={uni} onClick={setSelectedUni} />
            ))}
          </div>

          <div style={{ textAlign: "center" }}>
            <a href={activeCountry?.link} className="tp-explore-btn">
              Explore More {activeCountry?.label} Institutions →
            </a>
          </div>
        </div>
      </section>
      <StudentRegistrationPopup
        isOpen={popupOpen}
        onClose={() => setPopupOpen(false)}
      />
    </>
  );
};

export default TrustedPartners;
