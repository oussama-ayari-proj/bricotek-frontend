/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Outil } from '../../models/outil';

export interface ModifyOutil$Params {
  outilsId: string;
  outil: Outil;
}

export function modifyOutil(http: HttpClient, rootUrl: string, params: ModifyOutil$Params, context?: HttpContext): Observable<StrictHttpResponse<{
}>> {
  const rb = new RequestBuilder(rootUrl, modifyOutil.PATH, 'put');
  if (params) {
    rb.query('outilsId', params.outilsId, {});
    rb.query('outil', params.outil, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<{
      }>;
    })
  );
}

modifyOutil.PATH = '/outils/modifyOutil';
