import medimateImg from '../assets/images/medimate-screenshot.png'
import picturesqueImg from '../assets/images/picturesque.png';
import riddleImg from '../assets/images/riddle-me-this-code-quiz-screenshot-1-how-to-play.png';
import schuperImg from '../assets/images/schuper-duper-work-day-scheduler-screenshot-1.png';
import simpleImg from '../assets/images/simple-cms.gif';
import somethingImg from '../assets/images/something-swift.gif';
import visualVaultImg from '../assets/images/Screenshot-Visual-Vault.png';
import writeMeImg from '../assets/images/writeme-readme.gif';

export const myProjects = [
	{
		id: 0,
		display: true,
		featured: true,
		title: 'MediMate Medication Tracker',
		repoLink:
			'https://github.com/poisoned-eden/programmers-unleashed',
		deployedLink: 'https://medimate-initial-7cd2360e6da5.herokuapp.com/signup',
		screenshot: medimateImg,
		description:
			`An easy-to-use progressive web app that allows the user to add different medications, track when they've taken them, and receive reminders when the next dose is due.`,
	},
	{
		id: 1,
		display: true,
		featured: true,
		title: 'something-swift-svg-logo-generator',
		repoLink:
			'https://github.com/poisoned-eden/something-swift-svg-logo-generator',
		deployedLink: false,
		screenshot: somethingImg,
		description:
			'A node.js command line interface that generates an SVG file that fits input requirements. This was created to practice object oriented programming, use of Classes within JS, and Jest Tests.',
	},
	{
		id: 2,
		display: false,
		featured: false,
		title: 'echo-social-network-api',
		repoLink: 'https://github.com/poisoned-eden/echo-social-network-api',
		deployedLink: false,
		screenshot: '',
		description:
			'an API for creating users and their friends, and the users thoughts and reactions to them. Built in using Express.js and MongoDB',
	},
	{
		id: 3,
		display: true,
		featured: true,
		title: 'schuper-duper-day-scheduler',
		repoLink:
			'https://github.com/poisoned-eden/schuper-duper-day-scheduler',
		deployedLink:
			'https://poisoned-eden.github.io/schuper-duper-day-scheduler/',
		screenshot: schuperImg,
		alt: 'Screenshot of a Work Day Scheduler.  A simple calendar app for scheduling your work day.  The date is displayed, with the time below it.  There are then rows for each hour, with different background colours showing if it is in the past, present, or future.  There are save buttons at the end of each row.',
		description:
			'A simple timeblock work day scheduler, to help you plan out your day. Written using jquery and dayJS.',
	},
	{
		id: 4,
		display: true,
		featured: true,
		title: 'riddle-me-this-code-quiz',
		repoLink: 'https://github.com/poisoned-eden/riddle-me-this-code-quiz',
		deployedLink:
			'https://poisoned-eden.github.io/riddle-me-this-code-quiz/',
		screenshot: riddleImg,
		alt: '',
		description:
			'A code quiz that runs in the browser and tests JavaScript knowledge. Created to test my JS skills in the quest to become a Coding Bootcamp Graduate. Practicing coding assessments will be useful for the job search after graduation too!',
	},
	{
		id: 5,
		display: true,
		featured: true,
		title: 'Visual-Vault',
		repoLink: 'https://github.com/AMillsy/Visual-Vault',
		deployedLink: 'https://visual-vault-70f24eab589d.herokuapp.com/',
		screenshot: visualVaultImg,
		alt: 'Screenshot of visual vault homepage.  Designed with developers in mind.',
		description:
			'a website that serves as a platform for developers to show off their project repositories. It also allows users to actively engage with other developers by giving reactions using emojis. This creates a fun environment for developers to interact with each other. Furthermore, we hope that the website can become a platform for employers to view projects of potential candidates.',
	},
	{
		id: 6,
		display: true,
		featured: true,
		title: 'picturesque',
		repoLink: 'https://github.com/Robyn-Smith/The-Dev-Society',
		deployedLink: 'https://robyn-smith.github.io/The-Dev-Society/',
		screenshot: picturesqueImg,
		alt: 'Art-deco cinema themed website for searching for movie information and saving them to a watchlist',
		description:
			'Golden Age Cinema themed website for discovering films and saving them to your watchlist.',
	},
	{
		id: 7,
		display: true,
		featured: true,
		title: 'Simple Employee Department CMS',
		repoLink: 'https://github.com/poisoned-eden/simple-employee-department-cms',
		deployedLink: false,
		screenshot: simpleImg,
		alt: 'A gif showing the Simple Employee Department CMS CLI in operation',
		description: 'A simple CLI program to enable easy access to an employee database. You can view departments, roles, and employees, and see associated info. You can even update an employee\'s role! Built in JavaScript using node.js, dotenv, inquirer, and mysql2 to access the mysql data storage.',
	},
	{
		id: 8,
		display: true,
		featured: true,
		title: 'WriteMe ReadMe',
		repoLink: 'https://github.com/poisoned-eden/writeme-readme',
		deployedLink: false,
		screenshot: writeMeImg,
		alt: 'A gif showing the operation of the WriteMe ReadMe CLI',
		description: 'A command-line interface program that generates a markdown formatted README with the users responses to questions.',
	},	
	{
		id: 0,
		display: false,
		featured: false,
		title: 'template',
		repoLink: '',
		deployedLink: '',
		screenshot: '',
		alt: '',
		description: '',
	},	
];
