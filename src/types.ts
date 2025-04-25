export interface imageObject {
  id: string;
  alt_description: string;
  description?: string;
  urls: {
    small: string;
    regular: string;
  };
}

export type submitData = {
  field: '';
};
