import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { IClock } from '../../interfaces/clock';
import { differenceInMonths, differenceInDays, differenceInHours, differenceInMinutes, differenceInSeconds } from 'date-fns';

@Component({
  selector: 'app-clock',
  standalone: false,
  templateUrl: './clock.component.html',
  styleUrl: './clock.component.sass'
})
export class ClockComponent {
  clock: IClock | undefined;

  @Input({ 'required': true })
  dateDate: any;


  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    setInterval(() => {
      this.updateClock();
    }, 1000)
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class

  }
  updateClock() {

    const dataAtual = new Date()
    dataAtual.toLocaleString('pt-BR', { timeZone: 'America/Fortaleza' })
    const diferencaMeses = differenceInMonths(dataAtual, this.dateDate)
    const diferencaDias = differenceInDays(dataAtual, this.dateDate) % 30
    const diferencaHoras = differenceInHours(dataAtual, this.dateDate) % 24

    const diferencaMinutos = differenceInMinutes(dataAtual, this.dateDate) % 60
    const diferencaSegundos = differenceInSeconds(dataAtual, this.dateDate) % 60


    this.clock = {
      month: diferencaMeses,
      hour: diferencaHoras,
      day: diferencaDias,
      minute: diferencaMinutos,
      second: diferencaSegundos

    }

    this.cdr.detectChanges()


  }
}
