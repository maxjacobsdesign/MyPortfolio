import React from "react";
import background from "../../assets/topo-bg.png";
import image1 from "../../assets/ikon-app-profile.png";
import image2 from "../../assets/ikon-app-destination.png";
import keyTakeawaysImg from "../../assets/key-takeaways.png";

const steps = [
  { id: "step-1", label: "01 Research" },
  { id: "step-2", label: "02 Define" },
  { id: "step-3", label: "03 Design" },
  { id: "step-4", label: "04 Testing" },
  { id: "step-5", label: "05 UI Branding" },
  { id: "step-6", label: "06 Final UI" },
  { id: "step-7", label: "07 Next steps" },
];

const SkiMateCaseStudy = () => {
  return (
    <div className="font-['Montserrat']">
      {/* Hero Section */}
      <div
        className="min-h-screen bg-cover bg-center flex flex-col items-center"
        style={{ backgroundImage: `url(${background})` }}
      >
        <nav className="mt-10">
          <div className="bg-blue-400 text-white px-6 py-3 rounded-lg flex gap-4 flex-wrap justify-center shadow-md">
            {steps.map((step, index) => (
              <a
                key={index}
                href={`#${step.id}`}
                className={`text-sm font-medium hover:underline ${
                  index === 0 ? "text-white font-bold" : "text-blue-100"
                }`}
              >
                {step.label}
              </a>
            ))}
          </div>
        </nav>

        <div className="flex flex-col items-center justify-center text-white text-center mt-24 px-4">
          <h1 className="text-5xl font-['Zen Dots'] text-white mb-4">
            <span className="text-white">Ski</span>
            <span className="text-blue-400">mate</span>
          </h1>
          <p className="text-xl max-w-xl leading-relaxed">
            Redesigning the way you <br /> communicate across the mountain.
          </p>
        </div>
      </div>

      {/* Research Section */}
      <div className="mt-24 bg-white p-8 md:p-12 rounded-xl text-black max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-[#6CACFA] mb-8 text-center" id="step-1">
          01 Research
        </h2>

        {/* Methods */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-center">Methods</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 mb-12 max-w-xl mx-auto">
            {[
              "Guerrilla User Testing",
              "User Interview",
              "Comparative Analysis",
              "Laws of UX: Using Psychology to Design Better Products & Services",
            ].map((method, index) => (
              <div key={index} className="bg-blue-100 text-black p-4 rounded-lg text-center font-medium shadow-md">
                {method}
              </div>
            ))}
          </div>
        </div>

        {/* User Journey */}
        <div className="mb-12 max-w-3xl mx-auto">
          <h3 className="text-xl font-semibold mb-4 text-center">Where I Began?</h3>
          <p className="leading-relaxed text-center">
            The first step was understanding the behavioral patterns, pain points, and needs of skiers who regularly visit EPIC and IKON resorts—
            especially weekend-only skiers balancing work and recreation.{" "}
            <strong>I conducted user interviews with IKON and EPIC users</strong> to better understand their
            journey, and <strong>uncover what went into their decision process for choosing a resort.</strong>
          </p>
        </div>

        {/* User Interview Quotes - Round 1 */}
        <div className="max-w-3xl mx-auto">
          <h4 className="text-md font-semibold mb-4 text-center italic">User Interview: Round 1</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "I see how many lifts are open, but not how busy those lifts are.",
              "I wish there was a way to get tips from locals without digging through Reddit or Facebook.",
              "I spend more time switching between apps than actually planning my trip. IKON just sends me the pass.",
              "I don’t see a use for the IKON app.",
            ].map((quote, index) => (
              <div key={index} className="bg-blue-100 p-4 rounded-md shadow text-black text-center">
                “<strong>{quote}</strong>”
              </div>
            ))}
          </div>
        </div>

        {/* User Interview Quotes - Round 2 */}
        <div className="mt-24">
          <h4 className="text-md font-semibold mb-4 text-center italic">User Interview: Round 2</h4>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-16">
            {[
              "Finding a resort was easy, but once I clicked into the resort, I kinda expected the trail map to pop up faster.",
              "We love to ski as a family, but most of the IKON app info isn’t useful.",
              "I would love real-time updates.",
            ].map((quote, index) => (
              <div key={index} className="bg-blue-100 p-4 rounded-md shadow text-black text-center font-medium">
                “<strong>{quote}</strong>”
              </div>
            ))}
          </div>

          {/* Key Findings */}
          <div className="mt-24">
            <h3 className="text-xl font-semibold mb-8 text-center italic text-[#6CACFA]">Key Findings</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {[
                {
                  title: "Trust + Credibility",
                  text: "Skiers want information they can trust. Info needs to be credible—either from the resort or someone actually on the mountain.",
                },
                {
                  title: "Skiers Want to Ski",
                  text: "Every added step or unnecessary tap is wasted time. Skiers aren’t using the app to browse—they’re trying to get to the snow.",
                },
                {
                  title: "Lack of Real-Time Insight",
                  text: "There’s no clear way to understand what’s happening on the mountain—wait times, snow quality, or which lifts are most crowded.",
                },
              ].map((item, index) => (
                <div key={index} className="bg-blue-100 p-6 rounded-md shadow text-black text-center">
                  <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                  <p className="text-sm leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Analyzing System */}
          <h3 className="text-xl font-semibold mt-24 mb-8 text-center italic">
            Analyzing the current system
          </h3>
          <div className="flex flex-col md:flex-row items-center justify-center gap-12 mb-16">
            <div className="flex flex-col items-center text-center max-w-xs">
              <img src={image1} alt="IKON app profile screen" className="rounded-lg shadow-md w-full" />
              <p className="text-sm mt-4 bg-gray-50 border border-gray-200 p-3 rounded-md text-black">
                <strong>Profile</strong><br />
                User clicks on the “My Season stats” icon in center of the screen
              </p>
            </div>
            <div className="hidden md:block text-4xl text-gray-400">→</div>
            <div className="flex flex-col items-center text-center max-w-xs">
              <img src={image2} alt="IKON app destination screen" className="rounded-lg shadow-md w-full" />
              <p className="text-sm mt-4 bg-gray-50 border border-gray-200 p-3 rounded-md text-black">
                <strong>Destinations</strong><br />
                Resorts are organized into digestible sections (Country → Region → Resort)
                to reduce cognitive overload and prevent users from feeling overwhelmed
              </p>
            </div>
          </div>

          {/* Key Takeaways Image */}
          <div className="mt-24 flex justify-center">
            <img
              src={keyTakeawaysImg}
              alt="Key Takeaways: User and Business Needs"
              className="max-w-full md:max-w-4xl rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Define Section */}
      <div className="mt-24 bg-white p-8 md:p-12 rounded-xl text-black max-w-7xl mx-auto" id="step-2">
        <h2 className="text-3xl font-bold text-[#6CACFA] mb-8 text-center">02 Define</h2>

        <div className="mb-12 text-center max-w-3xl mx-auto">
          <h3 className="text-xl font-semibold mb-4">Breaking Down the Problem</h3>
          <p className="text-md leading-relaxed">
            Having done my research, I wanted to break down all the existing challenges users were facing.
            To achieve this, I created problem statements, relating each one to a specific user need. I took
            it a step further and related each user need to a corresponding ‘How Might We?’ statement to
            postulate potential ways to address each need with my app. To measure the success of outcomes,
            I also noted KPIs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
          {/* Column 1 - User Pain */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-center text-[#6CACFA]">User Pain</h4>
            {[
              "Poor Discoverability of Real-Time Data",
              "Fragmented Information Architecture",
              "High Cognitive Load and Context Switching",
              "Weak Value Proposition and Limited Utility",
            ].map((title, index) => (
              <div key={index} className="bg-blue-100 p-4 rounded-md shadow text-black">
                <strong>{title}</strong>
                <p>
                  {{
                    0: "Key info like lift lines and crowd levels are difficult to find.",
                    1: "Users leave the app to communicate with friends about their weekend ski trips.",
                    2: "Users switch between apps for weather, traffic, maps, and social media, increasing mental effort and frustration.",
                    3: "App is seen as just a pass holder, offering little reason for users to interact beyond that.",
                  }[index]}
                </p>
              </div>
            ))}
          </div>

          {/* Column 2 - How Might We */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-center text-[#6CACFA]">How Might We</h4>
            {[
              "Show real-time lift and crowd data more clearly to help users decide faster?",
              "Integrate community-generated posts and messages to better communicate weekend ski trips?",
              "Consolidate these apps to streamline weather, traffic, resort conditions, and social updates?",
              "Transform the app into a personalized ski planning tool that delivers daily value beyond just holding a pass?",
            ].map((text, index) => (
              <div key={index} className="bg-blue-100 p-4 rounded-md shadow text-black">
                <strong>How might we...</strong>
                <p>{text}</p>
              </div>
            ))}
          </div>

          {/* Column 3 - KPI */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-center text-[#6CACFA]">KPI</h4>
            {[
              "Measure % of active users engaging with lift line posts within first 60 seconds of opening the app.",
              "Track number of community posts or messages created per user session.",
              "Measure Percentage of users who engage with posts per user session.",
              "Measure % of users returning weekly.",
            ].map((text, index) => (
              <div key={index} className="bg-blue-100 p-4 rounded-md shadow text-black">
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkiMateCaseStudy;