export interface TourPackage {
  CreationDate: string;
  Nights: number;
  Payments: {
    PaymentMethod: string,
    TotalAmountPaid: number,
    PaymentDate: string,
    PaymentStatus: string,
  };
  OtherExclusionList: string;
  DestinationId: number;
  Status: boolean;
  OnSale: boolean;
  TotalLeadGenerated: string;
  Child: number;
  ActivityList: string[];
  DiscountedAmount: number;
  HeroBanners: {
    BestSellingHeroBanner: string,
    Portait: string,
    Landscape: string,
  };
  ExclusionList: string[];
  ShowCasePrice: string;
  BasePrice: string;
  Days: number;
  AddedIntoCart: number;
  PackageTitle: string;
  Cancel: {
    CancellationReason: string,
    RefundAmount: string,
    RefundConditions: string,
  };
  Rating: string;
  IsValid: boolean;
  OtherInclusionList: string;
  ReleaseDate: string;
  Itineary: ItineraryDay[];
  SellingPrice: string;
  PackageId: string;
  PriceType: string;
  Pax: string;
  DiscountCode: string;
  SuitableMonths: string[];
  ExpiryDate: string;
  DestinationName: string;
  PercentageOff: string;
  Type: string;
  InclusionList: string[];
  TransferType: string;
  CancellationPolicy: string;
  PackageName: string;
  Slug: string;
  HospitalRatingList: number[];
  UpdatedBy: UpdatedByEntry[];
  HotelRatingList: number[];
  Category: string;
}

export interface ItineraryDay {
  Descriptions: string;
  ActivityName: string;
  packageHighLightFlag: boolean;
  ActivityImg: string;
  DayTitle: string;
  Day: number;
  Hotel: HotelInfo;
}

export interface HotelInfo {
  NearByFacilities: string[];
  HotelName: string;
  HotelRatting: number;
  HotelImg: string;
}

export interface UpdatedByEntry {
  TimeStamp: string;
  Updater: string;
}
