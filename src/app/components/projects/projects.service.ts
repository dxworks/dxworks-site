import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {AngularFirestore} from '@angular/fire/firestore';
import {RepositoryMeta} from '../../../types/RepositoryMeta';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(private firestore: AngularFirestore) {
  }

  getProjects(): Observable<RepositoryMeta[]> {
    return this.firestore.collection('repos').valueChanges() as Observable<RepositoryMeta[]>;
  }
}
