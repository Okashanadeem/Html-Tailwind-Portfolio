'use client';
import styles from '../styles/Projects.module.css';
import Link from 'next/link';
import { FaEye } from 'react-icons/fa';

export default function Projects() {
  const projects = [
    {
      title: "Job Portal",
      description: "A modern job portal prototype built with React.js and integrated with a back-end API for job listings, allowing users to search and apply for jobs, as well as employers to post opportunities.",
      link: "https://github.com/Saad0095/Job-Portal",
      viewLink: "https://job-portal-website-project.vercel.app/",
    },
    {
      title: "CarBaazar",
      description: "An innovative platform designed to give users a virtual showroom experience. CarBaazar lets users explore a wide range of cars and compare features, making car buying easier and more interactive.",
      link: "https://github.com/SameerAhmedBSCE/CarBazaar-React-Project",
      viewLink: "https://car-bazaar-rust.vercel.app/",
    },
    {
      title: "Blue Sky Digitals",
      description: "A professional website built for a client in the digital services sector. This project highlights responsive design and modern UI/UX, providing the client with a platform to showcase their digital marketing services.",
      link: "https://github.com/Okashanadeem/blue-sky-digitals",
      viewLink: "https://blue-sky-digitals.vercel.app/",
    },
    {
      title: "My Portfolio",
      description: "A professional portfolio website built with pure HTML and CSS, showcasing my skills, projects, and experience in web development.",
      link: "https://github.com/Okashanadeem/GIAIC/tree/main/Quarter%202/Milestones/Portfolio/my-app",
      viewLink: "https://OkashaNadeemPortfolio.vercel.app/",
    }
  ];

  return (
    <div className="container mx-auto px-6 py-12 font-sans bg-gray-100">
      <h1 className="text-5xl font-bold text-purple-700 text-center mb-8 hover:text-pink-500 transition-colors">
        My Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className={`${styles.projectCard}`}>
            <h2 className="text-2xl font-semibold text-purple-700 mb-4">
              {project.title}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              {project.description}
            </p>
            <div className={styles.eyeIconContainer}>
              <a href={project.viewLink} target="_blank" rel="noopener noreferrer">
                <FaEye className={styles.eyeIcon} />
              </a>
            </div>
          </div>
        ))}
      </div>
      <p className="text-center text-lg text-purple-700 mt-8">
        I am still working on more exciting projects! Stay tuned for updates!
      </p>
      <div className="flex justify-center mt-8">
        <Link href="/" className="bg-purple-800 text-white text-lg font-bold py-2 px-6 rounded-full hover:bg-pink-500 transition-transform transform hover:scale-105 focus:outline-none dura">
          Go to Home Page
        </Link>
      </div>
    </div>
  );
}
