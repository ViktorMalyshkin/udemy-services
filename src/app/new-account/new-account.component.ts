import {Component} from '@angular/core'
import {AccountsService} from '../services/accounts.service'
import {LoggingService} from '../services/logging.service'

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: [LoggingService, AccountsService],
})
export class NewAccountComponent {

  constructor(private loggingService: LoggingService, private accountsService: AccountsService) {
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountsService.addAccount(accountName, accountStatus)
    this.loggingService.logStatesChange(accountStatus)
  }
}
