import {Page} from './framework/page.js';
import {DataTable} from './ui/data-table.js';
import {application} from './app.js';

export class DronesPage extends Page {
    
    constructor() {
        super('Drones');
    }
    
    createElement() {
        super.createElement();
        //air time hours is converted to lowercase and cant be found on data-table.
        let headers = 'License Model AirTimeHours'.split(' ');
        let t = new DataTable(headers, application.dataService.drones);
        t.appendToElement(this.element);

    }
    
    getElementString() {
        return '<div style="margin: 20px;"><h3>Cars</h3></div>';
    }
}