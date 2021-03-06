import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { EmitterService } from '../common/emitter.service';

//import * as regions from '../../assets/geojson/regions.json';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable()
export class GlobeService {

  constructor(private http: Http) { }

  private handleError(error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    EmitterService.error(errMsg, 'GlobeService');
    return Observable.throw(errMsg);
  }

  // getRegions(callback): any {
  //   let source = this.http.get('caas.json');
  //   source.subscribe(res => {

  //     let result = res; //.json();
  //     if (!result) {
  //       console.log(result)
  //       callback && callback(result);
  //     } else {
  //       this.handleError(res);
  //     }

  //   }, this.handleError);

  //   return source;
  // }

  getRegions() {
    let model = new Observable(observer => {
      setTimeout(() => {
        observer.next([]);
      }, 10);
      setTimeout(() => {
        observer.complete();
      }, 10);
    });
    return model;
  }

}
