// Static project data
const projectsData = [
    {
        "id": 8,
        "title": "NewsCaster Android App",
        "description": "Unlike traditional platforms, this app prioritizes security, user experience, and multiple layers of news authentication. 📰✨ Users can even submit news that, after authentication, can be published—because our users truly matter. A comprehensive news management system that enables reporters to submit news articles and facilitates a multi-level editorial review process.",
        "image": "../images/WhatsApp_Image_2024-11-01_at_20.55.16_4cb2c716.jpg",
        "github": "https://github.com/aneebnaqvi15/NewsCaster",
        "technologies": "Android, Java, XML, Firebase"
    },
    {
        "id": 7,
        "title": "Tweet Scraper Bot",
        "description": "Introducing an advanced web scraping tool built with JavaScript and Puppeteer. Perfect for researchers, marketers, and analysts, this solution offers:\r\n✅ No API Limits : Extract unlimited tweets with 98% accuracy.\r\n✅ Flexible Filters : Search by hashtag, date range, location, and more.\r\n✅ Comprehensive Insights : Collect tweet content, user details, and engagement metrics.\r\n🔒 Ethical & Secure : Designed for responsible data extraction with session-based login and error recovery.",
        "image": "../images/TS.jpg",
        "github": "https://github.com/aneebnaqvi15/TweetScraper",
        "technologies": "puppeter, js"
    },
    {
        "id": 3,
        "title": "Restaurant Management System",
        "description": "A complete solution for restaurant operations and order management.",
        "image": "../images/ss.jpg",
        "github": "https://github.com/aneebnaqvi15/MyportfolioV3",
        "technologies": "Django, HTML, CSS, JavaScript, Tailwind"
    },
    {
        "id": 4,
        "title": "Food App",
        "description": "A web app for food meal planer and recipe planner.",
        "image": "../images/food.png",
        "github": "https://github.com/aneebnaqvi15/Food-App",
        "technologies": "HTML, CSS, JavaScript"
    },
    {
        "id": 2,
        "title": "Fashion Brand Website",
        "description": "Clone version of (Sapphire)! 🌐 It's fully responsive and dynamic, complete with functional sub-categories for seamless navigation.",
        "image": "../images/SC.png",
        "github": "https://github.com/aneebnaqvi15/MyportfolioV3",
        "technologies": "HTML, CSS, JavaScript,React"
    },
    {
        "id": 6,
        "title": "Portfolio Website",
        "description": "A modern and responsive portfolio website showcasing my work.",
        "image": "../images/portfolio.jpg",
        "github": "https://github.com/aneebnaqvi15/portfolio-web-v02",
        "technologies": "HTML5, CSS3, JavaScript, GSAP"
    },
    {
        "id": 1,
        "title": "Event Registration System",
        "description": "A comprehensive event registration platform built with modern web technologies.",
        "image": "../images/event.png",
        "github": "https://github.com/aneebnaqvi15/MyportfolioV3",
        "technologies": "HTML, CSS, JavaScript, Django"
    },
    {
        "id": 9,
        "title": "Job Portal",
        "description": "An online job portal connecting employers with potential candidates.A modern job portal built with Django and Tailwind CSS, designed to connect job seekers with employers efficiently.Job Seekers: Register, search for jobs, and apply directly through the platform.Employers: Register, post job listings, and manage applications from job seekers.",
        "image": "../images/screencapture-127-0-0-1-8000-2024-12-05-16_51_49.png",
        "github": "https://github.com/aneebnaqvi15/MyportfolioV3",
        "technologies": "Django, HTML, CSS, JavaScript"
    },
    {
        "id": 5,
        "title": "Tweet Scraper Web",
        "description": "A modern, feature-rich Twitter data collection and analysis dashboard built with Next.js and TypeScript.",
        "image": "../images/TS.jpg",
        "github": "https://github.com/aneebnaqvi15/Scraper",
        "technologies": "NextJs,TypeScript,TailwindCss,FramerMotion, JavaScript"
    }
];

document.addEventListener('DOMContentLoaded', () => {
    console.log('Page loaded, initializing projects...');
    initializeProjects();
});

async function initializeProjects() {
    try {
        console.log('Starting project initialization...');
        displayProjects(projectsData);
    } catch (error) {
        console.error('Error in initializeProjects:', error);
        const projectsContainer = document.getElementById('projectsContainer');
        if (projectsContainer) {
            projectsContainer.innerHTML = `
                <div class="error-state">
                    <i class="fas fa-exclamation-circle"></i>
                    <p>Error loading projects: ${error.message}</p>
                </div>
            `;
        }
    }
}

