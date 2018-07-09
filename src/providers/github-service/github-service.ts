import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';
import { User } from '../../models/user.interface';
import { USER_LIST } from '../../mocks/user.mocks';
import { Repository } from '../../models/repository.interface';
import { REPOSITORY_LIST } from '../../mocks/repository.mock';

@Injectable()
export class GithubServiceProvider {

  private baseUrl: string = "https://api.github.com/users";
  private reposUrl: string = "repos";

  constructor(private http: Http) {
  }

  getRepositoryInformation(username: string): Observable<Repository[]>{
    return this.http.get(`${this.baseUrl}/${username}/${this.reposUrl}`)
      .do((data: Response) => console.log(data))
      .map((data: Response) => data.json())
      .catch((error: Response)=> Observable.throw(error.json() || "Server Error."))
  }

  getUserInformation(username: string): Observable<User>{
    return this.http.get(`${this.baseUrl}/${username}`)
      .do((data: Response) => console.log(data))
      .map((data: Response) => data.json())
      .catch((error: Response)=> Observable.throw(error.json() || "Server Error."))
  }

}
