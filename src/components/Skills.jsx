import { useState } from 'react'
import '../css/Skills.css'
import { Monitor, Network, Wifi, Wrench, GitBranch, Shield, Zap } from 'lucide-react'
import { FaJs, FaHtml5, FaReact, FaNode, FaGitAlt, FaWindows, FaLinux, FaMicrosoft, FaChartLine } from 'react-icons/fa'
import { SiTailwindcss, SiFigma, SiPostman, SiMysql, SiUnity, SiBlender, SiExpress, SiVite, SiWireshark, SiDocker } from 'react-icons/si'
import { VscVscode } from 'react-icons/vsc'

function Skills() {
  const [activeTab, setActiveTab] = useState('web-tech')

  const skillsData = {
    'web-tech': {
      categories: [
        {
          name: 'FRONTEND',
          skills: [
            { name: 'JavaScript', icon: <FaJs /> },
            { name: 'HTML & CSS', icon: <FaHtml5 /> },
            { name: 'React', icon: <FaReact /> },
            { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
            { name: 'Vite', icon: <SiVite /> }
          ]
        },
        {
          name: 'BACKEND',
          icon: <Wrench size={20} />,
          skills: [
            { name: 'Node.js', icon: <FaNode /> },
            { name: 'Express.js', icon: <SiExpress /> },
            { name: 'REST APIs', icon: <Zap size={18} /> }
          ]
        },
        {
          name: 'DATABASE',
          icon: null,
          skills: [
            { name: 'MySQL', icon: <SiMysql /> }
          ]
        },
      ]
    },
    'operations': {
      categories: [
        {
          name: 'SYSTEM SUPPORT',
          skills: [
            { name: 'Technical Support', icon: null },
            { name: 'Troubleshooting', icon: null }
          ]
        },
        {
          name: 'MONITORING',
          skills: [
            { name: 'System Monitoring', icon: null },
            { name: 'Device Diagnostics', icon: null },
            { name: 'Log Analysis', icon: null }
          ]
        },
        {
          name: 'NETWORK',
          
          skills: [
            { name: 'IP / LAN', icon: null },
            { name: 'Wi-Fi', icon: null },
            { name: 'Network Basics', icon: null }
          ]
        }
      ]
    },
    'tools': {
      categories: [
        {
          name: 'SYSTEMS',
          skills: [
            { name: 'Windows', icon: <FaWindows /> },
            { name: 'Linux Basics', icon: <FaLinux /> }
          ]
        },
        {
          name: 'TOOLS',
          skills: [
            { name: 'Git', icon: <FaGitAlt /> },
            { name: 'VS Code', icon: <VscVscode /> },
            { name: 'Figma', icon: <SiFigma /> },
            { name: 'Postman', icon: <SiPostman /> },
            { name: 'Docker', icon: <SiDocker /> },
            { name: 'Microsoft 360', icon: <FaMicrosoft /> },
            { name: 'Power BI', icon: <FaChartLine /> }
          ]
        },
        {
          name: 'ADDITIONAL',
          skills: [
            { name: 'Unity', icon: <SiUnity /> },
            { name: 'Blender', icon: <SiBlender /> }
          ]
        }
      ]
    }
  }

  const currentSkills = skillsData[activeTab]

  return (
    <section id="Skills" className="skills-section">
      <div className="skills-header">
        <span className="skills-subtitle">What I Know</span>
        <h2>SKILLS</h2>
      </div>

      <div className="skills-tabs">
        <button 
          className={`skills-tab ${activeTab === 'web-tech' ? 'active' : ''}`}
          onClick={() => setActiveTab('web-tech')}
        >
          WEB TECH
        </button>
        <button 
          className={`skills-tab ${activeTab === 'operations' ? 'active' : ''}`}
          onClick={() => setActiveTab('operations')}
        >
          IT OPERATIONS
        </button>
        <button 
          className={`skills-tab ${activeTab === 'tools' ? 'active' : ''}`}
          onClick={() => setActiveTab('tools')}
        >
          Tools & Systems
        </button>
      </div>

      <div className="skills-grid">
        {currentSkills.categories.map((category, idx) => (
          <div key={idx} className="skills-column">
            <div className="category-header">
              {category.icon && <span className="category-icon">{category.icon}</span>}
              <h3>{category.name}</h3>
            </div>
            {category.skills.map((skill, sidx) => (
              <div key={sidx} className="skill-card">
                {skill.icon && <span className="skill-icon">{skill.icon}</span>}
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills