 import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Meta, MetaDefinition } from '@angular/platform-browser';
@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent implements OnInit  {
  title = 'Help Center';
 
  constructor(private titleService:Title) {
  }
 
  ngOnInit() {
    this.titleService.setTitle(this.title);
  }
  FAQs = [
    { question: 'How do I reset my password?', answer: 'To reset your password, go to the "Reset Password" page and follow the instructions.' },
    { question: 'How can I contact customer support?', answer: 'You can contact our customer support team by emailing support@yourwebsite.com.' },
    // Add more FAQ items as needed
  ];

  filteredFAQs = [...this.FAQs];

  searchQuestions(query: string) {
    if (query.trim() === '') {
      this.filteredFAQs = [...this.FAQs];
    } else {
      this.filteredFAQs = this.FAQs.filter(faq =>
        faq.question.toLowerCase().includes(query.toLowerCase())
      );
    }
  }
}
