import {Component, OnInit} from '@angular/core';
import {Chart, Color, ChartType, Label, ChartDataSets, ChartOptions, MultiDataSet} from 'chart.js';
import {GeneradoresService} from '../services/generadores.service';


@Component({
    selector: 'app-tab1',
    templateUrl: 'tab1.page.html',
    styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
    arreglo1:any[] = [];
    info1: any[] = [];
    labels1: any[] = [];


    arreglo: any[] = [];
    info: any[] = [];
    labels: any[] = [];

    constructor(private _generadorService: GeneradoresService) {
    }

    ngOnInit() {
        this._generadorService.getDetallesContenedor().subscribe(
            response =>{
                console.log(response);
                this.getNombresContenedores(response);
                this.getLabelContenedores(response);
                this.getDataContenedores(response);
                this.chartVerticalContenedores(response);
            }
        )

        this._generadorService.getDetallesGenerador().subscribe(
            response => {
                //console.log(response);

                this.getNombres(response);
                this.getLabels(response);
                this.getData(response);
                this.chartVertical(response);
            }
        );

    }

    getNombresContenedores(data:any){
        for (let i = 0; i < data.infoGeneral.length; i++) {
            if (data.infoGeneral[i].data.length != 0) {
                this.arreglo1[i] = data.infoGeneral[i].contenedor;
            }
        }
    }
    getLabelContenedores(data:any){
        for (let j = 0; j < data.arregloFechas.length; j++) {
            this.labels1[j] = data.arregloFechas[j].fechaGrafica;
        }
    }
    getDataContenedores(data:any){
        for (let t = 0; t < data.infoGeneral.length; t++) {
            if (data.infoGeneral[t].data.length != 0) {
                for (let p = 0; p < data.infoGeneral[t].data.length; p++) {
                    this.info1[p] = data.infoGeneral[t].data[p].energia;
                }
            }

        }
    }
    chartVerticalContenedores(data:any){
        for (let t = 0; t < data.infoGeneral.length; t++) {
            if (data.infoGeneral[t].data.length != 0) {
                for (let p = 0; p < data.infoGeneral[t].data.length; p++) {
                    this.info1[p] = data.infoGeneral[t].data[p].energia;
                    var ctx = document.getElementById('chart2');
                    var myChart = new Chart(ctx, {
                        type: 'bar',
                        data: {
                            labels: this.labels1,
                            datasets: [{
                                label: this.arreglo1,
                                data: this.info1,
                                backgroundColor: [
                                    // Chart.instance.data
                                    this.backgroundColor(this.info1[p]= data.infoGeneral[t].data[p].energia),
                                ],
                                borderColor: [
                                    //this.backgroundColor( this.info[p])
                                    this.backgroundColor(this.info1[p]= data.infoGeneral[t].data[p].energia)

                                ],
                                borderWidth: 1
                            }]
                        },
                        options: {
                            scales: {
                                yAxes: [{
                                    ticks: {
                                        beginAtZero: true
                                    }
                                }]
                            }
                        }
                    });
                }
            }

        }

    }






















    doRefresh(event) {
        setTimeout(() => {
            this.ngOnInit();
            event.target.complete();
        }, 1000);
    }

    getNombres(data: any) {

        for (let i = 0; i < data.infoGeneral.length; i++) {
            if (data.infoGeneral[i].data.length != 0) {
                this.arreglo[i] = data.infoGeneral[i].generador;
            }
        }
        //console.log(this.arreglo);
    }

    getLabels(data: any) {
        for (let j = 0; j < data.arregloFechas.length; j++) {
            this.labels[j] = data.arregloFechas[j].fechaGrafica;
        }
        //console.log(this.labels);
    }

    getData(data: any) {
        for (let t = 0; t < data.infoGeneral.length; t++) {
            if (data.infoGeneral[t].data.length != 0) {
                for (let p = 0; p < data.infoGeneral[t].data.length; p++) {
                    this.info[p] = data.infoGeneral[t].data[p].energia;
                    //this.backgroundColor(this.info[p]= data.infoGeneral[t].data[p].energia)
                }
            }

        }
        //console.log(this.info);

    }

    backgroundColor(data: any) {

        if (data <= 40) {
            //console.log('<40');
            return 'rgba(255, 99, 132, 0.2)';
        } else {
            if (data <= 70) {
                //console.log('<70');
                return 'rgba(54, 162, 235, 0.2)';
            } else {
                //console.log('>90');
                return 'rgba(255, 206, 86, 0.2)';
            }
        }
    }

    chartVertical(data: any) {
        for (let t = 0; t < data.infoGeneral.length; t++) {
            if (data.infoGeneral[t].data.length != 0) {
                for (let p = 0; p < data.infoGeneral[t].data.length; p++) {
                    this.info[p] = data.infoGeneral[t].data[p].energia;
                    var ctx = document.getElementById('chart');
                    var myChart = new Chart(ctx, {
                        type: 'bar',
                        data: {
                            labels: this.labels,
                            datasets: [{
                                label: this.arreglo,
                                data: this.info,
                                backgroundColor: [
                                   // Chart.instance.data
                                    this.backgroundColor(this.info[p]= data.infoGeneral[t].data[p].energia),
                                ],
                                borderColor: [
                                    //this.backgroundColor( this.info[p])
                                    this.backgroundColor(this.info[p]= data.infoGeneral[t].data[p].energia)

                                ],
                                borderWidth: 1
                            }]
                        },
                        options: {
                            scales: {
                                yAxes: [{
                                    ticks: {
                                        beginAtZero: true
                                    }
                                }]
                            }
                        }
                    });
                }
            }

        }

    }
}
