export interface Developer {
  name: string;
  link: string;
}

export interface DxworksSiteDetails {
  displayName: string;
  description: string;
  categories: string[];
  codeOwners: Developer[];
  technologies: string[];
  version: string;
  docs: string;
  site: string;
  relevance: number;
  repos: string[];
}

export interface RepositoryMeta extends DxworksSiteDetails {
  name: string;
  full_name: string;
  html_url: string;
  updated_at: string;
  default_branch: string;
  language: string;
  disabled: boolean;
  archived: boolean;
  private: boolean;
}
