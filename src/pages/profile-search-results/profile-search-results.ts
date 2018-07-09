import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GithubServiceProvider } from '../../providers/github-service/github-service';
import { User } from '../../models/user.interface';
import { Repository } from '../../models/repository.interface';

@IonicPage({
  segment: 'profile/results/:username'
})
@Component({
  selector: 'page-profile-search-results',
  templateUrl: 'profile-search-results.html',
})
export class ProfileSearchResultsPage {

  username: string;
  user: User;
  repositories: Repository[];

  constructor(private gitHub: GithubServiceProvider, private navCtrl: NavController, private navParams: NavParams) {
  }

  getUserInformation(){
    this.gitHub.getUserInformation(this.username).subscribe((data:User) => this.user = data);
    this.gitHub.getRepositoryInformation(this.username).subscribe((data: Repository[]) => this.repositories = data);
  }

  ionViewWillLoad() {
    this.username = this.navParams.get('username');
    if(this.username){
      this.getUserInformation();
    }
  }

}
