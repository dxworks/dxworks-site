import * as admin from 'firebase-admin';
import * as functions from 'firebase-functions';
import * as axios from 'axios';
import {DxworksSiteDetails, RepositoryMeta} from '../../src/types/RepositoryMeta';

admin.initializeApp();
admin.firestore().settings({ignoreUndefinedProperties: true});

function getRepositoryMeta(rm: RepositoryMeta, dxworksSiteDetails: DxworksSiteDetails): RepositoryMeta {
  return {
    name: rm.name,
    full_name: rm.name,
    displayName: dxworksSiteDetails.displayName,
    html_url: rm.html_url,
    description: dxworksSiteDetails.description || rm.description,
    updated_at: rm.updated_at,
    default_branch: rm.default_branch,
    language: rm.language,
    disabled: rm.disabled,
    archived: rm.archived,
    private: rm.private,
    categories: dxworksSiteDetails.categories,
    codeOwners: dxworksSiteDetails.codeOwners,
    technologies: dxworksSiteDetails.technologies,
    version: dxworksSiteDetails.version,
    docs: dxworksSiteDetails.docs,
    site: dxworksSiteDetails.site,
    relevance: dxworksSiteDetails.relevance,
    repos: dxworksSiteDetails.repos
  };
}

exports.updateRepositoryInformation = functions.region('europe-west1').pubsub.schedule('every 30 minutes').onRun(() => {
  return axios.default.get(`https://api.github.com/orgs/dxworks/repos`).then(
    response => {
      const repositoryMeta = (response.data as RepositoryMeta[]).filter(rm => !(rm.disabled || rm.archived || rm.private));
      console.log('Updating repositories');
      return admin.firestore().collection('repos').get()
        .then(repo => Promise.all(repo.docs.map(doc => doc.ref.delete())))
        .then(() => repositoryMeta.forEach(rm =>
          axios.default.get(`https://raw.githubusercontent.com/${rm.full_name}/${rm.default_branch}/dxworks-site.json`)
            .then(res => admin.firestore().collection('repos').doc(rm.name).set(getRepositoryMeta(rm, res.data)))
            .then(() => console.log(`Updated ${rm.full_name}`))
            .catch(err => console.log(`Could not add ${rm.full_name}`, err))
        ));
    }).catch(console.error);
});
