import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements AfterViewInit {
  navItems = [
    { path: 'home', label: 'Home' },
    { path: 'about', label: 'About' },
    { path: 'skills', label: 'Skills' },
    { path: 'projects', label: 'Projects' },
    { path: 'contact', label: 'Contact' }
  ];
  
  activeSection: string = 'home';

  scrollToSection(sectionId: string) {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 70,  // Adjust 70px for fixed navbar
        behavior: 'smooth'
      });
    }
  }

  ngAfterViewInit() {
    const sections = document.querySelectorAll('section');

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.activeSection = entry.target.id;
        }
      });
    }, { threshold: 0.6 }); // Increased threshold for faster switch

    sections.forEach(section => observer.observe(section));
  }
}
