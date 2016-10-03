import {BaseElement} from './base-element.js';

export class GoogleMap extends BaseElement {
    
    constructor(centerOfMap, data, id, title) {
        super();
        this.centerOfMap = centerOfMap;
        this.data = data;
        this.id = id;
        this.title = title;
    }
    
    createElement() {
        super.createElement();
        //wait a cycle to allow for google maps to find ID of map, using Func to get context of This.
        setTimeout(() => {
            var map = new window.google.maps.Map(document.getElementById(this.id), {
                zoom: 13,
                center: this.centerOfMap
            });
            //plot location of vehicles on map
            for (let vehicle of this.data) {
                let [lat, long] = vehicle.latLong.split(' ');
                console.log('lat:' + lat);
                let myLatLng = new window.google.maps.LatLng(lat, long);
            
                var marker = new window.google.maps.Marker({
                    position: myLatLng,
                    map: map
                });
                
                marker.setMap(map);
            }
            
        }, 0);

    }
    
    getElementString() {
        return `
        <h4>${this.title}</h4>
        <div style="width:800px; height: 400px;" id="${this.id}"></div>`;
    }
    
}