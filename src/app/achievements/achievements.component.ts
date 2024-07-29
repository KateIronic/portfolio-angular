import { Component, OnInit, HostListener } from '@angular/core';

interface Shape {
  id: number;
  cx: number;
  cy: number;
  r: number;
  color: string;
}

@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.component.html',
  standalone: true,
  styleUrls: ['./achievements.component.scss'],
})
export class AchievementsComponent implements OnInit {
  shapes: Shape[] = [];
  shapeCount = 10;

  ngOnInit(): void {
    this.initializeShapes();
  }

  initializeShapes(): void {
    for (let i = 0; i < this.shapeCount; i++) {
      this.shapes.push({
        id: i,
        cx: Math.random() * window.innerWidth,
        cy: Math.random() * window.innerHeight,
        r: Math.random() * 20 + 10,
        color: this.getRandomColor(),
      });
    }
  }

  getRandomColor(): string {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.shapes.forEach((shape) => {
      shape.cx = Math.random() * window.innerWidth;
      shape.cy = Math.random() * window.innerHeight;
    });
  }
}