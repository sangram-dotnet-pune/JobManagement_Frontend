import { Pipe, PipeTransform } from "@angular/core";
import { ApplicationResponse } from "../../../core/Interface/Job/ApplicationResponse";
import { JobApplication } from "../../../core/Interface/Job/Job";

@Pipe({
    name: 'applicantFilter',
    standalone: true
})
export class ApplicantFilterPipe implements PipeTransform {
    transform(applications:JobApplication[], searchTerm:string): JobApplication[] {
        if(!applications || !searchTerm) {
            return applications;
        }
        const term=searchTerm.toLowerCase().trim();
        return applications.filter(app=>
            app.applicantName.toLowerCase().includes(term) ||
            app.email.toLowerCase().includes(term) 
        );
    }
}