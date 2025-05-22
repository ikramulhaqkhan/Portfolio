import { Component } from '@angular/core';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  link: string;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'E-commerce Platform',
      description: 'A full-stack e-commerce solution with user authentication and payment integration.',
      technologies: ['Angular', 'Node.js', 'MongoDB'],
      link: 'https://github.com'
    },
    {
      title: 'Task Management App',
      description: 'A real-time task management application with collaborative features.',
      technologies: ['React', 'Firebase', 'Material-UI'],
      link: 'https://github.com'
    },
    {
      title: 'Portfolio Website',
      description: 'A responsive portfolio website built with modern technologies.',
      technologies: ['Angular', 'SCSS', 'TypeScript'],
      link: 'https://github.com'
    }
  ];
}
