export interface productFeatures{
    featureName:string,
    featureAddedDate:string,
    featureDescription?:string
  
  }
  
  
  export interface Product<productFeatures> {
      id: number | null;
      productName: string;
      productCode: string;
      description?: string;
      productFeatures?: productFeatures[];
  }
  
  
   export const products: Product<productFeatures>[] = [
          {
              id: 1,
              productName: 'Netgear Cable Modem',
              productCode: 'CM700',
              description: 'Netgear Cable Modem compatible with all cables',
              productFeatures: [{
                featureName:"",
                featureAddedDate:"",
                featureDescription:""
              }]
          },
          
      ];