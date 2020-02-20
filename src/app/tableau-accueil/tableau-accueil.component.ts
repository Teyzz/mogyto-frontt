import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-tableau-accueil',
  templateUrl: './tableau-accueil.component.html',
  styleUrls: ['./tableau-accueil.component.scss']
})
export class TableauAccueilComponent implements OnInit {
  cssClass = '';

  subsFormValue = {
    id: '',
    name: '',
    status: '',
    localisation: ''
  };



  constructor() { }

  ngOnInit(): void {
    window.addEventListener("load", function (event) {
      var map = L.map('map' /* the id of the tag used for map injection */);
      map.setView([44.864403, -0.558767 /*longitude*/], 12 /*zoom*/);
      // --- We add a layer based on OpenStreetMap ---
      L.tileLayer('http://tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
      var marker = L.marker([44.864403, -0.558767])
        .bindPopup("EPSI")
        .addTo(map);
      marker.on("mouseover", function (event) {
        this.openPopup();
      });
      marker.on("mouseout", function (event) {
        this.closePopup();
      });
      //--- We add a new layer to the map that contains some markers ---
      var EPSI = L.marker([44.864403, -0.558767])
        .bindPopup('EPSI'),
        Commande1 = L.marker([44.837789, -0.57918])
          .bindPopup('Mairie De Bordeaux'),
        Commande2 = L.marker([44.8569674, -0.5332514])
          .bindPopup('Cenon'),
        Commande3 = L.marker([44.812023, -0.543784])
          .bindPopup('Bègles');
      L.layerGroup([EPSI, Commande1, Commande2, Commande3])
        .addTo(map);
    });
  }
  // {
  //   // Déclaration de la carte avec les coordonnées du centre et le niveau de zoom.
  //   const myfrugalmap = L.map('frugalmap').setView([50.6311634, 3.0599573], 12);
  //   const myIcon = L.icon({
  //     iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.2.0/images/marker-icon.png'
  //   });
  //   L.marker([50.6311634, 3.0599573], {icon: myIcon}).bindPopup('Je suis un Frugal Marqueur').addTo(myfrugalmap).openPopup();
  //   L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
  //     attribution: 'Frugal Map'
  //   }).addTo(myfrugalmap);
  // }
}


