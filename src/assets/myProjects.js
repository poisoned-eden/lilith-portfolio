import schuperImg from '../assets/images/schuper-duper-work-day-scheduler-screenshot-1.png';
import visualVaultImg from '../assets/images/Screenshot-Visual-Vault.png';
import picturesqueImg from '../assets/images/picturesque.png';

export const myProjects = [
	{
		id: 1,
		title: 'something-swift-svg-logo-generator',
		repoLink:
			'https://github.com/poisoned-eden/something-swift-svg-logo-generator',
		deployedLink: false,
		screenshot: '',
		description:
			'A node.js command line interface that generates an SVG file that fits input requirements. This was created to practice object oriented programming, use of Classes within JS, and Jest Tests.',
	},
	{
		id: 2,
		title: 'echo-social-network-api',
		repoLink: 'https://github.com/poisoned-eden/echo-social-network-api',
		deployedLink: false,
		screenshot: '',
		description:
			'an API for creating users and their friends, and the users thoughts and reactions to them. Built in using Express.js and MongoDB',
	},
	{
		id: 3,
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
		title: 'riddle-me-this-code-quiz',
		repoLink: 'https://github.com/poisoned-eden/riddle-me-this-code-quiz',
		deployedLink:
			'https://poisoned-eden.github.io/riddle-me-this-code-quiz/',
		screenshot: '',
		alt: '',
		description:
			'A code quiz that runs in the browser and tests JavaScript knowledge. Created to test my JS skills in the quest to become a Coding Bootcamp Graduate. Practicing coding assessments will be useful for the job search after graduation too!',
	},
	{
		id: 5,
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
		title: 'picturesque',
		repoLink: 'https://github.com/Robyn-Smith/The-Dev-Society',
		deployedLink: 'https://robyn-smith.github.io/The-Dev-Society/',
		screenshot: picturesqueImg,
		alt: 'Art-deco cinema themed website for searching for movie information and saving them to a watchlist',
		description:
			'Golden Age Cinema themed website for discovering films and saving them to your watchlist.',
	},
];
