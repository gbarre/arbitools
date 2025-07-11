export interface Topic {
  title: string;
  content: string;
  link?: string;
  deleted?: boolean;
  added?: boolean;
  discipline?: string;
}

export interface Rule {
  name: string;
  topics: Topic[];
}

export interface Rules {
  [version: string]: Rule;
}
