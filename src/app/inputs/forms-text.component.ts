import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'flyaway-forms-text',
  template: `
    <div class="form-group">
      <label></label>
      <input type="text"/>
    </div>
  `
})
export class FormsTextComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
