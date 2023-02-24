import { Component, Input } from '@angular/core';
import { FormControl } from "@angular/forms";



export type InputType = 'text' | 'number' | 'password';


@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {

  @Input() label: string = ''
  @Input() inputControl: FormControl = new FormControl('')
  @Input() type: InputType = 'text'
  @Input() message: string = '';

}
