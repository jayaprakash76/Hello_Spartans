import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  title = 'Sign-in';

  constructor(
    private router: Router,
    private titleService: Title,
    private el: ElementRef,
    private renderer: Renderer2
  ) {}

  ngOnInit() {
    this.titleService.setTitle(this.title);

    // Get references to DOM elements
    const container = this.el.nativeElement.querySelector('#container');
    const registerBtn = this.el.nativeElement.querySelector('#register');
    const loginBtn = this.el.nativeElement.querySelector('#login');

    // Add event listeners using Renderer2
    this.renderer.listen(registerBtn, 'click', () => {
      this.renderer.addClass(container, 'active');
    });

    this.renderer.listen(loginBtn, 'click', () => {
      this.renderer.removeClass(container, 'active');
    });
  }

  email: string = '';
  password: string = '';

  onSubmit() {
    console.log('Email:', this.email);
    console.log('Password:', this.password);
    this.router.navigate(['/']);
  }
}
