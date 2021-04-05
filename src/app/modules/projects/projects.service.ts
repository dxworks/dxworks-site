import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {RepositoryMeta} from '../../../types/RepositoryMeta';
import {AngularFirestore} from '@angular/fire/firestore';

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
