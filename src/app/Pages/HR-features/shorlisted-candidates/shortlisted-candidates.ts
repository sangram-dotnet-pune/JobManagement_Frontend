import { CommonModule } from "@angular/common";
import { Component, signal } from "@angular/core";
import { ApplicationApiService } from "../../../core/Services/api.Service/Application.api.Service/application.api.service";

@Component({
  selector: 'app-shortlisted-candidates',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shortlisted-candidates.html',
})
export class ShortlistedCandidates {

  shortlisted = signal<any[]>([]);
  loading = signal(true);

  constructor(private appApi: ApplicationApiService) {}

  ngOnInit() {
    this.appApi.getshortlistedCandidates().subscribe(res => {
      this.shortlisted.set(res);
      this.loading.set(false);
    });
  }
}