function displayProjects(projects) {
    console.log('Starting displayProjects');
    
    const projectsContainer = document.getElementById('projectsContainer');
    if (!projectsContainer) {
        console.error('Projects container (#projectsContainer) not found');
        return;
    }

    // Clear existing content
    projectsContainer.innerHTML = '';
    
    // Sort projects by ID in descending order (newest first)
    projects.sort((a, b) => b.id - a.id);

    projects.forEach((project, index) => {
        try {
            console.log(`Creating element for project ${index}:`, project);
            const projectElement = createProjectElement(project, index);
            projectsContainer.appendChild(projectElement);
        } catch (error) {
            console.error(`Error creating project element ${index}:`, error);
        }
    });

    // Show first group of projects
    const projectElements = document.querySelectorAll('.project-bubble');
    console.log(`Found ${projectElements.length} project elements`);
    
    projectElements.forEach((project, index) => {
        if (index < 3) {
            project.classList.remove('hidden');
            project.classList.add('active');
        } else {
            project.classList.add('hidden');
            project.classList.remove('active');
        }
    });

    // Setup navigation if there are multiple projects
    if (projects.length > 3) {
        console.log('Setting up navigation for multiple projects');
        setupNavigation();
        const totalGroups = Math.ceil(projects.length / 3);
        updateNavigationIndicators(0, totalGroups);
    }
}

function createProjectElement(project, index) {
    console.log(`Creating element for project:`, project);
    
    if (!project) {
        console.error('Invalid project data:', project);
        throw new Error('Invalid project data');
    }

    const div = document.createElement('div');
    div.className = `project-bubble ${index < 3 ? 'active' : 'hidden'}`;
    div.setAttribute('data-project', Math.floor(index / 3) + 1);
    
    // Handle image path
    let imageUrl = project.image;
    if (!imageUrl || imageUrl.trim() === '') {
        imageUrl = 'https://via.placeholder.com/400x300?text=Project+Preview';
    }
    
    div.innerHTML = `
        <div class="project-content">
            <div class="project-image">
                <img src="${imageUrl}" 
                     alt="${project.title || 'Project'}" 
                     onerror="this.onerror=null; this.src='https://via.placeholder.com/400x300?text=Project+Preview';">
                <div class="project-overlay">
                    ${project.github ? `
                        <a href="${project.github}" class="github-link" target="_blank" rel="noopener noreferrer">
                            <i class="fas fa-code"></i>
                            View Code
                        </a>
                    ` : ''}
                </div>
            </div>
            <div class="project-info">
                <h3>${project.title || 'Untitled Project'}</h3>
                <p class="project-description">${project.description || 'No description available.'}</p>
                <div class="project-tech">
                    ${(project.technologies || '').split(',')
                        .filter(tech => tech.trim())
                        .map(tech => `<span class="tech-tag">${tech.trim()}</span>`)
                        .join('')}
                </div>
            </div>
        </div>
    `;
    
    return div;
}function setupNavigation() {
    console.log('Setting up navigation controls');
    const projectBubbles = document.querySelectorAll('.project-bubble');
    const totalGroups = Math.ceil(projectBubbles.length / 3);
    let currentGroup = 0;

    // Use existing navigation elements
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const indicatorsContainer = document.querySelector('.navigation-indicators');

    if (prevBtn && nextBtn) {
        prevBtn.addEventListener('click', () => {
            if (currentGroup > 0) {
                currentGroup--;
                showProjectGroup(currentGroup);
                updateNavigationIndicators(currentGroup, totalGroups);
            }
        });

        nextBtn.addEventListener('click', () => {
            if (currentGroup < totalGroups - 1) {
                currentGroup++;
                showProjectGroup(currentGroup);
                updateNavigationIndicators(currentGroup, totalGroups);
            }
        });
    }

    // Initial setup
    showProjectGroup(0);
    updateNavigationIndicators(0, totalGroups);
}
function updateNavigationIndicators(currentGroup, totalGroups) {
    const indicatorsContainer = document.querySelector('.navigation-indicators');
    if (!indicatorsContainer) return;

    indicatorsContainer.innerHTML = '';
    
    for (let i = 0; i < totalGroups; i++) {
        const indicator = document.createElement('div');
        indicator.className = `nav-indicator ${i === currentGroup ? 'active' : ''}`;
        indicator.addEventListener('click', () => {
            showProjectGroup(i);
            updateNavigationIndicators(i, totalGroups);
        });
        indicatorsContainer.appendChild(indicator);
    }
}


function showProjectGroup(groupIndex) {
    const projectBubbles = document.querySelectorAll('.project-bubble');
    const startIndex = groupIndex * 3;
    const endIndex = startIndex + 3;

    projectBubbles.forEach((bubble, index) => {
        if (index >= startIndex && index < endIndex) {
            bubble.classList.remove('hidden');
            bubble.classList.add('active');
            // Add entrance animation
            gsap.fromTo(bubble, 
                { opacity: 0, y: 20 }, 
                { opacity: 1, y: 0, duration: 0.5, ease: "back.out", delay: (index - startIndex) * 0.2 }
            );
        } else {
            bubble.classList.add('hidden');
            bubble.classList.remove('active');
        }
    });

    // Update button states
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const totalGroups = Math.ceil(projectBubbles.length / 3);

    if (prevBtn) prevBtn.disabled = groupIndex === 0;
    if (nextBtn) nextBtn.disabled = groupIndex === totalGroups - 1;
}

