import { LightningElement, track } from 'lwc';
import serachAccount from '@salesforce/apex/SearchController.SearchByName';

// datatable columns
const columns = [
{
    label: 'Name',
    fieldName: 'Name',
    type: 'url',
    typeAttributes: {label: { fieldName: 'Name' }, target: '_blank'}
}, {
    label: 'Phone',
    fieldName: 'Phone',
    type: 'text',

}, {
    label: 'WebSite',
    fieldName: 'WebSite',
    type: 'text',
}, 
];
export default class LWCLightningOut extends LightningElement {
@track searchData;
@track columns = columns;
@track SearchAccountName;

handleAccountName(event) {
            this.SearchAccountName = event.detail.value;
            serachAccount({searchKey : this.SearchAccountName})
            .then(result => {
            this.searchData = result;
        })
    }
}