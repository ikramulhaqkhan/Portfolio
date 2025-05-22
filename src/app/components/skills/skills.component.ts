import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

import { 
  trigger,
  stagger,
  query,
  style,
  animate,
  transition,
  useAnimation
} from '@angular/animations';
// component.ts
import { faAngular, faReact, faGithub, faBootstrap, } from '@fortawesome/free-brands-svg-icons';
import * as simpleIcons from 'simple-icons';
import {
  faPuzzlePiece,     // PrimeNG
  faFeatherAlt,      // Tailwind CSS
  faProjectDiagram,  // RxJS
  faPencilRuler      // UI/UX Design
} from '@fortawesome/free-solid-svg-icons';


const cardEnter = trigger('cardAnimation', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateY(30px) scale(0.95)' }),
    animate('600ms cubic-bezier(0.4, 0, 0.2, 1)', 
      style({ opacity: 1, transform: 'translateY(0) scale(1)' }))
  ])
]);

const staggerAnimation = trigger('staggerAnimation', [
  transition(':enter', [
    query('.skill-card', [
      style({ opacity: 0, transform: 'translateY(30px)' }),
      stagger('100ms', [
        animate('500ms 300ms ease-out')
      ])
    ])
  ])
]);

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  animations: [cardEnter, staggerAnimation]
})

export class SkillsComponent {
  constructor(private sanitizer: DomSanitizer) {}

    faAngular = faAngular;
  faReact = faReact;
  faGithub = faGithub;
  faBootstrap = faBootstrap;
  faFeatherAlt = faFeatherAlt;
  faProjectDiagram = faProjectDiagram;
  faPencilRuler = faPencilRuler;
  faPuzzlePiece = faPuzzlePiece;
skills = [
      {
        name: 'Angular',
        level: 90,
        iconSvg: this.getSafeSvg(simpleIcons.siAngular),
        experience: 'Expert: 4+ years'
      },
      {
        name: 'TypeScript',
        level: 85,
        iconSvg: this.getSafeSvg(simpleIcons.siTypescript),
        experience: 'Advanced: 3 years'
      },
      {
        name: 'ReactJS',
        level: 80,
        iconSvg: this.getSafeSvg(simpleIcons.siReact),
        experience: 'Advanced: 3 years'
      },
      {
        name: 'PrimeNG',
        level: 85,
        iconSvg: this.getSafeSvg(simpleIcons.siPrimeng),
        experience: 'Advanced: 3 years'
      },
      {
        name: 'RxJS',
        level: 75,
        iconSvg: this.getSafeSvg(simpleIcons.siReactivex),
        experience: 'Intermediate: 2 years'
      },
      {
        name: 'Bootstrap',
        level: 90,
        iconSvg: this.getSafeSvg(simpleIcons.siBootstrap),
        experience: 'Expert: 4+ years'
      },
      {
        name: 'Tailwind CSS',
        level: 85,
        iconSvg: this.getSafeSvg(simpleIcons.siTailwindcss),
        experience: 'Advanced: 3 years'
      },
      {
        name: 'GitHub',
        level: 85,
        iconSvg: this.getSafeSvg(simpleIcons.siGithub),
        experience: 'Advanced: 3 years'
      },
      {
        name: 'UI/UX Design',
        level: 95,
        iconSvg: this.getSafeSvg(simpleIcons.siFigma), // Used Figma for UI/UX
        experience: 'Expert: 5 years'
      }
    ];

  getColoredIcon(svg: string, color: string): string {
    return svg?.replace('<svg', `<svg fill="${color}" width="24" height="24"`);
  }
  getSafeSvg(icon: { svg: string, hex: string }): SafeHtml {
    const svg = icon.svg.replace(
      '<svg',
      `<svg fill="#${icon.hex}" width="45" height="45"`
    );
    return this.sanitizer.bypassSecurityTrustHtml(svg);
  }

  getSkillColor(skillName: string): string {
  const colors: { [key: string]: string } = {
    Angular: '#dd0031',
    ReactJS: '#61DAFB',
    TypeScript: '#007ACC',
    PrimeNG: '#41B883',
    RxJS: '#B7178C',
    Bootstrap: '#563d7c',
    'Tailwind CSS': '#38bdf8',
    GitHub: '#181717',
    'UI/UX Design': '#FF4081'
  };
  return colors[skillName] || '#0288D1'; // default
}

}
