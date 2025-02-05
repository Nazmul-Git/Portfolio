'use client'

import { useEffect, useState } from "react";

export default function InterviewGuide() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); 
  }, []);

  if (!isClient) {
    return null; 
  }
  const phases = [
    {
      title: "Phase 1: Introduction and Background",
      sections: [
        {
          subtitle: "Self-introduction",
          myself: "I am a Software Engineer with expertise in front-end technologies such as JavaScript, React.js, and Next.js, as well as back-end tools like Node.js and Express. I have a strong foundation in building full-stack applications, implementing RESTful APIs, and optimizing system performance. My recent experience includes designing scalable solutions for business-critical applications, ensuring seamless user experiences, and collaborating in agile teams to deliver high-quality software.",
          content: {
            Situation: "Introduce yourself and provide relevant background details to showcase your professional journey.",
            Task: "Summarize your key skills, achievements, and experiences in software engineering.",
            Action: "Emphasize your expertise in front-end and back-end technologies with specific examples of projects or contributions.",
            Result: "Craft a concise yet impactful introduction that sets a professional and confident tone for further discussions."
          }
        },
        {
          subtitle: "Project Experience",
          content: {
            Situation: "A food delivery platform required robust authentication and a responsive design for optimal user experience.",
            Task: "Lead the integration of front-end and back-end systems while ensuring the implementation of secure and scalable authentication mechanisms.",
            Action: "Developed and integrated NextAuth for user authentication and utilized JWT to secure API endpoints. Designed responsive UI components with Tailwind CSS to enhance user interaction.",
            Result: "Successfully delivered a seamless user experience with responsive design and improved app performance, achieving 25% faster load times and enhanced security compliance."
          }
        },
        {
          subtitle: "Key Tech Stack",
          content: "Highly proficient in React, Redux, Next.js, Node.js, Express, MongoDB, Tailwind CSS, and experienced with tools like Webpack and Docker for build and deployment automation."
        },
        {
          subtitle: "Career Achievements",
          content: {
            Situation: "An e-commerce platform faced scalability issues and performance bottlenecks as traffic increased.",
            Task: "Design and implement a scalable architecture to support high traffic volumes and reduce system downtime.",
            Action: "Introduced a microservices architecture, optimized database queries, and implemented caching with Redis to enhance performance.",
            Result: "Achieved a 30% reduction in system downtime and a 40% improvement in throughput, ensuring a smooth and reliable user experience."
          }
        }
      ]
    },
    {
      title: "Phase 2: Technical Knowledge & Problem Solving",
      sections: [
        {
          subtitle: "Front-End Questions",
          items: [
            {
              question: "What is the Virtual DOM in React, and why is it important?",
              answer: "The Virtual DOM is a lightweight representation of the real DOM. React uses it to determine the minimal number of updates needed when the state of an application changes. By comparing the new Virtual DOM with the previous one (diffing), React applies updates efficiently, resulting in better performance and faster rendering."
            },
            {
              question: "Flexbox vs. Grid: When to use each?",
              answer: "Flexbox is one-dimensional, designed to manage layouts in either a row or column, making it ideal for simpler layouts like navigation bars or aligning items within a container. Grid is two-dimensional, capable of managing rows and columns simultaneously, and is best suited for more complex layouts like dashboards or application interfaces with multiple sections."
            }
          ]
        },
        {
          subtitle: "Back-End Questions",
          items: [
            {
              question: "RESTful APIs vs. GraphQL: Key differences and use cases?",
              answer: "RESTful APIs rely on predefined endpoints for resource interactions, offering simplicity and standardization. In contrast, GraphQL allows clients to query exactly the data they need, reducing over-fetching or under-fetching. While GraphQL provides flexibility and efficiency for complex data needs, it may require additional complexity in schema design and setup."
            },
            {
              question: "What is JWT Authentication, and how does it work?",
              answer: "JWT (JSON Web Token) Authentication involves encoding user data into a token that is sent between the client and server. The server verifies the token for authenticity and uses it for authentication without the need to store session data, improving scalability and security in stateless applications."
            }
          ]
        },
        {
          subtitle: "Database Questions",
          items: [
            {
              question: "SQL vs. NoSQL: What are the key differences?",
              answer: "SQL databases, such as MySQL and PostgreSQL, are relational and use structured schemas, making them suitable for complex queries and transactions. NoSQL databases, like MongoDB, are non-relational, schema-less, and ideal for handling unstructured data, providing scalability and flexibility for real-time applications."
            }
          ]
        }
      ]
    },
    {
      title: "Phase 3: Coding Challenge",
      sections: [
        {
          subtitle: "Front-End Coding Challenge",
          content: {
            Situation: "Build a feature-rich To-Do application with a focus on user interactivity and responsiveness.",
            Task: "Design and implement clean components, manage state effectively, and handle user interactions seamlessly.",
            Action: "Develop the app using React, leveraging hooks for state management and Tailwind CSS for styling. Ensure smooth transitions and responsiveness across devices.",
            Result: "Delivered a robust, interactive To-Do application with a polished UI, achieving a bug-free experience and high user engagement."
          }
        },
        {
          subtitle: "Back-End Coding Challenge",
          content: {
            Situation: "Develop a task management API to support a To-Do application.",
            Task: "Design and implement RESTful endpoints for creating, updating, retrieving, and deleting tasks.",
            Action: "Utilized Node.js and Express, applied proper RESTful practices, and ensured API security with JWT authentication.",
            Result: "Delivered a scalable and maintainable API, supporting seamless data operations for the front-end application."
          }
        },
        {
          subtitle: "Integration Challenge",
          content: {
            Situation: "Integrate a front-end To-Do application with a back-end task management API.",
            Task: "Ensure smooth data flow, error handling, and synchronization between the front-end and back-end systems.",
            Action: "Used fetch/axios for API interactions, implemented robust error handling, and tested all edge cases to ensure reliability.",
            Result: "Delivered a fully functional, end-to-end application with efficient data exchange and minimal latency."
          }
        }
      ]
    },
    {
      title: "Phase 4: System Design",
      sections: [
        {
          subtitle: "Task: Design a URL Shortening Service",
          content: {
            Situation: "A service is required to generate short URLs and handle high traffic effectively.",
            Task: "Design a scalable, fault-tolerant system that ensures efficient storage and retrieval of URLs.",
            Action: "Incorporated a web interface for user interactions, built RESTful APIs for programmatic access, utilized sharded databases for scalability, and implemented caching with Redis for performance optimization.",
            Result: "Delivered a reliable URL shortening service capable of handling millions of requests with minimal latency."
          }
        },
        {
          subtitle: "Scaling Strategies",
          content: {
            Situation: "A social media platform faced performance bottlenecks as user numbers grew rapidly.",
            Task: "Identify performance issues and implement solutions to improve scalability and user experience.",
            Action: "Integrated load balancers, applied horizontal scaling to distribute traffic, and used Redis caching to optimize database query performance.",
            Result: "Enhanced app response time by 50% during peak traffic, ensuring a smooth user experience and increased reliability."
          }
        }
      ]
    },
    {
      title: "Phase 5: Behavioral & Soft Skills",
      sections: [
        {
          subtitle: "Example Question",
          content: {
            Situation: "In my previous project, we encountered a significant challenge where the front-end design provided by the UI/UX team did not align with the back-end API structure, leading to integration issues that could potentially delay the development process.",
            Task: "My role was to ensure smooth integration between the front-end and back-end while ensuring that we met the deadline for feature delivery. It was also important to maintain good collaboration between both teams and find a sustainable solution to prevent further mismatches in the future.",
            Action: "I proactively reached out to the back-end team and scheduled a series of collaborative meetings. We discussed the existing API structure and identified areas for improvement. I suggested a few modifications to the API endpoints to make them more flexible for future updates and aligned with the front-end design. On the front-end side, I updated the components and worked closely with the front-end designers to ensure the UI was flexible to accommodate changes without breaking the user experience.",
            Result: "As a result, we successfully integrated the front-end and back-end components, delivering the feature on time. The solution we implemented was scalable and allowed for smoother updates and better collaboration between teams in future releases. The process also fostered better communication and understanding between the front-end and back-end teams, reducing friction on subsequent features."
          }
        },
        {
          subtitle: "Team Collaboration",
          content: {
            Situation: "During the project, there was a disagreement within the development team about which technology stack to use for the new feature. Some members preferred a new framework that they were excited to learn, while others wanted to stick with the existing stack due to its familiarity and proven success in previous projects.",
            Task: "As the project manager, my task was to facilitate a productive discussion and ensure we arrived at a decision that was in the best interest of the project’s long-term success, balancing innovation with practical constraints like time and team experience.",
            Action: "I organized several team meetings where all members could voice their concerns and suggestions. I encouraged an open, respectful dialogue, where each side presented the pros and cons of their preferred technology stack. I also helped the team evaluate the potential risks and rewards, considering factors like development time, scalability, and team expertise. After gathering all input, I proposed a hybrid approach that utilized both the existing stack for stable components and the new framework for innovative features that could be more easily integrated later.",
            Result: "The team reached a consensus after evaluating all options, and we moved forward with the hybrid approach. This not only addressed the immediate needs of the project but also allowed the team to experiment with new technology without jeopardizing the project timeline. As a result, the project progressed smoothly, and the team was motivated by the opportunity to learn and innovate together."
          }
        }
      ]
    },
    {
      title: "Phase 6: Closing and Questions",
      sections: [
        {
          subtitle: "Development culture",
          content: "How does the company balance collaborative work and individual contributions, especially in a team-oriented environment? Are there any structures in place that ensure effective communication and teamwork, while still giving team members the autonomy to contribute individually to their areas of expertise?"
        },
        {
          subtitle: "Technical debt",
          content: "How does the team manage and address technical debt on a regular basis? Is there a structured approach to identifying and prioritizing areas where technical debt is building up? How does the company ensure that it doesn’t negatively impact ongoing development and maintain a balance between speed and code quality?"
        },
        {
          subtitle: "Learning Opportunities",
          content: "What resources, tools, and support are available for continuous learning and professional growth within the company? Are there mentorship programs, training sessions, or access to online courses for employees to stay up to date with industry trends, new technologies, and best practices?"
        }
      ]
    }
  ];

  return (
    <div className=" min-h-screen flex flex-col">
      <header className=" text-white py-8">
        <div className="container mx-auto px-8">
          <h1 className="text-4xl font-extrabold tracking-tight">Full Stack Software Engineer Interview Guide</h1>
          <p className="mt-4 text-lg md:text-xl text-opacity-90">
            A comprehensive step-by-step guide to help you prepare for your Full Stack Software Engineer interview.
          </p>
        </div>
      </header>

      <main className="container mx-auto px-6 py-12 space-y-10">
        {phases.map((phase, phaseIndex) => (
          <section
            key={phaseIndex}
            className="shadow-xl rounded-xl p-8 mb-8 transition-transform hover:scale-105"
          >
            <h2 className="text-3xl font-semibold text-indigo-700 mb-6">{phase.title}</h2>
            {phase.sections.map((section, sectionIndex) => (
              <div key={sectionIndex} className="mb-6">
                <h3 className="text-2xl font-semibold text-indigo-600 mb-4">{section.subtitle}</h3>
                {section?.myself && <div>{section?.myself}</div>}
                {section.content && typeof section.content === "object" ? (
                  <div className="space-y-4">
                    {Object.entries(section.content).map(([key, value], index) => (
                      <div key={index} className="space-y-2">
                        <strong className="block text-green-800 font-semibold">{key}:</strong>
                        <p className="text-white font-mono">{value}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p>{section.content}</p>
                )}
                {section.items && (
                  <ul className="list-disc pl-6 mt-4">
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="mb-2">
                        <strong className="font-medium">{item.question}</strong>
                        <p className="text-white font-mono">{item.answer}</p>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </section>
        ))}
      </main>
    </div>
  );

}
