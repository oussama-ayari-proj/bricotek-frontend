/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { addOutil } from '../fn/outils/add-outil';
import { AddOutil$Params } from '../fn/outils/add-outil';
import { deleteOutil } from '../fn/outils/delete-outil';
import { DeleteOutil$Params } from '../fn/outils/delete-outil';
import { getAllOutils } from '../fn/outils/get-all-outils';
import { GetAllOutils$Params } from '../fn/outils/get-all-outils';
import { getById } from '../fn/outils/get-by-id';
import { GetById$Params } from '../fn/outils/get-by-id';
import { getImageByName } from '../fn/outils/get-image-by-name';
import { GetImageByName$Params } from '../fn/outils/get-image-by-name';
import { modifyOutil } from '../fn/outils/modify-outil';
import { ModifyOutil$Params } from '../fn/outils/modify-outil';
import { uploadImage } from '../fn/outils/upload-image';
import { UploadImage$Params } from '../fn/outils/upload-image';

@Injectable({ providedIn: 'root' })
export class OutilsService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `modifyOutil()` */
  static readonly ModifyOutilPath = '/outils/modifyOutil';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `modifyOutil()` instead.
   *
   * This method doesn't expect any request body.
   */
  modifyOutil$Response(params: ModifyOutil$Params, context?: HttpContext): Observable<StrictHttpResponse<{
}>> {
    return modifyOutil(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `modifyOutil$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  modifyOutil(params: ModifyOutil$Params, context?: HttpContext): Observable<{
}> {
    return this.modifyOutil$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
}>): {
} => r.body)
    );
  }

  /** Path part for operation `uploadImage()` */
  static readonly UploadImagePath = '/outils/addimage';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `uploadImage()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  uploadImage$Response(params: UploadImage$Params, context?: HttpContext): Observable<StrictHttpResponse<{
}>> {
    return uploadImage(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `uploadImage$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  uploadImage(params: UploadImage$Params, context?: HttpContext): Observable<{
}> {
    return this.uploadImage$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
}>): {
} => r.body)
    );
  }

  /** Path part for operation `addOutil()` */
  static readonly AddOutilPath = '/outils/addOutil';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `addOutil()` instead.
   *
   * This method doesn't expect any request body.
   */
  addOutil$Response(params: AddOutil$Params, context?: HttpContext): Observable<StrictHttpResponse<{
}>> {
    return addOutil(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `addOutil$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  addOutil(params: AddOutil$Params, context?: HttpContext): Observable<{
}> {
    return this.addOutil$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
}>): {
} => r.body)
    );
  }

  /** Path part for operation `getImageByName()` */
  static readonly GetImageByNamePath = '/outils/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getImageByName()` instead.
   *
   * This method doesn't expect any request body.
   */
  getImageByName$Response(params: GetImageByName$Params, context?: HttpContext): Observable<StrictHttpResponse<{
}>> {
    return getImageByName(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getImageByName$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getImageByName(params: GetImageByName$Params, context?: HttpContext): Observable<{
}> {
    return this.getImageByName$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
}>): {
} => r.body)
    );
  }

  /** Path part for operation `getById()` */
  static readonly GetByIdPath = '/outils/outilById';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getById()` instead.
   *
   * This method doesn't expect any request body.
   */
  getById$Response(params: GetById$Params, context?: HttpContext): Observable<StrictHttpResponse<{
}>> {
    return getById(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getById(params: GetById$Params, context?: HttpContext): Observable<{
}> {
    return this.getById$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
}>): {
} => r.body)
    );
  }

  /** Path part for operation `getAllOutils()` */
  static readonly GetAllOutilsPath = '/outils/allOutils';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllOutils()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllOutils$Response(params?: GetAllOutils$Params, context?: HttpContext): Observable<StrictHttpResponse<{
}>> {
    return getAllOutils(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAllOutils$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllOutils(params?: GetAllOutils$Params, context?: HttpContext): Observable<{
}> {
    return this.getAllOutils$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
}>): {
} => r.body)
    );
  }

  /** Path part for operation `deleteOutil()` */
  static readonly DeleteOutilPath = '/outils';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteOutil()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteOutil$Response(params: DeleteOutil$Params, context?: HttpContext): Observable<StrictHttpResponse<{
}>> {
    return deleteOutil(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteOutil$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteOutil(params: DeleteOutil$Params, context?: HttpContext): Observable<{
}> {
    return this.deleteOutil$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
}>): {
} => r.body)
    );
  }

}
